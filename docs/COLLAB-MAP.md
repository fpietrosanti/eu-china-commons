# COLLABORATION MAP v1 (roadmap track G)

Source of truth: [../data/stakeholders/collab-map.json](../data/stakeholders/collab-map.json) (912 organisations, generated 2026-11-10 by `tools/build_collab_map.js`; this page by `tools/build_collab_doc.js`).

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
| CN | 263 |
| EU | 64 |
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
| SE | 17 |
| CZ | 15 |
| BE | 14 |
| DK | 14 |
| NO | 14 |
| AT | 13 |
| PT | 13 |
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
| public-agency | 212 |
| university | 170 |
| company | 118 |
| cooperation-body | 103 |
| community | 88 |
| industry-assoc | 88 |
| think-tank | 58 |
| foundation | 34 |
| standards | 22 |
| funder | 11 |
| OSPO | 8 |

### By likelihood (inference)
| likelihood | n |
|---|---|
| low | 606 |
| medium | 233 |
| high | 73 |

### By evidence level of the organisation record
| evidence | n |
|---|---|
| C | 382 |
| B | 349 |
| A | 161 |
| D | 20 |

### By track (an organisation can fit several)
| track | n |
|---|---|
| A | 501 |
| B | 61 |
| C | 333 |
| D | 204 |
| E | 95 |
| F | 98 |

### Group x likelihood
| group | high | medium | low |
|---|---|---|---|
| EU institutions | 11 | 24 | 29 |
| Member states / Europe (non-EU incl.) | 28 | 151 | 355 |
| CN | 23 | 37 | 203 |
| INTL | 11 | 21 | 19 |

Records with at least one documented tie to the other side: **227** of 912.

## Top 50 high-likelihood organisations
Ranked by heuristic score (ties and evidence as tie-breakers). Likelihood is an inference.

| # | id | organisation | side | type | tracks | basis (inference) | ev. |
|---|---|---|---|---|---|---|---|
| 1 | `cn-nsfc` | [National Natural Science Foundation of China](https://www.nsfc.gov.cn) | CN | funder | F | National Natural Science Foundation of China (NSFC) (institution, EU-CN): Chinese research funder with bilate… | B |
| 2 | `cn-sac` | [Standardization Administration of China](https://www.sac.gov.cn) | CN | standards | A | Standardization Administration of China (SAC) (institution, EU-CN): Chinese national standards authority, ISO… | B |
| 3 | `x-cas-iscas` | [CAS Institute of Software](https://iscas.ac.cn) | CN | university | D,E | International collaborations with European universities reported. | D |
| 4 | `x-suse` | [SUSE](https://www.suse.com) | DE | company | D,E | China offices (reported). | C |
| 5 | `x-sdc` | [Sino-German Center for Research Promotion](https://www.sdc.org.cn) | DE | funder | F,A | Joint DFG-NSFC institution. | D |
| 6 | `x-fraunhofer` | [Fraunhofer-Gesellschaft](https://www.fraunhofer.de) | DE | university | A,D,E | Fraunhofer Representative Office China. | C |
| 7 | `x-eclipse` | [Eclipse Foundation](https://www.eclipse.org) | EU | foundation | A,C,D | Chinese member companies; collaboration with OpenAtom reported (to verify). | C |
| 8 | `x-ow2` | [OW2 Community](https://www.ow2.org) | EU | foundation | C,D | Has had Chinese member organisations (to verify). | C |
| 9 | `x-chaoss` | [CHAOSS](https://chaoss.community) | INTL | community | A,E | Chinese contributors to metrics work (reported). | D |
| 10 | `x-kernel` | [Linux kernel community](https://www.kernel.org) | INTL | community | D,E | Top contributors from both sides (reported). | C |
| 11 | `x-apache` | [The Apache Software Foundation](https://www.apache.org) | INTL | foundation | C,D,E | Many Chinese committers/PMC members in projects such as Doris, Pulsar, ShardingSphere (reported, to verify). | C |
| 12 | `x-cncf` | [Cloud Native Computing Foundation](https://www.cncf.io) | INTL | foundation | C,D,E | KubeCon + CloudNativeCon China events (reported). | C |
| 13 | `x-linuxfoundation` | [The Linux Foundation](https://www.linuxfoundation.org) | INTL | foundation | A,C,D,E | Operates Linux Foundation Europe and an Asia-Pacific/China presence; EU and Chinese companies share its proje… | D |
| 14 | `x-openssf` | [Open Source Security Foundation (OpenSSF)](https://openssf.org) | INTL | foundation | B,E | Members include EU and Chinese companies (to verify against member list). | C |
| 15 | `x-openchain` | [OpenChain Project](https://openchainproject.org) | INTL | standards | B,E | OpenChain China Work Group (reported). | C |
| 16 | `x-riscv-intl` | [RISC-V International](https://riscv.org) | INTL | standards | A,B,D | Headquartered in Switzerland; strong Chinese membership (reported). | C |
| 17 | `x-w3c` | [World Wide Web Consortium (W3C)](https://www.w3.org) | INTL | standards | A,B | Hosts in China (Beihang) and Europe (ERCIM). | C |
| 18 | `x-cern` | [CERN](https://home.cern) | INTL | university | A,B | Chinese institutes participate in CERN experiments (reported). | C |
| 19 | `ch-cern-ospo` | [CERN Open Source Program Office](https://ospo.web.cern.ch) | CH | OSPO | A,C | Inference from heuristic score 5: priority 1 in directory; OSPO fits the commons agenda; 1 listed open-source… | B |
| 20 | `cm-anolis` | [OpenAnolis (Dragon Lizard) community](https://openanolis.cn) | CN | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 21 | `cm-atomgit` | [AtomGit](https://atomgit.com) | CN | community | C,E | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 22 | `cm-deepin` | [deepin community / UnionTech](https://www.deepin.org) | CN | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 23 | `cm-modelscope` | [ModelScope](https://www.modelscope.cn) | CN | community | C,E | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 24 | `cn-baai` | [Beijing Academy of Artificial Intelligence (BAAI)](https://www.baai.ac.cn) | CN | university | A | Inference from heuristic score 5: priority 1 in directory; university fits the commons agenda; 2 listed open-… | B |
| 25 | `cn-bosc` | [Beijing Institute of Open Source Chip (BOSC)](https://www.bosc.ac.cn) | CN | university | A,B | Inference from heuristic score 5: priority 1 in directory; university fits the commons agenda; 1 listed open-… | B |
| 26 | `cn-shlab` | [Shanghai AI Laboratory](https://www.shlab.org.cn) | CN | university | A | Inference from heuristic score 5: priority 1 in directory; university fits the commons agenda; 3 listed open-… | B |
| 27 | `cz-nic` | [CZ.NIC](https://www.nic.cz) | CZ | foundation | C | Inference from heuristic score 5: priority 1 in directory; foundation fits the commons agenda; 1 listed open-… | B |
| 28 | `de-prototypefund` | [Prototype Fund](https://prototypefund.de) | DE | funder | F | Inference from heuristic score 5: priority 1 in directory; funder fits the commons agenda; 1 listed open-sour… | B |
| 29 | `dk-os2` | [OS2 - Public Digitalization Network](https://os2.eu) | DK | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 30 | `eu-eurostack` | [EuroStack initiative](https://eurostack.eu) | EU | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 31 | `eu-orcwg` | [Open Regulatory Compliance Working Group (Eclipse)](https://orcwg.org) | EU | foundation | C | Inference from heuristic score 5: priority 1 in directory; foundation fits the commons agenda; 1 listed open-… | B |
| 32 | `eu-ospo-zone` | [OSPO Alliance / OSPO.Zone](https://ospo.zone) | EU | OSPO | C | Inference from heuristic score 5: priority 1 in directory; OSPO fits the commons agenda; 1 listed open-source… | B |
| 33 | `eu-openfuture` | [Open Future Foundation](https://openfuture.eu) | EU | think-tank | A | Inference from heuristic score 5: priority 1 in directory; think-tank fits the commons agenda; 1 listed open-… | B |
| 34 | `fr-april` | [April](https://www.april.org) | FR | community | C | Inference from heuristic score 5: priority 1 in directory; community fits the commons agenda; 1 listed open-s… | B |
| 35 | `fr-softwareheritage` | [Software Heritage](https://www.softwareheritage.org) | FR | foundation | C | Inference from heuristic score 5: priority 1 in directory; foundation fits the commons agenda; 1 listed open-… | B |
| 36 | `nl-nlnet` | [NLnet Foundation](https://nlnet.nl) | NL | funder | F | Inference from heuristic score 5: priority 1 in directory; funder fits the commons agenda; 1 listed open-sour… | B |
| 37 | `nl-opensourcewerken` | [OSPO of the Dutch national government (Open Source Werken)](https://opensourcewerken.nl) | NL | OSPO | A,C | Inference from heuristic score 5: priority 1 in directory; OSPO fits the commons agenda; 1 listed open-source… | B |
| 38 | `x-kaiyuanshe` | [KAIYUANSHE](https://kaiyuanshe.cn) | CN | community | C,D | Inference (analyst judgement, not yet validated): Active community bridge. | C |
| 39 | `x-openeuler` | [openEuler](https://www.openeuler.org) | CN | community | D,E | Inference (analyst judgement, not yet validated): Distribution with international contributors. | C |
| 40 | `x-ospp` | [Open Source Promotion Plan (OSPP)](https://summer-ospp.ac.cn) | CN | community | C | Inference (analyst judgement, not yet validated): Easy pairing with EU mentoring. | C |
| 41 | `x-openatom` | [OpenAtom Foundation](https://www.openatom.org) | CN | foundation | A,C,D | Inference (analyst judgement, not yet validated): Natural counterpart for neutral hosting talks. | D |
| 42 | `x-caict` | [CAICT](https://www.caict.ac.cn) | CN | think-tank | A,B,D | Inference (analyst judgement, not yet validated): Core Chinese OSS policy research. | D |
| 43 | `x-spdx` | [SPDX](https://spdx.dev) | INTL | standards | B,E | Inference (analyst judgement, not yet validated): SBOM cooperation (B1/E4). | C |
| 44 | `cn-ccsa` | [China Communications Standards Association](https://www.ccsa.org.cn) | CN | standards | A | China Communications Standards Association (CCSA) (institution, EU-CN): Chinese telecom standards organisatio… | B |
| 45 | `eu-digitaleurope` | [DigitalEurope](https://www.digitaleurope.org) | EU | industry-assoc | A,B,D | DIGITALEUROPE (chamber, EU-CN): Brussels trade association for the European digital industry; follows EU-Chin… | B |
| 46 | `nl-clingendael` | [Clingendael](https://www.clingendael.org) | NL | think-tank | A | Clingendael China Centre (think-tank, NL-CN): Dutch think tank China-focused research programme. | B |
| 47 | `de-dgap` | [DGAP](https://dgap.org) | DE | think-tank | A | DGAP (German Council on Foreign Relations) (think-tank, DE-CN): Berlin think tank with a China-focused resear… | C |
| 48 | `de-swp` | [SWP (German Institute for International and Security Affairs)](https://www.swp-berlin.org) | DE | think-tank | A,B | SWP - German Institute for International and Security Affairs, China research (think-tank, DE-CN): Berlin thi… | C |
| 49 | `es-elcano` | [Real Instituto Elcano](https://www.realinstitutoelcano.org) | ES | think-tank | A | Real Instituto Elcano - Asia programme (think-tank, ES-CN): Spanish think tank with a China-focused research … | C |
| 50 | `fr-ifri` | [Ifri](https://www.ifri.org) | FR | think-tank | A | IFRI Centre for Asian Studies (think-tank, FR-CN): Think tank with China-focused research. | C |

## Gaps and caveats
- **Member-state coverage**: 30 country codes outside the EU level and China appear. The smallest states are represented mostly by government units and Wikimedia chapters, rarely by OSS foundations.
- **Chinese provinces and cities**: 89 Chinese public-agency records, mostly central, provincial and municipal economy/IT bodies from the directory. Only one provincial/city open-source association (Shanghai) was verified in this pass; searches for Zhejiang, Shenzhen and Chengdu open-source associations found policy documents but no association websites. This remains a gap.
- **Contacts**: most `institutional_contact` entries are homepages or contact pages found automatically; curated additions only have the homepage. A contact-page pass is needed before any outreach.
- **Evidence**: 402 records are evidence C/D. The 82 curated additions carry prior-knowledge claims about EU-China ties (`evidence: D` on each tie): leads to verify, not facts.
- **Value propositions** are generated from the directory's role description plus a per-type template of what the organisation gains; the top 50 deserve hand-written versions.
- **Likelihood** is a transparent heuristic, not a measurement of interest; no organisation has been contacted. Politically sensitive actors (telecom vendors, security agencies, state think tanks) are rated low for open collaboration on purpose.
- **Categories to search next**: national OSPOs in smaller member states, Chinese university open-source programme offices, Hong Kong foundations, universities and innovation bodies (in scope: as part of the Greater Bay Area together with Shenzhen, it shares a substantial and long-standing cross-fertilisation of research, talent, capital and open-source communities with mainland China, and often acts as a bridge to European partners. Macao is included for the same Greater Bay Area reason and for its established role as a platform between China and Portuguese-speaking countries, which gives Portugal and the Lusophone world a specific channel of cooperation.), member-state science councillors and China offices, EU RISC-V companies, Chinese open-source education bases.
- **Next step (G3/G4)**: validate the top 50 by hand with Chinese and European reviewers, then plan tailored, human-sent outreach per segment.
