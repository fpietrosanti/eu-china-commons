'use strict';
// Computes registry statistics. `node tools/registry/stats.js` prints markdown; `--write` replaces the block between
// <!-- STATS:BEGIN --> and <!-- STATS:END --> in docs/REGISTRY.md.
const fs = require('fs'), path = require('path');
const L = require('./lib');
const db = L.load();
const cnt = (f) => { const m = new Map(); for (const r of db) { for (const k of [].concat(f(r))) { if (k === '' || k === undefined) continue; m.set(k, (m.get(k) || 0) + 1); } } return [...m.entries()].sort((a, b) => b[1] - a[1]); };
const table = (title, rows, head) => `**${title}**\n\n| ${head} | records |\n|---|---:|\n` + rows.map(([k, v]) => `| ${k} | ${v} |`).join('\n') + '\n';
const out = [];
out.push(`Total records: **${db.length}** (EU ${db.filter((r) => r.side === 'EU').length}, CN ${db.filter((r) => r.side === 'CN').length}). Generated ${L.today()} by tools/registry/stats.js.\n`);
out.push(table('By side x funder level', cnt((r) => `${r.side} / ${r.funder_level}`), 'side / level'));
out.push(table('By harvester', cnt((r) => r.harvester), 'harvester'));
out.push(table('By evidence level', cnt((r) => r.evidence), 'evidence'));
out.push(table('By country (top 20)', cnt((r) => r.country).slice(0, 20), 'country'));
out.push(table('By programme/funder family (top 25)', cnt((r) => (r.programme || r.funder || '').replace(/ \/ .*$/, '').slice(0, 70)).slice(0, 25), 'programme'));
out.push(table('By domain', cnt((r) => r.domain || []).slice(0, 20), 'domain'));
const cn = db.filter((r) => r.side === 'CN');
out.push(table('CN records by harvester', (() => { const m = new Map(); cn.forEach((r) => m.set(r.harvester, (m.get(r.harvester) || 0) + 1)); return [...m.entries()].sort((a, b) => b[1] - a[1]); })(), 'harvester'));
out.push(table('CN records by funder level', (() => { const m = new Map(); cn.forEach((r) => m.set(r.funder_level + ' / ' + (r.region || '-'), (m.get(r.funder_level + ' / ' + (r.region || '-')) || 0) + 1)); return [...m.entries()].sort((a, b) => b[1] - a[1]); })(), 'level / region'));
const amt = db.filter((r) => r.amount_type === 'awarded' && r.currency === 'EUR');
const byH = {}; amt.forEach((r) => { byH[r.harvester] = byH[r.harvester] || { n: 0, s: 0 }; byH[r.harvester].n++; byH[r.harvester].s += r.amount; });
out.push(`**Records with a stated awarded amount (EUR)**: ${amt.length} of ${db.length}. ` + Object.entries(byH).map(([h, v]) => `${h}: ${v.n} records, EUR ${Math.round(v.s).toLocaleString('en-US')} (whole-project grants, not OSS-only - do not add up across sources)`).join('; ') + '\n');
const withRepo = db.filter((r) => r.repo_url).length, checked = db.filter((r) => r.repo_http), dead = checked.filter((r) => r.repo_http >= 400 || r.repo_http === 0);
out.push(`**Repository links**: ${withRepo} records have a repo_url; ${checked.length} checked; ${dead.length} not reachable (HTTP >= 400 or no answer).\n`);
const txt = out.join('\n');
if (process.argv.includes('--write')) {
  const f = path.join(L.ROOT, 'docs', 'REGISTRY.md');
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(/<!-- STATS:BEGIN -->[\s\S]*<!-- STATS:END -->/, () => '<!-- STATS:BEGIN -->\n' + txt + '\n<!-- STATS:END -->');
  fs.writeFileSync(f, s, 'utf8');
  console.log('wrote docs/REGISTRY.md stats block');
} else console.log(txt);
