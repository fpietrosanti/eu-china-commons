# Methodology — Europe–China Digital Commons Observatory

*Draft v0.1, 4 November 2026. This document is itself a deliverable: it will be published on the site and as an annex to the white paper, so others can reuse, criticise and reproduce our method.*

The observatory follows two linked methodologies:

- **Part I, Research.** How we find, verify, cross-check and update evidence, using Western and Chinese large language models (LLMs) under human control.
- **Part II, Dissemination.** How we make sure that every interested party finds the results, understands them and sees the advantage of cooperating on **policy, governance, funding and operations** in open source.

---

# Part I — Research methodology

## 1. Principles
1. **Evidence before argument.** Every claim is labelled *fact* (directly supported by a cited text), *commitment* (a published target or envelope, not a result), *inference* (our reasoning, testable) or *proposal* (our recommendation).
2. **Provenance for everything.** Every external source is archived (copy + original URL + date + SHA-256). Every LLM output is archived with model, version, provider, date, prompt and parameters.
3. **Two cultural lenses, one standard of proof.** Western and Chinese models and reviewers are used *symmetrically*. Neither is treated as neutral, and neither is a source of truth. Only primary documents are.
4. **Disagreement is data.** When models, reviewers or sources disagree, we record it and investigate. We never average it away.
5. **Reproducibility.** Prompts, protocols, data and code are public, so a third party can rerun a step and compare.
6. **Humans decide.** LLMs search, extract, draft and challenge. Accepting a claim, a score or a recommendation is a human editorial act, recorded with its rationale.
7. **Proportionate cost, subscriptions only.** Claude usage stays within 10% of the weekly budget. **Qwen and DeepSeek are used only through their consumer chat plans (chat.qwen.ai, chat.deepseek.com, both with web search). No API.** Translation runs on a local CPU model.

## 2. Roles: humans and models

| Role | Who / what | Does | Does not |
|---|---|---|---|
| Editor | Fabio Pietrosanti | Sets questions, approves claims, scores and publication | — |
| Synthesiser and verifier | Claude (Anthropic) | Plans research, reads primary sources, synthesises, checks other models' claims against archived sources | Accept its own unsourced claims |
| Chinese-index searcher | Qwen (Alibaba Cloud) with web search; Kimi (Moonshot) as alternative | Searches Chinese web indexes (.gov.cn, WeChat, Baidu) and returns candidate sources | Count as evidence by itself |
| Counter-reviewer (CN) | DeepSeek; Qwen without search | Reviews completeness and framing from a Chinese-language perspective; flags missing initiatives, wrong terms, misreadings | Act as a neutral fact-checker (it follows domestic content rules) |
| Counter-reviewer (West) | ChatGPT (Plus plan, web chat) | Independent second reading of high-stakes claims | — |
| Native reviewers | Human Chinese and European experts (volunteers or partners) | Validate translation, terminology, cultural fit and interpretation of Chinese policy texts | — |
| Domain reviewers | Academics, practitioners | Review the rubric, scores and white paper | — |
| Translator | Local CPU model (EuroLLM-9B / Opus-MT) | Translates approved EN text into EU languages | Translate unapproved drafts |

## 3. The research cycle

Each research question goes through six steps. Every step leaves a file in the repository.

```
1 Question ─▶ 2 Search ─▶ 3 Extract ─▶ 4 Cross-check ─▶ 5 Adjudicate ─▶ 6 Publish & update
   (protocol)   (multi-index)  (structured)  (multi-model,     (human,         (versioned,
                                              multi-lens)       recorded)       monitored)
```

1. **Question and protocol.** The question, scope, inclusion criteria and expected outputs are written *before* searching: a light form of pre-registration. File: `protocols/Pxx.md`.
2. **Search, in parallel on separate indexes.**
   - Western web and academic indexes (Scholar, SSRN, Scopus, think tanks).
   - Chinese indexes, via Qwen search, plus CNKI and Baidu through the China VPN.
   - Official registries (EUR-Lex, .gov.cn, SAMR standards, the register of social organisations).

   Each candidate source is logged with the index it came from. This lets us measure each index's coverage and blind spots.
3. **Extraction.** Primary texts are archived, then key fields are extracted into structured records (`data/initiatives.json`, catalogue). Each extracted field points to the exact clause, page or paragraph.
4. **Cross-check.**
   - *Source check.* Each fact is checked against the archived text by a model **other than the one that extracted it**.
   - *Cultural-lens check.* A Chinese model and a Western model each review the same record or section for completeness, interpretation and terminology, blind to each other's answer.
   - *Adversarial check.* For high-stakes claims (anything in an executive summary or a call to institutions), one model is instructed to try to refute the claim with sources.
5. **Adjudication.** The human editor resolves disagreements and records the decision, rationale and evidence level in `docs/REGISTRO.md` (decision log). Unresolved points stay visible as *open questions*.
6. **Publish and update.** The output is published with a version number and date. A weekly monitoring job watches for new or changed policies and sources; any change reopens the affected records (step 3 onward). The public changelog lists every material change.

## 4. Evidence levels and labels

| Level | Meaning | Can appear as a fact in publications? |
|---|---|---|
| **A** | Primary official text, archived, read in the original language | Yes |
| **A-v** | Primary text read via relay/translation, pending direct re-fetch (e.g. China VPN queue) | Yes, flagged |
| **B** | Reliable secondary source (official press, established media, peer-reviewed or think-tank analysis) | Yes, attributed |
| **C** | Single secondary source, or industry/self-reported figures (e.g. platform statistics) | Only as "reported by…" |
| **D** | LLM-generated candidate without a verified source | **Never.** It is a lead to investigate |

Announced budgets are *commitments* unless disbursement is documented. Targets are not results.

## 5. Multi-LLM cross-checking: rules
- **Model diversity.** At least one Western and one Chinese model for every completeness and interpretation review; different vendors for extraction and verification.
- **Blindness.** A reviewer model does not see the other model's answer before giving its own.
- **Same prompt, two languages.** Cultural-lens prompts are written in EN and ZH and run in both languages. Differences between the language versions are recorded, because they reveal framing effects.
- **Known biases recorded, not hidden.** Each model's known limits are documented in `docs/MODEL-CARDS-USED.md`: training cut-off, content rules, tendency to over-confidence. Chinese models' political content rules make them informative about *acceptable domestic framing*. Western models may over-weight security framing. Both are treated as perspectives.
- **Agreement metrics.** For scored items (complementarity, feasibility, exposure; evidence levels) we measure agreement between independent raters, humans and models, with Cohen's or Fleiss' kappa, and publish it. Low agreement triggers a rubric revision.
- **Hallucination control.** No model output becomes a fact without an archived source at level A or B. A model that cites a non-existent source has that output discarded and the incident logged.
- **Reproducibility log.** Every LLM run records provider, model ID, version or date, temperature, prompt hash and output hash in `data/llm-runs.tsv`. The outputs are stored in `reviews/`.

## 6. Data and publication standards
- **FAIR data.** The registry, catalogue, source index and LLM-run log are published as JSON/CSV with a data dictionary. Open licences: data under ODbL, text under CC BY 4.0.
- **Literature reviews** follow a PRISMA-style flow: indexes searched, records found, screened, included, with reasons for exclusion.
- **Working papers** get a DOI (Zenodo) and a version history. Methods, data and limitations sections are mandatory.
- **Negative results** are published: initiatives not found, claims refuted, gaps.
- **Corrections policy.** Errors are corrected openly, with a dated note.

## 7. Ethics and safeguards
- Only public material goes to external models. No personal data and no private correspondence. Partner documents are shared only with consent.
- Funders have no influence on methods or findings. Funding is disclosed.
- Political sensitivity: we describe policies and their evidence. We do not make accusations or endorsements of governments or companies.
- Sanctions and export-control screening before any technical exchange proposed in our recommendations.

## 8. Quality indicators of the method itself
- Share of published facts at evidence level A/A-v. Target: ≥ 70%.
- Share of claims that passed a multi-model cross-check with a different vendor.
- Inter-rater agreement (kappa) on scores.
- Coverage gap between Western and Chinese indexes: how many relevant sources each found alone.
- Time from a policy change to the update of our records.

---

# Part II — Dissemination methodology

## 9. Goal
Every interested party should **find** the work, **understand** it in its own language and frame, and see **what it gains** from cooperating on four pillars.

| Pillar | The core advantage, in one line |
|---|---|
| **Policy** | Shared resilience of the global open-source upstream, without a bilateral bloc or loss of autonomy. |
| **Governance** | Common definitions, health rubrics and anti-capture rules make cooperation verifiable and safe. |
| **Funding** | Europe funds maintenance, China funds creation and adoption; learning from each other closes both gaps, with no money crossing borders. |
| **Operations** | Shared tests on open standards, evidence exchange and maintainer networks deliver results now, at low cost and low risk. |

## 10. Audience map

| Audience | What they need to see | Format | Channel |
|---|---|---|---|
| EU institutions (Commission, DC-EDIC, EDCOM, Interoperable Europe) | Evidence that fits their own results (E1–E8) and criteria; zero perimeter change | 2-page policy brief; annex mapped to the Implementation Strategy | Direct briefings, Advisory Board, OSOR, consultations |
| Chinese central institutions (MIIT, OpenAtom, standards bodies) | Recognition of Chinese capacity; global upstream framing; reciprocity | ZH brief in official register; data annex | Partners (KAIYUANSHE, CCF ODC, universities), conferences |
| EU member states (national OSPOs, digital ministries) | Comparable provincial programmes; reuse and procurement lessons | Paired case notes ("Beijing ↔ Netherlands") | OSPO networks, national events |
| Chinese provinces and cities | European reuse-by-law and maintenance models; international visibility | ZH case notes, pairing proposals | Provincial associations, Shanghai/Zhejiang open-source events |
| Diplomacy (EEAS, EU Delegation in Beijing, Chinese Mission to the EU) | A low-risk, verifiable cooperation agenda | 1-page talking points | Direct contact; High-Level Digital Dialogue |
| Academia | Method, data, open questions | Working paper with DOI; datasets | SSRN/Zenodo, conferences, journals |
| Industry | Market access through shared standards; maintenance needs; reuse cases | Short case studies; webinars | LinkedIn, OSChina, industry associations |
| Communities and maintainers | Funding routes; recognition; contribution paths | Catalogue, bridge stories | GitHub/Gitee, Mastodon, COSCon, FOSDEM |
| Funders | A credible, independent, transparent vehicle | Prospectus with methodology and governance | Direct contact |
| Media | Clear facts and stories | Press notes, data visuals | Press lists EU and CN |

## 11. Messages: one core, framed per audience
- **Core message:** "Europe and China depend on the same open-source commons. Cooperating on its resilience is non-competitive, verifiable and good for both."
- Each audience gets the same facts **framed in its own vocabulary**:
  - EU: sovereignty as the ability to replace capabilities; Connect, Deploy and Maintain.
  - China: 开源 as infrastructure; 共建共享 (build together, share together), in the community register, not the political one.
  - Industry: market and cost.
  - Communities: maintainers and recognition.
- **Message testing.** Before release, messages are tested with 3–5 people from each audience and with Western and Chinese models used as "audience simulators". The simulators are only a pre-screen; real feedback decides.

## 12. Formats ladder
From quick to deep, so everyone finds an entry point:
1. A post or visual of 1 minute.
2. A 2-page brief.
3. A case study or bridge story.
4. The white paper.
5. Open data and the methodology.

Every format links one level deeper.

## 13. Channels and timing
- **Owned:** bilingual site (EN/ZH; EU languages later); monthly newsletter; GitHub/Gitee data.
- **Social EU:** LinkedIn, Mastodon, Bluesky, YouTube. **Social CN:** WeChat 公众号 (via a partner), Weibo, Zhihu, Bilibili, OSChina.
- **Events calendar:** FOSDEM (Feb), OpenAtom developer conference, Open Source Summit EU (Aug/Sep), Shanghai Open Source Innovation conference (Sep), COSCon (Nov), DC-EDIC Assembly and review milestones (end-2027).
- **Rhythm:** publish evidence first, then briefs, then events. Never announce before the evidence is public.

## 14. Feedback and measurement
- **Reach:** visits, subscribers and followers per language. These are tracked but never treated as success.
- **Understanding:** short feedback forms; the questions people ask; corrections received.
- **Uptake (what counts):** citations in official documents, invitations to brief, data reused by others, cases contributed to the catalogue, pairings started between programmes, funding secured under our policy.
- A quarterly dissemination review feeds back into research priorities.

## 15. Translation and accessibility
- EN is the master and ZH is maintained in parallel with native review.
- The 24 EU languages come from a local CPU model with a translation cache, a fixed glossary and a "machine translation" label, as the lowest priority.
- Plain-language summaries for non-specialists; accessible web pages; no external fonts or CDNs, so the site loads in China.

---

## Implementation status
- [x] Source archive with SHA-256 (sources/archive/)
- [x] Evidence labels in the analysis drafts
- [ ] `protocols/` for each research question
- [ ] `data/llm-runs.tsv` + `reviews/` + `docs/MODEL-CARDS-USED.md`
- [ ] Qwen and DeepSeek chat accounts (subscription/free plan, no API), logged in by Fabio in the browser: pilot with 3 tasks
- [ ] Kappa measurement on the first scoring round
- [ ] Decision log `docs/REGISTRO.md`
- [ ] Message testing with real audiences

## Annex — Using Chinese models without an API (decided 4 Nov 2026)
- **Access:** only the consumer web chats, **Qwen Chat** (chat.qwen.ai) and **DeepSeek** (chat.deepseek.com) on free plans, plus **ChatGPT** (Plus plan) as the Western counter-reviewer. Both offer a web-search option that reaches Chinese indexes. Fabio logs in himself in the browser.
- **Operation:** low-volume, human-paced sessions. Claude drives the logged-in browser (Claude in Chrome or the in-app browser), pastes a protocol prompt, and saves question and answer to `reviews/<model>-<date>-<task>.md`. No bulk automation, no scraping, and the terms of service of each service are respected. If a service forbids automated use, Fabio pastes the prompts himself and Claude only prepares and archives them.
- **Reproducibility under this constraint:** the API parameters (version, temperature) are not available. Each run therefore records:
  - the model name shown in the interface
  - the date and time
  - whether search was on or off
  - the full prompt and answer
  - the sources listed by the model

  Key prompts are rerun at least twice to observe variability.
- **Cost:** no tokens outside Claude's 10% budget. Claude's usage covers only preparing the prompts and verifying the answers.
