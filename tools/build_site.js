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
const EMAIL = 'contact@eu-china-commons.eu';
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
  ['CONTRIBUTION-FLOWS.md', 'contribution-flows', 'Who contributes to whom: EU–China contribution flows and cooperation targets', 'key'],
  ['EXT-REPORT-CN-OSS-LANDSCAPE.md', 'external-report-china-oss-history', 'External report: China\'s open-source landscape and history (Nov 2026), analysis and research roadmap', 'key'],
  ['KAIYUANSHE-CORPUS.md', 'kaiyuanshe-corpus', 'KAIYUANSHE (开源社) corpus: China Open Source Annual Reports 2016–2025, OpenShare data and related reports', 'key'],
  ['CN-ASEAN-RUSSIA-MECHANISMS.md', 'china-asean-russia-mechanisms', 'China\'s open-source cooperation with ASEAN and Russia: what exists, what it delivers, and what Europe could adapt', 'analysis'],
  ['GPL-CASE-LAW.md', 'gpl-case-law', 'GPL in court: Chinese and European case law compared', 'analysis'],
  ['CRA-SBOM-CN.md', 'cra-sbom-china', 'SBOM rules compared: the EU Cyber Resilience Act and China\'s SBOM standards', 'analysis'],
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
// ---------- brand: logo, payoff, mission (used in share previews) ----------
const OGV = '2'; // bump to force social apps to re-fetch the preview image
const BRAND = {
  pay: { en: 'Caring for the global digital commons, together', zh: '共同守护全球数字公地' },
  mission: {
    en: 'Open research and open engagement for EU–China cooperation on the digital commons: mapping how Europe and China fund, govern and reuse open source, and bringing every stakeholder into the research.',
    zh: '以开放研究和广泛参与，推动中欧数字公地合作：梳理欧洲与中国如何资助、治理和复用开源软件，并邀请各利益相关方共同参与研究。',
  },
};
function shareMeta(lang, up) {
  const img = BASE + '/assets/og-' + (lang === 'zh' ? 'zh' : 'en') + '.png?v=' + OGV;
  return `<meta property="og:image" content="${img}"><meta property="og:image:secure_url" content="${img}"><meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(NAME[lang] + ' — ' + BRAND.pay[lang])}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${img}">
<meta itemprop="image" content="${BASE}/assets/logo-512.png?v=${OGV}">
<link rel="icon" href="${up}assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${up}assets/apple-touch-icon.png">`;
}
// WeChat (no JS-SDK) uses the first sizeable <img> in <body> as share thumbnail: put the square logo first.
const wxImg = (up) => `<div style="display:none" aria-hidden="true"><img src="${up}assets/logo-512.png" width="512" height="512" alt=""></div>`;
const brandLink = (href, lang, up) => `<a class="brand" href="${href}"><img src="${up}assets/logo.svg" width="42" height="28" alt="">${esc(NAME[lang])}</a>`;

function page({ lang = 'en', rel, title, desc, body, jsonld = [], crumbs = [], type = 'website', alternate }) {
  const url = BASE + '/' + rel.replace(/index\.html$/, '');
  const depth = rel.split('/').length - 1; const up = '../'.repeat(depth);
  const other = alternate ? `<link rel="alternate" hreflang="${lang === 'en' ? 'zh-CN' : 'en'}" href="${BASE}/${alternate.replace(/index\.html$/, '')}">\n<link rel="alternate" hreflang="${lang === 'en' ? 'en' : 'zh-CN'}" href="${url}">\n<link rel="alternate" hreflang="x-default" href="${BASE}/${(lang === 'en' ? rel : alternate).replace(/index\.html$/, '')}">` : '';
  if (alternate) alt[rel] = alternate;
  const bc = crumbs.length ? { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map(([n, u], k) => ({ '@type': 'ListItem', position: k + 1, name: n, item: BASE + '/' + u })) } : null;
  const ld = [...jsonld, bc].filter(Boolean).map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  const T = lang === 'zh'
    ? { home: '首页', man: '宣言', road: '路线图', res: '研究', cat: '目录', proj: '项目资金', data: '数据', contrib: '参与改进', draft: '', note: '开源研究，基于公开来源，并非官方统计；内容不完整，欢迎指正。' }
    : { home: 'Home', man: 'Manifesto', road: 'Roadmap', res: 'Research', cat: 'Catalogue', proj: 'Project funding', data: 'Data', contrib: 'Contribute', draft: '', note: 'Open-source research from public sources, not official statistics. Incomplete and correctable.' };
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
${shareMeta(lang, up)}
<link rel="stylesheet" href="${up}assets/style.css">
<link rel="alternate" type="text/plain" title="LLM summary" href="${BASE}/llms.txt">
${ld}
</head>
<body>
${wxImg(up)}
<header class="top"><div class="wrap">
  ${brandLink(pre, lang, up)}
  <nav><a href="${pre}manifesto/">${T.man}</a><a href="${pre}roadmap/">${T.road}</a><a href="${pre}research/">${T.res}</a><a href="${pre}catalogue/">${T.cat}</a>${lang === 'en' ? `<a href="${up}projects/">${T.proj}</a>` : ''}<a href="${pre}data/">${T.data}</a><a href="${ISSUES}" rel="noopener">${T.contrib}</a></nav>
  <a class="lang" href="${up}${alternate || (lang === 'en' ? 'zh/' : '')}" hreflang="${lang === 'en' ? 'zh-CN' : 'en'}">${lang === 'en' ? '中文' : 'English'}</a>
</div></header>
<main class="wrap doc">
${crumbs.length ? `<p class="crumbs">${crumbs.map(([n, u]) => `<a href="${up}${u}">${esc(n)}</a>`).join(' › ')}</p>` : ''}
${body}
<aside class="notice"><p>${T.note} ${T.draft} <a href="${ISSUES}/new?labels=data" rel="noopener">GitHub issues</a> · <a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a></p></aside>
</main>
<footer><div class="wrap">${esc(NAME.en)} · ${esc(NAME.zh)} · <a href="${REPO}" rel="noopener">source &amp; data (GitHub)</a> · CC BY 4.0 · updated ${TODAY}</div></footer>
</body>
</html>
`;
}
const ORG = { '@context': 'https://schema.org', '@type': 'ResearchProject', name: NAME.en, alternateName: NAME.zh, url: BASE + '/', sameAs: [REPO, 'https://www.linkedin.com/company/eu-china-commons/'], email: EMAIL, founder: { '@type': 'Person', name: 'Fabio Pietrosanti', url: 'https://fabio.pietrosanti.it/' }, description: 'Independent observatory on European and Chinese digital commons and open-source policy, funding and public-sector reuse.' };
const firstPara = (s) => (s.replace(/\r/g, '').split('\n').filter((l) => l.trim() && !/^(#|\||>|\*|-|_)/.test(l.trim()))[0] || '').replace(/[*`[\]]/g, '').slice(0, 155);


// ---------- key sources (home, research, data) ----------
const KYS = 'https://kaiyuanshe.github.io/';
// Headline contribution flows (KAIYUANSHE 2025 Table 2-5; see docs/CONTRIBUTION-FLOWS.md)
function flowsHighlight(lang, up) {
  const zh = lang === 'zh';
  const bar = (label, v, max, cls) => `<div class="fbar"><span class="fl">${label}</span><span class="ft"><span class="ff ${cls}" style="width:${(v / max * 100).toFixed(1)}%"></span></span><b>${v}%</b></div>`;
  const tile = (n, t) => `<div class="ftile"><b>${n}</b><span>${t}</span></div>`;
  return `<section id="contribution-flows" class="flows"><h2>${zh ? '谁为谁贡献：中欧开源贡献流向' : 'Who contributes to whom: the EU–China gap'}</h2>
<p class="lead">${zh ? '欧洲开发者是全球开源公地最大的贡献群体之一，却几乎没有参与中国主导的项目。这一差距正是中欧合作可以填补的空间，也是我们建议追踪的合作指标的基线。' : 'European developers are one of the largest workforces of the open-source commons, yet they are almost absent from China-led projects. That gap is the space EU–China cooperation can fill, and the baseline for the cooperation indicators we propose.'}</p>
<div class="ftiles">${tile('79%', zh ? '中国主导项目的贡献来自中国本土' : 'of contributions to China-led projects come from China')}${tile('≥3.2%', zh ? '来自欧盟国家（美国主导项目：≥14.6%）' : 'come from EU countries (US-led projects: ≥14.6%)')}${tile('45×', zh ? '欧盟对美国主导项目的贡献是对中国主导项目的倍数' : 'more EU work goes into US-led than into China-led projects')}${tile('?', zh ? '中国对欧洲主导项目的贡献：尚无公开数据，我们将自行测算' : 'Chinese contribution to EU-led projects: not published yet, we will measure it')}</div>
<div class="fbars"><h3>${zh ? '欧盟国家在外国项目中的贡献份额（2025，前十名国家）' : 'EU countries\' share of contributions (2025, top-10 countries)'}</h3>${bar(zh ? '中国主导项目' : 'China-led projects', 3.2, 40, 'cn')}${bar(zh ? '美国主导项目' : 'US-led projects', 14.6, 40, 'eu')}<h3>${zh ? '本国贡献份额' : 'Home-country share'}</h3>${bar(zh ? '中国主导项目 · 中国' : 'China-led · from China', 79.1, 100, 'cn')}${bar(zh ? '美国主导项目 · 美国' : 'US-led · from the US', 38.2, 100, 'eu')}</div>
<p class="meta">${zh ? '来源：开源社《2025中国开源年度报告》表2-5（OpenDigger数据，C级）；欧盟合计为本项目计算。' : 'Source: KAIYUANSHE China Open Source Annual Report 2025, Table 2-5 (OpenDigger data, level C); EU aggregates are our arithmetic.'} <a href="${up}research/contribution-flows/">${zh ? '数据、注意事项与建议指标' : 'Data, caveats and proposed indicators'}</a></p></section>`;
}
function keySources(lang, up, withFlows = true) {
  const zh = lang === 'zh';
  const r = up + 'research/', d = up + 'data/';
  return (withFlows ? flowsHighlight(lang, up) : '') + `<section id="key-sources" class="key"><h2>${zh ? '核心资料' : 'Key sources'}</h2><p class="lead">${zh ? '本项目研究中国开源时最依赖的两组外部资料：完整存档、开放获取，并逐条核实。' : 'The two external bodies of evidence this research relies on most for the Chinese side: archived in full, openly accessible, and verified claim by claim.'}</p><div class="grid">
<article class="card key-card"><span class="badge">${zh ? '外部报告 · 2026年11月' : 'External report · Nov 2026'}</span><h3><a href="${d}china-open-source-landscape-2026-11.pdf">China's Open-Source Technology: Landscape and History</a></h3><p>${zh ? '149页，504个项目（250个中国开源项目）、26个案例、8条依赖链、资金与替代章节，741个来源链接。经作者许可发布。' : '149 pages: 504 projects (250 Chinese open source), 26 cases, 8 dependency chains, a funding and substitution chapter, 741 source links. Published with the author\'s permission.'}</p><p class="meta"><a href="${d}china-open-source-landscape-2026-11.pdf">PDF</a> · <a href="${d}cn-oss-landscape-2026-11-projects.tsv">${zh ? '504个项目数据' : '504-project dataset'}</a> · <a href="${d}cn-oss-landscape-2026-11-sources.tsv">${zh ? '741个来源' : '741 sources'}</a> · <a href="${r}external-report-china-oss-history/">${zh ? '分析与研究路线图' : 'Our analysis & roadmap'}</a></p></article>
<article class="card key-card"><span class="badge">KAIYUANSHE 开源社 · 2015–2026</span><h3><a href="${r}kaiyuanshe-corpus/">${zh ? '开源社：中国开源年度报告与 OpenShare 数据' : 'KAIYUANSHE: China Open Source Annual Reports and OpenShare data'}</a></h3><p>${zh ? '2016–2025年《中国开源年度报告》（2023–2025有英文版，CC BY-SA 4.0）、开源社 GitHub 托管的《中国人工智能开源生态蓝皮书》（Datawhale人工智能产业研究院，2026年3月）、中国开源地图，以及 OpenShare/OpenDigger 全球开源排行与地图数据。全部存档。' : 'China Open Source Annual Reports 2016–2025 (English editions 2023–2025, CC BY-SA 4.0), the China AI Open Source Ecosystem Blue Paper (Datawhale AI Industry Research Institute, March 2026, hosted on KAIYUANSHE\'s GitHub), the Chinese OSS Landscape, and OpenShare/OpenDigger global leaderboards and maps. All archived.'}</p><p class="meta"><a href="${KYS}2025-China-Open-Source-Report/" rel="noopener">2025</a> · <a href="${KYS}2024-China-Open-Source-Report/" rel="noopener">2024</a> · <a href="${KYS}2023-China-Open-Source-Report/" rel="noopener">2023</a> · <a href="${KYS}China-Artificial-Intelligence-Open-Source-Ecosystem-Blue-Book-2026/" rel="noopener">${zh ? 'AI蓝皮书（Datawhale）' : 'AI Blue Paper (Datawhale)'}</a> · <a href="https://open-share.com/insight/open-leaderboard" rel="noopener">OpenShare</a> · <a href="${r}kaiyuanshe-corpus/">${zh ? '全部资料清单' : 'Full inventory'}</a></p></article>
<article class="card key-card"><span class="badge">${zh ? '新分析 · 2026年11月' : 'New analyses · Nov 2026'}</span><h3><a href="${r}china-asean-russia-mechanisms/">${zh ? '比较研究：GPL判例、SBOM规则、中国与东盟和俄罗斯的开源合作机制' : 'Comparative studies: GPL case law, SBOM rules, China\'s cooperation with ASEAN and Russia'}</a></h3><p>${zh ? '三篇基于原始文本的研究（英文）：中欧GPL判例比较；欧盟《网络韧性法》与中国SBOM标准（GB/T 47020-2026、SJ/T 12097-2026）比较；中国与东盟、俄罗斯的开源合作机制及其对欧洲的可借鉴性。' : 'Three notes traced to primary texts: Chinese and European GPL rulings compared; the Cyber Resilience Act against China\'s SBOM standards (GB/T 47020-2026, SJ/T 12097-2026); China\'s open-source mechanisms with ASEAN and Russia and what Europe could adapt.'}</p><p class="meta"><a href="${r}gpl-case-law/">${zh ? 'GPL判例' : 'GPL case law'}</a> · <a href="${r}cra-sbom-china/">CRA × SBOM</a> · <a href="${r}china-asean-russia-mechanisms/">${zh ? '东盟与俄罗斯' : 'ASEAN & Russia'}</a></p></article>
</div></section>`;
}
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
    body: `<h1>${esc(title)}</h1>\n<p class="meta">Source file: <a href="${REPO}/blob/main/docs/${file}" rel="noopener">docs/${file}</a> · updated ${TODAY}</p>\n${toc.filter((t) => t[0] === 3).length > 3 ? `<nav class="toc"><b>Contents</b><ul>${toc.filter((t) => t[0] === 3).map((t) => `<li><a href="#${t[1]}">${inline(t[2])}</a></li>`).join('')}</ul></nav>` : ''}\n${html}` }));
}

// ---------- roadmap & research agenda (EN + ZH) ----------
for (const [lang, file, rel, title, crumb] of [
  ['en', 'ROADMAP.md', 'roadmap/index.html', 'Roadmap & research agenda', [['Home', ''], ['Roadmap', 'roadmap/']]],
  ['zh', 'ROADMAP.zh.md', 'zh/roadmap/index.html', '路线图与研究议程', [['首页', 'zh/'], ['路线图', 'zh/roadmap/']]],
]) {
  const fp = path.join(root, 'docs', file); if (!fs.existsSync(fp)) continue;
  const src = fs.readFileSync(fp, 'utf8').replace(/^# .*\n/, '').replace(/\n## 3\. Decisions[\s\S]*$/, '\n').split('\n').filter((l) => !/\(Fabio\)|docs\/outreach/.test(l)).join('\n');
  const { html, toc } = md(src);
  const desc = lang === 'zh' ? '中欧数字公地观察站的研究议程（产业政策、国家安全与相互依赖、社区、企业合作、开发者行动、跨境资助、合作图谱）与路线图。' : 'Research agenda (industrial policy, security and mutual dependence, community, corporate collaboration, developer actions, cross-border funding, collaboration map) and roadmap of the Europe–China Digital Commons Observatory.';
  write(rel, page({ lang, rel, title, desc, type: 'article', crumbs: crumb, alternate: lang === 'zh' ? 'roadmap/index.html' : 'zh/roadmap/index.html',
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Report', name: title, headline: title, description: desc, inLanguage: lang === 'zh' ? 'zh-CN' : 'en', dateModified: TODAY, isPartOf: ORG, license: 'https://creativecommons.org/licenses/by/4.0/' }],
    body: `<h1>${esc(title)}</h1>
<nav class="toc"><ul>${toc.filter((t) => t[0] === 3).map((t) => `<li><a href="#${t[1]}">${inline(t[2])}</a></li>`).join('')}</ul></nav>
${html}` }));
}
// ---------- manifesto & mission (EN + ZH) ----------
for (const [lang, file, rel, title, crumb] of [
  ['en', 'MANIFESTO.md', 'manifesto/index.html', 'Manifesto & Mission', [['Home', ''], ['Manifesto', 'manifesto/']]],
  ['zh', 'MANIFESTO.zh.md', 'zh/manifesto/index.html', '宣言与使命', [['首页', 'zh/'], ['宣言', 'zh/manifesto/']]],
]) {
  const fp = path.join(root, 'docs', file); if (!fs.existsSync(fp)) continue;
  const src = fs.readFileSync(fp, 'utf8').replace(/^# .*\n/, '').split('\n').filter((l) => !/MANIFESTO-PHRASES|^\*Published on/.test(l)).join('\n');
  const { html } = md(src);
  const desc = BRAND.mission[lang];
  write(rel, page({ lang, rel, title, desc, type: 'article', crumbs: crumb, alternate: lang === 'zh' ? 'manifesto/index.html' : 'zh/manifesto/index.html',
    jsonld: [{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: title, headline: title, description: desc, inLanguage: lang === 'zh' ? 'zh-CN' : 'en', dateModified: TODAY, isPartOf: ORG, license: 'https://creativecommons.org/licenses/by/4.0/' }],
    body: `<h1>${esc(title)}</h1>\n${html}` }));
  if (lang === 'en') alt['manifesto/index.html'] = 'zh/manifesto/index.html';
}
const kindLabel = { key: 'Key source', chapter: 'Chapter', data: 'Data', analysis: 'Analysis', method: 'Method' };
write('research/index.html', page({ rel: 'research/index.html', title: 'Research', desc: 'Chapters, analyses, data tables and methodology of the Europe–China Digital Commons Observatory.',
  crumbs: [['Home', ''], ['Research', 'research/']], jsonld: [ORG],
  body: `<h1>Research</h1><p class="lead">Every chapter is generated from the files in the public repository, so each figure can be traced to its source and evidence level.</p>${keySources('en', '../')}<h2>All research</h2><div class="grid">${research.map((r) => `<article class="card"><span class="badge">${kindLabel[r.kind]}</span><h3><a href="${r.s}/">${esc(r.title)}</a></h3><p>${esc(r.desc)}</p></article>`).join('')}</div>` }));

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
fs.copyFileSync(path.join(root, 'data/external/kaiyuanshe/repos.tsv'), path.join(SITE, 'data/kaiyuanshe-repos.tsv'));
fs.copyFileSync(path.join(root, 'data/external/kaiyuanshe/derived/contribution-flows-2025.tsv'), path.join(SITE, 'data/contribution-flows-2025.tsv'));
for (const f of ['china-open-source-landscape-2026-11.pdf', 'projects.tsv', 'sources.tsv']) fs.copyFileSync(path.join(root, 'data/external/cn-oss-landscape-2026-11', f), path.join(SITE, 'data', f === 'china-open-source-landscape-2026-11.pdf' ? f : 'cn-oss-landscape-2026-11-' + f));
const DS = [['catalogue.csv', 'Catalogue of verified cases (CSV)'], ['catalogue-verified.json', 'Catalogue (JSON)'], ['funding.csv', 'Public and private open-source funding records (CSV, original currency)'], ['funding.json', 'Funding records with EUR conversion (JSON)'], ['project-funding.csv', 'Funding of 34 projects (CSV)'], ['project-funding.json', 'Funding of 34 projects (JSON)'], ['china-open-source-landscape-2026-11.pdf', 'External report (Nov 2026): China\'s Open-Source Technology: Landscape and History, 149 pp., published with the author\'s permission'], ['cn-oss-landscape-2026-11-projects.tsv', '504 projects from that report: kind, governance, vitality (TSV)'], ['cn-oss-landscape-2026-11-sources.tsv', '741 sources cited in that report (TSV)'], ['kaiyuanshe-repos.tsv', 'KAIYUANSHE (开源社) published reports and sites: inventory of the 24 archived repositories with licence, last commit and live URL (TSV)'], ['contribution-flows-2025.tsv', 'Contributions to China-led and US-led open-source projects by country, 2025 (KAIYUANSHE Table 2-5, OpenDigger data; TSV)']];
write('data/index.html', page({ rel: 'data/index.html', alternate: 'zh/data/index.html', title: 'Open data', desc: 'Download the observatory datasets: verified catalogue, open-source funding records in EUR, project funding. CC BY 4.0.',
  crumbs: [['Home', ''], ['Data', 'data/']],
  jsonld: [{ '@context': 'https://schema.org', '@type': 'Dataset', name: 'Europe–China Digital Commons Observatory datasets', description: 'Catalogue of verified cases, open-source funding records (EU and China) and project funding', url: `${BASE}/data/`, license: 'https://creativecommons.org/licenses/by/4.0/', creator: ORG, distribution: DS.map(([f]) => ({ '@type': 'DataDownload', encodingFormat: f.endsWith('csv') ? 'text/csv' : f.endsWith('pdf') ? 'application/pdf' : f.endsWith('tsv') ? 'text/tab-separated-values' : 'application/json', contentUrl: `${BASE}/data/${f}` })) }],
  body: `<h1>Open data</h1><p class="lead">All data are CC BY 4.0, except the external report PDF, whose rights remain with its author. Each record carries its source and evidence level. Corrections: <a href="${ISSUES}" rel="noopener">GitHub issues</a>.</p>${keySources('en', '../')}<h2>All downloads</h2><ul>${DS.map(([f, d]) => `<li><a href="${f}">${f}</a> — ${esc(d)}</li>`).join('')}</ul>` }));
write('zh/data/index.html', page({ lang: 'zh', rel: 'zh/data/index.html', alternate: 'data/index.html', title: '开放数据', desc: '下载观察站数据集：已核实案例目录、中欧开源资金记录（含欧元换算）、项目资金。CC BY 4.0。',
  crumbs: [['首页', 'zh/'], ['数据', 'zh/data/']],
  body: `<h1>开放数据</h1><p class="lead">全部数据采用 CC BY 4.0 许可，每条记录均注明来源与证据等级。欢迎通过 <a href="${ISSUES}" rel="noopener">GitHub issues</a> 指正。</p>${keySources('zh', '../../')}<h2>全部下载</h2><ul>${DS.map(([f]) => `<li><a href="../../data/${f}">${f}</a></li>`).join('')}</ul>` }));
write('zh/research/index.html', page({ lang: 'zh', rel: 'zh/research/index.html', alternate: 'research/index.html', title: '研究', desc: '观察站的研究章节、分析、数据表与方法（目前为英文）。',
  crumbs: [['首页', 'zh/'], ['研究', 'zh/research/']],
  body: `<h1>研究</h1><p class="lead">研究报告目前以英文发布，中文版本正在准备中。</p>${keySources('zh', '../../')}<h2>全部研究</h2><ul>${research.map((r) => `<li><a href="../../research/${r.s}/" hreflang="en">${esc(r.title)}</a></li>`).join('')}</ul>` }));
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
<meta property="og:title" content="${esc(NAME[lang] + ' — ' + BRAND.pay[lang])}">
<meta property="og:description" content="${esc(BRAND.mission[lang])}">
${shareMeta(lang, lang === 'zh' ? '../' : '')}
<link rel="alternate" type="text/plain" title="LLM summary" href="${BASE}/llms.txt">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [ORG, { '@type': 'WebSite', name: NAME[lang], alternateName: NAME[lang === 'zh' ? 'en' : 'zh'], url: BASE + '/', inLanguage: [lang === 'zh' ? 'zh-CN' : 'en'] }] })}</script>
<!--/seo-->`;
  h = h.replace(/<!--seo-->[\s\S]*?<!--\/seo-->\n?/, '').replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n?/, '');
  h = h.replace('</head>', head + '\n</head>');
  const up = lang === 'zh' ? '../' : '';
  h = h.replace(/<!--wx-->[\s\S]*?<!--\/wx-->\n?/, '').replace('<body>', '<body>\n<!--wx-->' + wxImg(up) + '<!--/wx-->');
  h = h.replace(/<a class="brand" href="([^"]*)">(?:<img[^>]*>)?/, (m, hr) => '<a class="brand" href="' + hr + '"><img src="' + up + 'assets/logo.svg" width="42" height="28" alt="">');
  h = h.replace(/<!--pay-->[\s\S]*?<!--\/pay-->\n?/, '').replace(/(<div class="hero">[\s\S]*?<\/h1>)/, '$1\n  <!--pay--><p class="payoff">' + BRAND.pay[lang] + '</p><p class="sub"><b>' + (lang === 'zh' ? '以开放研究和广泛参与，推动中欧数字公地合作。' : 'Open research and open engagement for EU–China cooperation on the digital commons.') + '</b> <a href="manifesto/">' + (lang === 'zh' ? '阅读宣言与使命 →' : 'Read the manifesto & mission →') + '</a></p><!--/pay-->');
  const links = lang === 'zh'
    ? `<!--seo-links--><section id="explore"><h2>浏览</h2><ul class="clean"><li><a href="manifesto/"><b>宣言与使命</b></a></li><li><a href="roadmap/">路线图与研究议程</a></li><li><a href="research/">研究章节</a></li><li><a href="catalogue/">开源成功实践目录（${bi.length} 条）</a></li><li><a href="data/">开放数据下载</a></li></ul></section><!--/seo-links-->`
    : `<!--seo-links--><section id="explore"><h2>Explore the research</h2><ul class="clean"><li><a href="manifesto/"><b>Manifesto & Mission</b></a></li><li><a href="roadmap/"><b>Roadmap & research agenda</b></a></li>${research.slice(0, 6).map((r) => `<li><a href="research/${r.s}/">${esc(r.title)}</a></li>`).join('')}<li><a href="research/">All research</a> · <a href="catalogue/">Catalogue (${cat.length} verified cases)</a> · <a href="projects/">Funding of ${plist.length} projects</a> · <a href="data/">Open data</a></li></ul></section><!--/seo-links-->`;
  h = h.replace(/<!--seo-links-->[\s\S]*?<!--\/seo-links-->\n?/, '').replace('<section id="contact">', links.replace('<!--seo-links-->', '<!--seo-links-->' + keySources(lang, lang === 'zh' ? '../' : '', false)) + '\n<section id="contact">');
  h = h.replace(/<!--flows-->[\s\S]*?<!--\/flows-->\n?/, '').replace('<section id="why"', '<!--flows-->' + flowsHighlight(lang, lang === 'zh' ? '../' : '') + '<!--/flows-->\n<section id="why"');
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
