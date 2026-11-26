# R18 — KAIYUANSHE China Open Source Annual Report: chronicle extraction notes

Extracted 26 Nov 2026. Source: the English chapters of COSR 2023/2024/2025 (milestones, ossAI 2024/2025, embodied-intelligence 2025, web3 2025, prefaces), licensed CC BY-SA 4.0.
Companion table: `18-chronicle-claims.tsv`, 511 rows, 10 columns. Every quote is checked verbatim against the source. Three apparent mismatches turned out to be markdown bold markers or zero-width characters in the source.

**Evidence level.** The report is a community chronicle compiled by volunteers. Under METHODOLOGY §4, its claims are **C** ("reported by KAIYUANSHE") until they are traced to the primary document. Few entries cite a primary source. Document numbers are almost never given: the TSV `primary_cited` column is mostly a document *title*. COSR 2024 §2.2–2.9 (security incidents) gives no sources, and several entries look generic or doubtful (e.g. "EU supply-chain exploitation", row 147). Treat that section as **D**.

Novelty check: `rg -il` over the repo, excluding `site/`. "0" means no hit at all. "data-only" means hits only in `data/freellm/*` leads or `sources/archive`, with no doc text.

## 1. Top 15 items new to the repo

| # | Item (date) | Branch | Repo hits | Why it matters |
|---|---|---|---|---|
| 1 | **OpenAtom Model License v1.0**, launched at the OpenAtom Ecosystem Conference (Sep 2024). Drafters: CESI, Huawei, Ant, Grandall. Early adopters: CETC TaiJi, vivo | R11/R09 | 0 | OpenAtom's own AI-model licence, alongside Mulan. A counterpart for EU licence work (EUPL, AI Act open-source exemption) |
| 2 | **Mulan-Qizhi Model License (Beta)**: OpenAtom with Magnolia and OpenI (Dec 2023). Covers weights, not training code | R11 | 0 | Precursor to #1. Shows the Mulan family stretching to models |
| 3 | **Zhiyuan Open AI Model License v1**: CAICT/BAAI (May 2023). Also the **Mulan-Magnolia Open Data License 2.0** (SJTU, Aug 2023) | R09 | 0 | Chinese model and data licence family. Compare with OSAID and EU practice |
| 4 | **OfficeTen ruling**, Supreme People's Court IP Tribunal (12 Oct 2023; reported 18 Feb 2024): GPLv2 breach and copyright protection are separate questions | R03 | 0 | Top-court open-source licence jurisprudence. Pair with the French **Lasso/Orange €650k** ruling (14 Feb 2024, same chapter) |
| 5 | **DedeCMS case**, Wuxi Intermediate Court (19 Feb 2024): copyleft reach through the GPL sphinxclient. Mass litigation criticised | R03 | 0 | Second court data point |
| 6 | **SBOM Chain Initiative**: NIISDRC with 39 institutions (Sep 2024). Industry standard *SBOM Data Format Specification*, project no. **2024-1400T-SJ** (CESI, Dec 2024) | R03 / security | 0 | China's SBOM track, a direct analogue to the CRA's SBOM duty. One of the few cases where a document number is given |
| 7 | **GB 45438-2025** AIGC labelling standard (in force Sep 2025): open models without implicit labelling may face limits on commercial use | R03 / ai | 0 | A binding national standard that touches open-weight distribution |
| 8 | **Deep Synthesis Provisions** applied to open models: whoever serves users from an open model becomes a "service provider" and must file the algorithm | R03 / ai | 0 | Liability model; contrast with the AI Act's GPAI open-source exemption |
| 9 | **Global AI Governance Action Initiative**, 13 points, WAIC (Jul 2025): Global South compute, cross-border open-source communities, China–ASEAN | R05 | 0 | China's external open-source-AI diplomacy |
| 10 | **MIIT "International AI Open Source Cooperation Initiative"** (planned) and the **MOST China–ASEAN AI open-source community** (2025) | R05 | data-only (freellm leads) | Promote from LLM lead (D) to C. Find the primary text |
| 11 | **China–Russia joint statement**, 75th anniversary (May 2024): regular consultation mechanism on AI and open source | R05 | 0 | Bilateral open-source mechanism with a non-EU partner. Benchmark for any EU–China channel |
| 12 | **China–Africa Digital Cooperation Forum** (29 Jul 2024): MIIT minister Jin Zhuanglong promotes openEuler for African mobile-payment security | R05 | data-only | State-backed export of an OpenAtom project |
| 13 | **2nd Open Source Congress, Beijing, 25–26 Aug 2024**, hosted by OpenAtom. Participants: LF, **Eclipse Foundation**, OSI, OpenInfra, OIN, Rust Foundation and others | R05/R11 | lit list only (FREELLM-SWEEP) | Direct evidence of OpenAtom hosting Western foundations (see §3, conflict C1) |
| 14 | **MIIT "encouraging and exploring patent open sourcing"**, plus the **Automotive Industry Stable Growth Work Plan (2025–2026)** ("give full play to open source advantages"). Related: Deepal (Changan) open patents, OpenSDV patent pool, AUTOSEMO / Dongfeng Tianyuan OS | R03/R06 | 0 (OpenSDV data-only) | Open source written into sectoral industrial policy |
| 15 | **Public procurement of AI agents, H1 2025**: 371 awards; 305 disclosed, worth RMB 1.016bn (+128% on H1 2024's RMB 445m). Source: cosr2025/ossAI.md | R04 | 0 | Public-sector demand figure. Not open source as such: check the share built on open models |

Runners-up, all with 0 hits:
- **OpenAtom Competition** 2023: CNY 13.384m awarded, 43,400 contestants. 2024: CNY 15m pool. See conflict C2.
- **CCF-Guanghua Youth Open Source Fund** (2025).
- **ENFORCE Act** (US House FAC, 22 May 2024), export controls on AI models.
- Proposed US bill banning domestic use of DeepSeek; **OFAC sanctions** discussion (2025).
- **Linux kernel removal of Russian maintainers** (Oct 2024).
- **NDRC foreign-investment security review halting Meta–Manus** (Apr 2026, data-only).
- **AGIROS**, ISCAS's "independently controllable" ROS 2-compatible robot OS (Jun 2025, archive-only).
- **RoboChallenge**, Dexmal with Hugging Face (15 Oct 2025).
- **MIIT Talent Exchange Center "Open Source Talent Competency Requirements and Evaluation Standards"**, drafted with OpenAtom (2023/2024, data-only).
- **UN "Open Source United"** and the second UN Open Source Week (Jun 2025), where the ASF backs the UN Open Source Principles.

## 2. Every mention of Europe / the EU / European organisations

TSV row numbers are in brackets.

**COSR 2023**
- **LF Open Source Congress, Geneva** (Jul 2023). 73 organisations invited, including KAIYUANSHE and OpenAtom [65, 113].
- **EU AI Act** political agreement (Dec 2023), with an exemption for FOSS AI components [70]. **Bletchley Declaration**, signed by 28 countries plus the EU (Nov 2023) [71]. US/EU/China security and AI-compliance legislation compared [61].
- **EU Cyber Resilience Act**, linked to NIS 2, the Cybersecurity Act, the AI Act and GDPR [84].
- **Mistral AI**: Mixtral 8x7B released under Apache 2.0 [13]; USD 415m Series A [89]. **Kyutai** (Paris; Iliad/Scaleway): about €300m, all results to be open [91]. **Seldon** (UK): USD 20m [90].
- **SUSE** pledges to support RHEL-downstream distributions [63]. **Max Planck Institute for Informatics** co-developed DragGAN [31]. UK study: 27% of UK tech value-added comes from open source [58].

**COSR 2024**
- **2nd Open Source Congress, Beijing**, with the **Eclipse Foundation** and others [181].
- Preface: the US tightened chip controls while the "EU advanced open source compliance legislation" [211].
- **Lasso ruling**, Paris Court of Appeal (14 Feb 2024): Orange pays €650k [184].
- **Sovereign Tech Fund** gives €686,400 to FreeBSD [172]. **KDE e.V.** donation drive [169]. **Google** moves its Python team to Munich [170]. **Aikido** (Ghent) raises USD 17m [196]. **PREEMPT_RT** merged, announced at **Open Source Summit Europe** (Sep 2024) [115].
- §7.2 "European policies":
  - Germany: BGH DABUS ruling [246]; draft law protecting security researchers [247].
  - Switzerland: **EMBAG** source-code publication duty [248].
  - **ASF concerns about the CRA**; "open source steward"; full application in 2027 [249].
  - Russia's proposed fee on foreign software, filed under "European" [245].
- Chinese academic paper reviewing the **EU Open Source Software Strategy** (Zhang Taolue, Liu Ye) [206]. This is a lead for R02.
- **Unsourced** claim of a state-sponsored attack via the EU OSS supply chain [147] (D).
- ossAI 2024:
  - EU AI Act passed [399]; prediction of lenient early implementation [404].
  - Claude unavailable in the EU until May 2024; Meta withheld multimodal models from the EU [400]. Meta opt-out and X training stop for EU users [401].
  - UK/US/EU expanding public compute [402]. UK AISI [403].
  - Mistral USD 640m Series B [395]. Framing of NVIDIA chip dominance alongside EU regulation [383].
  - NimbRo-OP2X humanoid [ossAI §6.6; the source does not name Bonn].

**COSR 2025**
- Preface: "Europe closely binds open source with technological sovereignty". Switzerland's national model covers more than 1,000 languages (**Apertus**) [253, 359].
- **2025 European Open Source World Report**: 64% OS adoption [287].
- **CRA**, mentioned throughout:
  - ASF Tools Initiative for CRA compliance [288].
  - Communities unevenly prepared [298].
  - SBOM becomes a legal requirement [303].
  - Enterprise obligations [320].
  - Manufacturer/maintainer liability [326].
  - The EU's concise CRA guide for open-source developers [350].
- **EU Open Source Policy Summit 2025**:
  - Open source as a public good; explores an **EU-supported long-term maintenance fund** [309].
  - Large commercial users of critical infrastructure should pay for audits and maintenance [326].
  - Calls for a European open-source cloud and AI ecosystem [359].
- **European Commission "open source first" roadmap**, "70 measures", including a "**European Open Source Sovereignty Fund (EOSSF)**" and "public money, public code" [351]. Check against our EU strategy analysis (R01/R03): the report's name for the document and its fund label are unverified (C).
- **OpenHarmony × Eclipse Foundation → overseas launch of Oniro** [362] (already in the repo). **Eclipse sponsors OSCAFest, Nigeria** [366] (new).
- **VW, Mercedes-Benz, BMW, Bosch** and 11 firms build an open-source automotive stack [364]. Compare with Chinese AUTOSEMO/OpenSDV (R06).
- **EarthMind** (European universities) [359]. **University of Glasgow** EvoAgentX [267]. **Mistral** Voxtral [265] and Apache-2.0 "digital sovereignty" positioning [463]; 6.8% of downloads of models above 1B parameters [461].
- ossAI 2025:
  - **EU AI Act** broader application; GPAI transparency contrasted with China's traceability focus [487].
  - **Horizon Europe €107m for the RAISE pilot**, with EOSC and Data Labs [500].
  - **Munich Security Conference 2025**, NTI tabletop exercise on open bio-models [494].
- Embodied 2025: RoboTwin 2.0, ECCV 2024 workshop best paper [430]. RoboChallenge uses Franka arms and is co-founded by Hugging Face [432].
- web3: the UK, Germany and France rank 5th, 8th and 9th by Web3 developers [373].

## 3. Conflicts and tensions with our docs

- **C1 — OpenAtom and international cooperation.**
  - CN-FOUNDATIONS §7 finding 2 says OpenAtom's "2026 conference coverage does not mention international cooperation".
  - COSR 2024 §3.6 reports OpenAtom **hosting** the 2nd Open Source Congress in Beijing (Aug 2024) with LF, Eclipse, OSI, OpenInfra, OIN and the Rust Foundation.
  - Not a strict contradiction, because the years differ. Still, the finding should be qualified, or stated as a shift between 2024 and 2026.
- **C2 — OpenAtom Competition money.**
  - COSR 2024 says the 2023 competition "awarded" **CNY 13.384m** in prizes.
  - OpenAtom's OCR'd 2023 work report (CN-FOUNDATIONS, finances table) books the competition at income CNY 4.72m and expenditure CNY 5.62m.
  - Either most of the prizes were paid outside the foundation's accounts (co-organisers, local governments, sponsors), or the figure is a headline number. Flag it as unreconciled. Do not use 13.384m as OpenAtom spending.
- **C3 — Shenzhen cap.**
  - COSR 2024 §8: Shenzhen gives "up to 20 million yuan for major open source projects".
  - FUNDING-COMPARISON lists Shenzhen 2024, 重大开源项目, at **CNY 10m (A)**.
  - Check whether 20m is a different instrument (e.g. the AI pioneer-city measures) or an error. Our A-level text prevails until then.
- **C4 — Dating of provincial amounts.**
  - COSR 2025 §8 dates Guangdong "up to 8 million yuan" a year and Shanghai "up to 5 million yuan" to **2025**. FUNDING-COMPARISON dates both to **2026**.
  - MULTILEVEL-ANALYSIS also says the Shanghai plan (沪府办〔2025〕33号) has **no monetary amounts**, which sits uneasily with the 5m award in FUNDING-COMPARISON and in COSR.
  - Check which Shanghai text carries the 5m.
  - Wuhan East Lake 30m and Beijing E-Town 3m match or are compatible.
- **C5 — DeepSeek licence.**
  - The COSR 2025 ossAI licence table (§6.1.4) gives DeepSeek-V3 (R1) as "**DeepSeek License**".
  - DIRECTORY-CN, CN-OSS-LANDSCAPE and INDUSTRIAL-STACKS give **MIT** (A, checked on GitHub).
  - Probably a source simplification: V3 weights were first under the DeepSeek Model License, and R1 and later V3 releases under MIT. Our A-level data stands. Note the report as imprecise.
- **C6 — CHANCE / Tiangong Kaiwu foundation.** COSR 2023 calls it "China's second open source foundation" (Chongqing, Mar 2023). This is consistent with memo-2026-10-29 and initiatives.json. No conflict. The "second foundation" label is new and should be attributed (C).
- **C7 — Self-description.** COSR 2024 calls KAIYUANSHE "completely neutral nonprofit". CN-FOUNDATIONS §2 found no registered legal entity. This is a self-claim, not evidence of legal status. Keep "volunteer community".

## 4. Gaps and caveats
- Almost no national document numbers. The exceptions are the standards GB 45438-2025, 2024-1400T-SJ and GB/T 43848-2024 (1 repo hit). Policy rows need primary retrieval (R08 VPN queue for gov.cn).
- No mention of GitHub access blocking in China. GitHub appears only as a *sanctions* actor (Russia, 2023 [60]) and as a mirror host (Xiaomi Vela [138]).
- Export controls appear only as framing ("despite sanctions", "non-top-tier hardware", ENFORCE Act). The report gives no data on how they affect Chinese projects in the ASF, LF or Eclipse.
