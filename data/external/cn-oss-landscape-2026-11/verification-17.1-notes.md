# 17.1 — Verification of EXT-REPORT-CN-OSS-LANDSCAPE §2 against archived primaries

*26 Nov 2026. Input: docs/EXT-REPORT-CN-OSS-LANDSCAPE.md §2 (plus the five 2026 items in §1.5). Archive: sources/archive/ (index.tsv), including the 24 Nov residential `*.res.*` files. No network fetches were made. Table: `17.1-verification.tsv` (70 rows; every quote was checked automatically against the archived text).*

## Counts

| verdict | rows | new level |
|---|---|---|
| confirmed | 15 | A |
| partly | 22 | 20 A, 2 B |
| not supported | 0 (but several "partly" rows contradict part of the claim; see below) | — |
| not archived | 33 | stays C |
| **total** | **70** | |

By branch:
- **R03:** 14 rows. 3 confirmed, 6 partly, 5 not archived.
- **R04:** 14 rows. 5 confirmed, 7 partly, 2 not archived.
- **Funding (R12–R15):** 7 rows. 2 confirmed, 1 partly, 4 not archived.
- **R11:** 11 rows. 1 confirmed, 3 partly, 7 not archived.
- **R06:** 14 rows. 2 confirmed, 5 partly, 7 not archived.
- **R05:** 10 rows. 2 confirmed, 8 not archived.

Of the 55 R17 primaries, roughly half are relevant to §2 and almost all of those support the report. The gaps are claims for which the report cites **no primary** (Windows 8 ban, 2016 pilots, Big Fund phases 2 and 3, Shenzhen Metro) or cites GitHub/landscape pages that we did not archive (all of R05).

### §1.5 "verify before reuse" items
- **Closed (A):**
  - DeepSeek-V4 family / V4-Flash on Ascend: two arXiv preprints, 2607.20145 and 2607.08215.
  - SLAI T-Rex (2607.20145).
  - Karmada graduation (CNCF, 7 Sep 2026).
  - CNITSEC Announcement No. 3/2026 (2026-09-20).
  - Southern Power Grid Digital 2026 interim report: "14 万余套", built on OpenHarmony and openEuler.
- **Still open:** the Schleswig-Holstein press release (not archived).

## Claims whose meaning changes on reading the primary

1. **Doc. 34/2025 ("domestic product").** The rule is *place of production plus component-cost share* for **goods**, with a 20% price deduction. "无形资产" (intangible assets) are excluded. It explicitly requires equal treatment of foreign-invested firms and forbids discrimination by investor nationality. Code origin and foreign upstreams are not criteria. Our question "does foundation-governed OSS with foreign upstreams qualify?" is therefore probably the wrong question for software. Check whether software is in scope at all, using the procurement catalogue.
2. **MoF category standards came first, not "then".** The OS procurement standard (财库〔2023〕34号) is dated Dec 2023, two years before Doc. 34/2025.
3. **CNITSEC is not a universal procurement gate.**
   - Guide V4.0 says the evaluation is voluntary and the results are "由企业和用户自主选择使用" (used at the discretion of firms and users).
   - The binding hook is per category. For example, the 2023 OS standard requires it for Party and government bodies at township level and above; other units may omit it.
   - Announcement 3/2026 lists CPUs, AI chips, printer chips, OSs and databases. It lists **no office suites**.
4. **14th FYP was not the "first" mention of open source.** The State Council Internet Plus guidance (国发〔2015〕40号), which the report cites and we archived, already calls for open-source communities and foundations. Safe wording: "first five-year plan outline to name open source".
5. **Shunyi tender** is a WPS office-suite site-licence renewal. It covers Windows-environment office software and 2,500 *Linux-environment office clients*. It includes no Windows OS licences and no Linux OS seats, so it is office-suite dual-platform evidence, not OS migration evidence.
6. **Beijing Tongren Hospital.** The HIS database and storage migration is confirmed (Oct 2023), but the source never says "domestic hardware". Drop it from substitution evidence unless another source supports it.
7. **China Merchants Bank.** The accelerators come from "three mainstream domestic vendors", so they are all domestic and not a domestic/imported mix.
8. **China Mobile Cloud 60 PB.** Kunpeng and BC-Linux/openEuler are confirmed. The article names "BC distributed block storage", **not Ceph**.
9. **RFC 8998** is Informational and on the Independent Submission stream. It is not an IETF-consensus standard, so "IETF as interoperability venue" overstates it.
10. **SAIC is in AGL (2019), not in Eclipse S-CORE.** The S-CORE member list (Nov 2025) has no SAIC. The report itself says only AGL; our §2 conflated the two.
11. **Dragonfly graduation.** The report's own cited URL is dated 2026-01-14, so "2025" is probably wrong (not archived).
12. **Beijing open-source measure.** It is 京经信发〔2025〕56号, dated 2025-12-24. "2026-05" is only the date it was republished in the gazette.
13. **Smaller corrections.**
    - Fujian: the notice gives RMB 56,800 and no seat count. The "~330 seats, one year" figure needs the tender file.
    - Big Fund phase 1: set-up is confirmed but the MoF notice gives no amount.
    - Curve and SuperEdge: both are confirmed archived, but no archival years are given.
    - AtomGit moves: openEuler is confirmed via flags on Gitee repos, with no date. OpenAtom says AtomGit and GitCode were merged on 2025-11-21, which blurs the report's AtomGit/GitCode split.
    - The cited NDRC 2023 compute-network URL returns 404.
    - Hegaoji rests only on a secondary source (B): the MOST archive holds the table of contents only.

## Primaries still needed (by priority)

**Chinese sites (need relay or residential IP):**
- MOST 2006 plan, full text, §IV 重大专项: the Hegaoji list. Also the Hegaoji project page with the funded firms.
- CCGP notice of May 2014 barring Windows 8. Any official source for the 2016 安全可靠 pilots.
- MIIT 《"十四五"软件和信息技术服务业发展规划》 (Nov 2021).
- State Council 《关于深入实施"人工智能+"行动的意见》 (gov.cn; confirm Aug 2025).
- NDRC 2023 compute-network guidance (the cited URL is dead; find a replacement).
- Big Fund phase 2 and 3 registration data (Qichacha/SAMR, or the shareholders' announcements).
- Fujian tender document (the seat count).
- Shenzhen Metro ticketing desktops (no source cited at all).
- T/CESA 1248-2023 text.
- e.huawei.com OpenHarmony factory case.
- OpenAtom pages for TobudOS, Linyaps and Tongsuo donations. CCF ODC page for Nightingale (the current archives are WAF challenge pages).
- openEuler/OpenHarmony AtomGit migration announcements (dates).
- Gitcode pages for Cangjie and CANN.

**Non-Chinese (fetchable with a single curl):**
- Schleswig-Holstein press release 251204.
- Federal Register 2019-10616.
- CentOS blog, Dec 2020.
- GCC 12 changes, Linux 5.19 (kernelnewbies), LLVM 16 release notes.
- Flink 1.9 release.
- CNCF Dragonfly graduation (2026-01-14).
- ASF HugeGraph TLP announcement.
- LKML/kernel commit on Russian-linked maintainers (Oct 2024).
- SMIC e00981.pdf.
- Alibaba FY2026 20-F.
- ISO catalogue entries for SM2/3/4 and ISO/IEC 5230.
- UCIe specs.
- SkyWater PDK status page.
- HF DeepSeek-V4-Flash card.

**R05 (all 8 open):** GitHub MAINTAINERS/CODEOWNERS and contributor stats for openbmc (meta-inspur), sonic-net, kata-containers, istio, go-gitea, wasm-micro-runtime, goharbor and apache/nuttx. R18's OpenDigger dump may answer the contributor-share questions without new fetches.

**Foundation counts** (27 Apache TLPs / 8 podlings / 28 CNCF / 6 graduated): cross-check against projects.apache.org and landscape.cncf.io, or the R18 OpenDigger data.

## Round 2 (26 Nov 2026): 14 non-Chinese primaries archived

The coordinator archived 14 non-Chinese primaries (index.tsv rows dated 2026-11-26). They cover 11 rows, which I updated in place in `17.1-verification.tsv`; the verbatim quote check passed on all 70 rows. No network fetches were made.

| verdict | Round 1 | Round 2 |
|---|---|---|
| confirmed | 15 | **18** (17 A, 1 A-v) |
| partly | 22 | **28** (25 A, 2 B, 1 C) |
| not supported | 0 | **1** |
| not archived | 33 | **23** |

Row changes:
- **→ confirmed:**
  - Schleswig-Holstein: "fast 80 Prozent" of workstations on LibreOffice, Open-Xchange for nearly 44,000 mailboxes, press release of 04.12.2025. Closes the last EXT §1.5 item.
  - LoongArch in GCC 12, Linux 5.19 and LLVM 16. In LLVM 16 the target was promoted from experimental to official.
  - Alibaba capex FY2024–26, from the FY2026 20-F (relay copy, so A-v): RMB 32,087 / 85,972 / 126,063 m.
- **→ partly:**
  - Entity List and CentOS: the events are confirmed (Huawei listing effective 2019-05-16). CentOS Linux 8 end of life was *end-2021*; 2020 is only the announcement. The causal thesis remains [I].
  - Dragonfly: graduation confirmed, but on **14 Jan 2026, not 2025**. Correct EXT §2.
  - HugeGraph: no "incubating" label anywhere, which fits TLP status, but there is no date.
  - SkyWater: SKY130 is confirmed open ("Experimental Preview"); the other PDKs and the negative claim are unchecked.
  - UCIe: the spec side is confirmed; T/CESA 1248-2023 is still missing.
  - SMIC: the 2024 annual report confirms the STAR listing (688981) but not the RMB 53.2 bn proceeds (level stays C).
- **→ not supported:** Harbor. The homepage says only "CNCF Graduated" and has nothing on VMware China.
- **Still not archived:** Flink 1.9. The archived file is a redirect stub; the target `flink.apache.org/2019/08/22/apache-flink-1.9.0-release-announcement/` is needed.

Additional primaries now needed:
- Flink 1.9 announcement (the redirect target above).
- SMIC 2020 STAR prospectus or listing announcement.
- ASF HugeGraph graduation announcement.
- VMware 2016 Harbor announcement.
- GF180 and IHP PDK pages.
