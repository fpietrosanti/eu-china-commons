# COLLABORATION MAP v1 (roadmap track G)

Source of truth: [../data/stakeholders/collab-map.json](../data/stakeholders/collab-map.json) (967 organisations, generated 2026-11-10 by `tools/build_collab_map.js`; this page by `tools/build_collab_doc.js`).

**Status: first version, machine-assisted, not yet human-validated.** Every `value_proposition` and `likelihood` is an **inference** (labelled in each record), not a fact. `evidence` (A/A-v/B/C/D, see METHODOLOGY) describes only the existence and identity of the organisation. No outreach has been made; `institutional_contact` holds official pages only, no personal data.

## Method
1. **Inputs**: `data/directory/eu-orgs.json` (+ enrichment), `data/directory/cn-orgs.json`, `data/cooperation/eu-cn.json`. Events and media outlets (51 entries) are excluded: they are channels, not partners; they stay in the directory.
2. **Type mapping** from the directory's `stakeholder_type`/`level` to: foundation, OSPO, university, think-tank, standards, public-agency, industry-assoc, company, funder, community, cooperation-body.
3. **Tracks (A-F)** derived from the directory's pillars plus type and keywords (security terms add B, mirroring/interop terms add E). A rule-based first guess to be reviewed.
4. **EU-China ties**: cooperation records linked by `see_stakeholder` or by the same website, plus roles that mention the other side. Each tie keeps its source URL and evidence level.
5. **Likelihood** (inference, heuristic): directory priority + documented tie + fit of the type with the commons agenda + listed open-source projects, minus local-government units with a narrow remit. high >= 4, medium >= 3, otherwise low. The score is printed in each record's `likelihood_reason`.
6. **Cooperation bodies**: institutions, offices, chambers, think tanks, joint labs and networks from the cooperation map that are not already in the directory (dialogues, agreements and programmes are not organisations and are excluded).
7. **Curated additions** (`tools/collab_additions.js`): foundations, standards bodies, communities, universities, think tanks and companies missing from the inputs, chosen by analyst judgement; homepages checked for reachability only (HTTP 2xx/3xx gives evidence C, otherwise D). One (Shanghai Open Source Information Technology Association) was surfaced by web search.
8. **Dedupe** by website domain (hand-kept exceptions: Linux Foundation, OpenAtom, OpenForum Europe, Interoperable Europe, whose domains are shared with directory sub-units). Merged ids are kept in `source_ids`.

## Counts
### By side
| side | n |
|---|---|
| CN | 313 |
| EU | 65 |
| DE | 60 |
| INTL | 51 |
| FR | 50 |
| IT | 45 |
| NL | 31 |
| UK | 31 |
| CH | 26 |
| ES | 26 |
| PL | 19 |
| FI | 18 |
| PT | 17 |
| SE | 17 |
| CZ | 15 |
| BE | 14 |
| DK | 14 |
| NO | 14 |
| AT | 13 |
| GR | 12 |
| EE | 11 |
| LT | 11 |
| LV | 11 |
| RO | 11 |
| HU | 10 |
| BG | 9 |
| SI | 9 |
| HR | 8 |
| IE | 8 |
| SK | 8 |
| CY | 7 |
| LU | 7 |
| MT | 6 |

### By type
| type | n |
|---|---|
| public-agency | 231 |
| university | 187 |
| company | 119 |
| cooperation-body | 104 |
| industry-assoc | 94 |
| community | 92 |
| think-tank | 59 |
| foundation | 34 |
| standards | 22 |
| funder | 15 |
| OSPO | 10 |

### By likelihood (inference)
| likelihood | n |
|---|---|
| low | 620 |
| medium | 268 |
| high | 79 |

### By evidence level of the organisation record
| evidence | n |
|---|---|
| C | 386 |
| B | 349 |
| A | 211 |
| D | 21 |

### By track (an organisation can fit several)
| track | n |
|---|---|
| A | 526 |
| B | 67 |
| C | 350 |
| D | 223 |
| E | 113 |
| F | 110 |

### Group x likelihood
| group | high | medium | low |
|---|---|---|---|
| EU institutions | 11 | 25 | 29 |
| Member states / Europe (non-EU incl.) | 28 | 154 | 356 |
| CN | 29 | 68 | 216 |
| INTL | 11 | 21 | 19 |

Records with at least one documented tie to the other side: **241** of 967.

## Top 50 high-likelihood organisations
Ranked by heuristic score (ties and evidence as tie-breakers). Likelihood is an inference.

| # | id | organisation | side | type | tracks | basis (inference) | ev. |
|---|---|---|---|---|---|---|---|
| 1 | `mo-fdct` | [Science and Technology Development Fund (FDCT), Macao SAR](https://www.fdct.gov.mo) | CN | funder | F,A | FCT-FDCT MoU 2017 (FCT page, read 2026-11); NSFC-FDCT renewal Oct 2025 and 2026 joint programme (press/univer… | A |
| 2 | `mo-ipim` | [Commerce and Investment Promotion Institute of the Macao SAR (IPIM)](https://www.ipim.gov.mo/en) | CN | public-agency | C,D | Site describes Macao as a gateway for mainland cooperation with Portuguese-speaking countries via its service… | A |
| 3 | `mo-mpu` | [Macao Polytechnic University (MPU)](https://www.mpu.edu.mo/en) | CN | university | A,C,E | Centre on machine translation and AI established 2019 with China's Ministry of Education; Chinese-Portuguese … | A |
| 4 | `cn-nsfc` | [National Natural Science Foundation of China](https://www.nsfc.gov.cn) | CN | funder | F | National Natural Science Foundation of China (NSFC) (institution, EU-CN): Chinese research funder with bilate… | B |
| 5 | `cn-sac` | [Standardization Administration of China](https://www.sac.gov.cn) | CN | standards | A | Standardization Administration of China (SAC) (institution, EU-CN): Chinese national standards authority, ISO… | B |
| 6 | `x-cas-iscas` | [CAS Institute of Software](https://iscas.ac.cn) | CN | university | D,E | International collaborations with European universities reported. | D |
| 7 | `x-suse` | [SUSE](https://www.suse.com) | DE | company | D,E | China offices (reported). | C |
| 8 | `x-sdc` | [Sino-German Center for Research Promotion](https://www.sdc.org.cn) | DE | funder | F,A | Joint DFG-NSFC institution. | D |
| 9 | `x-fraunhofer` | [Fraunhofer-Gesellschaft](https://www.fraunhofer.de) | DE | university | A,D,E | Fraunhofer Representative Office China. | C |
| 10 | `x-eclipse` | [Eclipse Foundation](https://www.eclipse.org) | EU | foundation | A,C,D | Chinese member companies; collaboration with OpenAtom reported (to verify). | C |
| 11 | `x-ow2` | [OW2 Community](https://www.ow2.org) | EU | foundation | C,D | Has had Chinese member organisations (to verify). | C |
| 12 | `x-chaoss` | [CHAOSS](https://chaoss.community) | INTL | community | A,E | Chinese contributors to metrics work (reported). | D |
| 13 | `x-kernel` | [Linux kernel community](https://www.kernel.org) | INTL | community | D,E | Top contributors from both sides (reported). | C |
| 14 | `x-apache` | [The Apache Software Foundation](https://www.apache.org) | INTL | foundation | C,D,E | Many Chinese committers/PMC members in projects such as Doris, Pulsar, ShardingSphere (reported, to verify). | C |
| 15 | `x-cncf` | [Cloud Native Computing Foundation](https://www.cncf.io) | INTL | foundation | C,D,E | KubeCon + CloudNativeCon China events (reported). | C |
| 16 | `x-linuxfoundation` | [The Linux Foundation](https://www.linuxfoundation.org) | INTL | foundation | A,C,D,E | Operates Linux Foundation Europe and an Asia-Pacific/China presence; EU and Chinese companies share its proje… | D |
| 17 | `x-openssf` | [Open Source Security Foundation (OpenSSF)](https://openssf.org) | INTL | foundation | B,E | Members include EU and Chinese companies (to verify against member list). | C |
| 18 | `x-openchain` | [OpenChain Project](https://openchainproject.org) | INTL | standards | B,E | OpenChain China Work Group (reported). | C |
| 19 | `x-riscv-intl` | [RISC-V International](https://riscv.org) | INTL | standards | A,B,D | Headquartered in Switzerland; strong Chinese membership (reported). | C |
| 20 | `x-w3c` | [World Wide Web Consortium (W3C)](https://www.w3.org) | INTL | standards | A,B | Hosts in China (Beihang) and Europe (ERCIM). | C |
| 21 | `x-cern` | [CERN](https://home.cern) | INTL | university | A,B | Chinese institutes participate in CERN experiments (reported). | C |
| 22 | `hk-isoc` | [Internet Society Hong Kong chapter](https://www.isoc.hk) | CN | community | B,C | Inference (analyst judgement, not yet validated): Neutral community chapter with governance interest. | A |
| 23 | `hk-opensource` | [Open Source Hong Kong](https://opensource.hk) | CN | community | C,E | Inference (analyst judgement, not yet validated): Direct fit: local open-source community and contact point. | A |
| 24 | `hk-pycon` | [PyCon HK](https://pycon.hk) | CN | community | C | Inference (analyst judgement, not yet validated): Developer community event with open-source contributors. | A |
| 25 | `ch-cern-ospo` | [CERN Open Source Program Office](https://ospo.web.cern.ch) | CH | OSPO | A,C | Inference from heuristic score 5: priority 1 in directory; OSPO fits the commons agenda; 1 listed open-source… | B |
| 26 | `cm-anolis` | [OpenAnolis (Dragon Lizard) community](https://openanolis.cn) | CN | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 27 | `cm-atomgit` | [AtomGit](https://atomgit.com) | CN | community | C,E | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 28 | `cm-deepin` | [deepin community / UnionTech](https://www.deepin.org) | CN | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 29 | `cm-modelscope` | [ModelScope](https://www.modelscope.cn) | CN | community | C,E | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 30 | `cn-baai` | [Beijing Academy of Artificial Intelligence (BAAI)](https://www.baai.ac.cn) | CN | university | A | Inference from heuristic score 5: priority 1 in directory; university fits the commons agenda; 2 listed open-… | B |
| 31 | `cn-bosc` | [Beijing Institute of Open Source Chip (BOSC)](https://www.bosc.ac.cn) | CN | university | A,B | Inference from heuristic score 5: priority 1 in directory; university fits the commons agenda; 1 listed open-… | B |
| 32 | `cn-shlab` | [Shanghai AI Laboratory](https://www.shlab.org.cn) | CN | university | A | Inference from heuristic score 5: priority 1 in directory; university fits the commons agenda; 3 listed open-… | B |
| 33 | `cz-nic` | [CZ.NIC](https://www.nic.cz) | CZ | foundation | C | Inference from heuristic score 5: priority 1 in directory; foundation fits the commons agenda; 1 listed open-… | B |
| 34 | `de-prototypefund` | [Prototype Fund](https://prototypefund.de) | DE | funder | F | Inference from heuristic score 5: priority 1 in directory; funder fits the commons agenda; 1 listed open-sour… | B |
| 35 | `dk-os2` | [OS2 - Public Digitalization Network](https://os2.eu) | DK | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 36 | `eu-eurostack` | [EuroStack initiative](https://eurostack.eu) | EU | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 37 | `eu-orcwg` | [Open Regulatory Compliance Working Group (Eclipse)](https://orcwg.org) | EU | foundation | C | Inference from heuristic score 5: priority 1 in directory; foundation fits the commons agenda; 1 listed open-… | B |
| 38 | `eu-ospo-zone` | [OSPO Alliance / OSPO.Zone](https://ospo.zone) | EU | OSPO | C | Inference from heuristic score 5: priority 1 in directory; OSPO fits the commons agenda; 1 listed open-source… | B |
| 39 | `eu-openfuture` | [Open Future Foundation](https://openfuture.eu) | EU | think-tank | A | Inference from heuristic score 5: priority 1 in directory; think-tank fits the commons agenda; 1 listed open-… | B |
| 40 | `fr-april` | [April](https://www.april.org) | FR | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 41 | `fr-softwareheritage` | [Software Heritage](https://www.softwareheritage.org) | FR | foundation | C | Inference from heuristic score 5: priority 1 in directory; foundation fits the commons agenda; 1 listed open-… | B |
| 42 | `nl-nlnet` | [NLnet Foundation](https://nlnet.nl) | NL | funder | F | Inference from heuristic score 5: priority 1 in directory; funder fits the commons agenda; 1 listed open-sour… | B |
| 43 | `nl-opensourcewerken` | [OSPO of the Dutch national government (Open Source Werken)](https://opensourcewerken.nl) | NL | OSPO | A,C | Inference from heuristic score 5: priority 1 in directory; OSPO fits the commons agenda; 1 listed open-source… | B |
| 44 | `x-kaiyuanshe` | [KAIYUANSHE](https://kaiyuanshe.cn) | CN | community | C,D | Inference (analyst judgement, not yet validated): Active community bridge. | C |
| 45 | `x-openeuler` | [openEuler](https://www.openeuler.org) | CN | community | D,E | Inference (analyst judgement, not yet validated): Distribution with international contributors. | C |
| 46 | `x-ospp` | [Open Source Promotion Plan (OSPP)](https://summer-ospp.ac.cn) | CN | community | C | Inference (analyst judgement, not yet validated): Easy pairing with EU mentoring. | C |
| 47 | `x-openatom` | [OpenAtom Foundation](https://www.openatom.org) | CN | foundation | A,C,D | Inference (analyst judgement, not yet validated): Natural counterpart for neutral hosting talks. | D |
| 48 | `x-caict` | [CAICT](https://www.caict.ac.cn) | CN | think-tank | A,B,D | Inference (analyst judgement, not yet validated): Core Chinese OSS policy research. | D |
| 49 | `x-spdx` | [SPDX](https://spdx.dev) | INTL | standards | B,E | Inference (analyst judgement, not yet validated): SBOM cooperation (B1/E4). | C |
| 50 | `cn-ccsa` | [China Communications Standards Association](https://www.ccsa.org.cn) | CN | standards | A | China Communications Standards Association (CCSA) (institution, EU-CN): Chinese telecom standards organisatio… | B |

## Gaps and caveats
- **Member-state coverage**: 30 country codes outside the EU level and China appear. The smallest states are represented mostly by government units and Wikimedia chapters, rarely by OSS foundations.
- **Chinese provinces and cities**: 104 Chinese public-agency records, mostly central, provincial and municipal economy/IT bodies from the directory. Only one provincial/city open-source association (Shanghai) was verified in this pass; searches for Zhejiang, Shenzhen and Chengdu open-source associations found policy documents but no association websites. This remains a gap.
- **Contacts**: most `institutional_contact` entries are homepages or contact pages found automatically; curated additions only have the homepage. A contact-page pass is needed before any outreach.
- **Evidence**: 407 records are evidence C/D. The 137 curated additions carry prior-knowledge claims about EU-China ties (`evidence: D` on each tie): leads to verify, not facts.
- **Value propositions** are generated from the directory's role description plus a per-type template of what the organisation gains; the top 50 deserve hand-written versions.
- **Likelihood** is a transparent heuristic, not a measurement of interest; no organisation has been contacted. Politically sensitive actors (telecom vendors, security agencies, state think tanks) are rated low for open collaboration on purpose.
- **Categories to search next**: national OSPOs in smaller member states, Chinese university open-source programme offices, Hong Kong foundations, universities and innovation bodies (in scope: as part of the Greater Bay Area together with Shenzhen, it shares a substantial and long-standing cross-fertilisation of research, talent, capital and open-source communities with mainland China, and often acts as a bridge to European partners. Macao is included for the same Greater Bay Area reason and for its established role as a platform between China and Portuguese-speaking countries, which gives Portugal and the Lusophone world a specific channel of cooperation.), member-state science councillors and China offices, EU RISC-V companies, Chinese open-source education bases.
- **Next step (G3/G4)**: validate the top 50 by hand with Chinese and European reviewers, then plan tailored, human-sent outreach per segment.
