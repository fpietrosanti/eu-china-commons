// SSRN via the Crossref REST API (SSRN DOIs = prefix 10.2139). Round 7 (10 Nov 2026).
// Usage: node tools/crossref_ssrn.js [R1 R2 ...] > data/lit/crossref_ssrn_<date>.md
const qs=[
 ["R1","open source software policy China"],
 ["R2","open source software Europe public sector"],
 ["R3","digital commons Europe"],
 ["R4","open source industrial policy digital sovereignty"],
 ["R5","open source artificial intelligence China regulation"],
 ["R6","open source software economic impact"],
 ["R7","technological self-reliance China software"]];
const only=process.argv.slice(2);
(async()=>{for(const [id,q] of qs){ if(only.length&&!only.includes(id)) continue;
const u=`https://api.crossref.org/prefixes/10.2139/works?query.bibliographic=${encodeURIComponent(q)}&filter=from-pub-date:2019-01-01&rows=20&select=DOI,title,author,issued,is-referenced-by-count&mailto=research-bot@example.org`;
const r=await (await fetch(u,{headers:{'User-Agent':'eu-china-commons-litreview/1.0'}})).json();
console.log(`## ${id} ${q} → ${r.message?.['total-results']}`);
for(const w of r.message?.items||[]) console.log(`- ${w.issued?.['date-parts']?.[0]?.[0]} | ${(w.author||[]).slice(0,3).map(a=>a.family).join(', ')} | ${(w.title||[''])[0]} | https://doi.org/${w.DOI}`);
await new Promise(s=>setTimeout(s,1500));}})();
