// OpenAlex literature queries. Edit qs to re-run. Usage: node tools/openalex_query.js > data/lit/openalex_<date>.md
// Round 5 (8 Nov 2026): OpenAlex substitutes for the Semantic Scholar queries S1 S2 S3 S6 S8 refused (429) 5-7 Nov.
// Previous rounds' queries (4 Nov): Q1-Q9, see docs/LITERATURE-REVIEW.md §5 round 1.
const qs=[
 ["O1","title_and_abstract.search","open source policy China Europe"],
 ["O2","title_and_abstract.search","\"digital commons\" China"],
 ["O3","title_and_abstract.search","openEuler OR OpenHarmony OR openKylin"],
 ["O6","title_and_abstract.search","\"open source software\" \"public sector\" Europe adoption"],
 ["O8","title_and_abstract.search","\"open source\" geopolitics China \"United States\""]];
const only=process.argv.slice(2);
(async()=>{for(const [id,f,q] of qs){ if(only.length&&!only.includes(id)) continue;
const u=`https://api.openalex.org/works?filter=${f}:${encodeURIComponent(q)},from_publication_date:2019-01-01&sort=relevance_score:desc&per-page=15&select=id,doi,title,publication_year,cited_by_count,primary_location,type`;
const r=await (await fetch(u)).json(); console.log(`## ${id} ${q} → ${r.meta?.count}`);
for(const w of r.results||[]) console.log(`- ${w.publication_year} | ${w.cited_by_count} | ${w.title} | ${w.primary_location?.source?.display_name||''} | ${w.doi||w.id}`);}})();
