# Industrial policy and economic-policy impacts of open source / digital commons

Working document, 2026-11-08. Data: `data/lit/industrial-policy.json` (266 items; ids EU-, CN-, MS- = EU level, China, member states). Evidence levels: **A** = original document opened; **B** = reliable secondary description; **C** = search snippet only. Of 266 items only 16 are A, 47 B, 203 C: treat every number below as "as reported" until upgraded. Items still carry `url_http` from a curl check (232 x 200; 22 x 403 bot-blocks; 9 x 404; 2 unreachable).

## Executive summary

1. **Macro value is large but model-dependent.** The 2021 Fraunhofer ISI / OpenForum Europe study for the Commission puts OSS at about EUR 65-95bn of EU GDP, with a 10% rise in contributions linked to roughly 0.4-0.6% of GDP. Evidence: A for the OFE summary page (EU-113), B for the report (EU-001). Harvard's Hoffmann-Nagle-Zhou estimate is USD 4.15bn supply side vs USD 8.8tn demand-side replacement value (EU-004, B; SSRN page blocked, not opened). The two use different methods (GDP regression vs replacement cost) and cannot be added. Critics say the replacement-cost figure rests on labour-market assumptions.
2. **Independent peer-reviewed GDP evidence exists but is thin.** Blind & Schubert's cross-country panel (EU-007 / MS-006, A for the MS version) and the BEA-style "GitHub to GDP" framework (EU-106, C) are the main academic anchors; firm-level work is mixed (ETLA finds OSS-model firms less productive, EU-122, C; Nagle on productivity, EU-005, C). Inference: no study isolates the effect of *industrial policy* on OSS outcomes; most measure usage/contribution.
3. **The EU now treats open source as a sovereignty instrument.** The 3 June 2026 Tech Sovereignty Package (COM(2026) 503) contains the first standalone EU Open Source Strategy, with an "open source first" procurement orientation and a maintenance instrument (EU-023, EU-024, EU-026, EU-029; all C/B via law-firm and NGO summaries, primary PDF not readable). Commentary is split: Bruegel (EU-019, A) reads parts of the package as protectionism; Open Future, FSFE, EDRi say it is non-binding or under-values collective governance (EU-029, EU-119).
4. **Europe is a large user and weak value-capturer.** Linux Foundation Europe (EU-015/016, A) reports only 34% of European organisations have a formal OSS strategy and that Europe captures a small share of downstream value. Funding is the recurrent gap: the EU-STF feasibility study (EU-011, A) proposes at least EUR 350m over seven years, modelled on Germany's Sovereign Tech Agency (MS-026, MS-027, MS-081).
5. **Member states diverge in practice.** Schleswig-Holstein, Denmark, Austria's army, and France's DINUM are executing exits from US office suites (MS-003 A, MS-058, MS-059, MS-021); Germany's Bundesrechnungshof and Cour des comptes audits criticise lack of coordination or dependence (MS-022, MS-009; B). Italy's framework is law/guideline-based (AgID, MS-062, MS-063). Evidence for *economic* effects at national level is mostly old (Spain 2013, UK OpenUK 2021-23: MS-066, MS-043, EU-104).
6. **China treats open source explicitly as industrial and self-reliance policy.** MERICS (CN-001, A), OSW (CN-008, B), Jamestown (CN-010/011, B) agree: state-led since the 2000s, accelerated after 2019 Huawei listing; the MIIT 14th FYP software plan (CN-054, B) targets "international-influence" communities; OpenAtom (2020) is the national foundation; xinchuang substitution is the demand-side lever. Municipal plans (Shanghai CN-047 A, Beijing CN-049 B) show the policy cascading to local level.
7. **China's AI open-weight strategy is now the most-discussed case.** USCC "Two Loops" (CN-002, A) argues open models and manufacturing reinforce each other; Stanford HAI/DigiChina (CN-004, A) stresses government support is not guaranteed. Counter-signals: some labs moving to closed models (reported in ChinaTalk via search; not verified here).
8. **Export controls and sanctions shape open source geography.** The 2019 Huawei listing episode (CN-061, B), the BIS FDPR rule (CN-062, C) and Gitee takedown/censorship episodes (CN-064/065, C) are repeatedly cited as triggers for Chinese forking and domestic hosting; EU-side the FSFE paper on export controls (EU-085, C) flags unclear treatment of publicly available code.
9. **Standards and compliance are a second industrial-policy channel.** AI Act open-source exemption (EU-079, B), CRA readiness gaps in the community (EU-082, B), and EU standardisation reform (EU-077, EU-078, C). Inference: regulatory design, not subsidy, may be the strongest EU lever on OSS.
10. **Literature gaps are large** (see last section): almost no quantified comparison of EU and China, almost no CNKI-indexed empirical papers surfaced, and most think-tank primary documents were not opened.

## 1. Economic impact

- EC/Fraunhofer ISI/OFE 2021 (EU-001, EU-002, EU-003, EU-113): GDP, SME and innovation effects; recommends a dedicated OSS industrial policy, up to 20 OSPOs, Eurostat data collection. Based on GitHub commit data across 180 countries (EU-113 summary; C for detail).
- Harvard/HBS 2024 (EU-004): replacement-cost valuation; global rather than EU. Related academic: Nagle on firm productivity (EU-005), Greenstein/Nagle "digital dark matter" (EU-006), cross-country GDP panel (EU-007, MS-006), BEA-type measurement (EU-106, EU-107).
- Geography of contributions: Wachs et al. (EU-009, B; also EU-010 on economic complexity, C unverified title).
- Industry surveys: Bitkom Open Source Monitor 2025 (EU-103 / MS-001, B), OpenUK State of Open UK 2021/2023 (EU-104, EU-105, MS-043; UK OSS GBP 46.5bn claim for 2020, C), LF Europe (EU-015).
- Firm-level and AI: ETLA (EU-122), ISR profitability (EU-123), OECD on open-weight AI and growth (EU-044 A, EU-045).
- Caveat (inference): industry-commissioned estimates (OpenUK, LF, GitHub, Canonical) should be separated from academic ones in any chapter.

## 2. Sovereignty and dependency

- EU level: Draghi report readings (EU-038, EU-039, EU-090 Letta), European Parliament ITRE "Software and Cyber Dependencies" (EU-041, B), EP report/resolution on technological sovereignty (EU-042, EU-043), JRC "Open but Not Powerless" (EU-095, B) and JRC brief (EU-118), EuroStack (EU-036, B; EU-037; EU-112), Bruegel (EU-019, A; DeepSeek brief EU-057), Clingendael (EU-018, B), Elcano (EU-021, EU-094), CEPS/ECFR/Delors: only the Delors Centre item found (EU-117).
- Public digital infrastructure and commons: Open Future series (EU-029, EU-031-035, EU-115, EU-116), CFG (EU-055), Instrat/Centrum Cyfrowe (EU-091).
- Cloud: Gaia-X critiques (EU-087, EU-088, EU-089), IPCEI cloud (EU-067, EU-068), Cloud and AI Development Act (EU-072, EU-073).
- Switzerland: BFH sovereignty study and Zurich openDesk evaluation (MS-005 A, MS-004 A).
- Dependency audits: Bundesrechnungshof (MS-022), Cour des comptes (MS-009, MS-012, MS-013), French inquiry on dependencies (MS-010), Norwegian Storting (MS-053 A).

## 3. Public procurement

- EU: OSS adoption in local governments (EU-096, B), status of OSS policies in 28 countries (EU-098, B) and progress update (EU-097, B), Commission OSS strategies 2020-23 and 2026 (EU-062, EU-063, EU-023/024), "open-source-first" cloud/AI procurement (EU-074), procurement reform proposal (EU-075, EU-076).
- Germany: Deutschland-Stack and OSS standards from 2028 (MS-031-033), ZenDiS/openDesk (MS-034), Vergabe sovereignty criteria (reported in law-firm blog, not itemised), Städtetag survey (MS-037).
- Switzerland: EMBAG Art. 9 (MS-060, MS-061). Italy: AgID guidelines on acquisition and reuse (MS-062-064). Spain: CENATIC criteria (MS-066-068). Denmark/Austria exits (MS-057-059). UK: MS-044-047. Netherlands: MS-050 A, MS-051, MS-052.
- Measuring policy: OSS indicators for digital government (MS-008 A, EU-099).

## 4. Standards, regulation, trade

- AI Act Art. 53 and open-source exemption (EU-079-081); Cyber Resilience Act readiness and stewardship (EU-082-084); JRC on OSS and standard setting (EU-008); EU standardisation debate (EU-077, EU-078); export controls (EU-085, EU-086; China side CN-061-063).
- Chips: Chips Act 2.0 proposal (EU-071, C); RISC-V in EPI/DARE (EU-069, EU-070); open hardware roadmap (EU-059, B). China RISC-V (CN-012, CN-068-071).

## 5. China's industrial policy toward open source

- Policy documents: MIIT 14th FYP software plan (CN-054, B), State Council "AI+" opinions (CN-056, B), 15th FYP recommendations (CN-058, B), 14th FYP informatisation plan translation (CN-027), industrial-internet action plan (CN-053), Shanghai (CN-047 A) and Beijing (CN-049) plans, 2026-28.
- Institutional reports: CAICT white papers 2019/2020/2022 (CN-037-040), OpenAtom 2024 report (CN-034, B), COPU/OSCHINA blue book (CN-041), NIISC reports (CN-042, CN-043), CAS Bulletin (CN-044, CN-045).
- Western analyses: MERICS (CN-001, CN-013, EU-051), OSW (CN-008), Jamestown (CN-010-012), USCC (CN-002), Stanford HAI/DigiChina (CN-004), RAND, CSET, CSIS, Carnegie, ASPI, Takshashila (CN-006, CN-007, CN-016-021, CN-029, CN-030, CN-018).
- Ecosystem: openEuler (CN-059, CN-060), Gitee (CN-066), Baidu/Alibaba/Tencent landscape (CN-033, B), project counts (CN-036).
- Chinese academic evaluation (added 9 Nov): 中国软科学 2026 runs a series on 开源创新 — Wang & Xue (Tsinghua) survey of Chinese open-source organisations on perceived policy effectiveness (CN-073, B: coordination costs lower perceived efficacy), Wen et al. on corporate OSPOs and the gaps of Chinese firms (CN-072, A), Chen & Yang theory review (CN-074, B), Liao & Zhang EU/US/CN open-source AI regulation (CN-075, A).
- Inference: the sequence is demand-side substitution (xinchuang) -> domestic foundation (OpenAtom) -> municipal funding -> AI open-weight diplomacy; no document opened here quantifies GDP or productivity effects.

- SSRN round (10 Nov, via Crossref prefix 10.2139): Boehm, policy-maker guide to open-source coordination (EU-124, C); Belli & Britto Gaspar, open source as techno-regulatory sovereignty strategy (EU-125, C); Frei & Sparzynski, OSS/OSH under the new Product Liability Directive (EU-127, C); Viseur & Jullien, measuring vendor control beyond the Open Governance Index (EU-128, C); Pearce, a Canadian national Linux distribution (EU-129, B: third-country analog of openEuler/openKylin and openDesk); García-Herrero & Weil, lessons from China's semiconductor self-reliance (EU-126, C); Cao, Shen & Tan, export controls → Chinese innovation (CN-076, C).
- **Disbursement evidence (10 Nov, data/funding):** Wuhan 2024 municipal pre-allocation ¥6.0M to open source (15.4% of the city software fund) and Donghu district ¥4.43M to deepin (both A) — the money goes to a domestic Linux distribution and its community, consistent with the substitution reading of key finding 6.

## 6. Member-state strategies (snapshot)

- **DE**: Sovereign Tech Agency, ZenDiS/openDesk, Schleswig-Holstein, Deutschland-Stack, Bundesrechnungshof, Bitkom, IW Köln (MS-002, MS-003, MS-022-041).
- **FR**: DINUM Linux move, Latombe and Bothorel reports, Cour des comptes, CNLL monitor, Montaigne, CIANum (MS-009-021, EU-114).
- **IT**: AgID, Piano triennale, PSN (MS-062-065). **ES**: CENATIC (MS-066-070). **NL**: MS-050-052. **Nordics**: DK/SE/FI/NO (MS-048, 049, 053-058). **PL/CZ/EE**: MS-072-080. **UK/CH**: MS-043-047, MS-004, MS-005, MS-060.

## 7. Gaps in the literature (and in this collection)

- No convincing causal evidence that OSS industrial policy raises productivity; no counterfactual studies of xinchuang.
- No EU-China quantitative comparison of public OSS funding or contribution intensity found.
- No CNKI-indexed empirical Chinese papers on OSS and productivity/GDP surfaced (one survey-based policy-perception study found 9 Nov: CN-073); Tsinghua/PKU/CASS output missing; CCID/CAICT primary texts not opened.
- Missing primaries: COM(2026) 503 text, Cloud and AI Development Act, Chips Act 2.0 provisions on open source, MIIT plan Chinese original, Bundesrechnungshof report.
- Think tanks with nothing found: CEPS, ECFR, IFRI, SWP, Terra Nova, Rhodium (open source specific), IISS, Atlantic Council, Paulson; ECA sovereignty audit; IMF, WIPO, World Bank OSS items (only DPI white paper).
- Baltics, Czechia, Poland, UK, Nordics thin; no Eurostat OSS-specific dataset located.

## 8. Open questions

1. How do the Fraunhofer GDP regression and the Harvard replacement-cost method reconcile, and can either be reproduced with Software Heritage data?
2. Does the EU "open source first" procurement principle bind in the final CADA/Procurement Act text, or stay non-binding?
3. What share of Chinese public IT spending is xinchuang, and how much of that is open source-based (openEuler, OpenHarmony)?
4. Will Chinese open-weight policy hold given reports of labs closing models?
5. Do export-control rules on "publicly available" code (EU and US) chill cross-bloc contribution, measurable in GitHub data?
6. Can STF-style funding (DE, proposed EU-STF) show a measurable return?
7. How do municipal exits (Schleswig-Holstein, Zurich) compare in realised costs against reported savings?
8. Which of the 203 C-level items deserve upgrade to A first (priority: COM(2026) 503, Fraunhofer PDF, CAICT 2020, MIIT 2021 plan, Bundesrechnungshof 2026, OpenAtom 2024)?
