'use strict';
// Harvester: Zenodo software records (open access) that carry funder metadata (grants[]): European Commission (H2020/HE/FP7),
// SNSF, DFG, ANR, UKRI, FWF, Research Council of Norway and Chinese funders (NSFC, CAS, MOST key R&D, provincial).
// API: https://zenodo.org/api/records (anonymous, ~60 req/min; we use ~1 req/1.2 s). One record per Zenodo concept (all versions merged).
// Funding is declared by the depositor and, for EC grants, linked to the CORDIS project id -> evidence B (A would need CORDIS match).
// No creator names are stored. Usage: node tools/registry/zenodo.js [--only ec,cn,...] [--maxpages N]
const L = require('./lib');

const GROUPS = [
  { key: 'ec', side: 'EU', queries: ['metadata.funding.funder.id:"00k4n6c32"'], pages: 90, windows: 'quarter' },
  { key: 'snsf', side: 'EU', queries: ['metadata.funding.funder.name:"Swiss National Science Foundation"'], pages: 8, windows: 'year' },
  { key: 'dfg', side: 'EU', queries: ['metadata.funding.funder.name:"Deutsche Forschungsgemeinschaft"'], pages: 8, windows: 'year' },
  { key: 'anr', side: 'EU', queries: ['metadata.funding.funder.name:"Agence Nationale de la Recherche"'], pages: 6, windows: 'year' },
  { key: 'ukri', side: 'EU', queries: ['metadata.funding.funder.name:"UK Research and Innovation"'], pages: 8, windows: 'year' },
  { key: 'fwf', side: 'EU', queries: ['metadata.funding.funder.name:"Austrian Science Fund"'], pages: 3 },
  { key: 'rcn', side: 'EU', queries: ['metadata.funding.funder.name:"Research Council of Norway"'], pages: 2 },
  { key: 'cn', side: 'CN', queries: ['metadata.funding.funder.name:"National Natural Science Foundation of China"', 'metadata.funding.funder.name:"Natural Science Foundation of China"', 'metadata.funding.funder.name:"Chinese Academy of Sciences"', 'metadata.funding.funder.name:"Ministry of Science and Technology"', 'metadata.funding.funder.name:"National Key Research and Development Program of China"', 'metadata.funding.funder.name:China', 'metadata.funding.funder.name:Chinese', 'metadata.funding.funder.name:Beijing', 'metadata.funding.funder.name:Shanghai', 'metadata.funding.funder.name:Guangdong', 'metadata.funding.funder.name:Zhejiang', 'metadata.funding.funder.name:Jiangsu', 'metadata.funding.funder.name:Shenzhen'], pages: 5 },
];

// classify a grant's funder
function classify(g) {
  const n = (g.funder && g.funder.name) || '';
  const prog = [g.program, g.title].filter(Boolean).join(' ');
  const txt = n + ' ' + prog;
  if (/univers|institute of|laborator|scholarship|postdoctoral|hospital/i.test(n)) return { ok: false }; // not a public funder programme
  if (/european commission|european research council|horizon|\bEC\b|\bERC\b/i.test(n)) return { ok: true, side: 'EU', level: 'EU', country: 'EU', funder: 'European Commission' + (g.program ? ' - ' + g.program : ''), fam: 'EC' };
  if (/swiss national science/i.test(n)) return { ok: true, side: 'EU', level: 'member-state', country: 'Switzerland', funder: 'Swiss National Science Foundation (SNSF)', fam: 'SNSF' };
  if (/deutsche forschungsgemeinschaft|german research foundation/i.test(n)) return { ok: true, side: 'EU', level: 'member-state', country: 'Germany', funder: 'Deutsche Forschungsgemeinschaft (DFG)', fam: 'DFG' };
  if (/agence nationale de la recherche/i.test(n)) return { ok: true, side: 'EU', level: 'member-state', country: 'France', funder: 'Agence Nationale de la Recherche (ANR)', fam: 'ANR' };
  if (/uk research and innovation|UKRI|EPSRC|NERC|BBSRC|STFC|innovate uk/i.test(n)) return { ok: true, side: 'EU', level: 'member-state', country: 'United Kingdom', funder: 'UK Research and Innovation (' + n + ')', fam: 'UKRI' };
  if (/austrian science fund|\bFWF\b/i.test(n)) return { ok: true, side: 'EU', level: 'member-state', country: 'Austria', funder: 'Austrian Science Fund (FWF)', fam: 'FWF' };
  if (/research council of norway/i.test(n)) return { ok: true, side: 'EU', level: 'member-state', country: 'Norway', funder: 'Research Council of Norway', fam: 'RCN' };
  if (/china|chinese|beijing|shanghai|guangdong|zhejiang|jiangsu|shenzhen|hubei|sichuan|chongqing|hangzhou|wuhan|\bCAS\b|NSFC/i.test(txt)) {
    const reg = (/(beijing|shanghai|guangdong|zhejiang|jiangsu|shenzhen|hubei|sichuan|chongqing|hangzhou|wuhan)/i.exec(n) || [])[1] || '';
    const city = /(shenzhen|hangzhou|wuhan)/i.test(reg);
    return { ok: true, side: 'CN', level: reg ? (city ? 'CN-city' : 'CN-provincial') : 'CN-central', country: 'China', region: reg, funder: n, fam: 'CN' };
  }
  return { ok: false };
}
// date windows keep each query small: Zenodo's deep paging (page > ~30) is unreliable
function makeWindows(kind) {
  if (!kind) return [null];
  const out = [];
  for (let y = 2012; y <= 2026; y++) {
    if (kind === 'year') out.push([`${y}-01-01`, `${y}-12-31`]);
    else for (const [a, b] of [['01-01', '03-31'], ['04-01', '06-30'], ['07-01', '09-30'], ['10-01', '12-31']]) out.push([`${y}-${a}`, `${y}-${b}`]);
  }
  return out;
}
// many Zenodo records can be components of ONE software release (e.g. 3,700 gCube components under one FP7 grant):
// collapse records that share repository + grant id into the one with the lowest Zenodo concept id
function collapse(recs) {
  const by = new Map(), out = [];
  for (const r of recs) {
    const k = r.repo_url ? r.repo_url.toLowerCase() + '|' + r.grant_id : null;
    if (!k) { out.push(r); continue; }
    const e = by.get(k);
    if (!e) by.set(k, { r, n: 1 });
    else { e.n++; if (Number(r.id.slice(7)) < Number(e.r.id.slice(7))) e.r = r; }
  }
  for (const { r, n } of by.values()) {
    if (n > 1) { r.components = n; r.description = L.trunc('[' + n + ' Zenodo records share this repository and grant] ' + r.description, 320); }
    out.push(r);
  }
  return out;
}
const strip = (h) => L.strip(String(h || ''));

(async () => {
  const args = process.argv.slice(2);
  const only = args.includes('--only') ? args[args.indexOf('--only') + 1].split(',') : null;
  const maxPages = args.includes('--maxpages') ? +args[args.indexOf('--maxpages') + 1] : 0;
  for (const grp of GROUPS) {
    if (only && !only.includes(grp.key)) continue;
    console.log('== zenodo', grp.key);
    const found = new Map();
    const wins = makeWindows(grp.windows);
    for (const q0 of grp.queries) for (const w of wins) {
      const q = w ? `${q0} AND publication_date:[${w[0]} TO ${w[1]}]` : q0;
      let got = 0, total = 0;
      for (let p = 1; p <= (maxPages || grp.pages * 4); p++) {
        const url = `https://zenodo.org/api/records?q=${encodeURIComponent(q)}&resource_type=software&size=25&page=${p}&sort=mostrecent`;
        let r;
        for (let t = 0; t < 3; t++) { r = await L.get(url, { tries: 1, timeout: 60000 }); if (r.status === 429 || r.status === 0) { console.log("  retry", r.status); await L.sleep(r.status === 0 ? 8000 : 30000); continue; } break; }
        await L.sleep(1200);
        if (r.status === 0) { console.log('  skip page', p, '(persistent server error)'); continue; }
        if (r.status !== 200) { console.log('  stop', r.status, 'page', p); break; }
        const j = JSON.parse(r.text);
        total = j.hits.total;
        if (!j.hits.hits.length) break;
        for (const h of j.hits.hits) {
          const md = h.metadata || {}; if (md.access_right && md.access_right !== 'open') continue;
          const grants = (md.grants || []).map((g) => Object.assign({ c: classify(g) }, g)).filter((g) => g.c.ok && g.c.side === grp.side);
          if (!grants.length) continue;
          const g0 = grants[0], c = g0.c;
          const concept = h.conceptrecid || String(h.id);
          if (found.has(concept)) continue;
          const rec = L.blank();
          const title = (md.title || '').replace(/^[^/]+\/([^:]+): /, '$1: ');
          rec.id = 'zenodo-' + concept;
          rec.name = L.trunc(title, 120); rec.side = c.side; rec.funder_level = c.level; rec.country = c.country; rec.region = c.region || '';
          rec.funder = c.funder; rec.programme = [g0.program, g0.acronym, g0.title].filter(Boolean).join(' / ').slice(0, 200);
          rec.grant_id = String(g0.code || '');
          rec.years = (md.publication_date || '').slice(0, 4);
          rec.description = L.trunc(strip(md.description) || title, 300);
          rec.domain = L.classify(title + ' ' + strip(md.description).slice(0, 600) + ' ' + (md.keywords || []).join(' '));
          const gh = (md.related_identifiers || []).map((x) => x.identifier).find((u) => /^https?:\/\/(github\.com|gitlab\.|gitee\.com|codeberg\.org|bitbucket\.org)/i.test(u));
          rec.repo_url = gh ? gh.replace(/\/(tree|releases|blob)\/.*$/, '').replace(/\.git$/, '') : '';
          rec.licence = md.license && md.license.id ? md.license.id : '';
          rec.sources = [{ url: h.links.self_html || ('https://zenodo.org/records/' + h.id) }];
          if (g0.url) rec.sources.push({ url: g0.url });
          rec.evidence = 'B';
          rec.oss_basis = 'Zenodo software record (open access) with depositor-declared grant ' + (g0.code || '') + ' [' + c.fam + ']' + (grants.length > 1 ? '; further funders: ' + grants.slice(1).map((x) => x.c.fam).join(',') : '');
          found.set(concept, rec);
          got++;
        }
        if (p * 25 >= total) break;
      }
      if (total || !w) console.log(`  ${q.slice(0, 40)}...${w ? w[0] + '..' + w[1] : ''}: total ${total}, new unique ${got}`);
    }
    L.upsert(collapse([...found.values()]), 'zenodo');
  }
})();
