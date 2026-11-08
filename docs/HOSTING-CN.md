# How Chinese open-source projects host their websites (probe, 7 Nov 2026)

Measured from the server in Paris (51.158.36.151): DNS (A/CNAME), IP owner and country (ipinfo.io), ICP number in the home page, server headers. Geo-DNS may return mainland servers to users inside China; this is the view from Europe.

| Site | Where it is served from (seen from Europe) | ICP on page | Pattern |
|---|---|---|---|
| www.openeuler.org | Huawei Cloud Hong Kong (ELB) | not found | HK cloud |
| opengauss.org | Huawei Cloud Hong Kong | not found | HK cloud |
| www.openatom.org | Huawei Cloud Hong Kong | 京ICP备2020036654号-1 | HK server + ICP for mainland |
| www.openharmony.cn | Huawei CDN, China Unicom edge | not found | mainland CDN |
| www.mindspore.cn | Huawei Cloud WAF (CN) | not found | mainland + WAF |
| www.paddlepaddle.org.cn | Baidu WAF, China Telecom Jinan | not found | mainland |
| openanolis.cn | Alibaba Cloud Hangzhou | 浙ICP备2021005855号-2 | mainland + ICP |
| www.openkylin.top | China Mobile CDN | 京ICP备2020036654号-21 (OpenAtom's ICP) | mainland CDN under OpenAtom licence |
| www.opencloudos.org | Tencent Cloud CLB Hong Kong | not found | HK cloud |
| nacos.io | Alibaba Cloud Hong Kong | not found | HK cloud |
| kubesphere.io | Hong Kong hosting (AS134366) | not found | HK |
| www.oceanbase.com | Alibaba CDN (global edge, Paris) | not found | Alibaba global CDN |
| www.deepin.org | Cloudflare | not found | Cloudflare |
| ant.design | Cloudflare | not found | Cloudflare (+ mainland mirror domain) |
| element-plus.org | Cloudflare | not found | Cloudflare |
| docs.xiangshan.cc | Cloudflare | not found | Cloudflare |
| vant-ui.github.io | GitHub Pages | not found | GitHub Pages |
| www.starrocks.io | Vercel | not found | Vercel |
| milvus.io | AWS | not found | AWS |
| tdengine.com | Microsoft Azure (US) | not found | Azure |
| dubbo.apache.org | Apache infra via Fastly | not found | foundation infra |
| echarts.apache.org | Apache infra via Fastly | not found | foundation infra |

## Patterns
1. **Mainland hosting with an ICP licence** (state-linked foundations and big platforms: OpenAtom, OpenAnolis, openKylin, OpenHarmony, MindSpore, PaddlePaddle). Requires a Chinese legal entity; openKylin uses OpenAtom's ICP.
2. **Hong Kong cloud region** (openEuler, openGauss, OpenCloudOS, Nacos, KubeSphere): no ICP needed, usually fast from the mainland. The most common choice for projects that also serve foreign users.
3. **Global platforms** (Cloudflare, Vercel, GitHub Pages, AWS, Azure, Apache/Fastly): developer projects with an international audience (Ant Design, Element Plus, XiangShan, Vant, StarRocks, Milvus, TDengine, Dubbo, ECharts). Reachability from China varies; several keep a mainland mirror domain.

## Choice for the observatory
- **Now:** GitHub Pages on eu-china-commons.eu (pattern 3), no external resources so pages stay light from China.
- **Next:** a mirror on a Hong Kong object storage + CDN (pattern 2: Alibaba Cloud OSS HK, Tencent COS HK or Huawei OBS HK), e.g. cn.eu-china-commons.eu, synced from the same build. No ICP needed.
- **Not possible for us:** mainland hosting (pattern 1) needs a Chinese entity for the ICP licence.

## Reachability test after launch (2026-11-08)

**Exec summary:** the site on GitHub Pages is reachable from mainland China, but not reliably: 18 of 31 chinaz.com nodes got HTTP 200, 13 timed out. Every node that answered resolved a genuine GitHub Pages IP, so there is no sign of DNS pollution. The timeouts are consistent with known GitHub/Fastly instability from China, but they are not proven to be blocking (control test failed, see below). Evidence: A (our own measurements) for the numbers; the cause is inference.

| Check | Method | Result |
|---|---|---|
| DNS, global | dig from 51.158.36.151 via 8.8.8.8, 1.1.1.1, 9.9.9.9 | all 4 A records + www CNAME correct |
| DNS, Chinese resolvers | dig via 223.5.5.5 (AliDNS), 119.29.29.29 (DNSPod), 114.114.114.114, 180.76.76.76 (Baidu) | correct; 114 had one transient timeout |
| .eu delegation | dig +norec at the .eu TLD server | NS = TopDNS (ns-usa/uk/canada.topdns.com) |
| HTTPS | GitHub Pages API + openssl | Let's Encrypt certificate for apex + www, expires 2027-02-06; HTTPS enforcement switched on |
| HTTP from EU | curl /, /zh/, sitemap.xml, llms.txt, robots.txt | all 200, 0.16–0.65 s; www → apex 301 |
| Mainland China, multi-node | tool.chinaz.com/speedtest (31 nodes, mostly China Telecom, plus Unicom and multi-line) | **18 × 200**, **12 timeouts**, 1 "system error" |

- **Answered (200):** Beijing, Shenzhen ×3, Wuhan, Shiyan, Changde, Dalian ×2, Jinan, Meishan, Shijiazhuang, Jiujiang, Hohhot ×4, Lhasa. Total time 0.7–9.9 s, typically 1.5–3 s.
- **Timed out:** Shanghai, Zaozhuang, Anshan, Shantou, Ningbo (Telecom), Changzhou, Kunming, Xi'an, Hohhot ×1, Xiangyang, Xiamen, Luoyang. Ningbo (Unicom) returned "system error".

**Limits of this test:**
- One run, one moment.
- A control run on www.baidu.com did not start (guest limits), so node-side failures cannot be excluded.
- boce.com: guest quota exhausted. itdog.cn: Cloudflare challenge, not attempted further.
- chinaz DNS-pollution check needs a login, not done.

**Implication:** with about 40% of nodes timing out, the Hong Kong mirror (cn.eu-china-commons.eu) should move up the priority list. Re-run this test on different days before deciding.
