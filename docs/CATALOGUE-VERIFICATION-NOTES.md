# Catalogue verification notes (2 November 2026)

Scope: `data/catalogue-verified.json`. Budget was low-intensity (about 40 web calls shared with the literature review). Status rules: **verified** = fact seen in a fetched primary/official text or an official page quoted in results; **partly verified** = seen only in search-result summaries, trade press, vendor material, or with some details missing; **not found** = nothing located. No search-result summary was treated as proof of exact figures.

## Not found
- **Lutece / other French catalogue** (not searched).
- **Chinese government code-sharing or reuse platform** (national or provincial): none found. Chinese-language query returned only US Code.gov and Dutch examples.
- **Provincial government cloud with open-source reuse**: none found.
- **OpenHarmony in metro/rail**: none found.
- **Chinese use of European commons** (LibreOffice, Matrix, Nextcloud, OnlyOffice, X-Road, Decidim) and Chinese participation in TDF/Matrix/Nextcloud: not searched.
- **Danish examples**: not searched.

## Partly verified: what is missing
- openDesk: the 100,000-workstation figure comes from a 2026 press item; official ZenDiS or customer numbers not retrieved. Primary page opendesk.eu seen only as a search hit.
- La Suite / Tchap: figures come from a DINUM slide deck (March 2026) quoted in a search summary; a higher figure (500,000 agents) in another article is inconsistent and was discarded. Tchap launch date not verified.
- BwMessenger: user counts are Element (vendor) claims.
- Schleswig-Holstein: percentages and savings from state statements via trade press (borncity, techspot, computerwoche); no official state document read.
- Developers Italia: art. 69 CAD text and AgID guidelines not read; catalogue size not retrieved.
- Decidim: start year and users not confirmed.
- code.overheid.nl: snippet only.
- openEuler / openKylin: no .gov.cn adoption data; vendor-promotional market-share figures (70-90%) rejected. The State Grid claim is Jamestown's.
- OpenHarmony infrastructure: pilots only; no installed-base statistics. The 7M to 130M lines figure is from one trade article.
- RISC-V guidance: draft reported by Reuters in early 2025; final issuance and public procurement unconfirmed.
- Linux kernel: Huawei 5.10 ranking is from press; the 20% claim is secondary.
- Apache: only ShardingSphere (April 2020) and DolphinScheduler (17 March 2021) confirmed as TLPs; Chinese origin of Doris, Kylin, IoTDB unverified; no European user evidence.
- Eclipse Oniro: project page cited in the House letter, not fetched.

## Method limits
- .gov.cn geo-block fallback (r.jina.ai) was not needed: the one .gov.cn page fetched (Longgang, English edition) loaded directly. No other .gov.cn pages were attempted; official Chinese procurement standards and MIIT documents remain to be checked (an existing source list in `data/sources_urls.tsv` already includes MIIT items).
- Two PDFs (OFE report, MERICS primer) and the House letter were read as extracted text; Jamestown pages through a summarising fetch tool.

## Reading across
- The key structural finding is `cn-no-pa-reuse-policy`: as of July 2023, no formal OSS procurement/reuse policy in Chinese public administrations. Our evidence for PA reuse in China is therefore pilots (Longgang) and sector adoption (power grids), not a reuse regime. Revisit against the 2025-26 regional plans before using it as a current statement.

## Round 3 (2026-11-02)
Evidence level per METHODOLOGY section 4 now in the `evidence` field.
- Upgraded to verified (EU PA reuse): Schleswig-Holstein (A, state press releases), Tchap (A), BwMessenger (A, BWI), Decidim (A, Barcelona City Council), openDesk (A, operator + BMDS; the ~100,000 workstations claim stays press-only), code.overheid.nl (A, pilot), La Suite (A-v; DINUM user figures conflict, use Tchap entry). X-Road was already verified.
- Still partly verified: Developers Italia / art. 69 (B; statute text not read), Denmark (C, press only), Munich LiMux (B, negative lesson).
- CN verified: Longgang lab (earlier), Wuhan plan Wuzhengban [2026] No.3 (A), Shenzhen 2024 action plan (A), Chongqing 2026 plan (A-v, press piece on gov portal). Caveat: Wuhan/Shenzhen/Chongqing are policy documents with targets, not deployment data.
- openEuler/openKylin: no named government body adoption found on gov.cn; the Fujian group migration page names no OS and is expired. r.jina.ai worked for cq.gov.cn; nothing added to cn_vpn_needed.txt.
- Counts (pa-reuse, verified): EU 7 (openDesk, La Suite, Tchap, BwMessenger, Schleswig-Holstein, Decidim, code.overheid.nl) plus X-Road = 8; CN 4. Gate A met for EU; CN needs 1 more (candidates: Guangdong/Guangzhou OpenHarmony adaptation centre, a 政务 app on HarmonyOS from a provincial data bureau, a primary source for openEuler at State Grid).
