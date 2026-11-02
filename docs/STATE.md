# STATE — Europe–China Digital Commons Observatory (中欧数字公地观察站)

**Updated: 4 Nov 2026** · Roadmap and gates: [../TODO.md](../TODO.md) · Method: [METHODOLOGY.md](METHODOLOGY.md)

## 1. Where we are, in one paragraph
**Phase A (research) is in progress. Gate A is not met yet.**
- We have the full analysis of the DC-EDIC Strategy, a literature review, a 4-level registry of 56 initiatives, a catalogue of reuse and collaboration cases, an archive of more than 100 sources with SHA-256, and a research and dissemination methodology.
- The v0.1 site (EN/ZH) exists locally and is **frozen** until gate A.
- **Not done yet:** nothing is published, and GitHub and the domain are waiting on Fabio.

## 2. Decisions taken (Fabio)
| Date | Decision |
|---|---|
| 29 Oct | Scope: open source / digital commons only. Working docs in EN |
| 2 Nov | Site EN + ZH; name "Osservatorio sui Digital Commons Europei e Cinesi" → EN *Europe–China Digital Commons Observatory*, ZH 中欧数字公地观察站 |
| 3 Nov | Domain **eu-china-commons.eu**; **token budget max 10% of the weekly budget**; one GitHub repo = repository + Pages site; dedicated server account (maximise what is deployed there) |
| 3 Nov | A copy of every external source in the repo + link to the original |
| 3 Nov | Translation into all 24 EU languages = lowest priority, local CPU LLM, no Claude tokens |
| 3 Nov | Site and white paper structure only after "enough information" (gate A); brand identity that resonates in China |
| 4 Nov | Source archive: **all copies public** in the repo (Fabio), including third-party sources, with attribution and original link
| 4 Nov | Research and dissemination methodology is itself a deliverable; Chinese LLMs (Qwen, DeepSeek) **through subscription chat only, no API** |

## 3. Gate A — progress
| Criterion | Target | Now |
|---|---|---|
| Registry initiatives | ≥ 60, ≥ 60% primary | **62, 41 primary (66%) ✓** |
| Verified PA-reuse cases | ≥ 5 per side | **EU 8 ✓**, **CN 5 deployed/default + plans** (Fujian e-gov cloud openEuler default, A, 2 Nov; Yue Zhengyi, Sui Hao Ban on HarmonyOS; Longgang lab; plus plans). Pending Fabio: whether HarmonyOS counts |
| Key Chinese originals | Section B of the VPN queue fetched | 8 in the queue, VPN not yet available |
| Systematic literature review | Including academic databases + CNKI | Web + think tanks done; academic databases and CNKI missing |
| Verified bridge opportunities | ≥ 3 | **2 verified** both sides (Eclipse–OpenAtom sister projects, latest 26 Mar 2026; EU–China High-Level Digital Dialogue channel), 2 partial (EPL-2.0 ZH translation, OpenChain–openEuler). See reviews/2026-11-02_chatgpt_bridges.md |

**Registry by level and evidence:**

| Level | Primary | Secondary | Unverified | Total |
|---|---|---|---|---|
| EU | 4 | 8 | 1 | 13 |
| China central | 7 | 5 | 3 | 15 |
| EU member states | 3 | 9 | 3 | 15 |
| Chinese provinces | 7 | 6 | 0 | 13 |

## 4. What is running now
- Round 3 done (4 Nov): EU 8 verified PA cases; CN 4. Gap: no named Chinese government body running openEuler/openKylin found (a finding in itself).
- Archiving the round-2 sources on the server (ubuntu@51.158.36.151:~/ecdc, temporary). It is copied back into the repo and committed automatically.

## 5. Waiting on Fabio
| Item | Why it matters |
|---|---|
| GitHub repo | Push, Pages, publication |
| Dedicated server account | Move jobs: archive, weekly monitoring, token ledger, CPU translation |
| China VPN | 8 resources in docs/CN-VPN-QUEUE.md (Shanghai declaration, 15th Five-Year Plan, Chongqing…) |
| ~~Qwen + DeepSeek + ChatGPT accounts~~ ✓ logged in on Chrome (4 Nov) | Cross-validation starts at gate A |
| Register eu-china-commons.eu | EU registrant |
| Public email; native ZH reviewer; Chinese partner for WeChat | Contacts, ZH quality, Chinese channels |


## 6. Map of the work
| Area | File |
|---|---|
| Roadmap | TODO.md |
| DC-EDIC analysis, 4 levels, scores | docs/REVIEW-DRAFT.md |
| Literature + novelty | docs/LITERATURE-REVIEW.md, docs/LITERATURE-AND-NOVELTY.md |
| Multi-level registry | data/initiatives.json, docs/MULTILEVEL-ANALYSIS.md |
| Catalogue | data/catalogue-verified.json (research), site/data/catalogue.json (site) |
| Sources | sources/archive/ + index.tsv; tools/archive_sources.sh |
| China-VPN queue | docs/CN-VPN-QUEUE.md (tools/vpn_queue.sh), data/cn_vpn_needed.txt |
| Method | docs/METHODOLOGY.md; protocols/, reviews/, data/llm-runs.tsv |
| Operations, social, budget | docs/OPERATIONS.md |
| Brand / domain | docs/DOMAIN-OPTIONS.md |
| Site v0.1 (frozen) | site/ (preview: node tools/serve.js, port 8090) |

## 7. Next steps (in order, within budget)
1. Fifth CN case (Guangdong/Guangzhou OpenHarmony, provincial 政务 apps) + archive the round-3 sources.
2. Raise registry evidence to primary: official sources for the "secondary" EU-national records (low cost).
3. Academic databases (Scholar/SSRN/Scopus) → PRISMA-style literature review.
4. Write the protocols/ for the research questions (method §3.1).
5. Brand brief (phase C) as a document only; no design before gate B.
6. When the accounts and the VPN arrive: Chinese pilot + VPN queue.

## 8. Known risks
- Server disk at 93%: check before downloading LLM models.
- House Select Committee letter (Jun 2025) on Eclipse–OpenAtom: we must answer it in the white paper.
- Novelty: don't claim to be "first on complementarity" (Huawei/Bitergia keynote, Aug 2025).
- Chinese figures are announced envelopes, not proven spending.

## 9. Iterative LLM research (started 2 Nov, Fabio: "don't wait for the big review")
Targeted questions to ChatGPT (Plus), DeepSeek and Qwen (free) via Chrome; every run in reviews/ + data/llm-runs.tsv; every lead re-verified by Claude before use.
- Run 1 (2 Nov): DeepSeek + Qwen on Chinese PA deployments → Fujian e-gov cloud openEuler default (verified, A). ChatGPT on bridges → 2 verified, 2 partial, 1 rejected (off-topic Horizon project marked "yes" by ChatGPT).
- Lessons: DeepSeek free loses "Search" on follow-ups; LLM "verified" flags are unreliable; Chinese LLMs are better than Western ones at finding .gov.cn documents.
- Next questions: EU-side source for EPL-2.0 translation; OCR of the Hulunbuir e-gov cloud contract; openEuler OSV list as bridge evidence for Kylin/UOS; third bridge (e.g. OW2/OpenInfra with Chinese members, OpenHarmony–Oniro compatibility).
