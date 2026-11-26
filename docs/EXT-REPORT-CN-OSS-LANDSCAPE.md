# External report: "China's Open-Source Technology: Landscape and History" (Nov 2026)

*Research note, 24 Nov 2026. Branch R17 in [RESEARCH-REGISTER.md](RESEARCH-REGISTER.md). Evidence levels and labels follow [METHODOLOGY.md](METHODOLOGY.md) §4.*

## 0. What it is and how we treat it

- **The document.** *China's Open-Source Technology: Landscape and History. A report on China's digital technology value chain*, dated November 2026, 149 pages, English. The file was shared with the project as "China Technology Autonomy and Open-Source Substitution.pdf" (SHA-256 `36f38fd9…6ad`). The PDF itself names no author or institution. It is published here with the author's permission (Ian, 24 Nov 2026).
- **Scope.**
  - 7 historical periods (1994–2026) and 7 technology layers plus 2 cross-cutting themes, divided into 117 areas.
  - **504 projects**: 250 Chinese open source, 106 Chinese commercial, 112 international upstreams and 36 standards.
  - 26 named cases, 8 "dependency chains", 21 project profiles, and a funding and substitution chapter.
  - GitHub and Gitee repository data collected on **2026-11-22**.
- **Where it is.** The PDF and the extracted data are in [`data/external/cn-oss-landscape-2026-11/`](../data/external/cn-oss-landscape-2026-11/): `projects.tsv`/`.json` hold the 504 projects and `sources.tsv` the 741 links. On the site they are at [/data/](https://eu-china-commons.eu/data/).
- **Evidence level.** The report is a single secondary source, and its author is not named in the PDF, so it is level **C** ("reported by…"). It links almost every claim to a primary source, so verification is cheap. We archived 55 of its primary sources in `sources/archive/`, and we upgrade a claim to A or B only after reading the archived original.
- **Overlap with our repo.**
  - **Links:** 107 of its 741 unique links are already cited in the repo. Of the 634 new ones, 292 are not code repositories.
  - **Projects:** 93 of its 250 Chinese open-source projects are already mentioned, and **157 are new to us**; the list is in §6.

## 1. Assessment

**Strengths**
- It is the most systematic map of the *technical* layer we have seen. It puts Chinese projects, Chinese commercial products, international upstreams and standards on one map, so dependencies become visible.
- Claims are short and sourced, and cases are named systems with documents behind them, such as tenders, stock-exchange filings and CNCF/OpenInfra case studies.
- It has a transparent activity metric, the vitality index (commits 35%, contributors 25%, stars 20%, forks 10%, recency 10%; log-normalised). It also states the metric's blind spot: AtomGit- and Gitee-hosted flagships such as openEuler and OpenHarmony are excluded.
- Its tone is non-adversarial and analytic, and it consistently separates deployment evidence from activity metrics. This matches our methodology.

**Limits and points to check**
1. **Authorship not stated in the PDF.** It can be cited as grey literature once the author's full name and affiliation are added.
2. **Policy coverage is thin below the national level.**
   - It cites one Beijing measure (2026-05) and otherwise refers generically to "Beijing, Shanghai, Shenzhen and other cities".
   - Our multilevel registry (R03) is far deeper here.
   - It has **no amounts for open-source-specific public funding**. Its funding figures are for chips (the Big Fund), capital markets and corporate capex.
3. **Procurement evidence is thin.** It names two tenders (Shunyi, Fujian) and the CNITSEC list. It does not address reuse of code *between* administrations, which is our R04 focus. Its cases confirm the pattern "buy domestic products built on open-source upstreams", not "share code".
4. **Europe appears only as four short reference points:** the EC OSS strategy, Schleswig-Holstein, the Sovereign Tech Fund and the CRA.
   - It calls Eclipse Oniro "the main channel for China–Europe collaboration on open-source operating systems". That is fair for OSs, but our cooperation map (226 entries) shows a much wider set of channels.
5. **Several 2026 items need direct verification before reuse:**
   - DeepSeek-V4 / V4-Flash and its Ascend recipe;
   - SLAI T-Rex (arXiv 2607.20145);
   - Karmada graduation (CNCF, 7 Sep 2026);
   - CNITSEC Announcement No. 3 of 2026;
   - Southern Power Grid Digital 2026 interim report (>140,000 Dianhong units);
   - the Schleswig-Holstein "nearly 80%" figure, which we already hold from borncity.com and should now check on the state's own press release.
6. **Its framing is "self-reliance / substitution" (自主可控, 国产替代).** Our framing is "commons and cooperation". The facts transfer; the framing should be translated, not copied.

## 2. Findings useful to our research, by branch

> **Verification status (17.1, 26 Nov 2026).** The 70 claims of this section and §1.5 were checked against the archived primaries: **15 confirmed (A), 22 partly (20 A, 2 B), 0 contradicted outright, 33 not archived (still C).** Several "partly" verdicts change the meaning of a claim. §7 lists the corrections, which take precedence over the wording below; per-claim table in [`verification-17.1.tsv`](../data/external/cn-oss-landscape-2026-11/verification-17.1.tsv).

### R03 / A1 — National policy and industrial-policy timeline [F, level C until verified]
- **State Council Document No. 18 (2000)** was the first joint support framework for software and integrated circuits: a VAT refund above an effective 3% rate, plus income-tax and import breaks for chips. Most industrial policy of the next 20 years followed this template. *New to the repo.*
- **Hegaoji (核高基, 2006 plan, started 2008)** was national S&T major project no. 1, covering core electronic devices, high-end chips and basic software. It funded Loongson, Phytium, NeoKylin/Kylin, Dameng and Kingbase for a decade. The report's thesis: products funded this way gained large user bases only when external shocks created migration demand (Entity List 2019, CentOS end of life 2020). *We had 核高基 only in the registry; the narrative and the "funding without users" lesson are new.*
- **Procurement milestones:**
  - Windows 8 barred from central purchases (May 2014);
  - "secure and reliable" (安全可靠) pilots for Party and government bodies from 2016;
  - then Xinchuang (信创).
- **State Council General Office Document No. 34 (2025)** set common rules for identifying *domestic products* and applying *price preferences* in government procurement. The Ministry of Finance (MoF) then published procurement standards by category, including operating systems. **Not yet in the repo, and important.** How "domestic product" is defined decides whether foundation-governed open source with foreign upstreams qualifies.
- **Plans:**
  - the 14th Five-Year Plan (2021) first mentioned open source;
  - MIIT's 14th FYP for software made it a key task;
  - "AI Plus" guidance (Aug 2025);
  - the **15th FYP outline (Mar 2026)** calls for a national integrated compute network and continues the open-source line.
- **East Data, West Computing (东数西算, Feb 2022):** 8 hubs and 10 clusters, with a 2023 compute-network guidance (NDRC).

### R04 — Public-administration adoption [F, level C until verified]
- **CNITSEC security and reliability evaluation (安全可靠测评).** The published lists of passing CPUs, OSs, databases and office suites, the latest being *Announcement No. 3 of 2026*, act as the **gate for procurement**: only listed products can bid in the related projects. *A structural fact missing from our PA analysis.*
- **Named PA and public-service deployments:**
  - Shunyi District education tender: one lot for Windows licences plus **2,500 Linux client seats**, compatible with UOS and Kylin. It is a dual-platform transition.
  - Fujian Department of Commerce: about 330 one-year WPS site-licence seats.
  - Beijing Ankang Hospital: new HIS running on UOS.
  - Beijing Tongren Hospital: HIS database and storage moved to domestic hardware.
  - Dongguan TCM Hospital: OpenHarmony bedside terminals on 24 beds.
  - Dongguan Metro, Chashan station: OpenHarmony fare gates.
  - Shenzhen Metro: ticketing desktops replaced.
- **Utilities and state-owned enterprises:**
  - China Southern Power Grid's **Dianhong (电鸿)**, based on OpenHarmony and openEuler, with more than 140,000 units reported in a 2026 SZSE filing; China Resources Power has Rundianhong.
  - China Mobile Cloud runs **60 PB of block storage** on Kunpeng, BC-Linux (from openEuler) and Ceph (OpenInfra case).
  - China Unicom runs a Kubernetes platform (CNCF case).
  - China Merchants Bank runs mixed domestic and imported accelerators under Kubernetes (CNCF end-user architecture).
- **Reading [I]:** these confirm our R04 negative finding. China adopts open-source-based products through procurement and certification; it does not have code sharing between administrations. The EU pattern (reuse by law, catalogues) and the Chinese one (certified domestic stack) are complementary rather than competing. This is a useful comparative pair: Schleswig-Holstein moved straight to LibreOffice/Open-Xchange, while Chinese administrations buy WPS licences.

### R12–R15 / A1 — Funding [F + I]
- **Six funding mechanisms** (the report's typology, worth adopting with credit):
  1. research programmes and public facilities;
  2. industry-fund equity;
  3. capital markets (STAR Market, 2019);
  4. government procurement;
  5. corporate R&D and capex;
  6. foundations and communities.
- **Its main claim: "different technologies suit different money".**
  - Fabs → funds and markets.
  - Databases and middleware → corporate R&D.
  - OS and office → procurement.
  - AI → capex plus national compute planning.
- **Amounts (chips, not open source):**
  - Big Fund phase 1: about RMB 138.7 bn (2014).
  - Phase 2: about RMB 204.1 bn (2019).
  - Phase 3: RMB 344 bn registered capital (May 2024), aimed at AI chips, HBM and advanced packaging.
  - SMIC STAR IPO: about RMB 53.2 bn (2020).
  - Alibaba: at least RMB 380 bn over 3 years in cloud and AI (Feb 2025); capex of RMB 32.1, 86.0 and 126.1 bn in FY2024, FY2025 and FY2026 (20-F).
- **Maintenance gap [I].** The report presents Germany's Sovereign Tech Fund as "a useful reference for Chinese foundations and governments" because it pays for maintaining shared components rather than building national substitutes. This supports our F2 "commons bridge fund" and a joint-maintenance proposal: shared upstreams that both sides depend on, such as OpenSSH, glibc, GCC/LLVM, Ceph and OpenSSL/Tongsuo.

### R11 / A3 — Foundations and hosting
- **Foundation counts.** As of Nov 2026, the China-originated projects in the report include **27 Apache top-level projects, 8 podlings and 28 CNCF projects (6 graduated)**. The data layer alone has 23 Apache top-level projects. *A number to cross-check against our registry.*
- **Graduations and archivals:**
  - Karmada graduated from CNCF (Sep 2026), Dragonfly in 2025.
  - HugeGraph became an Apache top-level project (Jan 2026).
  - Curve (2024) and SuperEdge (2025) were **archived** by CNCF. Joining a foundation does not guarantee survival.
- **Donations to OpenAtom and CCF:**
  - Linyaps (如意玲珑) and Tongsuo (2022) went to OpenAtom.
  - TencentOS Tiny became TobudOS under OpenAtom.
  - Nightingale went to the CCF Open Source Development Committee (2022). *That is a second Chinese host besides OpenAtom.*
- **Dual-track hosting:**
  - openEuler moved Gitee → AtomGit (Dec 2025, Gitee copies archived), and OpenHarmony followed (Apr 2026).
  - Cangjie and CANN are hosted on CSDN's GitCode.
  - The report links this partly to the Linux kernel's removal of maintainers tied to Russian companies (Oct 2024), which showed that sanctions reach community governance.

### R06 / A4 — Industrial stacks and standards
- **"Bottlenecks move down the dependency chain".**
  - After LoongArch reached GCC 12, Linux 5.19 and LLVM 16, the hard part moved to packages and firmware.
  - After DeepSeek released open weights, the hard part moved to operators and serving on Ascend.
  - The deepest dependencies are fabs, lithography, EDA and high-end AI chips.
- **Upstream-first strategy [F].**
  - Loongson upstreamed rather than forking.
  - Domestic accelerators join PyTorch, vLLM and Triton as **plug-ins and back-ends**: torch_npu, torch_musa, vLLM-Ascend, FlagGems and FlagTree.
  - Alibaba merged its Blink fork back into Flink (1.9, 2019).

  *Reading [I]:* this is direct evidence for our thesis that the shared layer is cheaper to maintain together. Even the most "self-reliant" Chinese actors chose shared upstreams over parallel stacks.
- **Standards as neutral ground:**
  - SM2, SM3 and SM4 are ISO/IEC standards.
  - **RFC 8998 (2021)** adds SM to TLS 1.3, so IETF acted as an interoperability venue.
  - OpenChain ISO/IEC 5230 is being adopted by Chinese companies.
  - The OAI Public License shows how FRAND patents can coexist with open RAN code.
  - In chiplets, UCIe sits alongside the Chinese T/CESA 1248-2023 group standard.
- **Industrial:**
  - The Asset Administration Shell (Germany; Eclipse BaSyx) is cited as the digital-twin standard, with Chinese work mostly at the data layer (IoTDB).
  - Eclipse S-CORE (2024) and AGL count **SAIC** as a member.
  - OpenHarmony runs in power grids, metro systems and smart factories.
- **Open PDKs.** Only SkyWater 130, GF180 and **IHP SG13G2 (Germany)** are open, and "no Chinese process kit is publicly downloadable". *A concrete EU-side asset for education cooperation, for example with One Student One Chip (一生一芯).*

### R05 / D1 — Existing cross-participation (implicit collaboration) [F, level C]
Each item below needs a primary check before it enters `data/cooperation/eu-cn.json`:
- Inspur is a leading OpenBMC maintainer (meta-inspur) and a major OCP contributor.
- Alibaba and Tencent run SONiC at scale.
- Ant Group and Alibaba are major contributors to Kata Containers.
- Huawei and Alibaba are major contributors to Istio.
- Chinese developers are core maintainers of Gitea.
- Intel's China team started WAMR.
- VMware's China R&D centre started Harbor.
- Xiaomi is a major contributor to Apache NuttX.
- SAIC is in AGL.
- Eclipse Oniro is built on OpenHarmony.

### B3 / B4 — Security and governance
- **The Log4Shell case (Dec 2021).** An Alibaba Cloud engineer reported the flaw to Apache. MIIT then suspended part of its cooperation with Alibaba Cloud because the flaw had not been reported to domestic authorities first. The report calls this a public "gap between domestic disclosure procedures and international practice". *Key case for comparing CRA vulnerability reporting with China's 2021 vulnerability rules, B3/B4.*
- **Signing infrastructure.** Sigstore, SLSA and in-toto are being adopted, but "there is no Chinese-led project of this kind yet, and signing infrastructure largely relies on transparency logs hosted abroad". *A shared-security public good where joint work is plausible, E4.*
- **SBOMs and vulnerability data.**
  - openEuler publishes SBOMs.
  - OpenDigger/OpenRank comes from ECNU X-lab.
  - Vulnerability data comes from OSV and CVE. The report does not mention CNVD or CNNVD (a gap).
- **Ethereum client diversity** is offered as a governance model for infrastructure with several implementations. It is relevant to our "fork-ability as sovereignty" framing, B2.

## 3. Analytical frames worth adopting (credit the report)

1. **Three degrees of self-reliance.**
   - *Interface compatibility:* OceanBase's Oracle mode.
   - *Owning the implementation:* LoongArch, XiangShan.
   - *Owning operations:* China Mobile Cloud carries patches, recovery and support.

   This maps onto our manifesto's definition of sovereignty: "being able to understand, maintain, adapt and fork".
2. **Open source over a project's life:** start, migration, operation, **exit**. "The greatest long-term value of open source is the freedom to change suppliers", which is why government and finance customers value foundation governance. This is direct support for manifesto point 3, written from a Chinese-industry perspective.
3. **"Nearly every successful substitute had a first user willing to take on early risk"** (Alipay, China Mobile). It is a design principle for EU–China pilots: every cooperation pilot needs a named first user.
4. **Market route and policy route** ran separately in the 2000s, converged after 2014 and merged after the 2019 shocks. This is useful for the industrial-policy chapter (A1), alongside our multilevel analysis.
5. **External shocks speed things up but do not change direction.** Only areas with a decade of prior groundwork accelerated. This argues against expecting fast results from new EU sovereignty funds without groundwork.

## 4. What changes in our documents (proposed)
- `docs/FUNDING-CHAPTER.md` and `FUNDING-MODALITIES.md`: add the six-mechanism typology and "technology ↔ money" matching. Keep chip money clearly apart from open-source money.
- `docs/MULTILEVEL-ANALYSIS.md` and `data/initiatives.json`: add Doc. 18 (2000), Hegaoji, Doc. 34 (2025), the MoF OS procurement standard, the CNITSEC lists, AI Plus (2025) and the 15th FYP outline, once each has been read on its archived primary source.
- `docs/CN-OSS-LANDSCAPE.md`: add the 157 new projects with governance stage, and add the vitality index as a second metric beside OpenRank. The two metrics share the same blind spot (AtomGit).
- `docs/CN-FOUNDATIONS.md`: add the CCF ODC as a host, the archived CNCF projects and the AtomGit migration dates.
- `data/cooperation/eu-cn.json`: add the §2 R05 items after verification.
- Literature (R02): add the report as grey literature once its authorship is known.

## 5. Further research roadmap (branch R17 and spin-offs)

| # | Task | Why | Method | Track | Priority |
|---|---|---|---|---|---|
| 17.1 | **Verify the 40 key claims** of §2 against the 55 archived primaries; upgrade C → A/B | Use the facts publicly | Read archives (pdftotext/OCR); VPN queue for failures | all | High |
| 17.2 | **Doc. 34 (2025) and the MoF procurement standards** | Find out whether foundation-governed open source and foreign upstreams count as "domestic", and what this means for EU vendors and for joint projects | Read Doc. 34 and the MoF OS/DB standards; compare with EU procurement rules and the Interoperable Europe Act | A1, B4 | High |
| 17.3 | **CNITSEC list time series 2019–2026** | Measure how far openEuler- and OpenHarmony-based products feed procurement, which is the real channel from upstream to PA | Scrape itsec.gov.cn announcements; classify products by upstream | A1, A5 | High |
| 17.4 | **Two-way dependency table** | Evidence for mutual interdependence: Chinese projects depend on 112 international upstreams, and Europe depends on Chinese projects such as Vue/Vite, ECharts, Ant Design, TiKV, Dragonfly, Milvus, Dify and Qwen | The report's upstream list, deps.dev and SBOMs of EU public-sector software (OSOR, code.gouv.fr, opencode.de) | B1, A5 | High |
| 17.5 | **Joint-maintenance candidates** | Basis for the bridge-fund and joint-maintenance proposal | Intersect STF-funded components with upstreams Chinese distributions patch (openEuler/Anolis) | F2, D2 | Medium |
| 17.6 | **Disclosure regimes** | The Log4Shell/MIIT case set against CRA vulnerability reporting and China's 2021 vulnerability rules: what a joint maintainer may do | Legal texts plus the case | B3, B4 | Medium |
| 17.7 | **Dual-track hosting** | Barriers to cross-contribution after the AtomGit moves | Mirror lag, foreign accounts on AtomGit, contribution flows (needs an AtomGit token) | C2, E1 | Medium |
| 17.8 | **Open-source office pair** | Comparative PA case: Schleswig-Holstein (LibreOffice/ODF) vs the Xinchuang WPS/OFD route; ODF–OFD interoperability | Primary reports on both sides | A4, D3 | Medium |
| 17.9 | **Open chip education bridge** | IHP's open PDK (EU) set against One Student One Chip and XiangShan: a neutral-ground education pilot | Contact IHP / Chips JU and OSCC; check export-control limits for mature nodes | E3, B4 | Low–Med |
| 17.10 | **Industrial standards** | AAS/BaSyx vs Chinese industrial data (IoTDB); Oniro vs Dianhong/OpenHarmony industry use | Standards documents, Eclipse working groups | A4, E3 | Low–Med |
| 17.11 | **Open-source funding amounts in China** | The report has none; we have provincial data (R12) | Extend R12 with Hegaoji outputs for OS/DB and OpenAtom donations | A1 | Medium |
| 17.12 | **Author follow-up** | Permission to publish given 24 Nov. Still open: full attribution, dataset updates, aligning methods (vitality vs OpenRank), mutual review | Fabio → Ian | G | High |

## 6. Chinese open-source projects in the report not yet in our repo (157)

Hummingbird E203, Wujian 100, XuanTie C910, XuanTie C906, One Student One Chip, NEMU, XiangShan DiffTest, torch_npu, torch_musa, openUBMC, TobudOS, Huawei LiteOS, openvela, UniProton, Spark Store, Treeland, ArkUI-X, MoonBit, Wa-lang, Cangjie, TileLang, openEuler GCC, OpenArkCompiler, WasmEdge, Alibaba Dragonwell, BiSheng JDK, Rspack, Lynx, Hippy, Qwen Code, OpenSumi, CodeGeeX, CodeFuse, Xmake, hb build tool, open-source mirror sites, Mooncakes, OneDev, Apache DevLake, KubeSphere DevOps, openEuler SBOM, StratoVirt, Kuasar, Inclavare Containers, iSulad, Karmada, Sealos, KubeVela, Rainbond, OpenKruise, Koordinator, JuiceFS, CubeFS, HwameiStor, Serverless Devs, OpenFunction, Apache SkyWalking, Nightingale, Apache HertzBeat, DeepFlow, Apache Ozhera, ChaosBlade, Elkeid, secPaver, Kube-OVN, Spiderpool, OpenYurt, Baetyl, SuperEdge, PolarDB-X, PolarDB, Databend, MatrixOne, Apache Kyuubi, RisingWave, Apache Celeborn, Apache StreamPark, Alibaba Blink, Apache EventMesh, Apache InLong, Apache BifroMQ, IK Analysis, Apache SeaTunnel, Flink CDC, Apache Linkis, DataX, Apache Paimon, Apache Amoro, Apache GraphAr, Apache Gravitino, TiDB Data Migration, Apache ShenYu, Apache brpc, Apache Seata, go-zero, Higress, Spring Cloud Alibaba, CloudWeGo, PolarisMesh, GreptimeDB, Apache Kvrocks, Apache HugeGraph, openGemini, Apache GeaFlow, NebulaGraph, TuGraph, DataEase, MinerU, Data-Juicer, WuDaoCorpora, FlagGems, Jittor, LLaMA-Factory, ms-swift, Colossal-AI, OpenRLHF, MindSpeed, SLAI T-Rex, Hunyuan, vLLM-Ascend, Mooncake, Xinference, FastDeploy, LMDeploy, KTransformers, FunASR, PaddleOCR, InsightFace, PaddleDetection, FlagTree, DeepEP, FlashMLA, DeerFlow, Cherry Studio, AstrBot, FastGPT, AgentScope, MetaGPT, SiYuan, OpenHarmony for Vehicles, dora-rs, Unitree SDK, M-Robots OS, EMQX, NanoMQ, JetLinks, openEuler Embedded, GmSSL, Casdoor, Apache Casbin, MaxKey, Apache Teaclave, Occlum, Penglai, secGear, FISCO BCOS, ChainMaker.

*Matching is by name against `docs/` and `data/`, so a project we cite under another name may appear here by mistake.*

## 7. Verification of §2 against archived primaries (17.1, 26 Nov 2026)

Checked against `sources/archive/`, including the 24 Nov residential fetches. Every evidence quote in the table was matched automatically against the archived text.

| Verdict | Claims | New level |
|---|---|---|
| Confirmed | 15 | A |
| Partly | 22 | 20 A, 2 B |
| Not supported | 0 | – |
| Primary not archived | 33 | C |

**Closed from §1.5 (now A):**
- DeepSeek-V4 / V4-Flash and SLAI T-Rex on Ascend (arXiv 2607.20145, 2607.08215).
- Karmada graduation (CNCF, 7 Sep 2026).
- CNITSEC Announcement No. 3/2026 (20 Sep 2026).
- Southern Power Grid Digital interim report 2026: "14 万余套" terminals on OpenHarmony/openEuler.

The Schleswig-Holstein release is still open.

**Corrections. These replace the wording in §2:**
1. **Doc. No. 34/2025.** "Domestic product" means place of production plus component-cost share, for goods, with a 20% price deduction. Intangible assets are excluded, and the text explicitly forbids discrimination by investor nationality, so **code origin plays no role**. This matters for the EU: the rule is about manufacturing location, not about open-source provenance.
2. The **MoF operating-system procurement standard** (财库〔2023〕34号, Dec 2023) came *before* Doc. 34/2025, not after it.
3. **The CNITSEC evaluation is voluntary** ("由企业和用户自主选择使用"). It becomes binding only through category standards, for example operating systems bought by Party and government bodies at township level and above. Announcement 3/2026 lists CPUs, AI chips, printer chips, operating systems and databases, and **no office suites**.
4. **The 14th Five-Year Plan was not the first national mention of open source.** 国发〔2015〕40号 (Internet Plus, 2015) already calls for open-source communities and foundations. Use: "first five-year plan outline to name open source".
5. **Shunyi tender.** This is a WPS office-suite licence renewal for Windows and Linux desktop environments (2,500 Linux-environment clients). It is not an operating-system migration.
6. **Beijing Tongren Hospital.** The database and storage migration is confirmed (Oct 2023), but the source does not say "domestic hardware".
7. **China Merchants Bank.** The accelerators come from three domestic vendors; there is no domestic/imported mix.
8. **China Mobile Cloud 60 PB.** Kunpeng and BC-Linux/openEuler are confirmed, but the storage is "BC distributed block storage", not Ceph.
9. **RFC 8998** is an Informational RFC on the Independent Submission stream, not an IETF-consensus standard.
10. **SAIC** is a member of AGL (2019), not of Eclipse S-CORE.
11. **Dragonfly** graduated in 2026 (the cited CNCF page is dated 14 Jan 2026), not in 2025.
12. **The Beijing open-source measure** is 京经信发〔2025〕56号, dated 24 Dec 2025. May 2026 is only its republication date.
13. **Smaller items:**
    - Fujian: the notice gives RMB 56,800 and no seat count.
    - Big Fund phase 1: the MoF notice gives no amount.
    - AtomGit and GitCode were merged on 21 Nov 2025 according to OpenAtom.
    - Hegaoji rests on a secondary source (B).

**Still to fetch.** The list is in the notes kept with the table.
- *Chinese sites:* MOST 2006 Hegaoji list, the 2014 Windows 8 notice, the MIIT 14th FYP software plan, "AI+" opinions, Big Fund 2–3 registrations, Fujian tender file, Shenzhen Metro.
- *Fetchable directly:* Schleswig-Holstein, Federal Register 2019-10616, CentOS blog, GCC/Linux/LLVM release notes, CNCF Dragonfly, ASF HugeGraph, SMIC filing, Alibaba 20-F, ISO entries.
- *R05 cross-participation* (8 projects) can partly be answered from the R18 OpenDigger dump.

## Changelog
- 26 Nov 2026: 17.1 verification (§7): 15 confirmed, 22 partly, 33 not archived; 13 corrections.
- 2026-11-24: first analysis. 55 primary sources archived: 53 by direct fetch, OceanBase/Alipay through the relay. The NDRC 2023 compute-network guidance link cited by the report (`ndrc.gov.cn/xxgk/jd/jd/202312/t20231229_1363000.html`) returns **404**, including from a residential IP; it needs a replacement source. 
- 2026-11-24 (later): the author gave permission. The PDF and the extracted dataset are published in data/external/ and on the site.
