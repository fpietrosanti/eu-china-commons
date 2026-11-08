'use strict';
// Harvester: CORDIS bulk open data (H2020 + Horizon Europe project CSVs, https://cordis.europa.eu/data/).
// Keeps only projects whose title/objective/keywords mention open source / free software, or that link a code-forge repo.
// Usage: node tools/registry/cordis.js [--refresh]   (downloads ~90 MB of zips into tools/registry/.cache/cordis)
const fs = require('fs'), path = require('path'), cp = require('child_process');
const L = require('./lib'); const { table, rows } = require('./csv');
const DIR = path.join(L.CACHE, 'cordis');
fs.mkdirSync(DIR, { recursive: true });
const SETS = [
  { key: 'h2020', zip: 'cordis-h2020projects-csv.zip', fp: 'H2020' },
  { key: 'he', zip: 'cordis-HORIZONprojects-csv.zip', fp: 'Horizon Europe' },
];
const OSS = /open[- ]source|\bFOSS\b|\bFLOSS\b|free (and open[- ]source )?software|libre software/i;
const FORGE = /github\.com|gitlab\.|gitee\.com|codeberg\.org|bitbucket\.org|sourceforge\.net|framagit|git\.[a-z0-9-]+\.[a-z]+\//i;
const num = (s) => { const v = parseFloat(String(s || '').replace(/\./g, m => m).replace(',', '.')); return isNaN(v) ? null : v; };
const CC = { EL: 'Greece', UK: 'United Kingdom', DE: 'Germany', FR: 'France', IT: 'Italy', ES: 'Spain', NL: 'Netherlands', BE: 'Belgium', AT: 'Austria', SE: 'Sweden', DK: 'Denmark', FI: 'Finland', NO: 'Norway', CH: 'Switzerland', IE: 'Ireland', PT: 'Portugal', PL: 'Poland', CZ: 'Czechia', HU: 'Hungary', RO: 'Romania', BG: 'Bulgaria', HR: 'Croatia', SI: 'Slovenia', SK: 'Slovakia', EE: 'Estonia', LV: 'Latvia', LT: 'Lithuania', LU: 'Luxembourg', CY: 'Cyprus', MT: 'Malta', IS: 'Iceland', RS: 'Serbia', TR: 'Turkey', IL: 'Israel', UA: 'Ukraine', US: 'United States', CN: 'China', JP: 'Japan', CA: 'Canada', AU: 'Australia', BR: 'Brazil', IN: 'India', ZA: 'South Africa' };

(async () => {
  if (!process.env.ONLY) { // one child process per dataset keeps memory bounded
    for (const s of SETS) cp.execFileSync(process.execPath, ['--max-old-space-size=8000', __filename, ...process.argv.slice(2)], { stdio: 'inherit', env: Object.assign({}, process.env, { ONLY: s.key }) });
    return;
  }
  const refresh = process.argv.includes('--refresh');
  const out = [];
  for (const s of SETS.filter((x) => !process.env.ONLY || process.env.ONLY === x.key)) {
    const zp = path.join(DIR, s.zip), dd = path.join(DIR, s.key);
    if (refresh || !fs.existsSync(path.join(dd, 'project.csv'))) {
      if (refresh || !fs.existsSync(zp)) {
        console.log('downloading', s.zip);
        const r = await fetch('https://cordis.europa.eu/data/' + s.zip, { headers: { 'User-Agent': L.UA } });
        fs.writeFileSync(zp, Buffer.from(await r.arrayBuffer()));
      }
      fs.mkdirSync(dd, { recursive: true });
      cp.execFileSync('unzip', ['-oq', zp, '-d', dd]);
    }
    const proj = table(fs.readFileSync(path.join(dd, 'project.csv'), 'utf8'));
    const coord = new Map(), links = new Map();
    { const it = rows(fs.readFileSync(path.join(dd, 'organization.csv'), 'utf8')); const h = it.next().value; const ip = h.indexOf('projectID'), ir = h.indexOf('role'), ic = h.indexOf('country');
      for (const r of it) if (r[ir] === 'coordinator') coord.set(r[ip], r[ic]); }
    { const it = rows(fs.readFileSync(path.join(dd, 'webLink.csv'), 'utf8')); const h = it.next().value; const ip = h.indexOf('projectID'), iu = h.indexOf('physUrl');
      for (const r of it) { if (!links.has(r[ip])) links.set(r[ip], []); links.get(r[ip]).push(r[iu]); } }
    let kept = 0;
    for (const p of proj) {
      const txt = `${p.title} ${p.objective} ${p.keywords}`;
      const ls = links.get(p.id) || [];
      const forge = ls.find((u) => FORGE.test(u) && !/arquivo\.pt|web\.archive/.test(u.slice(0, 40)));
      const textHit = OSS.test(txt);
      if (!textHit && !forge) continue;
      kept++;
      const r = L.blank();
      r.id = `cordis-${p.id}`;
      r.name = p.acronym || p.title; r.name_original = p.title;
      r.side = 'EU'; r.funder_level = 'EU';
      const cc = coord.get(p.id) || '';
      r.country = CC[cc] || cc || 'EU';
      r.funder = `European Commission - ${s.fp} (CORDIS)`;
      r.programme = `${s.fp} / ${p.fundingScheme || ''} / ${p.topics || ''}`.replace(/ \/ +\/ /g, ' / ').replace(/ \/ $/, '');
      r.grant_id = p.id;
      r.amount = num(p.ecMaxContribution); r.currency = r.amount === null ? '' : 'EUR'; r.amount_type = r.amount === null ? 'unknown' : 'awarded';
      r.years = `${(p.startDate || '').slice(0, 4)}-${(p.endDate || '').slice(0, 4)}`;
      // description: first sentence(s) of the objective, trimmed (own-words requirement: we keep only a short extract and the title)
      const mm = OSS.exec(p.objective || ''); const snip = mm ? ' Objective excerpt (CC BY 4.0, CORDIS): "...' + (p.objective || '').slice(Math.max(0, mm.index - 70), mm.index + 90).replace(/\s+/g, ' ') + '..."' : (forge ? ' Project links a public code repository.' : '');
      r.description = L.trunc(`${p.title}.${snip}`, 330);
      r.domain = L.classify(txt);
      r.repo_url = forge ? forge.replace(/^.*?(https?:\/\/(?:www\.)?(?:github|gitlab)[^"\s]*)$/, '$1') : '';
      r.website = ls.find((u) => !FORGE.test(u) && !/arquivo\.pt|ec\.europa\.eu/.test(u) && /^https?:/.test(u)) || '';
      r.sources = [{ url: `https://cordis.europa.eu/project/id/${p.id}` }];
      r.evidence = forge && textHit ? 'A' : (textHit ? 'A' : 'B');
      r.status = 'unknown';
      r.oss_basis = (textHit ? 'text-mentions-open-source' : '') + (forge ? (textHit ? '+' : '') + 'repo-link' : '');
      out.push(r);
    }
    console.log(s.key, 'projects', proj.length, 'kept', kept);
  }
  L.upsert(out, 'cordis');
})();
