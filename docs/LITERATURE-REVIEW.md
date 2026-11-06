# Literature review: Western work on China's open-source strategy, and what is new in ours

**v0.2 — 2 November 2026.** English. Supersedes the "first search" status of `LITERATURE-AND-NOVELTY.md`.

## 0. Method and limits (read first)

- About 20 web searches/fetches for Task A (cap ~40 for A+B together). Queries used Scholar/SSRN/arXiv-style phrasing plus think-tank names (CSET, Carnegie, DigiChina, ECFR, IFRI, SWP, Clingendael, Bruegel, CEPS, MERICS, Chatham House, OFE, Linux Foundation, OSI).
- **Read in full (text extracted):** MERICS Primer 2021, OFE Country Intelligence Report 2023, House Select Committee letter (June 2025). **Read via fetch-tool summary of the web page (not checked line by line):** Jamestown Parts I and II (Part II page is ~750k characters; only the first 100k were read), China Policy substack, MERICS web page, arXiv 2606.15999 abstract (EconPapers), Gitee OSS-Compass blog.
- **Found but NOT read (snippet only):** Yang 2025 (SAGE), MERICS AI-Stack 2025, OpenUK *AI Openness Report* July 2026 (PDF over 10 MB, fetch failed), Computing.co.uk / Amanda Brock 2026 (HTTP 403), Factsheet China 2023 (PDF text not extractable).
- **Not covered:** Scopus/Web of Science; Google Scholar itself (only web-search proxies); journal-specific searches (*China Quarterly*, *Research Policy*, etc.). CSET, Carnegie, DigiChina, ECFR, IFRI, SWP, Clingendael, Bruegel, CEPS, Chatham House and Rhodium returned **no relevant hit** in the queries run. That is an absence in a limited search, not proof of absence.
- Quotes are under 15 words and come from the fetched text.

## 1. Table of works

Relevance: 1 = peripheral, 5 = must cite / closest competitor.

| # | Author, year | Type | URL | Lens | Main claims (short quotes) | Compares with EU? | Rel. |
|---|---|---|---|---|---|---|---|
| 1 | Sunny Cheung, *Open-Source Technology and PRC National Strategy, Part I*, Jamestown *China Brief* 24(10), 10 May 2024 | Think tank (US) | https://jamestown.org/open-source-technology-and-prc-national-strategy-part-i | US security / tech containment | OpenAtom uses open source "as a strategic asset"; openEuler and OpenHarmony are self-reliance flagships; OpenAtom staff CCP ties (33.3% members in body text; summary says 45%+ with youth league); military-industrial complex as "key beneficiaries". | **n.** Only Europe mention: Open Source Summit Europe 2023. | 4 |
| 2 | Sunny Cheung, *Part II*, *China Brief* 24(11), 24 May 2024 | Think tank (US) | https://jamestown.org/program/open-source-technology-and-prc-national-strategy-part-ii/ | US security | OpenHarmony "widely used in critical infrastructure", public security and military; open source feeds closed military software; PRC "positioning itself as an early innovator in the regulation" of OSS. Notes a DLUT-Liège (Belgium) collaboration as a "Western institution" link. | **n.** | 4 |
| 3 | Rebecca Arcesati, Caroline Meinhardt (MERICS), *China's Open-Source Tech Development: Primer*, May 2021 | Think tank (EU) | https://22.merics.org/sites/default/files/2021-05/MERICS%20Primer%20Open%20Source%202021_0.pdf ; web: https://merics.org/en/report/china-bets-open-source-technologies-boost-domestic-innovation | EU China-watcher, industrial policy | Open source as "an industrial policy tool" to reduce foreign reliance; timeline from Red Flag Linux (1999) to MIIT picking Gitee (Aug 2020); 87.4% of firms used OSS in 2019 (CAICT). Last page "Europe should closely watch": opportunities (talent, Baidu Apollo) and risks (military/surveillance reuse, export-control circumvention via RISC-V). | **Partly.** One page on EU opportunities/risks, cites EU OSS Strategy 2020-23; **no policy-instrument comparison**. | 5 |
| 4 | OpenForum Europe (Thévenet, O'Riordan, Karhu, Grzegorzewska) for DG DIGIT / Interoperable Europe, *OSS Country Intelligence Report: China*, July 2023 | EU institutional study | https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/OSS%20Country%20Intelligence%20Report%20China.pdf | EU descriptive country profile | "In comparison to European policies, the Chinese government primarily focuses on" industrial support. States there are no formal procurement or reuse policies specific to OSS in Chinese public administrations (paraphrase). Sections: actors, policy/legal framework, initiatives. Desk research, snapshot July 2023. | **Partly.** One framing sentence in the executive summary; no instrument-level mapping. | 5 |
| 5 | Axel Thévenet, *Factsheet China*, Oct 2023 (PDF metadata) | EU institutional | https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/Factsheet%20China.pdf | EU descriptive | Short companion. **Text not read.** | Unknown | 2 |
| 6 | US House Select Committee on the CCP, letter to Eclipse Foundation (M. Milinkovich), 4 June 2025 | Legislative letter | https://democrats-selectcommitteeontheccp.house.gov/sites/evo-subsites/democrats-selectcommitteeontheccp.house.gov/files/evo-media-document/20250604-sccletter-eclipsefoundation-harmonyos_0.pdf | US security | Concern about Eclipse-OpenAtom collaboration; cites Eclipse goal to "extend[] OpenHarmony code base with add-ons for the European and Global markets"; Huawei's code makes independent verification "a monumental, if not impossible, task". Six questions (audit, governance, PRC National Intelligence Law, due diligence, genesis of Oniro); reply due 18 June 2025. | **n.** (addresses a Brussels-based foundation; no EU policy analysis). No Eclipse reply found. | 5 |
| 7 | CHINA POLICY (Substack), *Institutionalising open source in China*, 16 June 2026 | Practitioner newsletter | https://chinapolicy.substack.com/p/institutionalising-open-source-in | Chinese governance | "Now Beijing wants to govern the ecosystem that made that possible." Three layers: CAC filing, voluntary standards (GB/T 44272-2024), mandatory sector rules; OpenAtom "is not a regulator, but it makes the regulatory architecture work"; risk: "Heavy compliance burdens push developers elsewhere". | **n.** One passing EU reference. | 4 |
| 8 | Grace X. Yang, *The openness paradox: Open-source AI and China's quest for cyber sovereignty*, SAGE, 2025 (DOI 10.1177/29768640251376497) | Peer-reviewed, 4 pp. | https://refubium.fu-berlin.de/handle/fub188/50926 | Academic, sovereignty | Open-source AI seems to conflict with "cyber sovereignty" doctrine yet can strengthen it across layers. **Snippet only.** | Unknown (likely n.) | 3 |
| 9 | Wang Jin, Kunievsky, Lou, Sun, Evans, *U.S. Technological Containment and the Rise of China's Open AI Ecosystem*, arXiv 2606.15999, June 2026 (rev. Aug 2026) | Preprint | https://econpapers.repec.org/paper/arxpapers/2606.15999.htm | Empirical, US-China | After export-control shocks China built open-source AI into national technology strategy; Chinese developers engage with open LLM repos more than US ones. | **n.** per abstract | 3 |
| 10 | Yehui Wang (Huawei / OSS-Compass), Daniel Izquierdo Cortázar (Bitergia), *Europe-China Open Source: Digital Sovereignty & Sustained Collaboration*, keynote, OSS Europe, Amsterdam, 27 Aug 2025 | Industry keynote with data | https://compass.gitee.com/blog/2025/08/29/OSS-EU2025 ; https://osseu2025.sched.com/event/25VuY/europe-china-open-source-digital-sovereignty-sustained-collaboration-yehui-wang-huawei-daniel-izquierdo-cortazar-bitergia | Industry, complementarity | Proposes "a complementary ecosystem market cooperation path"; Europe 92.53M commits vs China 50.34M (OpenAtom 2024 report data); Europe leads in mature fields, China in AI/semiconductors. | **YES, quantitative and industry-side.** No policy-instrument analysis; a speaker is Huawei-affiliated. **Closest to our complementarity lens.** | 4 |
| 11 | OpenUK, *AI Openness Report*, July 2026 | UK industry body | https://openuk.uk/wp-content/uploads/2026/07/AI-Openness-Report-July-2026.pdf | UK, AI openness | Snippet: has a China technology-and-policy section, names OpenAtom, frames open source as sovereignty instrument. **Unread; must check before publication.** | Unknown | 3 (flag) |
| 12 | Amanda Brock (OpenUK), *Can the UK take the opportunity open to it in China?*, Computing, 2026 | Opinion | https://www.computing.co.uk/opinion/2026/can-the-uk-take-the-opportunity-open-to-it-in-china | UK practitioner | Snippet: OpenAtom let China hold IP and govern projects locally. HTTP 403; unread. | Partly (UK) | 2 |
| 13 | MERICS, *China's drive toward self-reliance in AI*, July 2025 | Think tank (EU) | https://merics.org/sites/default/files/2025-07/MERICS%20Report-AI_Stack_final.pdf | EU China-watcher, AI | Snippet: self-reliance at every layer of the AI stack, yet tied to global open-source communities. Unread. | Unknown | 2 |
| 14 | Kevin Xu, *Interconnected* | Newsletter | https://interconnected.blog/can-you-nationalize-open-source/ | Practitioner | From prior note; not re-read. | n. | 3 |
| 15 | Doug Levin | Newsletter | https://douglevin.substack.com/p/chinas-open-source-strategy-innovation | US security | From prior note; not re-read. | n. | 2 |
| 16 | Centre for Future Generations, *Towards European open digital ecosystems* | Think tank (EU) | https://cfg.eu/towards-european-open-digital-ecosystems/ | EU, dependency on Chinese open weights | From prior note; not re-read. | Partly (EU side) | 3 |
| 17 | *Bulletin of the Chinese Academy of Sciences* 36(12), art. 15 | Chinese journal | https://bulletinofcas.researchcommons.org/journal/vol36/iss12/15 | Chinese academic | Snippet: reviews US and European OSS policy to propose steps for China (reverse direction to ours). Unread. | EU as object | 3 |
| 18 | ASPI Strategist, *China's use of foreign open-source software and how to counter it* | Think tank (AUS) | https://www.aspistrategist.org.au/chinas-use-of-foreign-open-source-software-and-how-to-counter-it/ | Security | From prior note; not re-read. | n. | 2 |

Also seen, unread: Linux Foundation Europe, *Open Is Sovereign* (names PaddlePaddle and openEuler as state-backed; https://linuxfoundation.eu/newsroom/open-is-sovereign-why-europes-digital-future-must-be-built-on-global-open-source-ecosystems); SESEC webinar on China open-source policies and standardization, 2023 (https://sesec.eu/wp-content/uploads/2023/07/SESEC-V-Webinar-China-Open-source-Policies-Standardization.pdf), worth reading.

## 2. Was the OFE / Interoperable Europe China report updated?

**No update found.** Report dated July 2023; Factsheet metadata 16 Oct 2023. Searches for a 2024-26 update returned nothing. Re-check directly on the Interoperable Europe / OSOR site before asserting this publicly.

## 3. Who comes closest to our work

1. **OFE 2023 and MERICS 2021** are the European precedents: descriptive, pre-dating the EU Open Source Strategy (June 2026) and DC-EDIC, with no mapping of Chinese instruments onto an EU instrument set.
2. **Huawei/Bitergia keynote (Aug 2025)** is the only item found that sets Europe and China side by side and proposes complementarity. Data-led, industry-authored, not policy analysis.
3. **House letter (June 2025)** targets the Eclipse-OpenAtom link we use as a governance case. We must answer it.

## 4. Novelty verdict

**What has been done (evidence above):**
- Security-led readings of OpenAtom, OpenHarmony and openEuler (Jamestown, House, Reuters, ASPI).
- A 2021 EU-side primer with a one-page "Europe should watch" section, and a 2023 EU-commissioned descriptive country profile.
- Chinese-governance analysis (China Policy 2026; Yang 2025) and US-China empirical work on open AI (arXiv 2026).
- An industry-side Europe vs China contribution comparison with a complementarity framing (OSS EU 2025).

**What we did not find, in a limited search:**
- Any mapping of Chinese open-source instruments onto the DC-EDIC Implementation Strategy (adopted 16 Oct 2026, so near-certain).
- Any work scoring fit, feasibility and exposure separately, or using additionality as comparison metric.
- Any instrument-level reading of the 2025-26 regional policies (Beijing, Shanghai, Zhejiang, Jiangsu, Guangdong/Shenzhen, Chongqing) in a Western language outside our own register.
- Eclipse-OpenAtom treated as a governance case rather than a security alarm.
- An update of OFE 2023.

**Claims in `LITERATURE-AND-NOVELTY.md` to soften:**
- Claim 2 ("a complementarity lens", "no work scores...") is **partly undermined** by item 10 (explicit, numeric complementarity) and by MERICS 2021's opportunities/risks page. Rephrase: "first policy-instrument-level complementarity assessment with separate fit, feasibility and exposure scoring".
- Claim 4 (funding models side by side) is not contradicted, but cite MERICS 2021, which placed the EU OSS Strategy 2020-23 next to Chinese policy.
- "First independent assessment" should read "to our knowledge, in a limited review" until the unread items (OpenUK 2026, Yang 2025, Brock 2026, MERICS 2025, Factsheet 2023, SESEC 2023) are read.

**Could undermine novelty if they contain more than their snippets show:** OpenUK *AI Openness Report* (July 2026; China section plus a UK/European frame) and the SESEC 2023 webinar. Both unread.

**Honest gaps:** no academic-database access; peer-reviewed literature thinly sampled (one hit); Chinese-language and CNKI literature not searched; no direct site searches of Carnegie, CSET, Chatham House; Jamestown Part II mostly unread beyond its first 100k characters.

## 5. Academic databases — PRISMA-style log

### Round 1 — OpenAlex, 4 Nov 2026 (R02)
- **Identification:** OpenAlex API, works published since 1 Jan 2019, 9 queries. Q1 "open source" China Europe policy (77); Q2 "digital commons" China (73); Q3 openEuler/OpenHarmony/openKylin (137); Q4 "open source" "digital sovereignty" (152); Q5 "open source" China government industrial policy (21); Q6 开源 政策 (1260, failed: no tokenisation); Q7 title "open source" China (108); Q8 Gitee/OpenAtom (70); Q9 title "open source" "public sector" Europe (1). The top 12 per query by citations are in data/lit/openalex_2026-11-04.md.
- **Screening:** 108 titles screened. About 100 were excluded as off-topic (OSINT, open data, medical AI, ecology, and Gitee as a mere code host).
- **Included (7):**

| Work | Relevance | Why |
|---|---|---|
| Hu et al. (?), *openEuler: Advancing a Hardware and Software Application Ecosystem*, IEEE Software 2022, doi 10.1109/ms.2021.3132138 | 3 | Peer-reviewed self-description of openEuler governance and ecosystem (authors to check) |
| *Software Engineering for OpenHarmony: A Research Roadmap*, ACM Computing Surveys 2025, doi 10.1145/3720538 | 3 | Research agenda; shows OpenHarmony as an academic object |
| *Open or closing doors? The influence of 'digital sovereignty' in the EU's Cybersecurity Strategy on cybersecurity of open-source software*, CLSR 2024, doi 10.1016/j.clsr.2024.1060… | 4 | EU sovereignty framing applied to OSS: the EU half of our comparison |
| OECD, *Digital public goods: Enablers of digital sovereignty*, Development Co-operation Report 2021, doi 10.1787/c023cb2e-en | 3 | Digital-commons/DPG framing outside both blocs |
| *Public-private funding models in OSS development: scikit-learn*, arXiv 2404.06484 | 3 | Funding chapter: a European project-level case |
| *Open to open-source AI? AI model choice in public sector agencies*, GIQ 2026, doi 10.1016/j.giq.2026.102133 | 3 | PA adoption of open-weight models (could include Qwen/DeepSeek) |
| *The European Public Sector Open Source Opportunity*, 2023, doi 10.70828/dfnp4537 | 3 | EU PA reuse; publisher to identify (likely OpenForum Europe) |

- **Result (inference):** none of the indexed peer-reviewed or grey works compares EU and Chinese open-source **policy**, which strengthens the novelty verdict in §4 (one database only). Chinese-language academic coverage still needs CNKI or Wanfang (VPN or a library).
- **Next rounds:** Semantic Scholar API (same queries), SSRN, Google Scholar by hand (Chrome), journal sweeps (*China Quarterly*, *Research Policy*, *Telecommunications Policy*, *Internet Policy Review*), and CNKI via VPN.

### Round 2 — Semantic Scholar, 5 Nov 2026 (R02) — partial
- **Identification:** Semantic Scholar Graph API (no key), works since 2019, 8 relevance-ranked queries, top 15 each (tools/s2_query.js; raw output in data/lit/s2_2026-11-05.md). **Only 2 of 8 queries returned** (S5 "China open source industrial policy government": 13,633; S7 "Gitee OpenAtom open source foundation China": 273). S1–S4, S6 and S8 were refused (HTTP 429) from the laptop and again from the Paris server, even with 15–75 s backoff: the keyless pool is shared and saturated.
- **Screening:** 30 titles screened. Excluded: ML model releases (FireRedASR, VITA, YuLan…), open government data, generic industrial policy (Made in China 2025, semiconductors), life-cycle databases.
- **Included (4):**

| Work | Relevance | Why |
|---|---|---|
| *Open source digital sovereignty: the case for a Canadian national Linux distribution*, Digital Policy, Regulation and Governance 2026, doi 10.1108/dprg-06-2026-0347 | 3 | Sovereignty-through-OSS argument from a third country; a natural comparator for openEuler/openKylin as "national distributions" |
| *Open-Source AI Made in the EU: Why it is a Good Idea*, Minds and Machines 2025, doi 10.1007/s11023-025-09728-x | 3 | EU open-weight AI rationale: the EU half of the AI layer comparison |
| *Open-Source Innovation for Latecomer Catch-up: A Conceptual Framework*, Journal of Economic Surveys 2026, doi 10.1111/joes.70122 | 3 | Catch-up framing that fits the Chinese state-led OSS strategy (to read) |
| *Open Source Congress 2024: Shaping the Future of Collaboration in AI, Security, and Digital Public Goods*, 2024, doi 10.70828/mton6557 | 2 | Grey literature (same DOI prefix as the 2023 European public-sector report, likely LF Research); digital public goods framing |

- **Result (inference):** still 0 works comparing EU and Chinese open-source policy (cumulative: 2 databases, 11 included). The novelty verdict holds, with the caveat that 6 Semantic Scholar queries are pending.
- **Re-run:** `node tools/s2_query.js S1 S2 S3 S4 S6 S8` at a quiet hour (European night) or with a free API key (request form on semanticscholar.org, institutional email needed, so Fabio decides).

### Round 3 — Semantic Scholar, 6 Nov 2026 (R02) — partial
- **Identification:** re-run of the 6 pending queries (tools/s2_query.js S1 S2 S3 S4 S6 S8; raw output in data/lit/s2_2026-11-06.md), ~09:30 CET. **Only S4 "open source software digital sovereignty" returned (4,019 hits, top 15 read); the other 5 were again refused (HTTP 429)** despite 15–75 s backoff.
- **Screening:** 15 titles screened. Excluded: indigenous/civil-society sovereignty, logistics, metaOS, supply-chain security theory (kept as context), commercial-OSS market reports.
- **Included (4, new):**

| Work | Relevance | Why |
|---|---|---|
| *Digital Sovereignty and Open-Source Software — A Discussion Paper*, I4CS 2024, doi 10.1007/978-3-031-60433-1_22 | 3 | Direct conceptual treatment of our central pairing |
| *2026 State of Open Source in Europe: Navigating AI and Digital Sovereignty Through Open Governance*, 2026, doi 10.70828/olta8310 | 3 | Grey literature (LF Research prefix); EU-side state of play, same year as our white paper |
| *A Toolkit for Measuring the Impacts of Public Funding on Open Source Software Development*, arXiv 2411.06027 | 3 | Methodology for the funding chapter's additionality metric |
| *Public Sector Open Source Software Projects — How is development organized?*, arXiv 2304.06093 | 3 | PA-reuse chapter: how government OSS projects are actually run |
- Already included earlier and re-confirmed by this query: CLSR 2024 "Open or closing doors?"; scikit-learn funding case (arXiv 2404.06484); Canadian national Linux distribution (dprg-06-2026-0347).
- **Result (inference):** cumulative 3 rounds, 2 databases, **15 included, still 0 works comparing EU and Chinese open-source policy**. The novelty verdict holds; 5 S2 queries still pending.
- **Re-run:** same command at a quieter hour; or the free S2 API key (Fabio, institutional email); then SSRN and Google Scholar by hand.
