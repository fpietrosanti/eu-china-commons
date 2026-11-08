'use strict';
// Harvester: code.gouv.fr - French public-sector source-code directory (https://code.gouv.fr/data/repositories.json).
// Keeps licensed, non-fork repos that have >=5 stars OR a publiccode.yml OR sit on a government/education forge; drops student/TP repos.
// NOTE: the upstream JSON snapshot is dated (latest 'u' ~ mid-2024) - see docs/REGISTRY.md.
const L = require('./lib');
const GOVHOST = /(gouv\.fr|adullact|mim-libre|apps\.education\.fr|etalab|data\.gouv|numerique)/i;
(async () => {
  const r = await L.get('https://code.gouv.fr/data/repositories.json', { timeout: 120000 });
  if (r.status !== 200) { console.error('failed', r.status); process.exit(1); }
  const j = JSON.parse(r.text);
  const recs = [];
  for (const x of j) {
    if (!x.li || x['f?'] || x['t?']) continue;
    if (/\.etu\/|(^|\/)(tp|td|projet)[-_0-9]/i.test(x.fn)) continue;
    if (!(x.f >= 5 || x['p?'] || GOVHOST.test(x.p))) continue;
    const org = (x.o || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
    const rec = L.blank();
    rec.id = 'codegouv-' + L.slug(x.p + '-' + x.fn);
    rec.name = x.n; rec.side = 'EU'; rec.country = 'France';
    rec.funder_level = /(ville|metropole|region|departement|mairie)/i.test(org) ? 'region-city' : 'member-state';
    rec.funder = `French public sector (organisation ${org}; listed in code.gouv.fr)`;
    rec.programme = 'code.gouv.fr public-sector source code directory';
    rec.description = L.trunc(x.d || x.n, 300);
    rec.domain = L.classify(x.n + ' ' + x.d + ' ' + (x.l || ''));
    rec.repo_url = x.id; rec.licence = x.li;
    rec.status = 'unknown';
    rec.sources = [{ url: 'https://code.gouv.fr/data/repositories.json' }, { url: 'https://code.gouv.fr/sources/search?q=' + encodeURIComponent(x.n) }];
    rec.evidence = 'B'; // repository belongs to an organisation listed as French public-sector; no grant amount
    rec.oss_basis = 'public-sector organisation in code.gouv.fr (amount not stated)';
    recs.push(rec);
  }
  console.log('code.gouv.fr: repos', j.length, 'selected', recs.length);
  L.upsert(recs, 'codegouv');
})();
