# DeepSeek (DeepThink+Search, free web chat) — SecretFlow (隐语) in Chinese government — 7 Nov 2026

**Question (R06, industrial-stack gap: CN data-space layer):** named government bodies / public-data platforms that actually deploy the open-source SecretFlow framework (not compatibility, not generic vendor claims), with original URLs (.gov.cn / ccgp first), max 8, "don't invent URLs".

**Answer (summary of the model's text, not verbatim):** *no case meets the criteria.* site:gov.cn and ccgp.gov.cn searches returned nothing naming SecretFlow. Four "near-miss" leads, each flagged by the model itself as not meeting the bar:
1. Hangzhou 密态计算中心 (Hangzhou Data Resources Bureau + DRC), zj.ifeng.com 2024 — "based on 隐语 dense-state computing", open-source version not stated.
2. Jiangxi data circulation infrastructure platform (Jiangxi Digital Industry Group, provincial SOE), bjnews 2024 — SecretFlow not named.
3. Shandong Medical Insurance Bureau one-stop settlement platform — SecretFlow website case page, 2025.
4. Ma'anshan credit privacy-computing platform — fgw.mas.gov.cn PDF, federated learning/MPC, SecretFlow not named.
Sources linked by the model (query strings stripped): whhlwdj.gov.cn/view/3776.html; fgw.mas.gov.cn/…/Cu7KgmfiGeSALSRPAAnzbfGBumQ800.pdf; zhidx.com/p/497411.html; secretflow.org.cn/zh-CN/community/article/case; m.bjnews.com.cn/detail/1734505412129965.html; zj.ifeng.com/c/8dARWetoHB7.

## Claude verification (7 Nov)
| Lead | Route | Result | Evidence | Label |
|---|---|---|---|---|
| Hangzhou 密算中心 | curl zj.ifeng.com (Hangzhou Daily reprint, 2024-09-26), archived | Promoted by 杭州市数据资源局 + 杭州市发改委, built by 浙江算力科技 with 浙江蚂蚁密算科技, Ant provides tech. **Text names "密态计算技术体系", not 隐语/SecretFlow, and says nothing about open source** | B (press reprint) | fact (gov-promoted Ant privacy-computing centre); **context**, not OSS adoption |
| whhlwdj.gov.cn/view/3776 | curl, archived | Wuhan gov site: **隐语开源社区武汉站 launched in Optics Valley** at a digital-economy expo; SecretFlow "applied in 8 fields" (community claim) | A for the event; C for the claim | fact (community station) — **context**, not deployment |
| SecretFlow case page (Shandong 医保) | curl → 12-byte shell; real browser → menu only (JS-rendered) | not readable | ⊘ | — |
| Jiangxi, Ma'anshan | not fetched | the model itself says SecretFlow is not named | ✖ | — |

**Outcome:** ✖ no named Chinese government body verifiably running open-source SecretFlow. Converges with R04/R06 findings: CN procurement and gov texts are brand-neutral ("隐私计算/密态计算"); the open-source project name surfaces only in vendor/community material. Hangzhou + Wuhan recorded as context.
**Re-run:** SecretFlow case API behind the JS page (inspect network requests); search "隐语" on sd.gov.cn / ybj.shandong.gov.cn for the Shandong 医保 platform; 浙江政府采购网 "密算".
**LLM behaviour:** DeepSeek honoured "找不到就说找不到" and self-flagged every near-miss (good); no fabricated URLs.
