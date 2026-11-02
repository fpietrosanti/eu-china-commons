# Multi-level registry of open-source / digital-commons initiatives: EU and China

Draft v0.1, 2 November 2026. Data: [../data/initiatives.json](../data/initiatives.json) (50 records). Source URLs: [../data/new_source_urls.txt](../data/new_source_urls.txt).
Method: about 40 web calls. Chinese municipal texts for Beijing, Shanghai, Hangzhou, Shenzhen and Chongqing were read in full or in part through the r.jina.ai relay; MIIT only as a press-conference text. Many EU items rest on search summaries. Each record carries an `evidence` grade (primary / secondary / unverified). Targets are announced goals, not results, unless stated.

## (a) Overview

| Level | Records | Primary | What it contains |
|---|---|---|---|
| EU | 12 | 4 | Open Source Strategy (3 Jun 2026), Maintenance Instrument, Open Internet Stack, Commission OSPO and network, DC-EDIC, EDCOM, EU-STF pilot, Interoperable Europe Act/OSOR, NGI, CRA Art. 24, Digital Europe (not researched), JRC (not researched) |
| CN-central | 11 | 6 | MIIT AI+Software plan (11 Sep 2026), 14th and 15th FYP, OpenAtom, AtomGit, Gitee, Mulan, GB/T 44272-2024 (unverified), KAIYUANSHE, OpenHarmony, RISC-V guidance (unverified) |
| EU-national | 15 | 3 | FR La Suite (+ unsourced Etalab stub), DE ZenDiS/openDesk, Sovereign Tech Agency, Deutschland-Stack, Schleswig-Holstein, IT CAD arts. 68-69 + Developers Italia, NL policy and code.overheid.nl, ES CTT, DK, EE X-Road, AT Bundesheer, BE, PL |
| CN-provincial | 12 | 7 | Beijing, Shanghai, Zhejiang, Hangzhou, Jiangsu/Suzhou, Guangdong, Shenzhen (+Longgang), Chongqing (plan + foundation), Wuhan, Hunan |

Changes to the memo found while verifying:
- MIIT says "5 or more" key projects by 2028, not "at least five". The text read does not mention SBOM, public-sector adoption or international cooperation.
- Beijing's plan was issued **24 Dec 2025**. It contains no amounts, but it has a procurement-linked instrument ("open-source first solution", support as a share of actual procurement value) and SBOMs "in principle" for fiscally funded software. The memo underplayed this.
- Shanghai: doc no. 沪府办〔2025〕33号, effective 15 Dec 2025 to 14 Dec 2028. No monetary amounts and no procurement or OSPO provisions.
- Hangzhou caps verified: RMB 1m / 500k, plus RMB 2m platform grants. Hangzhou 杭政办函〔2026〕9号, effective 27 May 2026 to 2028.
- Shenzhen: 深府办规〔2026〕1号, 15% + 5%, RMB 10m cap confirmed.
- Jiangsu: the RMB 1bn is "planned total scale"; paid-in status unstated. 16 first tenants.
- Guangdong: no document number; announced at a press conference (year not on page).
- Chongqing: milestones of 20,000 developers by 2027 (new); no amounts.
- New: Wuhan (Jan 2026), explicitly encouraging fiscally funded public-body systems on OpenHarmony (secondary source); Hunan (13 Oct 2026).
- Not found: Sichuan, Fujian, Shandong provincial open-source plans (one search; absence not proven).
- The 15th FYP Outline (13 Mar 2026): no confirmation of an explicit open-source passage. Only the Government Work Report line "support building AI open-source communities" is reported, via secondary press.

## (b) Cross-level comparison

### EU vs China central

| Dimension | EU | China central |
|---|---|---|
| Core instrument | Soft law plus institutions: Strategy, DC-EDIC, EDCOM, OSPO network. Hard law at the edges: Interoperable Europe Act (equivalence-based open-source preference), CRA steward role | Industrial-policy plans (MIIT) that channel projects to one national foundation and one national platform |
| Who funds | Commission grants (NGI, EDCOM, possibly Digital Europe), Member State contributions; Open Internet Stack and the Maintenance Instrument have no amounts yet | No central amounts found in the MIIT text; funding is implicit through OpenAtom and provinces |
| Reuse logic | Reuse of public code and interoperability solutions (portal, OSPO network, procurement guidelines, EUPL) | Reuse of code, models and datasets on AtomGit; reuse as hosting/discovery, not as administrative duty |
| Creation vs maintenance | First explicit maintenance tools: Maintenance Instrument, EU-STF pilot, dependency mapping, CRA stewards | Creation and incubation dominate (key projects, incubation, projects count). Maintenance is not a named instrument in the texts read |
| Governance | Multi-state consortium, subsidiarity, neutrality criteria | One national foundation (OpenAtom) acts as steward and platform owner; independence not assessed |
| Public-sector demand | Procurement guidelines and open-source-first language (weak per CNLL) | Not addressed in the MIIT text read; left to provinces |

### EU national vs China provincial

| Dimension | EU member states | Chinese cities/provinces |
|---|---|---|
| Typical instrument | Platform or institution run by the administration (La Suite, openDesk, code.overheid.nl, CTT), legal duty to publish (IT art. 69, NL "open unless") | Quantified ecosystem targets plus subsidy: project awards (Hangzhou), community operating-cost share (Guangdong), adoption subsidy (Shenzhen), funds (Jiangsu) |
| Who funds | Central government budgets; DINUM seeks ministry contributions; ZenDiS federal; STA federal | City/province budgets; Jiangsu mixes public money and investor funds (announced) |
| Reuse logic | Reuse **between administrations** (same code deployed in many bodies; Docs co-developed FR/DE) | Reuse mostly **between firms and communities** (national hosting required for Hangzhou award); public-sector reuse appears only in Beijing (SBOM, donation to platforms) and Wuhan/Longgang/Chongqing (OpenHarmony systems) |
| Demand side | Sovereignty-driven migration (FR Visio 2027, SH LibreOffice, DK, AT) | Industrial upgrade subsidies (Shenzhen), public-body IoT systems (Wuhan, Chongqing) |
| Maintenance | STA (DE) is the only mature example; most MS programmes build and migrate | Guangdong cost share is the closest analogue; no maintainer-level fund seen |
| Transparency | Usage figures often press/vendor claims, critics exist (Cour des comptes) | Targets only; achieved results rarely reported |

A recurring pattern: Europe's strength is **administration-to-administration reuse and law**; China's is **fast, quantified, multi-instrument local programmes**. Neither side evidences independent outcome data.

## (c) Pairings

| EU / EU-national | China | Fit | Why |
|---|---|---|---|
| EU-01 Strategy | CNC-01 MIIT AI+Software | partial | Both make open source industrial/sovereignty infrastructure. EU stresses public administration and maintenance; MIIT stresses incubation and AI |
| EU-05 DC-EDIC | CNC-04 OpenAtom | partial | Stewardship institutions; very different mandate (consortium of states vs. non-profit foundation) |
| EU-12 EU-STF, EUN-DE-02 STA | CNP-HZ, CNP-GD, CNP-JS | weak | Money for open-source work. Hangzhou pays one-off incubation awards, Guangdong pays community operating costs, Jiangsu is venture finance. None funds maintainers of third-party dependencies |
| EUN-NL-01, EUN-IT-01 | CNP-BJ | partial | Only Beijing couples procurement and SBOM with open source in a public text |
| EU-09 CRA / E6 dependency intelligence | CNP-BJ, CNP-SH (SBOM) | partial | Both lean on SBOMs; legal force differs (EU regulation vs municipal plan) |
| EUN-FR-01, EUN-DE-01 workspace suites | CNP-SZ-LG, CNP-WH, CNP-CQ (OpenHarmony in government systems) | weak | Same goal (government systems on open base) but an OS/IoT base is not a document and messaging suite |
| EU-04 OSPO network | CNP-BJ open-source promotion centres | weak | Functional similarity (advice, assessment), no network |

**Pairing is impossible** for: the Interoperable Europe Act (no Chinese interoperability-sharing law found), CAD art. 69 and ENI-style mandatory publication (the earlier OFE-based finding of no formal public-administration reuse policy still holds at national level), the Collaborative Workspace flagship (E5, no equivalent, as in the memo), NGI-type micro-grants (nothing comparable found), CRA stewards (no Chinese legal category found).

## (d) Bridge opportunities at operational level

All are research or evidence exchanges. None implies funding or endorsement, and each is subject to the constraints in memo §8.

| # | Bridge | Level | Actors | Why feasible |
|---|---|---|---|---|
| 1 | Procurement and SBOM comparison note | EU-national / CN-provincial | Beijing EITB, NL BZK OSPO, Italy AgID | Beijing's text is public and quantifiable; NL and IT have written duties. A desk comparison needs no agreement |
| 2 | Maintenance-funding design comparison | EU / CN-provincial | EU-STF pilot, Sovereign Tech Agency, Hangzhou, Guangdong, OpenAtom | Both sides publish caps/rates; compare grant, cost-share and venture designs and what each leaves unfunded |
| 3 | Public-body OpenHarmony vs open-suite deployments: lessons on adoption barriers | EU-national / CN-provincial | DINUM, ZenDiS, Longgang, Wuhan | Shared problem (moving administrations off proprietary stacks); Cour des comptes critique and Longgang pilot give contrasting evidence. Not a technical exchange |
| 4 | Shared vocabulary for "digital commons" and ownership/non-capture rules | EU / CN-provincial | DC-EDIC (E3), Shanghai Open Source Association, KAIYUANSHE | Shanghai's association already uses digital-commons language; start from the declaration text once obtained |
| 5 | Common reading of state-of-open-source reports | EU / CN-central | E3 State of Digital Commons, KAIYUANSHE China Open Source Report, JRC, OSOR | Both publish; compare metrics and definitions to avoid reading Chinese figures as European-style indicators |
| 6 | Licence and compliance mapping | EU / CN-central | Interoperable Europe/EUPL, OpenAtom, Mulan, GB/T 44272 | Mulan PSL v2 is OSI-approved; EUPL compatibility analysis is a bounded legal task. First verify GB/T 44272 |
| 7 | Eclipse-OpenAtom channel as existing neutral venue | EU / CN-central | Eclipse Foundation, OpenAtom, Oniro | Agreements and sister-project mechanism already exist (S25-S28) |
| 8 | Critical-dependency and project-health metrics | EU / CN-central | E6 dependency intelligence, JRC, OpenAtom/AtomGit, X-lab | Open-data metrics are public; method comparison avoids sharing sensitive data |
| 9 | Conference-level exchange on project-count targets vs outcomes | EU-national / CN-provincial | Italy Developers Italia, Zhejiang, Shanghai | Italy's catalogue gives measured counts, Shanghai/Zhejiang give targets; compare target design and measurement |
| 10 | Education and contribution-credit practice | EU-national / CN-provincial | Austria/Bundesheer upstream contributions, Zhejiang evaluation rules, Chongqing curricula | Zhejiang credits contributions in appraisal; European public bodies could test equivalent practice |
| 11 | X-Road and similar cross-border platforms vs Chinese multi-jurisdiction platforms | EU-national / CN-provincial | NIIS, Shanghai/Hangzhou platforms | Governance of jointly run open platforms; weak evidence on the Chinese side, so scoping first |
| 12 | Open Internet Stack vs AtomGit catalogue design | EU / CN-central | Commission, OpenAtom | Both build a catalogue/hosting layer; compare openness, mirroring and exit rules (mirroring is in the EU Strategy) |

Priority for next work: 1, 2, 4. They rely on published texts, need no data sharing, and match E2, E6/E7 and E3.

## (e) Gaps and unknowns

- **Not verified or not found:** 15th FYP Outline open-source text; GB/T 44272-2024 (title seen only in a listing); CAC and other ministries (nothing found); national RISC-V guidance; Sichuan, Fujian, Shandong; Jiangsu fund paid-in status; Shanghai declaration text; Etalab/French legal base; German OZG; Spain after 2025; Denmark 2026; Estonia, Poland, Belgium country reports (summary only); Digital Europe and JRC (not researched); art. 68 CAD text.
- **EU budgets:** no amount for the Maintenance Instrument or Open Internet Stack; the EUR 2bn / seven years figure is secondary. EDCOM's size and funder are unknown. EU-STF start date conflicts (March vs June 2026).
- **Chinese texts read through secondary reports:** Zhejiang, Jiangsu, Guangdong, Wuhan, Hunan. Official texts would be needed for quotation.
- **Outcome evidence:** neither side offers independent results. Chinese items are almost all targets; French and German adoption figures come from the operators.
- **Structural:** Chinese public-administration reuse remains an open question; Wuhan, Longgang and Chongqing suggest OpenHarmony pilots rather than a reuse regime. Revisit the OFE finding that there is no formal policy.
- **Cautions** (memo §8): export controls, data transfer, dual-use, political sensitivity. Nothing here is an agreed position of the DC-EDIC.


## Round 2 findings (2026-11-02)

Light pass (about 15 searches/fetches). Catalogue now 56 records (added CNC-12..15, CNP-HB-WH, EU-13); notes appended to EU-01, EU-05, CNP-BJ/ZJ/HN.

- **Shanghai September 2026 declaration (priority 1): not found.** Chinese and English searches return only the Dec 2025 Shanghai open-source plan and the 12 Sep 2026 Pudong Innovation Forum. Treat the declaration, including its title, as unconfirmed until a primary text appears. Listed in data/cn_vpn_needed.txt.
- **15th FYP Outline:** Xinhua published the full text on 13 Mar 2026 (18 parts incl. Digital China); the fetched page held only the part list, so no 开源 passage could be confirmed or ruled out. Still open.
- **MIIT:** 4 Sep 2026 AI SME start-up plan 2026-28 (AtomGit, funds for open-source projects); 13 Jan 2026 industrial-internet platform plan (open-source ecosystem goal); on 20 Jul 2026 MIIT said an "AI+software" action plan is coming and 50+ projects are incubating at the national foundation. No joint MIIT/NDRC open-source document found.
- **GB/T 44272-2024: verified** on the SAMR openstd listing (current; published 2024-08-23; effective 2025-03-01). Full text not read.
- **SASAC (new):** Huanxin AI open-source community v2.0, July 2026, China Mobile-led; Feb 2026 directive to central SOEs on open-source communities. Figures are press-only. CAC, MOST, MOE: nothing found.
- **Public-administration reuse:** only secondary English reports on replacing government Windows with Kylin/UOS (openEuler/openKylin as upstreams); no official source, nothing on code sharing between agencies. The no-formal-reuse-regime finding stands.
- **Provinces:** Wuhan (4 OpenHarmony OS, 100k developers by 2027) and Hunan (doc no. 湘制造强省办〔2026〕7号, 13 Oct 2026: 100 scenes, 50k developers by 2028) now have dated targets, still secondary. Sichuan/Chengdu, Fujian, Shandong: nothing found.
- **EU:** strategy is COM(2026) 503. No official budget for the Maintenance Instrument or Open Internet Stack; EUR 350m for an EU-STF is a study/advocacy figure. DC-EDIC (FR, DE, NL, IT, LU; Paris; director from 1 Apr 2026) has no published budget; a Digital Europe EDIC Support Hub call exists (EUR 1m ceiling per an aggregator, to check). CRA: non-binding guidance C(2026) 5252 of 27 Jul 2026 covers FOSS; no separate steward act; reporting duties from 11 Sep 2026, main duties 11 Dec 2027. EU OSPO and EU-STF start date: not researched.
- **Catalogue upgrades (priority 8):** not done beyond the above, for budget reasons.

## Round 4 counts (2026-11-02)
Registry now **62 records, 41 primary (66%)**. Upgrades and additions are listed in docs/CATALOGUE-VERIFICATION-NOTES.md (Round 4).

| Level | Primary | Secondary | Unverified | Total |
|---|---|---|---|---|
| EU | 10 | 2 | 1 | 13 |
| China central | 7 | 5 | 3 | 15 |
| EU member states | 13 | 3 | 2 | 18 |
| Chinese provinces / cities | 11 | 5 | 0 | 16 |

Guangdong/Guangzhou finding: provincial and municipal bodies have shipped HarmonyOS versions of government apps (Yue Zhengyi Aug 2025, Sui Hao Ban Sep 2025; facts) and Guangzhou commits to converting government terminals by 2028 (commitment). The sources say HarmonyOS, not OpenHarmony; the open-source link is an inference.
