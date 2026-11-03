# How major open-source projects are funded — Europe vs China

*3 Nov 2026. 34 projects (18 Chinese or Chinese-origin, 16 European). Data: `data/project-funding.json`. Every channel claim is labelled fact or inference, with an evidence level (docs/METHODOLOGY.md §4).*

> Open-source research from public sources; incomplete and correctable. Contribute: GitHub issues (label `funding-data`) or the observatory e-mail (TODO).

## Method
- Channels per project: (a) employer-paid developers, (b) foundation budget, (c) public grants, (d) corporate sponsorship/membership, (e) commercial model, (f) individual donations.
- Reused, not re-researched: OpenAtom 2021–23 accounts (docs/CN-FOUNDATIONS.md), local subsidies (data/funding/cn.json), STF/NGI/EuroHPC/KDE/TDF records (data/funding/eu.json).
- New in this pass: Open Collective GraphQL amounts (curl, Ant Design, KubeSphere), Sovereign Tech Fund per-project amounts (curl, OpenSSL, KDE), OpenDigger contributor activity (Apache Doris).
- Contributor affiliation is mostly **inference** (C/B) from project ownership; a systematic OpenDigger/Gitee affiliation pass is still to be done.

## Summary table
| Project | Origin | Host | Dominant channel | Top funder | Funder nationality | Public money | Evidence |
|---|---|---|---|---|---|---|---|
| OpenHarmony | CN | OpenAtom Foundation (MIIT-supervised); code donated by Huawei | corporate (Huawei) via OpenAtom + local adoption subsidies | Huawei | CN | yes | A |
| openEuler | CN | OpenAtom Foundation (since 2021); originated at Huawei (EulerOS) | corporate (Huawei) employer-developers + OpenAtom | Huawei | CN | yes | B |
| OpenAnolis / Anolis OS | CN | OpenAnolis community led by Alibaba Cloud (OpenAtom-listed) | corporate (Alibaba Cloud) | Alibaba | CN | no | C |
| OpenCloudOS | CN | OpenCloudOS community led by Tencent | corporate (Tencent) | Tencent | CN | no | C |
| PaddlePaddle | CN | Baidu (company project) | corporate (Baidu) | Baidu | CN | yes | B |
| MindSpore | CN | Huawei (company project) | corporate (Huawei), hardware-driven | Huawei | CN | yes | B |
| Qwen (open-weight LLMs) | CN | Alibaba Cloud (Tongyi Lab) | corporate (Alibaba) | Alibaba | CN | no | B |
| DeepSeek (open-weight LLMs) | CN | DeepSeek (Hangzhou), owned by High-Flyer quant fund | corporate (High-Flyer) | High-Flyer | CN | no | B |
| Apache Doris | CN-origin | Apache Software Foundation (donated by Baidu) | employer-developers (VeloDB) | VeloDB/SelectDB | CN | no | B |
| Apache ECharts | CN-origin | ASF (donated by Baidu) | employer-developers (Baidu, declining) | Baidu | CN | no | C |
| Apache Dubbo | CN-origin | ASF (donated by Alibaba) | corporate (Alibaba) | Alibaba | CN | no | B |
| Apache RocketMQ | CN-origin | ASF (donated by Alibaba) | corporate (Alibaba) | Alibaba | CN | no | B |
| Apache APISIX | CN-origin | ASF (donated by API7.ai, Shenzhen) | employer-developers (API7.ai) | API7.ai | CN | no | B |
| TiDB | CN | PingCAP (company); TiKV donated to CNCF | corporate (PingCAP, VC) | PingCAP | CN (+ foreign investors) | no | B |
| Dify | CN-origin | LangGenius Inc. (company) | corporate (LangGenius, VC) | LangGenius | CN | no | B |
| XiangShan (RISC-V CPU) | CN | Institute of Computing Technology, CAS + Beijing Institute of Open Source Chip (BOSC) | public (CAS + Beijing) with corporate members | CAS / Beijing municipality | CN | yes | B |
| Ant Design | CN | Ant Group (company) | corporate (Ant Group) | Ant Group | CN | no | A |
| KubeSphere | CN | QingCloud (company) | corporate (QingCloud) | QingCloud | CN | no | B |
| Eclipse SDV / Tractus-X (Catena-X) | EU | Eclipse Foundation AISBL (Brussels) | employer-developers across automakers + working-group fees | Bosch / SAP / BMW (multi) | DE | yes | B |
| Sovereign Cloud Stack | EU | OSBA (Open Source Business Alliance, DE); now Forum SCS | public grant (German BMWK) | German federal government | DE | yes | B |
| Nextcloud | EU | Nextcloud GmbH (Stuttgart) | commercial subscriptions (Nextcloud GmbH) | Nextcloud GmbH | DE | yes | B |
| LibreOffice / The Document Foundation (+ Collabora Online) | EU | The Document Foundation (Stiftung, Berlin); Collabora Productivity (UK) | individual donations (TDF) + employer-developers (Collabora) | individual donors / Collabora | DE / UK | yes | B |
| Open-Xchange (OX App Suite, Dovecot, PowerDNS) | EU | Open-Xchange AG (DE), private-equity owned | commercial (ISP licences) | Open-Xchange AG | DE (PE owners) | yes | C |
| OpenEuroLLM / EuroLLM | EU | Consortium of 20+ EU organisations; EuroLLM: Unbabel, IST Lisbon, Edinburgh and others | public grant (EU) | European Commission | EU | yes | A |
| Mistral open-weight models | EU | Mistral AI SAS (Paris) | commercial + VC | Mistral AI (investors incl. ASML) | FR (investors NL/US) | no | B |
| VLC / VideoLAN | EU | VideoLAN (French non-profit association); VideoLabs SAS | employer-developers (VideoLabs consulting) + volunteers | VideoLabs | FR | yes | C |
| Matrix / Element | EU | Matrix.org Foundation (UK CIC) + Element (New Vector Ltd, UK) | commercial (Element government contracts) | Element | UK | yes | B |
| KDE | EU | KDE e.V. (Berlin) | individual donations + STF grant + dispersed employers | Sovereign Tech Fund (single largest identified) | DE / global | yes | A |
| Qt | EU | The Qt Company (Helsinki, listed) | commercial dual licensing | The Qt Company | FI | no | A |
| SUSE / openSUSE | EU | SUSE S.A. (Luxembourg; EQT-owned); openSUSE Project | commercial subscriptions (SUSE) | SUSE (owner EQT, Sweden) | LU / DE (owner SE) | no | B |
| curl | EU | Daniel Stenberg (SE), employed by wolfSSL | employer (wolfSSL support) + donations + STF | wolfSSL / Open Collective donors | SE / US | yes | A |
| GnuPG | EU | g10 Code GmbH (Düsseldorf) | German public-sector licences (VS-Desktop) | German administration | DE | yes | B |
| OpenSSL | EU | OpenSSL Foundation (US) + OpenSSL Corporation (CH) | support contracts + sponsors (mixed) | OpenSSL Corporation customers | CH / US / DE | yes | A |
| RISC-V: DARE / OpenHW (CORE-V) | EU | DARE: EuroHPC JU consortium (coord. BSC); OpenHW Foundation under Eclipse Foundation | public grant (EuroHPC) + member employer-developers | EuroHPC JU / EU | EU | yes | A |

## Hard numbers found (fact, A/A-v)
| Project | Figure | Source |
|---|---|---|
| OpenHarmony | OpenAtom spending 2023 ¥25.83M, of which ¥6.49M to Huawei Cloud; Huawei = 37% of OpenAtom donations | OpenAtom 2023 report (CN-FOUNDATIONS.md) |
| openEuler | OpenAtom spending 2023 ¥8.65M | idem |
| curl | Open Collective US$498,859 all-time (yearly ~US$91k); STF €195,000 | opencollective.com/curl; sovereign.tech |
| OpenSSL | STF €405,888 | sovereign.tech |
| KDE | STF €1,285,200; patrons €67,378 (2024) | sovereign.tech; ev.kde.org |
| LibreOffice/TDF | TDF income €2.18M (2025) | TDF annual report |
| OpenEuroLLM | €20.6M EU envelope | digital-strategy.ec.europa.eu |
| DARE (RISC-V) | €120M EuroHPC envelope | eurohpc-ju.europa.eu |
| Ant Design | Open Collective US$18,412 all-time | opencollective.com |
| KubeSphere | Open Collective US$0 | opencollective.com |

## EU vs CN patterns — findings
1. **FACT (A).** The two Chinese state-flagship projects (OpenHarmony, openEuler) are financed through one channel stack: an anchor company (Huawei) that writes the code, OpenAtom as foundation budget (itself 37% Huawei-funded in 2023), and local adoption subsidies that pay *users* to deploy them. Part of the foundation money returns to the donor (¥6.49M to Huawei Cloud).
2. **INFERENCE (B).** Every other Chinese project in the sample is single-company: Alibaba (Qwen, Dubbo, RocketMQ, Anolis), Baidu (Paddle, ECharts), Tencent (OpenCloudOS), Ant (Ant Design), PingCAP, API7, LangGenius, QingCloud, High-Flyer (DeepSeek). Concentration on the top funder is near-total.
3. **FACT (A/B).** Chinese projects show almost no individual-donation channel: Ant Design ~US$18k all-time, KubeSphere US$0, none for the others found. curl alone collected US$499k on Open Collective.
4. **INFERENCE (B).** Chinese-origin Apache projects (Doris, ECharts, Dubbo, RocketMQ, APISIX) use the ASF for neutral governance and global reach, but the money is still the founding Chinese company or its VC-funded spin-off; the ASF pays no developers.
5. **FACT/INFERENCE (B).** European projects are more mixed: commercial subscriptions or dual licensing (Nextcloud, Qt, SUSE, Open-Xchange, Element) carry most of the engineering, with small public grants (STF, NGI) and donations covering maintenance gaps (curl, KDE, OpenSSL, GnuPG).
6. **FACT (A).** European public money for named projects is mostly *creation* via large envelopes (OpenEuroLLM €20.6M, DARE €120M) or *maintenance* via STF (€0.2–1.3M per project). Chinese public money in the sample is mostly *adoption* (subsidies to deploy OpenHarmony/openEuler) and state labs (XiangShan/CAS, Peng Cheng/MindSpore).
7. **INFERENCE (C).** The European government-as-customer model is a distinct funding channel: GnuPG (BSI VS-Desktop), Element (BwMessenger, Tchap), openDesk components (Nextcloud, Collabora, Open-Xchange). It has no clear Chinese counterpart in this sample except Xinchuang procurement of commercial openEuler distributions.
8. **FACT (B).** Funder nationality is domestic on both sides for the flagships (OpenAtom donations 100% domestic 2022–23), but European projects draw on cross-border funders (US sponsors of curl/OpenSSL, Google/Valve for KDE, Sweden-owned SUSE, foreign VC in Mistral).
9. **FACT (B).** Licences diverge at the edges: MulanPSL-2.0 for openEuler/XiangShan; source-available drift at Dify and KubeSphere (CN), and at Mistral (some weights) and Qt (dual licence) in Europe.

## Gaps / next steps
- Contributor affiliation from OpenDigger/Gitee for openEuler, OpenHarmony, MindSpore, Paddle (would turn inference C into B/A on employer shares).
- Verify SCS BMWK grant amount and GnuPG STF amount; Matrix.org Foundation accounts (UK filings).
