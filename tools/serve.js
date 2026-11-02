// Minimal static server for local preview of site/.
const http=require("http"),fs=require("fs"),path=require("path");
const root=path.join(__dirname,"..","site"),port=process.env.PORT||8090;
const types={".html":"text/html; charset=utf-8",".css":"text/css",".js":"text/javascript",".json":"application/json"};
http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split("?")[0]);if(p.endsWith("/"))p+="index.html";
 const f=path.join(root,p);if(!f.startsWith(root))return r.writeHead(403).end();
 fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);return r.end("404")}r.writeHead(200,{"Content-Type":types[path.extname(f)]||"application/octet-stream"});r.end(d)})
}).listen(port,()=>console.log("serving "+root+" on "+port));
