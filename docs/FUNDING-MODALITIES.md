# How China and Europe fund open source for sovereignty — qualitative analysis

*Draft frame, 3 Nov 2026. Filled from data/funding/{eu,cn}.json (qualitative fields) and the catalogue. Claims labelled fact / commitment / inference / proposal.*

> Open-source research from public sources; incomplete and correctable. Contribute: GitHub issues (label `funding-data`) or contact@eu-china-commons.eu.

## 1. Questions
1. **Who decides and who manages the money?** (ministry, agency, foundation, SOE, local bureau, EDIC)
2. **Through which instruments?** direct spending, grants, adoption subsidies, tax credits, procurement, donations via foundations.
3. **What is funded: creation, adoption or maintenance?**
4. **With which strings?** national stack, local registration, licence, security review, upstream contribution.
5. **With which sovereignty narrative?** 自主可控 / 安全可靠 / 信创 / 国产替代 vs digital sovereignty / strategic autonomy / public money public code.
6. **How open to the other side?** foreign contributors, foreign firms, international upstreams.
7. **How accountable?** published budgets, disbursement data, evaluation.

## 2. Comparison grid (first fill, 3 Nov 2026: 24 EU + 21 CN records)
| Dimension | China | EU (institutions) | EU member states |
|---|---|---|---|
| Main funders | Local industry bureaus and development-zone committees (Shenzhen, Shanghai, Wuhan East Lake, Hangzhou, Guangdong, Jiangsu); centre acts via OpenAtom (MIIT-supervised, funded by corporate donations, 100% domestic 2022–23), **no central open-source budget line found** | Commission programmes and joint undertakings: Horizon/NGI, Digital Europe, Chips JU, EuroHPC; DC-EDIC (small, mostly in kind) | Germany (Sovereign Tech Agency, ZenDiS, Prototype Fund) and France (DINUM, BlueHats) only; 23 states: nothing found (light search) |
| Dominant instrument | Prize-style grants paid after results; **adoption subsidies as % of investment** (Shenzhen 15% + 5% RISC-V; Wuhan 50% of R&D); per-device rates; venture-style fund matrices (Jiangsu) | Competitive grants, cascade funding through intermediaries (NLnet small grants) | Agency contracts for maintenance (DE); in-house development (DE openDesk, FR La Suite); small prizes (FR) |
| Stage funded | **Adoption and commercialisation** (distributions, native apps, devices); some creation (Shanghai tools, Hangzhou incubation); maintenance only in Guangdong (30% of community operating costs) | **Creation** of strategic tech (RISC-V/DARE, OpenEuroLLM) and small new projects (NGI) | **Adoption by public bodies** (openDesk, La Suite) and **maintenance** (Sovereign Tech Fund, unique in Europe) |
| Selection | Yearly local calls with review panels; awards after certification/sales/deployment | Open competitive calls; NLnet rolling open calls | Agency selection of critical projects (STA); open calls (Prototype Fund) |
| Conditions | Local registration; use of a named domestic stack (OpenHarmony, RISC-V, OpenAtom-hosted / "national open-source organisation"); payment tied to results | Open licence (NGI); co-funding (DARE, Chips JU) | Open licence; no domestic-firm requirement found |
| Sovereignty frame | Not explicit in the texts read (no 自主可控 quote found yet) — **to check** | "strategic autonomy", "digital sovereignty" in programme texts (to quote) | "digital sovereignty" (ZenDiS, STA) — to quote; "public money, public code" not found in sources |
| Openness to foreign participants | Never stated; local-registration and domestic-stack conditions exclude foreign firms in practice (inference) | Mostly unclear; NGI open to applicants worldwide (to verify) | Unclear; STA funds global upstream projects regardless of maintainers' nationality (to verify) |
| Transparency of amounts | **Only caps and rates published**; no adopted budget or disbursement found; award notices (拟资助名单) not yet collected | Envelopes published (CORDIS, calls) | Annual budgets published (DE), cumulative figures (FR) |

## 2b. First reading of the hypotheses (inference, 3 Nov)
- H1 (CN adoption vs EU creation/maintenance): **supported** by the first fill.
- H2 (CN foundations + local policy vs EU agencies): **supported**; the absence of any central budget line in China is notable.
- H3 (CN tied to named stacks, EU stack-neutral): **supported**.
- H4 (transparency asymmetry): **strongly supported**: 0 summable CN records vs 5 EU.
- H5 (different sovereignty goals): **not yet testable** — the sovereignty phrases still have to be quoted from the texts on both sides.
- Caveat: the EU side is dominated by DE and FR; 23 member states and the national budgets were not read; Chinese portals were not swept one by one.

## 3. Working hypotheses (inference, to test against the data)
- H1. China funds **adoption** of a few national stacks (openEuler, OpenHarmony, RISC-V) through local industrial subsidies and caps; Europe funds **creation and maintenance** of many independent projects through grants (NGI, Sovereign Tech Agency).
- H2. In China the money flows through **foundation donations from large firms** (OpenAtom: 100% domestic donations, 2022–2023) plus **local government industrial policy**; in Europe through **public agencies and EU programmes**.
- H3. Chinese instruments are tied to **named domestic stacks**; European ones are mostly **stack-neutral** but tied to licence/openness conditions.
- H4. Transparency is asymmetric: European budgets are published; Chinese support is mostly visible as **rates and caps**, not totals.
- H5. Both sides use **sovereignty** language, but with different goals: replacement of foreign technology (China) vs reducing dependency while staying in global upstreams (EU).

## 4. Implications for cooperation (proposal, after the data)
