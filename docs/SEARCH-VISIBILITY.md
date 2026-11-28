# Search visibility and audience measurement: status and roadmap

Goal: every page we publish is found by people in Europe and in China, through Western and Chinese search engines and through AI assistants, and we can tell whether real people read it. Updated 28 Nov 2026.

## 1. What is in place

| Area | Status | Where |
|---|---|---|
| Sitemap, all pages, with EN/ZH alternates (hreflang) | ✔ 149 URLs | `site/sitemap.xml` |
| Chinese-only sitemap for Baidu, Sogou, 360, Shenma | ✔ 23 URLs (28 Nov) | `site/sitemap-zh.xml` |
| Real last-modified date per page (content hash, not build date) | ✔ (28 Nov) | `data/site-lastmod.json` |
| robots.txt open to all crawlers, explicitly to AI and Chinese engines | ✔ | `site/robots.txt` |
| llms.txt and llms-full.txt for AI assistants | ✔ | `site/llms*.txt` |
| Canonical, hreflang, JSON-LD, OpenGraph, Baidu meta tags | ✔ | `tools/build_site.js` |
| IndexNow: changed pages pushed to Bing, Yandex, Seznam, Naver, Yep after each deploy | ✔ (28 Nov) | `tools/indexnow.py`, `tools/deploy.sh` |
| Visitor statistics for people: cookieless, self-hosted, no personal data | ✔ (28 Nov) | GoatCounter at https://stats.eu-china-commons.eu (same login as stats.mxmap.it) |
| Crawler and AI-bot statistics | ✖ GitHub Pages gives no access logs | §3, decision D1 |
| Google Search Console | ✖ not verified (a `google-site-verification` TXT record exists, probably from Google Workspace; check) | needs Fabio's Google account |
| Bing Webmaster Tools | ✖ | import from Search Console |
| Baidu 搜索资源平台, 360, Sogou webmaster platforms | ✖ | needs accounts; Baidu may require a Chinese phone number (to check) |
| Reachability from mainland China | partial: GitHub Pages reachable from 18 of 31 test nodes (8 Nov) | Hong Kong mirror pending (TODO) |
| Chinese-language content | thin: home, manifesto, roadmap, 17 catalogue entries; research chapters only in English | §2, step C4 |

## 2. Roadmap

**Western engines (W)**
- **W1 (Fabio, 15 min).** Verify the domain property in Google Search Console with a DNS TXT record (Claude adds it with `~/domains.py`), submit `sitemap.xml`.
- **W2 (Fabio, 5 min).** Bing Webmaster Tools: import the site from Search Console. IndexNow is already active, so Bing receives changes immediately.
- **W3 (Claude, weekly).** Read coverage and query reports (Search Console API, read-only token) and log them in this file: pages indexed vs submitted, top queries, errors.

**Chinese engines (C)**
- **C1.** Hong Kong mirror (EdgeOne Pages free plan or Alibaba OSS HK, already prepared in the deploy workflow) on `cn.eu-china-commons.eu`. Baidu indexes slowly and partly when the site is slow or unreachable from the mainland.
- **C2 (Fabio + Claude).** Baidu 搜索资源平台: account, site verification (file or meta tag, Claude adds it), submit `sitemap-zh.xml`, enable the push API (普通收录) so `tools/indexnow.py` also pushes changed Chinese pages to Baidu.
- **C3.** 360 站长平台 and Sogou 站长平台: same as C2 if accounts can be opened without a Chinese company. Shenma (mobile) probably requires an ICP filing: check, otherwise skip.
- **C4.** More Chinese content: a Chinese summary page for each key research chapter (contribution flows, GPL case law, CRA × SBOM, ASEAN/Russia, funding), each with native review (see [LLM-PANEL-REVIEW](LLM-PANEL-REVIEW.md) and human reviewers). Without Chinese text, Chinese engines have little to index.
- **C5.** Monitor reachability monthly from mainland test nodes and log the results.

**Measurement (M)**
- **M1.** ✔ People: GoatCounter (pages, referrers, countries, languages, screen sizes; bots excluded).
- **M2.** Crawlers and AI bots (Googlebot, Baiduspider, GPTBot, ClaudeBot, PerplexityBot, Bytespider…): needs access logs. Options in §3.
- **M3.** Monthly note in this file: visitors by country (EU vs China), top pages, referrers, crawler activity, indexing coverage per engine.

## 3. Decision D1: how to measure crawlers and AI bots

GitHub Pages does not give access logs, and bots do not run the JavaScript counter. Three options:

| Option | What we get | Cost and effort | Trade-offs |
|---|---|---|---|
| **a. Serve the site from our server** (Caddy, which already runs there), GitHub Pages kept as fallback | Full access logs: every crawler and AI bot by user agent, classified daily (GoAccess report + our script) | Free; 1–2 h; DNS A records change to our server | Our server becomes the public host; uptime depends on it |
| b. Cloudflare in front of GitHub Pages | Cloudflare bot and AI-crawler analytics (free plan) | Free; name servers move to Cloudflare | A third party sees all traffic; Cloudflare reachability from mainland China is uneven |
| c. Keep as is | Search Console and Bing crawl stats only (after W1–W2); no AI-bot data | None | AI-bot visits remain invisible |

Recommendation: **a**, with logs kept 90 days and IP addresses truncated, consistent with the cookieless approach.

## Changelog
- 2026-11-28: first version; Chinese sitemap, real lastmod, IndexNow and GoatCounter added.
