'use strict';
// Harvester: Developers Italia software catalogue (publiccode.yml of Italian public-administration software).
// API: https://api.developers.italia.it/v1/software  (cursor pagination). Usage: node tools/registry/developers_italia.js
const L = require('./lib');
const API = 'https://api.developers.italia.it/v1/software?page%5Bsize%5D=100';

function y1(txt, re) { const m = re.exec(txt); return m ? m[1].trim().replace(/^["']|["']$/g, '') : ''; }
function shortDesc(y) {
  const m = /^ {4}shortDescription:[ \t]*(.*)$/m.exec(y); if (!m) return '';
  let v = m[1].trim();
  if (/^[|>][+-]?$/.test(v) || v === '') {
    const rest = y.slice(m.index + m[0].length).split('\n').slice(1); const ls = [];
    for (const l of rest) { if (/^ {5,}\S/.test(l)) ls.push(l.trim()); else break; }
    v = ls.join(' ');
  }
  return v.replace(/^["']|["']$/g, '').trim();
}
function level(owner) {
  if (/\b(comune|citt[aà]|provincia|regione|unione dei comuni|unione montana|asl|ausl|azienda sanitaria|ats|asst|comunit[aà] montana|citt[aà] metropolitana|consorzio)\b/i.test(owner)) return 'region-city';
  return 'member-state';
}
(async () => {
  let url = API; const all = [];
  while (url) {
    const r = await L.get(url);
    if (r.status !== 200) { console.error('fetch failed', r.status, url); break; }
    const j = JSON.parse(r.text);
    all.push(...j.data);
    url = j.links && j.links.next ? 'https://api.developers.italia.it/v1/software' + j.links.next : null;
    await L.sleep(250);
    if (all.length % 500 === 0) console.log('  fetched', all.length);
  }
  console.log('catalogue entries:', all.length);
  const recs = [];
  const seen = new Set();
  for (const e of all) {
    const y = e.publiccodeYml || '';
    const name = y1(y, /^name:\s*(.+)$/m) || y1(y, /localisedName:\s*(.+)$/m);
    if (!name) continue;
    const repoUrl = y1(y, /^url:\s*(.+)$/m) || e.url;
    const owner = y1(y, /^\s*repoOwner:\s*(.+)$/m) || y1(y, /^\s*uri:\s*(urn:x-italian-pa:[^\s]+)/m);
    const lic = y1(y, /^\s*license:\s*(.+)$/m);
    const sd = shortDesc(y);
    const rel = y1(y, /^releaseDate:\s*(.+)$/m);
    const cats = [...y.matchAll(/^categories:\s*\n((?:- .*\n)+)/gm)].flatMap((m) => m[1].split('\n').map((x) => x.replace(/^- /, '').trim()).filter(Boolean));
    const dev = y1(y, /^developmentStatus:\s*(.+)$/m);
    const uri = y1(y, /^\s*uri:\s*(urn:x-italian-pa:[^\s]+)/m);
    let id = 'devita-' + L.slug(name + '-' + (owner || uri || L.hash(e.id)));
    if (seen.has(id)) id += '-' + L.hash(e.id).slice(0, 4);
    seen.add(id);
    const r = L.blank();
    r.id = id; r.name = name; r.side = 'EU'; r.country = 'Italy';
    r.funder_level = level(owner);
    r.funder = owner ? `${owner} (Italian public administration; reuse via AgID/Developers Italia)` : 'Italian public administration (Developers Italia)';
    r.programme = 'Developers Italia software catalogue (publiccode.yml, "riuso")';
    r.years = rel ? rel.slice(0, 4) : '';
    r.description = L.trunc(sd || name, 300);
    r.domain = [...new Set([...(L.classify(name + ' ' + sd)), ...cats.map((c) => c.replace(/-/g, ' ')).slice(0, 2)])].slice(0, 5);
    r.repo_url = repoUrl; r.licence = lic;
    r.status = e.active === false ? 'archived' : (/^(obsolete|deprecated)$/.test(dev) ? 'archived' : 'active');
    r.sources = [{ url: 'https://developers.italia.it/en/search?q=' + encodeURIComponent(name) }, { url: 'https://api.developers.italia.it/v1/software/' + e.id }];
    r.evidence = 'B'; // catalogue entry published by/for the PA; funding amount not stated
    r.oss_basis = 'publiccode.yml in PA catalogue (publicly funded by construction; amount not stated)';
    recs.push(r);
  }
  L.upsert(recs, 'developers_italia');
})();
