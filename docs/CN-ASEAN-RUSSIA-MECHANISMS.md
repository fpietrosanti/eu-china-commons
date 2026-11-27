# China's open-source cooperation mechanisms with ASEAN and Russia, and whether they could be adapted for Europe

China's open-source cooperation with Russia is, so far, a sequence of summit pledges with no documented meeting or project; with ASEAN it produces real activity, but state-led and mostly built around access to Chinese models and compute. This note inventories every mechanism we could trace to a primary text, separates announcements from delivered results, and tests each one for adaptation to EU–China cooperation.

Research note for the EU–China Digital Commons Observatory. Compiled 27 November 2026. Evidence levels follow docs/METHODOLOGY.md §4:
- **A**: primary text read in the original language and archived.
- **A-v**: primary text read via relay.
- **B**: reliable secondary source.
- **C**: single or self-reported source.
- **D**: unverified.

Every primary cited here is archived in [`sources/archive/`](../sources/archive/) (method `research-agent` in `index.tsv`), and the full list with verbatim quotes, checked by script against the archived text, is in [`data/external/research-2026-11/asean-russia-sources.tsv`](../data/external/research-2026-11/asean-russia-sources.tsv).

---

## 1. Summary

- **FACT (A).** China's open-source cooperation with Russia exists mainly as **treaty-style language in top-level texts**. It has moved from operating systems (2021) to "AI and open-source technologies" (2024) to a "software cooperation mechanism" (2026). The 16 May 2024 joint statement commits both sides to "建立并用好定期磋商机制加强人工智能和开源技术合作". The Russian text reads "запустить механизм регулярных консультаций в целях укрепления сотрудничества в области развития искусственного интеллекта и технологий открытого кода".
- **FACT (A).** The prime ministers' communiqué of 3 November 2025 placed this work in an **AI Working Group under the Communications and IT Cooperation Subcommission** of the Regular Meeting of Heads of Government. It created an "AI Cooperation Expert Committee" there, described as an "analysis and consultation mechanism".
- **FACT (A).** The communiqué of 21 October 2026 still only commits both sides to "制定并批准…专家委员会运作规程" (draft and approve the committee's rules of procedure).
- **INFERENCE.** Two and a half years after the 2024 pledge, the consultation mechanism exists on paper. No public record of a meeting dedicated to AI and open source was found, and no joint open-source project was found.
- **FACT (A).** China–ASEAN cooperation is **denser and more operational**, but it is **state-led and industrial-promotion oriented**.
  - In September 2025 in Nanning, MOST published a three-year AI capacity plan for ASEAN (2025–2027), whose items include co-building "人工智能开源开放社区" (B).
  - At the same event, MOST launched a "China–ASEAN AI Open Source Alliance" (B).
  - NDRC and Guangxi launched a "China–ASEAN Countries AI Application Cooperation Center" whose remit includes "提供开源开放服务" (A).
  - In January 2026 ASEAN digital ministers endorsed an **ASEAN-China Digital Work Plan for 2026** that names "open-sources" as one of its focus areas (A).
  - MIIT and CAICT opened a China–ASEAN AI Industry Innovation Center in Beijing on 24 May 2026, with the ASEAN Secretary-General present (A).
- **FACT (B/C).** The most concrete open-source output in ASEAN with a Chinese component is not intergovernmental. It is **AI Singapore's Qwen-SEA-LION-v4** (Nov 2025), an open-weight regional model built on Alibaba's Qwen3-32B (B).
- **FACT (C).** A Malaysian university, UTAR, opened an OpenHarmony club with the OpenHarmony TSC chair in July 2026.
- **FACT (B).** One year after launch, Chinese official media report Guangxi AI agreements with 8 ASEAN states, but they report **no outputs of the open-source alliance** (no repository, membership list or charter was found).
- **INFERENCE.** The Chinese template is the same across partners:
  - The SCO "AI Application Cooperation Center" (Tianjin, May 2025) and the ASEAN centre (Nanning, Sept 2025) use an identical four-part remit: development foundations, **open-source and open services**, industry matchmaking, and talent.
  - "Open source" here means mainly **access to Chinese open-weight models, compute and platforms**. It does not mean jointly governed commons.
  - The model is asymmetric: China is the provider and the partner is the recipient.
- **Verdict for Europe:**
  - The China–Russia model is **not adaptable**. It is a geopolitical alignment instrument, and EU sanctions and the suspension of cooperation with Russia exclude it.
  - The China–ASEAN model is **not adaptable as a package**, because Europe is not a capacity-building recipient. **Several of its instruments are adaptable with changes**:
    - an open-source line in an existing digital dialogue's work plan;
    - a technical expert group;
    - foundation-hosted joint projects instead of state-launched "alliances";
    - reciprocal OSPO and training exchanges;
    - transparent evaluation of open-weight models.
  - The ASEAN-China 2026 work plan lists open source as a focus area. The **ASEAN-EU 2026 Digital Work Plan does not** (A). This is a gap in Europe's own ASEAN offer.

---

## 2. Mechanism inventory

"Delivered" means a documented result, not an announcement. Announced items are marked *(announced)*.

| # | Mechanism | Partners | Instrument | Start | Owner (CN side) | Delivered outputs | Level | Source |
|---|---|---|---|---|---|---|---|---|
| R1 | Cooperation on terminal OS (Aurora, HarmonyOS, openEuler) under the MIIT–Mintsifry MoU on digital technology development | CN–RU | PM regular-meeting communiqué | 30 Nov 2021 | MIIT | None documented. A Russian openEuler derivative, OpenScaler, exists as a community and company effort (C). | A (text); C (OpenScaler) | mfa-cn-ru-pm26-communique-2021-12-01.html |
| R2 | "Regular consultation mechanism" on AI and open-source technologies | CN–RU | Heads-of-state joint statement | 16 May 2024 | Not named | No public meeting record found | A (CN + RU) | mfa-cn-ru-2024-05-16.html; kremlin-supplement-6132-ru-cn-2024-05-16.html |
| R3 | AI Working Group plus AI Cooperation Expert Committee, under the Communications and IT Cooperation Subcommission | CN–RU | PM communiqué (intergovernmental commission) | 3 Nov 2025 (*committee announced*) | Subcommission (MIIT side inferred, not stated) | Rules of procedure still to be approved as of Oct 2026 | A | mfa-cn-ru-pm30-communique-2025-11-04.html; xinhua-cn-ru-pm31-2026-10-22.html |
| R4 | Open-source cooperation clause (projects, communities, industrial uptake) | CN–RU | PM communiqués 2025, 2026; summit statement 2026 | Nov 2025 | Not named | None documented | A | same as R3; mfa-cn-ru-2026-05-20.html |
| R5 | "Software cooperation mechanism" to explore | CN–RU | Heads-of-state joint statement | 20 May 2026 (*announced*) | Not named | None | A | mfa-cn-ru-2026-05-20.html |
| R6 | Russia–China inter-agency working group (Mintsifry plus Chinese agencies) on AI | CN–RU | Ministerial working group | Before May 2026 | Not named | Manturov says it "has been created" | C | comnews-digital-silk-road-moscow-beijing-2026-05-21.html |
| R7 | Consultations on military applications of AI | CN–RU | Foreign-ministry consultations | 20 Nov 2025 | MFA | Meeting held; no open-source content | B | profile-ru-cn-military-ai-consultations-2025-11-21.html |
| A1 | ASEAN-China Joint Statement on a Sustainable and Inclusive Digital Ecosystem | ASEAN–CN | Leaders' joint statement (27th summit, Vientiane) | 10 Oct 2024 | MFA / MIIT | Basis for the 2026–2030 action plan. The statement **does not mention open source**. | A | asean-china-2024-joint-statement-digital-ecosystem.pdf |
| A2 | MOST three-year work plan on AI capacity for ASEAN (2025–2027): local-language LLMs, compute alliance, "co-build AI open-source/open communities" | ASEAN–CN | Unilateral ministry plan, presented at a conference | 16 Sep 2025 | MOST (Intl. Cooperation Dept.), Guangxi | Training courses (see A7); target "AI cooperation system by 2027" | B (full text not found) | chinanews-most-asean-ai-plan-2025-09-16.html |
| A3 | China–ASEAN AI Open Source Alliance (中国—东盟人工智能开源联盟) | ASEAN–CN | State-launched alliance, presented as a project supporting the China–ASEAN AI Innovation Cooperation Center | 16 Sep 2025 | MOST / Guangxi | **None found.** No charter, members or repository located. | B (launch); D (activity) | chinanews-most-asean-ai-plan-2025-09-16.html |
| A4 | China–ASEAN Countries AI Application Cooperation Center ("南A中心", Nanning) | ASEAN–CN | NDRC-led centre, provincial implementation | 18 Sep 2025 | NDRC, Guangxi gov. | By Dec 2025: 61 domestic AI projects signed, 54 "AI+" opportunity lists, 84 ASEAN scenario demands, 14 ASEAN firms signed. These figures are self-reported. | A (launch); C (figures) | ndrc-cn-asean-ai-ministerial-roundtable-2025-09-18.html; stdaily-2026-10-13-guangxi.html |
| A5 | China–ASEAN AI Ministerial Roundtable and proposed "China–ASEAN AI ministerial cooperation mechanism" | ASEAN–CN | Ministerial roundtable | 18 Sep 2025 (*mechanism proposed*) | NDRC, Guangxi | Roundtable held; mechanism status unknown | A | ndrc-cn-asean-ai-ministerial-roundtable-2025-09-18.html |
| A6 | ASEAN-China Digital Work Plan 2026 (focus: policy alignment, infrastructure, **open-sources**, security) and Action Plan 2026–2030 | ASEAN–CN | ADGMIN+China work plan, endorsed by ASEAN ministers | 16 Jan 2026 | MIIT | Endorsed; implementation reports not yet published | A | adgmin6-jms-2026-digital-go-jp.pdf; chinadaily-adgmin6-china-2026-01-16.html |
| A7 | ASEAN "AI+" industrial talent training course (15 days; 20+ participants from 8 ASEAN states) | ASEAN–CN | Government training programme | 20 Jul 2026 | MOST Intl. Cooperation Dept.; Guangxi ASEAN Technology Transfer Center | Course held | B | stdaily-2026-07-21.html |
| A8 | China–ASEAN AI Industry Innovation Center (Beijing; Guangxi sub-centre from 17 Sep 2026) | ASEAN–CN | MIIT/CAICT centre under the ADGMIN+China channel | 24 May 2026 | MIIT, CAICT | Inaugurated; ASEAN SG speech | A (SG remarks) | asean-sg-remarks-china-asean-ai-industry-innovation-center-2026-05.pdf |
| A9 | Qwen-SEA-LION-v4 (open-weight regional LLM on Qwen3-32B) | AI Singapore (SG national programme) plus Alibaba Cloud | Company–national programme collaboration | 24 Nov 2025 | Alibaba (company) | Model released, free download on AISG site and Hugging Face | B (company press release; multiple media) | alibabacloud-qwen-sea-lion-v4-2025-11-24.html |
| A10 | UTAR OpenHarmony club (Malaysia) | UTAR plus OpenHarmony TSC / Huawei | University–community link | 1 Jul 2026 | Huawei / OpenHarmony TSC | Club inaugurated | C | thestar-utar-openharmony-club-2026-07-19.html |
| O1 | China–SCO AI Application Cooperation Center (same four-part remit incl. "提供开源开放服务") | SCO–CN | NDRC-led centre | 29 May 2025 | NDRC, Tianjin | Not assessed | B | xinhua-china-sco-ai-forum-2025-05-30.html |
| O2 | China–BRICS AI Development and Cooperation Center (at CAICT) | BRICS–CN | MIIT-led centre | 19 Jul 2024 | MIIT, CAICT | First overseas "transfer centre" (Kuaishou, Brazil, May 2025) | C | search summary only (not archived) |
| O3 | Global AI Governance Action Plan, point 5 ("打造跨国开源社区和安全、可靠开源平台"; open-source compliance and community security guidelines) | Global | Unilateral Chinese action plan (WAIC) | 26 Jul 2025 | MFA / WAIC | Text | A | mfa-global-ai-governance-action-plan-2025-07-26.html |
| O4 | World AI Cooperation Organization (29 founding states incl. Russia, Indonesia, Laos, Cambodia) | Global | Intergovernmental treaty organisation, HQ Shanghai | 16 Jul 2026 | MFA | Agreement signed | A | mfa-en-waico-2026-07-17.html |
| O5 | NDRC "AI Cooperation Development Action Plan", action 3 "开源生态共享行动" | Global | Unilateral Chinese plan | 17 Jul 2026 | NDRC | Text | A | ndrc-ai-cooperation-action-plan-2026-07-17.html |
| O6 | APEC Digital and AI Ministerial (Chengdu): "open source" raised to APEC ministerial level for the first time | APEC | Ministerial statement (China host) | 23 Jul 2026 | MIIT | Text (as reported by MIIT minister) | B | thepaper-apec-digital-ai-ministerial-2026.html |

---

## 3. China–ASEAN

### 3.1 Formal layer: ADGMIN+China

- **FACT (A).** On 10 October 2024, at the 27th ASEAN-China Summit, the parties adopted the *ASEAN-China Joint Statement on Facilitating Cooperation in Building a Sustainable and Inclusive Digital Ecosystem*.
  - It covers policy exchange, infrastructure, emerging technologies including "best practices in artificial intelligence principles, development, safety and governance", digital security and literacy.
  - **It does not mention open source.**
  - It names the ASEAN-China Digital Ministers' Meeting as the delivery mechanism.
- **FACT (A).** The 6th ADGMIN (Hanoi, 15–16 January 2026) recorded four China items:
  - It "noted the establishment of the China-ASEAN AI Industry Innovation Center and the China-ASEAN Digital Academy".
  - It "endorsed the Action Plan for China-ASEAN Cooperation on Building a Sustainable and Inclusive Digital Ecosystem (2026–2030)".
  - It also endorsed the "ASEAN-China Digital Work Plan for 2026 focusing on policy and strategy alignment, digital infrastructure, open-sources, digital security and trust".
  - China was represented by MIIT Vice-Minister Zhang Yunming (B, China Daily).
- **FACT (A).** In the same statement the ASEAN-EU 2026 Digital Work Plan covers:
  - secure and trusted connectivity;
  - AI governance;
  - digital platforms and online scams;
  - digital standards;
  - digital trade;
  - Earth observation.

  It does **not** list open source. The text of the 2026 work plans themselves was not found.
- **FACT (A).** On 24 May 2026 the ASEAN Secretary-General opened the **China-ASEAN AI Industry Innovation Center** in Beijing. In his speech:
  - He thanked MIIT and CAICT and called the inauguration the implementation of the 2026–2030 Action Plan.
  - He urged "low-cost, replicable Large Language Models tailored to ASEAN needs".
  - He announced an ASEAN AI Safety Network (AI SAFE) with regulatory-sandbox cooperation "between ASEAN and China".
  - He said ACFTA 3.0, signed in October 2025, contains Digital Economy chapters.
  - He said DEFA was "set for signing in November 2026".

  The speech does not mention open source.

### 3.2 Operational layer: Guangxi as the delivery platform

- **FACT (B).** On 16 September 2025 MOST published in Nanning the *面向东盟人工智能赋能发展科技能力提升行动三年工作方案(2025-2027)*. Its main items are:
  - joint R&D;
  - LLMs in local languages;
  - sector scenarios;
  - visiting scientists;
  - a China–ASEAN AI cooperation network;
  - a China–ASEAN AI Compute Alliance;
  - "携手开展人工智能全球治理，共建人工智能开源开放社区，推动模型开源和基础设施开放共享".

  The target is "到2027年…基本建立中国与东盟各国的人工智能合作体系". Officials from Cambodia, Indonesia, Laos and Malaysia reportedly endorsed it. The full text was not found on most.gov.cn.
- **FACT (B).** The same day, a "China–ASEAN AI Open Source Alliance" was launched as one of the projects supporting the China–ASEAN AI Innovation Cooperation Center.
  - **NOT VERIFIED:** founders, members, governance, licence policy, repositories and platform. No trace was found in follow-up reporting from 2026.
- **FACT (A).** On 18 September 2025 NDRC and the Guangxi government co-hosted the 2025 China–ASEAN AI Ministerial Roundtable. The roundtable:
  - launched the **China–ASEAN Countries AI Application Cooperation Center**, explicitly to implement Xi's SCO+ pledge on "人工智能应用合作中心";
  - set the centre's remit as "夯实人工智能发展基础、提供开源开放服务、加强产业合作对接、促进人才培育";
  - proposed a China–ASEAN "AI+" action;
  - proposed a **China–ASEAN AI ministerial cooperation mechanism**.

  ASEAN states and observer states sent representatives of their AI authorities.
- **FACT (B, figures C).** The centre ("南A中心") follows a "北上广研发+广西集成+东盟应用" path, with R&D in Beijing, Shanghai and Guangzhou, integration in Guangxi, and application in ASEAN. Nanning has issued 22 support measures. Self-reported results as of December 2025 are 61 domestic AI projects signed, 54 "AI+" opportunity lists, 84 ASEAN scenario demands and 14 ASEAN firms signed.
- **FACT (B).** On 20 July 2026 MOST's International Cooperation Department ran a 15-day "AI+" training course in Nanning. It had 20+ participants (executives, researchers and officials) from Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Thailand and Viet Nam. The Guangxi ASEAN Technology Transfer Center hosted it.
- **FACT (B, C for figures).** At the September 2026 technology-transfer conference, Xinhua and S&T Daily reported three things:
  - One year after the plan, Guangxi had AI cooperation with 8 ASEAN states.
  - "ASEAN sets the problem, Guangxi publishes the challenge" scenarios were released covering 7 ASEAN states.
  - Since 2013 China has bilateral technology-transfer mechanisms with 9 ASEAN states and has trained 1,400+ technical staff.

  **Neither report mentions the open-source alliance.**
- **FACT (B).** A September 2026 S&T Daily report describes iFlytek's "Spark ASEAN multilingual LLM" and private deployment, CSG power-line AI in Laos, and Runjian (80+ compute and data-centre projects in ASEAN). These are commercial deployments, not open-source projects.

### 3.3 Company and community layer

- **FACT (B).** On 24 November 2025 AI Singapore, the national programme launched by Singapore's National Research Foundation, released **Qwen-SEA-LION-v4**:
  - It is "built on Alibaba's Qwen3-32B foundation model".
  - It is free to download from AISG and Hugging Face.
  - AISG contributed "open-source region-specific data curation".
  - Media reported the switch from Meta's Llama family (B, TechNode, SCMP, Computer Weekly).

  **INFERENCE.** This is the clearest delivered "China–ASEAN open-source AI" output, and it came from company-to-programme cooperation on open weights, not from an intergovernmental mechanism. The licence was not checked in this pass.
- **FACT (C).** On 1 July 2026 Universiti Tunku Abdul Rahman (Malaysia) inaugurated an OpenHarmony club, described as the first outside China. Huawei's Chen Haibo, who chairs the OpenHarmony TSC, co-officiated. OpenAtom is not mentioned.
- **FACT (C).** openEuler exhibited at FOSSASIA Summit 2024 (Viet Nam participants mentioned). These are not structured ASEAN programmes.
- **NOT FOUND:** Gitee or ModelScope international programmes targeting ASEAN, and OpenAtom MoUs with ASEAN governments or foundations.

### 3.4 Governance reading

- **INFERENCE.** The China–ASEAN layer stacks several instruments:
  - leaders' statements (A1);
  - ministerial work plans in an ASEAN-owned forum (ADGMIN, A6);
  - Chinese unilateral ministry plans presented to ASEAN (A2);
  - state-launched alliances and centres hosted by a Chinese province (A3, A4, A8);
  - company deals (A9, A10).
- **INFERENCE.** Funding is Chinese central and provincial (Nanning's 22 measures). No ASEAN co-funding was found.
- **INFERENCE.** Three ministries run parallel China–ASEAN AI centres: MOST (innovation centre and alliance), NDRC (application centre) and MIIT/CAICT (industry innovation centre). This suggests inter-ministerial competition, not one designed programme.
- **INFERENCE.** "Open source" is used in two senses:
  - mainly, as access to Chinese open-weight models, compute and tooling for ASEAN users;
  - only secondarily, as jointly governed communities.

  No evidence was found of ASEAN maintainers in governance roles in Chinese foundations.

---

## 4. China–Russia

### 4.1 Text trail (all A unless stated)

| Date | Document | Open-source wording |
|---|---|---|
| 30 Nov 2021 | 26th PM regular meeting communiqué | Cooperation in terminal operating systems, "包括极光、鸿蒙、欧拉操作系统", under the MIIT–Mintsifry MoU on digital technology development |
| 16 May 2024 | Heads-of-state joint statement, 75th anniversary | ICT list includes "开源" / "открытый исходный код"; and "建立并用好定期磋商机制加强人工智能和开源技术合作" / "запустить механизм регулярных консультаций… искусственного интеллекта и технологий открытого кода" |
| 8 May 2025 | Heads-of-state joint statement, 80th anniversary of victory | **No "开源"**. The AI paragraph refers to the China–BRICS AI Development and Cooperation Center and the AI capacity-building plan. |
| 3–4 Nov 2025 | 30th PM communiqué (Hangzhou) | Creates the AI Cooperation Expert Committee within the subcommission's AI Working Group "作为分析与协商机制". Separate open-source clause: "在开源领域持续加强合作，鼓励企业、开发者等积极拥抱开源，共同打造优质开源项目和社区，推动优质开源成果在重点行业的产业化落地". Also CAC–Roskomnadzor exchanges. |
| 20 May 2026 | Heads-of-state joint statement (treaty extended) | "双方商定探索建立软件合作机制，共同赋能数字基础设施建设。深化开源领域合作交流…" |
| 21 Oct 2026 | 31st PM communiqué (St Petersburg) | "制定并批准人工智能合作专家委员会运作规程"; "持续加强软件领域开源合作…推动在工业领域重点行业推广". Also: joint AI conference in China in 2027; federated-learning pilot; MOST–Russian Ministry of Economic Development innovation MoU (20 May 2026); resumption of the 4th China–Russia Innovation Dialogue. |

### 4.2 Did the consultation mechanism meet?

- **NOT VERIFIED.** No dated meeting of an "AI and open-source consultation mechanism" was found in Chinese or Russian sources (MFA, gov.cn, Kremlin, Russian press).
- **FACT (A).** The 2025 and 2026 PM communiqués place AI cooperation in the **AI Working Group of the Communications and IT Cooperation Subcommission**. The 2026 communiqué shows the expert committee's rules were still not approved.
- **FACT (C).** In May 2026 First Deputy PM Manturov said a Russian–Chinese inter-agency working group of Mintsifry and Chinese agencies "has been created" (ComNews). The same article finds no open-source content in practical Russia–China digital cooperation.
- **FACT (B).** On 20 November 2025 Moscow hosted Russia–China foreign-ministry consultations on military applications of AI. Open source was not mentioned.
- **INFERENCE.** The 2024 "regular consultation mechanism" has most likely been folded into the existing subcommission structure. No public output is documented (no minutes, projects or repositories). The level is not verified.

### 4.3 Russian open-source context

- **FACT (B).** On 18 October 2024 a Linux kernel MAINTAINERS patch removed about a dozen entries, most of them Russian maintainers, "due to various compliance requirements". kernel.org's administrator linked the removals to employers on US/EU sanctions lists. Linus Torvalds publicly backed the removal (The Register, Heise, LWN). Their code remained in the tree.
- **FACT (C).** GitFlic, a Russian code-hosting platform, belongs to Resolute, which is controlled by Astra Group (CNews, Oct 2024). Mintsifry's national open-source repository experiment (2022–2024, operator ANO "Открытый код") was reoriented to existing platforms and then to rules for domestic repositories. This comes from secondary search results; the Mintsifry primary was not fetched.
- **FACT (C).** OpenScaler is a Russian community distribution derived from openEuler. The company "Личи Технологии" offers paid support, including on Yandex Cloud Marketplace. It is the only concrete Russian product found that is based on a Chinese open-source operating system.
- **NOT VERIFIED.** Any Russian distribution of OpenHarmony; any role for Kaspersky or Yandex in China–Russia open-source cooperation.
- **NOT FETCHED (B, from background knowledge).** GitHub restricted accounts of sanctioned Russian entities from 2022. Re-fetch before publishing.

### 4.4 Reading

- **INFERENCE.** For Russia, open-source cooperation with China is a **substitute channel** after sanctions cut it off from Western foundations and platforms (see the kernel episode).
- **INFERENCE.** For China, it adds a partner to the "against politicisation of technology" narrative found in the 2025 and 2026 statements.
- **INFERENCE.** The delivery record is thin. The text has escalated (consultation, then expert committee, then software mechanism) while documented outputs stay at zero.

---

## 5. Other comparable mechanisms

- **SCO (B).** On 29 May 2025 NDRC and Tianjin published the *中国—上合组织国家人工智能应用合作中心建设方案*. Its four-part remit is identical to the ASEAN centre's and includes "提供开源开放服务".
  - **FACT (A).** The SCO heads-of-state statement on AI (1 September 2025) does not contain "开源".
  - **INFERENCE.** Nanning copies the Tianjin design.
- **BRICS (C).** The China–BRICS AI Development and Cooperation Center was launched at CAICT on 19 July 2024. MIIT Vice-Minister Shan Zhongde attended. No open-source content was found.
- **Africa.**
  - **FACT (A-v via secrss).** The *China–Africa Digital Cooperation Development Action Plan* (29 July 2024) proposes "共建人工智能合作中心" but contains no "开源".
  - **NOT VERIFIED.** The KAIYUANSHE lead that MIIT promoted openEuler in Africa in July 2024.
- **Global layer.**
  - **FACT (A).** Point 5 of the WAIC *Global AI Governance Action Plan* (26 July 2025, 13 points) calls for cross-border open-source communities, secure open-source platforms, open-source compliance systems and community security guidelines.
  - **FACT (A).** Point 12 covers capacity building for developing countries generally.
  - **FACT (A).** **The plan does not mention ASEAN.** This corrects the KAIYUANSHE lead.
  - **FACT (A).** NDRC's *人工智能合作发展行动计划* (17 July 2026), action 3, adds "协同制定开源合规体系与安全准则" and "支持各国基于开源模型开展本土化创新".
  - **FACT (A).** The WAICO founding agreement was signed on 16 July 2026 by 29 states, including Russia, Indonesia, Laos and Pakistan.
  - **FACT (B).** The APEC Digital and AI Ministerial (Chengdu, July 2026) raised "open source" to APEC ministerial level for the first time, according to MIIT.
- **MIIT "International AI Open Source Cooperation Initiative".**
  - **FACT (C).** It was announced on 10 July 2025 for release at WAIC with OpenAtom, CSDN and OSChina (aibase).
  - **NOT VERIFIED.** Whether it was actually released.
  - **FACT (B).** In October 2026 MIIT referred to building the AI open-source community **AtomGit**.

---

## 6. Adaptability matrix for Europe

EU baseline (from this repo's EU-CN-COOPERATION-MAP, level A):
- The EU–China High-Level Digital Dialogue is dormant; its last round was in September 2023.
- The EU–China ICT Dialogue (DG CONNECT–MIIT) has not met since 2020; resumption was agreed in 2023.
- The Cross-Border Data Flow Communication Mechanism is active (2024; 2nd meeting July 2025).
- The Joint Steering Committee on S&T is active.

Legal anchors:
- the Council Recommendation on research security, C/2024/3510 (A, EUR-Lex);
- the CRA, including open-source steward obligations;
- NIS2;
- the EU restrictive measures on Russia;
- the EU dual-use regulation;
- the AI Act obligations for GPAI providers and modifiers.

| Mechanism (ref) | Instrument type | What it actually delivers | Dependencies created | EU law and values compatibility | Verdict | EU–China version |
|---|---|---|---|---|---|---|
| CN–RU regular consultation on AI and OSS (R2) | Heads-of-state joint statement | Political signal; no documented meetings | Russian reliance on Chinese platforms (OpenScaler / openEuler) | **Incompatible for EU–Russia.** EU sanctions, the suspension of R&I cooperation with Russian public entities since 2022, and foundation compliance practice (kernel 2024) exclude it. For EU–China, a summit-level pledge without a work plan repeats the CN–RU failure mode. | **Not adaptable** (EU–RU). Not useful as a template (EU–CN). | None. Use it as a negative lesson: a pledge without a body, rules and minutes delivers nothing. |
| CN–RU AI Working Group and Expert Committee (R3) | Working group under an intergovernmental commission; expert committee with industry and academia | Not yet operational (rules pending, Oct 2026) | None yet | The **form** (expert committee under a sectoral subcommission) matches EU practice, e.g. the ICT Dialogue working groups. The content (sovereignty, regulation coordination against "politicisation") does not. | **Adaptable with changes** (form only, EU–CN) | **E1:** a technical expert group on open-source supply-chain security under the ICT Dialogue or Digital Dialogue, with published ToR and minutes and multistakeholder observers (foundations, OSPOs). |
| CN–RU "software cooperation mechanism" (R5) | Summit pledge | Nothing yet | — | Not applicable to the EU. EU–China software cooperation is market-based and subject to CRA, NIS2 and procurement rules. | **Not adaptable** | — |
| ADGMIN+China work plan with an "open-sources" line (A6) | Annual ministerial work plan in a partner-owned forum | Work plan endorsed; implementation reports pending | Low by itself | Compatible: it is a dialogue work-plan item. | **Adaptable** | **E2:** add an "open source and digital commons" line to the work plan of the EU–China Digital Dialogue or ICT Dialogue when they resume. **E2b (EU–ASEAN):** add open source to the ASEAN-EU Digital Work Plan 2027, closing the gap with ASEAN-China 2026. |
| MOST three-year AI capacity plan (A2) | Unilateral donor plan presented to partners | Training, scenarios, LLMs in local languages | High. Partners depend on Chinese models, compute and integrators (the "北上广研发+广西集成+东盟应用" design). | The EU is not a recipient. The donor–recipient asymmetry is inapplicable, and the Global Gateway already plays this role for the EU in ASEAN. | **Not adaptable** (EU–CN) | Reciprocal version only (E4). |
| China–ASEAN AI Open Source Alliance (A3) | State-launched alliance | Nothing documented | Unknown | Opaque membership and governance conflict with open-governance norms. Research-security due diligence would be hard. | **Adaptable with changes** | **E3:** joint projects hosted by a **neutral foundation** under existing open governance (e.g. Eclipse Foundation or Linux Foundation Europe with OpenAtom; the OpenHarmony × Eclipse Oniro precedent, KAIYUANSHE C). Requirements: open membership, public repositories, IP policy, sanctions and export-control screening of members. |
| AI Application Cooperation Centers, SCO / ASEAN (A4, O1) | NDRC centre with provincial implementation | Deal pipeline: projects signed, demand lists | High. Commercial market access for Chinese AI firms. | An industrial-promotion vehicle, not a commons. Data, AI Act and procurement issues would arise in the EU. | **Not adaptable** | — |
| MIIT/CAICT AI Industry Innovation Center (A8) | Ministry-affiliated centre | Showcase, dialogue, standards coordination | Medium | CAICT is MIIT-affiliated. Standards coordination is compatible via ETSI/CEN-CENELEC channels, but not via a China-hosted centre. | **Adaptable with changes** | Standards and OSS-compliance exchange inside E1. No physical centre. |
| Training courses (A7) | Government-funded short courses | 20+ trainees per course | Soft dependency (network, product familiarity) | Reciprocal exchanges are compatible, subject to research security (C/2024/3510). | **Adaptable with changes** | **E4:** reciprocal OSPO-to-OSPO exchange: EU OSPO network / OSOR and university OSPOs with Chinese university OSPOs. Short, symmetric, public curricula, and no sensitive technologies. |
| Qwen-SEA-LION (A9) | Company plus public programme, open weights | Released regional model | Model-lineage dependency on Qwen. Licence and update cadence controlled by Alibaba. | Compatible if licence terms are met. AI Act GPAI duties fall on modifiers in scope. A security evaluation is advisable. | **Adaptable with changes** (it already happens de facto) | **E5:** EU public LLM programmes publish open, reproducible evaluations (safety, bias, provenance) of Chinese open-weight bases before use. A joint benchmark on European low-resource languages with Chinese labs is possible on neutral infrastructure. |
| UTAR OpenHarmony club (A10) | University–community link | One club | Low | Compatible | **Adaptable** | Already exists in EU form (Oniro). Extend it through student-club and maintainer-mentoring programmes. |
| WAIC Action Plan pt 5 / NDRC plan action 3 (O3, O5) | Unilateral global plans | Text | — | Shared topics with the CRA: OSS compliance and security guidelines | **Adaptable with changes** (as an agenda) | E1 agenda item: compare CRA steward obligations with China's SBOM standards SJ/T 12097-2026 (project 2024-1400T-SJ) and GB/T 47020-2026 ([CRA-SBOM-CN](CRA-SBOM-CN.md)) and open-source compliance guidelines. |
| WAICO (O4) | Treaty organisation, HQ Shanghai | Organisation established | Institutional dependency on a China-hosted body | The EU and its member states are not founders (as reported). Joining is a political decision beyond this project's scope. | **Not adaptable** (as a channel for this project) | Engage through the UN Global Dialogue on AI Governance instead. |

---

## 7. Concrete proposals

These are recommendations (INFERENCE), ranked by feasibility.

1. **E2: an open-source line in an existing dialogue.** When the EU–China High-Level Digital Dialogue or the ICT Dialogue resumes, add a work-plan item called "open source and digital commons".
   - Model: the ASEAN-China 2026 work plan line, but with EU-style transparency (public agenda and outcome note).
   - No new body is needed.
   - Owners: DG CONNECT with MIIT. The EU-CN-COOPERATION-MAP already identifies the HL Digital Dialogue as owner (map row 1).
2. **E1: a technical expert group on open-source supply-chain security.** This is the EU counterpart of the China–Russia "expert committee", but with published ToR and minutes and foundation observers. Agenda:
   - CRA open-source steward obligations against China's SBOM data-format standards ([CRA-SBOM-CN](CRA-SBOM-CN.md)) and OSS compliance guidelines (WAIC pt 5, NDRC action 3);
   - vulnerability-disclosure interoperability (CVE / CNVD);
   - licence-compliance case law ([GPL-CASE-LAW](GPL-CASE-LAW.md)).
3. **E3: neutral-foundation hosting rule.** Any EU-supported joint project with Chinese partners is hosted by an established open-governance foundation. A state-launched "alliance" is not acceptable. Members are screened against EU sanctions lists, which matters because several EU Russia packages list Chinese entities (B, not re-fetched).
4. **E4: reciprocal OSPO exchanges.** Run symmetric 1–2 week exchanges between EU and Chinese public-sector and university OSPOs on topics such as governance, licence compliance, maintainer funding and procurement. These are reviewed under the 2024 research-security Recommendation.
5. **E5: transparent evaluation of open weights.** EU-funded LLM programmes publish reproducible evaluations of Chinese open-weight base models before using them. This would make the de facto "Qwen-SEA-LION" pattern auditable.
6. **E2b: EU–ASEAN.** Propose an open-source item for the ASEAN-EU Digital Work Plan 2027 and for a Global Gateway SCOPE-Digital component. This would give ASEAN partners a jointly governed option beside the Chinese model-access offer.
7. **Russia: no adaptation; monitor instead.** Track the China–Russia expert committee and software mechanism (31st PM communiqué follow-up, 2027). Flag any project in which EU-hosted foundations could be asked to accept sanctioned entities through Chinese intermediaries.

---

## 8. Not verified, corrections, and open questions

**Corrections to the KAIYUANSHE leads (level C):**
- **Lead 1 (China–Russia, May 2024): confirmed (A)** in both the Chinese and the Russian text.
- **Lead 2a (MIIT "International AI Open Source Cooperation Initiative"):** the announcement is confirmed (C). Its release at WAIC 2025 is **not verified**.
- **Lead 2b (MOST China–ASEAN AI open-source community):** **partly confirmed (B).**
  - The MOST plan says "共建人工智能开源开放社区".
  - The body actually launched is a "China–ASEAN AI Open Source Alliance".
  - No community platform was found.
- **Lead 3 (WAIC action plan):** the 13 points are confirmed and point 5 is confirmed (A). **"China–ASEAN capacity building" is not in the text**; point 12 is generic. Correction.
- **Lead 4 ("co-builds communities with ASEAN"):** **not supported** by any delivered community found. It is an aspiration (C).

**Open questions:**
1. Membership, charter and repositories of the China–ASEAN AI Open Source Alliance. Next step: ask the Guangxi S&T Department and the China–ASEAN Technology Transfer Center.
2. Full texts of the MOST 2025–2027 plan, the ASEAN-China Digital Work Plan 2026 and Action Plan 2026–2030, and the ASEAN-EU Digital Work Plan 2026.
3. Whether the "China–ASEAN AI ministerial cooperation mechanism" (proposed September 2025) has met.
4. Dates and minutes of meetings of the China–Russia Communications and IT Subcommission AI Working Group, 2024–2026. The Russian text of the 30th and 31st communiqués (government.ru) was not fetched.
5. Licence of Qwen-SEA-LION-v4 and the Qwen3 base. Whether AISG's funding comes from the National Multimodal LLM Programme.
6. The openEuler-in-Africa lead (July 2024) and Huawei's OpenHarmony/openEuler work in the Middle East (opensourceforu, Nov 2025; not fetched).
7. The ChinaDaily claim that the 2026 ASEAN-China work plan includes "open-source technologies" exchanges is consistent with the ADGMIN statement (A). Concrete activities are unknown.
8. Mintsifry's primary decision on the national repository, and the GitHub 2022 restrictions. Both need a primary re-fetch.
9. Whether any EU member state already runs an open-source item in a bilateral China dialogue (cross-check the EU-CN-COOPERATION-MAP member-state rows).
