// Semantic Scholar Graph API literature query (no key; slow and polite). Usage: node tools/s2_query.js > data/lit/s2_YYYY-MM-DD.md
// Edit the qs array to re-run; optional args = query IDs to run (e.g. S1 S2). Results: top 15 by relevance, 2019+, with citation counts.
const qs = [
  ["S1", "open source policy China Europe comparison"],
  ["S2", "digital commons China"],
  ["S3", "openEuler OR OpenHarmony OR openKylin"],
  ["S4", "open source software digital sovereignty"],
  ["S5", "China open source industrial policy government"],
  ["S6", "open source software public sector Europe adoption"],
  ["S7", "Gitee OpenAtom open source foundation China"],
  ["S8", "open source software geopolitics US China"],
];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const only = process.argv.slice(2);
(async () => {
  for (const [id, q] of qs.filter(([i]) => !only.length || only.includes(i))) {
    const u = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(q)}&year=2019-&limit=15&fields=title,year,citationCount,venue,externalIds,publicationTypes`;
    let r;
    for (let a = 0; a < 5; a++) {
      const res = await fetch(u);
      if (res.status === 429) { await sleep(15000 * (a + 1)); continue; }
      r = await res.json();
      break;
    }
    console.log(`## ${id} ${q} → ${r ? r.total : "rate-limited"}`);
    for (const p of (r && r.data) || []) {
      const ext = p.externalIds || {};
      const ref = ext.DOI ? `doi ${ext.DOI}` : ext.ArXiv ? `arXiv ${ext.ArXiv}` : ext.SSRN ? `SSRN ${ext.SSRN}` : `s2 ${p.paperId}`;
      console.log(`- ${p.year} | ${p.citationCount} | ${p.title} | ${p.venue || ""} | ${ref}`);
    }
    await sleep(8000);
  }
})();
