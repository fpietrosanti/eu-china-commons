# STAKEHOLDERS — outreach map

Source of truth: [../data/stakeholders.json](../data/stakeholders.json) (133 entries; 111 in the first draft, 22 added on 2 Nov 2026). Built from the audience map (METHODOLOGY Part II) plus the brief; **no invitations are sent**.

**Status: first draft, partly checked.** 15 of 133 entries are `verified: true` (official page fetched on 2026-11-02 and organisation name matched; fields `verified_source`, `verified_date`); all others remain `false`. Websites and contact pages come from prior knowledge and have not yet been checked entry by entry (`verified: false`). Entries marked "to confirm" (APELL, China Chamber to the EU) need identity checks. Run a link check before any outreach.

## Counts
| side | n |
|---|---|
| EU | 75 |
| CN | 52 |
| global | 6 |

| level | n |
|---|---|
| EU | 11 |
| diplomacy | 10 |
| member-state | 33 |
| region | 3 |
| CN-central | 9 |
| CN-provincial | 11 |
| foundation | 17 |
| community | 9 |
| media | 1 |
| company | 20 |
| academia | 9 |

Priority 1: 31, priority 2: 34, priority 3: 68.

## First wave (priority 1)
| id | name | level | country | lang |
|---|---|---|---|---|
| eu-cnect | DG CNECT (Commission, Communications Networks, Content and Technology) | EU | EU | EN |
| eu-digit-ospo | European Commission OSPO / DG DIGIT | EU | EU | EN |
| eu-interop | Interoperable Europe / OSOR | EU | EU | EN |
| eu-dcedic | Digital Commons EDIC (Director and Advisory Board) | EU | EU | EN |
| eu-ngi | Next Generation Internet (NGI) / NLnet | EU | EU | EN |
| ms-fr-dinum | DINUM (Interministerial Digital Directorate) | member-state | FR | FR/EN |
| ms-de-zendis | ZenDiS (Centre for Digital Sovereignty) | member-state | DE | EN/DE |
| ms-de-sta | Sovereign Tech Agency | member-state | DE | EN |
| ms-nl-minbzk | Dutch Ministry of Interior (Open Source Programme Office / Digital Government) | member-state | NL | EN/NL |
| ms-it-agid | AgID (Agency for Digital Italy) | member-state | IT | IT/EN |
| ms-it-dtd | Department for Digital Transformation | member-state | IT | IT/EN |
| reg-sh | Schleswig-Holstein (Digital Ministry) | region | DE-SH | DE/EN |
| reg-bcn | Barcelona City Council (Digital Commons) | region | ES-CT | EN |
| cn-miit | Ministry of Industry and Information Technology | CN-central | CN | ZH |
| cn-cesi | China Electronics Standardization Institute | CN-central | CN | ZH |
| cn-caict | China Academy of Information and Communications Technology | CN-central | CN | ZH |
| cn-sh | Shanghai Municipal Commission of Economy and Informatisation | CN-provincial | Shanghai | ZH |
| cn-gd | Guangdong Department of Industry and Information Technology | CN-provincial | Guangdong | ZH |
| fd-eclipse | Eclipse Foundation | foundation | EU (BE) | EN |
| fd-lfe | Linux Foundation Europe | foundation | EU | EN |
| fd-ofe | OpenForum Europe | foundation | EU | EN |
| cm-openatom | OpenAtom Foundation | foundation | CN | ZH/EN |
| cm-kaiyuanshe | KAIYUANSHE (Open Source Society of China) | community | CN | ZH/EN |
| cm-ccf-odc | CCF Open Source Development Committee | community | CN | ZH |
| cm-oschina | OSChina | media | CN | ZH |
| cm-gitee | Gitee and OSS-Compass | community | CN | ZH |
| co-bitergia | Bitergia | company | ES | EN |
| co-huawei | Huawei (open-source office) | company | CN | EN/ZH |
| ac-merics | MERICS | academia | DE | EN |
| ac-ofa | OpenForum Academy | academia | EU | EN |
| ac-xlab | ECNU X-lab (Open Source) | academia | CN | ZH/EN |

## Outreach notes
- **Need Chinese (ZH) materials:** 36 entries (CN-central, CN-provincial, CN communities, most CN companies). Use the ZH brief in official register for ministries, community register for KAIYUANSHE, OSChina, Gitee.
- **Need an intermediary (do not cold-contact):** Chinese ministries and provincial bureaus (MIIT, CAC, NDRC, MOST, MOFCOM, SASAC, provincial bureaus): go via KAIYUANSHE, CCF ODC, CAICT, ECNU X-lab, OpenAtom, or the EU Delegation / Chinese Mission. Chinese embassies and the mission: via EEAS or national contacts. Chinese state websites mostly list no generic email; contact_channel is the site's own contact or home page, to be completed by a trusted partner.
- **EU institutions:** official contact forms; for DC-EDIC and EDCOM go through DG CNECT and the Advisory Board secretariat.
- **Member states:** prefer OSPO or digital-agency generic channels; pair each with the matching provincial case ("Beijing <-> Netherlands"). All 27 member states are now covered (BG, HR, CY, GR, HU, IE, LV, LT, MT, RO, SK, SI added 2 Nov 2026; SI: the digital portfolio now sits in the Ministry of the Interior and Public Administration, to confirm).
- **Companies:** use corporate open-source offices, not sales contacts.

## GDPR and approvals
Only institutional channels (generic pages, forms, press offices) are stored. No personal emails, phone numbers, or private social accounts. Named office-holders may be added later only as role + name with a public source. **Every invitation requires Fabio's explicit approval before sending.**

## Link check (automated, 2 Nov 2026)
Home pages reached with HTTP 2xx/3xx: 39 of 111 (field `web_http` in the JSON). Failures are mostly timeouts or bot-blocking from a bulk check (code 0), plus a few 403/404/412 (eu-digit-ospo, eu-itre, ms-fi-dvv, cn-caict, cn-js). They are **not** proof the sites are wrong. Re-check from a normal browser, and from the server for the Chinese sites (see CN-VPN-QUEUE), before any outreach. Pages in contact_channel were not individually fetched.

## Link check (2026-11-02, from the EU server, no tokens)
214 URLs checked (tools/linkcheck.sh): **160 OK (200)**, 22 not found (404), 19 unreachable (timeout or geo-block), 9 blocked (403), 4 other. Failures are in data/stakeholders_linkcheck_fail.tsv. The 404s need the URL corrected; the timeouts on Chinese sites go to the China VPN queue. **A reachable URL does not mean the entry is verified:** organisation, role and contact channel still have to be checked before any outreach.

## Second pass (2026-11-02)
- **404 fixes:** 21 contact or home URLs corrected (EC DIGIT, EEAS, EU Delegation China, ENISA, CoR, ZenDiS, BMDS, Sovereign Tech, Digital Austria, Digst, DIGG, Schleswig-Holstein, LF Europe, TDF, Wikimedia Europe, OSChina, Element, XWiki, IONOS, OVHcloud, Bruegel, EU Chamber). Where no dedicated contact page was found the home page is used.
- **needs_vpn (10):** cn-cesi, cn-caict (412), cn-zj, cn-cq, cn-hn, cm-chance, cm-sh-osa, cm-copu, cn-sz, cn-hz. See CN-VPN-QUEUE.
- **403 kept (site exists, bot-blocked):** digital-strategy.ec.europa.eu, JRC, digital.gouv.lu, dvv.fi, Barcelona, FSFE, OSI; new entries ms-gr-mindigital, ms-lt-vssa, ms-mt-mita, ms-ie-ogcio, ms-bg-meu are likewise unverified because the check was blocked.
- **Unreachable, no fix found (field `link_note`):** apell.eu, cccceu.eu, digitalnicesko.gov.cz.
- **Cross-reference additions (from initiatives.json and catalogue-verified.json):** Federal Ministry of Defence DE, SPRIND, Danish Ministry of Digital Affairs, Spanish territorial ministry, Decidim Association, SAMR/SAC, Shenzhen, Hangzhou, Wuhan, China Mobile.
- **Verified (15):** ms-hr-mpudt, ms-cy-dmrid, ms-hu-dke, ms-lv-varam, ms-ro-adr, ms-sk-mirri, ms-si-mnzjt, ms-de-bmvg, fd-sprind, ms-dk-digmin, ms-es-mptfp, co-decidim, cn-samr, cn-wh, co-chinamobile. Verification = official home page returned 200 and contained the organisation's name; the contact page itself was not always fetched.
