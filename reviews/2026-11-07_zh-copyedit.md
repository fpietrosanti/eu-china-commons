# Chinese copy-edit via Qwen and DeepSeek (free web chat), 7 Nov 2026

Fabio (7 Nov): no native reviewer needed; review the Chinese texts with DeepSeek and Qwen via the browser.
Prompts: reviews/2026-11-07_zh-review-*.prompt.txt (editor role, mainland written register, avoid translationese and politically loaded wording, table original | revised | reason).

| Text | Reviewer | Suggestions | Applied | Rejected (why) |
|---|---|---|---|---|
| Bilingual catalogue (17 entries, site/data/catalogue.json) | Qwen | 25 | 23 | "已融入国际开源治理体系" (overstates: kept "能够融入"); "重启交流机制" (implies a break: used "延续") |
| Landing page, part 1 (to §6) | Qwen (answer 1 of an A/B pair) | 19 | 18 | nav separators (HTML, not text); "自主可控" (policy slogan, kept "自主"); "权威的中文译本" (overstates: kept "共同确定的") |
| Landing page, part 2 (§7 to end) | DeepSeek | 20 | 19 | "主权与自治" (changes meaning; kept "主权与自主") |

DeepSeek was "server busy" for three attempts on part 1 and the catalogue; it reviewed part 2 at the fourth attempt. Qwen froze the browser renderer twice on send (CDP timeouts) but completed.
Result: draft notice "中文初稿，待母语审校" removed from the landing and from generated pages.
