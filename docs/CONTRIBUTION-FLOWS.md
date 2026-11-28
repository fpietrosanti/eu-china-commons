# Who contributes to whom: EU–China contribution flows and cooperation targets

European developers are one of the largest workforces of the global open-source commons, but they are almost absent from projects led from China. In 2025, EU countries supplied at least 3.2% of the contributions to China-led projects and at least 14.6% of the contributions to US-led projects. In absolute terms, Europe put about 45 times more work into US-led projects than into Chinese ones. This page sets out the figures, what they do and do not measure, and how they can serve as baseline indicators for EU–China cooperation goals.

*Source: KAIYUANSHE (开源社) China Open Source Annual Report 2025, data chapter §2.2.4–2.2.5 and Table 2-5, compiled by KAIYUANSHE/X-lab from OpenDigger data. The table is reproduced in [`data/external/kaiyuanshe/derived/contribution-flows-2025.tsv`](../data/external/kaiyuanshe/derived/contribution-flows-2025.tsv). Level **C** ("reported by KAIYUANSHE/X-lab") for the figures; the EU aggregates and ratios are our arithmetic on that table. Context: [KAIYUANSHE corpus](KAIYUANSHE-CORPUS.md) §6–7.*

## 1. The headline figures (2025)

| | China-led projects | US-led projects |
|---|---|---|
| Total OpenRank contribution received (derived from the table) | 31,721 | 313,699 |
| Share from the home country | **79.1%** (China) | **38.2%** (US) |
| Share from abroad | 20.9% | 61.8% |
| Share from EU27 countries in the top 10 | **3.2%** (DE 1.35, SE 0.59, BG 0.56, CZ 0.73) | **14.6%** (DE 6.84, FR 3.66, NL 2.26, PL 1.86) |
| Possible EU27 share including countries outside the top 10 (upper bound) | 10.0% | 36.7% |
| EU27 share of all foreign contributions (top-10 countries only) | 15.4% | 23.7% |
| EU27 contribution, OpenRank units | 1,022 | 45,891 |
| Contribution from the other superpower | US → China-led: 1,986 (6.3%) | China → US-led: 24,519 (7.8%) |

- **FACT (C).** 79.14% of the contribution to China-led projects comes from developers located in China. The report ranks China 10th in the world for internationalised collaboration and calls this "build it yourself, use it yourself".
- **FACT (C).** US-led projects take 61.8% of their contribution from abroad. China is the largest foreign contributor (7.81%), then Germany (6.84%).
- **INFERENCE (our arithmetic).** Europe contributes about **45 times** more to US-led projects than to China-led ones (45,891 vs 1,022). Germany alone contributes 50 times more (21,473 vs 428).
- **INFERENCE (our arithmetic).** China contributes 12 times more to US-led projects than the US contributes to China-led projects. The report calls this "one-way integration".
- **FACT (C).** The report describes the global pattern as "center–periphery": China is a "receiver" active in US-led projects such as Linux, Kubernetes and PyTorch, while "substantive overseas participation in China's local projects remains very limited".

## 2. How this fits with the rest of the data

- **FACT (A, our recomputation, [KAIYUANSHE corpus](KAIYUANSHE-CORPUS.md) §6).** On OpenDigger's 2025 country data, the EU27 accounts for 28.9% of developer contribution and China for 6.5%. On *project* influence, China has 20.1% and the EU27 6.6%.
- **INFERENCE.** The two sides are complementary. Europe has the contributors but few large projects of its own; China has built large projects but draws almost entirely on its own developers. The cooperation gap is precisely the European workforce that is not present in Chinese-led projects.
- **INFERENCE.** This is the quantitative core of the project's "compete above, cooperate below" thesis: the space for cooperation lies in the shared layers (libraries, toolchains, operating-system packages, AI frameworks) where European contributors could work on Chinese-led commons and vice versa.

## 3. Proposed cooperation indicators (baseline 2025)

These are proposals for the yearly **EU–China Digital Commons Index** (roadmap A5). The baselines come from the table above. The targets are illustrative scenarios for discussion with stakeholders, not commitments.

| # | Indicator | Baseline 2025 | Illustrative target | Data status |
|---|---|---|---|---|
| I1 | EU27 share of contributions to China-led projects | ≥ 3.2% (upper bound 10.0%) | Reach the US level (6.3%) within 3 years; double it within 5 | Reported (C); recompute from OpenDigger |
| I2 | China share of contributions to EU-led projects | **Not published** | Measure first | Needs our own calculation |
| I3 | EU contribution to China-led projects as a ratio of EU contribution to US-led projects | 1 : 45 | 1 : 20 | Derived |
| I4 | Number of China-led projects in the global top 300 with at least one maintainer or committer based in the EU | Unknown | Measure first | Needs maintainer-level data |
| I5 | Number of projects co-hosted or co-governed by EU and Chinese organisations in a neutral foundation (Apache, Eclipse, Linux Foundation Europe, OpenAtom…) | Unknown | Measure first | Foundation records |
| I6 | Contribution flow in specific shared layers (e.g. openEuler / OpenHarmony packages, RISC-V toolchains, AI frameworks) | Unknown | Measure first | Repo-level analysis |

**Why I2 matters most.** The report only publishes the distribution for China-led and US-led projects. Without the reverse figure, the contribution of Chinese developers to EU-led projects, we cannot say whether the relationship is balanced, nor set reciprocal goals. Computing it is the first task of follow-up 18.12.

## 4. Caveats

- **Level C.** These are KAIYUANSHE/X-lab figures. The inclusion rules for "China-led" and "US-led" projects are not published (same issue as 18.9).
- **Top 10 only.** The EU share is a lower bound. EU countries outside the top 10 (Italy, Spain, Austria, Finland and others) are not listed, so the true share lies between the lower and upper bounds in §1.
- **OpenRank is not headcount.** It weights activity by its position in the collaboration network. Large corporate projects with many employee contributors score high.
- **Location is self-declared.** Many developers declare no location and are excluded.
- **Platform coverage.** Contributions on Gitee and AtomGit are covered only partly. Since Chinese activity is moving off GitHub ([KAIYUANSHE corpus](KAIYUANSHE-CORPUS.md) §7.1), the home share of China-led projects may be underestimated rather than overestimated.
- **Inconsistencies in the source.** The text says US local share is "in 2024" while the table is 2025. The rank order of Bulgaria/Sweden and Poland/Switzerland does not match the values. The column headings of the table repeat "China-led" for the US half.

## 5. Method: how X-lab built the figures, and how we will rebuild them (task 18.12)

### 5.1 What X-lab did (read from the OpenDigger source code, 28 Nov 2026)

The report says only that the data come from OpenDigger (§1.2.4). It does not say how a developer gets a country or how a project gets a "home" country. We read the OpenDigger code at commit `dcf69edcb0` (archived in `sources/archive/`) to reconstruct the method.

- **FACT (A, code). Developer country = geocoded GitHub profile.** The free-text `location` field of each GitHub profile is sent to the Google Maps geocoder and the returned country is stored ([`updateLocation.ts`](https://github.com/X-lab2017/open-digger/blob/dcf69edcb0e9e29c0dcd76c65a38840b8847a45d/src/cron/tasks/updateLocation.ts)). Developers with an empty or unparseable location have no country and drop out of country tables. The share of developers with a valid country is computed in [`globalDeveloperAnalysis.ts`](https://github.com/X-lab2017/open-digger/blob/dcf69edcb0e9e29c0dcd76c65a38840b8847a45d/src/dataProduction/globalDeveloperAnalysis.ts) but not published in the report.
- **FACT (A, code). Contribution = activity weighted by OpenRank.** "Activity" counts five actions (open issue, issue comment, open PR, PR review, merge PR); "community OpenRank" weights them by the contributor's position in the project's collaboration network (report §1.2.1–1.2.2). Stars and forks do not count.
- **FACT (A, code + labels). Project country = country of the initiating organisation in a hand-curated label set.** In [`chinaAnnualReport.ts`](https://github.com/X-lab2017/open-digger/blob/dcf69edcb0e9e29c0dcd76c65a38840b8847a45d/src/dataProduction/chinaAnnualReport.ts) a project's country is found by walking up its labels: project → company/university/agency → `:divisions/<country>`. The links are maintained by hand in `labeled_data/`.
- **FACT (A, our count of the label files).** The label set links **260 organisations to the US, 154 to China and 35 to all EU27 countries together** (DE 14, FR 6, NL 6, others 1 each). Foundation-hosted projects (Apache, Linux Foundation, Eclipse) are not linked to a country unless a company label claims them.
- **FACT (A, code). Gitee and AtomGit are counted entirely as China.** These platforms carry no location data, so in the OpenShare country figures their OpenRank is added to China in full; AtomGit active users are added to China's developer count at 80% ([`openshareOverview.ts`](https://github.com/X-lab2017/open-digger/blob/dcf69edcb0e9e29c0dcd76c65a38840b8847a45d/src/dataProduction/openshareOverview.ts)). From 2025 all contribution and influence values are multiplied by 1.15 (this does not change shares).
- **Not public.** The query behind Table 2-5 and Figure 2-9 (the flow matrix) is not in the repository. We assume it combines the three elements above, but this is **not verified**; we will ask X-lab (18.9).

**What this implies for the 3.2% figure.**
- **INFERENCE.** European contributors are probably *under*-counted: Europeans who leave the location field empty, or write a city the geocoder cannot resolve, disappear; and contributions to China-led projects hosted on Gitee/AtomGit (OpenHarmony's main home) cannot be located at all.
- **INFERENCE.** "EU-led projects" are almost undefined in this label set (35 EU organisations), which is probably why the report shows only China-led and US-led projects. Any reverse measure (I2) needs our own definition of EU-led projects first.
- **INFERENCE.** The measure is about *where people say they live*, not who employs them. A Huawei engineer in Munich counts as German; a European working remotely for a Chinese firm counts as European. Both readings are legitimate, but they answer different policy questions.

### 5.2 How we will rebuild it (18.12, proposed design)

Goal: a country × project-origin matrix, published at level A with code and data, that answers four questions: how much do Europeans contribute to China-led projects (I1), how much do Chinese developers contribute to EU-led projects (I2), in which shared layers (I6), and with what uncertainty.

1. **Project sets (our own, published as lists).**
   - China-led: the 282 projects in OpenShare's China scope, cross-checked with the 504 projects of the external report (R17).
   - EU-led: built by us from the catalogue, DIRECTORY-EU, Eclipse, OW2, Linux Foundation Europe and EU-company projects (SAP, Siemens, Bosch, Nextcloud, …). Each project carries the reason for its classification.
   - US-led: OpenShare/OpenDigger US labels, as benchmark.
   - "Shared layer" projects (Linux kernel subsystems, RISC-V toolchains, PyTorch, Apache projects with Chinese PMC members) as a fourth group.
2. **Contributors per project.** OpenDigger publishes, per repository and year, the list of contributors with their activity score (`activity_details.json`, public, including Gitee repos). This gives the logins and weights without running our own event pipeline.
3. **Locating contributors, three independent signals.**
   - **M1, profile location** (as X-lab): GitHub/Gitee profile `location`, matched offline against a gazetteer (GeoNames) instead of a commercial geocoder, so the method is reproducible.
   - **M2, commit time zone**: for each project's main repositories we read the git history (`git log`), which records the author's UTC offset on every commit on any platform, Gitee and AtomGit included. UTC+8 without daylight saving points to China; UTC+0…+3 with a summer/winter switch points to Europe. This locates people who leave the profile empty.
   - **M3, affiliation**: commit e-mail domains and the profile `company` field, to separate *where people are* from *who employs them* (e.g. Huawei Europe, SUSE, Linaro, Eclipse staff).
4. **Measures.** Headcount of active contributors and activity-weighted share, both per project group and per country, with EU27 as one unit.
5. **Uncertainty, published with every figure.**
   - Coverage: share of contributors located by M1, by M2, by both, by none.
   - Agreement between M1 and M2 where both exist (it estimates the error of M2 for the rest).
   - Bounds: the EU share if all unlocated contributors were European, and if none were.
6. **Validation.** Re-run the same pipeline on X-lab's definitions (their project lists, M1 only, GitHub only) and check that we reproduce Table 2-5 approximately. If we do, the difference between their figure and ours is attributable to the method choices above.
7. **Ethics and data protection.** We publish only aggregates by country and project group, never per-person locations. Login-level intermediate data stays on the server and is deleted after aggregation.

**Cost and limits.** OpenDigger's public files cover the contributor lists; locating contributors needs the GitHub API (about 5,000 requests per hour with a token) and git clones of a few hundred repositories. Time zone is a proxy, not a fact: India (+5:30) and Russia (+3) are distinguishable from the EU only in part, and contributors who travel or use UTC settings add noise; this is why M1, M2 and M3 are triangulated and the bounds are published.

## 6. Next steps

- **18.12 (new).** Recompute the flow matrix ourselves from OpenDigger event data for all countries, adding **EU-led projects** (indicator I2) and the EU27 as one unit. Publish the matrix at level A and the code that produces it.
- Ask KAIYUANSHE/X-lab for the full country × project-origin matrix behind Figure 2-9 and Table 2-5 (linked to 18.9).
- Set the targets for I1–I6 with stakeholders (outreach track) and track them yearly in the Index.

## Changelog
- 2026-11-28: §5 method: X-lab's method reconstructed from the OpenDigger code (geocoded GitHub location; project country from hand-curated labels, 260 US / 154 CN / 35 EU organisations; Gitee/AtomGit counted as China); our 18.12 design (three location signals, own EU-led project set, bounds).
- 2026-11-27: first version, from the 2025 report Table 2-5; indicators I1–I6 proposed; follow-up 18.12 opened.
