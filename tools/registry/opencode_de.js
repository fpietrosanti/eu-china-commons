'use strict';
// Harvester: openCoDE (Germany, public-administration GitLab run by ZenDiS) - public group-owned projects.
// API: https://gitlab.opencode.de/api/v4/projects (anonymous). Personal namespaces are skipped (no personal data).
const L = require('./lib');
const BASE = 'https://gitlab.opencode.de/api/v4/projects?per_page=100&simple=false&order_by=created_at&sort=desc';
function level(n) {
  if (/(Land|Landes|Stadt|Kreis|Gemeinde|Freistaat|Senat|Hansestadt|Kommune|Bezirk|Verbandsgemeinde|Regional)/i.test(n)) return 'region-city';
  return 'member-state';
}
(async () => {
  const recs = [];
  for (let p = 1; p <= 60; p++) {
    const r = await L.get(`${BASE}&page=${p}`);
    if (r.status !== 200) { console.log('stop at page', p, r.status); break; }
    const j = JSON.parse(r.text);
    if (!j.length) break;
    for (const x of j) {
      if (!x.namespace || x.namespace.kind !== 'group' || x.empty_repo) continue;
      const top = (x.name_with_namespace || '').split(' / ')[0].trim();
      if (!top) continue;
      const rec = L.blank();
      rec.id = 'opencode-' + x.id;
      rec.name = x.name; rec.side = 'EU'; rec.country = 'Germany'; rec.funder_level = level(top);
      rec.funder = `${top} (German public sector; hosted on openCoDE by ZenDiS)`;
      rec.programme = 'openCoDE public-sector code platform';
      rec.years = x.created_at ? x.created_at.slice(0, 4) : '';
      rec.description = L.trunc(x.description || x.name, 300);
      rec.domain = L.classify(x.name + ' ' + (x.description || '') + ' ' + (x.topics || []).join(' '));
      rec.repo_url = x.web_url; rec.licence = '';
      rec.repo_http = 200; rec.status = x.archived ? 'archived' : 'active';
      rec.sources = [{ url: x.web_url }]; rec.evidence = 'B'; rec.oss_basis = 'public-administration group on openCoDE (amount not stated)';
      recs.push(rec);
    }
    if (p % 10 === 0) console.log('  page', p, 'records', recs.length);
    await L.sleep(300);
  }
  L.upsert(recs, 'opencode_de');
})();
