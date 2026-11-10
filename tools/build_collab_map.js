#!/usr/bin/env node
// Builds data/stakeholders/collab-map.json (roadmap track G) from data/directory, data/cooperation and tools/collab_additions.js.
// Usage: node tools/build_collab_map.js   (idempotent; http checks cached in data/stakeholders/.http-cache.json)
const fs = require("fs");
const { execFile } = require("child_process");
const R = f => JSON.parse(fs.readFileSync(f, "utf8"));
const eu = R("data/directory/eu-orgs.json"), cn = R("data/directory/cn-orgs.json"), co = R("data/cooperation/eu-cn.json");
const adds = require("./collab_additions.js");
const CACHE = "data/stakeholders/.http-cache.json";
const cache = fs.existsSync(CACHE) ? R(CACHE) : {};

const host = u => { try { return new URL(u).hostname.replace(/^www\./, "").toLowerCase(); } catch { return null; } };
const uniq = a => [...new Set(a)];

// ---- type mapping
function mapType(x, side) {
  const n = (x.name_en || "") + " " + (x.name_original || "");
  const t = x.stakeholder_type, l = x.level;
  if (/OSPO|open source (programme|program) office|open source office/i.test(n)) return "OSPO";
  if (t === "funder" || l === "funder") return "funder";
  if (t === "standards" || t === "standardisation body" || l === "standards") return "standards";
  if (t === "think-tank" || t === "state think tank/agency") return "think-tank";
  if (t === "academia" || t === "university" || t === "research lab") return "university";
  if (t === "company" || t === "state-owned enterprise") return "company";
  if (t === "association" || t === "alliance/association") return "industry-assoc";
  if (t === "foundation" || l === "foundation") return "foundation";
  if (t === "community" || t === "open-source community" || t === "code/model platform") return "community";
  return "public-agency"; // government, region-city, ministries, provincial/municipal/district bodies, parks
}
const PILLAR_TRACK = { policy: "A", governance: "A", funding: "F", research: "A", technology: "E", standards: "A", security: "B", community: "C", education: "C", events: "C", communication: "C", operations: "C", infrastructure: "E", industry: "D", media: "C" };
const TYPE_TRACK = { company: "D", funder: "F", standards: "A", foundation: "C", OSPO: "C", community: "C", "industry-assoc": "D", "think-tank": "A", university: "A" };
function tracksFor(x, type) {
  const t = (x.pillar || []).map(p => PILLAR_TRACK[p]).filter(Boolean);
  if (TYPE_TRACK[type]) t.push(TYPE_TRACK[type]);
  if (/RISC|security|supply|CRA|SBOM|vulnerab/i.test((x.role_relevance || "") + x.name_en)) t.push("B");
  if (/mirror|Gitee|AtomGit|translation|interop/i.test(x.role_relevance || "")) t.push("E");
  return uniq(t).sort().slice(0, 4);
}
const GAIN_EU = {
  foundation: "a neutral, evidence-based view of cross-border contribution and members' dependencies; a partner for shared-upstream governance",
  OSPO: "benchmarks and contacts for cross-border OSS practice; visibility for its OSPO guidance",
  university: "data, co-authorship and student/researcher exchange opportunities; a venue for the research agenda",
  "think-tank": "citable evidence and a map of actors for its own EU-China or digital-policy work",
  standards: "an inventory of overlapping standards and open-standard convergence evidence",
  "public-agency": "comparative evidence on open source policy and a channel to counterparts in China",
  "industry-assoc": "member-relevant evidence on shared upstreams, CRA effects and market access",
  company: "visibility of its contributions, pre-competitive partners and clarity on compliance red lines",
  funder: "a pipeline of cross-border commons work to fund and impact evidence",
  community: "contributors, translations and visibility across the language barrier",
  "cooperation-body": "a digital-commons use case for its existing programmes"
};
const GAIN_CN = {
  foundation: "international recognition, neutral-hosting know-how and links to European foundations",
  OSPO: "benchmarks and contacts for cross-border OSS practice",
  university: "international co-authorship, data and exchange opportunities",
  "think-tank": "citable comparative evidence and access to European policy counterparts",
  standards: "an inventory of overlapping standards and routes to joint work in neutral bodies",
  "public-agency": "comparative evidence on open source policy, and international visibility for its local ecosystem",
  "industry-assoc": "market-access evidence and European partners for its members",
  company: "European contributors and users, and clarity on EU rules such as the CRA",
  funder: "a pipeline of international commons projects and impact evidence",
  community: "overseas contributors and visibility beyond the Chinese-language web",
  "cooperation-body": "a digital-commons use case for its existing programmes"
};
const CHINA_RE = /China|Chinese|Sino|Asia|中国|中欧/;
const EU_RE = /\bEU\b|Europe|German|French|Italian|Dutch|European|欧/;

// ---- index cooperation records
const coopBySt = {};
co.forEach(c => { if (c.see_stakeholder) (coopBySt[c.see_stakeholder] ||= []).push(c); });
const coopByHost = {};
co.forEach(c => { const h = host(c.official_website); if (h && !c.website_is_parent_site) (coopByHost[h] ||= []).push(c); });

const records = [], seen = new Map(), skipped = { event_media: 0, dup: [] };
function add(rec, key) {
  if (key && seen.has(key)) { const e = seen.get(key); e.source_ids = uniq([...e.source_ids, ...rec.source_ids]); skipped.dup.push(rec.id + " -> " + e.id); return; }
  if (key) seen.set(key, rec);
  records.push(rec);
}

function scoreAndLikelihood(rec, x, hasTie, projects) {
  let s = ({ 1: 3, 2: 2, 3: 1 })[x.priority] ?? 0; const why = [];
  why.push("priority " + (x.priority ?? "n/a") + " in directory");
  if (hasTie) { s += 2; why.push("documented EU-CN tie"); }
  if (["foundation", "OSPO", "community", "standards", "funder", "think-tank", "university"].includes(rec.type)) { s += 1; why.push(rec.type + " fits the commons agenda"); }
  if (projects > 0) { s += 1; why.push(projects + " listed open-source projects"); }
  if (/CN-municipal|CN-district/.test(x.level || "") || /industrial park|district government|municipal/.test(x.stakeholder_type || "")) { s -= 1; why.push("local government unit, narrow remit"); }
  const lk = s >= 4 ? "high" : s >= 3 ? "medium" : "low";
  return [lk, "Inference from heuristic score " + s + ": " + why.join("; ") + "."];
}

function fromDirectory(x) {
  if (x.stakeholder_type === "event" || x.stakeholder_type === "media" || x.level === "event" || x.level === "media" || x.stakeholder_type === "event/programme") { skipped.event_media++; return; }
  const cnSide = x.side === "CN";
  const side = cnSide ? "CN" : (x.country === "EU" ? "EU" : x.country);
  const type = mapType(x, side);
  const linked = coopBySt[x.id] || [];
  const h = host(x.official_website);
  const byHost = (coopByHost[h] || []).filter(c => !linked.includes(c));
  const ties = [...linked, ...byHost].map(c => ({ text: c.name_en + " (" + c.type + ", " + c.scope + "): " + c.description, source_url: c.source_url, evidence: c.evidence }));
  const rr = x.role_relevance || "";
  if (ties.length === 0 && (cnSide ? EU_RE : CHINA_RE).test(rr)) ties.push({ text: "Role description references the other side: " + rr, source_url: x.source_url, evidence: x.evidence });
  const proj = (x.projects || []).length;
  const [lk, why] = scoreAndLikelihood({ type }, x, ties.length > 0, proj);
  const gains = (cnSide ? GAIN_CN : GAIN_EU)[type] || GAIN_EU["public-agency"];
  add({
    id: x.id, name: x.name_en, name_zh: cnSide ? (x.name_original || undefined) : undefined, side, type, url: x.official_website,
    institutional_contact: { url: x.contact_channel, kind: x.contact_type },
    value_proposition: "Brings: " + rr.replace(/\.$/, "") + ". Gains (inference): " + gains + ".",
    tracks: tracksFor(x, type), eu_cn_ties: ties, likelihood: lk, likelihood_reason: why,
    evidence: x.evidence, source_ids: uniq([x.id, ...linked.map(c => c.id), ...byHost.map(c => c.id)]), origin: "directory"
  }, h && ["europa.eu", "gov.cn"].some(s => h.endsWith(s)) && h.split(".").length <= 2 ? null : h);
}
eu.forEach(fromDirectory); cn.forEach(fromDirectory);

// ---- cooperation bodies (institutions, not dialogues/agreements/programmes)
const COOP_OK = new Set(["institution", "office", "think-tank", "university", "chamber", "network", "foundation", "joint-lab", "city-region"]);
for (const c of co) {
  if (!COOP_OK.has(c.type)) continue;
  const h = host(c.official_website);
  if (c.website_is_parent_site) { /* no domain dedupe: unit page lives on a parent site */ }
  else if (h && seen.has(h)) { const e = seen.get(h); e.source_ids = uniq([...e.source_ids, c.id]); continue; }
  const sc = c.scope === "EU-CN" ? "EU" : c.scope === "multilateral" ? "INTL" : c.scope.split("-")[0].replace("GB", "UK");
  const type = c.type === "think-tank" ? "think-tank" : c.type === "university" ? "university" : c.type === "foundation" ? "foundation" : c.type === "chamber" ? "industry-assoc" : "cooperation-body";
  const active = c.status === "active";
  const lk = active && ["chamber", "think-tank", "university", "joint-lab", "foundation", "office"].includes(c.type) ? "medium" : "low";
  const trk = uniq([type === "think-tank" || type === "university" ? "A" : "C", ...(c.domains || []).includes("digital") ? ["E"] : [], ...(c.domains || []).includes("science") ? ["F"] : []]).slice(0, 3);
  add({
    id: c.id, name: c.name_en, name_zh: c.name_original && /[一-鿿]/.test(c.name_original) ? c.name_original.split("/").pop().trim() : undefined,
    side: sc, type: type === "cooperation-body" || ["industry-assoc"].includes(type) ? (type === "industry-assoc" ? "industry-assoc" : "cooperation-body") : type, url: c.official_website,
    institutional_contact: { url: c.contact_channel, kind: c.contact_type },
    value_proposition: "Brings: existing EU-China channel (" + c.description.replace(/\.$/, "") + "). Gains (inference): " + GAIN_EU["cooperation-body"] + ".",
    tracks: trk.length ? trk : ["C"], eu_cn_ties: [{ text: c.name_en + " (" + c.type + ", " + c.scope + ", status " + c.status + ")", source_url: c.source_url, evidence: c.evidence }],
    likelihood: lk, likelihood_reason: "Inference: " + (active ? "active" : "status " + c.status) + " body that already works across the EU-China border; no evidence yet of interest in open source/commons.",
    evidence: c.evidence, source_ids: [c.id], origin: "cooperation", ...(c.website_is_parent_site ? { note: "URL is the parent site; the specific unit page was not located." } : {})
  }, c.website_is_parent_site ? null : h);
}

// ---- curated additions, with reachability check
function curl(u) {
  return new Promise(res => execFile("curl", ["-s", "-o", "/dev/null", "-L", "-m", "12", "-A", "Mozilla/5.0", "-w", "%{http_code}", u], (e, out) => res(parseInt(out, 10) || 0)));
}
(async () => {
  const todo = adds.filter(a => !(a[5] in cache) && !seen.has(host(a[5])));
  for (let i = 0; i < todo.length; i += 12) await Promise.all(todo.slice(i, i + 12).map(async a => { cache[a[5]] = await curl(a[5]); }));
  fs.mkdirSync("data/stakeholders", { recursive: true });
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2) + "\n", "utf8");
  for (const [id, name, zh, side, type, url, vp, tracks, tie, lk, why] of adds) {
    const h = host(url);
    const KEEP = ["x-linuxfoundation","x-openatom","x-openforum-europe","x-interoperable-europe"];
    if (seen.has(h) && !KEEP.includes(id)) { skipped.dup.push(id + " -> " + seen.get(h).id); seen.get(h).origin += "+addition"; continue; }
    const http = cache[url] || 0, ok = http >= 200 && http < 400;
    const gain = (side === "CN" ? GAIN_CN : GAIN_EU)[type === "OSPO" ? "OSPO" : type] || "";
    add({
      id, name, name_zh: zh || undefined, side, type, url,
      institutional_contact: { url, kind: "homepage (dedicated contact page not yet located)" },
      value_proposition: "Brings: " + vp.replace(/\.$/, "") + ". Gains (inference): " + gain + ".",
      tracks, eu_cn_ties: tie ? [{ text: tie, source_url: url, evidence: "D" }] : [],
      likelihood: lk, likelihood_reason: "Inference (analyst judgement, not yet validated): " + why,
      evidence: ok ? "C" : "D", web_http: http, source_ids: [], origin: "addition (prior knowledge" + (id === "x-shanghaiopen" ? " + web search 2026-11" : "") + ")"
    }, KEEP.includes(id) ? null : h);
  }
  records.sort((a, b) => a.side.localeCompare(b.side) || a.type.localeCompare(b.type) || a.id.localeCompare(b.id));
  const out = { generated: new Date().toISOString().slice(0, 10), note: "Collaboration map v1 (roadmap track G). value_proposition and likelihood are inferences, not facts; evidence reflects the existence/identity of the organisation (docs/METHODOLOGY.md levels), not the inference. institutional_contact holds official pages only; no personal data.", count: records.length, records };
  fs.writeFileSync("data/stakeholders/collab-map.json", JSON.stringify(out, null, 2) + "\n", "utf8");
  const cnt = k => records.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {});
  console.log(records.length, "records;", "skipped event/media", skipped.event_media, "dups", skipped.dup.length);
  console.log("side", cnt("side")); console.log("type", cnt("type")); console.log("likelihood", cnt("likelihood")); console.log("evidence", cnt("evidence"));
  fs.writeFileSync("data/stakeholders/.dups.txt", skipped.dup.join("\n") + "\n", "utf8");
})();
