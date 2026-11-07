# STATE — Europe–China Digital Commons Observatory (中欧数字公地观察站)

**Updated: 7 Nov 2026** · Roadmap and gates: [../TODO.md](../TODO.md) · Method: [METHODOLOGY.md](METHODOLOGY.md)

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
| 2 Nov | **PA-reuse counts open source only**: HarmonyOS deployments are context, not reuse. The scarcity of documented open-source PA deployments in China is itself a finding |
| 2 Nov | **Scope widened**: besides PA reuse, track the building of **open-source stacks for each side's own industry** (OS, cloud, automotive/IoT, chips/RISC-V, AI open-weight models, dev platforms). New catalogue category `industrial-stack` |

## 3. Gate A — progress
| Criterion | Target | Now |
|---|---|---|
| Registry initiatives | ≥ 60, ≥ 60% primary | **62, 41 primary (66%) ✓** |
| Verified PA-reuse cases | ≥ 5 per side, **open source only** (Fabio, 2 Nov) | **EU 8 ✓**. **CN 5 ✓** (e-gov clouds offering openEuler: Fujian province, Yancheng, Jinan; Shijiazhuang market-supervision platform specified on openEuler 22.03 LTS — all A; Longgang OpenHarmony lab, pilot) + 3 plans (Wuhan, Shenzhen, Chongqing). HarmonyOS cases excluded, kept as context. **+1 candidate (B, not counted): Shenfu zone (Liaoning) e-gov cloud on Anolis OS 8.9, 50 servers (5 Nov)**, first CN PA case outside openEuler; needs a gov/ccgp source |
| Key Chinese originals | Section B of the VPN queue fetched | VPN-free routes: Wayback + residential IP recovered Shenzhen gazette, Jiangsu Data Bureau, **Shenzhen 2024 OSS award + guide, Longhua (4 Nov)**; still blocked: Chongqing ×2, Longgang; 17 lines left in data/cn_vpn_needed.txt; no-VPN probe 164/284 reachable |
| Systematic literature review | Including academic databases + CNKI | Web + think tanks done; **OpenAlex round 1 (4 Nov): 7 included; Semantic Scholar rounds 2–3 (5–6 Nov): 3/8 queries (rate-limited); arXiv round 4 (7 Nov): 10 included; cumulative 25 included, 0 comparative EU–CN**; Scholar/SSRN, 5 S2 queries and CNKI missing |
| Verified bridge opportunities | ≥ 3 | **3 EU–CN verified ✓** (Eclipse–OpenAtom sister projects; High-Level Digital Dialogue channel; **Catena-X ↔ CAAM/VDA China–Europe automotive trusted data space**, both sides A, 2 Nov) **+ 1 shared standard** (OpenChain ISO 18974 adopted by openEuler — LF project, borderline) + 1 partial (EPL-2.0 ZH translation, EU source missing) |
| Industrial open-source stacks | ≥ 8 per side | **EU 10 ✓** (8 A), **CN 11 ✓** (7 A, 2 C; + EasyXMen automotive, CETC, 2 Nov). Gaps: CN cloud/data-space layers (OpenAnolis: first gov deployment found, B, 5 Nov; OpenCloudOS: no named gov user; SecretFlow: no verified gov deployment, 7 Nov — gov texts name the technology class, not the project); first documented CN public funding: Shenzhen subsidy for OpenHarmony/RISC-V industrial adoption (A, 3 Nov); adoption figures are claims. See docs/INDUSTRIAL-STACKS.md |

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

## 7. Next steps (in order, within budget) — see also RESEARCH-DEPTH.md priorities
1. Shenzhen 2024 batch 1 and 2025–26 重大开源项目 公示 on gxj.sz.gov.cn (down 5–6 Nov from both routes; retry; Qwen no-retrieval also says 未找到, D) → would make a multi-year CN award series. ~~Guangdong ¥10M original~~ ✓ verified A (6 Nov) + 2 new OSS lines.
1b. Literature: S2 S1 S2 S3 S6 S8 still pending (keyless 429 again 7 Nov — ask Fabio for a free S2 API key); arXiv done 7 Nov; then SSRN. Shenfu: ccgp when un-throttled; 辽宁公共资源交易 portal for the 2025-12-30 result-notice original (amount now A-v).
1c. Next Qwen/DeepSeek free-tier round on the open gaps (OpenAnolis gov cases via DeepSeek — Qwen failed 7 Nov; OpenAtom 2024–25 financials; SecretFlow case page network API). SecretFlow gov ✖ (7 Nov).
1d. Fifth CN case (Guangdong/Guangzhou OpenHarmony, provincial 政务 apps) + archive the round-3 sources.
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
- Run 2 (2 Nov): ChatGPT on Catena-X/China → 3 Catena-X pages verified; DeepSeek on the Chinese side → 2 CAAM pages verified → **third bridge (Catena-X ↔ CAAM)**. Qwen on e-gov OSS → **Shijiazhuang openEuler (5th CN case)**, Changde context, 4 leads queued. DeepSeek on CN industrial stacks → EasyXMen (CETC) verified; still no documented public funding.
- Gate A remaining: Chinese originals via VPN, academic databases + CNKI.
- Next questions: unchecked Qwen leads (Fengxian, Pingli, OpenHarmony water terminals); Huawei role in Catena-X; EU-side source for EPL-2.0 translation; OCR of the Hulunbuir e-gov cloud contract; openEuler OSV list as bridge evidence for Kylin/UOS; third bridge (e.g. OW2/OpenInfra with Chinese members, OpenHarmony–Oniro compatibility).

- **Daily run 4 Nov (no LLM round, budget kept small):** (1) no-VPN reachability probe saved (data/cn_reachability_noVPN_2026-11-03.tsv); (2) **Shenzhen 2024 重大开源项目 award ¥8.32M verified on the original with the 4 beneficiaries (A)** + guide rates (A): money rewards OpenHarmony device shipments and a downstream distro, not upstream code; (3) OpenAlex literature round 1 (PRISMA log in LITERATURE-REVIEW §5). Register: R02, R08, R12 rounds.

- **Daily run 5 Nov:** (1) gxj.sz.gov.cn down from laptop and server; Wayback CDX (129 pages 2024–26) has no Shenzhen OSS award notice → ⊘/✖; (2) DeepSeek → **Shenfu e-gov XC cloud on Anolis OS 8.9 verified on the original (B)**; 政采云 = company, context; no OpenCloudOS gov user; (3) Qwen → fabricated placeholder URLs after "Salta", rejected (new rule); (4) Semantic Scholar 2/8 queries, 4 included (tools/s2_query.js). Register round 5 Nov.

- **Daily run 6 Nov:** (1) **Guangdong 2026 allocated plan verified A on the original** (gdii.gd.gov.cn answered the laptop; tzgg list crawled pages 1–40; notice 2026-02-14 + .wps amounts table archived): 开源鸿蒙适配中心 ¥10M (补改投) to 科学城(广州)数字科技集团 **+ 2 further OSS lines** (广州智算开源融合赋能中心 ¥8M to 广州数据集团; AI测试验证开源生态中心 ¥3.39M to 广州掌动智能) → cn.json +3 A summable records; **first CN summable year figure (2026 ≈ €2.6M)**; negative: the 2025 edition (电子信息 direction) has no OSS line → 2026 novelty. (2) Shenfu B→A attempt: ccgp throttles both routes; DeepSeek ×2 → **no official notice; the e-gov cloud is a China Unicom operator-model lease**; 2025-12-30 result notice: **¥6.495M/yr to Unicom Fushun (A-v), spec requires full 国产化 of OS/DB but names no brand** (zhaobiao.cn extract archived via real browser, B). Shenfu stays B. Finding: CN XC procurement specs are brand-neutral — the OS name only appears in vendor/community case studies. (3) Semantic Scholar round 3: 1/6 queries (S4), 4 more included, cumulative 15, still 0 EU–CN comparative. (4) Qwen on Shenzhen batches: Salta → no-retrieval 未找到 (D, converges with our Wayback negative). Register round 6 Nov.

- **Daily run 7 Nov:** (1) gxj.sz.gov.cn 000 from both routes, 3rd day (⊘); (2) DeepSeek → **SecretFlow: no named government deployment** (✖); verified Hangzhou 密态计算中心 (B, Ant tech, open source not stated) and Wuhan SecretFlow community station (A) as context, both archived; (3) Qwen on OpenAnolis gov cases → Salta → placeholder URL "示例失效" → rejected; rule: abandon stalled URL-seeking Qwen queries instead of Salta; (4) **arXiv added as third literature database** (tools/arxiv_query.js): 10 included, cumulative 25, 0 EU–CN comparative; S2: all 5 pending queries 429 → keyless route abandoned, needs a free S2 API key (Fabio) or OpenAlex substitutes. Morning: ZH copy-edit of catalogue and landing by Qwen + DeepSeek applied (60/64). Register round 7 Nov.

## 10. Daily progress (Fabio, 3 Nov: "every day you must move forward")
- Scheduled task `eu-china-commons-daily` (09:00 every day, Claude desktop app) resumes from this file, does 1–3 VPN-free items, runs targeted LLM questions, updates STATE, commits and pushes, and reports in Italian.
- The VPN is no longer a blocker: try local residential IP → server → Wayback/archive.today → reprints → Qwen/DeepSeek quotation (A-v) before marking an item "VPN only".

## 11. Chinese ecosystem mapping (3 Nov, Fabio's questions)
- **Projects and platforms** → docs/CN-OSS-LANDSCAPE.md: 28 ranked projects (OpenRank, stars, downloads), Gitee vs AtomGit vs GitHub. Key: OpenHarmony #1 world OpenRank 2025, Huawei #2 company; Qwen 20% of >1B model downloads; Gitee top = Java enterprise scaffolds invisible to GitHub-based rankings; 79% of contributions to China-led projects are domestic.
- **COSCon themes 2016–2025** → docs/COSCON-THEMES.md: trend community/education/hardware → AI ("Open Intelligence" 2025); 2018 "Bridging East and West".
- **Foundations** → docs/CN-FOUNDATIONS.md: OpenAtom (MIIT-supervised, ¥600M+ raised since 2020 per Xinhua, C), KAIYUANSHE (2021 income ¥604k, C), COPU, CCF ODC (lead only).
- OpenAtom filed donation income: 2022 ¥63.69M, 2023 ¥75.50M, 0 foreign (OCR of statutory reports, A). Open: 2020–21 and 2024–25 filings; KAIYUANSHE reports 2022–2025; Gitee GVP and AtomGit G-Star full lists; read the 2025 China Open Source Annual Report directly (now via press relay, B).

## 12. Public funding comparison (3 Nov, Fabio)
- Data: data/funding/{eu,cn}.json (24 EU + 21 CN records, OSS-specific only; generic innovation/tax schemes in excluded.json), coverage.json (58 jurisdictions), ECB rates; tables docs/FUNDING-COMPARISON.md (tools/build_funding.js), qualitative docs/FUNDING-MODALITIES.md.
- Key: EU summable 2023 €11.5M, 2024 €36M, 2025 €19M (DE+FR only). CN: **first summable figure 2026 ≈ €2.6M** (Guangdong allocated plan, 6 Nov; plus Shenzhen 2024 batch 2 ¥8.32M) — otherwise per-project caps (top: Wuhan ¥30M, Shanghai ¥20M, Shenzhen ¥10M) and envelopes; no central OSS budget line found.
- Next: more CN award notices (拟资助名单) for disbursed amounts (Shenzhen batches, Wuhan amounts); German figures against Bundeshaushalt; light-search states → national budgets; quote sovereignty phrases both sides; public email for the contribute notice.

## 13. Research depth (3 Nov, Fabio)
docs/RESEARCH-DEPTH.md: 0–4 scale per area × {EU centre, EU member states, CN centre, CN provinces}. Centres mostly 2–3, peripheries 1–2, nothing at 4. Update the matrix at every research step; priorities listed there feed the daily task.
- 3 Nov: private corporate money added (separate table). EU: FSFE+KDE filed corporate €0.08–0.17M/yr (summable); Eclipse total revenue €9.4M (2022) → €15.4M (2025), not split from grants, strategic members incl. IBM, Oracle, Microsoft, Google, Huawei, SAP. CN: OpenAtom donations ~€9–10M/yr, 100% domestic, Huawei 37%. Next: Eclipse Belgian NBB accounts, NLnet private share, OW2, LF Europe, company FOSS funds, EU Transparency Register.
