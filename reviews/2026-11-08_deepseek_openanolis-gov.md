# DeepSeek (DeepThink + Search, free) — OpenAnolis / Anolis OS government deployments (R04/R06)

**Date:** 8 Nov 2026 · **Route:** chat.deepseek.com, new chat, free tier · **Verifier:** Claude (every lead checked on the original)

## Prompt (ZH, abridged)
Which Chinese government bodies or e-government clouds explicitly *deploy* Anolis OS (community edition, not Alibaba Cloud Linux)? Official sources only; for each: body, system, year, verbatim sentence naming Anolis, URL (prefer .gov.cn, ccgp, openanolis.cn case pages). Exclude "compatible with / supports Anolis" certifications. Say "not found" if none.

## Answer (summary) and verification
| # | Lead (DeepSeek) | Verification by Claude | Outcome |
|---|---|---|---|
| 1 | Shenfu zone (Liaoning) XC e-gov cloud, Anolis OS 8.9, 2024 | Already in catalogue (B). New: also in the **official OpenAnolis case collection 《龙蜥操作系统生态用户实践精选 V2（2024）》**, government section p. 9–10 (fetched from the server, archived openanolis.cn-da1ea73818.pdf) | fact (community self-report), **B unchanged** |
| 2 | 政采云 procurement platform, CentOS 7.6 → Anolis 8.2 | Same collection p. 7–8 | company, **context** (known since 5 Nov) |
| 3 | Shijiazhuang (Hebei) platform, purchase file specifying "Anolis OS 8.8 ANCK 64位等保2.0三级版", ccgp-hebei PDF | **403 "reason:GeoBL"** from the EU laptop and the Paris server; no Wayback copy → queued in data/cn_vpn_needed.txt | ⊘ **lead D**, VPN-only (true geo-block) |
| 4 | Zigong market-supervision bureau (Sichuan), ad-monitoring data-centre service, "龙蜥 Anolis OS 7.9 或 8.6", fsxzf.gov.cn 2024-10-14 | fsxzf.gov.cn answers the server (200) but the cited article URL is **404** (two path variants); Wayback 429 | ⊘ **lead D**; note: "或" spec in a 比选 = requirement, not proof of deployment |

## Bonus: what the official case collection contains (fact)
Government section = 5 entries: Shenfu (named, Anolis community), 政采云 (company), an unnamed 医疗保障 project (Anolis community, 14 subsystems migrated from CentOS), an unnamed 智慧城市 platform (Anolis community, approval-archive system), an unnamed province e-gov cloud on the **UOS** derivative (Huawei HCS / Tencent TCE / Cloudwise). Inference: the community's own showcase names **one** government body; the rest are anonymised — consistent with the openEuler finding that Chinese OS adoption in government is reported by vendors, anonymously.

## LLM behaviour (R16)
DeepSeek kept the compatibility exclusion, returned real citation links (extracted from the page anchors), and flagged one item as "推断". 2 of 4 leads point to unreachable originals. No free-tier limit message (1 prompt).
