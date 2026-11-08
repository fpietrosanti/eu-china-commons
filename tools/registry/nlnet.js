'use strict';
// Harvester: NLnet / NGI project list (https://nlnet.nl/project/) + per-project pages.
// Usage: node tools/registry/nlnet.js [--limit N] [--refresh]
const L = require('./lib');
const BASE = 'https://nlnet.nl/project/';
const args = process.argv.slice(2);
const limit = args.includes('--limit') ? +args[args.indexOf('--limit') + 1] : Infinity;
const refresh = args.includes('--refresh');

(async () => {
  const idx = await L.get(BASE);
  if (idx.status !== 200) { console.error('index fetch failed', idx.status, idx.error); process.exit(1); }
  const rows = [];
  const re = /<tr valign="top">\s*<td><a href="([^"]+)">([\s\S]*?)<\/a><\/td>\s*<td>([^<]*)<\/td>\s*<td>([^<]*)<\/td>\s*<td>([^<]*)<\/td>(?:\s*<td>([\s\S]*?)<\/td>)?/g;
  let m;
  while ((m = re.exec(idx.text))) rows.push({ slug: m[1], name: L.strip(m[2]), fund: L.decode(m[3]).trim(), start: m[4].trim(), end: m[5].trim(), tagline: L.strip(m[6] || '') });
  console.log('NLnet index rows:', rows.length);
  const todo = rows.slice(0, limit);
  const recs = await L.pool(todo, 4, async (r) => {
    const url = BASE + r.slug;
    const p = await L.cachedGet('nlnet', r.slug, url, { refresh, delay: 200 });
    const html = p.status === 200 ? p.text : '';
    const rec = L.blank();
    rec.id = 'nlnet-' + L.slug(r.slug);
    rec.name = r.name; rec.side = 'EU';
    rec.programme = r.fund;
    rec.years = r.start ? (r.end && r.end !== r.start ? `${r.start}-${r.end}` : r.start) : '';
    rec.sources = [{ url }];
    rec.harvester = 'nlnet';
    let desc = r.tagline;
    if (html) {
      const abs = /<div class="abstract">([\s\S]*?)<\/div>/.exec(html);
      const abstract = abs ? L.strip(abs[1]) : '';
      const ack = /This project was funded through([\s\S]*?)<\/p>/.exec(html);
      const ackT = ack ? L.strip('This project was funded through' + ack[1]) : '';
      const period = /Period:\s*([0-9]{4}(?:-[0-9]{2})?)\s*(?:—|-)\s*([0-9]{4}(?:-[0-9]{2})?)?/.exec(html.replace(/<[^>]+>/g, ' '));
      if (period) rec.years = period[2] ? `${period[1]}/${period[2]}` : period[1];
      const ga = /grant agreement\s*(?:<[^>]+>)*\s*N(?:<sup>)?o?(?:<\/sup>)?\s*(\d{6,})/i.exec(html) || /grant agreement[^0-9]{0,40}(\d{6,})/i.exec(ackT);
      if (ga) rec.grant_id = ga[1];
      const web = /The project's own website:\s*<a href="([^"]+)"/.exec(html);
      if (web) rec.website = web[1];
      const src = /Source code\s*:?\s*<br\s*\/?>\s*<a[^>]*href="([^"]+)"/i.exec(html);
      if (src) rec.repo_url = src[1];
      else {
        const any = [...html.matchAll(/<a[^>]*href="(https?:\/\/[^"]+)"/g)].map((x) => x[1]).find((u) => L.repoKind(u) && !/nlnet|ngi\.eu/.test(u));
        if (any) rec.repo_url = any;
      }
      if (!rec.website && rec.repo_url) rec.website = '';
      if (abstract) desc = r.tagline ? `${r.tagline.replace(/\.$/, '')}. ${L.trunc(abstract, 260)}` : L.trunc(abstract, 300);
      const ec = /European Commission/i.test(ackT);
      const eu = ec || /NGI|Next Generation Internet/i.test(r.fund);
      if (eu) {
        rec.funder_level = 'EU'; rec.country = 'EU';
        rec.funder = 'European Commission (DG CNECT) - Next Generation Internet, via NLnet (cascade funding)';
      } else {
        rec.funder_level = /Ministry|Ministerie|Government|Province|Provincie|Municipality|Gemeente/i.test(ackT) ? 'member-state' : 'foundation'; rec.country = 'Netherlands';
        rec.funder = 'Stichting NLnet' + (ackT ? ' (' + L.trunc(ackT.replace(/^This project was funded through\s*/, ''), 160) + ')' : '');
      }
      rec.evidence = 'A';
      rec.domain = L.classify(r.name + ' ' + desc);
      const themes = [...html.matchAll(/href="\/thema\/([^".]+)\.html"/g)].map((x) => decodeURIComponent(x[1].replace(/\+/g, ' '))).filter((t) => !/^NGI0/.test(t) && !/Services|Applications|Search|Discovery|Entrust|Commons|Core|Review|Assure|PET|index/i.test(t));
      if (themes.length) rec.domain = [...new Set([...rec.domain, ...themes.map((t) => t.toLowerCase())])].slice(0, 6);
    } else {
      rec.funder_level = /NGI|Next Generation/i.test(r.fund) ? 'EU' : 'foundation';
      rec.country = rec.funder_level === 'EU' ? 'EU' : 'Netherlands';
      rec.funder = rec.funder_level === 'EU' ? 'European Commission (DG CNECT) - Next Generation Internet, via NLnet' : 'Stichting NLnet';
      rec.evidence = 'A';
      rec.domain = L.classify(r.name + ' ' + desc);
    }
    rec.description = L.trunc(desc || r.name, 320);
    rec.status = 'unknown';
    return rec;
  });
  const ok = recs.filter((r) => r && r.id);
  L.upsert(ok, 'nlnet');
})();
