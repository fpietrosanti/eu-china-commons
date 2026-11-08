# Research depth by area and level — central vs peripheral

*3 Nov 2026. Shows how deep each research area has gone, for the EU centre (institutions), the EU periphery (27 member states), the Chinese centre (central government and national bodies) and the Chinese periphery (31 provincial-level jurisdictions and their cities). Updated at every research step; the public version carries the same "open-source research, correctable" notice as the funding tables.*

> Open-source research from public sources; incomplete and correctable. Contribute: GitHub issues or contact@eu-china-commons.eu.

## Scale
| Level | Meaning |
|---|---|
| **0** | Not started |
| **1** | Light: web search, a few sources, mostly secondary; absence of results means little |
| **2** | Partial: some primary sources read; clear gaps in coverage |
| **3** | Substantial: most jurisdictions or items searched, mainly primary sources, gaps listed |
| **4** | Systematic: every jurisdiction or item searched with a protocol, primary sources archived, cross-checked by a second model or reviewer |

Coverage = jurisdictions with at least one sourced record / total (27 member states; 31 Chinese provincial-level units).

## Matrix

| Area | EU centre | EU member states (coverage) | CN centre | CN provinces (coverage) | Main files |
|---|---|---|---|---|---|
| Policy registry (initiatives) | **3** — 13 records, 10 primary | **2** — 18 records, 13 primary; ~12 of 27 states | **3** — 15 records, 7 primary | **2** — 16 records, 11 primary; ~10 of 31 | data/initiatives.json, docs/MULTILEVEL-ANALYSIS.md |
| PA reuse of open source | **2** — Interoperable Europe, OSOR (context) | **3** — 8 verified cases (DE, FR, NL, IT, ES, …) | **1** — no central code-sharing platform (confirmed negative) | **2** — 5 deployed + Shenfu Anolis OS e-gov cloud (B, 5 Nov; also in the official OpenAnolis 2024 case collection, 8 Nov — only named gov body among its 5 gov entries; Hebei ccgp lead geo-blocked) (Fujian, Yancheng, Jinan, Shijiazhuang, Longgang) + 3 plans; ~8 of 31; e-gov cloud catalogues not swept | data/catalogue-verified.json |
| Industrial open-source stacks | **3** — 10 cases, 8 A | **1** — national stacks only where EU-level (Gaia-X, Catena-X) | **3** — 12 cases incl. OpenAtom projects | **1** — Shenzhen subsidy, Wuhan/Jiangsu; SecretFlow: no verified gov deployment (7 Nov, Hangzhou 密算中心 + Wuhan community station = context); provincial industrial parks not swept | docs/INDUSTRIAL-STACKS.md |
| Public funding — amounts | **2** — DARE, NGI (CORDIS), OpenEuroLLM, Chips JU, DC-EDIC; OSOR/EU-FOSSA not found | **1** — DE and FR only; 23 states "none found" after a light search, national budgets not read | **1** — no central open-source budget line found; MIIT 揭榜挂帅 checked; 超长期特别国债 not linked | **2** — caps/envelopes in 6 jurisdictions (Guangdong, Shanghai, Zhejiang, Hubei, Jiangsu, + Shenzhen A); 4 policy-no-amount; 21 not found; **award notices: Wuhan 2024 list (A, no amounts), Shenzhen 2024 batch 2 ¥8.32M with beneficiaries (A, 4 Nov), Guangdong 2026 allocated plan ¥21.39M over 3 OSS projects with beneficiaries (A, 6 Nov)** | data/funding/, docs/FUNDING-COMPARISON.md |
| Public funding — modalities (qualitative) | **2** | **1** | **1** | **2** | docs/FUNDING-MODALITIES.md |
| Foundations and communities | **1** — Eclipse, OSOR, OpenForum Europe as context | **1** — national foundations not mapped | **3** — OpenAtom statutory reports 2020–23 (OCR, A: income, spending, donors, gov subsidy) + licence check of 35 repos; KAIYUANSHE 2021; COPU; CCF ODC lead | **0** — provincial open-source associations not mapped | docs/CN-FOUNDATIONS.md |
| Conferences and agenda (COSCon etc.) | **0** — EU events (FOSDEM, OSS Europe) not analysed | **0** | **2** — COSCon 2016–2025 (themes verified 2018–25); OpenAtom conferences briefly | **0** — provincial events (Shanghai, Shenzhen) not analysed | docs/COSCON-THEMES.md |
| Projects and code platforms | **1** — via GitHub/OpenRank only | **0** | **2** — 28 projects ranked; Gitee/AtomGit/GitHub; GVP and G-Star lists missing | — (not applicable by province) | docs/CN-OSS-LANDSCAPE.md |
| EU–China bridges | **3** — 3 verified with sources on both sides (Eclipse–OpenAtom, Digital Dialogue, Catena-X–CAAM) | **1** — DE (Catena-X, GIZ), others not searched | **3** | **1** — Suzhou (Catena-X clearing house) | catalogue (category bridge) |
| Stakeholder map | **3** — EU institutions | **3** — all 27 covered, some blocked | **2** — central bodies, 10 need VPN/CN IP | **2** — 11 provincial bodies | data/stakeholders.json |
| Chinese original texts | — | — | **2** — VPN-free routes (Wayback, residential IP) recovered part of the queue | **2** — Shenzhen ×2 and Longhua fetched from a residential IP (4 Nov); Chongqing ×2 still blocked; probe: 164/284 cited URLs reachable without VPN | docs/CN-VPN-QUEUE.md |
| Academic literature | **1** — web and think tanks; OpenAlex first pass (4 Nov, 9 queries, 7 included, 0 comparative); Semantic Scholar partial (5–6 Nov, 3/8 queries, 8 included, rate-limited); arXiv (7 Nov, 6 queries, 10 included); OpenAlex round 5 replacing the blocked S2 queries (8 Nov, 6 included); cumulative 31 included, **1 EU–CN comparative (Liao & Zhang 2026, open-source AI regulation, 中国软科学)**; Scholar/SSRN not swept | — | **0** — CNKI not accessed | — | docs/LITERATURE-REVIEW.md |

## Reading
- **Inference:** depth is uneven in a structured way. The **centres** (EU institutions, Chinese central bodies) are mostly at 2–3; the **peripheries** (member states, provinces) are mostly at 1–2. Conclusions about "member states" or "provinces" as a whole are therefore weaker than conclusions about the centres.
- **Inference:** on funding, the EU periphery is under-researched (budgets not read) while the Chinese periphery is where the Chinese money actually is (local caps and subsidies); the comparison is lopsided until both peripheries reach level 3.
- No area is yet at level 4 (systematic + cross-checked).

## Priorities to raise depth (proposal)
1. Funding, CN provinces → 3: collect award notices (拟资助名单, 公示) for Shenzhen, Shanghai, Wuhan, Hangzhou, Guangdong.
2. Funding, EU member states → 3: read national budgets / OSPO reports for the 10 largest economies.
3. PA reuse, CN provinces → 3: sweep the 31 provincial e-gov cloud service catalogues for openEuler/OpenAnolis/OpenCloudOS.
4. Foundations, EU side → 2: map national OSS foundations/associations to balance the Chinese side.
5. Conferences, EU side → 2: FOSDEM / OSS Europe / OW2con themes per year, to compare with COSCon.
