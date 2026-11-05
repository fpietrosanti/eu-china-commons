# DeepSeek (free, DeepThink + Search) — OpenCloudOS / OpenAnolis in Chinese government — 5 Nov 2026

**Branch:** R04 (PA reuse), R06 (industrial stacks, CN cloud layer). New chat; search on.

**Prompt (ZH):** 请列出中国政府机关或政务云（省、市、区级）明确采用 OpenCloudOS 或 龙蜥 OpenAnolis / Anolis OS 作为操作系统的公开案例（招标公告、中标结果、政府官网通报）。仅限实际部署或采购，不要"兼容性支持"条款。紧凑列表：机构 | 年份 | 操作系统 | 原始网址（gov.cn 或 ccgp 优先）。如果找不到，请直接说找不到。

**Answer (summary, query strings stripped):** 30 pages searched. "Very few" cases meet the strict standard.
1. 政采云有限公司 (government-procurement cloud platform), 2022, CentOS 7.6 → Anolis OS 8.2 — source: openanolis.cn white paper PDF.
2. 辽宁沈抚改革创新示范区 e-government XC cloud, 2024, Anolis OS 8.9, phase I 50 Loongson servers — source: developer.aliyun.com/article/1640275.
3. OpenCloudOS: "deployed in e-government" claims (tmtpost) without a named body → not listed.
4. gov.cn / ccgp hits are compatibility clauses only (e.g. sdgp.sdcz.gov.cn attachment 2023-09-27); no tender/award naming Anolis or OpenCloudOS as the purchased OS.

**Claude verification:**
- (2) ✔ verified on the rendered original page: 50 Loongson servers, "均部署龙蜥操作系统", Anolis OS 8.9. Evidence **B** (community/vendor case study, not a government source). Archived (static HTML + verbatim extract). Catalogue: cn-shenfu-egov-xc-cloud-anolis, gate_a_counts=false until a gov/ccgp source confirms it.
- (1) context, not PA: 政采云 is a company operating the procurement platform (Zhejiang), not a government body.
- (3) ✖ no named OpenCloudOS government user — consistent with our previous finding.
- (4) consistent with the "compatibility ≠ adoption" rule.

**Lesson:** DeepSeek applied the compatibility exclusion correctly and said "very few" instead of padding the list.
