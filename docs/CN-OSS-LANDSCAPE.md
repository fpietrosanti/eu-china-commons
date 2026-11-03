# Chinese open-source landscape: most relevant and most used projects

Research note, 3 Nov 2026. Scope: (1) the most influential and most used open-source projects that originate in China, (2) how Chinese developers use their own code platforms (Gitee, AtomGit/GitCode) compared with GitHub. Evidence levels follow `docs/METHODOLOGY.md` §4. This note adds to the `industrial-stack` records in `data/catalogue-verified.json` (openEuler, OpenHarmony, OpenAnolis, XiangShan, PaddlePaddle, DeepSeek, Qwen, OpenAtom, AtomGit) and does not repeat them. Those projects appear below (marked *) only so the other rows can be ranked against them.

**Metric caveat.** Stars measure attention, not deployment. OpenRank (X-lab) measures collaboration influence from GitHub activity, so it under-counts work hosted on Gitee and AtomGit. Neither metric counts installs. We found no primary-source download or install figures in this pass; that gap is listed in §4.

Source keys:
- **[GH]** GitHub REST API `https://api.github.com/repos/{owner}/{repo}`, fetched 2026-11-03. Level A (we measured it on the platform).
- **[GE]** Gitee API v5 `https://gitee.com/api/v5/repos/{owner}/{repo}`, fetched 2026-11-03. `gvp`=true means the repo is a Gitee Most Valuable Project. Counts are level A; GVP is an editorial label from the platform.
- **[OD]** OpenDigger `https://oss.x-lab.info/open_digger/github/{owner}/{repo}/openrank.json`, 2024 annual value, fetched 2026-11-03. Level A (primary dataset; method by X-lab).
- **[COSR25]** *2025 China Open Source Annual Report* (KAIYUANSHE/开源社), published 22 Jun 2026. We read its tables as reported by IT之家, `https://www.ithome.com/0/968/251.htm`, fetched 2026-11-03. Level B: a press relay, and we have not yet read the original at https://kaiyuanshe.github.io/. It moves to A once we do.

## 1. Ranked table

How the table is ranked: global OpenRank first, from the COSR25 project and company tables, then OpenDigger 2024 values, then stars. Rows marked * are already in the catalogue.

| # | Project | Layer | Owner / governance | Licence | Usage metric (source, year, level) |
|---|---|---|---|---|---|
| 1 | OpenHarmony* | OS (IoT/mobile) | OpenAtom Foundation (Huawei-seeded) | Apache-2.0 (mostly) | OpenRank 60,089, **#1 project worldwide**, 6,487 developers [COSR25, 2025, B] |
| 2 | openEuler* | OS (server) | OpenAtom Foundation (Huawei-seeded) | MulanPSL-2.0 | OpenRank 16,258, #10 worldwide [COSR25, 2025, B]; Gitee openeuler/kernel is GVP [GE, 2026, A] |
| 3 | vLLM | AI inference | vllm-project (began at UC Berkeley; large Chinese contributor share) | Apache-2.0 | OpenRank 12,863, #12 worldwide [COSR25, B]; 3,609 in 2024 [OD, A]. Not Chinese-owned; listed because of its Chinese contributions (see F6) |
| 4 | PaddlePaddle* | AI framework | Baidu | Apache-2.0 | OpenRank 3,430 (2024) [OD, A]; 24,134 stars [GH, A] |
| 5 | Apache Doris | Analytics DB | ASF (began at Baidu; vendor SelectDB) | Apache-2.0 | OpenRank 3,360 (2024) [OD, A]; 16,174 stars [GH, A] |
| 6 | Dify | LLM app platform | LangGenius (company) | Modified Apache-2.0 (GitHub shows NOASSERTION) | 160,319 stars [GH, A]; OpenRank 2,364 (2024) [OD, A] |
| 7 | Ant Design | Frontend UI | Ant Group | MIT | 100,059 stars [GH, A]; OpenRank 1,683 (2024) [OD, A] |
| 8 | Milvus | Vector DB | LF AI & Data (vendor Zilliz) | Apache-2.0 | 46,572 stars [GH, A]; OpenRank 1,633 (2024) [OD, A] |
| 9 | TiDB | Distributed SQL DB | PingCAP | Apache-2.0 | 40,704 stars [GH, A]; OpenRank 1,562 (2024) [OD, A] |
| 10 | DeepSeek-V3 / R1* | AI models | DeepSeek (company) | MIT | 104,725 / 91,994 stars [GH, A]; DeepSeek has 3.8% of downloads of models above 1B parameters [COSR25, B] |
| 11 | Qwen* | AI models | Alibaba | Apache-2.0 (most sizes) | 27,704 stars on the Qwen3 repo [GH, A]; **20%** of downloads of models above 1B parameters, #2 after Meta (23.2%) [COSR25, B] |
| 12 | RAGFlow | LLM/RAG engine | InfiniFlow (company) | Apache-2.0 | 93,428 stars [GH, A]; OpenRank 595 (2024) [OD, A] |
| 13 | Apache ECharts | Visualisation | ASF (began at Baidu) | Apache-2.0 | 67,673 stars [GH, A]; OpenRank 461 (2024) [OD, A] |
| 14 | Vue.js | Frontend framework | Independent (Evan You; Chinese core team, community-funded) | MIT | 54,820 stars on vuejs/core [GH, A] |
| 15 | Apache Dubbo | RPC/microservices | ASF (began at Alibaba) | Apache-2.0 | 41,583 stars [GH, A]; OpenRank 472 (2024) [OD, A] |
| 16 | SGLang | AI inference | sgl-project (LMSYS; strong Chinese contributor base) | Apache-2.0 | 38,408 stars [GH, A]; OpenRank 549 (2024) [OD, A] |
| 17 | Arthas | Java diagnostics | Alibaba | Apache-2.0 | 37,607 stars [GH, A] |
| 18 | 1Panel | Server admin panel | FIT2CLOUD (company) | GPL-3.0 | 37,349 stars [GH, A]; FIT2CLOUD is #9 among Chinese companies by OpenRank, 4,946 [COSR25, B] |
| 19 | Nacos | Service discovery | Alibaba | Apache-2.0 | 33,496 stars [GH, A] |
| 20 | Apache APISIX | API gateway | ASF (vendor API7) | Apache-2.0 | 17,290 stars [GH, A]; OpenRank 558 (2024) [OD, A] |
| 21 | Apache RocketMQ | Messaging | ASF (began at Alibaba) | Apache-2.0 | 22,649 stars [GH, A]; OpenRank 426 (2024) [OD, A] |
| 22 | Sa-Token | Java auth library | Dromara community (Gitee-native) | Apache-2.0 | 49,536 Gitee stars, GVP [GE, A] |
| 23 | Pig | Spring Cloud admin scaffold | Individual / Gitee community | Apache-2.0 | 45,784 Gitee stars, 13,417 forks, GVP [GE, A] |
| 24 | RuoYi-Vue | Admin/back-office scaffold | Individual (y_project) | MIT | 43,265 Gitee stars [GE, A]; not GVP |
| 25 | Hutool | Java utility library | Dromara community | MulanPSL-2.0 | 24,357 Gitee stars, GVP [GE, A] |
| 26 | JeecgBoot | Low-code platform | JEECG (company) | Apache-2.0 | 18,505 Gitee stars [GE, A] |
| 27 | Layui | Frontend UI | Individual / community | MIT | 16,643 Gitee stars, GVP [GE, A] |
| 28 | MindSpore | AI framework | Huawei | Apache-2.0 | 9,075 Gitee stars, GVP [GE, A] |

Company-level reference points. The top five Chinese companies by OpenRank 2025 are Huawei 89,369 (#2 worldwide, 8,273 active repos), Alibaba 26,349, Ant Group 18,679, ByteDance 16,626 and Baidu 13,652. Next come PingCAP, Espressif, Tencent, FIT2CLOUD, DaoCloud, SelectDB, LobeHub, Zilliz, openKylin and StarRocks [COSR25, 2025, B].

## 2. Gitee vs AtomGit vs GitHub

| Platform | Claimed / measured size | Source, date | Level |
|---|---|---|---|
| GitHub (Chinese users) | >2.1 m active Chinese developers at end-2025, #3 worldwide after the US (5.08 m) and India (2.55 m) | COSR25 via ithome.com/0/968/251.htm, 2026-06 | B |
| All platforms (Chinese estimate) | >3.5 m Chinese developers once Gitee, AtomGit and GitCode are counted (#2 worldwide) | same | B (an estimate made inside the report) |
| Gitee | "14 million developers" (1400万的开发者) | https://gitee.com/about_us, fetched 2026-11-03 | C (self-reported) |
| AtomGit (merged with GitCode, Oct 2025) | 10.87 m developers at end-Apr 2026; "1000+ 万" at end-Feb 2026 | https://gitcode.csdn.net/6a6872d510ee7a33f2935e66.html (operator's monthly report); https://docs.gitcode.com/en/docs/help/home/aboutus/ | C (self-reported by the operator, CSDN) |
| Repo counts | No primary source found in this pass | - | gap |

Gitee and AtomGit report registered accounts (10–14 m). GitHub's figure (2.1 m) counts active developers. The definitions differ, so the numbers cannot be compared directly.

## 3. Findings

1. **Fact (B).** OpenHarmony is the #1 open-source project worldwide by OpenRank 2025 (60,089, about 1.5x Azure), and openEuler is #10. Both are OpenAtom Foundation projects seeded by Huawei. [COSR25]
2. **Fact (B).** Huawei is the #2 company worldwide by OpenRank 2025 (89,369), behind Microsoft (205,597), and has the most active repos (8,273) of any company in the global Top 15. The Chinese company layer is highly concentrated: Huawei alone scores more than the next four Chinese firms combined (75,305). [COSR25]
3. **Inference.** China's OpenRank weight comes mainly from state-aligned operating-system stacks hosted by foundations. The US list, by contrast, is led by developer-tooling and cloud projects. This matches the "OS + AI models" pattern recorded in `INDUSTRIAL-STACKS.md`.
4. **Fact (B).** Qwen has 20% of downloads of models above 1B parameters (Meta 23.2%, DeepSeek 3.8%). The report also says Chinese open models overtook US models in Hugging Face downloads in summer 2025, and that AI is the fastest-growing domain (repos growing more than 210% a year). [COSR25]
5. **Fact (A).** The China-originated projects with the most GitHub stars in Nov 2026 are AI application layers (Dify 160k, DeepSeek-V3 105k, RAGFlow 93k) and established frontend kits (Ant Design 100k, ECharts 68k). [GH]
6. **Fact (B) + inference.** Chinese-led projects draw mostly on Chinese contributors: 79.14% of contributions to China-led projects come from inside China, against 38.21% domestic contributions for US-led projects. China ranks 10th for internationalisation. Inference: EU contributors have few working ties to these projects. That limits how far EU actors can help govern Chinese commons, and the same holds in the other direction. [COSR25]
7. **Fact (A) + inference.** The most-starred Gitee-native projects (Sa-Token, Pig, RuoYi-Vue, Hutool, JeecgBoot) are Java back-office scaffolds and enterprise utilities, with very high fork counts (Pig: 13,417 forks). Inference: Gitee is where Chinese enterprise and government-contractor application development happens. GitHub-based OpenRank does not see this layer. [GE]
8. **Fact (A).** Many flagship infrastructure projects of Chinese origin have been donated to the Apache Software Foundation (Doris, ECharts, Dubbo, RocketMQ, APISIX, ShardingSphere). Their governance is therefore foreign or neutral even where the main vendor is Chinese. At project level, this is the main existing channel for commons shared between the EU and China (see catalogue record `xx-apache-china-projects`). [GH]

## 4. Gaps / next steps
- Read the KAIYUANSHE 2024 and 2025 reports directly (kaiyuanshe.github.io; hackmd.io/@2024COSR) to raise COSR25 to level A and add its Top lists of Chinese projects by domain.
- Not fetched in this pass (budget): the full Gitee GVP list, the Gitee annual report, the AtomGit G-Star list, the CAICT open-source white paper and the OSCHINA yearly top projects.
- Find install/download metrics (Maven Central, npm, PyPI, Hugging Face) for rows 4–28.
