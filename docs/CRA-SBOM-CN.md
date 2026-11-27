# SBOM rules compared: the EU Cyber Resilience Act and China's SBOM standards

The EU makes the software bill of materials (SBOM) a legal duty from December 2027; China has published two recommended SBOM standards in 2026 and runs a state-backed SBOM platform. This note compares the Cyber Resilience Act with GB/T 47020-2026, SJ/T 12097-2026 and the NIISDRC community standard, clause by clause, and identifies where a common format and mutual recognition are possible.

*EU–China Digital Commons Observatory, ad-hoc comparative note. Research cut-off: 27 November 2026.*
*Evidence labels follow docs/METHODOLOGY.md §4: **A** = primary official text read in the original language; **A-v** = primary text via relay; **B** = reliable secondary; **C** = single secondary or self-reported; **D** = unverified (never stated as fact). Each statement is marked FACT or INFERENCE. Sources are listed in [`data/external/research-2026-11/sbom-sources.tsv`](../data/external/research-2026-11/sbom-sources.tsv) with verbatim quotes checked by script; archived copies are in [`sources/archive/`](../sources/archive/) (method `research-agent`).*

---

## Summary

- FACT (A): The EU requires an SBOM by law. Under Regulation (EU) 2024/2847 (the Cyber Resilience Act, CRA), every manufacturer of a product with digital elements must draw up an SBOM "in a commonly used and machine-readable format covering at the very least the top-level dependencies". The obligation applies from 11 December 2027.
- FACT (A): By November 2026 China has three SBOM texts at three levels. None of them is mandatory:
  - **GB/T 47020-2026** *Cybersecurity technology — Data format of software bill of materials*, a recommended national standard from TC260. It was published on 28 January 2026 and took effect on 1 August 2026.
  - **SJ/T 12097-2026** *Information technology — Software bill of materials data format specification*, a recommended MIIT electronics-industry standard. It was published on 11 March 2026 and took effect on 1 June 2026.
  - A **community/group-standard draft** from NIISDRC, 《软件物料清单构成和要求》 (*Composition and Requirements for SBOM*). It defines its own JSON format, "DP-SBOM 1.0".
- FACT (A): The EU texts treat the SBOM as a security artefact. The CRA does not mention licences in its SBOM provisions. The Chinese texts make licence information a required field, so they combine security with open-source licence compliance.
- FACT (A): The CRA SBOM is not public by default. It sits in the technical documentation and goes to a market surveillance authority on a reasoned request. GB/T 47020 instead names suppliers, acquirers and **regulators** as users. It also expects an "SBOM sharing platform". In parallel, a state-backed "open-source community SBOM platform" project exists, run by NIISDRC under MIIT.
- INFERENCE: The two systems can interoperate at the level of identifiers and data fields. Both use PURL, and the NIISDRC draft maps its fields to SPDX 2.2 and CycloneDX 1.6. However, no Chinese text we read cites ISO/IEC 5962:2021 (SPDX) as a normative reference. China has chosen national formats rather than adopting SPDX or CycloneDX.

---

## 1. The EU side: what the CRA requires

### 1.1 Definition and core obligation

FACT (A): Article 3(39) defines an SBOM as "a formal record containing details and supply chain relationships of components included in the software elements of a product with digital elements".

FACT (A): Annex I, Part II, point (1) requires manufacturers to "identify and document vulnerabilities and components contained in products with digital elements, including by drawing up a software bill of materials in a commonly used and machine-readable format covering at the very least the top-level dependencies of the products".

FACT (A): The SBOM duty sits in Part II of Annex I, "Vulnerability handling requirements". In other words, the CRA treats the SBOM as a tool for vulnerability handling. Recital 77 says an SBOM "helps manufacturers and users to track known newly emerged vulnerabilities and cybersecurity risks".

### 1.2 Format and elements: a power not yet used

FACT (A): Article 13(24) states: "The Commission may, by means of implementing acts taking into account European or international standards and best practices, specify the format and elements of the software bill of materials referred to in Part II, point (1), of Annex I."

FACT (A): As of 27 November 2026, the Commission has adopted no such implementing act:
- The Commission's CRA implementation roadmap lists acts and deliverables up to 11 December 2027. None of them concerns the SBOM.
- The Commission guidance on applying the CRA, C/2026/6013 (OJ C, 17 November 2026), does not contain the terms "SBOM" or "software bill of materials" (full-text search of the OJ text).

FACT (A): The CRA itself names no format. "Commonly used and machine-readable" is the only test.

### 1.3 Who sees the SBOM

- FACT (A): Recital 77 says manufacturers "should not be obliged to make the SBOM public".
- FACT (A): Annex VII point 2(b) makes the SBOM part of the technical documentation. Annex VII point 8 provides that it is supplied "further to a reasoned request from a market surveillance authority provided that it is necessary in order for that authority to be able to check compliance".
- FACT (A): Annex II point 9 covers information for users. If the manufacturer decides to make the SBOM available to the user, it must say where the SBOM can be accessed.
- FACT (A): Article 13(25) lets ADCO, the CRA administrative cooperation group of market surveillance authorities, run a Union-wide dependency assessment, "in particular on components qualifying as free and open-source software". Recital 22 states that "in order to protect the confidentiality of SBOMs", authorities should pass dependency information to ADCO "in an anonymised and aggregated manner".

### 1.4 Third-party components and open source

- FACT (A): Article 13(5) requires due diligence on third-party components, "including when integrating components of free and open-source software that have not been made available on the market in the course of a commercial activity".
- FACT (A): Article 13(6) covers vulnerabilities found in components. Manufacturers must report them to "the person or entity manufacturing or maintaining the component". Where they have developed a fix, they must share it with that person or entity.
- FACT (A): Recital 18 excludes non-monetised FOSS from the CRA's scope. It says "the provision of products with digital elements qualifying as free and open-source software that are not monetised by their manufacturers should not be considered to be a commercial activity".
- FACT (A): Article 24 sets a lighter regime for "open-source software stewards" (defined in Art. 3(14)). Stewards must keep a documented cybersecurity policy, cooperate with market surveillance authorities, and meet Article 14 reporting obligations to the extent that they are involved in development. Article 24 does not contain an SBOM obligation. Article 64(10)(b) exempts stewards from administrative fines.

### 1.5 Enforcement and timeline

- FACT (A): Article 64(2) sets fines for breaching Annex I or Articles 13 and 14 of up to EUR 15 000 000 or 2.5 % of worldwide annual turnover, whichever is higher.
- FACT (A): Article 71(2) sets the dates. The CRA applies from 11 December 2027. Article 14 reporting applies from 11 September 2026. Chapter IV (notification of conformity assessment bodies) applies from 11 June 2026.
- FACT (A): Article 14 requires an early warning within 24 hours of becoming aware of an actively exploited vulnerability. A vulnerability notification must follow within 72 hours. Both go to the CSIRT designated as coordinator and to ENISA, via the single reporting platform.

### 1.6 Standardisation (M/606) and technical guidance

- FACT (A): The Commission's standardisation request is Implementing Decision C(2025)618 of 3 February 2025 (M/606). It was amended by C(2026)7861 of 10 November 2026. The amended Annex I sets 30 November 2026 as the deadline for item 15, "European standard(s) on vulnerability handling for products with digital elements".
- FACT (B): FprEN 40000-1-3 *Vulnerability Handling* is drafted in CEN/CLC/JTC 13/WG 9. Its abstract repeats the Annex I wording on SBOMs and top-level dependencies. The iTeh catalogue, which mirrors CEN data, lists stage 50.20 (formal vote) from 19 November 2026 and a projected publication date of 10 February 2027.
- FACT (B): No CRA harmonised standard has yet been cited in the Official Journal. Without OJ citation there is no presumption of conformity. This rests on secondary trackers; we did not check the OJ directly.
- FACT (A): Germany's BSI TR-03183-2 v2.1.0 (20 August 2025) goes beyond the CRA minimum:
  - It requires JSON or XML in "CycloneDX, version 1.6 or higher" or "SPDX, version 3.0.1 or higher".
  - It requires "recursive dependency resolution" down to the first component outside the scope of delivery.
  - It makes "distribution licences" a required component field.
  - It states that "an SBOM MUST NOT contain vulnerability information".
- FACT (A): ENISA published the *SBOM Adoption State of Play 2026* (June 2026) and a *Technical Advisory for Software Bill of Materials* (October 2026). In the survey, 44 % of respondents used CycloneDX and 29 % used SPDX. The Advisory notes that SPDX 2.2.1 is ISO/IEC 5962:2021 and that CycloneDX is ECMA-424.

### 1.7 International soft law: who signed

- FACT (A): *A Shared Vision of SBOM for Cybersecurity* was published on 3 September 2025, authored by CISA with NSA and other partners.
  - Agencies from **seven EU Member States** are listed: Czechia (NÚKIB), France (ANSSI), Germany (BSI), Italy (ACN), the Netherlands (NCSC-NL), Poland (NASK) and Slovakia (NBÚ).
  - The other partners are from Australia, Canada, India, Japan (METI, NCO), New Zealand, Singapore and South Korea (NIS/NCSC, KISA).
  - No Chinese agency and no EU body is a signatory. A footnote records that the Commission's DG CONNECT "contributed to the drafting" and that the document "does not bind the European Commission".
- FACT (A): The *2026 Minimum Elements for a Software Bill of Materials* (29 July 2026) has a similar co-author list (CISA, NSA, FBI and others). It contains no Chinese agency, and the same DG CONNECT footnote appears.
  - It sets a deeper expectation than the CRA: "An SBOM should include information for all components ... including transitive dependencies. There is no minimum depth."
  - It reports that the G7 partners and the EU released *Software Bill of Materials for AI – Minimum Elements* in May 2026. We did not read that document.

---

## 2. The Chinese side: standards, platforms and rules

### 2.1 National standard GB/T 47020-2026 (TC260)

- FACT (A): GB/T 47020-2026 is titled 网络安全技术 软件物料清单数据格式 / *Cybersecurity technology — Data format of software bill of materials*.
  - It is a **recommended** (推荐性) national standard under TC260.
  - Its plan number was 20243686-T-469, issued on 31 December 2024.
  - It was published on 28 January 2026 and took effect on 1 August 2026.
  - The 37 drafting units include the Ministry of Water Resources Information Centre, CAS IIE, CAICT, CESI, CNCERT, Huawei, Alibaba Cloud, Ant Group, JD, ZTE, Kylin Software, Qi An Xin and Changan Automobile.
- FACT (A): The project description on std.samr.gov.cn reflects the project stage, not the final text. It lists these data blocks: software, inventory, component, file, code snippet, dependency, service, interface, **patch**, development-environment and runtime-environment information. It states that the standard "适用于指导软件供应链供方、需方和监管方之间进行软件组件信息的生成、共享和使用，软件物料清单共享平台的建设和运营可参考使用". In English: it guides generation, sharing and use between supply-chain suppliers, acquirers **and regulators**, and SBOM sharing platforms may use it as a reference.
- FACT (A-v): TC260 consulted on the draft from 16 May to 15 July 2024. The TC260 notice is relayed by secrss.com. The original attachment links on tc260.org.cn are no longer live.
- Not verified: We could not read the final text, because the openstd preview was not accessible. We therefore do not know whether GB/T 47020 maps to SPDX or CycloneDX, cites ISO/IEC 5962, or sets a required dependency depth.

### 2.2 Industry standard SJ/T 12097-2026 (MIIT, TC28)

- FACT (A): SJ/T 12097-2026 is titled 信息技术 软件物料清单数据格式规范 / *IT — SBOM data format specification*.
  - It is a recommended electronics-industry (SJ) standard under MIIT.
  - It was published on 11 March 2026 and took effect on 1 June 2026, with filing no. 107733-2026 (filing announcement 2026 No. 8).
- FACT (A): The project number is 2024-1400T-SJ, in MIIT's *2024 fifth batch of industry-standard projects* (dated November 2024). The technical committee is TC28, the National IT Standardisation TC.
  - The lead drafter is CESI. NIISDRC is second. Other drafters include Peking University, the **OpenAtom Open Source Foundation**, Ant, Baidu, Inspur, Alibaba Cloud, Huawei Cloud, ZTE, CSTC, ISCAS and the OpenSDV automotive open-source alliance.
  - *Correction to our lead:* December 2024 was when the **project** was approved, not when the standard was approved.
- FACT (C, drafter's corporate blog, 中电金信, 6 July 2026): the blog describes the content:
  - The standard requires JSON, XML or YAML in UTF-8.
  - It sets requirements at two tiers: modules graded 应/宜/可 (shall/should/may) and fields graded mandatory or optional.
  - It uses **PURL** as the component identifier.
  - Hash fields support **SM3** alongside SHA-256.
  - It adds "AI Function" and "AI Generated Snippet" fields.
  - The blog presents the standard as an alternative to SPDX/CycloneDX "符合我国产业发展实际与法律法规要求".
  - It reports two companion industry-standard projects nearing approval: 2025-1697T-SJ (implementation guide) and 2025-1696T-SJ (tool capability requirements).
- FACT (A): The same MIIT 2024 plan also contains 2024-1395T-SJ 工业软件 部件和物料清单 (industrial software, components and BOM). Its status is not checked.

### 2.3 NIISDRC: SBOM Standards Community, "SBOM Chain Initiative", national platform project

- FACT (A): On 24 October 2024, NIISDRC (国家工业信息安全发展研究中心) released 《软件物料清单构成和要求》 as an "SBOM 标准社区版", a community edition. The exact title uses 和, not 及.
  - NIISDRC says that in September 2024 it built the "SBOM标准社区" (SBOM Standards Community) with **39** research institutes and companies, including Huawei and ISCAS.
  - It also launched the "SBOM筑链计划" (SBOM Chain Initiative).
  - Both are based on the national special project "开源社区软件物料清单（SBOM）平台" (open-source community SBOM platform).
- FACT (A): The community site sbom.openatom.tech is operated under the OpenAtom Foundation. It says the community relies on the MIIT special project of that name.
  - The project repository's README says the MIIT "high-quality special project" was assigned in **2023** to NIISDRC and eleven partners, including CESI, Huawei, Nanjing University, Peking University, China Construction Bank and China Mobile IT.
- FACT (A): The repository is atomgit.com/sbomopensource/SBOMFormatAndRequirements, last commit 23 April 2025. Its Word file labelled 发布版 has a **group-standard cover**: "团体标准 CQAE*****—2024", "中国电子质量管理协会 发布" (China Electronic Quality Management Association; English name not verified), "（送审稿）".
  - The standard number is left blank.
  - We found no published T/CQAE number. We could not search ttbz.org.cn, because it is behind a CAPTCHA and we did not try to pass it.
  - The status as a group standard is therefore **not verified**.
- FACT (A): The content of the NIISDRC text, as published in the repository:
  - "SBOM的所有数据应基于JSON格式构建" (all SBOM data shall be JSON).
  - It defines its own format identifier, "DP-SBOM-1.0".
  - Mandatory component fields: author, supplier, name, version, **hash**, **PURL** identifier, **licence**, timestamp and dependencies.
  - Optional fields include vulnerability records, patches, security configuration advice, security test results, copyright and file/snippet data.
  - Tool depth has four levels: basic, medium (direct and indirect dependencies), detailed and dynamic.
  - For foundational software (OS, databases, middleware), the SBOM shall "at least list all **directly dependent** components".
  - Delivery shall be encrypted and access-controlled. Documents shall be digitally signed.
  - Tools shall "兼容主流的SBOM格式，如SPDX、CycloneDX". Informative Annex B compares DP-SBOM with SPDX 2.2 and CycloneDX 1.6 field by field.
  - The only normative reference is GB/T 7408.1-2023 (date/time format). **ISO/IEC 5962 is not cited.**
- FACT (A): The community site also hosts "spdx-CN", described as a Chinese translation of SPDX 3.0.1 by the 源译识 translation project together with the **openEuler** project.

### 2.4 Related standards (context)

- FACT (A): **GB/T 43848-2024** 网络安全技术 软件产品开源代码安全评价方法 is a recommended TC260 standard, published 25 April 2024 and in force from 1 November 2024. The KAIYUANSHE lead attributes it to CAICT; the drafting units were not retrieved (samr rate-limited).
- FACT (A): **GB/T 44272-2024** 信息技术 开源 开源许可证框架 is a recommended TC28 standard, published 23 August 2024 and in force from 1 March 2025. Its drafters are led by Peking University, followed by CESI, ISCAS and the OpenAtom Foundation. The lead's "CESI" attribution is therefore partial.
- FACT (A): **GB/T 43698-2024** 网络安全技术 软件供应链安全要求 is a recommended TC260 standard, published 25 April 2024 and in force from 1 November 2024. Whether it requires an SBOM is **not verified**, because we did not read the text.
- FACT (A): **GB 45438-2025** is **not** an SBOM standard. It is the **mandatory** national standard 网络安全技术 人工智能生成合成内容标识方法 (labelling of AI-generated synthetic content), under the CAC and executed by TC260. It was published 28 February 2025 and took effect on 1 September 2025.
- FACT (A): std.samr.gov.cn lists as "related standards" YD/T 7154—2026 交换机和路由器软件物料信息描述要求 (software-material description for switches and routers, telecom industry) and two guidance-document plans: 20263049-Z-469 人工智能物料清单数据格式规范 (AI BOM data format) and 20263051-Z-469 人工智能物料清单实施指南 (AI BOM implementation guide). We did not check their content.
- FACT (C): T/CCSA 569-2024 软件物料清单总体能力要求 is a CCSA group standard on overall SBOM capability. It was reported published on 12 November 2024 and in force from 1 January 2025, according to a standards-download forum only.
- FACT (C): DSDX (Digital Supply-chain Data Exchange) is described as a "China's first" SBOM format. It was led by the OpenSCA community in August 2023, according to a single blog post.

### 2.5 Binding rules: vulnerabilities, not SBOMs

- FACT (A): The 《网络产品安全漏洞管理规定》 (MIIT, CAC and MPS, 工信部联网安〔2021〕66号, in force from 1 September 2021) binds network-product providers. Article 7 requires them to:
  - "立即通知" (immediately notify) upstream component providers of vulnerabilities in their components;
  - report the vulnerability to the MIIT cyber-threat and vulnerability information sharing platform "在2日内" (within 2 days).
- FACT (A): Article 9(7) forbids providing undisclosed vulnerability information "向网络产品提供者之外的境外组织或者个人" (to overseas organisations or individuals other than the product provider).
- Not found (D): We found no MIIT or CAC regulation that makes an SBOM mandatory. One industry website claims that a 2026 CAC/MIIT 《关键信息基础设施软件供应链安全管理实施细则》 requires SBOMs for critical-information-infrastructure procurement. We found no official text, so the claim is **not** stated as fact here.

---

## 3. Comparison table

| Dimension | EU – CRA (Reg. 2024/2847) | China – GB/T 47020-2026 / SJ/T 12097-2026 / NIISDRC draft |
|---|---|---|
| **Legal nature** | Binding regulation, directly applicable (Art. 71) — A | Recommended national (GB/T) and industry (SJ/T) standards; NIISDRC text is a community/group draft — A. No binding SBOM rule found — D for claimed 2026 CII rule |
| **Scope** | All "products with digital elements" placed on the EU market; non-monetised FOSS out of scope (Rec. 18) — A | Software supply chain generally (suppliers, acquirers, regulators) — A (GB/T project text); software life-cycle incl. procurement and O&M — A (NIISDRC) |
| **Required depth** | "At the very least the top-level dependencies" (Annex I II(1)) — A | GB/T 47020: not verified. NIISDRC: foundational software at least all direct dependencies; four tool depth levels — A. SJ/T 12097: not verified |
| **Format** | Any "commonly used and machine-readable" format; Commission may specify (Art. 13(24)), not done — A. In practice CycloneDX/SPDX (BSI TR: CDX ≥1.6, SPDX ≥3.0.1) — A | National formats. NIISDRC: JSON-only "DP-SBOM 1.0" — A. SJ/T 12097: JSON/XML/YAML — C. GB/T 47020: own data model — A (project text) |
| **Reference to ISO/IEC 5962 (SPDX)** | Not in the Regulation; cited by ENISA advisory and CISA Min. Elements — A | Not cited in NIISDRC normative references — A; GB/T 47020 and SJ/T 12097: not verified |
| **Mapping to SPDX/CycloneDX** | n/a (these are the de facto formats) | NIISDRC Annex B: field comparison with SPDX 2.2 / CycloneDX 1.6 — A. SJ/T uses PURL for "interoperability with global ecosystems" — C |
| **Core data fields** | Not specified in law; BSI: creator, timestamp, component creator, name, version, filename, dependencies, distribution licences, hash — A | NIISDRC mandatory: author, supplier, name, version, hash, PURL, licence, timestamp, dependencies — A. SJ/T adds SM3 hashes and AI-generated-code fields — C. GB/T adds patch, dev/runtime environment, service, interface blocks — A (project text) |
| **Licence compliance** | Not part of CRA SBOM wording — A (absence) | Licence is a mandatory field (NIISDRC); SBOM framed for "安全与合规" — A |
| **Vulnerability data in SBOM** | CRA silent; BSI forbids vulnerability info inside SBOM — A | NIISDRC includes vulnerability, patch, security-test fields (optional) — A; GB/T includes patch information — A |
| **Who sees the SBOM** | Not public by default (Rec. 77); MSA on reasoned request (Annex VII(8)); optional to users (Annex II(9)); ADCO gets anonymised aggregates (Rec. 22) — A | Supplier → acquirer, and regulator ("监管方"); SBOM sharing platform envisaged — A (GB/T project text); encrypted delivery, access control, signatures — A (NIISDRC) |
| **Open-source carve-out** | Non-commercial FOSS excluded; stewards light regime, no fines (Arts 24, 64(10)(b)) — A | None found; standards address OSS risk directly (GB/T 43848 OSS code security evaluation) — A |
| **Vulnerability reporting link** | Art. 14: 24 h early warning / 72 h notification to CSIRT + ENISA (from 11 Sep 2026); Art. 13(6) report to component maintainer — A | 2021 Rules: report to MIIT platform within 2 days; notify upstream immediately; no disclosure of unpublished vulns abroad — A |
| **Enforcement** | Fines up to €15 m / 2.5 % turnover; market surveillance; CE marking — A | No sanctions attached to the standards (voluntary) — A; uptake via procurement/certification — INFERENCE |
| **State platform** | No EU SBOM repository; ADCO dependency assessment only — A | MIIT special project "开源社区软件物料清单（SBOM）平台" (since 2023), NIISDRC-led SBOM Standards Community (39 members, Sep 2024) — A |
| **Standard-setting actors** | CEN/CENELEC/ETSI (M/606), ENISA, national agencies (BSI) — A | TC260 (CAC-linked), TC28/CESI (MIIT), NIISDRC (MIIT), OpenAtom Foundation, large vendors (Huawei, Alibaba, Ant, ZTE) — A |

---

## 4. Analysis

**Legal nature.** FACT (A): The CRA SBOM duty is binding law, with fines and market withdrawal behind it. FACT (A): All three Chinese texts are voluntary on their face. INFERENCE: In China, recommended standards often take effect through government procurement, sector regulators (finance, energy, water: note the many water-sector and grid drafting units of GB/T 47020) and certification schemes. Their real reach therefore depends on rules that we could not find.

**Depth and content.** FACT (A): The CRA sets a low floor: top-level dependencies only. BSI and the 2026 CISA Minimum Elements both expect full recursive or transitive coverage. INFERENCE: The NIISDRC draft sits between the two, requiring direct dependencies for foundational software. The Chinese texts are broader in **content**: licences, copyright, patches, vulnerability records, development and runtime environment, and AI-generated code. The EU texts concentrate on **identification** and keep vulnerability data separate (BSI).

**Security plus licence compliance.** FACT (A): The Chinese SBOM texts treat licence data as mandatory and present the SBOM as a tool for both security and compliance. FACT (A): The CRA SBOM is a vulnerability-handling instrument. INFERENCE: For licence compliance, a Chinese-format SBOM carries more than the CRA requires. A CRA-minimum SBOM would not satisfy the Chinese mandatory field list.

**Who sees the data.** FACT (A): The EU chose confidentiality. The SBOM goes to authorities only on a reasoned request, and Union-level dependency analysis uses anonymised aggregates. FACT (A): GB/T 47020's project description names regulators as SBOM users and refers to sharing platforms. The NIISDRC community rests on a state "SBOM platform" project. INFERENCE: The Chinese design points towards central collection, or at least central tooling, of component data. The EU design keeps SBOMs with the manufacturer.

**National formats.** FACT (A): DP-SBOM is a new JSON schema. FACT (C): SJ/T 12097 is presented as a domestic alternative to SPDX/CycloneDX, with SM3 hashes. INFERENCE: China is building a parallel format family that can be translated into SPDX/CycloneDX, rather than adopting the ISO standard (ISO/IEC 5962). China has nonetheless joined some SPDX activity, for example the SPDX 3.0.1 Chinese translation with openEuler.

---

## 5. Timeline

| Date | Event | Level |
|---|---|---|
| 13 Jul 2021 / 1 Sep 2021 | MIIT/CAC/MPS Network Product Security Vulnerability Management Rules issued / in force (2-day reporting) | A |
| 2023 | MIIT special project "开源社区软件物料清单（SBOM）平台" assigned to NIISDRC and 11 partners (self-reported in README) | A (self-description) |
| Aug 2023 | DSDX format released by OpenSCA community | C |
| 25 Apr 2024 | GB/T 43698-2024 (software supply chain security) and GB/T 43848-2024 (OSS code security evaluation) published | A |
| 16 May–15 Jul 2024 | TC260 consultation on draft SBOM data-format national standard | A-v |
| 23 Aug 2024 | GB/T 44272-2024 Open source licence framework published | A |
| Sep 2024 | NIISDRC SBOM Standards Community (39 institutions) and "SBOM Chain Initiative" | A |
| 24 Oct 2024 | NIISDRC releases 《软件物料清单构成和要求》 community edition | A |
| 23 Oct / 20 Nov 2024 | CRA signed / published in OJ (L 2024/2847) | A |
| Nov 2024 (published Dec 2024) | MIIT 2024 batch-5 plan includes 2024-1400T-SJ SBOM data format | A |
| 12 Nov 2024 | T/CCSA 569-2024 reportedly published | C |
| 31 Dec 2024 | National standard plan 20243686-T-469 issued | A |
| 3 Feb 2025 | M/606 standardisation request C(2025)618 | A |
| 23 Apr 2025 | Last commit in NIISDRC standard repository (draft with CQAE group-standard cover) | A |
| 20 Aug 2025 | BSI TR-03183-2 v2.1.0 | A |
| 3 Sep 2025 | *Shared Vision of SBOM* (CISA + partners; 7 EU Member State agencies; no China) | A |
| 28 Jan 2026 | GB/T 47020-2026 published | A |
| 11 Mar 2026 | SJ/T 12097-2026 published | A |
| May 2026 | G7 + EU *SBOM for AI – Minimum Elements* (reported) | A (as reported in CISA doc) |
| 1 Jun 2026 | SJ/T 12097-2026 in force | A |
| Jun 2026 | ENISA *SBOM Adoption State of Play 2026* | A |
| 11 Jun 2026 | CRA Chapter IV (notified bodies) applies | A |
| 29 Jul 2026 | CISA-led *2026 Minimum Elements for SBOM* | A |
| 1 Aug 2026 | GB/T 47020-2026 in force | A |
| 11 Sep 2026 | CRA Art. 14 reporting obligations apply | A |
| Oct 2026 | ENISA *Technical Advisory for SBOM* | A |
| 10 Nov 2026 | M/606 amended (C(2026)7861); vulnerability-handling standard deadline 30 Nov 2026 | A |
| 17 Nov 2026 | Commission CRA guidance C/2026/6013 (no SBOM content) | A |
| 19 Nov 2026 | FprEN 40000-1-3 formal vote starts; projected publication 10 Feb 2027 | B |
| 11 Dec 2027 | CRA fully applicable, including the SBOM obligation | A |

---

## 6. What this means for EU–China cooperation

**Chinese manufacturers selling in the EU.** FACT (A): From 11 December 2027, any manufacturer placing a product with digital elements on the EU market, Chinese ones included, must hold a CRA-compliant SBOM. FACT (A): The CRA accepts any "commonly used" machine-readable format. INFERENCE:
- A DP-SBOM or SJ/T 12097 document is unlikely to count as "commonly used" in the EU market. Chinese vendors will in practice need to emit CycloneDX or SPDX as well, or a lossless conversion.
- PURL identifiers and hashes, which the Chinese texts require, make such conversion feasible.
- SM3-only hashes would not be readable by most EU tooling. Dual hashing (SM3 + SHA-256) avoids the problem.

**A common reference: ISO/IEC 5962.** FACT (A): SPDX 2.2.1 is an international standard (ISO/IEC 5962:2021), and China is an ISO member. INFERENCE: Two practical steps follow:
- Both sides could cite ISO/IEC 5962 (and its SPDX 3 revision) as the exchange format.
- The Commission could reference it in any Art. 13(24) implementing act, while Chinese standards could add a normative annex mapping to it.

This would reduce divergence without either side giving up its own field set. The existing Chinese SPDX 3.0.1 translation, involving openEuler, is a starting point.

**Joint SBOMs for shared open-source projects.**
- FACT (A): Non-monetised FOSS is outside the CRA. Stewards have no SBOM obligation and no fines.
- INFERENCE: Projects such as openEuler and OpenHarmony are governed by Chinese foundations, with OpenAtom hosting the SBOM community itself. When their packages enter EU products, the **integrating manufacturer** must cover them in its SBOM and exercise due diligence (Art. 13(5)).
- INFERENCE: Upstream projects that publish SBOMs in SPDX/CycloneDX, with Chinese-standard fields as extensions, would lower compliance costs for EU integrators. This is a low-politics area for cooperation between foundations (OpenAtom, Eclipse, Linux Foundation Europe, OpenSSF).

**Vulnerability handling.** FACT (A): Both systems require upstream notification: CRA Art. 13(6) and China's 2021 Rules Art. 7(1). Both have short reporting clocks to authorities: 24 h/72 h in the EU, 2 days in China. INFERENCE: A Chinese manufacturer with an actively exploited vulnerability in a product sold in both markets faces two parallel state notifications. China's rule against giving undisclosed vulnerability details to overseas organisations (Art. 9(7)) applies to finders and collectors, not to the product provider. How it affects CRA reporting by Chinese manufacturers or their EU subsidiaries is an open legal question.

**Mutual recognition.** INFERENCE: Mutual recognition of SBOM *standards* is not on the agenda:
- The EU has not yet fixed its own format.
- China has three overlapping texts.
- Neither side took part in the other's soft-law processes: no Chinese agency signed the 2025 *Shared Vision* or the 2026 *Minimum Elements*, and no EU body appears among the drafters of the Chinese texts.

A realistic first step is a technical crosswalk (GB/T 47020 / SJ/T 12097 ↔ CycloneDX / SPDX), produced by standards bodies or open-source foundations.

## 7. Risks

- **State access to component data.** INFERENCE, based on A facts: The Chinese texts name regulators as SBOM users and are tied to a state SBOM platform project. An EU manufacturer selling in China might be asked to supply detailed SBOMs (including licences, patches and environment) to platforms that state bodies can access. That data maps the manufacturer's attack surface. The CRA chose the opposite design: no publication and anonymised aggregation.
- **Divergence and double compliance.** INFERENCE: China now has two data-format standards that were developed in parallel: GB/T 47020 (TC260) and SJ/T 12097 (TC28/MIIT). There is also a group-standard draft with a third schema. A company may have to produce several formats for one product. The EU risks a similar split if national guidelines (BSI TR-03183-2) diverge from a future implementing act.
- **Cryptographic divergence.** FACT (C): SJ/T 12097 supports SM3. INFERENCE: SM3-only SBOM integrity data would break verification in EU tooling.
- **Format nationalism.** INFERENCE: Presenting national formats as answers to "国情" (national conditions) and "自主可控" (self-reliance and control) suggests the formats may become a tool of procurement preference rather than an interoperability layer.
- **Evidence gap.** FACT: We could not read the final texts of GB/T 47020 or SJ/T 12097. The comparison of Chinese fields therefore rests partly on project descriptions (A) and a drafter's blog (C).

---

## 8. Not verified / open questions

1. GB/T 47020-2026 final text: field list, required depth, any mapping to SPDX/CycloneDX, any reference to ISO/IEC 5962, and serialisation formats. The openstd online preview was not reachable.
2. SJ/T 12097-2026 full text: everything beyond the std.samr metadata rests on one drafter's blog (C). The meaning of "BOM-SW-v2.0" in that blog is unknown.
3. NIISDRC 《软件物料清单构成和要求》: was it published as a T/CQAE group standard, and with what number? The repository file shows "CQAE*****—2024 (送审稿)". ttbz.org.cn sits behind a CAPTCHA.
4. Whether the national "open-source community SBOM platform" collects SBOMs from companies, who operates it, and on what legal basis.
5. Whether any binding MIIT, CAC or sectoral rule (CII, finance, energy) requires SBOM delivery. The reported 2026 CAC/MIIT CII software-supply-chain rules are **D (unverified)**.
6. Whether GB/T 43698-2024 (software supply chain security requirements) contains an SBOM requirement.
7. GB/T 43848-2024 drafting units (the lead says CAICT); not retrieved.
8. Status of the companion industry-standard projects 2025-1696T-SJ and 2025-1697T-SJ, and of 2024-1395T-SJ (industrial software BOM).
9. Whether the Commission plans an Art. 13(24) SBOM implementing act before December 2027. None is listed on the roadmap.
10. Final adoption and OJ citation of EN 40000-1-3. The projected publication date of 10 February 2027 is B.
11. Content of the G7 *SBOM for AI – Minimum Elements* (May 2026). It may be relevant because SJ/T 12097 adds AI-generated-code fields and China plans AI-BOM guidance documents (20263049-Z-469, 20263051-Z-469).
12. T/CCSA 569-2024 and DSDX: single-source (C).
