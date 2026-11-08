'use strict';
// Shared helpers for the registry harvesters. UTF-8 everywhere.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DB = path.join(ROOT, 'data', 'registry', 'projects.json');
const CACHE = path.join(__dirname, '.cache');
const VPN_FILE = path.join(ROOT, 'data', 'cn_vpn_needed.txt');
fs.mkdirSync(CACHE, { recursive: true });

const UA = 'EU-China-Commons-Observatory-registry/1.0 (research; +https://eu-china-commons.eu)';
const today = () => new Date().toISOString().slice(0, 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Fields in canonical order
const FIELDS = ['id', 'name', 'name_original', 'side', 'funder_level', 'country', 'region', 'funder', 'programme',
  'grant_id', 'amount', 'currency', 'amount_type', 'years', 'description', 'domain', 'repo_url', 'website', 'licence',
  'status', 'repo_http', 'sources', 'evidence', 'harvester', 'first_seen', 'last_checked'];

function blank() {
  return {
    id: '', name: '', name_original: '', side: '', funder_level: '', country: '', region: '', funder: '', programme: '',
    grant_id: '', amount: null, currency: '', amount_type: 'unknown', years: '', description: '', domain: [],
    repo_url: '', website: '', licence: '', status: 'unknown', repo_http: null, sources: [], evidence: 'C',
    harvester: '', first_seen: '', last_checked: '',
  };
}

function slug(s) {
  return String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
}

// ---------- DB ----------
function load() {
  try { return JSON.parse(fs.readFileSync(DB, 'utf8')); } catch (e) { return []; }
}
function save(arr) {
  arr.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const out = arr.map((r) => { const o = {}; for (const k of FIELDS) o[k] = r[k]; for (const k of Object.keys(r)) if (!(k in o)) o[k] = r[k]; return o; });
  fs.mkdirSync(path.dirname(DB), { recursive: true });
  const tmp = DB + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(out, null, 2) + '\n', 'utf8');
  fs.renameSync(tmp, DB);
}
// Merge harvester records into the DB (by id). Never deletes. Re-reads the file right before writing.
// A non-empty harvested value overwrites; an empty one never erases existing data.
// cross-process lock so that harvesters may run side by side
function withLock(fn) {
  const lock = DB + '.lock'; let fd = null;
  for (let i = 0; i < 1500; i++) {
    try { fd = fs.openSync(lock, 'wx'); break; } catch (e) {
      if (e.code !== 'EEXIST' && e.code !== 'EPERM') throw e;
      try { if (Date.now() - fs.statSync(lock).mtimeMs > 120000) fs.unlinkSync(lock); } catch (_) {}
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 200);
    }
  }
  if (fd === null) throw new Error('could not acquire registry lock');
  try { return fn(); } finally { try { fs.closeSync(fd); } catch (_) {} try { fs.unlinkSync(lock); } catch (_) {} }
}
// privacy: e-mail addresses never enter the registry (descriptions/READMEs sometimes contain contacts)
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
function scrub(o) { for (const k of Object.keys(o)) if (typeof o[k] === 'string') o[k] = o[k].replace(EMAIL, '[email removed]'); return o; }
function upsert(records, harvester) { return withLock(() => upsertUnlocked(records, harvester)); }
function upsertUnlocked(records, harvester) {
  const db = load();
  const idx = new Map(db.map((r, i) => [r.id, i]));
  const t = today();
  let added = 0, updated = 0;
  for (const rec of records) {
    const n = scrub(Object.assign(blank(), rec));
    n.harvester = rec.harvester || harvester;
    if (!n.id) throw new Error('record without id: ' + JSON.stringify(rec).slice(0, 200));
    if (!Array.isArray(n.domain)) n.domain = [];
    n.sources = (n.sources || []).map((s) => ({ url: s.url, accessed: s.accessed || t }));
    if (idx.has(n.id)) {
      const old = db[idx.get(n.id)];
      for (const k of Object.keys(n)) {
        const v = n[k];
        const empty = v === '' || v === null || v === undefined || (Array.isArray(v) && !v.length) || (k === 'status' && v === 'unknown') || (k === 'amount_type' && v === 'unknown' && old.amount_type);
        if (k === 'first_seen') continue;
        if (k === 'repo_http' && v === null) continue;
        if (!empty) old[k] = v;
      }
      old.last_checked = t;
      updated++;
    } else {
      n.first_seen = n.first_seen || t;
      n.last_checked = t;
      db.push(n);
      idx.set(n.id, db.length - 1);
      added++;
    }
  }
  save(db);
  console.log(`[${harvester}] upsert: +${added} new, ${updated} updated, total ${db.length}`);
  return { added, updated, total: db.length };
}

// ---------- HTTP ----------
async function get(url, opts = {}) {
  const tries = opts.tries || 3;
  for (let i = 0; i < tries; i++) {
    try {
      const ctl = new AbortController();
      const to = setTimeout(() => ctl.abort(), opts.timeout || 45000);
      const res = await fetch(url, { headers: Object.assign({ 'User-Agent': UA, 'Accept-Language': 'en' }, opts.headers || {}), redirect: 'follow', signal: ctl.signal, method: opts.method || 'GET' });
      clearTimeout(to);
      if (res.status === 429 || res.status >= 500) { await sleep(2000 * (i + 1)); continue; }
      if (opts.method === 'HEAD') return { status: res.status, text: '' };
      const buf = Buffer.from(await res.arrayBuffer());
      return { status: res.status, text: buf.toString('utf8'), url: res.url, headers: res.headers };
    } catch (e) {
      if (i === tries - 1) return { status: 0, text: '', error: String(e.message || e) };
      await sleep(1500 * (i + 1));
    }
  }
  return { status: 0, text: '', error: 'retries exhausted' };
}
// Cached GET: stores body under .cache/<ns>/<key>.html
async function cachedGet(ns, key, url, opts = {}) {
  const dir = path.join(CACHE, ns);
  fs.mkdirSync(dir, { recursive: true });
  const f = path.join(dir, slug(key).slice(0, 100) + '-' + hash(key) + '.txt');
  if (!opts.refresh && fs.existsSync(f)) return { status: 200, text: fs.readFileSync(f, 'utf8'), cached: true };
  const r = await get(url, opts);
  if (r.status === 200) fs.writeFileSync(f, r.text, 'utf8');
  if (!opts.noDelay) await sleep(opts.delay || 250);
  return r;
}
function hash(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); }

// Pool with concurrency limit (<=5 by policy)
async function pool(items, n, fn) {
  n = Math.min(n, 5);
  let i = 0, done = 0;
  const out = new Array(items.length);
  async function w() {
    while (true) {
      const k = i++;
      if (k >= items.length) return;
      try { out[k] = await fn(items[k], k); } catch (e) { out[k] = { error: String(e) }; }
      done++;
      if (done % 200 === 0) console.log(`  ... ${done}/${items.length}`);
    }
  }
  await Promise.all(Array.from({ length: n }, w));
  return out;
}

// ---------- HTML ----------
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };
function decode(s) {
  return String(s || '').replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') { const c = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); try { return String.fromCodePoint(c); } catch (_) { return m; } }
    return ENT[e.toLowerCase()] !== undefined ? ENT[e.toLowerCase()] : m;
  });
}
function strip(s) { return decode(String(s || '').replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim(); }
function trunc(s, n) { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; }

// ---------- misc ----------
function repoKind(url) {
  return /^https?:\/\/(www\.)?(github\.com|gitlab\.[a-z.]+|codeberg\.org|gitee\.com|atomgit\.com|bitbucket\.org|sr\.ht|git\.sr\.ht|framagit\.org|salsa\.debian\.org|invent\.kde\.org|gitea\.[a-z.]+|forge\.[a-z.]+)\//i.test(url || '');
}
function appendVpn(urls, note) {
  let cur = '';
  try { cur = fs.readFileSync(VPN_FILE, 'utf8'); } catch (e) {}
  let add = '';
  for (const it of urls) { // items: 'url' or ['url', 'note']
    const u = Array.isArray(it) ? it[0] : it, n = Array.isArray(it) ? it[1] : note;
    if (!cur.includes(u)) add += `${u}\t# registry: ${n}\n`;
  }
  if (add) fs.appendFileSync(VPN_FILE, (cur.endsWith('\n') || !cur ? '' : '\n') + add, 'utf8');
}
// crude domain classifier from free text
const DOMAIN_RULES = [
  ['os', /\b(operating system|kernel|linux|bsd|unikernel|firmware|bootloader|openharmony|openeuler|embedded os|rtos|操作系统|内核)\b/i],
  ['cloud', /\b(cloud|kubernetes|container|virtuali[sz]|hypervisor|openstack|serverless|self-?host|paas|iaas|云)\b/i],
  ['ai', /\b(machine learning|artificial intelligence|\bai\b|neural|llm|language model|deep learning|nlp|speech recognition|text-to-speech|computer vision|人工智能|大模型)\b/i],
  ['security', /\b(security|crypto|cryptograph|encrypt|privacy|tls|pgp|gpg|authentication|password|vulnerab|fuzz|sandbox|zero-knowledge|anonym|tor\b|vpn|firewall|trust|certificate|post-quantum|安全)\b/i],
  ['web', /\b(web|browser|html|css|javascript|http|activitypub|fediverse|mastodon|decentrali[sz]ed social|cms|wiki|website|webassembly|wasm|dns|网站)\b/i],
  ['messaging', /\b(messag|chat|matrix|xmpp|email|e-mail|mail server|smtp|imap|voip|sip\b|video conferenc|webrtc|signal|jabber|通信)\b/i],
  ['office', /\b(office|document|spreadsheet|calendar|collaborat|word processor|pdf|note-taking|productivity|办公)\b/i],
  ['hardware', /\b(hardware|risc-?v|fpga|asic|chip|processor|cpu|gpu|open ?hardware|iot|sensor|3d print|robot|pcb|eda\b|硬件|芯片)\b/i],
  ['data', /\b(database|data ?set|data platform|sql|graph|linked data|rdf|semantic|search engine|open data|analytics|big data|etl|数据库|数据)\b/i],
  ['devtools', /\b(compiler|library|framework|sdk|toolchain|build system|package manager|debugger|ide\b|programming language|testing|continuous integration|api\b|devops|编译|工具链)\b/i],
  ['geo', /\b(gis|geospatial|map|openstreetmap|geodata|satellite|navigation)\b/i],
  ['health', /\b(health|medical|clinical|genom|bioinformat|biolog|patient)\b/i],
  ['accessibility', /\b(accessib|screen reader|assistive|blind|a11y)\b/i],
  ['energy', /\b(energy|smart grid|power system|battery|solar|climate)\b/i],
];
function classify(text) {
  const out = [];
  for (const [d, re] of DOMAIN_RULES) if (re.test(text || '')) out.push(d);
  return out.slice(0, 4);
}

module.exports = { withLock, ROOT, DB, CACHE, UA, today, sleep, blank, slug, load, save, upsert, get, cachedGet, pool, decode, strip, trunc, repoKind, appendVpn, classify, hash, FIELDS };
