# Registry of publicly funded open-source projects - record schema

`data/registry/projects.json` is one JSON array (2-space indent, sorted by `id`). One record = one project (or, for bulk
catalogues, one catalogue entry). It is produced **only** by the harvesters in `tools/registry/` (or the `manual`/seed
scripts there); do not edit by hand - edit the harvester and re-run it. Records are merged by `id`, never deleted;
disappearance is expressed through `status` / `repo_http`.

| field | type | meaning |
|---|---|---|
| id | string | stable kebab-case key, prefix = source: `nlnet-`, `sta-`, `cordis-<projectId>`, `devita-`, `codegouv-`, `opencode-`, `codeoverheid-`, `openatom-`, `gh-<owner>-<repo>`, `profile-` |
| name | string | project name (as the source gives it) |
| name_original | string | name in original language/script (CN: Chinese name; CORDIS: full project title) |
| side | "EU" \| "CN" | Europe (EU + Europe-wide incl. UK/CH/NO) vs China |
| funder_level | "EU" \| "member-state" \| "region-city" \| "CN-central" \| "CN-provincial" \| "CN-city" \| "foundation" | level of the body that pays. `foundation` = non-state (or state-supervised) foundation such as NLnet-own funds, OpenAtom (MIIT-supervised) |
| country | string | country of the funder / lead organisation (CORDIS: coordinator country code) |
| region | string | region / province / city when the funder is sub-national |
| funder | string | body that pays, plus intermediary where relevant |
| programme | string | programme / fund / instrument |
| grant_id | string | grant agreement / project number when stated |
| amount | number \| null | amount **as stated by the source** for this project |
| currency | string | ISO code of `amount` (empty if null) |
| amount_type | "awarded" \| "cap" \| "unknown" | `awarded` = amount granted to this project (CORDIS `ecMaxContribution`, STA investment amount); `cap` = ceiling only; `unknown` = source does not state an amount (most records). Never sum `cap`/`unknown` |
| years | string | funding period or first-release year (`2022-2025`, `2024`) |
| description | string | 1-2 sentences; own words or a short attributed excerpt |
| domain | string[] | `os cloud ai security web messaging office hardware data devtools geo health accessibility energy` + source themes |
| repo_url | string | source repository |
| website | string | project site |
| licence | string | SPDX id when the source states it |
| status | "active" \| "archived" \| "unknown" | `archived` only when the source/forge says so; `active` = repository reachable and not archived (not a statement about maintenance) |
| repo_http | integer \| null | last HTTP status of `repo_url` (`tools/registry/repo_check.js`); null = not checked |
| sources | [{url, accessed}] | where the facts come from, with access date |
| evidence | "A" \| "B" \| "C" | **A** = funder's official page/database states the funding (NLnet, STA, CORDIS); **B** = project page / catalogue states the funding or public-sector ownership (README acknowledgement, publiccode.yml, public-sector forge, OpenAtom page); **C** = secondary source / inference |
| harvester | string | script that produced the record, or `manual` |
| first_seen / last_checked | date | ISO dates; `last_checked` is bumped on every harvester run that sees the record |

## Optional extra fields (documented, not required)
| field | meaning |
|---|---|
| oss_basis | how we know it is open source / publicly funded when that is inferred (CORDIS text mention; for README-verified records the matched funder phrase + grant id, never free text from the README; depositor-declared grant on Zenodo; publiccode.yml) |
| funding_ref | ids in `data/funding/eu.json` / `cn.json` that describe the programme-level money behind the record (`tools/registry/link_funding.js`) |
| stars | GitHub stars at harvest (gh_funding only) |
| public_money | profile seeds only: whether `data/project-funding.json` found public money (false = documented control) |
| profile_ref | pointer into `data/project-funding.json` |

## Semantics and caveats
- **Funding is not always project-specific.** For catalogues of public-sector code (Developers Italia, code.gouv.fr,
  openCoDE, code.overheid.nl) the public funding is *by construction* (the owner is a public body) and **no amount is
  stated** (`amount_type: unknown`, evidence B).
- CORDIS records are those whose CORDIS text (title, objective, keywords) mentions open source / free software, or that link a
  code forge; `amount` is the EC maximum contribution for the **whole project**, not for its software.
- NLnet records: NLnet does not publish per-project amounts on the project page; `grant_id` is the EC grant agreement of the
  NGI fund (shared by all projects of that fund), not a project number.
- Funding-statement records (`gh-*`) are verified by a regex on the README (phrase of the funder within ~140 chars of an
  acknowledgement cue); they are evidence B, and false positives are possible (see docs/REGISTRY.md for the measured precision).
- Never include people's names or e-mails. Individual donors/maintainers are dropped by the harvesters; e-mail addresses are redacted at write time (`lib.js scrub`); README excerpts are not stored. Free-text fields copied from a source (Zenodo/NLnet descriptions) may still mention people incidentally.
- Currency conversion is **not** done here (see `data/funding/SCHEMA.md` for the ECB-rate method).
