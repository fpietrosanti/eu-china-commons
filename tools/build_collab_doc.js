#!/usr/bin/env node
// Generates docs/COLLAB-MAP.md from data/stakeholders/collab-map.json
const fs = require("fs");
const d = JSON.parse(fs.readFileSync("data/stakeholders/collab-map.json", "utf8")), recs = d.records;
const cnt = k => { const m = {}; recs.forEach(r => { m[r[k]] = (m[r[k]] || 0) + 1; }); return Object.entries(m).sort((a, b) => b[1] - a[1]); };
const tbl = (h, rows) => "| " + h.join(" | ") + " |\n|" + h.map(() => "---").join("|") + "|\n" + rows.map(r => "| " + r.join(" | ") + " |").join("\n") + "\n";
const grp = r => r.side === "CN" ? "CN" : r.side === "INTL" ? "INTL" : r.side === "EU" ? "EU institutions" : "Member states / Europe (non-EU incl.)";
const score = r => { const m = /score (\d+)/.exec(r.likelihood_reason); return (m ? +m[1] : 5) + (r.eu_cn_ties.length ? 0.5 : 0) + (r.evidence === "A" ? 0.3 : r.evidence === "B" ? 0.2 : 0); };
const high = recs.filter(r => r.likelihood === "high").sort((a, b) => score(b) - score(a));
const esc = s => String(s).replace(/\|/g, "/").replace(/\s+/g, " ");
const cut = (s, n) => esc(s).length > n ? esc(s).slice(0, n - 1) + "…" : esc(s);
const trackCnt = {}; recs.forEach(r => r.tracks.forEach(t => { trackCnt[t] = (trackCnt[t] || 0) + 1; }));
const withTies = recs.filter(r => r.eu_cn_ties.length).length;
const states = new Set(recs.map(r => r.side).filter(s => !["CN", "INTL", "EU"].includes(s)));
const cnAg = recs.filter(r => r.side === "CN" && r.type === "public-agency").length;
const adds = recs.filter(r => r.origin && r.origin.startsWith("addition")).length;
const md = `# COLLABORATION MAP v1 (roadmap track G)

Source of truth: [../data/stakeholders/collab-map.json](../data/stakeholders/collab-map.json) (${recs.length} organisations, generated ${d.generated} by \`tools/build_collab_map.js\`; this page by \`tools/build_collab_doc.js\`).

**Status: first version, machine-assisted, not yet human-validated.** Every \`value_proposition\` and \`likelihood\` is an **inference** (labelled in each record), not a fact. \`evidence\` (A/A-v/B/C/D, see METHODOLOGY) describes only the existence and identity of the organisation. No outreach has been made; \`institutional_contact\` holds official pages only, no personal data.

## Method
1. **Inputs**: \`data/directory/eu-orgs.json\` (+ enrichment), \`data/directory/cn-orgs.json\`, \`data/cooperation/eu-cn.json\`. Events and media outlets (51 entries) are excluded: they are channels, not partners; they stay in the directory.
2. **Type mapping** from the directory's \`stakeholder_type\`/\`level\` to: foundation, OSPO, university, think-tank, standards, public-agency, industry-assoc, company, funder, community, cooperation-body.
3. **Tracks (A-F)** derived from the directory's pillars plus type and keywords (security terms add B, mirroring/interop terms add E). A rule-based first guess to be reviewed.
4. **EU-China ties**: cooperation records linked by \`see_stakeholder\` or by the same website, plus roles that mention the other side. Each tie keeps its source URL and evidence level.
5. **Likelihood** (inference, heuristic): directory priority + documented tie + fit of the type with the commons agenda + listed open-source projects, minus local-government units with a narrow remit. high >= 4, medium >= 3, otherwise low. The score is printed in each record's \`likelihood_reason\`.
6. **Cooperation bodies**: institutions, offices, chambers, think tanks, joint labs and networks from the cooperation map that are not already in the directory (dialogues, agreements and programmes are not organisations and are excluded).
7. **Curated additions** (\`tools/collab_additions.js\`): foundations, standards bodies, communities, universities, think tanks and companies missing from the inputs, chosen by analyst judgement; homepages checked for reachability only (HTTP 2xx/3xx gives evidence C, otherwise D). One (Shanghai Open Source Information Technology Association) was surfaced by web search.
8. **Dedupe** by website domain (hand-kept exceptions: Linux Foundation, OpenAtom, OpenForum Europe, Interoperable Europe, whose domains are shared with directory sub-units). Merged ids are kept in \`source_ids\`.

## Counts
### By side
${tbl(["side", "n"], cnt("side"))}
### By type
${tbl(["type", "n"], cnt("type"))}
### By likelihood (inference)
${tbl(["likelihood", "n"], cnt("likelihood"))}
### By evidence level of the organisation record
${tbl(["evidence", "n"], cnt("evidence"))}
### By track (an organisation can fit several)
${tbl(["track", "n"], Object.entries(trackCnt).sort())}
### Group x likelihood
${tbl(["group", "high", "medium", "low"], ["EU institutions", "Member states / Europe (non-EU incl.)", "CN", "INTL"].map(g => [g, ...["high", "medium", "low"].map(l => recs.filter(r => grp(r) === g && r.likelihood === l).length)]))}
Records with at least one documented tie to the other side: **${withTies}** of ${recs.length}.

## Top 50 high-likelihood organisations
Ranked by heuristic score (ties and evidence as tie-breakers). Likelihood is an inference.

${tbl(["#", "id", "organisation", "side", "type", "tracks", "basis (inference)", "ev."], high.slice(0, 50).map((r, i) => [i + 1, "`" + r.id + "`", `[${esc(r.name)}](${r.url})`, r.side, r.type, r.tracks.join(","), cut(r.eu_cn_ties[0] ? r.eu_cn_ties[0].text : r.likelihood_reason, 110), r.evidence]))}
## Gaps and caveats
- **Member-state coverage**: ${states.size} country codes outside the EU level and China appear. The smallest states are represented mostly by government units and Wikimedia chapters, rarely by OSS foundations.
- **Chinese provinces and cities**: ${cnAg} Chinese public-agency records, mostly central, provincial and municipal economy/IT bodies from the directory. Only one provincial/city open-source association (Shanghai) was verified in this pass; searches for Zhejiang, Shenzhen and Chengdu open-source associations found policy documents but no association websites. This remains a gap.
- **Contacts**: most \`institutional_contact\` entries are homepages or contact pages found automatically; curated additions only have the homepage. A contact-page pass is needed before any outreach.
- **Evidence**: ${recs.filter(r => r.evidence === "C" || r.evidence === "D").length} records are evidence C/D. The ${adds} curated additions carry prior-knowledge claims about EU-China ties (\`evidence: D\` on each tie): leads to verify, not facts.
- **Value propositions** are generated from the directory's role description plus a per-type template of what the organisation gains; the top 50 deserve hand-written versions.
- **Likelihood** is a transparent heuristic, not a measurement of interest; no organisation has been contacted. Politically sensitive actors (telecom vendors, security agencies, state think tanks) are rated low for open collaboration on purpose.
- **Categories to search next**: national OSPOs in smaller member states, Chinese university open-source programme offices, Hong Kong foundations, universities and innovation bodies (in scope: as part of the Greater Bay Area together with Shenzhen, it shares a substantial and long-standing cross-fertilisation of research, talent, capital and open-source communities with mainland China, and often acts as a bridge to European partners. Macao is included for the same Greater Bay Area reason and for its established role as a platform between China and Portuguese-speaking countries, which gives Portugal and the Lusophone world a specific channel of cooperation.), member-state science councillors and China offices, EU RISC-V companies, Chinese open-source education bases.
- **Next step (G3/G4)**: validate the top 50 by hand with Chinese and European reviewers, then plan tailored, human-sent outreach per segment.
`;
fs.writeFileSync("docs/COLLAB-MAP.md", md, "utf8");
console.log("ok, high:", high.length);
