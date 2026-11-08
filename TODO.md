# Roadmap — Europe–China Digital Commons Observatory
*中欧数字公地观察站 · eu-china-commons.eu*

Updated 3 Nov 2026. Rules: **max 10% of the weekly token budget** · low impact, steady pace · every source archived (copy + original link) · every claim labelled (fact / commitment / inference / proposal) · STATE.md and this file updated at every step.

## Sequence and gates
Each phase starts only once the previous gate is met.

```
Phase A  Research (continuous)            ── gate A: "enough information"
Phase B  Site structure + white paper      ── gate B: structures approved by Fabio
Phase C  Brand identity and design         (prepared in parallel with A, chosen at gate B)
Phase D  Writing, EN + ZH publication
Phase E  Content operations, social, outreach (continuous)
Phase F  Translation into all EU languages (LOWEST PRIORITY, local CPU LLM)
```

The v0.1 site already online locally stays **frozen as a placeholder**. It is not expanded until gate A.

**Gate A, "enough information".** All of these must hold:

- [x] Catalogue: ≥ 5 verified PA-reuse cases per side *(EU 8, CN 5 — 2 Nov)*
- [ ] Original texts of the key Chinese documents fetched (Section B of docs/CN-VPN-QUEUE.md)
- [ ] Systematic literature review including academic databases and CNKI
- [x] At least 3 "bridge opportunities" checked with sources on both sides *(Eclipse–OpenAtom, Digital Dialogue, Catena-X–CAAM — 2 Nov)*
- [x] ≥ 8 verified industrial open-source stack cases per side (added 2 Nov; EU 10, CN 11)
- [x] Registry ≥ 60 initiatives, ≥ 60% primary *(62, 66%)*

---

## Phase A — Research (continuous, within budget)
- [x] DC-EDIC Implementation Strategy analysed (docs/REVIEW-DRAFT.md)
- [x] Literature review v1 (docs/LITERATURE-REVIEW.md)
- [x] Multi-level registry v1: 50 initiatives (data/initiatives.json, docs/MULTILEVEL-ANALYSIS.md)
- [x] Archive of 108+ sources (sources/archive/, index with SHA-256)
- [ ] Round 2 (in progress): Shanghai declaration, 15th Five-Year Plan, GB/T 44272-2024, CAC/SASAC, Chinese PA reuse, Sichuan/Fujian/Shandong/Hubei/Hunan, EDCOM, EU instrument budgets
- [ ] **China VPN** → work through docs/CN-VPN-QUEUE.md (regenerate with tools/vpn_queue.sh)
- [ ] Academic databases (Scholar, SSRN, Scopus) and CNKI (via VPN)
- [ ] Read the flagged items: OpenUK *AI Openness Report* (Jul 2026), MERICS AI stack (Jul 2025)
- [ ] Oniro/OpenHarmony case study at repository level, plus a reply to the House Select Committee letter (Jun 2025)
- [ ] Funding comparison: EU maintenance vs Chinese incubation, with additionality as the metric
- [ ] Weekly monitoring of new policies (server job, once the dedicated account is available)

## Phase B — Site and white paper structure (after gate A)
- [ ] Information architecture of the site: sections, catalogue, registry, sources, publications, call. Must be multilingual from the start
- [ ] White paper structure: executive summary, method, the 4 levels, complementarity and risk, bridge opportunities, call to institutions, annexes (registry, sources)
- [ ] Present both to Fabio for approval

## Phase C — Brand identity and design that resonates in China
Prepared in parallel with research; the choice is made at gate B.
- [ ] Brief: cultural proximity without exoticism or clichés (no dragons, no stereotyped pagodas). Keep the correct technical jargon in both languages (开源, 数字公地, 开源治理, 供应链安全; open source, digital commons, stewardship)
- [ ] Chinese name: check tone, register and connotations with native speakers (中欧数字公地观察站; short brand to be found). Avoid ambiguous homophones and Belt-and-Road political lexicon
- [ ] Colours: avoid pairings that read badly in China (e.g. green hats; white/black only as mourning colours). Red and gold carry meaning but should be used sparingly so as not to look like official propaganda. Balance with EU blue
- [ ] Numbers and symbols: avoid 4 in prominent positions. Consider bridge, knot (结) and "shared field" motifs. Logo legible at small sizes in WeChat
- [ ] Typography: system fonts that work in China (PingFang, Microsoft YaHei, Noto Sans CJK); no Google Fonts (blocked)
- [ ] Tone of voice in ZH: formal but not bureaucratic; the register of Chinese tech communities (KAIYUANSHE, OSChina)
- [ ] Test the brand with 5–10 Chinese contacts and 5–10 European contacts before adopting it
- [ ] Logo, palette, social templates for WeChat cover images and LinkedIn banners

## Phase D — Writing and publication (EN + ZH)
- [ ] White paper v1 EN, then ZH (native review required)
- [ ] Site v1 on GitHub Pages at eu-china-commons.eu
- [ ] Four proposition papers and talking points for EU and CN audiences
- [ ] Working paper with a DOI (Zenodo/SSRN)

## Phase E — Operations, social, outreach (continuous)
- [ ] Token ledger + weekly job with a 10% cap (dedicated server account)
- [ ] Social EU: LinkedIn, Mastodon, Bluesky, YouTube, GitHub. CN: WeChat 公众号 (via a Chinese partner), Weibo, Zhihu, Bilibili, OSChina, Gitee. **Accounts created by Fabio**
- [ ] Monthly newsletter "Commons Bridge Brief"; monthly catalogue update
- [ ] Call to institutions: EU, China, member states and provinces (draft already on the v0.1 site)
- [ ] Fundraising EU + CN under the funding policy (no funder above ~30%, transparency, sanctions screening)

## Phase F — Translation into all 24 EU languages (LOWEST PRIORITY)
Goal: site and white paper in every official EU language, kept up to date **without spending Claude tokens**.
- [ ] Model: local, on the server CPU (8 threads, 31 GB RAM, AVX2; ollama already installed). Candidates:
  - **EuroLLM-9B-Instruct**: EU-funded, covers all 24 EU languages, open licence. The preferred choice
  - **Opus-MT (Helsinki-NLP / Marian)**: one model per language pair, very fast on CPU, open licence. Fallback for quality and speed
  - *Avoid NLLB-200*: non-commercial licence (CC-BY-NC)
- [ ] Pipeline: sources in EN (master) → segments with a hash → translation cache → only changed segments are retranslated. Nightly job with `nice`, a few segments per night, no hurry
- [ ] Glossary of fixed terms per language (digital commons, DC-EDIC, open source…) applied before and after translation
- [ ] Every page carries the note "machine translation, last updated …" plus a link to the EN original; human review by volunteers when available
- [ ] ⚠ Server disk is 93% full (66 GB free): check space before downloading models (~6 GB per model)

## Infrastructure and decisions
- [x] Domain chosen: **eu-china-commons.eu** (to register, EU registrant)
- [x] GitHub Pages workflow ready (.github/workflows/pages.yml, site/CNAME)
- [ ] GitHub repo and dedicated server account (Fabio) → push, Pages, move the jobs
- [ ] Public email; native ZH reviewer; public vs private source archive; Chinese partner for WeChat

## Methodology (docs/METHODOLOGY.md) — added 4 Nov 2026
Research method and dissemination method are both deliverables, to be published as an annex to the white paper and on the site.
- [x] Methodology v0.1: evidence levels A–D, 6-step cycle, multi-LLM cross-check (Western + Chinese, blind, two languages, kappa), audience map, 4 pillars (policy, governance, funding, operations), formats ladder
- [ ] **Qwen + DeepSeek via subscription/free chat only (no API)**: Fabio opens the accounts and logs in in the browser; Claude drives low-volume sessions and archives them in reviews/
- [ ] Pilot with 3 tasks: (1) search for the Shanghai declaration and the 15th Five-Year Plan passages; (2) completeness check of the registry and catalogue of Chinese initiatives; (3) review of the ZH text and the Chinese name
- [ ] Set up protocols/, reviews/, data/llm-runs.tsv, docs/MODEL-CARDS-USED.md, decision log docs/REGISTRO.md
- [ ] Kappa on the first scoring round (humans + models)
- [ ] Message testing with real audiences, EU and CN

## Stakeholder map and invitations — added 4 Nov 2026
- [ ] Stakeholder map EU + CN (data/stakeholders.json, docs/STAKEHOLDERS.md), in progress: EU institutions, 27 member states, regions, China central, provinces, foundations/communities, companies, academia, diplomacy
- [ ] Only official organisational channels (no private personal data) — GDPR
- [ ] Invitation text EN + ZH (after gate B, when the site is published)
- [ ] First wave of ~30 invitations, **each send approved by Fabio**; track responses in a private repo (not the public one)

## Cross-validation with external LLMs (ChatGPT, DeepSeek, Qwen) — added 4 Nov 2026
Fabio is logged in on Chrome to all three. ChatGPT Plus (€20/month), DeepSeek and Qwen on free plans: **stay within the free plans** for DeepSeek and Qwen.
- **Trigger:** the full blind cross-validation round starts at gate A. **Since 2 Nov (Fabio): targeted, iterative questions to all three are allowed now**, logged in reviews/ and llm-runs.tsv, leads always re-verified by Claude.
- [ ] Protocols in protocols/ (prompts EN + ZH, identical across the three models, blind)
- [ ] Rounds spread over time: at most a few sessions per day per service, staying within the free-plan limits
- [ ] Tasks: (1) Chinese-index searches (Shanghai declaration, 15th Five-Year Plan, missing initiatives); (2) completeness check of registry + catalogue; (3) review of the analyses (REVIEW-DRAFT, MULTILEVEL) and scores; (4) ZH text and Chinese name
- [ ] Every run archived in reviews/ + data/llm-runs.tsv; disagreements → decision log

## Industrial open-source stacks — added 2 Nov 2026 (Fabio)
PA reuse is not the only goal: also map how each side builds open-source stacks for its own industry.
- [ ] Catalogue category `industrial-stack`, ≥ 8 verified cases per side (OS/cloud, automotive/IoT, RISC-V, AI open-weight, dev platforms, data spaces)
- [ ] For each: governance (foundation, company, state), funding, industrial adoption figures, licence, openness to the other side's contributors
- [ ] Complementarity matrix EU ↔ CN by layer (where stacks overlap, compete, or could interoperate)
- [ ] Add to gate A: ≥ 8 verified industrial-stack cases per side
- [ ] Targeted LLM questions (Qwen/DeepSeek for CN industrial adoption data; ChatGPT for EU)

## Public funding comparison — added 3 Nov 2026 (Fabio)
- [ ] data/funding/{eu,cn}.json per SCHEMA.md; EUR at ECB annual rates; tables via tools/build_funding.js → docs/FUNDING-COMPARISON.md + site/data/funding.json
- [ ] Every public representation carries the notice "open-source research, correctable" + contribute links
- [ ] **TODO contacts:** public email (replace placeholder in tools/build_funding.js) + GitHub issue label `funding-data` and an issue template
- [ ] Site page for the comparison (after gate B)

## Funding chapter — conclusion (Fabio, 3 Nov)
- [x] (v1.0, 3 Nov) Close the funding research as a chapter (docs/FUNDING-CHAPTER.md): public money, private corporate money, modalities, project-level funding → conclusions labelled fact/inference/proposal, limits from RESEARCH-DEPTH, implications for EU–China cooperation. Draft as soon as R15 (project funding) is in; later rounds update it as a new version.

## Site build (7 Nov 2026) — produced, NOT published
- [x] tools/build_site.js: 139 static pages (14 research chapters, 65 catalogue entries EN, 17 ZH, 34 project-funding pages, data pages), canonical + hreflang en/zh-CN/x-default, JSON-LD (ResearchProject, Report, Dataset, Article, BreadcrumbList), OpenGraph, sitemap.xml with xhtml alternates, robots.txt (EU/US + AI + Baidu/Sogou/360/Shenma/Bytespider/Petal), llms.txt + llms-full.txt, CSV/JSON datasets CC BY 4.0, Baidu meta (no-transform, applicable-device). No external resources.
- [ ] Before publishing: brand name (header still "Observatory on European and Chinese Digital Commons" vs NAME constant), public e-mail, native review of ZH (pages carry "草稿，待母语审校"), decide hosting for China (Gitee Pages closed 2024; AtomGit Pages reportedly suspended — check; options: HK/Singapore object storage, mirror), Baidu/Bing webmaster verification files, OG image.
- [ ] ZH SEO/GEO: full Chinese versions of the funding chapter and key findings; republish on WeChat/Zhihu/CSDN (sources Chinese LLMs cite).
- [x] ZH copy-edit via Qwen + DeepSeek (7 Nov): 60/64 suggestions applied, draft notice removed (reviews/2026-11-07_zh-copyedit.md)
- [x] 2026-11-08: eu-china-commons.eu registered (Internet.bs, Fabio as natural person, expires 2029-11-08); DNS A×4 + CNAME www set on TopDNS; GitHub Pages enabled (workflow mode, cname set), Deploy site run 42454834894 OK
- [ ] Enforce HTTPS once GitHub issues the certificate (after .eu delegation propagates)
- [ ] Mailbox contact@eu-china-commons.eu: Fabio creates it, then add MX records via ~/domains.py dns-add
- [ ] **CN mirror via Tencent EdgeOne Pages (FREE plan only), set up TOGETHER with Fabio when he has time:** (1) Fabio creates a free edgeone.ai account and connects GitHub repo fpietrosanti/eu-china-commons; (2) build cmd `node tools/build_funding.js && node tools/build_site.js`, output `site/`, region "Global (excluding Chinese mainland)" (no ICP); (3) check in the console that the plan is free with no card charge; (4) run the 31-node chinaz test on the *.edgeone.app URL, compare with GitHub (18/31 on 2026-11-08); (5) if better: CNAME cn.eu-china-commons.eu via ~/domains.py dns-add, and make cn. pages self-canonical for Baidu. Fallback: Alibaba OSS HK job in pages.yml (inactive)
- [ ] Test reachability from mainland China (17ce.com / boce.com) and log result in docs/HOSTING-CN.md

## Continuous collection (started 2026-11-08, Fabio: "procedi senza mai fermarti")
- [ ] Industrial policy & economic impact literature → data/lit/industrial-policy.json, docs/INDUSTRIAL-POLICY.md (new research section)
- [ ] EU–China and member-state–China cooperation map with official sites/contacts → data/cooperation/eu-cn.json, docs/EU-CN-COOPERATION-MAP.md
- [ ] Organisation directory EU + member states → data/directory/eu-orgs.json, docs/DIRECTORY-EU.md
- [ ] Organisation directory China → data/directory/cn-orgs.json, docs/DIRECTORY-CN.md
- [ ] Publish: research chapter "Industrial policy", directory + cooperation map pages and CSV/JSON downloads on the site
- Daily task step 2f keeps all four streams growing.

## Server + queues (2026-11-08)
- Server user **euchina@51.158.36.151**, clone ~/eu-china-commons, deploy key (write) on the repo. Cron `0 2 * * 0` runs tools/registry/weekly.sh (all harvesters → stats → queues → commit/push). Logs ~/registry-logs/, success marker ~/registry-logs/LAST_OK. First run 2026-11-08 (cordis failed: unzip missing, installed, re-run queued).
- [ ] Fabio: optional GitHub read-only token in ~euchina/.config/gh_token.env to enable gh_funding on the server.
- Queues: docs/QUEUES.md (generated by tools/queues.js) — VPN 99 open, assisted/CAPTCHA 93 open; each item has "then" + files to update. Mark completions in data/queues/done.tsv.
- [ ] Assisted session with Fabio (Claude in Chrome): work the assisted queue, registry items first (Prototype Fund, NSFC, Förderkatalog).

## Mail + LinkedIn (2026-11-08)
- [x] eu-china-commons.eu added as secondary domain to the glslatina.it Google Workspace (admin fabio.pietrosanti@glslatina.it); verified (TXT), Gmail active; DNS MX `1 smtp.google.com`, SPF `v=spf1 include:_spf.google.com ~all` (set via Internet.bs API).
- [x] fabio.pietrosanti@eu-china-commons.eu = alias of fabio.pietrosanti@glslatina.it (no extra licence).
- [x] Group contact@eu-china-commons.eu ("EU-China Commons contact"): owner/only member Fabio, external senders allowed, join by invitation only.
- [ ] Optional: DKIM for eu-china-commons.eu (Admin → Gmail → Authenticate email) + DMARC TXT; test inbound from an external address.
- [x] LinkedIn page https://www.linkedin.com/company/eu-china-commons/ (EN default + zh_CN), linked from site contacts and JSON-LD.
