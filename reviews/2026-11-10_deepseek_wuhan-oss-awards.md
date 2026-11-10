# DeepSeek (DeepThink + Search, free web chat) — Wuhan open-source award amounts, 10 Nov 2026

**Gap (FUNDING-COMPARISON §12, STATE §7):** Wuhan records were caps only; no disbursed/allocated amount.
**Prompt (zh):** 请查找武汉市或武汉东湖高新区2024—2026年关于开源（开源鸿蒙、开源项目、开源社区、开源软件）资金支持的拟支持名单、公示名单或资金兑现/拨付公告，需含实际金额和获奖单位。只要政府官网原文（.gov.cn）…最多8条；找不到就明确说未找到，不要编造URL。
**Chat:** https://chat.deepseek.com/a/chat/s/2b519534-3ff1-4f7a-9364-8a166adfaeb2 (~90 s; no free-tier limit message)

## Answer (summary, query strings stripped) and our verification
| # | DeepSeek lead | Our check (10 Nov) | Verdict |
|---|---|---|---|
| 1 | Donghu 2024 软件奖补 审核结果（第一批）PDF: 深之度 ¥4.6156M incl. 开源平台建设 2.4261M + 开源软件开发 2.0M | Live URL 404; **Wayback 2026-01-09 copy fetched** (www.wehdz.gov.cn-b355b0ce29.pdf); row 8 sums 18.95+242.61+200.00 = 461.56 万 ✓ | **A** (correct) |
| 2 | 2024 优秀开源软件项目和开源社区 公示 (2025-02-13), ¥300k/project per policy | Already archived (A, 4 Nov); notice itself has no amounts ✓ | A (already known) |
| 3 | 2024 软件产业发展专项资金预安排 PDF (Apr 2025): 开源社区运营补助 深之度 ¥3.0M; 10 × ¥300k | Fetched direct (jxj.wuhan.gov.cn-005586d65c.pdf), rows 41–51 ✓; list total ¥38.932M | **A** (correct; DeepSeek misspelt 凹语言 as 四语言) |
| 4 | 2025 预安排 公示 (2026-08-17), "attachment may contain OSS lines" | Attachment fetched (jxj.wuhan.gov.cn-2d4bb2edb0.pdf): **12 rows, all 企业研发投入补助, ¥15.47M, no OSS line** | ✖ for OSS (negative, ours) |
| — | "No OpenHarmony-specific disbursement list 2024–26" | Consistent with our earlier searches | D (relayed negative) |

**Lessons:** DeepSeek gave correct .gov.cn PDF URLs this time (2/2 fetchable, one via Wayback); it hedged correctly on #4.
