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
- [ ] Registry ≥ 60 initiatives across 4 levels, ≥ 60% with a primary source *(currently 50, 20 primary)*
- [ ] Catalogue: ≥ 5 verified PA-reuse cases per side *(EU 2, CN ~2)*
- [ ] Original texts of the key Chinese documents fetched (Section B of docs/CN-VPN-QUEUE.md)
- [ ] Systematic literature review including academic databases and CNKI
- [ ] At least 3 "bridge opportunities" checked with sources on both sides

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
