# Public open-source funding dataset — schema

One JSON array per side: `data/funding/eu.json`, `data/funding/cn.json`. One record per (funder, instrument, year).

| field | type | meaning |
|---|---|---|
| id | string | kebab-case unique, e.g. `de-sovereign-tech-agency-2024` |
| side | "EU" \| "CN" | |
| level | "eu-institution" \| "member-state" \| "cn-central" \| "cn-province" \| "cn-city" | |
| jurisdiction | string | "EU", "Germany", "Guangdong", "Shenzhen" (city → also set `province`) |
| province | string | CN only, for cities |
| funder | string | body that pays (English + original name) |
| instrument | string | programme / fund / budget line |
| year | integer | budget or disbursement year; multi-year envelopes: `year` = start, plus `period` |
| period | string | e.g. "2021-2027" when the amount is a multi-year envelope |
| amount | number | in original currency, as stated |
| currency | "EUR" \| "CNY" \| other ISO code | |
| instrument_type | "direct-spending" | "grant" | "adoption-subsidy" | "tax-credit" | "tax-deduction" | "procurement" | "equity-or-loan" | "donation" | how the money reaches the beneficiary. grant = non-repayable (fondo perduto) to develop OSS; adoption-subsidy = non-repayable to firms/bodies that ADOPT (national) open-source tech (e.g. Shenzhen OpenHarmony 15%); tax-credit/tax-deduction = tax expenditure for adopting or developing OSS (amount = forgone revenue if published, else the rate in note and amount_type cap-per-project/unknown) |
| beneficiary | "oss-projects" | "companies-adopting" | "companies-developing" | "public-bodies" | "foundations" | "mixed" | |
| amount_type | "disbursed" \| "budgeted" \| "committed-envelope" \| "cap-per-project" \| "unknown" | disbursed = actually paid/awarded; budgeted = in an adopted budget for that year; committed-envelope = announced multi-year total; cap-per-project = only a ceiling, NOT summable |
| oss_share | "exclusive" \| "partial" \| "unclear" | exclusive = whole amount is for open source; partial = programme where OSS is one part (amount then is the OSS part if known, else the total, flagged) |
| oss_amount_known | boolean | true if `amount` is the OSS-specific part |
| summable | boolean | true only if disbursed/budgeted, annualisable, OSS-specific — the only records used in totals |
| evidence | "A" \| "A-v" \| "B" \| "C" \| "D" | see docs/METHODOLOGY.md §4 |
| sources | [url] | primary first |
| note | string | how the figure was derived; quote the original phrase |

## Currency conversion (applied at build time, not stored per record)
- CNY→EUR with the **ECB annual average reference rate** of the record's year (`data/funding/fx_ecb_cny.json`). Multi-year envelopes: rate of the start year, flagged.
- Other currencies: ECB annual average of that year.
- Envelopes are annualised (amount / number of years) **only** in a separate column, never mixed with annual figures.

## Rules
- **Adoption incentives count** (Fabio, 3 Nov): non-repayable grants and tax credits for companies that adopt strategic national open-source technologies (openEuler, OpenHarmony, RISC-V, national OS; EU equivalents) are in scope. Record the rate (e.g. "15% of investment, cap 10M") in note; sum only when a total budget or forgone revenue is published.
- Never sum `cap-per-project` or `unknown` amounts. Never sum envelopes with annual budgets.
- Distinguish fact (disbursed/budgeted, sourced) from commitment (envelope, announcement).
- Absence of data ≠ zero: record jurisdictions searched with no result in `data/funding/coverage.json`.

## Qualitative fields (added 3 Nov, Fabio: "not only how much, but how")
Optional but expected whenever the source says it; feed docs/FUNDING-MODALITIES.md.
| field | meaning |
|---|---|
| selection | how beneficiaries are chosen: open-call, competitive-review, 揭榜挂帅 (open challenge), designated/direct-award, automatic (tax rule), membership/donor |
| conditions | eligibility and strings attached: domestic company, local registration, use of a named national stack, licence (OSI / Mulan / EUPL), upstream contribution, security review, matching funds |
| sovereignty_frame | the stated rationale, quoted: e.g. 自主可控, 安全可靠, 信创, 国产替代; "digital sovereignty", "strategic autonomy", "resilience", "public money public code" |
| intermediary | who manages the money: ministry, agency (Sovereign Tech Agency, NLnet), foundation (OpenAtom), SOE, local bureau, EDIC |
| openness_to_foreign | can non-domestic contributors/firms benefit? yes / no / unclear, with quote |
| outputs_required | code released? maintenance? adoption targets? |

## Inclusion rule — OPEN-SOURCE-SPECIFIC ONLY (Fabio, 3 Nov; overrides earlier guidance)
- A record enters eu.json / cn.json **only if the instrument is specific to open source**: the text names open source (开源 / open source / logiciel libre / FOSS) or a named open-source stack (openEuler, OpenHarmony, RISC-V open ISA, Linux distributions, OpenAtom projects; NGI, Sovereign Tech Agency, openDesk…) as the object or as a condition.
- **Excluded**: generic innovation, R&D, digitalisation or "Industry 4.0/5.0" grants and tax credits that could equally fund proprietary software, foreign cloud or closed technology (e.g. Transizione 4.0/5.0, CIR, Forschungszulage, WBSO, generic 信创 or 数字化转型 subsidies that do not require an open-source base). Do not record them as funding.
- Mixed programmes (e.g. Horizon Europe) count only for the **open-source-specific call or project** (e.g. OpenEuroLLM), never the whole programme.
- Excluded candidates are logged in `data/funding/excluded.json` ({jurisdiction, instrument, reason, source}) so readers can see what we left out and why.
