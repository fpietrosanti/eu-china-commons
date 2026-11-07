# Chapter — How Europe and China fund open source

*Version 1.0, 3 November 2026. Closes research branches R12–R15 (docs/RESEARCH-REGISTER.md) for this round. Later rounds produce new versions of this chapter; changes are listed at the end.*

> **Open-source research from public sources, not official statistics.** Incomplete and correctable. Absence of data means *we found nothing*, not that nothing exists. Contribute: GitHub issues (label `funding-data`) or contact@eu-china-commons.eu.

Labels: **[F]** fact (sourced, evidence A/B) · **[C]** commitment (announced, not shown as spent) · **[I]** inference · **[P]** proposal.

## 1. What we measured
| Component | Records | Source file |
|---|---|---|
| Public money, open-source-specific only | EU 24, CN 21 (+ excluded generic schemes logged) | data/funding/, docs/FUNDING-COMPARISON.md |
| Private corporate money via foundations | EU 23 (Eclipse, FSFE, KDE, TDF…), CN OpenAtom 2020–23 | same, §1a |
| Modalities (who decides, instruments, strings) | qualitative fields on all records | docs/FUNDING-MODALITIES.md |
| Funding of individual projects | 34 projects (18 CN-origin, 16 EU) | docs/PROJECT-FUNDING.md, data/project-funding.json |

Amounts in EUR at ECB annual average rates. Depth reached: centres 2–3, peripheries 1–2 (docs/RESEARCH-DEPTH.md).

## 2. Findings

### 2.1 Amounts
1. **[F]** Documented EU public open-source money that can be summed: €11.5M (2023), €36M (2024), €19M (2025) — Germany and France only. On top, multi-year EU envelopes **[C]**: DARE up to €120M, NGI Zero ≈€65.5M (2018–27), OpenEuroLLM €20.6M, Chips JU RISC-V €60M.
2. **[F]** No Chinese public open-source amount could be summed: China publishes **per-project caps and rates**, not budgets or disbursements (largest caps: Wuhan East Lake ¥30M, Shanghai ¥20M, Shenzhen ¥10M). **[F]** No central-government open-source budget line was found.
3. **[F]** OpenAtom, China's national open-source foundation, filed ¥270M of income 2020–23 (≈€9–10M/yr in donations), 100% domestic, Huawei 37% (2023), plus ¥20.7M of government subsidy in 2023. **[I]** The widely cited "¥600M+ since 2020" (Xinhua) is not supported by the filings.
4. **[F]** European private corporate money is fragmented and small where it can be isolated (FSFE + KDE ≈€0.1–0.2M/yr); Eclipse Foundation (Belgium) has €9.4–15.4M revenue (2022–25) but does not separate member fees from public grants. **[I]** With Eclipse as an upper bound, European foundation money is of the same order as OpenAtom.

### 2.2 Modalities
5. **[F]/[I]** **China pays for adoption; Europe pays for creation and maintenance.** Chinese instruments are local adoption subsidies (Shenzhen 15% of investment + 5% for OpenHarmony-adapted RISC-V), prize-style grants paid after deployment, per-device rates. European instruments are competitive grants for new strategic tech (RISC-V, LLMs), small grants via intermediaries (NLnet), and — uniquely in Germany — a standing maintenance fund (Sovereign Tech Fund: curl €195k, OpenSSL €406k, KDE €1.29M).
6. **[F]** **Chinese money is tied to named national stacks** (OpenHarmony, openEuler, RISC-V, OpenAtom-hosted projects) and local registration; **European money is stack-neutral** and conditioned on open licences and co-funding. **[I]** In practice Chinese instruments exclude foreign firms; European ones do not exclude anyone by nationality.
7. **[F]** **Who decides:** in China local industry bureaus and development zones (the centre acts through OpenAtom, under MIIT supervision); in Europe the Commission's programmes and a few national agencies. The EU periphery (member states) is mostly absent: 23 of 27 show no dedicated money in our search **[I: light search, not conclusive]**.

### 2.3 Projects
8. **[F]/[I]** **Chinese flagships depend on one company each** (Huawei for OpenHarmony/openEuler; Alibaba, Baidu, Tencent, Ant, PingCAP, High-Flyer…), with the top funder close to 100%; Chinese-origin projects at Apache keep the founding company as payer. **European projects have more diverse, multinational funders** and are paid mostly by subscriptions or dual licensing (Nextcloud, Qt, SUSE, Element), with grants and donations for maintenance (curl, GnuPG, KDE, OpenSSL).
9. **[F]** Individual donations are almost absent in China (Ant Design ≈US$18k all-time on Open Collective; KubeSphere 0) versus e.g. curl ≈US$91k/yr.
10. **[F]** Governments as **paying customers** of open-source vendors are a European channel (BSI VS-Desktop for GnuPG, BwMessenger/Tchap for Element, openDesk); the closest Chinese equivalent is 信创 procurement of commercial openEuler distributions, which buys the proprietary product layer, not the commons. **[F]** Part of OpenAtom's project money flows back to the main donor (¥6.49M of ¥25.8M OpenHarmony spending to Huawei Cloud, 2023).

### 2.4 Transparency
11. **[F]** The transparency gap is the largest asymmetry found: European budgets and grants are published per project; Chinese support is visible as rules and ceilings, and award notices are scattered across local portals. **[I]** Any headline "China spends X vs Europe Y" is today unfounded in both directions.

## 3. Limits of this round
- Peripheries under-researched: EU national budgets not read; Chinese provincial portals not swept one by one; Chinese award notices (拟资助名单) not collected.
- Contributor-employer shares mostly inferred (B/C); OpenDigger affiliation data pulled for one project only.
- OCR-derived OpenAtom figures to be re-read on page images; several European figures (SCS, GnuPG STF, Matrix.org) to confirm.
- Exchange rates: annual averages; multi-year envelopes converted at start year.

## 4. Implications for EU–China cooperation **[P]**
1. **Complementarity is real and measurable:** China funds adoption at scale, Europe funds maintenance and creation. A shared agenda on **maintenance of common upstreams** (projects both sides depend on: Linux, OpenSSL, curl, RISC-V toolchains, Apache projects of Chinese origin) is non-competitive and verifiable.
2. **Transparency as the first cooperation deliverable:** a common, open template for reporting public open-source funding (amount, instrument, project, disbursement) — the schema used here could be the starting point.
3. **Diversify funding of Chinese-origin global projects:** single-company dependence is a resilience risk for everyone using them; European maintenance funds and foundations could co-fund under open governance.
4. **Screen, don't exclude:** OpenAtom is a state-supervised, single-country-funded vehicle; engagement should go through neutral foundations (Eclipse, Apache, OpenChain) with economic-security screening, as already practised in Oniro and Catena-X.

## 5. Next rounds (re-run recipes in RESEARCH-REGISTER R12–R15)
Chinese award notices (Shenzhen, Shanghai, Wuhan, Hangzhou, Guangdong); national budgets of the 10 largest EU economies; Eclipse Belgian statutory accounts; OpenDigger affiliation for openEuler, OpenHarmony, MindSpore, PaddlePaddle; OpenAtom 2024–25 filings when published.

## Changelog
- v1.0 (3 Nov 2026): first closure of the funding chapter.
