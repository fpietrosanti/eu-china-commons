# ChatGPT (Plus, web search) — 2 Nov 2026 — existing EU–China open-source bridges
Chat: https://chatgpt.com/c/6ae872db-a750-83ed-8a02-c25d70053255 (EN prompt; long answer ~36k chars, then compressed list on request)
ChatGPT ranking (unverified): 1 Eclipse–OpenAtom Oniro/OpenHarmony (yes); 2 Eclipse–OpenAtom EPL-2.0 Chinese translation, Dec 2024 (in long answer); 3 OpenChain–openEuler ISO/IEC 18974 (yes); 4 EU–China High-Level Digital Dialogue / ICT standards (yes); 5 Horizon Europe EU-CHINA-BRIDGE (yes); 6 LF Europe membership of Huawei/Alibaba Cloud (partial).
Its framing: prioritise shared rules (SBOM, licensing, compliance standards) over OS-level cooperation, which is the most politically exposed.

## Claude verification (server curl, 2 Nov 2026)
| # | Bridge | EU/global side | CN side | Verdict |
|---|---|---|---|---|
| 1 | Eclipse–OpenAtom "sister project" model (Oniro ↔ OpenHarmony) | projects.eclipse.org/projects/oniro.oniro4openharmony — 200, live project | openatom.org/journalism/detail/14taw6BXk2Pb — **26 Mar 2026** Eclipse VP Ecosystem visited OpenAtom; text describes OpenHarmony/Oniro "姐妹项目" with sync mechanism | **VERIFIED both sides (A)**; also shows cooperation continued after the Jun 2025 House letter |
| 3 | OpenChain ISO/IEC 18974 adopted by openEuler | openchainproject.org news 2024-06-06 — 200, title confirms | openEuler page given is the 24.03 LTS release news; OpenChain not found in the fetched text | **PARTIAL**: one joint primary source; CN-side page to be replaced |
| 4 | EU–China High-Level Digital Dialogue (2nd, Sep 2023) | digital-strategy.ec.europa.eu — 200 | eu.china-mission.gov.cn — 200; agenda incl. "信息通信技术和标准", AI, R&I, data flows; both sides note "互补性" | **VERIFIED channel both sides (A)**; open source not named on the agenda → an opening, not an existing OSS bridge |
| 5 | Horizon Europe EU-CHINA-BRIDGE (101137971) | CORDIS — 200 | Tsinghua page | **REJECTED**: industrial decarbonisation project, not open source |
| 6 | LF Europe / Huawei, Alibaba Cloud | landscape page | annual report | not checked (membership ≠ bilateral bridge) |
Lesson: ChatGPT marked #5 "yes" for an off-topic project → every LLM "verified" flag must be re-checked.
| 2 | Eclipse–OpenAtom joint Chinese translation of EPL-2.0 | eclipse.org/legal/epl-2.0 — no mention of the translation found | openatom.cn/journalism/detail/dwV4Ek3eszw1 — 2024 announcement "开放原子与Eclipse两基金会联合发布EPL-2.0许可证中译文", "双方认可" | **PARTIAL**: CN side A; EU-side Eclipse source still to find |

**Bridge tally (gate A needs ≥3 verified both sides): 2 verified (#1 Eclipse–OpenAtom sister projects; #4 High-Level Digital Dialogue as channel), 2 partial (#2 EPL translation, #3 OpenChain).**
