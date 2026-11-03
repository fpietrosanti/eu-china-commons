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
- Never sum `cap-per-project` or `unknown` amounts. Never sum envelopes with annual budgets.
- Distinguish fact (disbursed/budgeted, sourced) from commitment (envelope, announcement).
- Absence of data ≠ zero: record jurisdictions searched with no result in `data/funding/coverage.json`.
