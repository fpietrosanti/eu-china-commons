'use strict';
// Links registry records to programme-level funding records in data/funding/{eu,cn}.json via `funding_ref` (array of ids).
// Pure post-processing; idempotent. Usage: node tools/registry/link_funding.js
const fs = require('fs'), path = require('path');
const L = require('./lib');
const ids = [...JSON.parse(fs.readFileSync(path.join(L.ROOT, 'data/funding/eu.json'), 'utf8')), ...JSON.parse(fs.readFileSync(path.join(L.ROOT, 'data/funding/cn.json'), 'utf8'))].map((r) => r.id);
const has = (id) => ids.includes(id);
const pick = (...c) => c.filter(has);
const db = L.load();
let n = 0;
for (const r of db) {
  let ref = [];
  if (r.harvester === 'nlnet' && r.funder_level === 'EU') {
    const p = r.programme || '';
    if (/PET/i.test(p)) ref = pick('eu-ngi0-pet-2018');
    else if (/Discovery/i.test(p)) ref = pick('eu-ngi0-discovery-2018');
    else if (/Entrust/i.test(p)) ref = pick('eu-ngi0-entrust-2022');
    else if (/Core/i.test(p)) ref = pick('eu-ngi0-core-2023');
    else if (/Commons/i.test(p)) ref = pick('eu-ngi0-commons-fund-2024');
  } else if (r.harvester === 'sta' || /Sovereign Tech/.test(r.programme || '')) {
    ref = ids.filter((i) => /^de-sovereign-tech-fund-/.test(i));
  } else if (/Prototype Fund/.test(r.programme || '')) {
    ref = ids.filter((i) => /^de-prototype-fund-/.test(i));
  } else if (r.harvester === 'openatom') {
    ref = ids.filter((i) => /^cn-openatom-/.test(i));
  }
  if (ref.length) { r.funding_ref = ref; n++; }
}
L.save(db);
console.log('linked', n, 'records to data/funding ids');
