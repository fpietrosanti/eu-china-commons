# Research register — every line of research, including inconclusive ones

*Part of the methodology (docs/METHODOLOGY.md §3.2). Started 3 Nov 2026, backfilled for work since 29 Oct 2026.*

Each line of research is a **branch** that stays open over time. An entry records what was asked, how, what worked, **what did not work**, and how to re-run it. Later updates are appended as dated rounds under the same ID, never overwritten, so the method itself can be repeated, audited and continued by anyone.

**Outcome codes:** ✔ conclusive · ◐ partial · ○ inconclusive · ✖ negative (searched, nothing found — itself a result) · ⊘ blocked (access failed).
**Depth:** 0–4 as in docs/RESEARCH-DEPTH.md.

## Index
| ID | Branch | Started | Last round | Outcome | Depth (centre / periphery) | Outputs |
|---|---|---|---|---|---|---|
| R01 | DC-EDIC Implementation Strategy analysis | 29 Oct | 29 Oct | ✔ | 3 / – | docs/REVIEW-DRAFT.md |
| R02 | Literature and novelty | 29 Oct | 30 Oct | ◐ | 1 / 0 | docs/LITERATURE-REVIEW.md, LITERATURE-AND-NOVELTY.md |
| R03 | Multi-level policy registry | 30 Oct | 2 Nov | ◐ | 3 / 2 | data/initiatives.json, MULTILEVEL-ANALYSIS.md |
| R04 | PA reuse of open source | 31 Oct | 2 Nov | ◐ | EU 3, CN 2 | data/catalogue-verified.json |
| R05 | EU–China bridges | 1 Nov | 3 Nov | ✔ | 3 / 1 | catalogue (bridge, implicit-collaboration) |
| R06 | Industrial open-source stacks | 2 Nov | 2 Nov | ◐ | 3 / 1 | docs/INDUSTRIAL-STACKS.md |
| R07 | Stakeholder map | 1 Nov | 2 Nov | ◐ | 3 / 2 | data/stakeholders.json, STAKEHOLDERS.md |
| R08 | Chinese originals without VPN | 30 Oct | 3 Nov | ◐ ⊘ | 2 / 2 | docs/CN-VPN-QUEUE.md, data/cn_vpn_needed.txt |
| R09 | Chinese OSS landscape and code platforms | 3 Nov | 3 Nov | ◐ | 2 / – | docs/CN-OSS-LANDSCAPE.md |
| R10 | COSCon themes 2016–2025 | 3 Nov | 3 Nov | ◐ | 2 / 0 | docs/COSCON-THEMES.md |
| R11 | Chinese foundations and OpenAtom finances | 3 Nov | 3 Nov | ◐ | 3 / 0 | docs/CN-FOUNDATIONS.md, sources/ocr/ |
| R12 | Public funding for open source (amounts) | 3 Nov | 3 Nov | ◐ | EU 2 / 1, CN 1 / 2 | data/funding/, FUNDING-COMPARISON.md |
| R13 | Funding modalities (qualitative) | 3 Nov | 3 Nov | ◐ | 2 / 1 | docs/FUNDING-MODALITIES.md |
| R14 | Private corporate funding (philanthropy) | 3 Nov | 3 Nov | ◐ | – | data/funding/ (private-*), FUNDING-COMPARISON.md §1a |
| R15 | Funding of major projects | 3 Nov | 3 Nov | ◐ | – | docs/PROJECT-FUNDING.md, data/project-funding.json |
| R16 | Multi-LLM iterative research (cross-cutting) | 2 Nov | 3 Nov | ◐ | – | reviews/, data/llm-runs.tsv |

---

## R04 — PA reuse of open source
- **Question:** which public administrations actually run open-source software (not plans), EU vs CN, open source only (HarmonyOS excluded, Fabio 2 Nov)?
- **Rounds:** R1–R3 (31 Oct–1 Nov, web + agents), R4–R6 (2 Nov, Qwen/DeepSeek leads + server verification).
- **Method:** official procurement notices, e-gov cloud catalogues, price lists, final accounts; leads from Chinese LLMs verified with curl + pdftotext + OCR on the server.
- **Worked:** e-gov cloud service catalogues and procurement specs (Fujian, Yancheng, Jinan, Shijiazhuang) — the pattern "openEuler as OS option / requirement" is the productive search key.
- **Did not work / negative:**
  - ✖ No Chinese government code-sharing platform (confirmed by DeepSeek and Qwen independently).
  - ○ Hulunbuir e-gov cloud contract: Qwen quoted "华为欧拉"; OCR of 34 pages found only Kylin/UOS → claim rejected.
  - ○ Xuancheng lead: not checkable.
  - ◐ Changde: only security services supporting openEuler guests → context, not counted.
  - Not yet checked: Shanghai Fengxian, Pingli county, OpenHarmony water-monitoring terminals (Qwen round 6).
- **Re-run recipe:** for each of the 31 provinces search `"政务云" "服务目录" openEuler OR 欧拉 OR 龙蜥 OR OpenCloudOS site:gov.cn`, plus `采购需求 "操作系统" openEuler`; verify on the PDF; record negatives here.

## R05 — EU–China bridges
- **Question:** cooperation with official sources on both sides naming each other.
- **Worked:** Eclipse–OpenAtom (Oniro); EU–China High-Level Digital Dialogue (channel; open source not on the agenda); Catena-X ↔ CAAM/VDA/CAICT (ChatGPT for EU side, DeepSeek for CN side; CAAM pages + Jiangsu Data Bureau).
- **Did not work:** ✖ CORDIS 101137971 (ChatGPT marked it as a bridge; it is a decarbonisation project). ◐ EPL-2.0 Chinese translation: OpenAtom page found, no Eclipse-side source. Borderline: OpenChain ISO 18974 (international standard, not a bilateral bridge).
- **Lesson:** LLM "verified" flags are unreliable; require one official page per side.
- **Re-run recipe:** for each EU flagship (Eclipse, Gaia-X, Catena-X, OpenInfra Europe, OW2) search its newsroom for China/Chinese partners and the Chinese partner's site for the EU name.

## R08 — Chinese originals without VPN
- **Routes tried, in order, with results (3 Nov):** server (Paris datacenter IP): many .gov.cn time out or 403. Local residential IP (Italy): some work (Jiangsu Data Bureau 200 where server got 403). Wayback Machine: worked for the Shenzhen gazette (`id_` + `--compressed` required, gzip otherwise). archive.today: not yet tried.
- ⊘ Still blocked: cq.gov.cn ×2 (Chongqing), lg.gov.cn (Longgang), szlhq.gov.cn (Longhua) — no Wayback copy.
- **Lesson:** "needs VPN" is a last resort; always try residential IP → server → Wayback → reprints → LLM quotation (A-v).

## R09 — Chinese OSS landscape
- **Method:** GitHub/Gitee/OpenDigger APIs (measured, A), China Open Source Annual Report 2025 via press relay (B).
- **Gaps / inconclusive:** Gitee GVP full list, AtomGit G-Star list, CAICT and OSCHINA reports not fetched; platform user counts are self-reported (C) and not comparable with GitHub active developers.

## R10 — COSCon themes
- **Worked:** themes 2018–2025 verified (2018 from kaiyuanshe.github.io Activity archive).
- **Inconclusive:** 2016, 2017 themes only from Qwen (D); full track lists missing most years; 2020 city, 2023 dates to confirm.
- **Re-run recipe:** kaiyuanshe.github.io/categories/Activity pages + Wayback of kaiyuanshe.cn; one entry per new edition each December.

## R11 — Chinese foundations, OpenAtom
- **Worked:** OpenAtom statutory annual work reports 2020–2023 from its disclosure page → scanned PDFs → OCR (pdftoppm -r 200 + tesseract chi_sim+eng on the server) → income, spending, donors, government subsidy (¥20.7M in 2023).
- **Did not work:** ⊘ Ministry of Civil Affairs registries (chinanpo, 慈善中国) are JS-only, unreachable from our hosts. ✖ 2024–2025 reports not published. ○ Xinhua "¥600M+ since 2020" cannot be reconciled with filed ¥270M (2020–23) → kept as C. Licence check: 35 repos OSI-approved, ~15 unchecked (incl. AI models).
- **Caveat:** OCR figures must be re-read on page images before publication.

## R12 — Public funding (amounts)
- **Rules adopted during the branch (Fabio, 3 Nov):** open-source-specific instruments only; generic innovation/R&D tax credits excluded and logged in data/funding/excluded.json; adoption subsidies and grants in scope; EUR at ECB annual average.
- **Worked:** EU programme envelopes (CORDIS), German STF budgets (press, B), Chinese local caps (Shenzhen A via Wayback, Hangzhou, Guangdong).
- **Negative / inconclusive:** ✖ no central Chinese open-source budget line (MIIT 揭榜挂帅 2026 batch: no OSS topic; 超长期特别国债 not linked to 开源鸿蒙); ✖ 23 EU member states "none found" after light search only; ○ no Chinese disbursements (award notices 拟资助名单 not collected); OSOR, EU-FOSSA, IPCEI-CIS public share not found.
- **Re-run recipe:** yearly, after budgets are adopted: Bundeshaushalt Einzelplan 09 (STF), CORDIS API for NGI/OSS calls, Chinese award notices per city.

## R14 — Private corporate funding
- **Worked:** FSFE, KDE e.V. (filed corporate lines), Eclipse annual reports (total revenue only), OpenAtom donations.
- **Inconclusive:** Eclipse revenue not split between member fees and public grants; NLnet private share; OW2, LF Europe, company FOSS funds not quantified; EU Transparency Register not yet consulted.

## R16 — Multi-LLM iterative research (cross-cutting)
- **Setup:** ChatGPT Plus, DeepSeek free, Qwen free, via the user's logged-in Chrome; no API. Runs in reviews/ + data/llm-runs.tsv.
- **Observed behaviour:** Qwen best on .gov.cn documents but misquoted once (Hulunbuir); DeepSeek loses web search on follow-up turns (open a new chat per question); ChatGPT "verified" flags unreliable; ChatGPT home page swallowed input twice (send from an existing chat or via JS on the composer).
- **Operational lessons:** strip query strings before reading output; keep waits ≤ 40 s; ask for compact lists (output read in ~1k-character slices).

*(R01–R03, R06, R07, R13, R15: see their output files; entries to be expanded at the next round of each branch.)*

## R15 — Funding of major projects
- **Round 1 (3 Nov):** 34 projects (18 CN-origin, 16 EU). Method: project/foundation reports, Open Collective, STF and CORDIS records, OpenDigger (Doris only).
- **Worked:** STF per-project grants, Open Collective totals, commercial models.
- **Inconclusive:** employer shares of top contributors mostly inferred (B/C); SCS federal grant (~€15M), GnuPG STF amount, Matrix.org accounts to confirm.
- **Incident:** an agent ran a stale scratch script that overwrote data/initiatives.json and data/new_source_urls.txt; both restored from git, verified identical to HEAD. Lesson: agents must not run scripts found in the scratchpad.
- **Re-run recipe:** OpenDigger developer/affiliation endpoints per repo; Open Collective API; STF "Technologies" page; foundation annual reports.

## Chapter closures
- **Funding (R12–R15) → docs/FUNDING-CHAPTER.md v1.0, 3 Nov 2026.**

## Round 3 Nov 2026 (evening) — free-tier harvest, Qwen + DeepSeek (Fabio: "keep them working until the free tier ends")
- **R12:** first Chinese award-stage records (D, verification blocked): Shenzhen 2024 batch 2 重大开源项目 拟资助 4 projects **¥8.32M** (gxj.sz.gov.cn ⊘ TLS); Hangzhou Xihu AI-open-source-community compute voucher to 通义云启 **¥26.85M** (WeChat relay only); Guangdong 2026 OpenHarmony adaptation centre ¥10M to 科学城（广州）数字科技集团 (relay mziit.com fetched, B pending table check). ✖ Wuhan East Lake; ✖ Shanghai AI open-source award list not public; ✖ Shenzhen 2025–26 results not yet published. New instrument type to model: **OSS-community compute vouchers** (R13).
- **R11:** ✖ OpenAtom 2024–25 financials still unpublished; 2026 new platinum/gold donors listed (D).
- **R09:** Gitee GVP 466+, AtomGit G-Star 1,111 joined / 577 graduated (C, self-reported).
- **R10:** COSCon 2016 slogan conflict (DeepSeek "天下开源是一家、社区携手迸火花" vs Qwen "源力觉醒") → both D; 2017 Shanghai SJTU 18–19 Nov; annual report URLs 2022–25 collected.
- **R04:** ✖ OpenHarmony water terminals (Qwen withdrew its lead); Fengxian tender verified on PDF but openEuler only in antivirus compatibility → context; Pingli: compatibility clause → context. Lesson added: compatibility ≠ adoption.
- **R16:** Qwen search stalls → "Salta" after ~60 s forces an answer. Neither free tier hit a limit in 10 prompts; harvest continues in the daily task.
- **R12 (cont.):** ✔ **Wuhan 2024 excellent open-source projects and communities** — first Chinese award-stage list verified on the original (A, archived): 10 projects + 1 community, amounts not published. Beijing city caps ¥2M/¥1M (guide). Jiangsu, Zhejiang, Chengdu ✖ no lists.
- **R08 (VPN queue):** docs/CN-VPN-QUEUE.md now lists 31 queued items + all 288 distinct Chinese URLs cited in the repo; **tools/vpn_fetch.sh --vpn-on** makes a local copy (with attachments 公示表/PDF/XLS, SHA-256) into sources/archive-vpn/. Incident: an unescaped backtick in vpn_queue.sh executed vpn_fetch.sh without VPN; stopped, output deleted, script now refuses to run without `--vpn-on`.
