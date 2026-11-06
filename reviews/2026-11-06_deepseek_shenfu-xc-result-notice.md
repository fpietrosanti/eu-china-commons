# DeepSeek (free, DeepThink+Search) — Shenfu 信创云 result notice original — 2026-11-06

**Goal:** locate the original of 《沈抚示范区信创云平台及配套设施建设项目结果公告》 (2025-12-30), the government-side record of the Shenfu XC cloud.

**Prompt (ZH, new chat):** find the original page; give site, exact URL, award amount, content summary (esp. Loongson/OS mentions); real links only; say "not found" otherwise.

**Answer (compacted):**
- No official-site original found (site:ccgp-liaoning.gov.cn returns nothing; agency = 辽宁省沈抚公共资源交易服务有限公司).
- vip.chinabidding.cc/markinfo/rMvvIFXWAtOLUjWd7JE..A.html — **award: ¥6,495,000 (001 包 云平台租赁) + ¥120,000 (002 包 监理)**; body mentions 国产CPU、国产化服务器/存储、全面国产化替代, **no "龙芯" and no named OS**.
- www.ygbid.com/tender/20251230092422200007.html — agency named, body mostly masked; winner 中国联合网络通信有限公司抚顺市分公司.
- liaoning.zhaobiao.cn/succeed_v_59481b38cd46ae230b00414b476997da.html — 中标公示 with both packages.

**Claude verification (same day):**
- curl + r.jina.ai: chinabidding 567 (EdgeOne), ygbid 403/000, zhaobiao 521 → fetched **zhaobiao.cn in the real browser** and archived a verbatim extract (sources/archive/liaoning.zhaobiao.cn-29124d6e49.relay.md). Confirms (B): 2 packages, winner Unicom ***分公司 (cloud lease) and 北方实验室 (supervision); service requirement **全面国产化替代 of OS/DB/compute/storage**, brand-neutral (no Loongson, no OS named); **3-year lease, equipment ownership transfers to the purchaser after year 3, award amount = annual service fee**.
- Amount ¥6,495,000/year: **A-v** (relayed by DeepSeek from chinabidding; page blocked for us).

**Consequences for the catalogue:** Shenfu stays **B** (the OS name Anolis 8.9 exists only in the OpenAnolis community case); but the government-side procurement trail is now documented: operator model (Unicom lease), XC mandate, amount. The brand-neutral spec vs. community-claimed Anolis deployment is itself a finding about how CN XC procurement is written.
