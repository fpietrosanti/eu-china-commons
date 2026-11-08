'use strict';
// Harvester: GitHub repositories whose README *states* public funding (evidence B: project page states the funding).
// Approach: GitHub repository search (in:readme, phrase) -> fetch README -> keep only if the funder phrase appears within
// ~250 chars of an acknowledgement cue (funded/supported/grant/资助/基金...). Grant ids are extracted when present.
// Covers what bulk funder databases do not expose in reachable form: Prototype Fund (site is behind a bot challenge),
// Sovereign Tech, NGI cascade funders, ANR/BMBF/DFG/SNSF..., and Chinese NSFC / MOST key R&D / CAS / provincial funds.
// Auth: uses `gh auth token` (or GH_TOKEN) in memory only; never stored. Search is rate-limited to ~30 req/min.
// Usage: node tools/registry/gh_funding.js [--only key1,key2] [--pages N] [--list]
const { execSync } = require('child_process');
const L = require('./lib');

const CUE = /(funded|funding|fund by|supported by|support from|support of|supported through|sponsored|sponsor|financed|financ|grant|acknowledg|awarded|gefördert|förderung|förder|subvention|finanz|资助|支持|基金|项目号|项目编号|课题|得到|Danksagung|Dank )/i;

// side/level/country/funder/programme; search = GitHub phrases; fp = regex proving the funder; gid = grant id regex (group 1)
const CONFIGS = [
  // ---------------- EU & member states ----------------
  { key: 'prototypefund', side: 'EU', level: 'member-state', country: 'Germany', funder: 'Prototype Fund (OKF Germany; funded by German federal ministry BMBF/BMFTR)', programme: 'Prototype Fund', search: ['"Prototype Fund"', '"Prototype-Fund"', '"Prototype Fund" Bundesministerium'], fp: /(?<!knight )prototype[ -]?fund/i, minStars: 0, pages: 5 },
  { key: 'sovereigntech', side: 'EU', level: 'member-state', country: 'Germany', funder: 'Sovereign Tech Agency / Fund (Germany)', programme: 'Sovereign Tech Fund', search: ['"Sovereign Tech Fund"', '"Sovereign Tech Agency"'], fp: /sovereign tech (fund|agency)/i, minStars: 0, pages: 3 },
  { key: 'ngi', side: 'EU', level: 'EU', country: 'EU', funder: 'European Commission - Next Generation Internet (NGI) via cascade funder', programme: 'NGI', search: ['"NGI Zero"', '"NGI0"', '"NGI Assure"', '"NGI Pointer"', '"NGI Search"', '"NGI Atlantic"', '"Next Generation Internet" NLnet', '"NGI TALER"', '"NGI Ledger"', '"NGI DAPSI"', '"eSSIF-Lab"', '"NGI Enrichers"', '"NGI Explorers"', '"NGI Fediversity"', '"NGI Trust"'], fp: /\bNGI\b|Next Generation Internet|eSSIF/i, gid: /(?:grant agreement|grant no\.?|grant number|agreement no\.?)[^0-9]{0,20}(\d{6,})/i, minStars: 0, pages: 3 },
  { key: 'h2020', side: 'EU', level: 'EU', country: 'EU', funder: 'European Commission - Horizon 2020', programme: 'Horizon 2020', search: ['"Horizon 2020" "grant agreement"', '"European Union\'s Horizon 2020" "grant"', '"H2020" "grant agreement No"'], fp: /horizon 2020|\bH2020\b/i, gid: /(?:grant agreement|grant no\.?|grant number|agreement no\.?|GA)[^0-9]{0,25}(\d{6,7})/i, minStars: 2, pages: 5 },
  { key: 'horizoneu', side: 'EU', level: 'EU', country: 'EU', funder: 'European Commission - Horizon Europe', programme: 'Horizon Europe', search: ['"Horizon Europe" "grant agreement"', '"Horizon Europe" funded', '"HORIZON-" "grant agreement"'], fp: /horizon europe|HORIZON-/i, gid: /(?:grant agreement|grant no\.?|grant number|agreement no\.?|GA)[^0-9]{0,25}(\d{9})/i, minStars: 1, pages: 5 },
  { key: 'erc', side: 'EU', level: 'EU', country: 'EU', funder: 'European Research Council (ERC)', programme: 'ERC', search: ['"European Research Council" "ERC" grant'], fp: /european research council|\bERC\b[- ]/i, gid: /(?:grant agreement|grant no\.?|grant number|agreement no\.?)[^0-9]{0,25}(\d{6,9})/i, minStars: 5, pages: 3 },
  { key: 'anr', side: 'EU', level: 'member-state', country: 'France', funder: 'Agence Nationale de la Recherche (ANR) / France 2030', programme: 'ANR / PIA / France 2030', search: ['"Agence Nationale de la Recherche" ANR', '"France 2030"', '"Programme d\'Investissements d\'Avenir"'], fp: /agence nationale de la recherche|\bANR\b|france 2030|investissements d.avenir/i, gid: /\b(ANR-\d{2}-[A-Z0-9]{3,6}-\d{3,4})\b/, minStars: 3, pages: 3 },
  { key: 'bmbf', side: 'EU', level: 'member-state', country: 'Germany', funder: 'German federal ministry for research (BMBF/BMFTR/BMWK) grant', programme: 'BMBF/BMWK Förderkennzeichen', search: ['Förderkennzeichen', '"gefördert vom Bundesministerium"', '"funded by the German Federal Ministry"'], fp: /förderkennzeichen|gefördert|bundesministerium|federal ministry of (education|research|economic)|\bBMBF\b|\bBMWK\b|\bBMFTR\b/i, gid: /(?:Förderkennzeichen|FKZ|grant)[^0-9A-Z]{0,15}(\d{2}[A-Z]{1,3}\d{3,5}[A-Z]?)/, minStars: 2, pages: 3 },
  { key: 'dfg', side: 'EU', level: 'member-state', country: 'Germany', funder: 'Deutsche Forschungsgemeinschaft (DFG)', programme: 'DFG', search: ['"Deutsche Forschungsgemeinschaft" DFG funded', '"German Research Foundation" DFG project number'], fp: /deutsche forschungsgemeinschaft|german research foundation|\bDFG\b/i, gid: /(?:project number|project no\.?|grant)[^0-9]{0,15}(\d{6,9})/i, minStars: 5, pages: 3 },
  { key: 'snsf', side: 'EU', level: 'member-state', country: 'Switzerland', funder: 'Swiss National Science Foundation (SNSF)', programme: 'SNSF', search: ['"Swiss National Science Foundation" SNSF grant'], fp: /swiss national science foundation|\bSNSF\b/i, gid: /(?:grant|project)[^0-9]{0,15}(\d{6})/i, minStars: 5, pages: 2 },
  { key: 'ukri', side: 'EU', level: 'member-state', country: 'United Kingdom', funder: 'UK Research and Innovation (UKRI/EPSRC/Innovate UK)', programme: 'UKRI / EPSRC', search: ['EPSRC grant "EP/"', 'UKRI funded "EP/"', '"Innovate UK" funded'], fp: /\bEPSRC\b|\bUKRI\b|innovate uk/i, gid: /\b(EP\/[A-Z]\d{5,6}\/\d)\b/, minStars: 5, pages: 3 },
  { key: 'nwo', side: 'EU', level: 'member-state', country: 'Netherlands', funder: 'Dutch Research Council (NWO) / Dutch government', programme: 'NWO', search: ['"Dutch Research Council" NWO grant', '"Netherlands Organisation for Scientific Research"'], fp: /\bNWO\b|dutch research council|netherlands organisation for scientific research/i, gid: /(?:grant|project)[^0-9]{0,15}(\d{6,8})/i, minStars: 5, pages: 2 },
  { key: 'pnrr', side: 'EU', level: 'member-state', country: 'Italy', funder: 'Italy PNRR (NextGenerationEU)', programme: 'PNRR', search: ['PNRR NextGenerationEU finanziato', '"Piano Nazionale di Ripresa e Resilienza"'], fp: /\bPNRR\b|piano nazionale di ripresa/i, minStars: 2, pages: 2 },
  // ---------------- China ----------------
  { key: 'nsfc', side: 'CN', level: 'CN-central', country: 'China', funder: 'National Natural Science Foundation of China (NSFC) 国家自然科学基金', programme: 'NSFC', search: ['"National Natural Science Foundation of China"', '"国家自然科学基金"', '"NSFC" grant', '"国家自然科学基金委"'], fp: /national natural science foundation of china|\bNSFC\b|国家自然科学基金/i, gid: /(?:grant|No\.?|number|项目批准号|批准号|项目编号|项目)[^0-9]{0,12}([1-9]\d{7})\b/i, minStars: 5, pages: 5 },
  { key: 'mostkey', side: 'CN', level: 'CN-central', country: 'China', funder: 'MOST / MOST National Key R&D Program of China 国家重点研发计划', programme: 'National Key R&D Program (国家重点研发计划)', search: ['"国家重点研发计划"', '"National Key Research and Development Program of China"', '"National Key R&D Program of China"', '"重点研发计划"'], fp: /national key r(esearch)?(&| and )d(evelopment)? program|重点研发计划/i, gid: /\b(20\d{2}[A-Z]{2,4}\d{6,7})\b/, minStars: 3, pages: 5 },
  { key: 'major863', side: 'CN', level: 'CN-central', country: 'China', funder: 'MOST 863 / 973 / National S&T Major Projects 核高基 国家科技重大专项', programme: '863/973/Major S&T Projects', search: ['"863 Program" China', '"973 Program" China', '"国家高技术研究发展计划"', '"核高基"', '"国家科技重大专项"', '"National Science and Technology Major Project"'], fp: /\b863\b[^.\n]{0,40}(program|plan)|\b973\b[^.\n]{0,40}(program|plan)|高技术研究发展计划|核高基|科技重大专项|science and technology major project|基础研究发展计划/i, minStars: 3, pages: 3 },
  { key: 'cas', side: 'CN', level: 'CN-central', country: 'China', funder: 'Chinese Academy of Sciences (CAS) strategic priority programme 中国科学院战略性先导科技专项', programme: 'CAS Strategic Priority Research Program', search: ['"Strategic Priority Research Program of the Chinese Academy of Sciences"', '"中国科学院战略性先导科技专项"', '"Chinese Academy of Sciences" "Strategic Priority"'], fp: /strategic priority research program|战略性先导科技专项/i, gid: /\b(XD[A-Z]\d{2}[0-9A-Z]{4,8})\b/, minStars: 2, pages: 3 },
  { key: 'miit', side: 'CN', level: 'CN-central', country: 'China', funder: 'MIIT 工业和信息化部 (industrial base / open-source programmes)', programme: 'MIIT programmes', search: ['"工业和信息化部" 资助', '"Ministry of Industry and Information Technology" funded', '"产业基础再造"'], fp: /工业和信息化部|ministry of industry and information technology|产业基础再造/i, minStars: 3, pages: 2 },
  { key: 'beijing', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Beijing', funder: 'Beijing municipal science funding (Beijing Natural Science Foundation / Beijing Municipal Science & Technology Commission)', programme: 'Beijing S&T funds', search: ['"Beijing Natural Science Foundation"', '"北京市自然科学基金"', '"Beijing Municipal Science and Technology"', '"北京市科学技术委员会"'], fp: /beijing (municipal )?(natural science foundation|science and technology)|北京市(自然科学基金|科学技术委员会|科技计划)/i, minStars: 3, pages: 2 },
  { key: 'shanghai', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Shanghai', funder: 'Shanghai Science and Technology Commission 上海市科学技术委员会', programme: 'Shanghai S&T funds', search: ['"Science and Technology Commission of Shanghai Municipality"', '"上海市科学技术委员会"', '"Shanghai Municipal Science and Technology"'], fp: /science and technology commission of shanghai|shanghai municipal science|上海市科学技术委员会|上海市科委/i, minStars: 3, pages: 2 },
  { key: 'zhejiang', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Zhejiang', funder: 'Zhejiang provincial S&T funds 浙江省 (Natural Science Foundation / "Pioneer" "Leading Goose")', programme: 'Zhejiang S&T funds', search: ['"Zhejiang Provincial Natural Science Foundation"', '"浙江省自然科学基金"', '"Zhejiang Province" "Key R&D Program"', '"浙江省重点研发计划"'], fp: /zhejiang (provincial )?(natural science foundation|province[^.\n]{0,30}key r)|浙江省(自然科学基金|重点研发计划|“)/i, minStars: 3, pages: 2 },
  { key: 'guangdong', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Guangdong', funder: 'Guangdong provincial S&T funds 广东省 (Basic and Applied Basic Research Foundation, Key R&D)', programme: 'Guangdong S&T funds', search: ['"Guangdong Basic and Applied Basic Research Foundation"', '"广东省基础与应用基础研究基金"', '"Guangdong Province" "Key Research and Development"', '"广东省重点领域研发计划"'], fp: /guangdong (basic and applied|province[^.\n]{0,40}key r)|广东省(基础与应用基础研究基金|重点领域研发计划|自然科学基金)/i, minStars: 3, pages: 2 },
  { key: 'jiangsu', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Jiangsu', funder: 'Jiangsu provincial S&T funds 江苏省', programme: 'Jiangsu S&T funds', search: ['"Natural Science Foundation of Jiangsu Province"', '"江苏省自然科学基金"', '"Jiangsu" "Key Research and Development Program"'], fp: /natural science foundation of jiangsu|jiangsu[^.\n]{0,30}key r|江苏省(自然科学基金|重点研发计划)/i, minStars: 3, pages: 2 },
  { key: 'hubei', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Hubei', funder: 'Hubei provincial S&T funds 湖北省', programme: 'Hubei S&T funds', search: ['"Hubei Provincial Natural Science Foundation"', '"湖北省自然科学基金"', '"湖北省重点研发计划"'], fp: /hubei (provincial )?(natural science|key r)|湖北省(自然科学基金|重点研发计划|科技)/i, minStars: 2, pages: 1 },
  { key: 'sichuan', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Sichuan', funder: 'Sichuan provincial S&T funds 四川省', programme: 'Sichuan S&T funds', search: ['"Sichuan Science and Technology Program"', '"四川省科技计划"', '"四川省自然科学基金"'], fp: /sichuan (province )?(science|natural)|四川省(科技计划|自然科学基金|科技厅)/i, minStars: 2, pages: 1 },
  { key: 'chongqing', side: 'CN', level: 'CN-provincial', country: 'China', region: 'Chongqing', funder: 'Chongqing S&T funds 重庆市', programme: 'Chongqing S&T funds', search: ['"Chongqing Natural Science Foundation"', '"重庆市自然科学基金"', '"重庆市技术创新与应用发展专项"'], fp: /chongqing[^.\n]{0,30}(natural science|science and technology)|重庆市(自然科学基金|技术创新)/i, minStars: 2, pages: 1 },
  { key: 'shenzhen', side: 'CN', level: 'CN-city', country: 'China', region: 'Shenzhen', funder: 'Shenzhen Science and Technology Innovation Commission 深圳市科技创新委员会', programme: 'Shenzhen S&T funds', search: ['"Shenzhen Science and Technology Innovation"', '"深圳市科技创新委员会"', '"深圳市科技计划"', '"Shenzhen Science and Technology Program"'], fp: /shenzhen (municipal )?science and technology|深圳市(科技|科学技术|基础研究)/i, minStars: 2, pages: 2 },
  { key: 'hangzhou', side: 'CN', level: 'CN-city', country: 'China', region: 'Hangzhou', funder: 'Hangzhou municipal S&T funds 杭州市', programme: 'Hangzhou S&T funds', search: ['"Hangzhou" "Science and Technology" funded "Program"', '"杭州市科技"'], fp: /hangzhou[^.\n]{0,30}(science and technology|key r)|杭州市(科技|重点研发)/i, minStars: 2, pages: 1 },
];

let TOKEN = process.env.GH_TOKEN || '';
if (!TOKEN) { try { TOKEN = execSync('gh auth token', { encoding: 'utf8' }).trim(); } catch (e) { TOKEN = ''; } }
const H = (accept) => Object.assign({ 'User-Agent': L.UA, Accept: accept || 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, TOKEN ? { Authorization: 'Bearer ' + TOKEN } : {});
const norm = (u) => String(u || '').toLowerCase().replace(/\.git$/, '').replace(/\/+$/, '').replace(/^https?:\/\/(www\.)?/, '');

async function searchRepos(q, pages, minStars) {
  const out = [];
  for (let p = 1; p <= pages; p++) {
    const full = `${q} in:readme fork:false${minStars ? ' stars:>=' + minStars : ''}`;
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(full)}&per_page=100&page=${p}`;
    let r;
    for (let t = 0; t < 4; t++) {
      r = await L.get(url, { headers: H(), tries: 1 });
      if (r.status === 403 || r.status === 429) { console.log('  rate limited, waiting 65s'); await L.sleep(65000); continue; }
      break;
    }
    await L.sleep(2400);
    if (r.status !== 200) { console.log('  search fail', r.status, q.slice(0, 40)); break; }
    let j; try { j = JSON.parse(r.text); } catch (e) { break; }
    out.push(...(j.items || []));
    if (!j.items || j.items.length < 100) break;
  }
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--list')) { console.log(CONFIGS.map((c) => c.key).join(' ')); return; }
  const only = args.includes('--only') ? args[args.indexOf('--only') + 1].split(',') : null;
  const pagesOverride = args.includes('--pages') ? +args[args.indexOf('--pages') + 1] : 0;
  const db = L.load();
  const byRepo = new Map(db.filter((r) => r.repo_url).map((r) => [norm(r.repo_url), r]));
  const byGrant = new Map(db.filter((r) => r.id.startsWith('cordis-')).map((r) => [r.grant_id, r]));
  const found = new Map(); // full_name -> record

  for (const c of CONFIGS) {
    if (only && !only.includes(c.key)) continue;
    console.log(`== ${c.key}`);
    const cand = new Map();
    for (const q of c.search) {
      const items = await searchRepos(q, pagesOverride || c.pages, c.minStars);
      for (const it of items) cand.set(it.full_name, it);
      console.log(`  ${q.slice(0, 60)} -> ${items.length} (cand ${cand.size})`);
    }
    const list = [...cand.values()].filter((it) => !/(awesome|-list$|funding-|fundraising)/i.test(it.name) && (!byRepo.has(norm(it.html_url)) || byRepo.get(norm(it.html_url)).harvester === 'gh_funding'));
    let kept = 0;
    await L.pool(list, 3, async (it) => {
      let rd;
      for (let t = 0; t < 40; t++) { // wait out the hourly core rate limit instead of losing candidates
        rd = await L.cachedGet('ghreadme', it.full_name, `https://api.github.com/repos/${it.full_name}/readme`, { headers: H('application/vnd.github.raw+json'), delay: 80 });
        if (rd.status === 403 || rd.status === 429) { if (t === 0) console.log('  core rate limit - waiting'); await L.sleep(60000); continue; }
        break;
      }
      if (rd.status !== 200) return; // 404 = no README
      const txt = rd.text.slice(0, 300000);
      let ctx = null;
      const re = new RegExp(c.fp.source, c.fp.flags.includes('g') ? c.fp.flags : c.fp.flags + 'g');
      let m;
      while ((m = re.exec(txt))) {
        const w = txt.slice(Math.max(0, m.index - 140), m.index) + ' | ' + txt.slice(m.index + m[0].length, m.index + m[0].length + 140); // cue must be OUTSIDE the matched phrase
        const wfull = txt.slice(Math.max(0, m.index - 100), m.index + m[0].length + 140);
        if (CUE.test(w)) { ctx = wfull; break; }
        if (m.index === re.lastIndex) re.lastIndex++;
      }
      if (!ctx) return;
      let gid = '';
      if (c.gid) { const g = c.gid.exec(ctx) || c.gid.exec(txt); if (g) gid = g[1]; }
      kept++;
      const prev = found.get(it.full_name);
      if (prev) { prev.also = (prev.also || []).concat([c.key]); return; }
      if (gid && byGrant.has(gid)) { // already in the registry via CORDIS: only enrich with the repo link
        const ex = byGrant.get(gid);
        if (!ex.repo_url) found.set(it.full_name, { id: ex.id, repo_url: it.html_url, licence: it.license && it.license.spdx_id !== 'NOASSERTION' ? it.license.spdx_id : '', repo_http: 200, status: it.archived ? 'archived' : 'active', harvester: ex.harvester });
        return;
      }
      const rec = L.blank();
      rec.id = 'gh-' + L.slug(it.full_name.replace('/', '-'));
      rec.name = it.name; rec.side = c.side; rec.funder_level = c.level; rec.country = c.country; rec.region = c.region || '';
      rec.funder = c.funder; rec.programme = c.programme; rec.grant_id = gid;
      rec.description = L.trunc(it.description || it.name, 300);
      rec.domain = L.classify(it.name + ' ' + (it.description || '') + ' ' + (it.topics || []).join(' '));
      rec.repo_url = it.html_url; rec.website = it.homepage && /^https?:/.test(it.homepage) ? it.homepage : '';
      rec.licence = it.license && it.license.spdx_id && it.license.spdx_id !== 'NOASSERTION' ? it.license.spdx_id : '';
      rec.status = it.archived ? 'archived' : 'active';
      rec.repo_http = 200;
      rec.years = it.created_at ? `${it.created_at.slice(0, 4)}-` : '';
      rec.sources = [{ url: it.html_url + '#readme' }];
      rec.evidence = (c.gid && !gid) ? 'C' : 'B'; // funder named but no grant id found -> weaker (possible false positive)
      rec.stars = it.stargazers_count;
      { // no free-text excerpt is kept: READMEs may name people
        const mm = new RegExp(c.fp.source, c.fp.flags.replace('g', '')).exec(ctx);
        rec.oss_basis = 'README acknowledgement names the funder (matched phrase: "' + (mm ? mm[0] : c.programme) + '"' + (gid ? ', grant id ' + gid : ', no grant id found') + '); see source URL #readme';
      }
      found.set(it.full_name, rec);
    });
    console.log(`  verified ${kept}`);
    // checkpoint after each funder
    L.upsert([...found.values()].map((r) => Object.assign({}, r)), 'gh_funding');
    found.clear();
    const db2 = L.load(); db2.forEach((r) => { if (r.repo_url) byRepo.set(norm(r.repo_url), r); });
  }
}
module.exports = { CONFIGS };
if (require.main === module) main();
