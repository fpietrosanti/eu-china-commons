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
