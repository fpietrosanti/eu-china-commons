# Operations — a long-term project on a weekly budget

Draft of 3 Nov 2026, for Fabio's decision. The aim is to keep research, publishing and outreach running week after week **with a capped token consumption** and to stay resumable at any moment (STATE.md, idempotent jobs on the server).

## 1. Weekly token budget
- **Cap (decided by Fabio, 3 Nov 2026): at most 10% of the available weekly budget** of the Claude subscription. Split as follows.

  | Share | Activity |
  |---|---|
  | 50% | Research: sources, registry, verification |
  | 25% | Publishing: catalogue, site, bilingual briefs |
  | 15% | Outreach and content: social, newsletter |
  | 10% | Reserve: news, requests from collaborators |

- **Mechanism (to build after the decision):**
  - a weekly job on the server (`claude -p`, subscription only, no API)
  - every run writes its token usage to `data/token-ledger.tsv` (week, activity, tokens)
  - before starting, the job sums the current week and **does not start** if the cap is reached; leftover work moves to the following week
- Intensive work, such as the paper, gets its own temporary budget approved case by case.
- A monthly report in STATE.md: tokens used vs cap, and outputs produced.

## 2. Fixed cadence

| Cadence | Output | Languages |
|---|---|---|
| Weekly | Monitoring of new policies, news and code releases (EU, China central, EU member states, Chinese provinces); new sources archived on GitHub | EN + ZH notes |
| Weekly | 2–3 social posts per language | EN, ZH |
| Monthly | Catalogue update (cases added or verified); short "Observatory Brief" newsletter | EN + ZH |
| Bi-monthly | Analysis note (2–4 pages) on one theme or one pair of comparable initiatives | EN + ZH |
| Quarterly | Working paper or proposition paper; public changelog | EN (+ ZH summary) |
| Yearly | "State of Europe–China Digital Commons" report, released alongside the DC-EDIC *State of Digital Commons* and KAIYUANSHE's *China Open Source Report* | EN + ZH |

## 3. Source archive
- Every external source analysed gets **a copy in the repository** (`sources/archive/`) and an index (`index.tsv`) with the original URL, date, method (direct or relay), HTTP code and SHA-256. The original link always stays in the text.
- **Copyright:** official documents (EU, governments, .gov.cn) can be republished. Articles, think-tank reports and copyrighted PDFs are a problem in a **public** repo.
  - Proposal: two repos, a public one with official documents plus the index and links, and a **private** one with the full mirror.
  - Alternatively, a single private repo for the mirror and a public site with the links only.

## 4. Social channels and brand
Use one brand everywhere: **Europe–China Digital Commons / 中欧数字公地**. Proposed handle: `EUChinaCommons`. Availability must be checked on each platform. Accounts must be created by Fabio: Claude cannot create accounts.

| Area | Platform | Purpose | Notes |
|---|---|---|---|
| EU / global | LinkedIn (page) | Institutions, policy, industry | Main channel in Europe. **Not reachable from China** |
| | Mastodon (e.g. fosstodon or an EU instance) | Open-source community | Natural for the FOSS world |
| | Bluesky | Policy and academia | |
| | X | Journalists, US/EU policy | Optional, low priority |
| | YouTube | Talks, conferences | |
| | GitHub (organisation) | Code, data, sources | Also reachable from China |
| China | **WeChat Official Account (微信公众号)** | Institutions, industry, media | Essential. Registration needs a Chinese entity or ID, or a partner (e.g. a Chinese university or community) |
| | Weibo (微博) | Public visibility | Can be registered with a foreign phone number |
| | Zhihu (知乎) | Long-form analysis | Good for papers |
| | Bilibili (哔哩哔哩) | Video | Mirror of the YouTube talks |
| | CSDN / Juejin (掘金) / OSChina (开源中国) | Developers, open-source communities | OSChina is the most relevant |
| | Gitee / AtomGit | Data and code mirror | Credibility in China, and accessibility |

**ZH content:** posts in Chinese must be reviewed by a native speaker before publishing. Proposal: a Chinese partner or collaborator for the ZH channels.

## 5. Decisions needed (Fabio)
1. Weekly token cap.
2. Source archive: public, private, or the split solution.
3. Which social accounts to open first. Proposal: LinkedIn, Mastodon and GitHub now; WeChat, Weibo and OSChina with a Chinese partner.
4. Chinese partner for the ZH channels and for the WeChat registration.
