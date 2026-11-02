# Industrial open-source stacks: EU vs China

Scope decision of 2 Nov 2026: besides public-administration reuse, the observatory tracks how each side builds open-source stacks for its own industry. Records: `data/catalogue-verified.json`, category `industrial-stack` (10 EU, 10 CN). Evidence: A official primary, B reputable secondary, C press. Adoption figures are claims unless stated.

## Table by layer

| Layer | EU | China |
|---|---|---|
| OS | Eclipse Oniro (on OpenHarmony; Eclipse WG) [A] | openEuler (MulanPSL2; claim >16 m installs) [A]; OpenAnolis (Mulan PSL v2, Alibaba-led) [B]; OpenHarmony [B]; Kuanghong coal-mine OS [C] |
| Cloud | Sovereign Cloud Stack [A]; IPCEI-CIS, EUR 1.2 bn public cap [A] | (no dedicated record yet; openEuler/Anolis are the base layer) |
| Edge / IoT | IPCEI-CIS (edge-cloud continuum) [A] | OpenHarmony industrial use [B/C] |
| Automotive | Eclipse SDV / S-CORE [A] | (not yet covered) |
| Chips | DARE RISC-V, EuroHPC, EUR 120 m EU share [A]; RISE (global, LF) [B] | XiangShan (ICT-CAS/BOSC, Mulan PSL v2) [A] |
| AI models | OpenEuroLLM (Digital Europe) [A]; EuroLLM, Apache-2.0 [A] | DeepSeek-R1 (MIT) [A]; Qwen3 (Apache-2.0) [A]; PaddlePaddle (Apache-2.0) [A] |
| Code hosting / foundation | Eclipse Foundation (hosts several stacks above) | OpenAtom Foundation [A]; AtomGit [C] |
| Data spaces | Tractus-X / Catena-X [A]; Gaia-X [B] | (not yet covered) |

## Governance and funding pattern (fact)
- EU: foundations and associations (Eclipse, Linux Foundation, AISBL, e.V.) plus explicit public money (IPCEI-CIS, EuroHPC, Digital Europe Programme).
- China: OpenAtom Foundation as umbrella for OS projects; AI models and several OS distributions are company-led (Alibaba, Baidu, DeepSeek). Public funding is not documented in the sources read.
- Licences: EU stacks mostly Eclipse/Apache; Chinese OS and chip projects use Mulan PSL v2 (permissive, bilingual); Chinese models use MIT/Apache-2.0.

## Cross-participation (fact, sourced)
- Eclipse Oniro was established through collaboration of the Eclipse Foundation and OpenAtom and builds on OpenHarmony.
- Tractus-X lists a China community base; Catena-X's member logo wall includes CATL and Huawei (roles not described).
- EuroLLM supports Chinese as a language (no Chinese contributor documented).

## Complementarity / overlap
- Fact: both sides use RISC-V (DARE vs XiangShan) and both publish open-weight LLMs under permissive licences.
- Inference: overlap is strongest at the OS and RISC-V layers (shared base, different governance); complementarity at data spaces and automotive, where the EU leads with documented governance and China records are missing.
- Inference: Oniro is the existing institutional bridge; permissive licences on both sides (Apache, Mulan, MIT) make upstream code reuse legally low-friction.
- Proposal: add records for Chinese automotive/data-space/cloud stacks and for Gitee; use Oniro and Tractus-X China as case studies for the bridge-opportunity criterion; seek primary sources for the 16 m openEuler claim and for Kuanghong deployments (VPN queue).

## Gaps
Public funding for CN stacks undocumented; licences for several EU entries not stated on pages read; RISE and Gaia-X read only at homepage (B); MindSpore, openKylin (page 404), OpenCloudOS, Gitee, Linux Foundation Europe Open Wallet, Eclipse SDV member list not verified and not recorded.
