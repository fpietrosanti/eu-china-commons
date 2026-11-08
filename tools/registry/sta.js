'use strict';
// Harvester: Sovereign Tech Agency (Germany) investments - https://www.sovereign.tech/tech
// Usage: node tools/registry/sta.js [--refresh]
const L = require('./lib');
const BASE = 'https://www.sovereign.tech';
(async () => {
  const refresh = process.argv.includes('--refresh');
  const idx = await L.get(BASE + '/tech');
  if (idx.status !== 200) { console.error('index failed', idx.status); process.exit(1); }
  const slugs = [...new Set([...idx.text.matchAll(/href="https:\/\/www\.sovereign\.tech\/tech\/([a-z0-9][^"#?\/]*)"/g)].map((m) => m[1]))];
  console.log('STA investments listed:', slugs.length);
  const recs = await L.pool(slugs, 3, async (s) => {
    const url = `${BASE}/tech/${s}`;
    const p = await L.cachedGet('sta', s, url, { refresh, delay: 300 });
    if (p.status !== 200) return null;
    const h = p.text;
    const t = L.strip(h.replace(/<(a|button)[\s\S]*?<\/\1>/g, ' '));
    const title = L.strip((/<h1[^>]*>([\s\S]*?)<\/h1>/.exec(h) || [])[1] || s);
    const sub = L.strip((/<\/h1>\s*<(?:p|div)[^>]*>([\s\S]*?)<\/(?:p|div)>/.exec(h) || [])[1] || '');
    const amt = /Investment Amount\s*(?:<[^>]*>|\s)*([€$]\s?[\d.,]+)/i.exec(h.replace(/<[^>]*>/g, ' ')) ;
    const yrs = /Investment Year\(s\)\s*([0-9, –-]+)/i.exec(h.replace(/<[^>]*>/g, ' '));
    const st = /Status:\s*(\w+)/i.exec(h.replace(/<[^>]*>/g, ' '));
    const links = [...h.matchAll(/<a[^>]*href="(https?:\/\/[^"]+)"[^>]*>([\s\S]{0,400}?)<\/a>/g)].map((m) => ({ u: m[1], t: m[2].replace(/<[^>]*>/g, ' ').trim() })).filter((x) => !/sovereign\.tech|mastodon|bsky|linkedin|brevo/.test(x.u));
    const repo = (links.find((x) => /^repository$/i.test(x.t)) || links.find((x) => L.repoKind(x.u)) || {}).u || '';
    const web = (links.find((x) => x.u !== repo && !L.repoKind(x.u)) || {}).u || '';
    const r = L.blank();
    r.id = 'sta-' + s; r.name = title; r.side = 'EU'; r.funder_level = 'member-state'; r.country = 'Germany';
    r.funder = 'Sovereign Tech Agency (SPRIND-owned GmbH, funded by BMWK/BMWE)';
    r.programme = 'Sovereign Tech Fund / Agency investment';
    if (amt) { r.amount = parseFloat(amt[1].replace(/[^\d.]/g, '')); r.currency = 'EUR'; r.amount_type = 'awarded'; }
    r.years = yrs ? yrs[1].trim().replace(/\s*,\s*/g, ',') : '';
    r.description = L.trunc(sub || title, 300);
    r.domain = L.classify(title + ' ' + sub + ' ' + (/<main[\s\S]*/.exec(h) || [''])[0].replace(/<[^>]*>/g, ' ').slice(0, 1500));
    r.repo_url = repo; r.website = web;
    r.status = st && /past/i.test(st[1]) ? 'unknown' : 'active';
    r.sources = [{ url }]; r.evidence = 'A';
    return r;
  });
  L.upsert(recs.filter(Boolean), 'sta');
})();
