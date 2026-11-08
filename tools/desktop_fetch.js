#!/usr/bin/env node
// "Desktop origin" fetcher (same pattern as analisi-spesa-ict, origine desktop): runs on Fabio's PC, so requests leave
// from his residential connection instead of the datacenter server. Used for queue items that the server cannot reach.
// Rules: honest User-Agent with project URL, one request at a time, >= 3 s between requests, no CAPTCHA solving,
// no IP/proxy rotation, no login. Pages answering with a challenge are recorded as such and left for an assisted session.
// Output: sources/archive-desktop/files/<sha256>.<ext>, sources/archive-desktop/index.tsv (one row per attempt, with
// origin public IP + ASN), and data/queues/desktop-results.json (per URL: status, title, file, sha256).
// Usage: node tools/desktop_fetch.js [--queue vpn|assisted|both] [--limit N]
'use strict';
const fs = require('fs'); const path = require('path'); const crypto = require('crypto');
const R = path.join(__dirname, '..'); const p = (...a) => path.join(R, ...a);
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const which = arg('queue', 'vpn'); const LIMIT = +arg('limit', 1e9);
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 eu-china-commons-observatory (+https://eu-china-commons.eu)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DIR = p('sources/archive-desktop/files'); fs.mkdirSync(DIR, { recursive: true });
const IDX = p('sources/archive-desktop/index.tsv');
if (!fs.existsSync(IDX)) fs.writeFileSync(IDX, 'utc\torigin_ip\torigin_asn\turl\tfinal_url\thttp\tbytes\tsha256\tfile\tclass\n');
const OUT = p('data/queues/desktop-results.json');
const results = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};

const CHALLENGE = /(just a moment|ci siamo quasi|attention required|cf-chl|captcha|安全验证|请进行安全验证|the access is blocked|拒绝执行|云防护|access denied)/i;
async function origin() {
  try {
    const ip = (await (await fetch('https://api.ipify.org')).text()).trim();
    const j = await (await fetch('https://stat.ripe.net/data/prefix-overview/data.json?resource=' + ip)).json();
    const a = (j.data.asns || [])[0] || {}; return { ip, asn: `AS${a.asn || '?'} ${a.holder || ''}`.trim() };
  } catch { return { ip: '?', asn: '?' }; }
}
function items() {
  const out = [];
  const add = (f) => { if (fs.existsSync(p(f))) for (const x of JSON.parse(fs.readFileSync(p(f), 'utf8'))) if (x.status === 'open' && x.url && /^https?:/.test(x.url)) out.push(x); };
  if (which === 'vpn' || which === 'both') add('data/queues/vpn.json');
  if (which === 'assisted' || which === 'both') add('data/queues/assisted.json');
  const seen = new Set(); return out.filter((x) => (seen.has(x.url) ? false : seen.add(x.url)));
}
(async () => {
  const o = await origin(); console.log('origin', o);
  let n = 0;
  for (const it of items()) {
    if (n++ >= LIMIT) break;
    if (results[it.url] && results[it.url].class === 'ok') continue;
    const utc = new Date().toISOString(); let rec;
    try {
      const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 30000);
      const r = await fetch(it.url, { headers: { 'User-Agent': UA, 'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8' }, redirect: 'follow', signal: ctl.signal });
      clearTimeout(t);
      const buf = Buffer.from(await r.arrayBuffer());
      const ct = r.headers.get('content-type') || '';
      const txt = /html|text/.test(ct) ? buf.toString('utf8') : '';
      const title = (txt.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1]?.trim().slice(0, 120) || '';
      const cls = r.status >= 400 ? `http-${r.status}` : (txt && CHALLENGE.test(title + txt.slice(0, 3000)) && buf.length < 60000) ? 'challenge' : 'ok';
      const sha = crypto.createHash('sha256').update(buf).digest('hex');
      const ext = /pdf/.test(ct) ? 'pdf' : /html/.test(ct) ? 'html' : 'bin';
      const file = `sources/archive-desktop/files/${sha}.${ext}`;
      if (cls === 'ok' && !fs.existsSync(p(file))) fs.writeFileSync(p(file), buf);
      rec = { url: it.url, final_url: r.url, http: r.status, bytes: buf.length, sha256: sha, file: cls === 'ok' ? file : null, title, class: cls, origin: o, utc, origin_queue: it.origin, ref: it.ref || null };
    } catch (e) { rec = { url: it.url, http: 0, class: 'error', error: String(e.cause?.code || e.message).slice(0, 80), origin: o, utc, origin_queue: it.origin, ref: it.ref || null }; }
    results[it.url] = rec;
    fs.appendFileSync(IDX, [utc, o.ip, o.asn, it.url, rec.final_url || '', rec.http, rec.bytes || 0, rec.sha256 || '', rec.file || '', rec.class].join('\t') + '\n');
    fs.writeFileSync(OUT, JSON.stringify(results, null, 2) + '\n');
    console.log(rec.class.padEnd(10), rec.http, it.url, rec.title || rec.error || '');
    await sleep(3000);
  }
})();
