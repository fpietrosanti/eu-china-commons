const qs=[["Q7","title.search","\"open source\" China"],["Q8","title_and_abstract.search","Gitee OR OpenAtom"],["Q9","title.search","\"open source\" \"public sector\" Europe"]];
(async()=>{for(const [id,f,q] of qs){const u=`https://api.openalex.org/works?filter=${f}:${encodeURIComponent(q)},from_publication_date:2019-01-01&sort=cited_by_count:desc&per-page=12&select=id,doi,title,publication_year,cited_by_count,primary_location,type`;
const r=await (await fetch(u)).json(); console.log(`## ${id} ${q} → ${r.meta?.count}`);
for(const w of r.results||[]) console.log(`- ${w.publication_year} | ${w.cited_by_count} | ${w.title} | ${w.primary_location?.source?.display_name||''} | ${w.doi||w.id}`);}})();
