'use strict';
// Harvester: code.overheid.nl (Dutch government Gitea) - public repositories of government organisations.
const L = require('./lib');
(async () => {
  const recs = [];
  for (let p = 1; p <= 100; p++) {
    const r = await L.get(`https://code.overheid.nl/api/v1/repos/search?limit=50&page=${p}&private=false`);
    if (r.status !== 200) { console.log('stop', p, r.status); break; }
    const j = JSON.parse(r.text);
    if (!j.data || !j.data.length) break;
    for (const x of j.data) {
      if (x.empty || x.fork) continue;
      const owner = x.owner && x.owner.login || '';
      const rec = L.blank();
      rec.id = 'codeoverheid-' + x.id;
      rec.name = x.name; rec.side = 'EU'; rec.country = 'Netherlands';
      rec.funder_level = /(gemeente|provincie|waterschap|regio)/i.test(owner) ? 'region-city' : 'member-state';
      rec.funder = `${owner} (Dutch government organisation on code.overheid.nl)`;
      rec.programme = 'code.overheid.nl government code platform';
      rec.years = x.created_at ? x.created_at.slice(0, 4) : '';
      rec.description = L.trunc(x.description || x.name, 300);
      rec.domain = L.classify(x.name + ' ' + (x.description || ''));
      rec.repo_url = x.html_url; rec.website = x.website || '';
      rec.repo_http = 200; rec.status = x.archived ? 'archived' : 'active';
      rec.sources = [{ url: x.html_url }]; rec.evidence = 'B'; rec.oss_basis = 'government organisation on code.overheid.nl (amount not stated)';
      recs.push(rec);
    }
    await L.sleep(300);
  }
  L.upsert(recs, 'code_overheid_nl');
})();
