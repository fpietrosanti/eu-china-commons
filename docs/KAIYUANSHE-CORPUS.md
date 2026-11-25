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
| **China AI Open Source Ecosystem Blue Book 2026** (中国人工智能开源生态蓝皮书) | 2026 (8 Nov) | ZH + EN | see repo | [site](https://kaiyuanshe.github.io/China-Artificial-Intelligence-Open-Source-Ecosystem-Blue-Book-2026/) |
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
| AI Blue Book 2026 | 5 chapters with references and appendix |

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
| KAIYUANSHE FY2022–FY2025 annual reports not fetched ([CN-FOUNDATIONS.md](CN-FOUNDATIONS.md) §2) | 2020 and 2021 annual reports are in the archive (PDF). 2022–2025 are **not** among the published sites; next step 18.4. |
| COSCon 2016–2017 themes only at level D ([COSCON-THEMES.md](COSCON-THEMES.md)) | The COSCON2016 site repo (official 2016 page) is archived; check the slogan (18.5). |
| No time series of China's share of global open-source activity | OpenShare's Open World and the "China" scope of the leaderboard give yearly and monthly series since 2015, with a public metric (OpenRank). |
| The 504-project list in the external report lacks AtomGit/Gitee activity | The leaderboard's repo and project entries cover Gitee and AtomGit via OpenDigger where available. Cross-match (18.3). |

## 3. How we use it on the site

- The home page, the research index and the data page now have a **Key sources** block. It shows the external report (PDF, 504-project dataset, analysis) and this KAIYUANSHE corpus with links to every report.
- The reports remain on KAIYUANSHE's own sites; we link to them. We republish nothing under licences that do not allow it (the 2020–21 PDFs carry no licence statement).
- The 2023–2025 reports are CC BY-SA 4.0. Any extract we publish keeps the attribution "China Open Source Annual Report 20xx, KAIYUANSHE (开源社), CC BY-SA 4.0" and the same licence for that extract.

## 4. Relations

KAIYUANSHE is a stakeholder as well as a source: [COLLAB-MAP.md](COLLAB-MAP.md) row `x-kaiyuanshe`, [DIRECTORY-CN.md](DIRECTORY-CN.md) `cm-kaiyuanshe`. The yearly "State of Europe–China Digital Commons" in [OPERATIONS.md](OPERATIONS.md) is planned to be released alongside their report. Building the reading below as an open, citable index of their work is also a concrete basis for contacting them.

## 5. Research roadmap (R18)

| # | Task | Output |
|---|---|---|
| 18.1 | Read the EN data chapters 2023–2025 and extract every quantitative claim about China vs the world (developers, OpenRank, top projects, foundations). | `data/external/kaiyuanshe/cosr-claims.tsv` with chapter, claim and level |
| 18.2 | Recompute the headline figures from the OpenShare files: China's share of developers, contribution and influence; top Chinese projects and initiators per year; Operating System and Cloud Native scopes. | Table in CN-OSS-LANDSCAPE, level A for the figures |
| 18.3 | Cross-match the leaderboard's "China" scope (project and repo, 2025) with the external report's 504 projects and with our catalogue. | List of projects missing from each |
| 18.4 | Find the KAIYUANSHE FY2022–2025 annual reports (kaiyuanshe.cn, WeChat) and archive them. | Update CN-FOUNDATIONS §2 |
| 18.5 | COSCon 2016 slogan from the archived COSCON2016 site. | Update COSCON-THEMES row 1 |
| 18.6 | Read the AI Blue Book 2026 (EN) for policy, funding and international-cooperation passages. | Note plus claims TSV |
| 18.7 | Read the commercialisation and questionnaire chapters for funding models of Chinese open-source companies, to compare with PROJECT-FUNDING. | Rows in project-funding where applicable |
| 18.8 | Refresh the mirror quarterly (`git remote update` in each mirror, re-run `tools/openshare_dump.py`). | Manifest diff |

## Changelog
- 25 Nov 2026: corpus archived (24 repositories, live site, OpenShare/OpenDigger JSON); inventory and roadmap written.
