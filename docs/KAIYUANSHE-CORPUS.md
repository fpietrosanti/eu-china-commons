# KAIYUANSHE (开源社) corpus: reports, data and OpenShare

*Research note, 25 Nov 2026. Branch R18 in [RESEARCH-REGISTER.md](RESEARCH-REGISTER.md). Evidence levels follow [METHODOLOGY.md](METHODOLOGY.md) §4. Background on the organisation: [CN-FOUNDATIONS.md](CN-FOUNDATIONS.md) §2 and [COSCON-THEMES.md](COSCON-THEMES.md).*

## 0. Why this is a key source

KAIYUANSHE is the volunteer community behind COSCon (China Open Source Conference) and, since 2015, the **China Open Source Annual Report** (中国开源年度报告). It is the longest-running, openly licensed, bilingual series of measurements of Chinese open source:
- the data chapters are built with X-lab/ECNU (OpenDigger, OpenRank);
- the reports also include a developer questionnaire, a commercialisation chapter and a yearly chronicle.

Together with the external report in [EXT-REPORT-CN-OSS-LANDSCAPE.md](EXT-REPORT-CN-OSS-LANDSCAPE.md), it is the main **non-governmental** evidence base for the Chinese side of this project. We treat it as a key source:
- archived in full;
- linked from the home page, the research index and the data page;
- read systematically (roadmap in §5).

**Evidence level.** KAIYUANSHE reports are self-published secondary sources by a named organisation.
- Narrative and chronicle claims are level **B** when they cite primaries, **C** otherwise.
- Their quantitative tables (OpenDigger/OpenRank on GH Archive data) are level **B** for the metric as defined. Our own recomputation from the OpenShare/OpenDigger files below makes them **A** for the figure itself.
- The questionnaires are opt-in surveys, not samples: they are level **C** for population claims.

## 1. What we archived (25 Nov 2026)

**Full mirror of the GitHub organisation's published sites.** All 24 repositories of `github.com/kaiyuanshe` that publish a GitHub Pages site under `kaiyuanshe.github.io/` were cloned with `git clone --mirror` (all branches, full history, about 1 GB). There is also a crawl of the live home site (103 files). Location: `/home/euchina/mirrors/kaiyuanshe/` on the project server (not in git because of its size).

The inventory, with HEAD commit, licence, branches and live URL, is in [`data/external/kaiyuanshe/repos.tsv`](../data/external/kaiyuanshe/repos.tsv). The most relevant items are:

| Item | Years | Language | Licence | Live |
|---|---|---|---|---|
| China Open Source Annual Report 2016 | 2016 | ZH | CC0 1.0 | [site](https://kaiyuanshe.github.io/2016-China-Open-Source-Report/) |
| China Open Source Annual Report 2018, 2019 | 2018–19 | ZH | Apache-2.0 | [2018](https://kaiyuanshe.github.io/2018-China-Open-Source-Report/) · [2019](https://kaiyuanshe.github.io/2019-China-Open-Source-Report/) |
| China Open Source Annual Report 2020, 2021 (PDF; 2021 also EN/JP) and KAIYUANSHE annual reports 2020, 2021 (PDF) | 2020–21 | ZH/EN/JP | not stated | `kaiyuanshe.github.io` repo, branch `hexo`, `document/` |
| China Open Source Annual Report 2023, 2024, 2025 | 2023–25 | ZH + **EN** | CC BY-SA 4.0 | [2023](https://kaiyuanshe.github.io/2023-China-Open-Source-Report/) · [2024](https://kaiyuanshe.github.io/2024-China-Open-Source-Report/) · [2025](https://kaiyuanshe.github.io/2025-China-Open-Source-Report/) |
| **China AI Open Source Ecosystem Blue Paper** (中国人工智能开源生态蓝皮书). **Not a KAIYUANSHE work:** written by the Datawhale AI Industry Research Institute, published by the Hangzhou AI Open Source Ecosystem Academy and co-published by Zhejiang AI institutions, SJTU, ModelScope and others. It is only hosted on KAIYUANSHE's GitHub, with the repo created 6–8 Nov 2026. | Mar 2026 (front matter) | ZH + EN | see repo | [site](https://kaiyuanshe.github.io/China-Artificial-Intelligence-Open-Source-Ecosystem-Blue-Book-2026/) |
| Chinese OSS Landscape (中国开源地图, CNCF Landscape2 fork) | 2026 | ZH | see repo | [site](https://kaiyuanshe.github.io/chinese-oss-landscape/) (31 entries on 25 Nov; live `data/full.json` archived) |
| Japanese translations of the China reports (CNOSSTranslationJP) | 2020– | JP | MIT | [site](https://kaiyuanshe.github.io/CNOSSTranslationJP/) |
| COSCon 2016 site, COSCon posters, KAIYUANSHE report 2015 | 2015–21 | ZH | mixed | see repos.tsv |
| *Becoming an open-source person*, oss-book, open-source articles, conference guide | 2019–26 | ZH | mixed (oss-book CC BY-SA) | see repos.tsv |

**English text available for direct reading** (words per chapter, `en/` folders):

| Report | Chapters |
|---|---|
| 2023 | Data analytics (12.9k), commercialisation (23.8k), chronicle (15.4k), questionnaire (2.6k) |
| 2024 | Data analytics (21.0k), open-source AI (10.9k), commercialisation (12.6k), chronicle (24.1k), questionnaire (4.3k) |
| 2025 | Data (26.3k), open-source AI (18.8k), embodied intelligence (10.1k), commercialisation (13.8k), chronicle (9.6k), questionnaire (5.0k), Web3 (4.9k) |
| AI Blue Paper (Datawhale, Mar 2026) | 5 chapters with references and appendix |

**OpenShare (open-share.com).** This is KAIYUANSHE and X-lab's 2026 platform for open-source contribution, points and talent. Its public analytics are static JSON files on OpenDigger's object storage (`selfoss.open-digger.cn`), which we downloaded with [`tools/openshare_dump.py`](../tools/openshare_dump.py) to `/home/euchina/mirrors/openshare/` (manifest with SHA-256 per file). The files cover:
- **Open World overview.** Developers, contribution and influence by country, for the world and drilled down for China and the US.
  - Natural year 2025, plus the half-year window July 2025 – June 2026.
  - Summary: 9.65 bn GitHub events, 380.7 m repositories, 193.9 m developers (28.9 m active), 246 countries; updated 8 Oct 2026.
- **Open Leaderboard.**
  - 9 scopes: Global, China, Agentic AI, Database, Big Data, Cloud Native, Development Tools, Operating System, Web Frameworks.
  - 4 group types: project, repository, initiator (company or organisation), foundation.
  - Ranked by OpenRank, yearly from 2015 and monthly from 2020.
- We did **not** collect user profiles, organisation member lists, points, the shop or messages. Those are personal or account data.

## 2. What it closes in our research

| Open gap (file) | How the corpus closes it |
|---|---|
| COSR25 figures read at level C via secondary reports ([CN-OSS-LANDSCAPE.md](CN-OSS-LANDSCAPE.md) §"Read the KAIYUANSHE 2024 and 2025 reports directly") | The original text in ZH and EN is now archived: re-read the tables and raise them to B, or to A where we recompute them from OpenDigger. |
| KAIYUANSHE FY2022–FY2025 annual reports not fetched ([CN-FOUNDATIONS.md](CN-FOUNDATIONS.md) §2) | 2020 and 2021 annual reports are in the archive (PDF). In the public wiki repo `kaiyuanshe/memory-fragments` (mirrored 26 Nov), the 2022 report is a stub and the 2023 report is an unfinished draft whose **financial statement section is empty**. FY2022–25 finances are therefore still unpublished (negative result, 18.4). |
| COSCon 2016–2017 themes only at level D ([COSCON-THEMES.md](COSCON-THEMES.md)) | ✔ 2016 settled at level A from the official site (18.5). |
| No time series of China's share of global open-source activity | OpenShare's Open World and the "China" scope of the leaderboard give yearly and monthly series since 2015, with a public metric (OpenRank). |
| The 504-project list in the external report lacks AtomGit/Gitee activity | The leaderboard's repo and project entries cover Gitee and AtomGit via OpenDigger where available. Cross-match (18.3). |

## 3. How we use it on the site

- The home page, the research index and the data page now have a **Key sources** block. It shows the external report (PDF, 504-project dataset, analysis) and this KAIYUANSHE corpus with links to every report.
- The reports remain on KAIYUANSHE's own sites; we link to them. We republish nothing under licences that do not allow it (the 2020–21 PDFs carry no licence statement).
- The 2023–2025 reports are CC BY-SA 4.0. Any extract we publish keeps the attribution "China Open Source Annual Report 20xx, KAIYUANSHE (开源社), CC BY-SA 4.0" and the same licence for that extract.

## 4. Relations

KAIYUANSHE is a stakeholder as well as a source: [COLLAB-MAP.md](COLLAB-MAP.md) row `x-kaiyuanshe`, [DIRECTORY-CN.md](DIRECTORY-CN.md) `cm-kaiyuanshe`. The yearly "State of Europe–China Digital Commons" in [OPERATIONS.md](OPERATIONS.md) is planned to be released alongside their report. Building the reading below as an open, citable index of their work is also a concrete basis for contacting them.

**Their international liaison group (国际接轨组) is the natural counterpart.** Source: public wiki, `kaiyuanshe/memory-fragments`, `Wiki/执行委员会/国际接轨组/`, level A for their own plans.
- **Remit.** Its 2024–25 and 2025–26 work plans give it the job of connecting Chinese and global open-source communities. This means:
  - multilingual content, including the English edition of the annual report;
  - presence at international conferences;
  - helping Chinese projects go abroad (openKylin is named).
- **European events in 2025.** Members attended FOSDEM (Brussels, Feb 2025) and OpenUK's State of Open Con (London, Feb 2025).
- **Advisory council.** It discussed "sovereign AI" after an LF AI & Data webinar (Apr 2025) and planned to publish its views.
- **For engagement.** The group meets every two weeks and already targets FOSDEM-type venues. A joint session or a bilingual interview series at FOSDEM 2027 or COSCon'26 fits both their plan and our mission. Contact through the group, not through individuals; the wiki names volunteers and we do not reproduce their names.
- The wiki also holds council minutes (`kaiyuanshe/RFC`, mirrored), useful for governance (CN-FOUNDATIONS §2).

## 5. Research roadmap (R18)

| # | Task | Output |
|---|---|---|
| 18.1 | ✔ (26 Nov, §7.1) Read the EN data chapters 2023–2025 and extract every quantitative claim about China vs the world (developers, OpenRank, top projects, foundations). | `data/external/kaiyuanshe/cosr-claims.tsv` with chapter, claim and level |
| 18.2 | Recompute the headline figures from the OpenShare files: China's share of developers, contribution and influence; top Chinese projects and initiators per year; Operating System and Cloud Native scopes. | Table in CN-OSS-LANDSCAPE, level A for the figures |
| 18.3 | Cross-match the leaderboard's "China" scope (project and repo, 2025) with the external report's 504 projects and with our catalogue. | List of projects missing from each |
| 18.4 | ◐ KAIYUANSHE FY2022–2025 annual reports: wiki has a 2022 stub and an unfinished 2023 draft with empty finances (26 Nov). kaiyuanshe.cn times out from the server and returns 403 via the residential IP; try the shared Chrome or ask them. | Update CN-FOUNDATIONS §2 |
| 18.5 | ✔ COSCon 2016 slogan from the archived COSCON2016 site: "天下开源是一家、社区携手迸火花" (A), 26 Nov. | Done: COSCON-THEMES row 1 |
| 18.6 | ✔ (26 Nov, §7.4; not a KAIYUANSHE work) Read the AI Blue Paper (EN) for policy, funding and international-cooperation passages. | Note plus claims TSV |
| 18.7 | ✔ (26 Nov, §7.2) Read the commercialisation and questionnaire chapters for funding models of Chinese open-source companies, to compare with PROJECT-FUNDING. | Rows in project-funding where applicable |
| 18.9 | Ask KAIYUANSHE/X-lab for the inclusion criteria of the "China" scope and for the country-attribution method behind "influence". | Note in §6 |
| 18.10 | Resolve conflicts C1–C5 (§7.3) and check the 2023 VC tables against the Chinese edition before adding a CN equity-VC layer to data/funding. | Corrections in CN-FOUNDATIONS / FUNDING-COMPARISON |
| 18.11 | Trace the new items of §7.3 to primaries: model licences, GPL rulings, SBOM standard 2024-1400T-SJ, GB 45438-2025, WAIC initiative, China–ASEAN and China–Russia mechanisms. | Archive + level A/B |
| 18.8 | Refresh the mirror quarterly (`git remote update` in each mirror, re-run `tools/openshare_dump.py`). | Manifest diff |

## 6. Findings from the OpenDigger data (18.2–18.3, first pass, 26 Nov 2026)

*Figures recomputed by us from the archived OpenShare/OpenDigger files ([`tools/kys_opendigger_analysis.py`](../tools/kys_opendigger_analysis.py); tables in [`data/external/kaiyuanshe/derived/`](../data/external/kaiyuanshe/derived/), full summary in [SUMMARY.md](../data/external/kaiyuanshe/derived/SUMMARY.md)). The figures are level A as calculations on the published data. As measures of "open source", they are only as good as OpenRank and GitHub/Gitee/AtomGit coverage, so read them with the caveats below.*

1. **FACT (A, OpenDigger 2025). Europe contributes more developer activity than China; China owns more of the projects that matter.**

   | | Share of active developers | Share of developer OpenRank contribution | Share of project OpenRank influence |
   |---|---|---|---|
   | EU27 | 20.5% | 28.9% | 6.6% |
   | China | 8.6% | 6.5% | 20.1% |
   | US | 17.0% | 22.9% | 68.7% |

   - Germany is second in the world for developer contribution, after the US and ahead of China. France is 6th, the Netherlands 9th.
   - **INFERENCE.** This is the clearest quantitative case for the project's "compete above, cooperate below" thesis: Europe supplies labour to the commons largely through projects initiated elsewhere (mostly US), while China has built its own project base.
2. **FACT (A). Chinese projects hold 13.7% of the global top-300 OpenRank (2025), up from 2.1% in 2015.**
   - The number of Chinese projects in the top 300 fell from 60 (2018) to 34 (2025), so the share is concentrating in fewer, larger projects.
   - **OpenHarmony is no. 1 in the world in 2025** (OpenRank 82,122, twice Azure's). openEuler is 13th.
   - Chinese initiators hold 16.7% of the top-300 initiator OpenRank, up from 4.1% in 2015. Huawei is 2nd after Microsoft and Alibaba 11th.
3. **FACT (A). Chinese projects make up 25.9% of foundation OpenRank (2025), up from 2.7% in 2015.**
   - The OpenAtom Foundation is no. 1 of 34 foundations.
   - Inside the ASF, Chinese projects account for 25,394 of 106,336 OpenRank (24%).
   - This supports the external report's finding (R17) that Apache is the main international foundation channel for Chinese projects.
4. **FACT (A). China's share of global active developers is flat at about 8–9% (2021–2025)**, and of developer contribution at about 6.5%. The growth in point 2 comes from projects, not from developer headcount.
5. **Cross-match (18.3).** Of the 282 projects in OpenShare's China scope, 94 match the external report's 504 by name and 188 do not. The unmatched include 1Panel, SecretFlow, Coze, OpenTiny, JumpServer, Asterinas, openFuyao, OpenBMB, DeepSeek-V3/R1, MeterSphere and KusionStack. Name matching is approximate (variants such as "DeepSeek-V3" vs "DeepSeek"); list in `xmatch-opendigger-vs-ext-report.tsv`.

**Caveats.**
- OpenRank weights project activity by collaboration networks. Large corporate projects with many employee contributors, such as OpenHarmony, score high whatever their external adoption.
- Developers are located by self-declared profile data; many have none.
- "Influence" lists only 30 countries, so shares of influence are shares of that subset.
- OpenShare's "China" scope is KAIYUANSHE/X-lab's list (282 projects, 136 initiators). Inclusion criteria are not published; ask (18.9).

## 7. What the reports say (18.1, 18.6, 18.7 and chronicles; read 26 Nov 2026)

All the English chapters of the 2023–2025 reports and the AI Blue Paper were read in full, about 240k words. **1,348 claims** were extracted with a verbatim quote of at most 25 words each, checked automatically against the source. Tables are in [`data/external/kaiyuanshe/claims/`](../data/external/kaiyuanshe/claims/): `18.1-data-claims.tsv` (469), `18.7-commercial-claims.tsv` (212), `18-chronicle-claims.tsv` (511), `18.6-bluebook-claims.tsv` (156); reading notes in the same folder. All these claims are **level C** ("reported by KAIYUANSHE/X-lab") until traced to a primary, except where we recomputed them (§6).

### 7.1 Data chapters (18.1)
- **Europe ahead of China on developers.**
  - The 2024 report counts the **EU as one unit: 17.28 m active GitHub developers (+22.7%), 2nd**; China 9.40 m (+6.1%), 4th. Germany is also listed separately, so it is double-counted.
  - On the 2025 developer-influence metric, **Germany is 2nd (625,814) and China 3rd (611,892)**, and Germany has more high-impact developers (159 vs 110).
  - This agrees with our recomputation in §6: EU27 28.9% vs China 6.5% of developer contribution, with China ahead only on *project* influence.
- **Chinese projects are inward-facing.**
  - 79.1% of contributions to China-led projects come from China, and EU countries supply only about 3%.
  - EU countries supply about 15% of contributions to US-led projects.
  - **INFERENCE.** This measures the gap our cooperation agenda targets: European developers are a large external workforce of the commons, but they are almost absent from Chinese-led projects.
- **Activity is moving off GitHub.** In 2025 China added about 15k new GitHub developers against over 1 m on Gitee/AtomGit. GitHub-only comparisons increasingly undercount China.
- **Reliability.**
  - There are series breaks every year: Gitee is added in 2023; 2024 drops GitLink and lacks Oct–Dec; 2025 uses a new framework.
  - "China" includes Taiwan, Hong Kong and (2025) Macao.
  - China's developer totals range from 2.1 m to over 20 m depending on the year and definition.
  - The 2024 province shares are copied from 2023, and some 2025 table labels are swapped.
  - **Do not build time series from the reports; use the OpenDigger files (§6).**

### 7.2 Commercialisation and surveys (18.7)
- **Deal-level data exists only in 2023.**
  - That chapter was written by **Yunqi Partners**, a VC fund that names its own portfolio.
  - It has a table of 58 Chinese open-source startups and their latest rounds, and a table of 9 open-model startups: Zhipu CNY 1.2 bn (Sep 2023), Baichuan US$300 m, Gitee/OSChina B+ round CNY 775 m (Jul 2023, investors not named).
  - The English table is machine-translated, and "dollars" often means yuan. **Check against the Chinese edition before adding anything to `data/funding/`.**
- **The 2024 investor interviews describe** US outbound-investment rules hurting USD funds and a shift to RMB funds backed by local governments. Software revenue comes mostly from SOEs and central enterprises ("inverted pyramid"), and willingness to pay is weak. This supports our finding that Xinchuang procurement is China's main demand-side instrument.
- **Surveys** (n = 875 / 631 / 350, opt-in convenience samples, no weighting):
  - up to half of contributors get no financial return, and donations stay in single digits;
  - there are no questions on employer support, foundations or Europe.
  - Level C, not generalisable.
- **Europe appears as a competitor or a benchmark**, never as a partner. One investor advises Chinese firms to target markets "European and American companies are reluctant to touch".

### 7.3 Chronicles, open-source AI, embodied AI, Web3 (511 events)
- **New to the repo, to trace to primaries:**
  - Chinese **AI model and data licences**: OpenAtom Model License v1.0 (Sep 2024), Mulan-Qizhi (Dec 2023), Zhiyuan/BAAI (May 2023), Mulan-Magnolia Open Data License.
  - **Court rulings on the GPL**: OfficeTen, Supreme People's Court IP Tribunal (Oct 2023); DedeCMS, Wuxi (Feb 2024).
  - **SBOM**:
    - the SBOM Chain initiative (Sep 2024);
    - the industry standard *SBOM Data Format Specification*, project no. 2024-1400T-SJ, a direct analogue of the CRA's SBOM duty;
    - GB 45438-2025, an AIGC labelling standard that touches open-weight distribution.
  - **China's external open-source diplomacy**:
    - WAIC Global AI Governance Action Initiative (Jul 2025);
    - MIIT international AI open-source cooperation initiative;
    - MOST China–ASEAN AI open-source community;
    - China–Russia consultation mechanism on AI and open source (May 2024);
    - MIIT promoting openEuler in Africa (Jul 2024).
  - **OpenAtom hosted the 2nd Open Source Congress** (Beijing, Aug 2024) with the Linux Foundation, the **Eclipse Foundation**, OSI, OpenInfra and the Rust Foundation.
  - **Public procurement of AI agents**, H1 2025: 371 awards, RMB 1.016 bn.
- **Europe in the chronicles (46 mentions).**
  - The CRA is mentioned throughout, including the ASF's compliance work.
  - The EU Open Source Policy Summit 2025 explored an EU-supported long-term maintenance fund.
  - The Horizon Europe **€107 m RAISE pilot** is mentioned.
  - The 2025 report names a Commission "open source first" roadmap with a "European Open Source Sovereignty Fund"; the name and fund label are **unverified (C)**, so check against R01.
  - It reports the **OpenHarmony × Eclipse Oniro** overseas launch and the Lasso/Orange €650k ruling.
- **Conflicts with our documents (to resolve; our A-level data prevails meanwhile):**
  - **C1:** OpenAtom's hosting of the 2024 Congress qualifies CN-FOUNDATIONS §7 finding 2 (no international cooperation in its 2026 coverage). Restate the finding as a 2024→2026 change.
  - **C2:** the report says CNY 13.384 m was awarded in the 2023 OpenAtom Competition, but OpenAtom's own 2023 accounts show CNY 5.62 m spent. The prizes may have been paid partly outside the foundation (co-organisers, local governments). Do not use 13.4 m as OpenAtom spending.
  - **C3:** Shenzhen "up to CNY 20 m for major open-source projects" (report) vs our CNY 10 m (A). Possibly a different instrument; check.
  - **C4:** Guangdong CNY 8 m and Shanghai CNY 5 m are dated 2025 in the report and 2026 in FUNDING-COMPARISON. Find which Shanghai text carries the 5 m, because 沪府办〔2025〕33号 has no amounts.
  - **C5:** the report gives DeepSeek-V3/R1 as "DeepSeek License"; we have MIT (A). R1 and later V3 are MIT. The report is imprecise.

### 7.4 AI Blue Paper (18.6)
- **Authorship.** The Blue Paper is **not a KAIYUANSHE work**. It was written by the Datawhale AI Industry Research Institute, published by the Hangzhou AI Open Source Ecosystem Academy and co-published by Zhejiang AI institutions, SJTU and ModelScope (March 2026). Datawhale also appears in it as a case study, so its self-descriptions are C.
- **Main argument.** China leads on open-weight models at the application layer, but the foundations stay closed: chips, compute, training and inference systems. Neutral, foundation-governed projects are rare in China, against about 40% of high-impact US projects.
- **Model openness.**
  - None of Qwen, GLM, DeepSeek, MiniMax or Intern releases its pretraining data.
  - Their licences are Apache/MIT, so by the book's own reading of OSAID 1.0 they are open-weight, not open-source AI. This is relevant to the AI Act's open-source exemption.
- **Policy anchors with dates:**
  - State Council "AI+" opinions (Aug 2025);
  - MIIT and 7 ministries, AI+ manufacturing (Jan 2026);
  - 2026 Government Work Report ("support AI open-source communities");
  - local 2027–28 targets for Shanghai, Beijing and Suzhou.
- **Funding.** Money flows through compute, model, data and corpus vouchers and through guidance funds. There are **no figures on public money for neutral foundations**.
- **Europe.** It is mentioned once (the "market-driven" US and Europe). The comparison is China–US only.
- **Accuracy.** At least four citation errors, listed in the notes.

## Changelog
- 26 Nov 2026: 18.1, 18.6, 18.7 and chronicles read in full (§7): 1,348 verbatim-checked claims; conflicts C1–C5 opened; Blue Paper re-attributed to Datawhale.
- 26 Nov 2026: 18.5 done (COSCon 2016 slogan, A); 18.4 negative result (finances unpublished); KAIYUANSHE wiki (memory-fragments) and RFC repos mirrored; international liaison group described in §4.
- 26 Nov 2026: 18.2 and 18.3 first pass (§6): EU27/China/US shares, China in the global top 300 (2015–2025), foundations, cross-match with the external report.
- 25 Nov 2026: OpenShare/OpenDigger dump complete. 3,409 files (181 MB) with SHA-256 in [`data/external/kaiyuanshe/openshare-manifest.tsv`](../data/external/kaiyuanshe/openshare-manifest.tsv): 3,384 leaderboard files (9 scopes × 4 group types, years 2015–2026, months 2020-01–2026-10) plus overview and geo files. The 36 404s are month 2026-11, not yet published.
- 25 Nov 2026: corpus archived (24 repositories, live site, OpenShare/OpenDigger JSON); inventory and roadmap written.
