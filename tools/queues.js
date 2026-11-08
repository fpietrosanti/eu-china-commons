#!/usr/bin/env node
// Builds the two tracked work queues of resources we could not acquire automatically:
//   1. VPN queue      — Chinese resources unreachable from outside mainland China (need a CN VPN session)
//   2. Assisted queue — resources behind a CAPTCHA / bot wall / login / token (need Fabio in the loop)
// For every item: what it is, why it is blocked, what to do once acquired, which repo files to update.
// Inputs:  data/cn_vpn_needed.txt, data/directory/*.json, data/cooperation/eu-cn.json, data/lit/industrial-policy.json,
//          data/queues/assisted-seed.tsv (manual entries), data/queues/done.tsv (manual "done" marks),
//          sources/archive-vpn/index.tsv (VPN fetch log; code 200 = acquired)
// Outputs (with --write): data/queues/vpn.json, data/queues/assisted.json, docs/QUEUES.md
'use strict';
const fs = require('fs'); const path = require('path');
const R = path.join(__dirname, '..'); const p = (...a) => path.join(R, ...a);
const read = (f) => (fs.existsSync(p(f)) ? fs.readFileSync(p(f), 'utf8') : '');
const json = (f) => (fs.existsSync(p(f)) ? JSON.parse(read(f)) : []);
const TODAY = new Date().toISOString().slice(0, 10);
const urlOf = (s) => { const m = String(s || '').match(/https?:\/\/[^\s)\]，。]+/); return m ? m[0].replace(/[.,;]+$/, '') : null; };
const norm = (u) => String(u || '').replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/+$/, '').toLowerCase();

// ---- acquired / done ----
const acquired = new Set();
for (const line of read('sources/archive-vpn/index.tsv').split('\n')) {
  const c = line.split('\t'); if (c.some((x) => x === '200')) { const u = c.find((x) => /^https?:/.test(x)); if (u) acquired.add(norm(u)); }
}
const done = new Map(); // key (url or id) -> note
for (const line of read('data/queues/done.tsv').split('\n')) {
  if (!line.trim() || line.startsWith('#')) continue; const [key, date, note] = line.split('\t'); done.set(norm(key), { date, note });
}

// ---- follow-up actions by origin ----
const ACTIONS = {
  directory: (id, file) => ({
    then: 'Open the site, confirm identity and open-source role, find the official contact page, save a local copy (homepage + about/policy pages + any open-source plan, report or white paper).',
    updates: [`${file} (entry ${id}: verified, web_http, evidence, contact_channel, role_relevance, projects, publications)`, 'sources/archive-vpn/ (local copy + SHA-256 in index.tsv)'],
  }),
  cooperation: (id) => ({
    then: 'Confirm the body exists and is active, record mission, status, official contact page; save a local copy.',
    updates: [`data/cooperation/eu-cn.json (entry ${id}: website_http, status, evidence, contact_channel, description)`, 'docs/EU-CN-COOPERATION-MAP.md', 'sources/archive*/'],
  }),
  literature: (id) => ({
    then: 'Download the full document, archive it with SHA-256, read it, correct summary/key_findings and upgrade evidence to A.',
    updates: [`data/lit/industrial-policy.json (item ${id}: url_http, evidence, summary, key_findings)`, 'docs/INDUSTRIAL-POLICY.md (exec summary if findings change)', 'sources/archive/'],
  }),
  registry: () => ({
    then: 'Export the list of funded projects (name, grant id, amount, years, repo link); import it with a new harvester in tools/registry/ or a reviewed manual JSON; evidence A.',
    updates: ['data/registry/projects.json', 'docs/REGISTRY.md (stats --write)', 'tools/registry/ (new harvester + README)'],
  }),
  research: (needed) => ({
    then: `Archive the original, extract: ${needed || 'the facts listed in the research register'}; check against the relay copies; upgrade evidence to A; log the round.`,
    updates: ['data/funding/cn.json and/or data/catalogue-verified.json (evidence → A, source URL, archive path)', 'docs/RESEARCH-REGISTER.md (new round)', 'docs/STATE.md', 'the chapter that cites it (docs/FUNDING-CHAPTER.md, CN-OSS-LANDSCAPE.md, …)', 'sources/archive-vpn/'],
  }),
};

// ---- 1. VPN queue ----
const vpn = new Map();
for (const raw of read('data/cn_vpn_needed.txt').split('\n')) {
  const line = raw.trim(); if (!line || line.startsWith('#')) continue;
  const [target, reasonRaw = '', needed = ''] = line.split('\t');
  const reason = reasonRaw.replace(/^#\s*/, '');
  const url = urlOf(target) || urlOf(reason);
  // a bare URL is its own key; a described target (several documents on one site) keys on the full text
  const key = norm(url && target.trim() === url ? url : target);
  if (vpn.has(key)) continue;
  let origin = 'research'; let act; let ref = null;
  const dm = reason.match(/directory entry ([\w-]+)/);
  if (dm) { origin = 'directory'; ref = dm[1]; act = ACTIONS.directory(ref, 'data/directory/cn-orgs.json'); }
  else if (/registry/i.test(reason) || /registry/i.test(target)) { origin = 'registry'; act = ACTIONS.registry(); }
  else act = ACTIONS.research(needed);
  const isDone = (url && acquired.has(norm(url))) || done.has(key);
  vpn.set(key, { key, target, url, origin, ref, blocker: 'vpn (unreachable outside mainland China)', reason, needed: needed || null, ...act, status: isDone ? 'done' : 'open', done: done.get(key) || null });
}

// ---- 2. Assisted queue (CAPTCHA / bot wall / login / token) ----
const BOT = new Set(['202', '403', '412', '418', '429', '466', '520', '521']);
const assisted = new Map();
const add = (o) => { const key = norm(o.url || o.target); if (!key || assisted.has(key) || vpn.has(key)) return; o.key = key; o.status = done.has(key) ? 'done' : 'open'; o.done = done.get(key) || null; assisted.set(key, o); };
for (const line of read('data/queues/assisted-seed.tsv').split('\n')) {
  if (!line.trim() || line.startsWith('#')) continue;
  const [url, blocker, reason, then, updates, origin = 'manual'] = line.split('\t');
  add({ target: url, url: urlOf(url) || url, origin, blocker, reason, then, updates: (updates || '').split(';').map((s) => s.trim()).filter(Boolean) });
}
const httpBlock = (code) => `bot wall / CAPTCHA (HTTP ${code} to scripted access)`;
for (const [file, side] of [['data/directory/eu-orgs.json', 'EU'], ['data/directory/cn-orgs.json', 'CN']]) {
  for (const x of json(file)) {
    if (!BOT.has(String(x.web_http))) continue;
    add({ target: `${x.name_en} — ${x.official_website}`, url: x.official_website, origin: 'directory', ref: x.id, side, blocker: httpBlock(x.web_http), reason: 'site refuses scripted access; identity and role not verified', ...ACTIONS.directory(x.id, file) });
  }
}
for (const x of json('data/cooperation/eu-cn.json')) {
  if (!BOT.has(String(x.website_http))) continue;
  add({ target: `${x.name_en} — ${x.official_website}`, url: x.official_website, origin: 'cooperation', ref: x.id, blocker: httpBlock(x.website_http), reason: 'site refuses scripted access', ...ACTIONS.cooperation(x.id) });
}
for (const x of json('data/lit/industrial-policy.json')) {
  if (!BOT.has(String(x.url_http))) continue;
  add({ target: `${x.title} — ${x.url}`, url: x.url, origin: 'literature', ref: x.id, blocker: httpBlock(x.url_http), reason: `full text not read (evidence ${x.evidence})`, ...ACTIONS.literature(x.id) });
}

// ---- write ----
const V = [...vpn.values()]; const A = [...assisted.values()];
const count = (arr, k) => arr.reduce((m, x) => ((m[x[k]] = (m[x[k]] || 0) + 1), m), {});
const summary = { generated: TODAY, vpn: { total: V.length, open: V.filter((x) => x.status === 'open').length, by_origin: count(V, 'origin') }, assisted: { total: A.length, open: A.filter((x) => x.status === 'open').length, by_origin: count(A, 'origin') } };
console.log(JSON.stringify(summary));
if (!process.argv.includes('--write')) process.exit(0);
fs.mkdirSync(p('data/queues'), { recursive: true });
fs.writeFileSync(p('data/queues/vpn.json'), JSON.stringify(V, null, 2) + '\n');
fs.writeFileSync(p('data/queues/assisted.json'), JSON.stringify(A, null, 2) + '\n');

const esc = (s) => String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const table = (arr) => ['| # | resource | why blocked | then (after acquisition) | update | status |', '|---|---|---|---|---|---|',
  ...arr.map((x, i) => `| ${i + 1} | ${esc(x.url ? `[${esc(x.target).slice(0, 90)}](${x.url})` : x.target)} | ${esc(x.blocker)}: ${esc(x.reason).slice(0, 140)} | ${esc(x.then).slice(0, 200)} | ${esc((x.updates || []).join('; ')).slice(0, 220)} | ${x.status}${x.done ? ` (${x.done.date})` : ''} |`)].join('\n');
const byOrigin = (arr) => Object.keys(count(arr, 'origin')).map((o) => `### ${o} (${arr.filter((x) => x.origin === o).length})\n\n${table(arr.filter((x) => x.origin === o))}`).join('\n\n');
const md = `# Work queues: VPN and assisted (CAPTCHA) acquisition

*Generated by tools/queues.js on ${TODAY}. Do not edit by hand: edit the inputs and re-run \`node tools/queues.js --write\` (also run weekly on the server).*

## Executive summary
- **VPN queue:** ${summary.vpn.total} resources, **${summary.vpn.open} open**. By origin: ${Object.entries(summary.vpn.by_origin).map(([k, v]) => `${k} ${v}`).join(', ')}. These are Chinese sites unreachable from outside mainland China.
- **Assisted queue:** ${summary.assisted.total} resources, **${summary.assisted.open} open**. By origin: ${Object.entries(summary.assisted.by_origin).map(([k, v]) => `${k} ${v}`).join(', ')}. These refuse scripted access (CAPTCHA, bot wall, login or API token) and need Fabio in the loop. We never bypass CAPTCHAs or bot detection automatically.
- Every item states **what to do once acquired** and **which repository files must be updated**, so acquisition is never a dead end.

## How to work the queues
**VPN session** (when a mainland-China VPN is available): run \`bash tools/vpn_fetch.sh --vpn-on\`. It fetches every open URL plus linked attachments into \`sources/archive-vpn/files/\` and logs SHA-256 in \`sources/archive-vpn/index.tsv\`. Items with a code-200 row become \`done\` on the next \`node tools/queues.js --write\`. Then do the "then" step for each item and update the listed files. Text entries without a URL (policy documents to be located) need a search on the Chinese site during the VPN session.

**Assisted session** (Fabio + Claude in Chrome, ~1 h):
1. Claude opens the next open items in Fabio's Chrome, one tab at a time.
2. Fabio solves the CAPTCHA, accepts or declines cookies, or logs in where he has an account. Claude never types credentials and never solves CAPTCHAs.
3. Claude reads the page, saves a local copy (\`sources/archive/\` + SHA-256), and does the "then" step.
4. Claude appends a line to \`data/queues/done.tsv\` (\`url<TAB>date<TAB>note\`) and updates the listed files, then re-runs this script.
For API-token blockers (Gitee, AtomGit, GitHub for gh_funding): Fabio creates the token and stores it on the server himself (\`~/.config/*.env\`); scripts read it from there.

## Inputs
- \`data/cn_vpn_needed.txt\` — VPN queue source (tab-separated: target, reason, what is needed).
- \`data/queues/assisted-seed.tsv\` — manual assisted items (url, blocker, reason, then, updates separated by ";", origin).
- Directory, cooperation and literature datasets — sites answering HTTP 202/403/412/418/429/466/520/521 to scripts are added automatically.
- \`data/queues/done.tsv\` — manual completion marks; \`sources/archive-vpn/index.tsv\` — VPN fetch log.

## VPN queue

${byOrigin(V)}

## Assisted queue (CAPTCHA, bot wall, login, token)

${byOrigin(A)}
`;
fs.writeFileSync(p('docs/QUEUES.md'), md);
