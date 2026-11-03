# Chinese open-source foundations and bodies: governance, priorities, finances

Research note, 2026-11-03. Evidence levels per METHODOLOGY.md §4. Self-reported figures are C unless they come from an official filing.

## 1. OpenAtom Open Source Foundation (开放原子开源基金会)
- **Governance.** National non-profit foundation, founded June 2020, registered with the Ministry of Civil Affairs, supervised by **MIIT**. Founding donors: Alibaba, Baidu, Huawei, Inspur, Qihoo 360, Tencent, China Merchants Bank. Donors sit in four tiers. Sources: https://huanqiu.com/article/45RxvLVHOas (B); https://baike.baidu.com/item/%E5%BC%80%E6%94%BE%E5%8E%9F%E5%AD%90%E5%BC%80%E6%BA%90%E5%9F%BA%E9%87%91%E4%BC%9A/53481350 (C).
- **Information disclosure.** Annual work reports for 2020–2023 are listed at https://openatom.cn/information/work (A, page). The 2022 and 2023 PDFs are **image-only scans**: pdftotext returned no text. We need OCR before we can extract the financials. We found no 2024 or 2025 report on that page.
- **Finances.**
  - More than **CNY 600 million raised cumulatively since 2020**. Xinhua, 25 Jun 2026, https://www.news.cn/info/20260625/a9b84c78ac8946c6a7e37bbae91513af/c.html. Self-reported via press: **C**.
  - **198 donor organisations**, of which 55 are platinum, gold or silver. 9 new unrestricted donors in 2026. 12 project donations renewed (same source, C).
  - We found no audited breakdown of income or spending.
- **Projects.**
  - 2020: 7 founding projects, including OpenHarmony and XuperChain. https://zhuanlan.zhihu.com/p/234694705 (C)
  - Jul 2025: more than 60 projects passed TOC admission, 41 in incubation, 8 newly donated (AI, embodied intelligence, blockchain). http://www.news.cn/sci-tech/20250725/fad2cf09702c410985ce5318d5c587cf/c.html (B)
  - 2025 report: 52 projects in incubation. **OpenHarmony and openEuler graduated.** OpenHarmony: more than 10k contributors, more than 1,500 certified products. openEuler: more than 24k contributors, more than 16m installs. https://dpiche.com/index/archives/81.html (third-party relay of the report, C)
  - Jun 2026: 58 projects in 18 fields. 6 new projects: xLLM, JoySafety, openSupOS, OpenLET, 电鸿 IoT OS, LoongArch binary translator. Mulan licence family donated (Mulan PSL v2 is OSI-approved; reported in use by more than 330k projects). Xinhua 2026 (B)
- **Priorities by year.**
  - 2020–22: OS, blockchain, basic software.
  - 2024: developers + academia (首届开源技术学术大会).
  - 2025: "全栈协同"; AI, quantum, BCI, embodied intelligence.
  - 2026: AI agents, LoongArch/chips, robotics, industrial control.
- **Other output.** 《中国开源发展深度报告（2025）》, compiled by the OpenAtom secretariat, June 2025: https://www.163.com/dy/article/L0J5CCN50511B8LM.html (B)

## 2. KAIYUANSHE (开源社)
- **Governance.** A volunteer community founded in 2014, with an elected board (理事会), working groups and a finance group. We found no registered legal entity or 年检 record (verify). Funding comes from corporate sponsorship of COSCon plus small donations. Source: 2021 annual report https://kaiyuanshe.github.io/document/kys-report-2021/2021%20%E5%BC%80%E6%BA%90%E7%A4%BE%E5%B9%B4%E5%BA%A6%E6%8A%A5%E5%91%8A.pdf (A for the text; figures C).
- **FY2021 finances** (self-reported, C):

| Item | CNY |
|---|---|
| Carry-forward from FY20 (bank 409,247 + Alipay 20,414) | 429,661 |
| Sponsorship programme | 556,000 (of which 312,000 pending) |
| Public donations | 43,000 |
| COSCon tickets | 5,062 |
| **Total income** | **604,062** |
| COSCon'21 conference costs | 173,927 |
| COSCon reimbursements | 59,729 (statement) / 65,353 (finance-group text) |
| Azure subscription | 16,069 |
| Operations / tax / fees | 14,685 |
| COSCon'21 sponsorship receivable | 868,000 (676,000 received) |
| Foreign donation | Near Foundation, USD 6,246 |

  The report itself flags missing reimbursement rules; budgeting was planned for 2022.
- **Priorities.** COSCon, the 中国开源年度报告 (published since 2015), open-source education, open-source risk governance, international links (ASF, Near). See COSCON-THEMES.md.
- **Gap.** We have not yet fetched the FY2022–FY2025 annual reports. They are probably at kaiyuanshe.github.io/document/kys-report-20XX/.

## 3. COPU (中国开源软件推进联盟, China OSS Promotion Union)
- **Governance.** An industry alliance chaired by **Lu Shouqun (陆首群)**, who runs regular meetings (例会). Vice-chair Liu Peng (刘澎). Members: companies, universities and institutes. Sources: https://cosspu.org.cn/osinfo/shownews.php?id=277 (A, minutes 2025-07-08); http://copu-oss.org.cn/download/ (A).
- **Output.**
  - The annual **中国开源发展蓝皮书** (2021–2025), compiled by the Beijing Open Source Innovation Committee with CSDN, OpenAtom, CCID, ISCAS and others, published on GitCode: https://gitcode.net/COPU/2023 , https://gitcode.com/choss_skw/2025book (A).
  - 《2024中国开源发展现状》, released 2025-02-13 (A, download page).
  - Liu Peng's 2022 claim that China is "near world level in some fields": https://blog.csdn.net/csdnopensource/article/details/125943982 (B).
- **Finances.** Nothing public found (gap).

## 4. CCF ODC (CCF开源发展委员会)
- A committee of the China Computer Federation. It reportedly focuses on academic open source (GitLink platform, 开源之夏 summer programme). We could not verify the founding date or chair this pass: **D, lead only**.

## 5. CAICT, LF APAC/China, OSCHINA/Gitee
- CAICT and Gitee/OSCHINA are already registered in data/stakeholders.json; nothing new this pass. LF APAC/China was not researched (budget).

## 6. Comparison

| Body | Type | Controller / funder | Money (best figure) | Flagship output | Ev. |
|---|---|---|---|---|---|
| OpenAtom | public foundation, MIIT-supervised | big-tech donors (Huawei, Alibaba, Tencent…) + state guidance | more than CNY 600m raised 2020–mid-2026 | OpenHarmony, openEuler (graduated); 58 projects | C (money), B (projects) |
| KAIYUANSHE | volunteer community | corporate COSCon sponsors | CNY 0.60m income (FY21) | COSCon, 中国开源年度报告 | C |
| COPU | industry alliance | members | n/a | 中国开源发展蓝皮书 | A (outputs) |
| CCF ODC | professional-society committee | CCF | n/a | 开源之夏, GitLink | D |
| CAICT | MIIT think tank | state | n/a | OSCAR certification, white papers | B (registry) |

## 7. Findings
1. **FACT (C/B).** OpenAtom holds most of the money in Chinese open source. The roughly CNY 600m it reports for 2020–26 is about 1,000 times KAIYUANSHE's CNY 0.6m FY21 income.
2. **FACT (B).** OpenAtom's portfolio follows industrial-policy priorities: OS, LoongArch, chips, embodied AI, industrial control. Its 2026 conference coverage does not mention international cooperation.
3. **FACT (A).** KAIYUANSHE is the community-side actor with international ties: it co-ran COSCon'20 with the ASF and received a Near Foundation donation in 2021. It publishes detailed but unaudited finances.
4. **FACT (B).** OpenAtom now stewards the Mulan licence family, which includes the OSI-approved Mulan PSL v2. That makes it a concrete counterpart for EU licence work (EUPL compatibility).
5. **INFERENCE.** Disclosure is weak. OpenAtom's work reports are scanned images and stop at 2023 online, which limits verifiable comparison. Next steps: OCR, and the 民政部 慈善中国 / 社会组织 registry from a CN IP.
6. **INFERENCE.** For EU–China cooperation, the low-risk entry points are community and academic: KAIYUANSHE/COSCon and CCF ODC 开源之夏 alongside EU OSPO networks and Eclipse/ASF. Engaging OpenAtom means engaging an MIIT-supervised industrial-policy vehicle, which needs economic-security screening.
7. **INFERENCE.** Both sides have converged on AI open source (COSCon'25 "Open Intelligence"; OpenAtom's AI-agent datasets). That makes open-source AI governance and licensing the likeliest shared agenda.

## 8. Open items
- OCR the OpenAtom 2020–2023 work-report PDFs (copies on the server at /tmp/oa).
- Fetch KAIYUANSHE reports for 2022–2025.
- Verify CCF ODC.
- Check the Ministry of Civil Affairs 年检 records.

### Update 3 Nov 2026 — OpenAtom statutory annual work reports (OCR)
Source: OpenAtom 2022 and 2023 年度工作报告 (annual-inspection filings to the Ministry of Civil Affairs, from the foundation's disclosure page; scanned PDFs, OCR with tesseract chi_sim, text in sources/ocr/). Evidence **A** (official filing; OCR, figures to be re-read on the image before publication).
| Year | Donation income (yuan) | of which domestic | foreign donations |
|---|---|---|---|
| 2022 | 63,690,000 | 63,690,000 | 0 |
| 2023 | 75,502,000 | 75,502,000 | 0 |
- 2023 board items include a 20.3M-yuan budget adjustment for the foundation's funding-service centre and 3.689M yuan (Sep–Dec) for OpenHarmony CI/CD infrastructure.
- **Fact:** OpenAtom's donation income is 100% domestic in both years. **Inference:** this contrasts with the Xinhua "¥600M+ since 2020" figure (C): the two filed years total ~¥139M, so the cumulative claim needs the 2020–2021 and 2024–2025 filings to be checked.

## OpenAtom: funding and openness (3 Nov 2026)

**Sources.** OpenAtom's statutory 年度工作报告 (annual-inspection filings to the Ministry of Civil Affairs, printed from zwxt.mca.gov.cn) for 2020, 2021, 2022 and 2023. All four are image-only PDFs on https://openatom.cn/information/work. We ran OCR on the server (pdftoppm -r 200, tesseract chi_sim+eng). The text is in `sources/ocr/openatom-20{20,21,22,23}-work-report.ocr.txt`. Each year's totals were cross-checked: income minus expenses equals the change in net assets, or the sub-items add up to the stated total. Evidence is **A (OCR)**: the figures must be re-read on the page image before publication. **No 2024 or 2025 report is published** on the disclosure page (checked 3 Nov 2026). The 慈善中国 and chinanpo.mca.gov.cn search pages are JS-only and were not reachable from our hosts. Coverage gap: 2024–2025.

### Finances by year (CNY)
| Year | Donation income | of which foreign | Government subsidy (政府补助收入) | Total income | Total expenditure | Charitable activities (业务活动成本) | Admin (管理费用) | Net assets, year end | Source / evidence |
|---|---|---|---|---|---|---|---|---|---|
| 2020 | 16,000,000 | 0 | 1,456,763 | 17,531,494.85 | 3,386,033.76 | 2,208,431.49 | 1,177,028.30 | 44,145,461.09 ¹ | 2020 report, A (OCR) |
| 2021 | 68,450,000 (53.10M unrestricted + 15.35M restricted) | 0 | 1,456,763 ² | 70,465,264.92 | 31,296,042.86 | 27,919,888.62 | 3,374,436.53 | 83,314,683.15 | 2021 report, A (OCR) |
| 2022 | 63,690,000 (42.20M + 21.49M) | 0 | 0 | 72,364,884.54 (incl. 6.96M service income) | 38,793,773.53 | 35,034,978.56 | 3,758,794.97 (9.69%) | 116,885,794.16 | 2022 + 2023 reports, A (OCR) |
| 2023 | 75,502,000 (32.10M + 43.40M) | 0 | **20,700,000** (0.5M + 20.2M restricted) | 110,098,426.47 (incl. 10.85M service income) | 97,508,167.59 | 93,651,438.85 | 3,848,502.21 (3.95%) | 130,293,367.61 (balance sheet; the income statement implies 129,476,053) | 2023 report, A (OCR) |
| 2024–2025 | not published | – | – | – | – | – | – | – | gap |
| **2020–23** | **223,642,000** | **0** | **23,613,526** | **270,460,071** | **170,983,018** | | | | |

¹ Includes about CNY 30M paid in at founding (cash flow: "other operating receipts" of 30.07M in 2020); this is the 原始基金. ² The same figure appears in both 2020 and 2021, and both years' income totals add up with it. The duplication may be real or an OCR artefact; check on the image.

**Named donors (large-donation tables, partial).**
- 2020: Huawei Technologies 6.0M; Hangzhou Qulian (趣链) 3.0M, both unrestricted. Related-party pages list Baidu and Inspur among the founders and main donors.
- 2021: of 11.2M listed, JD (Chongqing) 1.0M and Shenzhen Kaihong Digital (深开鸿) 3.5M were earmarked for OpenHarmony.
- 2022: openEuler-earmarked donations from 湖南麒麟信安 3.0M, 江苏润和 1.0M and others. Event sponsorship: Intel (China) and others for the 2022 summit.
- 2023: Huawei Device 15.772M; Huawei Technologies 12.08M; ChinaSoft International 8.1M. These listed donations total 35.952M, 48% of the year's donations. Related-party pages list Tencent Cloud, Huawei and Qihoo 360.
- Alibaba, Tencent, Baidu and ByteDance amounts are not itemised in the OCR text. They are under the large-donation threshold or illegible.

**Spending by project.**

2022: 5 projects, 17,374,112.86 in total.

| Project | 2022 |
|---|---|
| OpenHarmony | 9,400,545.01 |
| openEuler | 1,044,036.85 |
| Brand events ("一赛两会": contest, summit, developer conference) | 2,176,224.35 |
| Open-source legal and licence translation (源译识) | 1,951,879.10 |
| Community and ecosystem support | 2,801,426.06 |

2022 large payments:
- OpenHarmony code-hosting fees: 1.63M.
- OpenHarmony item (payee illegible): 3.64M, 10.4% of charitable spending.
- OpenHarmony development boards: 0.40M.
- openEuler → **The Linux Foundation**: about 1.48M (4.22%; purpose illegible).

2023 (8 projects, 93,651,438.85 in total):

| Project | Income | Expenditure | Classification |
|---|---|---|---|
| OpenHarmony | 29,022,000 | 25,827,120.37 | OSS-specific (infra, CI/CD, hosting) |
| openEuler | 12,180,000 | 8,650,200.03 | OSS-specific (IT infra; venue hire 2.86M) |
| 开源项目生态培育平台 (ecosystem cultivation platform) | 20,200,000 (= the government subsidy) | 9,170,572.70 | mixed: compatibility testing, licence system, training, hosting |
| 2023 Global Open Source Summit | 5,379,245.16 | 8,836,375.48 | events/promotion |
| 开放原子开源大赛 (competition) | 4,716,981.15 | 5,621,397.54 | events/talent |
| 开放原子校源行 (campus programme) | 2,000,000 | 3,445,786.10 | talent/education |
| Developer conference | 0 | 4,585,918.69 | events |
| Other open-source public-interest (culture, legal, research, 1024 day, vulnerability sharing) | 0 | 27,514,067.94 | mixed |

2023 large payments (20.56M, 21%):
- **Huawei Cloud services for OpenHarmony: 6,485,400.**
- OpenHarmony code hosting: 1.65M.
- Event agency 中青旅联科: 5.91M + 2.24M.
- CCTV.com promotion: 1.42M.
- China National Convention Center (openEuler): 2.86M.

**Rough classification of 2023 spending.**
- About 47% was directly open-source-specific engineering and infrastructure (OpenHarmony, openEuler, ecosystem platform).
- About 24% was events, competitions and campus programmes.
- About 29% went to "other public-interest" activity, mixed.
- Admin was 3.95% of total expenditure.

**Reconciliation with Xinhua's "¥600M+ raised since 2020" (C).** The filed donations for 2020–23 total ¥223.6M; total income is ¥270.5M. Reaching ¥600M by mid-2026 would need about ¥330M more in 2024 to mid-2026, roughly ¥130M a year. That is possible if 2023's growth continued, but no filing supports it. The figure may also count pledges or project donations booked elsewhere, such as the Shenzhen service centre.

### Projects × licence (repos linked from https://openatom.cn/projects, checked 3 Nov 2026 via GitHub/Gitee APIs and LICENSE headers)
OSI column: Y = OSI-approved licence. Apache-2.0, MIT, BSD-3-Clause, GPL-2.0/3.0 and MulanPSL-2.0 are all OSI-approved. MulanPSL-2.0 is confirmed at https://opensource.org/license/mulanpsl-2-0 and in the SPDX list (isOsiApproved: true). MulanPSL-1.0 and the Mulan Public License (MulanPubL) are **not** OSI-approved.

| Project | Status | Licence (main repo) | OSI | Repo | Closed / commercial counterpart |
|---|---|---|---|---|---|
| OpenHarmony | graduated | Apache-2.0 (most); kernel GPL-2.0 / BSD; docs CC-BY-4.0 | Y | atomgit.com/openharmony | **HarmonyOS / HarmonyOS NEXT (Huawei) is proprietary**; OpenHarmony XTS compatibility certification is a brand/certification programme |
| openEuler | graduated | MulanPSL-2.0 (community); packages keep upstream licences (kernel GPL-2.0) | Y | atomgit.com/openeuler | commercial distros (Kylin Advanced Server, UOS, Huawei EulerOS…) are proprietary/subscription |
| XuperCore / XuperChain | incubating | Apache-2.0 | Y | github.com/OpenAtomFoundation/xupercore | Baidu commercial chain |
| AliOS Things | incubating | Apache-2.0 | Y | github.com/alibaba/AliOS-Things | |
| Pika / PikiwiDB | incubating | BSD-3-Clause | Y | github.com/OpenAtomFoundation/pikiwidb | |
| TencentOS Tiny | incubating (2020 founding project) | BSD-3-Clause (upstream, not re-checked) | Y | github.com/Tencent/TencentOS-tiny | |
| UBML | incubating | Apache-2.0 | Y | gitee.com/ubml | Inspur commercial low-code |
| Vearch | incubating | Apache-2.0 | Y | github.com/vearch/vearch | |
| SmartIDE | incubating | GPL-3.0 | Y | gitee.com/smartide | |
| OpenKona (Tencent Kona JDK) | incubating | GPL-2.0 with Classpath exception (OpenJDK) | Y | github.com/Tencent/TencentKona-11 | |
| GreatSQL | incubating | GPL-2.0 (MySQL fork) | Y | gitee.com/GreatSQL/GreatSQL | |
| IvorySQL | incubating | Apache-2.0 | Y | github.com/IvorySQL/IvorySQL | |
| OpenTenBase | incubating | BSD-style Tencent notice (custom header; verify) | ? | atomgit.com/opentenbase-org/OpenTenBase | |
| Onps (open-npstack) | incubating | Apache-2.0 | Y | gitee.com/Neo-T/open-npstack | |
| openInula | incubating | MulanPSL-2.0 | Y | gitee.com/openInula/inula | |
| OpenNJet | incubating | MulanPSL-2.0 | Y | gitee.com/njet-rd/njet | |
| Tongsuo (铜锁) | incubating | Apache-2.0 | Y | github.com/Tongsuo-Project/Tongsuo | |
| Kurator | incubating | Apache-2.0 | Y | github.com/kurator-dev/kurator | |
| CrowdOS | incubating | Apache-2.0 | Y | github.com/crowdosNWPU/CrowdOS | |
| LLMOne | incubating | MulanPSL-2.0 | Y | github.com/EM-GeekLab/LLMOne | |
| xLLM | incubating (2026) | Apache-2.0 | Y | github.com/xLLM-AI/xllm | |
| JoySafety (JD) | incubating (2026) | Apache-2.0 (SPDX header) | Y | github.com/JoySafety/JoySafety | |
| LoongArch binary translator (LAT) | incubating (2026) | GPL-2.0 (QEMU-derived) | Y | github.com/lat-opensource/lat | |
| Dora SSR | incubating | MIT | Y | github.com/IppClub/Dora-SSR | |
| hap.js (quick apps) | incubating | Apache-2.0 | Y | github.com/hapjs-platform/hapjs | |
| RT-Thread Nano | incubating | Apache-2.0 | Y | github.com/RT-Thread/rtthread-nano | RT-Thread commercial editions |
| Kaiwu PyTorch plugin (QBoson, quantum) | incubating | Apache-2.0 | Y | github.com/qboson/kaiwu-pytorch-plugin | Kaiwu SDK / quantum hardware access is closed (inference) |
| go-iot-platform | incubating | Apache-2.0 | Y | github.com/iot-ecology/go-iot-platform | |
| TOMs (Ganwei) | incubating | MIT | Y | github.com/ganweisoft/TOMs | |
| zettastor DBS | incubating | Apache-2.0 | Y | github.com/zettastor/dbs | |
| RoarLang | incubating | Apache-2.0 | Y | gitee.com/roarlang/roarlang | |
| miniblink57 | incubating | BSD-3-Clause | Y | gitee.com/OpenAtom-Admin/miniblink57 | |
| OpenCloudOS | incubating | GPL-2.0 (kernel) | Y | gitee.com/OpenCloudOS | Tencent commercial TencentOS Server |
| openKylin | incubating/hosted | GPL-3.0 (sample: ukui-menu) | Y | gitee.com/openkylin | **Kylin OS commercial editions are proprietary** |
| Cantian (openEuler sub-project) | – | GPL-2.0 | Y | gitee.com/openeuler/cantian | |
| Mobius (LLM), HaiRuo-72B-Health, GeniusAI, M-Robots, NXROS, OpenLoong, 电鸿 IoT OS, Open supOS, OpenLET, KWDB, linyaps, BlueOS (vivo), OpenWuyue, OurBMC, OpenBlock, Anolis… | incubating / listed | **not verified in this pass**; model projects (Mobius, HaiRuo) may use model licences that are not OSI | ? | see openatom.cn/projects | e.g. supOS commercial edition vs community edition |

### Findings
1. **FACT (A, OCR).** OpenAtom's filed income for 2020–23 is ¥270.5M. Of this, ¥223.6M was donations, all from Chinese companies, with **zero foreign donations in every year**. Spending rose from ¥3.4M (2020) to ¥97.5M (2023). Net assets were about ¥130M at end-2023. No filing exists for 2024–25.
2. **FACT (A, OCR).** OpenAtom also receives **government money**: a ¥1.46M subsidy in 2020 and in 2021, and **¥20.7M in 2023**, of which ¥20.2M was restricted to the 开源项目生态培育平台 (ecosystem cultivation platform). The filings do not name the granting body; MIIT is likely (inference). This is the only part of OpenAtom's income that belongs in public-funding totals.
3. **FACT (A, OCR).** OpenAtom is financially a **Huawei-anchored** vehicle. In 2023, Huawei Device and Huawei Technologies gave ¥27.85M, 37% of all donations. OpenHarmony took 28% of charitable spending, and ¥6.49M of it was paid to **Huawei Cloud**. **INFERENCE:** part of the donated money flows back to the donor as cloud-service revenue. Related-party disclosure covers this, but it is not arm's-length.
4. **FACT (A, OCR).** Roughly half of 2023 charitable spending went to open-source engineering and infrastructure (OpenHarmony, openEuler, the platform). About a quarter went to events, competitions and campus/talent programmes, which promote "open source" but produce no code. Admin overhead is low (3.95%).
5. **FACT (B, repo check).** Every OpenAtom project we checked (35 repos) is published under an OSI-approved licence: Apache-2.0, MulanPSL-2.0, MIT, BSD-3, or GPL-2.0/3.0. MulanPSL-2.0 is OSI-approved. MulanPSL-1.0 and MulanPubL are not, and we found no OpenAtom project using them. Licences for model and robotics projects (Mobius, HaiRuo, OpenLoong…) remain unchecked.
6. **INFERENCE.** "Open source" applies to OpenAtom's **upstream code, not to the products it feeds**:
   - HarmonyOS NEXT is proprietary on top of OpenHarmony.
   - Commercial Kylin, UOS and EulerOS distributions are sold on top of openEuler and openKylin.
   - XTS certification and OpenHarmony device certification are brand and compatibility programmes, not code.
   - The foundation funds the open commons that national-champion commercial stacks depend on.
7. **INFERENCE: classification for data/funding.** Donation records are private corporate philanthropy. Keep them as `instrument_type: donation`, `summable: false`, and exclude them from the government total. They can be shown as a separate "private/foundation OSS funding" line. The **2023 ¥20.7M government subsidy** is public, disbursed and OSS-specific. Record it as a grant via an intermediary (OpenAtom), but leave it `summable: false` until the granting body and the OCR figure are verified on the image. OpenHarmony adoption subsidies (Shenzhen etc.) are recorded separately and must not be double-counted with this.
8. **INFERENCE.** The ¥600M+ Xinhua figure (C) cannot be reconciled with the filings for 2020–23 (¥270M in income). It should be cited only as "reported by Xinhua". Next step: get the 2024/2025 年检 filings from chinanpo.mca.gov.cn via a CN-IP browser.
