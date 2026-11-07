// arXiv API literature query (R02). Usage: node tools/arxiv_query.js [A1 A2 ...]
// Edit qs to re-run. Prints top 15 by relevance, 2019+. Keyless; 3 s between calls (arXiv etiquette).
const qs = [
  ["A1", 'abs:"open source" AND abs:China AND abs:(policy OR government)'],
  ["A2", 'abs:"open source" AND abs:Europe AND abs:(policy OR sovereignty)'],
  ["A3", 'abs:(openEuler OR OpenHarmony OR openKylin OR Gitee OR OpenAtom)'],
  ["A4", 'abs:"digital commons"'],
  ["A5", 'abs:"open source" AND abs:(geopolitics OR "export control" OR sanctions)'],
  ["A6", 'abs:"open source" AND abs:("public sector" OR "public administration" OR municipal)'],
];
const only = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  for (const [id, q] of qs.filter(([i]) => !only.length || only.includes(i))) {
    const u = `https://export.arxiv.org/api/query?search_query=${encodeURIComponent(q)}&sortBy=relevance&max_results=40`;
    const x = await (await fetch(u)).text();
    const total = (x.match(/<opensearch:totalResults[^>]*>(\d+)/) || [])[1];
    console.log(`## ${id} ${q} → ${total}`);
    let n = 0;
    for (const e of x.split("<entry>").slice(1)) {
      const y = +(e.match(/<published>(\d{4})/) || [])[1];
      if (y < 2019 || n >= 15) continue;
      n++;
      const t = (e.match(/<title>([\s\S]*?)<\/title>/) || [])[1].replace(/\s+/g, " ").trim();
      const idm = (e.match(/<id>http:\/\/arxiv.org\/abs\/([^<]+)<\/id>/) || [])[1];
      const cat = (e.match(/<arxiv:primary_category[^>]*term="([^"]+)"/) || [])[1];
      console.log(`- ${y} | ${t} | ${cat} | arXiv ${idm}`);
    }
    await sleep(3500);
  }
})();
