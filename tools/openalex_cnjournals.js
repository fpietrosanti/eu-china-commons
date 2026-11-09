// Round 6: CNKI substitute — scan Chinese core journals indexed by OpenAlex, filter titles locally
const src={S2764508881:"中国软科学",S2764457360:"科学学研究",S4306549098:"情报杂志",S4306542146:"中国科技论坛",S4306555283:"电子政务",S4210224179:"软件学报",S2764449760:"科学学与科学技术管理",S4306542131:"中国科学院院刊",S4306513277:"情报理论与实践",S4306546149:"图书情报工作",S4306556330:"科技管理研究"};
const re=/开源|开放源代码|open[- ]source|数字公地|数字公共|鸿蒙|欧拉|信创|开放生态/i;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{let tot=0,hits=[];for(const [id,n] of Object.entries(src)){let cur='*',c=0;
while(cur){const u=`https://api.openalex.org/works?filter=primary_location.source.id:${id},from_publication_date:2019-01-01&per-page=200&cursor=${encodeURIComponent(cur)}&select=id,doi,title,publication_year,cited_by_count,open_access&mailto=`.replace('&mailto=','');
const r=await (await fetch(u)).json(); for(const w of r.results||[]){c++; if(re.test(w.title||'')) hits.push(`- ${w.publication_year} | ${n} | ${w.cited_by_count} | ${w.title} | ${w.open_access?.is_oa?'OA':''} | ${w.doi||w.id}`);}
cur=r.meta?.next_cursor; if(!(r.results||[]).length) cur=null; await sleep(300);}
console.log(`## ${n} (${id}) 2019+: ${c} works scanned`); tot+=c;}
console.log(`\nTotal scanned ${tot}; title hits ${hits.length}\n`); console.log(hits.join('\n'));})();
