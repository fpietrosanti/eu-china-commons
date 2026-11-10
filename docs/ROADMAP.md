# Roadmap & research agenda — Europe–China Digital Commons Observatory

Status: draft v1, 2026-11-10. Everything below is a **proposal** unless marked done.
Principle: open source as a *shared, non-rival commons* — collaboration on public goods is the EU–China equivalent of basic research cooperation: it lowers mutual dependence instead of creating it, because code that is open can be forked, audited and maintained by either side.

## 1. Research agenda (what we want done — by us, by partners, or by funded third parties)

### A. High-level industrial policy
- A1 Comparative map of public funding for open source: EU (NGI, Horizon, DEP, STF), member states, China (MIIT 14th/15th FYP, OpenAtom, provincial programmes) — volumes, instruments, outcomes.
- A2 Economic impact: does public OSS funding raise productivity, SME uptake, exports? Replicate Hoffmann–Nagle–Zhou and Blind et al. for China/EU pairs.
- A3 Open-source foundations as industrial-policy instruments (OpenAtom vs Eclipse/Linux Foundation Europe/OW2): governance, membership, state role.
- A4 Standards: where EU and Chinese open standards converge/diverge (OpenHarmony vs EU stacks, RISC-V, data spaces vs national data exchanges).
- A5 Indicators: a yearly "EU–China Digital Commons Index" (shared projects, cross-contributions, funding, dependencies).

### B. National security & mutual dependence (research-style, non-adversarial)
- B1 Dependency mapping: which critical software components each side imports from the other (SBOM-level, package registries: npm, PyPI, Maven, crates, Gitee/AtomGit).
- B2 Scenarios: decoupling vs "commons-based" interdependence — cost, resilience and security of each, using fork-ability as risk mitigation.
- B3 Supply-chain security as shared good: joint vulnerability handling (CVE/CNVD), reproducible builds, signing (Sigstore), CRA compliance impact on Chinese maintainers.
- B4 Governance safeguards: export-control, sanctions and data-law compatibility (CRA, GDPR, PIPL, DSL) for joint OSS work — what is allowed, where are the red lines.
- B5 "Basic-research model": how CERN/ITER-like rules (openness, shared IP, neutrality) could apply to digital commons cooperation.

### C. Community outreach & ecosystem building
- C1 Directory and map of communities, OSPOs, foundations, universities on both sides (ongoing).
- C2 Barriers study: language, platforms (GitHub vs Gitee/AtomGit), payment, identity, time-zones, firewall.
- C3 Bridge programmes: bilingual maintainers, translation of docs, mentorship (GSoC/OSPP 开源之夏 pairing).
- C4 Events: joint tracks at FOSDEM, OpenAtom Developer Conference, COSCon, OSS Summit EU/China.
- C5 Diaspora & student networks as connectors.

### D. Large-company collaboration
- D1 Who already co-maintains what: EU and Chinese companies in the same upstreams (Linux kernel, OpenStack, Kubernetes, RISC-V, Apache, openEuler/OpenHarmony).
- D2 Pre-competitive collaboration models: shared upstreams, joint working groups in neutral foundations.
- D3 Case studies: successful and failed joint projects; IP/licensing lessons.
- D4 A "neutral-ground" catalogue: projects where both sides can contribute without regulatory risk.

### E. Immediate technical actions for developers
- E1 Mirror & sync tooling: GitHub ↔ Gitee/AtomGit mirroring, reachable docs, CN-friendly CDNs/package mirrors.
- E2 Bilingual docs templates, i18n/l10n contributions (zh/EU languages).
- E3 Interop sprints on concrete stacks: OpenHarmony/OpenEuler ↔ EU distros, RISC-V toolchains, data-space connectors, AI open-weight model tooling.
- E4 Shared security hygiene: SBOM, reproducible builds, signing, CRA readiness checklist for Chinese contributors to EU-market software.
- E5 "Good first issues" list across both ecosystems for cross-contribution.

### F. Funding for cross-border collaboration
- F1 Map instruments open to joint EU–China teams (Horizon Europe association rules, bilateral science agreements, member-state–China funds, foundations, NLnet, Sovereign Tech Fund eligibility).
- F2 Propose a small "commons bridge fund": micro-grants for maintainers working across both ecosystems (translation, mirroring, security fixes).
- F3 Funding for the Observatory itself (NLnet, foundations, universities).

### G. Collaboration map: who has a value proposition and may want to join
- G1 Map every organisation (EU, member states, China, international) whose mission gives it a concrete reason to cooperate on the digital commons: foundations, OSPOs, universities and think tanks, standards bodies, public agencies, industry associations, companies, funders, developer communities, EU–China cooperation bodies. Hong Kong is included because, as part of the Greater Bay Area together with Shenzhen, it shares a substantial and long-standing cross-fertilisation of research, talent, capital and open-source communities with mainland China, and often acts as a bridge to European partners. Macao is included for the same Greater Bay Area reason and for its established role as a platform between China and Portuguese-speaking countries, which gives Portugal and the Lusophone world a specific channel of cooperation.
- G2 For each: its value proposition (what it gains and what it brings), the tracks A–F it fits, its existing EU–China ties, its institutional contact, and a collaboration-likelihood estimate (inference, labelled).
- G3 Dissemination: tailored, human-sent outreach per segment (research partners, reviewers, co-funders, event hosts), never mass email; track responses.
- G4 Research on the map itself: which segments drive cooperation, where the gaps are (e.g. Chinese provinces, smaller member states).

## 2. Roadmap

**Phase 0 — Foundations (done / closing)**
- [x] Domain, site, HTTPS, logo, previews; contact@ with DKIM/DMARC; LinkedIn page
- [x] Server with weekly refresh; VPN and assisted queues
- [ ] External mail test (Fabio) · GitHub token on server (Fabio)

**Phase 1 — Launch & collection (Nov–Dec 2026)**
- [ ] Launch posts WeChat / LinkedIn / X (texts ready in docs/outreach/)
- [ ] Publish this research agenda on the site (EN/ZH) as "call for research & collaboration"
- [ ] Continuous collection, now tagged by track A–G
- [ ] Collaboration map v1: value proposition and fit per organisation (G1–G2)
- [ ] China access route (mainland VPS SOCKS exit) — decision pending; clear VPN (88) and assisted (47) queues
- [ ] Hong Kong mirror (EdgeOne Pages, free)

**Phase 2 — First outputs (Jan–Feb 2027)**
- [ ] Publish verified directory, cooperation map, funded-projects registry (A1, C1)
- [ ] Industrial-policy chapter v1 (A1–A3)
- [ ] Quick technical wins: mirroring guide + CN/EU reachability checklist (E1, E2)
- [ ] Funding map for cross-border collaboration (F1)
- [ ] First external reviewers in CN and EU

**Phase 3 — Report & dialogue (spring 2027)**
- [ ] "State of EU–China Digital Commons 2027" report (EN/ZH, PDF) with first Index (A5)
- [ ] Dependency-mapping pilot (B1) and scenario note (B2)
- [ ] Company case studies (D1, D3)
- [ ] Targeted institutional outreach from the collaboration map (G3); event tracks (C4)

**Phase 4 — Programmes (2027+)**
- [ ] Bridge programmes and interop sprints (C3, E3)
- [ ] Commons bridge fund proposal (F2); Observatory funding (F3)
- [ ] Security & governance studies (B3–B5) with partner institutions
- [ ] Annual Index; optional .cn presence with ICP (currently excluded)

## 3. Decisions for Fabio
1. China VPS exit: provider and account holder.
2. Work budget (10% weekly cap or higher).
3. Target dates for Phase 2 and 3; which tracks to prioritise.
4. Whether to publish the research agenda publicly now (recommended: yes, it is the core of the call).
