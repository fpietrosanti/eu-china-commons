#!/usr/bin/env node
// Multi-LLM coverage sweep through a local FreeLLMAPI router (keyless providers only).
//
// Stages (each cached in data/freellm/, re-run resumes):
//   1. queries  : a panel of free models (Qwen, GPT-OSS, Nemotron, dots3) expands each research
//                 topic into EN + ZH web-search queries (query diversity = coverage).
//   2. search   : every query goes to POST /v1/search (Parallel, keyless). Hits whose URL is
//                 already anywhere in the repo are dropped.
//   3. classify : model A judges each new hit from title+snippet only (no outside knowledge);
//                 relevant hits get a blind second opinion from a different model B.
//   4. report   : data/freellm/leads.json + docs/FREELLM-SWEEP.md. Every lead is evidence level D
//                 (unverified lead) until Claude/Fabio verify it against the primary source.
//
// Usage: FREELLM_KEY=... node tools/freellm_sweep.js [stage|all]   (default all)
//        FREELLM_URL defaults to http://127.0.0.1:3001
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'freellm');
const BASE = process.env.FREELLM_URL || 'http://127.0.0.1:3001';
const KEY = process.env.FREELLM_KEY;
if (!KEY) { console.error('FREELLM_KEY missing'); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });

// Keyless models judged usable in the 18 Nov 2026 probe (platform in brackets).
const PANEL = [
  'qwen3.5-397b',          // OVH  — Alibaba, CN
  'gpt-oss-120b',          // OVH  — OpenAI open-weight, US
  'nemotron-3-ultra-550b', // Kilo — NVIDIA, US
  'dots3-note-preview',    // Kilo — rednote hi lab, CN
  'qwen3.8-27b',           // OVH
  'llama-3.3-70b',         // OVH  — Meta, US
  'mistral-small-3.2-24b', // OVH  — Mistral, EU
];
const CLASSIFIERS = ['gpt-oss-120b', 'qwen3.5-397b', 'nemotron-3-ultra-550b', 'qwen3.8-27b', 'mistral-small-3.2-24b'];

const TOPICS = [
  ['cn-national-policy', 'Chinese national (central government) policies, plans and standards that promote open source software, open source ecosystems or 开源 governance (State Council, MIIT, CAC, NDRC, MOST, SASAC), including the 15th Five-Year Plan (2026-2030)'],
  ['cn-local-policy', 'Chinese provincial and municipal action plans, implementation schemes and subsidies for open source (开源) ecosystems, e.g. Shanghai, Beijing, Guangdong, Zhejiang, Jiangsu, Sichuan, Hubei, Hunan, Fujian, Shandong, Shenzhen, Hangzhou, Wuhan'],
  ['cn-pa-reuse', 'Chinese public administrations reusing or sharing open source software and code (政务 开源, government code sharing platforms, openEuler/OpenHarmony in e-government)'],
  ['cn-foundations', 'Chinese open source foundations and communities: OpenAtom Foundation, KAIYUANSHE, Gitee/AtomGit, CCF ODTC, their governance, funding, members and projects'],
  ['cn-industrial-stacks', 'Chinese industrial open source stacks: openEuler, OpenHarmony, OpenAnolis, RISC-V, open-weight AI models (Qwen, DeepSeek, GLM), automotive and industrial internet open source, adoption figures'],
  ['cn-funding', 'Public and corporate funding of open source in China: government funds, awards, subsidies, NSFC/MOST programmes, corporate donations to OpenAtom'],
  ['eu-policy', 'EU and member-state open source policies and strategies 2024-2026: EU Open Source Strategy, Tech Sovereignty, Interoperable Europe Act, Cyber Resilience Act and open source stewards, national OSPOs'],
  ['eu-pa-reuse', 'European public administrations reusing and sharing open source software: OSOR, code.europa.eu, openCode, national code repositories, Digital Commons EDIC (DC-EDIC)'],
  ['eu-industrial-stacks', 'European industrial open source stacks: Eclipse Foundation (SDV, Oniro), Catena-X / Eclipse Tractus-X, Gaia-X, IPCEI-CIS, EuroStack, open-weight AI (Mistral, EuroLLM), RISC-V in Europe'],
  ['eu-funding', 'Public funding of open source in Europe: NGI, Sovereign Tech Agency/Fund, Prototype Fund, NLnet, Horizon Europe, Digital Europe, national funds for open source maintenance'],
  ['eu-cn-cooperation', 'EU-China and member state-China cooperation on open source, digital standards, ICT and digital dialogues, joint research calls, Sino-European open source events and communities'],
  ['literature', 'Academic and think-tank literature comparing European and Chinese open source policy, digital commons, digital sovereignty and techno-nationalism (papers, reports 2022-2026)'],
  ['geopolitics-risk', 'Risks and controversies around open source between China, EU and US: export controls, RISC-V restrictions, sanctions, US congressional letters on OpenHarmony/RISC-V, supply chain security'],
  ['macao-lusophone', 'Macao and Portuguese-speaking countries channel for digital/open source cooperation between China and Europe (Forum Macao, Macao SAFP, Portugal)'],
];

// ---------- helpers ----------
const sleep = ms => new Promise(r => setTimeout(r, ms));
const readJ = (f, d) => { try { return JSON.parse(fs.readFileSync(path.join(OUT, f), 'utf8')); } catch { return d; } };
const writeJ = (f, v) => fs.writeFileSync(path.join(OUT, f), JSON.stringify(v, null, 1));
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const runs = [];

function normUrl(u) {
  try {
    const x = new URL(u.trim());
    let p = x.pathname.replace(/\/{2,}/g, '/').replace(/\/+$/, '');
    return (x.hostname.replace(/^www\./, '') + p + (x.search || '')).toLowerCase();
  } catch { return u.trim().toLowerCase(); }
}

function knownUrls() {
  const set = new Set();
  const re = /https?:\/\/[^\s"'<>\)\]`|,]+/g;
  const walk = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (['.git', 'node_modules', 'site', 'freellm'].includes(e.name)) continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(md|json|tsv|txt|csv|js|html|yml)$/i.test(e.name)) {
        const st = fs.statSync(p); if (st.size > 60e6) continue;
        for (const m of fs.readFileSync(p, 'utf8').match(re) || []) set.add(normUrl(m.replace(/[.;:]+$/, '')));
      }
    }
  };
  walk(ROOT);
  return set;
}


function repoText() {
  let out = '';
  const walk = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (['.git', 'node_modules', 'site', 'freellm', 'registry', '.cache'].includes(e.name)) continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(md|json|tsv|txt|html)$/i.test(e.name) && e.name !== 'FREELLM-SWEEP.md' && fs.statSync(p).size < 30e6) out += fs.readFileSync(p, 'utf8').toLowerCase() + '\n';
    }
  };
  walk(ROOT);
  return out.replace(/\s+/g, ' ') + ' ' + out.replace(/\s/g, '');
}

async function api(pathname, body, timeoutMs = 180000) {
  const r = await fetch(BASE + pathname, {
    method: 'POST', signal: AbortSignal.timeout(timeoutMs),
    headers: { Authorization: `Bearer ${KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const t = await r.text();
  let j; try { j = JSON.parse(t); } catch { j = { error: { message: t.slice(0, 200) } }; }
  if (!r.ok) { const e = new Error(`${r.status} ${j.error?.message || ''}`.slice(0, 300)); e.status = r.status; throw e; }
  return j;
}

// Ask a model, with retry/backoff; on persistent failure rotate to the next model in `pool`.
async function chat(pool, startIdx, messages, maxTokens = 4000) {
  for (let attempt = 0; attempt < Math.max(5, pool.length * 2); attempt++) {
    const model = pool[(startIdx + attempt) % pool.length];
    try {
      const j = await api('/v1/chat/completions', { model, messages, max_tokens: maxTokens, temperature: 0.3 });
      const msg = j.choices?.[0]?.message || {};
      const content = msg.content || '';
      runs.push({ model, served: j.model, tokens: j.usage?.total_tokens || 0 });
      if (content.trim()) return { model, served: j.model, content };
    } catch (e) {
      log('  !', model, e.message.slice(0, 120));
      await sleep(e.status === 429 ? 45000 : 10000);
    }
  }
  return null;
}

// Extract the outermost parseable JSON of the wanted type ('{' or '[') from a model reply.
// Reasoning models may think before answering, so fenced blocks and the tail are tried first.
function lastJson(text, want = '{') {
  const close = want === '[' ? ']' : '}';
  const tryOuter = t => {
    const starts = []; for (let i = 0; i < t.length && starts.length < 60; i++) if (t[i] === want) starts.push(i);
    const ends = []; for (let i = t.length - 1; i >= 0 && ends.length < 20; i--) if (t[i] === close) ends.push(i);
    for (const s of starts) for (const e of ends) { if (e <= s) break; try { return JSON.parse(t.slice(s, e + 1)); } catch { /* next */ } }
    return null;
  };
  const fences = [...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/g)].map(m => m[1]).reverse();
  for (const f of fences) { const j = tryOuter(f); if (j) return j; }
  return tryOuter(text) ?? tryOuter(text.slice(-20000));
}

// ---------- stage 1: query expansion ----------
async function stageQueries() {
  const q = readJ('queries.json', {});
  const panel = PANEL.slice(0, 4);
  for (const [id, desc] of TOPICS) {
    q[id] = q[id] || { desc, by: {} };
    await Promise.all(panel.map(async (model, i) => {
      if (q[id].by[model]) return;
      const r = await chat([model], 0, [{ role: 'user', content:
        `You help a research observatory map open source policy in Europe and China. Topic:\n"${desc}"\n\n` +
        `Write 6 precise web search queries in English and 6 in Simplified Chinese that would surface PRIMARY sources ` +
        `(official documents, government sites, foundation pages, reports, papers) on this topic, favouring 2024-2026 and ` +
        `specific names, programmes and document titles rather than generic phrases. ` +
        `Reply with JSON only: {"en":[...],"zh":[...]}` }], 3000);
      const j = r && lastJson(r.content);
      if (j && (j.en || j.zh)) { q[id].by[model] = [...(j.en || []), ...(j.zh || [])].filter(s => typeof s === 'string').slice(0, 12); log('queries', id, model, q[id].by[model].length); }
      else log('queries', id, model, 'FAILED');
    }));
    writeJ('queries.json', q);
  }
  return q;
}

// ---------- stage 2: search ----------
async function stageSearch() {
  const q = readJ('queries.json', {});
  const hits = readJ('hits.json', { done: {}, hits: {} });
  for (const k of Object.keys(hits.done)) if (hits.done[k] === -1) delete hits.done[k]; // retry failed queries
  const known = knownUrls();
  log('known urls in repo:', known.size);
  for (const [id] of TOPICS) {
    const all = new Map();
    for (const [model, list] of Object.entries(q[id]?.by || {})) for (const s of list) {
      const k = s.trim().toLowerCase(); if (!all.has(k)) all.set(k, { q: s.trim(), models: [] }); all.get(k).models.push(model);
    }
    for (const { q: query, models } of all.values()) {
      const key = id + '|' + query;
      if (hits.done[key]) continue;
      let res = null;
      for (let a = 0; a < 3 && !res; a++) {
        try { res = await api('/v1/search', { query, max_results: 10, engine: 'parallel-search' }, 90000); }
        catch (e) { log('  ! search', e.message.slice(0, 100)); await sleep(e.status === 429 ? 120000 : 8000); }
      }
      if (!res) { // anonymous search quota exhausted: keep the query pending, pause, move on
        log('  search paused 15 min (rate limit)'); await sleep(15 * 60000); continue;
      }
      hits.done[key] = (res.results || []).length;
      for (const r of res?.results || []) {
        const n = normUrl(r.url);
        if (known.has(n)) { hits.done[key + '|known'] = (hits.done[key + '|known'] || 0) + 1; continue; }
        if (!hits.hits[n]) hits.hits[n] = { url: r.url, title: r.title, snippet: (r.content || '').slice(0, 700), topics: [], queries: [], query_models: [] };
        const h = hits.hits[n];
        if (!h.topics.includes(id)) h.topics.push(id);
        if (h.queries.length < 5) h.queries.push(query);
        for (const m of models) if (!h.query_models.includes(m)) h.query_models.push(m);
      }
      writeJ('hits.json', hits);
      log('search', id, hits.done[key], query.slice(0, 60));
      await sleep(6000);
    }
  }
  return hits;
}

// ---------- stage 3: classify (A) + blind second opinion (B) ----------
const SCHEMA = `For EACH item return an object: {"i":<index>,"relevant":true|false,"kind":"policy|plan|standard|initiative|foundation|funding|case|stack|cooperation|literature|news|other","side":"EU|CN|EU-CN|other","level":"supranational|national|regional|local|organisation|none","primary":true|false,"title_en":"<short English title>","issuer":"<issuing body or publisher, or empty>","date":"<YYYY or YYYY-MM if visible, else empty>","why":"<one short sentence>"}.\n` +
  `"relevant" = useful evidence for a study of open source / digital commons policy, governance, funding or industrial stacks in Europe or China. ` +
  `"primary" = the page itself is an official/original source (government, foundation, project, paper), not a news/blog/aggregator. ` +
  `Judge ONLY from the given title, URL and snippet; do not add facts from memory. Reply with a JSON array only.`;

async function judge(pool, idx, batch) {
  const items = batch.map((h, i) => `[${i}] ${h.title}\nURL: ${h.url}\n${h.snippet.replace(/\s+/g, ' ').slice(0, 500)}`).join('\n\n');
  const r = await chat(pool, idx, [{ role: 'user', content: SCHEMA + '\n\nItems:\n\n' + items }], 6000);
  const j = r && lastJson(r.content, '[');
  return Array.isArray(j) ? { model: r.model, rows: j } : null;
}

async function stageClassify() {
  const hits = readJ('hits.json', { hits: {} });
  const cls = readJ('classified.json', {});
  const todo = Object.entries(hits.hits).filter(([n]) => !cls[n]?.a);
  log('to classify (A):', todo.length);
  const BATCH = 8; let k = 0;
  const batches = []; for (let i = 0; i < todo.length; i += BATCH) batches.push(todo.slice(i, i + BATCH));
  const worker = async w => {
    while (k < batches.length) {
      const b = batches[k++]; const idx = (w + k) % CLASSIFIERS.length;
      const res = await judge(CLASSIFIERS, idx, b.map(([, h]) => h));
      if (!res) { log('  classify batch failed'); continue; }
      for (const row of res.rows) { const e = b[row.i]; if (e) cls[e[0]] = { ...(cls[e[0]] || {}), a: { ...row, model: res.model } }; }
      writeJ('classified.json', cls); log('A', k, '/', batches.length, res.model);
    }
  };
  await Promise.all([0, 1, 2].map(worker));

  // Second opinion on A-relevant items, from a model different from A's.
  const rel = Object.entries(cls).filter(([, c]) => c.a?.relevant && !c.b).map(([n]) => [n, hits.hits[n]]).filter(([, h]) => h);
  log('to second-opinion (B):', rel.length);
  const groups = {};
  for (const e of rel) { const am = cls[e[0]].a.model; (groups[am] = groups[am] || []).push(e); }
  const bjobs = [];
  for (const [am, list] of Object.entries(groups)) {
    const pool = CLASSIFIERS.filter(m => m !== am);
    for (let i = 0; i < list.length; i += BATCH) bjobs.push([pool, list.slice(i, i + BATCH)]);
  }
  let kb = 0;
  const workerB = async w => {
    while (kb < bjobs.length) {
      const [pool, b] = bjobs[kb++];
      const res = await judge(pool, (w + kb) % pool.length, b.map(([, h]) => h));
      if (!res) continue;
      for (const row of res.rows) { const e = b[row.i]; if (e) cls[e[0]].b = { ...row, model: res.model }; }
      writeJ('classified.json', cls); log('B', kb, '/', bjobs.length, res.model);
    }
  };
  await Promise.all([0, 1, 2].map(workerB));
  return cls;
}

// ---------- stage 4: report ----------
function stageReport() {
  const q = readJ('queries.json', {});
  const hits = readJ('hits.json', { done: {}, hits: {} });
  const cls = readJ('classified.json', {});
  const leads = [];
  for (const [n, h] of Object.entries(hits.hits)) {
    const c = cls[n]; if (!c?.a?.relevant) continue;
    const agree = c.b ? !!c.b.relevant : null;
    leads.push({
      url: h.url, title: h.title, title_en: c.a.title_en, issuer: c.a.issuer || c.b?.issuer || '', date: c.a.date || c.b?.date || '',
      kind: c.a.kind, side: c.a.side, level: c.a.level, primary: !!(c.a.primary && (c.b ? c.b.primary : true)),
      topics: h.topics, models_a: c.a.model, model_b: c.b?.model || '', agree, why: c.a.why,
      query_models: h.query_models, evidence: 'D', status: 'unverified',
    });
  }
  // Title-level dedupe: the same document often sits at several URLs. A lead is "maybe_known" when the core
  // of its title (document name in 《》, else the part before the site suffix) already appears in the repo.
  const corpus = repoText();
  const seenUrl = new Set();
  for (const l of leads) {
    const t = (l.title || '').replace(/\s+/g, ' ').trim();
    const book = t.match(/《([^》]{6,})》/);
    let core = book ? book[1] : t.split(/\s[|\-–—_]\s|_|\s\|\s/)[0].trim();
    if (/[\u4e00-\u9fff]/.test(core)) core = core.replace(/\s/g, '').slice(0, 24); else core = core.slice(0, 60);
    l.maybe_known = core.length >= 8 && corpus.includes(/[\u4e00-\u9fff]/.test(core) ? core : core.toLowerCase());
    const u = normUrl(l.url); l.duplicate = seenUrl.has(u); seenUrl.add(u);
  }
  for (let i = leads.length - 1; i >= 0; i--) if (leads[i].duplicate) leads.splice(i, 1);
  const score = l => (l.agree === true ? 2 : l.agree === null ? 1 : 0) + (l.primary ? 2 : 0) + (l.maybe_known ? -3 : 0);
  leads.sort((x, y) => score(y) - score(x) || x.topics[0].localeCompare(y.topics[0]));
  fs.writeFileSync(path.join(OUT, 'leads.json'), JSON.stringify(leads, null, 1));

  const nQueries = Object.keys(hits.done).filter(k => !k.endsWith('|known')).length;
  const nKnown = Object.entries(hits.done).filter(([k]) => k.endsWith('|known')).reduce((s, [, v]) => s + v, 0);
  const nNew = Object.keys(hits.hits).length;
  const strong = leads.filter(l => l.agree === true && l.primary && !l.maybe_known);
  const nMaybe = leads.filter(l => l.maybe_known).length;
  const byTopic = {}; for (const l of leads) for (const t of l.topics) { byTopic[t] = byTopic[t] || { all: 0, strong: 0 }; byTopic[t].all++; if (l.agree === true && l.primary && !l.maybe_known) byTopic[t].strong++; }
  // which query models generated queries that led to relevant leads
  const byQm = {}; for (const l of leads) for (const m of l.query_models) byQm[m] = (byQm[m] || 0) + 1;

  const esc = s => String(s || '').replace(/\|/g, '/').replace(/\n/g, ' ');
  let md = `# Free-LLM coverage sweep (FreeLLMAPI, keyless)\n\n` +
    `*Generated by tools/freellm_sweep.js on ${new Date().toISOString().slice(0, 10)}. All items are **evidence level D (unverified leads)**: ` +
    `found by web search and screened by free models from title/snippet only. Nothing here enters the registry, catalogue or chapters until verified against the primary source.*\n\n` +
    `## Run\n\n- Router: FreeLLMAPI v0.16.34 in Docker on the server, localhost only, **keyless providers only** (no accounts, no keys): OVH AI Endpoints (anonymous), Kilo Gateway (anonymous :free routes), Parallel Search (anonymous MCP).\n` +
    `- Query panel: ${PANEL.slice(0, 4).join(', ')} (EN + ZH queries per topic). Classifiers (A then blind B, never the same model): ${CLASSIFIERS.join(', ')}.\n` +
    `- ${TOPICS.length} topics · ${nQueries} distinct queries · ${nKnown} hits already in the repo (dropped) · ${nNew} new URLs screened · **${leads.length} relevant** (model A) · **${nMaybe} probably already known** (title found in the repo) · **${strong.length} strong** (A and B agree + primary source + title not in the repo).\n\n` +
    `## By topic\n\n| Topic | relevant | strong |\n|---|---|---|\n` +
    TOPICS.map(([t]) => `| ${t} | ${byTopic[t]?.all || 0} | ${byTopic[t]?.strong || 0} |`).join('\n') +
    `\n\n## Which model's queries surfaced relevant leads\n\n| Query model | relevant leads |\n|---|---|\n` +
    Object.entries(byQm).sort((a, b) => b[1] - a[1]).map(([m, v]) => `| ${m} | ${v} |`).join('\n') +
    `\n\n## Strong leads (A+B agree, primary source, not in the repo) — to verify first\n\n| Topic | Side | Kind | Title | Issuer | Date | URL |\n|---|---|---|---|---|---|---|\n` +
    strong.map(l => `| ${l.topics.join(', ')} | ${l.side} | ${l.kind} | ${esc(l.title_en || l.title)} | ${esc(l.issuer)} | ${esc(l.date)} | ${l.url} |`).join('\n') +
    `\n\n## Other relevant leads\n\nSee data/freellm/leads.json (${leads.length - strong.length} more: secondary sources, or A/B disagreement).\n`;
  fs.writeFileSync(path.join(ROOT, 'docs', 'FREELLM-SWEEP.md'), md);
  log('report:', leads.length, 'leads,', strong.length, 'strong');
}

(async () => {
  const stage = process.argv[2] || 'all';
  if (stage === 'queries' || stage === 'all') await stageQueries();
  if (stage === 'search' || stage === 'all') await stageSearch();
  if (stage === 'classify' || stage === 'all') await stageClassify();
  if (stage === 'report' || stage === 'all') stageReport();
  const usage = readJ('usage.json', []); usage.push({ at: new Date().toISOString(), stage, calls: runs.length, tokens: runs.reduce((s, r) => s + r.tokens, 0) });
  writeJ('usage.json', usage);
})().catch(e => { console.error(e); process.exit(1); });
