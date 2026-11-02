# Qwen (chat.qwen.ai, free, web search auto) — 2 Nov 2026
Task: same ZH prompt as DeepSeek run (CN PA deployments of openEuler/openKylin/OpenHarmony; code-sharing platform).
Chat: https://chat.qwen.ai/c/762c1989-d63a-4c66-bb42-1717a3af9831
Unverified LLM output — leads to check (URLs as given by Qwen):

| Lead | Body | Software | Status (Qwen) | URL |
|---|---|---|---|---|
| Q1 | Fujian e-government cloud platform (xxzx.fujian.gov.cn) — IaaS registration spec lists openEuler-20.03 as server OS | openEuler | deployed/option | https://xxzx.fujian.gov.cn/bsfw/yjspt/202311/P020250509556759188404.pdf |
| Q2 | Hulunbuir municipal e-gov cloud procurement contract ("Huawei Euler", full-stack Xinchuang cloud B) | openEuler | procurement | https://www.ccgp-neimenggu.gov.cn/ecms-econtract/contract/upload/file/2026/3/25/8e7d1cc2-3be5-4712-a9ba-a4d4efdb109a_政务云采购（全栈信创云B云）.pdf |
| Q3 | Wuhan OpenHarmony ecosystem plan (already in catalogue) | OpenHarmony | plan | https://jxj.wuhan.gov.cn/xxgk_9/wjcx/gfxwjsjk/202604/t20260413_2752401.html |
| Q4 | Longgang lab (already in catalogue) | OpenHarmony | pilot | https://www.lg.gov.cn/bmzz/zwfwsjglj/xxgk/qt/gzdt/content/post_13045862.html |
| Q5 | Guangzhou Baiyun district: government terminals HarmonyOS conversion | OpenHarmony/HarmonyOS | plan | https://www.by.gov.cn/tzby/yshd/zdxmjz/content/post_10744579.html |
| Q6 | Shenzhen Longhua district: smart government scenario needs on OpenHarmony | OpenHarmony | plan | https://www.szlhq.gov.cn/bmxxgk/jjcjj/dtxx_124217/gzdt_124218/content/post_12808203.html |
| Q7 | Tianjin: openKylin 3.0 release (Haihe lab / NSCC Tianjin) | openKylin | release, not deployment | https://www.tj.gov.cn/sy/tjxw/202609/t20260916_7375027.html |

Code-sharing platform: none national equivalent to code.europa.eu (agrees with DeepSeek). Mentions MIIT selecting Gitee (2020) as independent code hosting; local public-data/API open platforms; internal GitLab-type platforms on e-gov extranet, not public; Beijing/Shanghai open-source plans support hosting platforms.
Synthesis claim: server side (e-gov cloud) openEuler penetration documented by procurement; terminal side OpenHarmony mostly labs/demos.

## Follow-up: other government clouds listing openEuler / OpenHarmony / openKylin (same chat)
Qwen returned 6 leads (4 URLs extracted). Claude verification:
- Yancheng e-gov cloud (czj.yancheng.gov.cn, 4 Mar 2026): "操作系统选项有HuaweiCloudEulerOS、Ubuntu、openEuler" — **VERIFIED, A**
- Jinan Big Data Bureau 2024 final accounts PDF: "开源操作系统 Ubuntu/open 欧拉/龙蜥等" 28.26 yuan/set-month vs Windows 60.56 — **VERIFIED, A**
- Hulunbuir contract PDF: Qwen quotes "华为欧拉"; our pdftotext found no text layer → OCR pending
- Xuancheng trading-centre attachment: generic download endpoint, not checkable
