# EU Digital Commons EDIC × China open source — analysis for joint review

**Draft v0.1 — 29 October 2026.** Prepared for review before the final proposition papers and conference talking points are drafted.
**Scope:** open-source strategy and digital commons only. English only.
**Labels:** **[F]** fact from the cited text · **[C]** published commitment or target, not a realised result · **[I]** our inference · **[P]** our proposal.
**Sources:** EU side: the *DC-EDIC Implementation Strategy 2026–2027* (adopted 16 Oct 2026), cited as *IS p.N*. We read it in full. China side: the research memo of 29 Oct 2026 ([memo-2026-10-29.md](memo-2026-10-29.md)), cited by its [S##] IDs. We did not re-read the Chinese originals. The URL check run on 29 Oct ([../data/source_check.tsv](../data/source_check.tsv)) found that S05, S16 (HTTP 403), S19, S23 and S31 did not respond from this machine. Until we confirm them from another network, claims based on those sources are marked ⚠.

---

## Part 1 — What the DC-EDIC Implementation Strategy actually commits to

### 1.1 Core facts
- **Objective [F]:** "build the European capacity to connect actors and needs, deploy digital commons and maintain them at scale" (IS p.5). Connect, Deploy and Maintain have equal standing, and work can start from any of the three (IS p.3, p.6).
- **Eight results by end-2027 [F]** (IS p.23):
  - Connect: E1 Community Network and Local Nodes · E2 one-stop shop and expertise hub · E3 State of Digital Commons
  - Deploy: E4 Deployment Challenge Programme (100-day challenges) · E5 Collaborative Workspace Flagship
  - Maintain: E6 Critical Dependency Intelligence · E7 EU-STF Pilot
  - Cross-portfolio: E8 Future Domains Roadmap
- **Delivery base [F]:** all funded capacity comes from EDCOM. WP2 → Connect, WP3 → Maintain (EU-STF operated by the Sovereign Tech Agency), WP4 → Deploy (campaigns led by DINUM and ZenDiS) (IS pp.28, 49–50). "Results outside EDCOM require separately authorised delivery and resource arrangements" (IS p.29).
- **Flagship [F]:** Collaborative Workspace. Two tracks are confirmed, Document and Communication; Meeting is TBC. The named technologies are openDesk Notes/Docs, BlockNote and the Matrix protocol (IS pp.14–17). The document proof must run in two or more controlled reference environments in different national settings (IS p.15).
- **Concrete 2027 targets [C]:**
  - regular cross-organisational document collaboration, with the shared reference reused in one more setting
  - one or more additional use cases with reference proofs
  - one bounded EU-STF cohort selected and contracted, with funding that may run into 2028 (IS pp.19, 21–23)
- **Decision rights [F]:** the Assembly decides strategy, any new flagship, product endorsement, any permanent funding mechanism and material commitments. The Director acts within delegations. The Advisory Board only advises (IS pp.28, 31–32).
- **Enlargement is "a priority" [F]**, but it is defined only as more **EU Member States** plus observers and "countries interested in joining" (IS p.29).
- **Openness [F]:** access is "open, transparent and non-discriminatory"; restricting an activity to members requires Assembly approval (IS p.31). Jointly developed software uses Article 27 FOSS licences by default (IS p.31).
- **Security, AI and exit [F]:**
  - every intervention states its supply-chain baseline and who is responsible for vulnerabilities (IS p.25)
  - AI dependencies need exit conditions (IS p.25)
  - "a substitution test is often more informative than a general claim of modularity" (IS p.26)
- **Future domains [F]:** cloud and hosting; developer tools; desktop OS and virtualisation; mobile app distribution; AI-enabled open source (IS p.24). One or two may enter discovery in 2027.

### 1.2 What the Strategy does *not* contain (important for positioning)
1. **No international or third-country dimension. [F]** It never mentions non-EU cooperation outside the EU's own institutions. The only outward links are related EDICs (ALT-EDIC), the Open Internet Stack, the JRC, Interoperable Europe and the Commission's proposed DPI Steward Organisation (IS pp.21, 31). **Implication [I]:** any China engagement is outside the adopted perimeter. As DC-EDIC activity it would need an Assembly decision (IS p.31–32). Without one, it must stay non-DC-EDIC (foundations, academia, civil society) and feed *evidence* into E3/E6.
2. **No budget figures. [F]** Resources are described only as "confirmed" capacity. **[I]** An external proposal that asks for money will fail. One that offers evidence or capacity at zero cost to DC-EDIC fits the "smallest useful proof" logic.
3. **Sovereignty is defined functionally [F]:** "the ability to understand, adapt, deploy, support and replace critical capabilities" (IS p.6). It is not defined by where a supplier is based. **[I]** This is the most useful hook for a China conversation, because it makes evidence of replaceability the criterion and not geopolitics.

### 1.3 Entry points for outside evidence
The two most important in **bold**.

| Result | Can outside evidence enter? | Mechanism in the text |
|---|---|---|
| **E3 State of Digital Commons** | Yes. It draws on "selected research" and "observer knowledge" (IS p.13) | Comparative international chapter or annex |
| **E6 Critical Dependency Intelligence** | Yes. "specialist assessments" from "security actors and maintainers" (IS p.20) | Global upstream dependencies are shared by EU and CN stacks |
| E2 one-stop shop | Indirectly: catalogue federation, publiccode.yml (IS p.10) | Metadata standards |
| E4 challenges | Independently funded challenges only need a *notification* (IS p.16) | A Member State could fund one on a global upstream component |
| E8 Future Domains | Six criteria; "other strategic digital commons proposed by Member States" (IS p.24) | Desktop OS, RISC-V and AI are where Chinese work is substantial |
| E5 Workspace, E7 EU-STF | **No** in the first cycle: European capacity, trusted maintainers, EDCOM contract | Do not propose |

---

## Part 2 — Analysis by level

For each level: EU key points · China key points · complementarity · what can realistically be done.

### 2.1 Strategic level

**EU key points**
- Open source as **European agency and replaceability**, linked to sovereignty, resilience and competitiveness (IS p.5–6).
- Subsidiarity, neutrality and anti-capture "by a supplier, country or community" (IS p.9).
- Evidence-gated, stop/scale decisions at end-2027 (IS p.36).

**China key points**
- Open source as **national capability and industrial resilience**: 14th FYP and the MIIT software plan [S04, S05⚠]; *AI + Software* plan, Sept 2026, with ≥5 major projects by 2028 [C][S06].
- Central platforms: OpenAtom and AtomGit [S06, S07].
- Explicit encouragement of international participation [S12, S13].
- The Shanghai 2026 declaration uses the term *数字公地核心原则* (core principles of digital commons) [S20]. This is a conference declaration, not a binding text.

**Complementarity [I]**
- **Shared ground:** both sides treat open source as *infrastructure*, not a product, and both worry about supply-chain resilience and maintainer sustainability.
- **Divergence:** the EU stresses supplier neutrality and the right to exit; China stresses domestic stack control. Each side's "sovereignty" is partly *defined against the other*.
- **Workable bridge:** the **global upstream** that both depend on (Linux kernel, compilers, crypto libraries, Python/JS ecosystems, RISC-V specifications, Matrix and other open protocols). Neither side can secure it alone, and joint stewardship of it reduces *both* sides' dependency on third parties.

**Realistic actions [P]**
- **S-1.** Frame cooperation as "**resilience of the global open-source upstream**". Do not frame it as an EU–China technology partnership.
- **S-2.** Route it through the existing **EU–China High-Level Digital Dialogue** [S40]. Do not route it through DC-EDIC governance in 2026–27.
- **S-3.** Use the "smallest useful proof" logic: one evidence product, published openly, with a stop condition.

### 2.2 Sovereignty funding level

**EU key points**
- **EU-STF Pilot [F]:** STA-operated, bottom-up open survey, bounded work packages with trusted maintainers, three decision points, scaling decided end-2027 (IS p.21).
- Its evidence feeds the Commission's proposed **Open Source Maintenance Instrument** (IS p.21).
- **Additionality** is an explicit metric (IS p.48).
- Coordinated Member State calls are a post-2027 option only (IS p.42, 45).

**China key points [C]**
These are announced envelopes, not verified disbursements.
- **Project grants and incubation:** Hangzhou up to RMB 1M / 0.5M per project [S15].
- **Operating-cost support for communities:** Guangdong 30%, cap RMB 8M [S17].
- **Adoption subsidies:** Shenzhen +15% for OpenHarmony and +5% for RISC-V, cap RMB 10M [S18].
- **Venture-style funds:** Jiangsu/Suzhou ≥RMB 1bn planned [S16⚠]; Shanghai investment fund [S20].
- No identified Chinese instrument resembling STA/EU-STF: public-interest maintenance funding for existing upstream maintainers, regardless of who they are.

**Complementarity [I]**
- The two funding models are **mirror images**:
  - The EU funds *maintenance of what exists* and has weak demand-side and industrial-adoption instruments.
  - China funds *creation, incubation and adoption* and has no visible maintenance-of-the-commons instrument.
- Each side holds evidence the other lacks: the EU on maintainer funding and additionality, China on demand-side incentives at scale.
- **Hard limit:** no co-funding and no cross-financing. EU-STF selects European/"trusted" maintainers, and Horizon Europe restricts Chinese participation [S36].

**Realistic actions [P]**
- **F-1.** Joint *methodology* study: an **open-source funding-instrument taxonomy** covering grant, maintenance contract, operating subsidy, adoption subsidy, VC and endowment, plus additionality metrics. Each side funds its own researchers.
- **F-2.** "**Parallel funding, shared upstream**": each side independently funds maintenance of the same globally critical components through its own instruments, then publishes coordinated (not joint) reports. This avoids money crossing borders and still stops two funders from paying for the same fix twice.
- **F-3.** Ask the Chinese side for a **disbursement-level transparency** dataset (beneficiaries, amounts, maintainers reached) as the price of comparability. This also tests [C] versus reality.

### 2.3 Project level

**EU key points**
- **Workspace stack [F]:** openDesk, BlockNote, Matrix.
- Interfaces, conformance tests and substitution tests come before code-sharing (IS p.8–9, 26).
- Future domains include desktop OS, mobile distribution and AI.

**China key points [F/C]**
- OpenHarmony, openEuler, openKylin, AtomGit; RISC-V via XiangShan/Ruyi [S23⚠].
- AtomGit claims 80k models, 370k datasets and 12M users. These are official figures, not audited [S06].
- **No identified Chinese equivalent of the Collaborative Workspace** (memo gap; still open).

**Complementarity [I]**
- **Real precedent: Eclipse Oniro ↔ OpenHarmony as "sister projects"**, with an EPL-2.0 Chinese translation, active 2026 metrics and a renewal in March 2026 [S25–S30]. This shows *separate governance with technical coordination*, which is exactly the "replaceable, interoperable" model the IS prefers.
- **Matrix** is a federated protocol: interoperability across independently governed servers is its design goal (IS p.15). **[I]** A protocol-level conformance contribution is far less sensitive than shared code or hosting.
- **Desktop OS and RISC-V** are on the EU's Future Domains list and are where China has the most activity: a mutual-learning opportunity, *not* a first-cycle deliverable.

**Realistic actions [P]**
- **P-1.** **Oniro/OpenHarmony governance case study**: repository-level evidence on fork capability, release authority, up/downstream flow, CVE handling. It goes to E3 as an annex.
- **P-2.** **Conformance and interoperability tests on open standards** (ODF, Matrix spec, publiccode.yml, SPDX/CycloneDX SBOM). Shared tests and separate implementations; this fits IS p.8 exactly.
- **P-3.** **SBOM/supply-chain data exchange** on non-sensitive global upstream components, comparing Beijing/Shanghai SBOM practice [S12, S13] with E6 methods.
- **P-4.** Excluded explicitly: shared hosting, joint deployment in public administrations, workspace co-development, personal data, undisclosed vulnerabilities.

### 2.4 Community level

**EU key points**
- **Community network [F]:** E1 Community Network and voluntary local nodes; EDCOM WP2 community forums; the Digital Commons Research Award (IS p.12, 49).
- **Participation [F]:** open, non-discriminatory participation (IS p.31).

**China key points [F]**
- **KAIYUANSHE:** est. 2014, vendor-neutral, volunteer-run, OSI affiliate since 2016, annual China Open Source Report; COSCon 2026 is in Hangzhou, 14–15 Nov [S08, S09, S32].
- **OpenAtom:** foundation, government-linked.
- **Chance Foundation:** Chongqing [S19⚠, S31⚠].
- **CCF open-source committees** [S22].
- **Shanghai Open Source IT Association:** digital-commons declaration [S20].

**Complementarity [I]**
- Community-to-community is the **lowest-risk, highest-trust** layer.
- It already exists through OSI, Apache/CommunityOverCode, FOSSASIA, OpenInfra and Eclipse.
- KAIYUANSHE's annual report is the natural counterpart to the EU's **State of Digital Commons**.

**Realistic actions [P]**
- **C-1.** Joint **EN/ZH digital-commons glossary**: digital commons / 数字公地, open source vs open weight, steward, maintainer, OSPO, sovereignty / 主权 vs autonomy / 自主.
- **C-2.** **Cross-review of annual reports**: State of Digital Commons ↔ China Open Source Report, each with a reciprocal "view from the other side" chapter.
- **C-3.** **Maintainer exchange tracks at existing conferences** (COSCon, FOSDEM, Open Source Summit, OSPO Summit). These need no institutional agreement.
- **C-4.** **Licence work**, building on the EPL-2.0 translation and OSI approval of Mulan PSL 2.0 [S24, S27]: an OSI-AI-Definition reading in Chinese, plus EUPL ↔ Mulan compatibility notes.

---

## Part 3 — Synthesis: complementarity scores (first pass, to be challenged in review)

Scale 1–5. *Fit* = thematic complementarity. *Feasibility* = how realistic in 2026–27. *Exposure* = political, security and legal risk (5 = high).

| # | Action | Level | IS entry point | Fit | Feasibility | Exposure |
|---|---|---|---|---|---|---|
| C-1 | EN/ZH digital-commons glossary | Community | E3 | 4 | 5 | 1 |
| C-2 | Report cross-review | Community | E3 | 4 | 4 | 1 |
| P-1 | Oniro/OpenHarmony case study | Project | E3, E8 | 5 | 4 | 2 |
| F-1 | Funding-instrument taxonomy + additionality | Funding | E7, E3 | 5 | 4 | 1 |
| P-3 | SBOM/upstream dependency evidence | Project | E6 | 5 | 3 | 3 |
| P-2 | Open-standard conformance tests | Project | E4, E5 (indirect) | 4 | 3 | 2 |
| F-2 | Parallel funding, shared upstream | Funding | E7 (post-2027) | 4 | 2 | 3 |
| C-4 | Licence and Open-Source-AI concordance | Community | E8 | 4 | 4 | 2 |
| S-2 | Agenda item in the High-Level Digital Dialogue | Strategic | outside the IS | 3 | 3 | 3 |
| — | Joint deployment / shared infrastructure | — | none | 1 | 1 | 5 |

**Recommended package [P]:** C-1 + C-2 + P-1 + F-1 as a single, non-binding "**Global Digital Commons Evidence Exchange**" for 2026–27. It is run by foundations and academia, its output feeds E3/E6/E7 as external evidence, and it has a stop condition at end-2027 that matches the IS review.

---

## Part 4 — Proposed final deliverables (after our review)

1. **Proposition paper 1 — Strategic framing:** "Resilience of the global open-source upstream: a shared interest without a shared platform".
2. **Proposition paper 2 — Funding:** "Maintenance vs incubation: what Europe's EU-STF and China's regional funds can learn from each other".
3. **Proposition paper 3 — Projects:** "Sister projects, shared tests: lessons from Oniro/OpenHarmony for interoperable commons".
4. **Proposition paper 4 — Community:** "A bilingual evidence exchange on digital commons".
5. **Talking points — European audiences** (DC-EDIC Assembly/Advisory Board, FOSDEM, EU OSPO events). Angle: zero cost, no perimeter change, evidence for E3/E6/E7, anti-capture safeguards met.
6. **Talking points — Chinese audiences** (COSCon 14–15 Nov 2026, OpenAtom Developer Conference, Shanghai Open Source conference). Angle: global upstream resilience, licence and governance recognition, reciprocal transparency, the commons language of the Shanghai declaration.
7. Optional: a small website hosting the papers, the registry and the matrix. This is deferred until the content is approved.

## Part 5 — Questions for our review

1. **Voice:** independent analysis (whose name?), or a contribution to be submitted to the DC-EDIC Advisory Board or EDCOM WP2?
2. **COSCon 14–15 Nov is in 16 days.** Do we want Chinese-side talking points ready for it? If yes, they take priority.
3. Do the scores in Part 3 match your read? In particular, is P-3 (SBOM) too exposed for 2026–27?
4. Should the Chinese originals (S05, S16, S19, S23, S31) be re-fetched from the server to remove the ⚠ marks before the papers are written?
5. Should the "parallel funding" idea (F-2) appear in public talking points or stay internal?
