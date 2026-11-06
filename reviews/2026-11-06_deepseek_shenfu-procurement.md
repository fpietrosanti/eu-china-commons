# DeepSeek (free, DeepThink+Search) — Shenfu e-gov cloud procurement record — 2026-11-06

**Goal:** raise the Shenfu (Liaoning) XC e-gov cloud on Anolis OS 8.9 from B to A by finding the official procurement notice (ccgp.gov.cn / ccgp-liaoning.gov.cn). Direct routes blocked: ccgp rate-limits both the laptop and the Paris server ("频繁访问"); ccgp-liaoning unreachable (000).

**Prompt (ZH, new chat):** find the government procurement or award notice for the Shenfu Reform and Innovation Demonstration Zone e-gov/XC cloud (phase I, 50 Loongson servers, Anolis OS 8.9 per the Nov 2024 OpenAnolis case study); exact title, date, purchaser, winner, amount, official URLs only, no fabricated URLs, say clearly if not found.

**Answer (compacted):**
- **Official procurement sites: NOT FOUND.** ccgp.gov.cn search ("沈抚 政务云 信创") has no notice matching the 50-Loongson e-gov cloud; ccgp-liaoning.gov.cn would not open during the run.
- The OpenAnolis case itself: 《"双龙"联合！助力辽宁沈抚示范区打造安全可靠的政务云平台 | 龙蜥案例》, Nov 2024 (dated 2024-11-14/22 on OSC/51CTO relays), states 一期规模50台，均部署龙蜥操作系统.
- **Purchaser of the "政务云一期" is China Unicom Liaoning (中国联合网络通信有限公司辽宁省分公司), not the zone government.** Series: "中国联通辽宁省沈抚算力中心新建政务云一期私有云购置项目" sub-packages (PAAS platform, cloud-desktop servers, cabling) on third-party tender platforms (RCC 瑞达恒, 耀采网, 中国招标投标公共服务平台); not on ccgp.gov.cn.
- Related but distinct: 《沈抚示范区信创云平台及配套设施建设项目结果公告》, 2025-12-30, purchaser 辽宁省沈抚改革创新示范区管理委员会发展改革局, winner 中国联合网络通信有限公司抚顺市分公司; no evidence it is the 50-Loongson/Anolis phase.

**Claude assessment:** the negative is consistent with our own blocked ccgp searches. Key structural finding (inference, B): the Shenfu e-gov cloud is procured and operated by China Unicom (SOE operator model), so a government procurement record naming Anolis OS likely does not exist; the government-side record is the 2025 信创云平台 result notice naming Unicom as supplier. **Shenfu stays B** for gate A purposes; next verification target = the 2025-12-30 result notice original (likely on a Shenfu/Liaoning public-resource-trading site) + one Unicom sub-package notice naming Loongson/Anolis.

**Leads to verify (titles only, URLs not captured — DeepSeek citations are popovers):**
1. 沈抚示范区信创云平台及配套设施建设项目结果公告 (2025-12-30)
2. 中国联通辽宁省沈抚算力中心新建政务云一期私有云购置项目 PAAS平台集中采购…评审结果公示 (RCC 瑞达恒 relay)
