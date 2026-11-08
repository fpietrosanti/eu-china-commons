'use strict';
// Harvester: OpenAtom Foundation (开放原子开源基金会) graduated / incubating projects - https://www.openatom.cn/projects
// Foundation is supervised by MIIT; donors are named on the page. No grant amounts are published per project.
const L = require('./lib');
(async () => {
  const r = await L.get('https://www.openatom.cn/projects');
  if (r.status !== 200) { console.error('failed', r.status, r.error); process.exit(1); }
  const h = r.text;
  const heads = [...h.matchAll(/<h2[^>]*>([^<]{2,20})<\/h2>/g)].map((m) => ({ i: m.index, t: m[1] }));
  const cards = [...h.matchAll(/<span class="max-w-70%[^>]*title="([^"]+)">/g)];
  const seen = new Map();
  cards.forEach((m, k) => {
    const end = k + 1 < cards.length ? cards[k + 1].index : m.index + 6000;
    const blk = h.slice(m.index, Math.min(end, m.index + 6000));
    const name = L.decode(m[1]).trim();
    const sec = [...heads].reverse().find((x) => x.i < m.index);
    const field = (lab) => { const mm = new RegExp(lab + ':</span><span class="truncate">([^<]*)</span>').exec(blk); return mm ? L.decode(mm[1]).trim() : ''; };
    const links = [...blk.matchAll(/<a href="(https?:\/\/[^"]+)"[^>]*>(代码仓|官网|了解详情)<\/a>/g)].map((x) => ({ u: x[1].trim(), t: x[2] }));
    const repo = (links.find((x) => x.t === '代码仓') || links.find((x) => x.t === '了解详情') || {}).u || '';
    const web = (links.find((x) => x.t === '官网') || {}).u || '';
    if (!seen.has(name)) seen.set(name, { name, section: sec ? sec.t : '', donor: field('捐赠主体'), contrib: field('贡献主体'), feat: field('技术特点'), value: field('项目价值'), repo, web });
  });
  console.log('OpenAtom projects parsed:', seen.size);
  const recs = [];
  for (const p of seen.values()) {
    const rec = L.blank();
    rec.id = 'openatom-' + L.slug(p.name || L.hash(p.name));
    if (rec.id === 'openatom-') rec.id += L.hash(p.name);
    rec.name = p.name; rec.name_original = p.name; rec.side = 'CN'; rec.funder_level = 'foundation'; rec.country = 'China';
    const org = (x) => (/(公司|大学|学院|实验室|协会|集团|研究院|研究所|社区|Inc|Ltd|Co.|Corp)/.test(x) ? x : ''); // drop individual donors (privacy)
    p.donor = org(p.donor); p.contrib = org(p.contrib);
    rec.funder = 'OpenAtom Foundation 开放原子开源基金会 (MIIT-supervised)' + (p.donor ? `; donor: ${p.donor}` : '') + (p.contrib ? `; contributor: ${p.contrib}` : '');
    rec.programme = `OpenAtom ${p.section || 'projects'}`;
    rec.description = L.trunc([p.value, p.feat].filter(Boolean).join(' - ') || p.name, 300);
    rec.domain = L.classify(p.name + ' ' + p.value + ' ' + p.feat);
    rec.repo_url = p.repo; rec.website = p.web !== p.repo ? p.web : '';
    rec.status = /归档/.test(p.section) ? 'archived' : 'active';
    rec.sources = [{ url: 'https://www.openatom.cn/projects' }];
    rec.evidence = 'B'; // foundation's own project page; donation amounts per project not published
    recs.push(rec);
  }
  L.upsert(recs, 'openatom');
})();
