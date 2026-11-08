'use strict';
// Maintenance: check every record's repo_url and store repo_http (+ status/licence when the forge tells us).
//  - github.com repos: GitHub GraphQL in batches of 80 (needs `gh auth token` or GH_TOKEN): existence, isArchived, SPDX licence.
//  - other forges: HTTP HEAD (GET fallback), concurrency 5, small per-host delay.
// 404/410 -> repo_http set, status stays unless 'archived' is declared by the forge (we cannot tell deleted from private).
// Usage: node tools/registry/repo_check.js [--recheck] [--limit N] [--no-github]
const { execSync } = require('child_process');
const L = require('./lib');
let TOKEN = process.env.GH_TOKEN || '';
if (!TOKEN) { try { TOKEN = execSync('gh auth token', { encoding: 'utf8' }).trim(); } catch (e) {} }

async function ghBatch(items) { // items: [{id, owner, name}]
  const q = 'query {' + items.map((x, i) => `r${i}: repository(owner: ${JSON.stringify(x.owner)}, name: ${JSON.stringify(x.name)}) { isArchived licenseInfo { spdxId } }`).join(' ') + '}';
  for (let t = 0; t < 4; t++) {
    try {
      const res = await fetch('https://api.github.com/graphql', { method: 'POST', headers: { Authorization: 'Bearer ' + TOKEN, 'User-Agent': L.UA, 'Content-Type': 'application/json' }, body: JSON.stringify({ query: q }) });
      if (res.status === 502 || res.status === 403 || res.status === 429) { await L.sleep(20000); continue; }
      const j = await res.json();
      return items.map((x, i) => {
        const d = j.data && j.data['r' + i];
        if (d) return { id: x.id, repo_http: 200, archived: !!d.isArchived, licence: d.licenseInfo && d.licenseInfo.spdxId && d.licenseInfo.spdxId !== 'NOASSERTION' ? d.licenseInfo.spdxId : '' };
        const e = (j.errors || []).find((er) => er.path && er.path[0] === 'r' + i);
        return { id: x.id, repo_http: e && e.type === 'NOT_FOUND' ? 404 : 0 };
      });
    } catch (e) { await L.sleep(5000); }
  }
  return items.map((x) => ({ id: x.id, repo_http: 0 }));
}

function commit(results) {
  L.withLock(() => {
    const now = L.load(); const idx = new Map(now.map((r) => [r.id, r])); const t = L.today(); let n = 0;
    for (const x of results) {
      const r = idx.get(x.id); if (!r) continue;
      r.repo_http = x.repo_http; r.last_checked = t; n++;
      if (x.archived) r.status = 'archived';
      else if (x.repo_http === 200 && r.status === 'unknown') r.status = 'active';
      if (x.licence && !r.licence) r.licence = x.licence;
    }
    L.save(now);
    const dist = {}; results.forEach((x) => { dist[x.repo_http] = (dist[x.repo_http] || 0) + 1; });
    console.log('checked', n, JSON.stringify(dist));
  });
}

(async () => {
  const args = process.argv.slice(2);
  const recheck = args.includes('--recheck');
  const limit = args.includes('--limit') ? +args[args.indexOf('--limit') + 1] : Infinity;
  const db = L.load();
  const todo = db.filter((r) => /^https?:\/\//.test(r.repo_url || '') && (recheck || !r.repo_http)).slice(0, limit);
  const LISTED = /^(opencode_de|code_overheid_nl)$/; // repo existence proven by the listing API at harvest time (repo_http set by the harvester)
  const gh = [], other = [];
  for (const r of todo) {
    if (LISTED.test(r.harvester)) continue;
    const m = /^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/#?]+)/i.exec(r.repo_url);
    if (m && TOKEN && !args.includes('--no-github')) gh.push({ id: r.id, owner: m[1], name: m[2].replace(/\.git$/, '') }); else other.push(r);
  }
  console.log('repo urls to check:', todo.length, '(github via GraphQL:', gh.length, ', other via HTTP:', other.length + ')');
  const results = [];
  for (let i = 0; i < gh.length; i += 80) {
    results.push(...await ghBatch(gh.slice(i, i + 80)));
    if ((i / 80) % 20 === 0) console.log('  github', i, '/', gh.length);
    await L.sleep(400);
  }
  commit(results.slice());
  results.length = 0;
  const byHost = {};
  const res = await L.pool(other, 5, async (r) => {
    let host; try { host = new URL(r.repo_url).host; } catch (e) { return { id: r.id, repo_http: 0 }; }
    const wait = Math.max(0, (byHost[host] || 0) + 150 - Date.now()); byHost[host] = Date.now() + wait; if (wait) await L.sleep(wait);
    let x = await L.get(r.repo_url, { method: 'HEAD', tries: 2, timeout: 20000 });
    if (x.status === 405 || x.status === 403 || x.status === 0) x = await L.get(r.repo_url, { tries: 1, timeout: 20000 });
    return { id: r.id, repo_http: x.status || 0 };
  });
  results.push(...res.filter((x) => x && x.id));
  commit(results);
})();
