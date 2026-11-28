# Mainland-China egress options for the EU–China Digital Commons Observatory

Research date: 2026-11-28 (all URLs accessed 2026-11-28 unless noted). Web research only: no accounts created, nothing bought, no forms submitted.

Labels: **V** = verified on the provider's official page or an official government text. **R** = reported by a third party (press, forum, aggregator). **U** = unclear or unverified. "not found" = searched, not located.

## 0. Key findings

1. **The problem is real and documented.** Brussee (Journal of Cybersecurity, 5 Feb 2026, doi:10.1093/cybsec/tyag005) tested 13,508 Chinese government sites from 14 countries in Nov 2025. More than 50% were unreachable from abroad, and about 10% used explicit, indiscriminate geo-blocking (server-side or DNS). The blocking appears to have started around 2022–23 (R). A European IP, residential or not, will not fix it. https://scholarlypublications.universiteitleiden.nl/handle/1887/4294923 , https://www.scmp.com/news/china/diplomacy/article/3344100/chinas-reverse-great-firewall-quietly-blocking-global-access-official-data
2. **The only clean, legal route for a foreign organisation is a mainland region of a major cloud's *international* site, after real-name verification with a passport or a foreign company registration.** Alibaba Cloud, Huawei Cloud and Tencent Cloud all document this path (V). AWS China and Azure China need a Chinese legal entity. Baidu AI Cloud accepts only a mainland ID card.
3. **ICP filing (备案) is about hosting.** It applies to websites/apps on mainland servers and to domains that resolve to them. It does not cover outbound requests. AWS China documents that ports 80/8080/443 stay closed *inbound* until ICP is shown (V). In this research no provider made outbound HTTP depend on ICP. Rule of thumb: do not point a domain at the VM and do not serve web content from it.
4. **Main compliance risk: running a *proxy/VPN channel* across the border on a mainland VM.**
   - Tencent Cloud's service agreement §5.7(7) prohibits "非法代理服务器（Proxy）". §5.7(10) prohibits "擅自建立或使用非法定信道（虚拟VPN等）进行国际联网" (V).
   - Azure China (21Vianet) prohibits illegally "mount[ing] any VPN service to abroad" (V).
   - The legal basis is the 1996 Provisional Regulations on International Networking, Art. 6: "任何单位和个人不得自行建立或者使用其他信道进行国际联网" (V). MIIT notice 信管函〔2017〕32号 targets unlicensed cross-border VPN/leased-line *business* (V/R).
   - A 2026 report describes a Tencent Cloud server banned for running a proxy channel (R).
   - **Design conclusion:** do not expose a SOCKS5/VPN exit on a mainland VM for our French server to tunnel through. Run a **fetch worker on the mainland VM**: it takes a URL list, fetches at human pace, stores the files, and the French server pulls the files over SSH/rsync. The VM is then an ordinary mainland client, and SSH is ordinary administration of your own server.
   - Whether a private `ssh -D` SOCKS tunnel used only by us counts as a "non-statutory channel" is **U**. It is legally grey and against the spirit of the Tencent terms. It is excluded from the recommendations unless the provider confirms in writing that it is allowed.
5. **Commercial residential proxy networks are not a fit.**
   - Bright Data says all its networks block government websites (V).
   - Decodo blocks government sites by default, and ID verification does not list them as unlockable (V).
   - Oxylabs restricts government sites. Some restricted categories can be opened after KYC (V).
   - IPRoyal opens ".gov" sites only after identity confirmation plus more than USD 500 spend. Whether that covers `.gov.cn` is U (V for the rule).
   - Using these to reach `*.gov.cn` would breach their terms or need special approval. They also route traffic through consumer devices in China, which raises separate Chinese-law and ethics questions. **Excluded.**
6. **"回国" accelerators** (Transocks, 快帆 and similar) are consumer apps for streaming and music. They do not offer a documented SOCKS or server mode, and exit location and terms are not documented for automated use. **Not recommended.**
7. **Proton VPN's "China" location (added 3 Sep 2026) is Smart Routing through Hong Kong**, not mainland (V). **Excluded.**
8. **Chinese law on crawling.** Network Data Security Management Regulations (网络数据安全管理条例, State Council, Sept 2024, in force 1 Jan 2025), Art. 18: users of automated tools must assess the impact on the service and must not intrude or disrupt it (V). Human-pace fetching of public documents fits, but log the rate limits.
   - The Ministry of State Security (MSS) warned on 1 Dec 2024 and 30 May 2026 that foreign actors aggregate "open-source" data (R).
   - The research is legitimate, but a foreign project systematically harvesting government sites is politically sensitive. Keep scope, rate and purpose documented and public.

## 1. Ranked options (best fit first)

Criteria: legal and within terms, stable, low volume, human pace, public documents, usable from our French server.

| # | Option | Category | Mainland egress | Foreigner can buy? | Cheapest price found | Fit |
|---|---|---|---|---|---|---|
| 1 | Alibaba Cloud International – ECS in a mainland region, used as a fetch worker | Cloud VPS | Yes: Hangzhou, Shanghai, Beijing, Shenzhen, Guangzhou, Qingdao, Chengdu, Hohhot, Ulanqab, Heyuan (V) | Yes, with passport or driver's licence real-name registration (V) | ecs.t6-c1m2.large (2 vCPU/2 GB) on-demand USD 0.0365/h ≈ USD 27/month in all main mainland regions. Spot USD 0.0033–0.0095/h (R, Spare Cores, observed 2026-11-28). Official monthly subscription price: not found | **Best** |
| 2 | Huawei Cloud International – ECS in a mainland region | Cloud VPS | Yes (mainland regions offered after authentication) (V); exact city list not confirmed | Yes, with passport individual authentication, 1–3 working days (V) | not found | **Good** |
| 3 | Alibaba Cloud Function Compute in a mainland region, used as a fetch function | Serverless | Yes: cn-hangzhou, cn-shanghai listed (V) | Same real-name registration as #1 (V for ECS, U whether FC triggers the same check) | Pay per use. Free tier figures differ between pages (1M requests + 400k GB-s per month on one page) (V/U) | **Good** for small batches |
| 4 | Tencent Cloud International – CVM in a mainland region | Cloud VPS | Yes: Guangzhou, Shanghai, Beijing, Nanjing, Chengdu, Chongqing (V) | Yes, passport/ID/driver's licence/work permit from the account's country; 2–4 business days; max 3 accounts per identity (V) | not found for mainland CVM | **Good, with care**: strictest written anti-proxy terms |
| 5 | Tencent Cloud SCF (Serverless Cloud Function) in a mainland region with fixed egress IP | Serverless | Yes (mainland regions; fixed egress IP feature, up to 5 per region) (V) | As #4 (U for SCF specifically) | USD 0.0000167/GB-s + USD 0.002 per 10k calls; egress traffic per region not found (V) | Fair |
| 6 | Partner institution in China fetches for us (or hosts a small device that runs the fetch worker) | Partner | Yes (partner's city) | N/A: partner's own real-name broadband or campus network | Hardware cost only | Good if a partner agrees; needs a written agreement |
| 7 | UCloud Global – mainland regions | Cloud VPS | Yes: Beijing, Shanghai, Guangzhou, Ulanqab listed (V) | U: foreign verification rules not found | not found | Possible; check with sales |
| 8 | BytePlus (international arm of Volcengine) | Cloud | U: one doc snippet says mainland nodes can be bought after real-name verification (R), not confirmed | U | not found | Unclear |
| 9 | Tencent Cloud International – Lighthouse (轻量应用服务器) | Cloud VPS | **No** on the international site: the region list shows only Hong Kong and other countries (V) | — | HK from USD 6/month (V), but HK is not mainland | Not suitable |
| 10 | Alibaba Cloud International – Simple Application Server | Cloud VPS | **No** mainland regions on the international pricing page (V) | — | USD 3.5/month (non-mainland) (V) | Not suitable |
| 11 | 穿梭 Transocks (回国加速) | 回国 VPN | Probable but U. App store page claims "中国境内上百条高速直连服务器"; operator holds Sichuan licences B1-20251279 and 川B2-20180414 (V on transocks.com footer) | App account; no ID requirement found (U) | Subscriptions of 1/3/12 months; prices not found on site | Poor: apps only, no SOCKS/Linux documented |
| 12 | 快帆 Kuaifan (回国加速) | 回国 VPN | U. Uses "Fanster" lines with relay points in HK/TW/JP/SG/US etc.; final exit not stated | App account | CNY 30 first month, CNY 40/month renewal (App Store, V for the listing) | Poor |
| 13 | Bright Data China residential/ISP/DC | Proxy network | Yes, 351,390 CN IPs claimed (V) | Business KYC needed for residential (V) | USD 4/GB PAYG (V) | **Excluded**: blocks government sites on all networks (V) |
| 14 | Oxylabs China residential | Proxy network | Yes, about 5.28M CN IPs claimed (V) | KYC | not checked | **Excluded** by default: government sites restricted (V) |
| 15 | Decodo (ex-Smartproxy) China | Proxy network | Claimed (V); third parties say much of the coverage is HK (R) | Account + ID verification for some categories | not checked | **Excluded**: government sites blocked by default (V) |
| 16 | IPRoyal China | Proxy network | Yes, 2.53M CN residential IPs claimed, city targeting (V) | Account; .gov needs identity + >USD 500 spend (V) | Residential from USD 1.75/GB; ISP from USD 1.80/proxy; SOCKS5 (V) | **Excluded** (ToS gate, ethics); see §2.4 |
| 17 | SOAX / Webshare / 922 S5 China | Proxy network | SOAX claims China (V for marketing); Webshare: conflicting reports (R); 922 S5: reportedly HK/TW only for China (R) | — | SOAX about USD 3.6/GB (R) | **Excluded** (same issues; terms not verified) |
| 18 | Proton VPN "China" | Commercial VPN | **No**: Smart Routing via Hong Kong (V) | Yes | Plus plan | **Excluded** |
| 19 | AWS China (Sinnet Beijing / NWCD Ningxia) | Cloud | Yes | **No**: mainland legal entity with business licence only; foreign companies via a Chinese subsidiary (V) | CNY billing | Not feasible without a Chinese entity |
| 20 | Azure China (21Vianet) | Cloud | Yes | Conflicting: checklist says both "Any organization" and "Legal entity in China"; contract with 21Vianet (V) | not found | Not feasible / unclear |
| 21 | Baidu AI Cloud | Cloud | Yes | **No** for foreign individuals: only a mainland ID card for personal verification (V) | — | Not feasible |
| 22 | JD Cloud, Kingsoft Cloud, Volcengine (China site) | Cloud | Yes | not found (China sites usually use mainland ID / Alipay / face scan) | not found | Not feasible / unverified |
| 23 | Small Chinese VPS / NAT VPS sellers (hostloc / NodeSeek lists, 雨云 etc.) | Reseller | Yes for mainland machines | Mainland real-name required by law (CSL Art. 24, now Art. 26) (V for the law). No reseller found that accepts foreign passports | various, not verified | **Excluded**: in practice needs a Chinese ID; borrowing one would violate law and terms |
| 24 | Shell accounts on mainland servers | Shell | not found | — | — | Nothing found |

## 2. Details per option

### 2.1 Alibaba Cloud International (alibabacloud.com) – mainland ECS (rank 1)
- **Who can buy**:
  - Real-name registration is needed only to buy, use or renew mainland-region services (V).
  - Individuals use a passport or driver's licence. The document must match the account's Country/Region setting (V).
  - Companies use their home-country registration certificate (V).
  - Review is manual. Alibaba recommends the Hong Kong region to those who cannot verify (V).
  - One phone number can register up to 6 accounts. Linking a phone number from a different country needs enterprise verification (V).
  - Sources: https://www.alibabacloud.com/help/en/account/user-guide/real-name-registration-faqs ; https://help.aliyun.com/zh/user-center/real-name-registration-for-purchasing-an-ecs-instance-in-the-chinese-mainland ("购买中国内地节点（不包香港节点）ECS云服务器，需要在售卖页点击实名登记按钮进行登记…需要提供驾照或护照照片").
- **Recommendation**: an **EU company/institution account with enterprise verification** is better than a personal one (cleaner accountability).
- **Regions**: Ulanqab, Heyuan, Beijing, Shanghai, Hangzhou, Shenzhen, Guangzhou, Chengdu, Qingdao, Hohhot (V, SAS regions page https://alibabacloud.com/help/en/simple-application-server/product-overview/regions-and-network-connectivity ; ECS list https://www.alibabacloud.com/help/en/ecs/regions-and-zones).
- **Price**: ecs.t6-c1m2.large on-demand USD 0.0365/h, spot from USD 0.0033/h (R: https://sparecores.com/server/alicloud/ecs.t6-c1m2.large , observed 2026-11-28). Official monthly subscription price for mainland: not found. Traffic billed extra.
- **Payment**: international site, card/PayPal (U, not verified in this pass). The China site (aliyun.com) bills CNY only (V, https://help.aliyun.com/en/ecs/cross-region-usage-faqs).
- **Protocols**: full VPS root/SSH.
- **ICP**: needed only to host a website on a mainland server or resolve a domain to it (V, https://help.aliyun.com/document_detail/36891.html: "网站/App是否需要备案，取决于服务器所在地域"). Outbound requests: no filing rule found.
- **Terms**:
  - Security rules prohibit unauthorized *scanning* of cloud assets (V, https://help.aliyun.com/zh/document_detail/469814.html).
  - No explicit anti-proxy clause found in the pages checked (U). Alibaba can still act unilaterally under its security control rules (V, https://help.aliyun.com/zh/document_detail/469818.html).
  - Use the fetch-worker design, not a public proxy.
- **Reliability**: tier-1 BGP networks in the mainland. The cross-border SSH link FR↔CN can be slow or lossy (R). Pull results in batches.

### 2.2 Huawei Cloud International – mainland regions (rank 2)
- Real-name authentication is required only for services provisioned in the Chinese mainland (V). Individuals: passport, ID card, non-Chinese driver's licence, or Mainland Travel/Residence Permit. Review takes 1–3 working days (V). Accounts in partner programmes cannot use this path (V).
- International accounts cannot do ICP filing (V). This is irrelevant to outbound fetching.
- Sources: https://support.huaweicloud.com/intl/en-us/usermanual-account/account_auth_00001_01.html ; https://support.huaweicloud.com/intl/en-us/usermanual-account/en-us_topic_0119621533.html ; https://support.huaweicloud.com/intl/en-us/qs-ecs/en-us_topic_0030831985.html
- Price for the smallest mainland ECS: not found. Anti-proxy terms: not checked.

### 2.3 Tencent Cloud International – mainland CVM / SCF (ranks 4–5)
- **Identity**: unverified accounts cannot buy or use mainland-region services. Accepted: ID card/passport/driver's licence/work permit from the account's registration region. Review 2–4 business days. One identity covers up to 3 accounts (V, https://www.tencentcloud.com/document/product/378/3629). The China site (cloud.tencent.com) personal verification is for PRC/HK/Macao/Taiwan documents; "其他国际证件" are sent to the international site (V/R, https://cloud.tencent.com/document/product/378/3629).
- **CVM mainland regions**: Guangzhou, Shanghai, Beijing, Nanjing, Chengdu, Chongqing (+ Ulanqab, Zhongwei; finance regions by application) (V, https://www.tencentcloud.com/document/product/213/6091).
- **Lighthouse on the international site**: region list has no mainland regions, only Hong Kong + 10 foreign locations (V, https://www.tencentcloud.com/document/product/1103/41266 , pricing https://www.tencentcloud.com/document/product/1103/47794 , HK Starter USD 6/month).
  - China-site Lighthouse promos (2C2G about CNY 99/year) are reported (R, https://www.zhihu.com/tardis/jm/art/1993693572931797435), but they need China-site verification.
- **SCF fixed egress IP** (V, https://www.tencentcloud.com/zh/document/product/583/38106). Pricing (V, https://intl.cloud.tencent.com/document/product/583/12281).
- **Terms (important)**: 腾讯云服务协议 §5.7(7) "非法代理服务器（Proxy）" and §5.7(10) "擅自建立或使用非法定信道（虚拟VPN等）进行国际联网" are prohibited (V, https://cloud.tencent.com/document/product/301/1967). Proxy-related ban reported (R, https://www.80aj.com/2026/08/31/tencent-cloud-ai-ban/ ; https://v2ex.com/t/855037). On Tencent, use only the fetch-worker design.

### 2.4 Residential / ISP proxy networks (excluded)
- **Bright Data**:
  - 351,390 China IPs; residential/ISP/DC/mobile; USD 4/GB PAYG (V, https://brightdata.com/locations/cn).
  - Residential needs business KYC (V).
  - "all networks block access to government websites" (V, https://docs.brightdata.com/cn/proxy-networks/residential/network-access.md).
- **Oxylabs**: government websites restricted; some categories can be enabled after KYC (V, https://developers.oxylabs.io/products/proxies/residential-proxies/restricted-targets).
- **Decodo**: government sites blocked by default, not in the ID-unlockable list (V, https://help.decodo.com/docs/residential-proxy-restricted-targets ; https://decodo.com/security-compliance).
- **IPRoyal**:
  - 2,532,825 CN IPs, city targeting, SOCKS5, from USD 1.75/GB (V, https://iproyal.com/proxies-by-location/asia/china/).
  - "All .gov websites" only after identity confirmation and more than USD 500 spend (V, https://docs.iproyal.com/proxies/residential/domain-access-terms). Whether this covers `.gov.cn` is U.
- **SOAX / Webshare / 922 S5**: China claims unverified or conflicting (R, https://soax.com/proxies/locations/china ; https://proxyway.com/proxy-locations/china-proxy ; 922 S5 HK/TW only per a review, R).
- **Why excluded**:
  - It breaches or needs exceptions to the provider terms for government targets.
  - Exit traffic runs through third-party consumer devices in China, whose consent and legal position under Chinese real-name and "channel" rules is unclear.
  - Bad optics for a research project.

### 2.5 回国 VPNs / accelerators
- **Transocks 穿梭**:
  - Windows/macOS/iOS/Android/HarmonyOS/TV/browser apps, plus a "router" section (V, https://www.transocks.com).
  - Claims "中国境内上百条高速直连服务器" (V, App Store, https://apps.apple.com/us/app/id1171836473).
  - Mainland licences in the footer (B1-20251279, 川B2-20180414, 蜀ICP备18024647号) (V). This suggests a licensed domestic operator with real mainland exits (U).
  - No Linux/SOCKS documented. Prices not published on site. Terms not read.
- **快帆**: CNY 30 first month, then CNY 40/month; 3 devices; relay points abroad (V, App Store https://apps.apple.com/us/app/%E5%BF%AB%E5%B8%86%E5%8A%A0%E9%80%9F%E5%99%A8-%E6%B5%B7%E5%A4%96%E5%8D%8E%E4%BA%BA%E4%B8%93%E5%B1%9E%E5%8A%A0%E9%80%9F%E5%99%A8/id1442745175). Mainland exit not stated (U).
- **Others** (QuickFox, 极速穿梭, Flashback 归燕, KanCN, 回国快): consumer apps; some state they accelerate only "大陆境内能访问及合规的网站" (R).
- **海外党, 旋风加速, LetsVPN/快连, QuickQ**: not verified in this pass (U). LetsVPN and QuickQ are generally described as tools for going *out* of China, not returning.
- **Fit**: poor. They are built for streaming on personal devices and have no server or SOCKS mode. Using them from a server for automated fetching probably goes beyond personal-use terms (U).

### 2.6 Not feasible
- **AWS China**: separate account; "only opened for registration by a Chinese (mainland) legal entity"; business licence required. A foreign company can use its mainland subsidiary's licence. Ports 80/8080/443 opened only after ICP check (V, https://www.amazonaws.cn/en/about-aws/china/faqs/ ; https://aws.amazon.com/china-gateway/).
- **Azure China**: operated by 21Vianet; eligibility entries conflict ("Any organization" / "Legal entity in China") (V, https://learn.microsoft.com/azure/china/overview-checklist). Its rectification notice bans illegal VPN to abroad (V, https://www.azure.cn/zh-cn/support/announcement/rectification-announcement).
- **Baidu AI Cloud**: "Currently, only ID card is supported" for personal verification. HK/Macao/Taiwan documents are not accepted (V, https://cloud.baidu.com/doc/UserGuide/s/Kjwvy3bur-en).
- **Small mainland VPS/NAT resellers**: CSL real-name obligation for network access services. Users who refuse must not be served (V, https://www.cac.gov.cn/2016-11/07/c_1119867116_2.htm ; renumbered Art. 26 in the 2025 text, https://www.cac.gov.cn/2025-12/29/c_1768735112911946.htm). No reseller found that accepts foreign passports (lists: https://www.nodeseek.com/post-54366-1 ; https://t.me/s/HostlocPro/71240).
- **Cloudflare China Network**: inbound CDN via a local partner with ICP. It does not provide outbound egress (U, not researched further).

### 2.7 Partner-based options
- A Chinese university or institute partner can (a) fetch documents on request and share them, or (b) host a small device running our fetch worker on its network.
- Legally the traffic runs under the partner's real-name connection and campus AUP, so the partner carries the exposure. That makes a written agreement, a clear public-documents-only scope and a low rate essential.
- Given the MSS warnings on foreign OSINT aggregation (R: https://www.secrss.com/articles/72931 ; https://www.news.cn/legal/20260530/bdce556d016247dda3e7024c57b2c070/c.html), option (a), partner-run with partner review, is safer for the partner than (b).

## 3. Recommendation and design

1. **Open an Alibaba Cloud International account in the name of the EU legal entity** (enterprise verification), and run one small pay-as-you-go ECS in a mainland region such as Shanghai or Hangzhou. Huawei Cloud International is the backup provider.
2. **Fetch-worker pattern, not a proxy.**
   - The VM runs our crawler with per-host rate limits (human pace, honour robots.txt, User-Agent naming the project and a contact URL).
   - It writes files and hashes locally or to same-region object storage. The French server pulls them over SSH/rsync.
   - No SOCKS/VPN listener open to the internet. No domain pointed at the VM, so no ICP issue. No inbound web service.
3. **Before going live**, ask the provider in a support ticket whether (a) the fetch-worker use and (b) a private `ssh -D` tunnel used only by us are allowed. Keep the written answer. Only use (b) if it is explicitly allowed.
4. **For one-off batches**, Alibaba Function Compute in cn-hangzhou/cn-shanghai is a cheap alternative with the same verification.
5. **Compliance log**:
   - Purpose, scope (public documents only, no login walls, no CAPTCHA bypass).
   - Rate limits, matching Art. 18 of the Network Data Security Management Regulations (V, https://www.cac.gov.cn/2024-09/30/c_1729384452307680.htm).
   - GDPR handling for personal data in court judgments on the EU side.
   - Provider ticket answers.
6. **Do not use**: residential proxy networks for `*.gov.cn`, borrowed Chinese IDs for reseller VPSs, HK-routed "China" VPN locations, or consumer 回国 apps on servers.

## 4. Open gaps (not found in this pass)
- Official monthly price for the smallest mainland ECS (Alibaba international) and CVM (Tencent international); Huawei mainland ECS price.
- Whether Alibaba FC and Tencent SCF trigger the same real-name check as ECS (likely, U).
- UCloud Global and BytePlus foreign-customer rules for mainland regions.
- Transocks/快帆 terms of service text and exact exit locations.
- Payment methods accepted for mainland-region resources on the international sites.
