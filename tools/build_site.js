#!/usr/bin/env node
// Static site generator: one crawlable HTML page per research chapter, catalogue entry and project,
// plus sitemap (with hreflang), robots.txt, llms.txt / llms-full.txt, JSON-LD and CSV/JSON datasets.
// No external fonts, scripts or CDNs, so pages load from mainland China and Europe alike.
// Usage: node tools/build_site.js   (output in site/, landing pages patched between <!--seo--> markers)
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const SITE = path.join(root, 'site');
const BASE = 'https://eu-china-commons.eu';
const REPO = 'https://github.com/fpietrosanti/eu-china-commons';
const ISSUES = REPO + '/issues';
const EMAIL = 'TODO-public-email@eu-china-commons.eu'; // TODO: public mailbox (same as build_funding.js)
const NAME = { en: 'Europe–China Digital Commons Observatory', zh: '中欧数字公地观察站' };
const TODAY = new Date().toISOString().slice(0, 10);
const rd = (p, d) => { try { return JSON.parse(fs.readFileSync(path.join(root, p), 'utf8')); } catch { return d; } };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const write = (rel, s) => { const f = path.join(SITE, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); urls.push(rel); };
const urls = [];
const alt = {}; // rel -> {en, zh} for hreflang pairs

// ---------- minimal Markdown → HTML (headings, tables, lists, quotes, code, links) ----------
function inline(s) {
  s = esc(s);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" rel="noopener">$1</a>');
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => `<a href="${mdLink(u)}">${t}</a>`);
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<)|]+)/g, '$1<a href="$2" rel="noopener">$2</a>');
  return s;
}
function md(src) {
  const L = src.replace(/\r/g, '').split('\n'); const out = []; let i = 0; const toc = [];
  while (i < L.length) {
    const l = L[i];
    if (/^\s*$/.test(l)) { i++; continue; }
    let m;
    if ((m = /^(#{1,4})\s+(.*)$/.exec(l))) {
      const lv = Math.min(m[1].length + 1, 5); const id = slug(m[2]); if (lv <= 3) toc.push([lv, id, m[2]]);
      out.push(`<h${lv} id="${id}">${inline(m[2])}</h${lv}>`); i++; continue;
    }
    if (/^```/.test(l)) { const b = []; i++; while (i < L.length && !/^```/.test(L[i])) b.push(L[i++]); i++; out.push(`<pre><code>${esc(b.join('\n'))}</code></pre>`); continue; }
    if (/^\|/.test(l)) {
      const rows = []; while (i < L.length && /^\|/.test(L[i])) rows.push(L[i++]);
      const cells = (r) => r.replace(/^\||\|\s*$/g, '').split('|').map((c) => c.trim());
      const head = cells(rows[0]); const body = rows.slice(/^\|[\s:|-]+\|?\s*$/.test(rows[1] || '') ? 2 : 1);
      out.push(`<div class="tbl"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${body.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^>\s?/.test(l)) { const b = []; while (i < L.length && /^>/.test(L[i])) b.push(L[i++].replace(/^>\s?/, '')); out.push(`<blockquote>${b.filter(Boolean).map((x) => `<p>${inline(x)}</p>`).join('')}</blockquote>`); continue; }
    if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
      const ord = /^\s*\d+\./.test(l); const items = [];
      while (i < L.length && (/^\s*([-*]|\d+\.)\s+/.test(L[i]) || (/^\s{2,}\S/.test(L[i]) && items.length))) {
        if (/^\s*([-*]|\d+\.)\s+/.test(L[i])) items.push(L[i].replace(/^\s*([-*]|\d+\.)\s+/, '')); else items[items.length - 1] += ' ' + L[i].trim();
        i++;
      }
      out.push(`<${ord ? 'ol' : 'ul'}>${items.map((x) => `<li>${inline(x)}</li>`).join('')}</${ord ? 'ol' : 'ul'}>`); continue;
    }
    if (/^---+\s*$/.test(l)) { out.push('<hr>'); i++; continue; }
    const p = []; while (i < L.length && L[i].trim() && !/^(#|\||>|```|\s*([-*]|\d+\.)\s)/.test(L[i])) p.push(L[i++]);
    out.push(`<p>${inline(p.join(' '))}</p>`);
  }
  return { html: out.join('\n'), toc };
}
// Repo-relative links: docs that are published become /research/<slug>/, anything else points to GitHub.
function mdLink(u) {
  const f = u.replace(/^(\.\.\/|\.\/)+/, '').replace(/^docs\//, '').split('#')[0];
  const c = CHAPTERS.find((x) => x[0] === f);
  return c ? `${BASE}/research/${c[1]}/` : `${REPO}/blob/main/${u.replace(/^(\.\.\/|\.\/)+/, '')}`;
}
function slug(s) { return String(s).toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 60) || 's'; }

// ---------- research chapters (docs → /research/<slug>/) ----------
const CHAPTERS = [
  ['FUNDING-CHAPTER.md', 'funding', 'How Europe and China fund open source — chapter with conclusions', 'chapter'],
  ['FUNDING-COMPARISON.md', 'funding-data', 'Funding for open source: EU vs China, comparison tables in EUR', 'data'],
  ['FUNDING-MODALITIES.md', 'funding-modalities', 'How each side funds open source for sovereignty: modalities compared', 'analysis'],
  ['PROJECT-FUNDING.md', 'project-funding', 'How 34 major open-source projects are funded (EU and China)', 'analysis'],
  ['CN-OSS-LANDSCAPE.md', 'china-open-source-landscape', 'The Chinese open-source landscape: projects and code platforms', 'analysis'],
  ['CN-FOUNDATIONS.md', 'chinese-foundations', 'Chinese open-source foundations and OpenAtom finances', 'analysis'],
  ['COSCON-THEMES.md', 'coscon-themes', 'COSCon (China Open Source Conference) themes by year', 'analysis'],
  ['INDUSTRIAL-STACKS.md', 'industrial-stacks', 'Industrial open-source stacks in Europe and China', 'analysis'],
  ['MULTILEVEL-ANALYSIS.md', 'multilevel-policy', 'Open-source policy at EU, national, Chinese central and provincial level', 'analysis'],
  ['STAKEHOLDERS.md', 'stakeholders', 'Stakeholder map: institutions and organisations', 'analysis'],
  ['LITERATURE-REVIEW.md', 'literature', 'Literature review', 'analysis'],
  ['METHODOLOGY.md', 'methodology', 'Methodology: sources, evidence levels, verification', 'method'],
  ['RESEARCH-REGISTER.md', 'research-register', 'Research register: every line of research, including negative results', 'method'],
  ['RESEARCH-DEPTH.md', 'research-depth', 'Research depth by area: centre vs periphery', 'method'],
];

// ---------- page shell ----------
function page({ lang = 'en', rel, title, desc, body, jsonld = [], crumbs = [], type = 'website', alternate }) {
  const url = BASE + '/' + rel.replace(/index\.html$/, '');
  const depth = rel.split('/').length - 1; const up = '../'.repeat(depth);
  const other = alternate ? `<link rel="alternate" hreflang="${lang === 'en' ? 'zh-CN' : 'en'}" href="${BASE}/${alternate.replace(/index\.html$/, '')}">\n<link rel="alternate" hreflang="${lang === 'en' ? 'en' : 'zh-CN'}" href="${url}">\n<link rel="alternate" hreflang="x-default" href="${BASE}/${(lang === 'en' ? rel : alternate).replace(/index\.html$/, '')}">` : '';
  if (alternate) alt[rel] = alternate;
  const bc = crumbs.length ? { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map(([n, u], k) => ({ '@type': 'ListItem', position: k + 1, name: n, item: BASE + '/' + u })) } : null;
  const ld = [...jsonld, bc].filter(Boolean).map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  const T = lang === 'zh'
    ? { home: '首页', res: '研究', cat: '目录', proj: '项目资金', data: '数据', contrib: '参与改进', draft: '中文为草稿，待母语审校。', note: '开源研究，基于公开来源，并非官方统计；内容不完整，欢迎指正。' }
    : { home: 'Home', res: 'Research', cat: 'Catalogue', proj: 'Project funding', data: 'Data', contrib: 'Contribute', draft: '', note: 'Open-source research from public sources, not official statistics. Incomplete and correctable.' };
  const pre = lang === 'zh' ? up + 'zh/' : up;
  return `<!doctype html>
<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Cache-Control" content="no-transform">
<meta name="applicable-device" content="pc,mobile">
<meta name="renderer" content="webkit">
<title>${esc(title)} · ${esc(NAME[lang])}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
${other}
<meta property="og:type" content="${type}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="${esc(NAME[lang])}">
<meta property="og:locale" content="${lang === 'zh' ? 'zh_CN' : 'en_GB'}">
<meta name="twitter:card" content="summary">
<link rel="stylesheet" href="${up}assets/style.css">
<link rel="alternate" type="text/plain" title="LLM summary" href="${BASE}/llms.txt">
${ld}
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="${pre}">${esc(NAME[lang])}</a>
  <nav><a href="${pre}research/">${T.res}</a><a href="${pre}catalogue/">${T.cat}</a>${lang === 'en' ? `<a href="${up}projects/">${T.proj}</a>` : ''}<a href="${pre}data/">${T.data}</a><a href="${ISSUES}" rel="noopener">${T.contrib}</a></nav>
  <a class="lang" href="${up}${alternate || (lang === 'en' ? 'zh/' : '')}" hreflang="${lang === 'en' ? 'zh-CN' : 'en'}">${lang === 'en' ? '中文' : 'English'}</a>
</div></header>
<main class="wrap doc">
${crumbs.length ? `<p class="crumbs">${crumbs.map(([n, u]) => `<a href="${up}${u}">${esc(n)}</a>`).join(' › ')}</p>` : ''}
${body}
<aside class="notice"><p>${T.note} ${T.draft} <a href="${ISSUES}/new?labels=data" rel="noopener">GitHub issues</a> · ${esc(EMAIL)}</p></aside>
</main>
<footer><div class="wrap">${esc(NAME.en)} · ${esc(NAME.zh)} · <a href="${REPO}" rel="noopener">source &amp; data (GitHub)</a> · CC BY 4.0 · updated ${TODAY}</div></footer>
</body>
</html>
`;
}
const ORG = { '@context': 'https://schema.org', '@type': 'ResearchProject', name: NAME.en, alternateName: NAME.zh, url: BASE + '/', sameAs: [REPO], description: 'Independent observatory on European and Chinese digital commons and open-source policy, funding and public-sector reuse.' };
const firstPara = (s) => (s.replace(/\r/g, '').split('\n').filter((l) => l.trim() && !/^(#|\||>|\*|-|_)/.test(l.trim()))[0] || '').replace(/[*`[\]]/g, '').slice(0, 155);

// ---------- research pages ----------
const research = [];
for (const [file, s, title, kind] of CHAPTERS) {
  const fp = path.join(root, 'docs', file); if (!fs.existsSync(fp)) continue;
  const src = fs.readFileSync(fp, 'utf8'); const { html, toc } = md(src.replace(/^# .*\n/, ''));
  const desc = firstPara(src.replace(/^# .*\n/, '')) || title;
  const rel = `research/${s}/index.html`;
  research.push({ s, title, desc, kind, file });
  write(rel, page({ rel, title, desc, type: 'article',
    crumbs: [['Home', ''], ['Research', 'research/'], [title, `research/${s}/`]],
    jsonld: [{ '@context': 'https://schema.org', '@type': kind === 'data' ? 'Dataset' : 'Report', name: title, headline: title, description: desc, inLanguage: 'en', dateModified: TODAY, url: `${BASE}/research/${s}/`, isPartOf: ORG, license: 'https://creativecommons.org/licenses/by/4.0/', isBasedOn: `${REPO}/blob/main/docs/${file}` }],
    body: `<h1>${esc(title)}</h1>\n<p class="meta">Source file: <a href="${REPO}/blob/main/docs/${file}" rel="noopener">docs/${file}</a> · updated ${TODAY}</p>\n${toc.length > 4 ? `<nav class="toc"><b>Contents</b><ul>${toc.filter((t) => t[0] === 2).map((t) => `<li><a href="#${t[1]}">${inline(t[2])}</a></li>`).join('')}</ul></nav>` : ''}\n${html}` }));
}
const kindLabel = { chapter: 'Chapter', data: 'Data', analysis: 'Analysis', method: 'Method' };
write('research/index.html', page({ rel: 'research/index.html', title: 'Research', desc: 'Chapters, analyses, data tables and methodology of the Europe–China Digital Commons Observatory.',
  crumbs: [['Home', ''], ['Research', 'research/']], jsonld: [ORG],
  body: `<h1>Research</h1><p class="lead">Every chapter is generated from the files in the public repository, so each figure can be traced to its source and evidence level.</p><div class="grid">${research.map((r) => `<article class="card"><span class="badge">${kindLabel[r.kind]}</span><h3><a href="${r.s}/">${esc(r.title)}</a></h3><p>${esc(r.desc)}</p></article>`).join('')}</div>` }));

// ---------- catalogue (verified, EN) ----------
const cat = rd('data/catalogue-verified.json', []);
const catLabel = { 'pa-reuse': 'Public-sector reuse', 'implicit-collaboration': 'Existing collaboration', bridge: 'EU–China bridge', funding: 'Funding', governance: 'Governance', 'industrial-stack': 'Industrial stack' };
const sideLabel = { EU: 'Europe', CN: 'China', 'EU-CN': 'EU–China', XX: 'EU–China' };
for (const e of cat) {
  const rel = `catalogue/${e.id}/index.html`; const desc = String(e.summary || '').slice(0, 155);
  write(rel, page({ rel, title: e.title, desc, type: 'article',
    crumbs: [['Home', ''], ['Catalogue', 'catalogue/'], [e.title, `catalogue/${e.id}/`]],
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: e.title, description: desc, inLanguage: 'en', dateModified: TODAY, url: `${BASE}/catalogue/${e.id}/`, isPartOf: ORG, citation: e.sources || [] }],
    body: `<h1>${esc(e.title)}</h1>
<p><span class="tag t-${esc(e.side)}">${esc(sideLabel[e.side] || e.side)}</span><span class="badge">${esc(catLabel[e.category] || e.category)}</span> <span class="badge">evidence ${esc(e.evidence || '?')}</span> <span class="badge">${esc(e.status || '')}</span></p>
<p class="answer">${esc(e.summary)}</p>
<dl class="facts">${['since', 'scale', 'counts_for', 'note'].filter((k) => e[k]).map((k) => `<dt>${esc(k)}</dt><dd>${esc(e[k])}</dd>`).join('')}${e.gate_a_counts === false ? '<dt>counted</dt><dd>context only, not counted as a verified case</dd>' : ''}</dl>
<h2>Sources</h2><ol class="sources">${(e.sources || []).map((u) => `<li><a href="${esc(u)}" rel="noopener">${esc(u)}</a></li>`).join('')}</ol>
<p class="meta">Catalogue ID <code>${esc(e.id)}</code> · <a href="${ISSUES}/new?labels=catalogue&amp;title=${encodeURIComponent('Catalogue: ' + e.id)}" rel="noopener">report a correction</a></p>` }));
}
const groups = {}; for (const e of cat) (groups[e.side] = groups[e.side] || []).push(e);
write('catalogue/index.html', page({ rel: 'catalogue/index.html', title: 'Catalogue of verified open-source actions', desc: `${cat.length} verified cases of public-sector open-source reuse, industrial stacks and EU–China bridges, each with primary sources and evidence level.`,
  crumbs: [['Home', ''], ['Catalogue', 'catalogue/']], alternate: 'zh/catalogue/index.html',
  jsonld: [{ '@context': 'https://schema.org', '@type': 'Dataset', name: 'Catalogue of verified open-source actions (EU and China)', description: 'Verified cases with sources and evidence levels', url: `${BASE}/catalogue/`, license: 'https://creativecommons.org/licenses/by/4.0/', distribution: [{ '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${BASE}/data/catalogue.csv` }, { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${BASE}/data/catalogue-verified.json` }] }],
  body: `<h1>Catalogue of verified open-source actions</h1><p class="lead">${cat.length} entries. Evidence A = primary source read; B = reliable secondary; C/D = reported, not confirmed. Download: <a href="../data/catalogue.csv">CSV</a> · <a href="../data/catalogue-verified.json">JSON</a>.</p>
${Object.entries(groups).map(([s, es]) => `<h2>${esc(sideLabel[s] || s)} (${es.length})</h2><div class="tbl"><table><thead><tr><th>Case</th><th>Type</th><th>Ev.</th></tr></thead><tbody>${es.map((e) => `<tr><td><a href="${e.id}/">${esc(e.title)}</a></td><td>${esc(catLabel[e.category] || e.category)}</td><td>${esc(e.evidence || '')}</td></tr>`).join('')}</tbody></table></div>`).join('')}` }));

// ---------- catalogue (bilingual, ZH) ----------
const bi = (rd('site/data/catalogue.json', { entries: [] }).entries) || [];
const zhSide = { EU: '欧洲', CN: '中国', 'EU-CN': '中欧桥梁' };
const zhCat = { 'pa-reuse': '公共部门复用', 'implicit-collaboration': '既有合作', funding: '资金', governance: '治理' };
for (const e of bi) {
  const rel = `zh/catalogue/${e.id}/index.html`;
  write(rel, page({ lang: 'zh', rel, title: e.title.zh, desc: String(e.summary.zh).slice(0, 120), type: 'article',
    crumbs: [['首页', 'zh/'], ['目录', 'zh/catalogue/'], [e.title.zh, `zh/catalogue/${e.id}/`]],
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: e.title.zh, description: e.summary.zh, inLanguage: 'zh-CN', dateModified: TODAY, url: `${BASE}/zh/catalogue/${e.id}/`, citation: e.sources }],
    body: `<h1>${esc(e.title.zh)}</h1><p><span class="tag t-${esc(e.side)}">${esc(zhSide[e.side] || e.side)}</span><span class="badge">${esc(zhCat[e.category] || e.category)}</span></p>
<p class="answer">${esc(e.summary.zh)}</p><p class="reuse">${esc(e.reuse.zh)}</p>
<h2>来源</h2><ol class="sources">${e.sources.map((u) => `<li><a href="${esc(u)}" rel="noopener">${esc(u)}</a></li>`).join('')}</ol>` }));
}
write('zh/catalogue/index.html', page({ lang: 'zh', rel: 'zh/catalogue/index.html', alternate: 'catalogue/index.html', title: '开源成功实践目录', desc: '中欧公共部门开源复用、既有合作与资金治理案例，每条均附来源。',
  crumbs: [['首页', 'zh/'], ['目录', 'zh/catalogue/']],
  body: `<h1>开源成功实践目录</h1><p class="lead">共 ${bi.length} 条（中英双语版）。完整英文目录含 ${cat.length} 条已核实案例：<a href="../../catalogue/">English catalogue</a>。</p><div class="grid">${bi.map((e) => `<article class="card"><span class="tag t-${esc(e.side)}">${esc(zhSide[e.side] || e.side)}</span><h3><a href="${e.id}/">${esc(e.title.zh)}</a></h3><p>${esc(e.summary.zh)}</p></article>`).join('')}</div>` }));

// ---------- projects ----------
const pf = rd('data/project-funding.json', []);
const plist = Array.isArray(pf) ? pf : (pf.projects || []);
for (const p of plist) {
  const ch = p.funding_channels || {};
  const rel = `projects/${p.id}/index.html`; const desc = `How ${p.name} is funded: ${Object.values(ch).map((c) => c && c.claim).filter(Boolean)[0] || ''}`.slice(0, 155);
  write(rel, page({ rel, title: `How ${p.name} is funded`, desc, type: 'article',
    crumbs: [['Home', ''], ['Project funding', 'projects/'], [p.name, `projects/${p.id}/`]],
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: `How ${p.name} is funded`, about: { '@type': 'SoftwareApplication', name: p.name, license: p.licence }, description: desc, inLanguage: 'en', dateModified: TODAY, url: `${BASE}/projects/${p.id}/`, isPartOf: ORG }],
    body: `<h1>How ${esc(p.name)} is funded</h1>
<dl class="facts">${['origin', 'host', 'host_type', 'licence'].filter((k) => p[k]).map((k) => `<dt>${esc(k.replace('_', ' '))}</dt><dd>${esc(p[k])}</dd>`).join('')}</dl>
<div class="tbl"><table><thead><tr><th>Channel</th><th>Finding</th><th>Label</th><th>Ev.</th></tr></thead><tbody>${Object.entries(ch).map(([k, c]) => c && typeof c === 'object' ? `<tr><td>${esc(k.replace(/_/g, ' '))}</td><td>${inline(String(c.claim || ''))}</td><td>${esc(c.label || '')}</td><td>${esc(c.evidence || '')}</td></tr>` : '').join('')}</tbody></table></div>
${Object.entries(p).filter(([k, v]) => !['id', 'name', 'side', 'origin', 'host', 'host_type', 'licence', 'funding_channels'].includes(k) && v && typeof v !== 'object').map(([k, v]) => `<p><b>${esc(k.replace(/_/g, ' '))}:</b> ${inline(String(v))}</p>`).join('')}
${Array.isArray(p.sources) ? `<h2>Sources</h2><ol class="sources">${p.sources.map((s) => { const u = typeof s === 'string' ? s : s.url; return `<li><a href="${esc(u)}" rel="noopener">${esc(s.title || u)}</a>${s.accessed ? ` <span class="meta">(accessed ${esc(s.accessed)})</span>` : ''}</li>`; }).join('')}</ol>` : ''}` }));
}
write('projects/index.html', page({ rel: 'projects/index.html', title: 'How major open-source projects are funded', desc: `${plist.length} open-source projects of Chinese and European origin: who pays, through which channels, with evidence levels.`,
  crumbs: [['Home', ''], ['Project funding', 'projects/']], jsonld: [ORG],
  body: `<h1>How major open-source projects are funded</h1><p class="lead">${plist.length} projects. Full analysis: <a href="../research/project-funding/">Project funding</a>.</p><div class="tbl"><table><thead><tr><th>Project</th><th>Origin</th><th>Host</th><th>Licence</th></tr></thead><tbody>${plist.map((p) => `<tr><td><a href="${p.id}/">${esc(p.name)}</a></td><td>${esc(p.origin || p.side)}</td><td>${esc(p.host || '')}</td><td>${esc(p.licence || '')}</td></tr>`).join('')}</tbody></table></div>` }));

// ---------- datasets ----------
const csv = (rows, cols) => '﻿' + [cols.join(','), ...rows.map((r) => cols.map((c) => { const v = r[c]; const s = Array.isArray(v) ? v.join(' ') : (v && typeof v === 'object' ? JSON.stringify(v) : (v ?? '')); return '"' + String(s).replace(/"/g, '""') + '"'; }).join(','))].join('\r\n') + '\r\n';
fs.mkdirSync(path.join(SITE, 'data'), { recursive: true });
fs.writeFileSync(path.join(SITE, 'data/catalogue.csv'), csv(cat, ['id', 'side', 'category', 'title', 'summary', 'since', 'scale', 'evidence', 'status', 'sources']));
fs.copyFileSync(path.join(root, 'data/catalogue-verified.json'), path.join(SITE, 'data/catalogue-verified.json'));
const fund = [...rd('data/funding/eu.json', []), ...rd('data/funding/cn.json', [])];
fs.writeFileSync(path.join(SITE, 'data/funding.csv'), csv(fund, ['id', 'side', 'level', 'jurisdiction', 'province', 'funder', 'instrument', 'instrument_type', 'year', 'period', 'amount', 'currency', 'amount_type', 'summable', 'oss_share', 'evidence', 'sources', 'note']));
fs.writeFileSync(path.join(SITE, 'data/project-funding.csv'), csv(plist.map((p) => ({ ...p, channels: JSON.stringify(p.funding_channels || {}) })), ['id', 'name', 'side', 'origin', 'host', 'licence', 'channels']));
fs.copyFileSync(path.join(root, 'data/project-funding.json'), path.join(SITE, 'data/project-funding.json'));
const DS = [['catalogue.csv', 'Catalogue of verified cases (CSV)'], ['catalogue-verified.json', 'Catalogue (JSON)'], ['funding.csv', 'Public and private open-source funding records (CSV, original currency)'], ['funding.json', 'Funding records with EUR conversion (JSON)'], ['project-funding.csv', 'Funding of 34 projects (CSV)'], ['project-funding.json', 'Funding of 34 projects (JSON)']];
write('data/index.html', page({ rel: 'data/index.html', alternate: 'zh/data/index.html', title: 'Open data', desc: 'Download the observatory datasets: verified catalogue, open-source funding records in EUR, project funding. CC BY 4.0.',
  crumbs: [['Home', ''], ['Data', 'data/']],
  jsonld: [{ '@context': 'https://schema.org', '@type': 'Dataset', name: 'Europe–China Digital Commons Observatory datasets', description: 'Catalogue of verified cases, open-source funding records (EU and China) and project funding', url: `${BASE}/data/`, license: 'https://creativecommons.org/licenses/by/4.0/', creator: ORG, distribution: DS.map(([f]) => ({ '@type': 'DataDownload', encodingFormat: f.endsWith('csv') ? 'text/csv' : 'application/json', contentUrl: `${BASE}/data/${f}` })) }],
  body: `<h1>Open data</h1><p class="lead">All data are CC BY 4.0. Each record carries its source and evidence level. Corrections: <a href="${ISSUES}" rel="noopener">GitHub issues</a>.</p><ul>${DS.map(([f, d]) => `<li><a href="${f}">${f}</a> — ${esc(d)}</li>`).join('')}</ul>` }));
write('zh/data/index.html', page({ lang: 'zh', rel: 'zh/data/index.html', alternate: 'data/index.html', title: '开放数据', desc: '下载观察站数据集：已核实案例目录、中欧开源资金记录（含欧元换算）、项目资金。CC BY 4.0。',
  crumbs: [['首页', 'zh/'], ['数据', 'zh/data/']],
  body: `<h1>开放数据</h1><p class="lead">全部数据采用 CC BY 4.0 许可，每条记录均注明来源与证据等级。欢迎通过 <a href="${ISSUES}" rel="noopener">GitHub issues</a> 指正。</p><ul>${DS.map(([f]) => `<li><a href="../../data/${f}">${f}</a></li>`).join('')}</ul>` }));
write('zh/research/index.html', page({ lang: 'zh', rel: 'zh/research/index.html', alternate: 'research/index.html', title: '研究', desc: '观察站的研究章节、分析、数据表与方法（目前为英文）。',
  crumbs: [['首页', 'zh/'], ['研究', 'zh/research/']],
  body: `<h1>研究</h1><p class="lead">研究报告目前以英文发布，中文版本正在准备中。</p><ul>${research.map((r) => `<li><a href="../../research/${r.s}/" hreflang="en">${esc(r.title)}</a></li>`).join('')}</ul>` }));
alt['research/index.html'] = 'zh/research/index.html';

// ---------- landing pages: SEO head + static links (between markers) ----------
function patchLanding(rel, lang, other) {
  const f = path.join(SITE, rel); let h = fs.readFileSync(f, 'utf8');
  const head = `<!--seo-->
<link rel="canonical" href="${BASE}/${lang === 'zh' ? 'zh/' : ''}">
<link rel="alternate" hreflang="en" href="${BASE}/">
<link rel="alternate" hreflang="zh-CN" href="${BASE}/zh/">
<link rel="alternate" hreflang="x-default" href="${BASE}/">
<meta http-equiv="Cache-Control" content="no-transform">
<meta name="applicable-device" content="pc,mobile">
<meta name="renderer" content="webkit">
<meta property="og:type" content="website"><meta property="og:url" content="${BASE}/${lang === 'zh' ? 'zh/' : ''}">
<meta property="og:site_name" content="${NAME[lang]}"><meta property="og:locale" content="${lang === 'zh' ? 'zh_CN' : 'en_GB'}">
<meta name="twitter:card" content="summary">
<link rel="alternate" type="text/plain" title="LLM summary" href="${BASE}/llms.txt">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [ORG, { '@type': 'WebSite', name: NAME[lang], alternateName: NAME[lang === 'zh' ? 'en' : 'zh'], url: BASE + '/', inLanguage: [lang === 'zh' ? 'zh-CN' : 'en'] }] })}</script>
<!--/seo-->`;
  h = h.replace(/<!--seo-->[\s\S]*?<!--\/seo-->\n?/, '').replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n?/, '');
  h = h.replace('</head>', head + '\n</head>');
  const p = lang === 'zh' ? '' : '';
  const links = lang === 'zh'
    ? `<!--seo-links--><section id="explore"><h2>浏览</h2><ul class="clean"><li><a href="research/">研究章节</a></li><li><a href="catalogue/">开源成功实践目录（${bi.length} 条）</a></li><li><a href="data/">开放数据下载</a></li></ul></section><!--/seo-links-->`
    : `<!--seo-links--><section id="explore"><h2>Explore the research</h2><ul class="clean">${research.slice(0, 6).map((r) => `<li><a href="research/${r.s}/">${esc(r.title)}</a></li>`).join('')}<li><a href="research/">All research</a> · <a href="catalogue/">Catalogue (${cat.length} verified cases)</a> · <a href="projects/">Funding of ${plist.length} projects</a> · <a href="data/">Open data</a></li></ul></section><!--/seo-links-->`;
  h = h.replace(/<!--seo-links-->[\s\S]*?<!--\/seo-links-->\n?/, '').replace('<section id="contact">', links + '\n<section id="contact">');
  fs.writeFileSync(f, h); urls.unshift(rel); alt[rel] = other;
}
patchLanding('index.html', 'en', 'zh/index.html');
patchLanding('zh/index.html', 'zh', 'index.html');

// ---------- sitemap, robots, llms ----------
const loc = (r) => BASE + '/' + r.replace(/index\.html$/, '');
const pairs = {}; for (const [a, b] of Object.entries(alt)) { pairs[a] = b; pairs[b] = a; }
const langOf = (r) => (r.startsWith('zh/') ? 'zh-CN' : 'en');
fs.writeFileSync(path.join(SITE, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...new Set(urls)].map((r) => `<url><loc>${loc(r)}</loc><lastmod>${TODAY}</lastmod>${pairs[r] ? `<xhtml:link rel="alternate" hreflang="${langOf(r)}" href="${loc(r)}"/><xhtml:link rel="alternate" hreflang="${langOf(pairs[r])}" href="${loc(pairs[r])}"/>` : ''}</url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(SITE, 'robots.txt'), `# Open research: all crawlers welcome, including AI and Chinese search engines.
User-agent: *
Allow: /

# Explicitly allowed (EU/US search and AI)
User-agent: Googlebot
User-agent: Bingbot
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: Applebot
User-agent: CCBot
# Chinese search engines and AI crawlers
User-agent: Baiduspider
User-agent: Sogou web spider
User-agent: 360Spider
User-agent: YisouSpider
User-agent: Bytespider
User-agent: PetalBot
Allow: /

Sitemap: ${BASE}/sitemap.xml
`);
const chap = fs.readFileSync(path.join(root, 'docs/FUNDING-CHAPTER.md'), 'utf8');
const findings = (chap.match(/^\d+\. \*\*\[.*$/gm) || []).map((l) => '- ' + l.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')).join('\n');
fs.writeFileSync(path.join(SITE, 'llms.txt'), `# ${NAME.en} (${NAME.zh})

> Independent, open-source research observatory comparing how Europe and China treat open source as public infrastructure: policy at every level, public and private funding, public-sector reuse, industrial stacks and EU–China bridges. Every figure carries a source and an evidence level (A primary, A-v primary via relay, B reliable secondary, C reported, D unverified). Not official statistics; incomplete and correctable.

Data licence: CC BY 4.0. Source and data: ${REPO}. Corrections: ${ISSUES}.

## Key findings (funding chapter v1.0)
${findings}

## Research
${research.map((r) => `- [${r.title}](${BASE}/research/${r.s}/): ${r.desc}`).join('\n')}

## Catalogue and data
- [Catalogue of ${cat.length} verified cases](${BASE}/catalogue/)
- [Funding of ${plist.length} major open-source projects](${BASE}/projects/)
- [Open data (CSV/JSON)](${BASE}/data/)
- [中文首页](${BASE}/zh/)

## Optional
- [Full text of the main chapters](${BASE}/llms-full.txt)
`);
fs.writeFileSync(path.join(SITE, 'llms-full.txt'), research.filter((r) => r.kind !== 'method' || r.s === 'methodology').map((r) => `\n\n=== ${r.title} — ${BASE}/research/${r.s}/ ===\n\n` + fs.readFileSync(path.join(root, 'docs', r.file), 'utf8')).join(''));
console.log(`pages ${new Set(urls).size} (research ${research.length}, catalogue ${cat.length}+${bi.length} zh, projects ${plist.length})`);
