# STATE — Europe–China Digital Commons Observatory (中欧数字公地观察站)

Updated: 2026-11-03 · Milestone v0.1 public: **12 Nov 2026**

## Decisions (Fabio)
- Scope: open source / digital commons only. Site EN + ZH; working docs EN.
- Domain: **eu-china-commons.eu** (site/CNAME ready). Handle: EUChinaCommons.
- Token budget: **max 10% of the available weekly budget** (ledger + weekly job, see docs/OPERATIONS.md).
- Hosting: one GitHub repo = repository + site via GitHub Pages (workflow .github/workflows/pages.yml publishes site/). A dedicated server account will run the jobs (maximise what is deployed there).

## Waiting on Fabio
- GitHub repo (name/org) and server account → then push, Pages, DNS of eu-china-commons.eu (registration + CNAME/A records to GitHub Pages)
- Public email; native-speaker ZH review; public vs private source archive; Chinese partner for WeChat

## In progress
- Research round 2 (gaps) in background; China-VPN queue: docs/CN-VPN-QUEUE.md (tools/vpn_queue.sh)
- Site v0.1 FROZEN until gate A (see TODO.md)
- Source archive: server job ~/ecdc (ubuntu@51.158.36.151, temporary) → to move to the dedicated account
- Multi-level analysis (data/initiatives.json, docs/MULTILEVEL-ANALYSIS.md)

## Where things are
TODO.md (roadmap per mission) · site/ · docs/REVIEW-DRAFT.md · docs/LITERATURE-REVIEW.md · docs/DOMAIN-OPTIONS.md · docs/OPERATIONS.md · tools/
