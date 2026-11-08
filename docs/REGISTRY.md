# Registry of publicly funded open-source projects (EU and China)

Status: first build, 8 Nov 2026. Data: `data/registry/projects.json` (schema: `data/registry/SCHEMA.md`). Harvesters and re-run
instructions: `tools/registry/README.md`. Programme-level money (how much, how, by whom) lives in `data/funding/` and
`docs/FUNDING-CHAPTER.md`; this registry is the *project-level* layer ("which software did public money pay for") and links
back through `funding_ref` where a programme record exists. The 34 deep profiles in `data/project-funding.json` are
untouched and are included as `profile-*` seeds.

## 1. Executive summary

- **18,943 records: 18,250 EU side, 693 CN side.** Evidence: 2,932 A (funder's own page/database), 14,627 B (project page,
  catalogue or depositor states the funding or public ownership), 1,384 C (funder named in a README but no grant number found - possible false positives).
- **By level (EU side):** EU institutions 9,320 (NGI via NLnet 1,581; CORDIS 1,048; Zenodo software with a declared EC grant 4,833; README-declared Horizon 2020/Horizon Europe/ERC/NGI 1,856; 2 seeds); member-state 8,153 (German openCoDE public bodies 2,960; Zenodo-declared national grants SNSF/DFG/ANR/UKRI/FWF/RCN 1,996; README-declared national grants and Prototype Fund/Sovereign Tech 1,440; French code.gouv.fr 1,000; Italian PA catalogue 429; Dutch code.overheid.nl 192; Sovereign Tech Agency 95; 30 NLnet projects co-funded by Dutch ministries; 11 seeds); region-city 526 (municipal/regional public bodies: openCoDE 375, Italian PA 147, other 4); foundation 251 (NLnet's own funds 248, 3 seeds).
- **By level (CN side):** CN-central 548 (NSFC, MOST National Key R&D Program, CAS, 863/973/核高基 acknowledgements), CN-provincial 66, CN-city 28
  (Beijing 27, Shenzhen 25, Shanghai 12, Jiangsu 10, Guangdong 10, Zhejiang 6, Sichuan 1), foundation 51 (38 OpenAtom projects + deep-profile controls).
- **Funders, ranked by records:** European Commission (FP7 / Horizon 2020 / Horizon Europe / NGI) far ahead (~9,300); then the German public sector (openCoDE bodies, DFG, BMBF, Sovereign Tech Agency, Prototype Fund), French public sector (code.gouv.fr, ANR), UKRI, Swiss SNSF, Italian PA, Dutch government, Austrian FWF, Norwegian RCN; on the CN side NSFC (~400 records) and the MOST National Key R&D Program (~115).
- **Domains** (multi-label, keyword-classified, rough): devtools 2,601, web 1,537, data 1,459, AI 1,340, security 1,055, hardware 967, energy 880, cloud 509, messaging 504, OS 429, geo 405, office 399, health 366 (see the generated tables below for the full list).
- **Amounts:** only 1,143 records carry a stated amount (CORDIS 1,048 = EC contribution to the *whole* project, EUR 3.39 bn in total; Sovereign Tech Agency 95 = EUR 35.1 m). Everything else is `amount_type: unknown` - the sources simply do not publish per-project sums. **Never add these up as "open-source funding".**
- **Hard coverage gaps (details in section 4):** CN data is thin and indirect - no reachable Chinese funder database lists projects (MOST, NSFC, MIIT, provincial bureaux are unreachable/captcha-gated from outside China; queued in `data/cn_vpn_needed.txt`); Prototype Fund website blocks bots (we do not bypass); Gitee/AtomGit search needs tokens. The EU:CN ratio in this registry is a **sampling artefact of what is publicly queryable, not a measure of relative funding**.

<!-- STATS:BEGIN -->
Total records: **18952** (EU 18250, CN 702). Generated 2026-11-08 by tools/registry/stats.js.

**By side x funder level**

| side / level | records |
|---|---:|
| EU / EU | 9320 |
| EU / member-state | 8153 |
| CN / CN-central | 557 |
| EU / region-city | 526 |
| EU / foundation | 251 |
| CN / CN-provincial | 66 |
| CN / foundation | 51 |
| CN / CN-city | 28 |

**By harvester**

| harvester | records |
|---|---:|
| zenodo | 6917 |
| gh_funding | 3854 |
| opencode_de | 3335 |
| nlnet | 1859 |
| cordis | 1048 |
| codegouv | 1003 |
| developers_italia | 576 |
| code_overheid_nl | 193 |
| sta | 95 |
| openatom | 38 |
| seed_profiles | 34 |

**By evidence level**

| evidence | records |
|---|---:|
| B | 14636 |
| A | 2932 |
| C | 1384 |

**By country (top 20)**

| country | records |
|---|---:|
| EU | 8272 |
| Germany | 4919 |
| France | 1567 |
| United Kingdom | 881 |
| China | 702 |
| Italy | 693 |
| Switzerland | 610 |
| Netherlands | 605 |
| Austria | 180 |
| Spain | 140 |
| Norway | 95 |
| Greece | 53 |
| Belgium | 45 |
| Denmark | 32 |
| Sweden | 25 |
| Portugal | 20 |
| Finland | 20 |
| Ireland | 19 |
| Luxembourg | 12 |
| Czechia | 9 |

**By programme/funder family (top 25)**

| programme | records |
|---|---:|
| openCoDE public-sector code platform | 3335 |
| Horizon Europe | 1012 |
| code.gouv.fr public-sector source code directory | 1003 |
| H2020-EU.1.1. | 711 |
| NGI | 647 |
| H2020 | 608 |
| Developers Italia software catalogue (publiccode.yml, "riuso") | 576 |
| NGI0 Commons Fund | 537 |
| H2020-EU.1.3. | 507 |
| Horizon 2020 | 482 |
| HORIZON.2.4 | 435 |
| DFG | 348 |
| H2020-EU.1.4. | 344 |
| NSFC | 328 |
| UKRI | 325 |
| H2020-EU.2.1.1. | 288 |
| NGI Zero Core | 250 |
| BMBF/BMWK Förderkennzeichen | 246 |
| NGI0 Entrust | 245 |
| ERC | 236 |
| HORIZON.1.1 | 233 |
| HORIZON.2.5 | 208 |
| Stichting NLnet | 201 |
| code.overheid.nl government code platform | 193 |
| H2020-EU.3.5. | 188 |

**By domain**

| domain | records |
|---|---:|
| devtools | 2604 |
| web | 1537 |
| data | 1459 |
| ai | 1342 |
| security | 1055 |
| hardware | 967 |
| energy | 880 |
| cloud | 509 |
| messaging | 505 |
| os | 429 |
| geo | 406 |
| office | 399 |
| health | 366 |
| softwareengineering | 207 |
| operatingsystems | 119 |
| decentralisedsolutions | 116 |
| activitypub | 113 |
| dataandai | 112 |
| middlewareandidentity | 104 |
| networkinfrastructure | 98 |

**CN records by harvester**

| harvester | records |
|---|---:|
| gh_funding | 558 |
| zenodo | 88 |
| openatom | 38 |
| seed_profiles | 18 |

**CN records by funder level**

| level / region | records |
|---|---:|
| CN-central / - | 557 |
| foundation / - | 51 |
| CN-provincial / Beijing | 27 |
| CN-city / Shenzhen | 25 |
| CN-provincial / Shanghai | 12 |
| CN-provincial / Jiangsu | 10 |
| CN-provincial / Guangdong | 10 |
| CN-provincial / Zhejiang | 6 |
| CN-city / - | 3 |
| CN-provincial / Sichuan | 1 |

**Records with a stated awarded amount (EUR)**: 1143 of 18952. cordis: 1048 records, EUR 3,391,016,947 (whole-project grants, not OSS-only - do not add up across sources); sta: 95 records, EUR 35,147,036 (whole-project grants, not OSS-only - do not add up across sources)

**Repository links**: 12792 records have a repo_url; 12750 checked; 118 not reachable (HTTP >= 400 or no answer).

<!-- STATS:END -->

## 2. How the registry is maintained

| source | harvester | cadence | what it yields |
|---|---|---|---|
| NLnet / NGI project pages | `nlnet.js` | monthly | all NLnet-funded projects (1,859): fund, period, EC grant agreement of the NGI fund, repo, website. 1,581 EC-funded via NGI, 248 NLnet-own funds, 30 funded by Dutch ministries |
| Sovereign Tech Agency | `sta.js` | monthly | 95 investments with amount, year(s), repo |
| CORDIS bulk CSV (H2020 + Horizon Europe) | `cordis.js` | after each CORDIS release | 1,048 projects whose text mentions open source/free software or that link a forge; EC contribution, coordinator country |
| Zenodo software with funder metadata | `zenodo.js` | quarterly | EC (4.8k collapsed software records), SNSF, DFG, ANR, UKRI, FWF, RCN and Chinese funders (NSFC, CAS, MOST...) as declared by depositors |
| GitHub README funding statements | `gh_funding.js` | quarterly | Prototype Fund, Sovereign Tech, NGI cascade funders, Horizon, ERC, ANR, BMBF, DFG, SNSF, UKRI, NWO, PNRR; China: NSFC, MOST key R&D, 863/973/核高基, CAS, Beijing/Shanghai/Zhejiang/Guangdong/Jiangsu/Sichuan/Shenzhen... |
| Developers Italia | `developers_italia.js` | monthly | 576 publiccode.yml entries of Italian public administrations |
| code.gouv.fr | `codegouv.js` | quarterly | 1,003 licensed public-sector repos (snapshot upstream is mid-2024) |
| openCoDE (Germany) / code.overheid.nl (NL) | `opencode_de.js`, `code_overheid_nl.js` | monthly | 3,335 / 193 repos of public bodies |
| OpenAtom Foundation | `openatom.js` | monthly | 38 graduated / incubating / archived projects with donor organisations |
| deep profiles | `seed_profiles.js` | on change | 34 `profile-*` records (16 EU, 18 CN) |
| post-processing | `link_funding.js`, `repo_check.js`, `stats.js` | after each harvest | `funding_ref`, repo liveness (GitHub via GraphQL), counts |

Idempotency: records merge by `id`; `first_seen` is kept, `last_checked` bumped; empty values never erase; nothing is deleted. A cross-process
lock protects `projects.json`. Raw downloads are cached under `tools/registry/.cache/` (not for version control). All harvesters are polite (<= 5 connections, 0.2-1.2 s delays).
Two one-off clean-ups were done on our own earlier output (not on source data): (1) 3,750 Zenodo records that are *components of the same release* (mostly the gCube system, FP7 iMarine) were collapsed
into one record per repository + grant (`components` field); (2) 18 Zenodo records whose "funder" was a university/scholarship body were removed (classifier fixed).

## 3. Notable findings

Labels: **fact** = measured from a source named in the record (evidence level in brackets); **inference** = our reading.

1. **Fact (A).** NLnet's public list holds 1,859 projects. 1,581 are paid with European Commission money through NGI funds (NGI0 Commons Fund 537, NGI Zero Core 250, NGI0 Entrust 245,
   NGI0 PET 162, NGI0 Discovery 162, NGI Assure 156, ...); 248 are NLnet-own funds (mostly pre-2018, funded from NLnet's endowment/donations); 30 funds carry a Dutch ministry as co-funder.
   NLnet does not publish per-project amounts on these pages, so NGI amounts exist only at fund level (`data/funding/eu.json`).
2. **Fact (A).** The Sovereign Tech Agency's 95 published investments total EUR 35.1 m (largest: Prossimo EUR 1.44 m, KDE EUR 1.29 m, Let's Encrypt 2026 EUR 1.07 m, PyPI EUR 1.06 m, GNOME EUR 1.00 m); 69 link a repository. These are the only EU project-level OSS-specific amounts we could harvest in bulk.
3. **Fact (A).** CORDIS lists 1,048 Horizon 2020/Horizon Europe projects whose own text mentions open-source or free software (EUR 3.39 bn EC contribution to the whole projects, *not* the software share); only 172 of them expose a code-forge link in CORDIS. Software is thus rarely a first-class, queryable output of EU research grants.
4. **Fact (B).** On Zenodo, 4,833 open software records (after collapsing duplicates) declare a European Commission grant; another 1,996 declare SNSF, DFG, ANR, UKRI, FWF or RCN grants. The depositors, not the funder, assert the link (EC grants are matched to CORDIS ids).
5. **Fact (B).** Public administrations are large, *unfunded-in-the-data* producers of open code: 3,335 public-body repos on openCoDE, 1,003 on code.gouv.fr (snapshot), 576 in the Italian catalogue, 193 Dutch. Their funding is the administration's own budget by construction; no per-project amount exists.
6. **Fact (B), partly C.** Because the Prototype Fund's own site is behind a bot challenge, a README-based search was used instead and finds 182 Prototype Fund-credited repos. Spot-check of 28 randomly sampled gh_funding records: 23 correct (82%); precision is worst for NSFC (5 of 8) where READMEs mention the foundation in unrelated ways (journal rankings, grant-application templates). Records without a grant number are downgraded to evidence C (1,379 records).
7. **Fact (B).** CN side: 693 records, of which 558 come from README statements and 79 from Zenodo metadata (NSFC 68, CAS, MOST, ...), 38 from OpenAtom's project page, 18 deep-profile seeds. Provincial/city funders appear in 94 records (Beijing 27, Shenzhen 25, Shanghai 12+, Jiangsu 10, Guangdong 10, Zhejiang 6).
8. **Inference.** The CN records are overwhelmingly *academic code* acknowledging a research grant (NSFC, MOST key R&D programme) - the Chinese equivalent of Horizon/DFG acknowledgements. Chinese **open-source-specific** public money (OpenAtom, local adoption subsidies, 信创 procurement, Shenzhen/Wuhan/Hangzhou/Shanghai open-source funds in `data/funding/cn.json`) has *no project-level public ledger* that we could reach: OpenAtom publishes donors and project status, not per-project sums; the provincial/city programmes publish rules and sometimes award lists on .gov.cn pages unreachable from outside China.
9. **Inference.** The structural contrast is not "EU funds more projects": the EU side has several *designed-for-disclosure* instruments (NGI, STA, CORDIS, mandatory publiccode.yml-style catalogues) that make every funded OSS project enumerable; the CN side routes OSS money through a foundation (OpenAtom), enterprise donors, and procurement/adoption subsidies that are not enumerable by project. This explains the registry's asymmetry.
10. **Fact (measured, 8 Nov 2026).** Repository liveness: of 7,948 GitHub-hosted records (GraphQL), 7,876 resolve and 72 are NOT_FOUND (0.9%); of 1,119 records on other forges checked by HTTP, 937 answer 200, 26 return 404 and 145 do not answer (mostly institutional GitLab instances that are offline or login-gated). Repos listed through openCoDE / code.overheid.nl APIs are public by construction (3,528). Archived repos are flagged `status: archived`.

## 4. Coverage gaps and next steps

| gap | why | next step |
|---|---|---|
| **China project-level data** | MOST service platform, NSFC project database (captcha), MIIT, provincial/city bureaux unreachable or gated from outside China; Gitee/AtomGit search need tokens | 18 target URLs queued in `data/cn_vpn_needed.txt` (`# registry`); run through VPN session, extract project lists; add `cn_most.js`, `cn_nsfc.js` harvesters; consider a Gitee token run for `国家重点研发计划` etc. |
| OpenAtom ecosystem | only the 38 projects listed on openatom.cn/projects (the foundation says 60+ graduated/incubating, 70+ through TOC review) | AtomGit organisation pages; OpenAtom work reports (already in `docs/CN-FOUNDATIONS.md`) for donor totals |
| Prototype Fund | site behind Bunny Shield bot challenge (403); we do not circumvent | request export from OKF Germany, or add a manual list; README route is partial |
| EU Digital Europe, CEF, IPCEI, EU-STF pilot, Chips JU, EuroHPC | no OSS-specific project database | extend `cordis.js` to Digital Europe/EuroHPC/Chips JU when CORDIS covers them; manual lists |
| OpenAIRE Graph / OpenAlex | not yet used; would add funder-linked software and papers with code at scale | new harvester `openaire.js` (software products with funding) |
| Member states: Spain CTN/Red.es, Nordics, Austria, Poland, Czechia, Belgium | no national catalogue harvested | add national catalogues (administracionelectronica.gob.es CTT, Joinup, code.europa.eu), German BMBF Foerderkatalog, ANR open data, Bpifrance/France 2030 lists |
| Regions/cities in EU | only through public-sector forges (openCoDE, code.gouv.fr, publiccode.yml) | municipal GitHub orgs (government.github.com list) |
| Amounts | most sources publish none | join CORDIS amounts for Zenodo EC records (grant id -> `ecMaxContribution`) |
| Licence/domain | `licence` missing for ~7,400 records; domain labels are keyword-based | enrich via SPDX from forge APIs; replace classifier with a reviewed taxonomy |
| UK/CH/NO treated as EU side ("Europe") | design choice | flag via `country` if a strict EU27 cut is needed |

Reproducibility: every number above is regenerated by `node tools/registry/stats.js`; the harvesters never delete data, so counts only go up except where a
documented one-off clean-up is stated in section 2.
