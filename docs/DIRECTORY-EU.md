# DIRECTORY-EU - European organisations on open source, digital commons and sovereignty

Source of truth: [../data/directory/eu-orgs.json](../data/directory/eu-orgs.json) (442 new organisations, none duplicating the entries of [../data/stakeholders.json](../data/stakeholders.json) by website); additions to already-listed ids: [../data/directory/eu-orgs-enrich.json](../data/directory/eu-orgs-enrich.json). Accessed 2026-11-08. Nothing has been contacted; nothing committed.

**Method.** Entries compiled from prior knowledge plus targeted searches (notably the FLOSS PSO public-sector OSPO list, OpenForum Europe, Linux Foundation Europe and Open Future outputs). Every official website was then fetched automatically: `verified: true` means HTTP 2xx/3xx and the organisation's name keyword appears on the fetched page (385 of 442); entries with timeouts, bot walls (Cloudflare 403), expired certificates or no keyword match stay `verified: false`. Dead domains and 404s were removed. `contact_channel` is a contact/imprint page found on the organisation's own site, otherwise the homepage; no personal addresses are recorded.

**Evidence grade.** A = confirmed in a third-party list or the page documents the activity; B = organisation page fetched and relevance known from general knowledge; C = plausible national actor in the field, open source activity not individually documented. Many C entries are universities, cities, chambers and Wikimedia chapters included for coverage, and should be checked per entry before outreach.

**Caveat on projects and publications.** Only 32 projects and 5 publications are recorded so far, from known homepages or search results, not from a systematic crawl. This layer is the main gap of this first pass.

## Counts by country and type
| country | total | government | region-city | funder | foundation | community | association | company | academia | think-tank | standards | media | event |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EU-level (EU) | 37 | 4 | 0 | 1 | 3 | 2 | 9 | 0 | 1 | 7 | 2 | 4 | 4 |
| Germany (DE) | 43 | 6 | 0 | 3 | 0 | 5 | 3 | 12 | 4 | 3 | 1 | 2 | 4 |
| France (FR) | 46 | 9 | 5 | 0 | 1 | 4 | 6 | 10 | 2 | 2 | 1 | 2 | 4 |
| Italy (IT) | 40 | 4 | 7 | 0 | 0 | 8 | 3 | 5 | 5 | 3 | 1 | 2 | 2 |
| Spain (ES) | 21 | 2 | 5 | 0 | 0 | 3 | 2 | 1 | 3 | 2 | 1 | 0 | 2 |
| Netherlands (NL) | 28 | 9 | 0 | 1 | 3 | 2 | 2 | 3 | 4 | 2 | 1 | 0 | 1 |
| Belgium (BE) | 9 | 1 | 3 | 0 | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 0 | 0 |
| Luxembourg (LU) | 4 | 2 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| Austria (AT) | 10 | 1 | 2 | 0 | 0 | 1 | 1 | 2 | 2 | 0 | 0 | 0 | 1 |
| Switzerland (CH) | 21 | 4 | 3 | 0 | 0 | 4 | 2 | 2 | 4 | 0 | 2 | 0 | 0 |
| United Kingdom (UK) | 22 | 5 | 0 | 0 | 0 | 4 | 4 | 3 | 3 | 1 | 0 | 1 | 1 |
| Norway (NO) | 11 | 3 | 2 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |
| Ireland (IE) | 4 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 |
| Denmark (DK) | 10 | 1 | 2 | 0 | 0 | 1 | 3 | 1 | 2 | 0 | 0 | 0 | 0 |
| Sweden (SE) | 10 | 2 | 2 | 1 | 0 | 2 | 0 | 1 | 2 | 0 | 0 | 0 | 0 |
| Finland (FI) | 14 | 4 | 1 | 1 | 0 | 1 | 1 | 3 | 3 | 0 | 0 | 0 | 0 |
| Poland (PL) | 14 | 2 | 1 | 0 | 0 | 4 | 2 | 2 | 2 | 1 | 0 | 0 | 0 |
| Czechia (CZ) | 11 | 3 | 1 | 0 | 1 | 2 | 1 | 0 | 2 | 0 | 0 | 0 | 1 |
| Slovakia (SK) | 5 | 0 | 1 | 0 | 0 | 2 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| Hungary (HU) | 6 | 1 | 0 | 0 | 0 | 2 | 1 | 0 | 2 | 0 | 0 | 0 | 0 |
| Romania (RO) | 8 | 2 | 0 | 0 | 0 | 4 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| Bulgaria (BG) | 7 | 1 | 1 | 0 | 0 | 2 | 1 | 0 | 1 | 0 | 0 | 0 | 1 |
| Croatia (HR) | 5 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | 0 |
| Slovenia (SI) | 6 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 3 | 0 | 0 | 0 | 0 |
| Estonia (EE) | 8 | 2 | 1 | 0 | 0 | 0 | 1 | 2 | 2 | 0 | 0 | 0 | 0 |
| Latvia (LV) | 8 | 3 | 1 | 0 | 0 | 0 | 2 | 0 | 2 | 0 | 0 | 0 | 0 |
| Lithuania (LT) | 8 | 3 | 1 | 0 | 0 | 0 | 1 | 1 | 2 | 0 | 0 | 0 | 0 |
| Portugal (PT) | 9 | 1 | 1 | 0 | 0 | 3 | 1 | 0 | 3 | 0 | 0 | 0 | 0 |
| Greece (GR) | 10 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 5 | 0 | 0 | 0 | 1 |
| Cyprus (CY) | 4 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 0 | 0 |
| Malta (MT) | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |

Totals by type: government 80, region-city 44, funder 7, foundation 9, community 61, association 53, company 50, academia 74, think-tank 22, standards 9, media 11, event 22.
Evidence: A 10, B 168, C 264. Priority 1: 42.

## Coverage gaps
- **Thin countries (few real open-source actors found):** Cyprus, Malta, Latvia, Lithuania, Croatia, Slovenia, Slovakia, Hungary, Romania, Bulgaria. National digital ministries are already in stakeholders.json; national OSPOs, FOSS associations and regional bodies were not found with confidence, and many entries here are universities, cities and chambers rather than demonstrated open-source players.
- **Missing everywhere:** systematic project lists, publications (reports, slides) per organisation, regional governments (German Länder other than Schleswig-Holstein, French regions, most Spanish autonomous communities, most Italian regions) and SMEs. Next step: crawl the FLOSS PSO list, code.europa.eu, OSOR news and each organisation's publications page.
- **Not found as standalone organisations:** "Italia Open Source" (no official site identified by search; a national association of Italian open source companies appears to be forming, see it-noze). "Open Source Initiative EU": no separate OSI Europe entity found; OSI acts in Brussels through Open Technology Research with OFE and OKF (launched 30 Jan 2026), see eu-otr.
- **Unverified fetches** (bot walls, timeouts) cluster in the Baltics, Romania, Cyprus, Malta; re-check in a browser.
- **Name drift:** eu-eitdigital's site title now reads "28DIGITAL"; check for a rebrand before outreach.
- **Dropped as duplicates of stakeholders.json:** Schleswig-Holstein ministry (reg-sh) and Danish digital ministry (ms-dk-digmin); their additions are in the enrich file.

## Per-country listings
Format: name (type, priority, evidence) - role, website, projects and publications.

### EU-level (EU) - 37
- **EU OSPO Network (Interoperable Europe)** (government, P1, B) - Commission-supported network of national public OSPOs. <https://interoperable-europe.ec.europa.eu/collection/eu-ospo-network>
- **EuroStack initiative** (community, P1, B) - Industry/civil-society initiative for a European digital infrastructure stack, with open source as core component. <https://eurostack.eu> Project: [EuroStack open letter and roadmap](https://eurostack.eu).
- **FLOSS Public Sector Organisations Network** (association, P1, A) - Network of public-sector OSPOs launched by OSPO Alliance; maintains the list of public-sector OSPOs. <https://floss-pso.network> Project: [List of Public Sector OSPOs](https://floss-pso.network/public-sector-ospos/).
- **FOSDEM** (event, P1, A) - Annual free software developer conference, Brussels (volunteer-run, ULB). <https://fosdem.org> Project: [FOSDEM annual edition](https://fosdem.org).
- **Open Future Foundation** (think-tank, P1, B) - Berlin/Amsterdam think tank on digital commons; NGI Commons strategic agenda. <https://openfuture.eu> Project: [NGI Commons](https://openfuture.eu). Publication: [A Strategic Agenda for Digital Commons](https://openfuture.eu/wp-content/uploads/2025/11/251106_A_Strategic_Agenda_For_Digital_Commons.pdf). Publication: [From Public Investment to Public Value](https://openfuture.eu/wp-content/uploads/2025/09/250929_From_Public_Investment_to_Public_Value.pdf).
- **Open Regulatory Compliance Working Group (Eclipse)** (foundation, P1, B) - Eclipse Foundation working group on Cyber Resilience Act compliance for open source stewards. <https://orcwg.org> Project: [ORC WG CRA specifications](https://orcwg.org).
- **Open Technology Research (OTR)** (think-tank, P1, B, unverified) - OFE, OSI and OKF initiative launched Jan 2026 (research network and symposium). <https://openforumeurope.org/open-technology-research-officially-launches-to-strengthen-global-research-community/>
- **OSPO Alliance / OSPO.Zone** (foundation, P1, B) - Eclipse/OW2/OpenForum-led alliance promoting OSPOs in Europe; Good Governance Initiative (GGI). <https://ospo.zone> Project: [Good Governance Initiative handbook](https://ospo.zone/ggi/).
- **CEN and CENELEC** (standards, P2, B) - European standardisation bodies drafting harmonised standards for the Cyber Resilience Act. <https://www.cencenelec.eu>
- **CISPE (Cloud Infrastructure Services Providers in Europe)** (association, P2, B) - European cloud providers association; sovereignty and open cloud positions. <https://cispe.cloud>
- **COMMUNIA Association for the Public Domain** (association, P2, B) - Network on digital public domain and commons policy in Europe. <https://communia-association.org>
- **DigitalEurope** (association, P2, B) - Brussels industry association; positions on CRA, open source and digital sovereignty. <https://www.digitaleurope.org>
- **EclipseCon Europe** (event, P2, B, unverified) - Annual Eclipse Foundation conference in Ludwigsburg. <https://www.eclipsecon.org>
- **ETSI** (standards, P2, B) - European standards body (Sophia Antipolis) with open source group OSG (OSM, TeraFlowSDN). <https://www.etsi.org> Project: [ETSI Open Source Group](https://osg.etsi.org).
- **EU OS** (community, P2, C) - Community proposal for a Fedora-based EU-wide public-sector Linux distribution. <https://eu-os.eu>
- **European Data Protection Supervisor** (government, P2, B) - Runs EU Voice and EU Video (Mastodon, PeerTube) pilot; promotes free-software social media for EU institutions. <https://www.edps.europa.eu> Project: [EU Voice and EU Video pilot](https://www.edps.europa.eu/data-protection/our-work/subjects/social-media_en).
- **Gaia-X AISBL** (association, P2, B) - European data infrastructure and sovereign cloud association (Brussels). <https://gaia-x.eu> Project: [Gaia-X Trust Framework](https://gaia-x.eu/what-is-gaia-x/).
- **Linux Foundation Research (Europe)** (think-tank, P2, B) - Publishes World of Open Source Europe report 2025. <https://www.linuxfoundation.org/research> Publication: [World of Open Source Europe Report 2025](https://www.linuxfoundation.org/press/linux-foundation-europe-report-finds-open-source-drives-innovation-and-digital-sovereignty-but-strategic-maturity-gaps-persist).
- **Open Source Summit Europe** (event, P2, B) - Linux Foundation flagship European conference. <https://events.linuxfoundation.org/open-source-summit-europe/>
- **OpenForum Europe publications: Open Source for a Competitive, Sovereign Europe** (think-tank, P2, B, unverified) - OFE/Trust-IT reports: national open source policies and EU Sovereign Tech Fund roadmap. <https://openforumeurope.org/publications/progress-and-trends-in-the-national-open-source-policies-and-legal-frameworks/>
- **CEPS (Centre for European Policy Studies)** (think-tank, P3, C, unverified) - Brussels think tank; digital sovereignty research. <https://www.ceps.eu>
- **CloudFest** (event, P3, C) - Cloud and hosting industry event (Rust, DE). <https://www.cloudfest.com>
- **Council of European Professional Informatics Societies** (association, P3, C) - Federation of national informatics societies; digital skills and policy. <https://cepis.org>
- **ECIPE** (think-tank, P3, C) - Brussels think tank on trade and digital policy. <https://ecipe.org>
- **EIT Digital** (funder, P3, C, unverified) - Innovation network funding digital deep-tech and open source startups. <https://www.eitdigital.eu>
- **EOSC Association** (association, P3, B) - European Open Science Cloud governance; open science infrastructure. <https://eosc.eu>
- **Euractiv (Tech)** (media, P3, B, unverified) - EU policy news on open source and sovereignty. <https://www.euractiv.com>
- **EuroHPC Joint Undertaking** (government, P3, B) - Public HPC programme incl. open hardware (RISC-V) and open software stack. <https://eurohpc-ju.europa.eu>
- **European Digital Rights (EDRi)** (association, P3, B) - Digital rights network; engages on CRA, open source and public-money-public-code. <https://edri.org>
- **European Economic and Social Committee** (government, P3, C) - Advisory body issuing opinions on digital sovereignty and open source. <https://www.eesc.europa.eu>
- **Europeana Foundation** (foundation, P3, B) - Cultural heritage commons platform; open licensing. <https://www.europeana.eu>
- **International Data Spaces Association** (association, P3, B) - Data space reference architecture and open source components. <https://internationaldataspaces.org>
- **Jacques Delors Centre** (think-tank, P3, C) - Berlin think tank on EU digital sovereignty. <https://www.delorscentre.eu>
- **Linux Magazine** (media, P3, B) - Linux and open source news (DE/EN). <https://www.linux-magazine.com>
- **OpenAIRE** (academia, P3, B) - Open science infrastructure; open-access and open research software policy. <https://www.openaire.eu>
- **Tech.eu** (media, P3, B) - European tech news; covered World of Open Source Europe report. <https://tech.eu>
- **Techzine Europe** (media, P3, C, unverified) - European IT news. <https://www.techzine.eu>

### Germany (DE) - 43
- **Dataport AöR** (government, P1, B) - Public IT service provider of northern German states; open-source workplace (Phoenix). <https://www.dataport.de> Project: [Phoenix Arbeitsplatz](https://www.dataport.de).
- **openCoDE platform** (government, P1, B) - Federal open source code platform operated by ZenDiS. <https://opencode.de>
- **Prototype Fund** (funder, P1, B) - Funds open source civic tech prototypes (BMBF/OKF DE). <https://prototypefund.de> Project: [Prototype Fund project rounds](https://prototypefund.de/projects/).
- **Univention (UCS)** (company, P1, B) - Open source identity management; core of openDesk. <https://www.univention.com>
- **Bitkom** (association, P2, B) - German digital industry association; position papers on digital sovereignty and open source. <https://www.bitkom.org> Publication: [Bitkom positions on digital sovereignty](https://www.bitkom.org).
- **FAU Open Source Research Group** (academia, P2, B) - Academic research on inner source and open source (Dirk Riehle). <https://oss.cs.fau.de>
- **Federal Office for Information Security** (government, P2, B) - Cybersecurity authority; CRA market surveillance and open-source security guidance. <https://www.bsi.bund.de>
- **FITKO (Federal IT Cooperation)** (government, P2, B) - Coordinates federal-state IT; open source and interoperability. <https://www.fitko.de>
- **FOSS Backstage** (event, P2, B) - Berlin conference on open source management and OSPOs. <https://foss-backstage.de>
- **Fraunhofer FOKUS** (academia, P2, B) - Public-sector IT research; ÖFIT and open source. <https://www.fokus.fraunhofer.de>
- **Informationstechnikzentrum Bund (ITZBund)** (government, P2, C) - Federal IT service centre; sovereign workplace and cloud. <https://www.itzbund.de>
- **interface (formerly Stiftung Neue Verantwortung)** (think-tank, P2, C) - Think tank on tech policy; reports on open source and digital sovereignty. <https://www.interface-eu.org>
- **Open Knowledge Foundation Deutschland** (community, P2, B) - Civic tech and open data; hosts Prototype Fund. <https://okfn.de>
- **Open-Xchange** (company, P2, B) - Open source email/office for providers and governments. <https://www.open-xchange.com>
- **OpenTalk** (company, P2, B) - Open source video conferencing (Heinlein), part of openDesk. <https://opentalk.eu>
- **Sovereign Tech Fellowship** (funder, P2, B) - Sovereign Tech Agency programme paying maintainers. <https://www.sovereign.tech/programs/fellowship>
- **B1 Systems** (company, P3, C) - Linux and open source consultancy. <https://www.b1-systems.de>
- **Chaos Communication Congress** (event, P3, C) - Annual hacker congress. <https://events.ccc.de/congress/>
- **Chaos Computer Club** (community, P3, B) - Hacker community; Chaos Communication Congress; digital sovereignty statements. <https://www.ccc.de>
- **Chemnitzer Linux-Tage** (event, P3, C) - Annual German Linux event. <https://chemnitzer.linux-tage.de>
- **credativ** (company, P3, C) - Open source consultancy (PostgreSQL, Debian). <https://www.credativ.de>
- **DGAP** (think-tank, P3, C, unverified) - Foreign policy think tank; tech and sovereignty. <https://dgap.org>
- **Digitalcourage** (community, P3, C) - Digital rights and free-software advocacy. <https://digitalcourage.de>
- **DIN** (standards, P3, C) - German standards body; CRA harmonised standards. <https://www.din.de>
- **eco - Association of the Internet Industry** (association, P3, C) - Internet industry association, Cologne; sovereign cloud positions. <https://www.eco.de>
- **FrOSCon** (event, P3, C) - Free and Open Source Software Conference, Sankt Augustin. <https://froscon.org>
- **GovTech Campus Deutschland** (government, P3, C) - Public-sector tech community and open source projects. <https://govtechcampus.de>
- **Greenbone** (company, P3, C) - Open source vulnerability management. <https://www.greenbone.net>
- **Hasso Plattner Institute** (academia, P3, C) - Computer science institute; open source and cloud research. <https://hpi.de>
- **heise online** (media, P3, B) - Tech news; extensive coverage of public sector open source. <https://www.heise.de>
- **KDE e.V.** (community, P3, B) - Legal body of KDE community; Sovereign Tech Agency partner. <https://ev.kde.org>
- **Linutronix** (company, P3, C) - Linux kernel engineering; CRA and open source steward voice. <https://linutronix.de>
- **Linux Verband** (association, P3, C, unverified) - Association of Linux companies. <https://www.linuxverband.de>
- **mailbox.org** (company, P3, C) - Sovereign email service, Open-Xchange based. <https://mailbox.org>
- **netzpolitik.org** (media, P3, B) - Digital policy news. <https://netzpolitik.org>
- **OpenProject** (company, P3, B) - Open source project management used by openDesk. <https://www.openproject.org>
- **STACKIT (Schwarz Digits)** (company, P3, C) - Sovereign European cloud provider. <https://www.stackit.de>
- **Stiftung Mercator** (funder, P3, C) - Foundation funding digital sovereignty research. <https://www.stiftung-mercator.de>
- **SWP (German Institute for International and Security Affairs)** (think-tank, P3, C) - Research on digital sovereignty and tech geopolitics. <https://www.swp-berlin.org>
- **Tuta** (company, P3, B) - Open source encrypted email. <https://tuta.com>
- **Weizenbaum Institute** (academia, P3, B) - Research institute on digital society and sovereignty. <https://www.weizenbaum-institut.de>
- **Wikimedia Deutschland** (community, P3, B) - Chapter developing Wikibase and open knowledge infrastructure. <https://www.wikimedia.de>
- **Zammad** (company, P3, C) - Open source helpdesk used by public bodies. <https://zammad.com>

### France (FR) - 46
- **ADULLACT** (association, P1, B) - Association of local authorities pooling free software; runs Comptoir du Libre. <https://adullact.org> Project: [Comptoir du Libre](https://comptoir-du-libre.org).
- **April** (community, P1, B) - Association promoting free software; public sector advocacy. <https://www.april.org> Project: [Candidats.fr and Libre en Fête](https://www.april.org).
- **Conseil National du Logiciel Libre (CNLL)** (association, P1, B) - Federation of French open source companies. <https://cnll.fr>
- **Inria** (academia, P1, B) - National computing research institute; open source software policy, Software Heritage founder. <https://www.inria.fr>
- **Software Heritage** (foundation, P1, B) - Universal source code archive (Inria, UNESCO). <https://www.softwareheritage.org> Project: [Software Heritage Archive](https://archive.softwareheritage.org).
- **ANSSI (National Cybersecurity Agency)** (government, P2, B, unverified) - Cybersecurity authority; qualification of sovereign cloud (SecNumCloud), open source security guidance. <https://cyber.gouv.fr> Project: [SecNumCloud](https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud).
- **Cigref** (association, P2, B) - Network of large French IT users; sovereignty and open source positions. <https://www.cigref.fr>
- **City and Eurometropolis of Strasbourg (free software strategy)** (region-city, P2, A) - Municipal OSPO and free software strategy (2024). <https://www.strasbourg.eu/strategie-logiciels-libres>
- **City of Paris** (region-city, P2, B) - Open source city: Lutece platform, free software strategy. <https://www.paris.fr> Project: [Lutece platform](https://lutece.paris.fr).
- **Entr'ouvert** (company, P2, B) - Open source e-government platform vendor (Publik, Authentic). <https://www.entrouvert.com>
- **Framasoft** (community, P2, B) - Association offering free alternatives (PeerTube, Mobilizon). <https://framasoft.org> Project: [PeerTube](https://joinpeertube.org).
- **France Travail OSPO** (government, P2, B, unverified) - Public employment service OSPO (since 2024). <https://francetravail.io/opportunites-innovation/participer-initiatives-open-source>
- **Gendarmerie nationale (GendBuntu)** (government, P2, C, unverified) - Migrated ~80,000 desktops to Ubuntu (GendBuntu). <https://www.gendarmerie.interieur.gouv.fr>
- **IGN OSPO** (government, P2, A) - National mapping institute OSPO (since 2024). <https://www.ign.fr/institut/des-donnees-et-logiciels-ouverts-au-service-de-la-nation>
- **Linagora** (company, P2, B) - Open source software vendor (Twake, LinShare, OpenPaaS). <https://linagora.com> Project: [Twake Workplace](https://twake.app).
- **Mistral AI** (company, P2, B) - Open-weight AI models; European sovereignty reference. <https://mistral.ai>
- **National Agency for Territorial Cohesion** (government, P2, B) - Hosts La Suite territoriale and open source tools for local government. <https://agence-cohesion-territoires.gouv.fr>
- **Open Source Experience** (event, P2, C) - Paris open source business event. <https://www.opensource-experience.com>
- **OW2con** (event, P2, C) - OW2 annual conference (Paris). <https://www.ow2con.org>
- **Plan national pour la science ouverte** (government, P2, B) - National open science plan incl. open research software. <https://www.ouvrirlascience.fr>
- **Pôle de compétences Logiciels Libres de l'Éducation nationale** (government, P2, A) - Education ministry free software competence centre. <https://pcll.ac-dijon.fr>
- **AFNOR** (standards, P3, C) - French standards body. <https://www.afnor.org>
- **BlueMind** (company, P3, C) - Open source messaging used by French public bodies. <https://bluemind.net>
- **Capitole du Libre** (event, P3, C) - Toulouse free software event. <https://capitoledulibre.org>
- **Conseil national du numérique** (government, P3, C) - Advisory council on digital policy. <https://cnnumerique.fr>
- **Dalibo** (company, P3, C) - PostgreSQL experts. <https://www.dalibo.com>
- **Échirolles (digital culture and strategy directorate)** (region-city, P3, A) - Municipal OSPO-type unit (2021). <https://www.echirolles.fr/territoire-numerique>
- **French Senate** (government, P3, C) - Inquiry commission on public procurement and digital sovereignty. <https://www.senat.fr>
- **GLPI Project / Teclib** (company, P3, C) - Open source IT asset management. <https://glpi-project.org>
- **Grenoble Alpes Code and Data Unit** (academia, P3, A) - University research-software OSPO (2025). <https://scienceouverte.univ-grenoble-alpes.fr/a-propos/cellule-data-grenoble-alpes>
- **Hexatrust** (association, P3, C) - Cybersecurity and cloud trust SME association. <https://www.hexatrust.com>
- **Hugging Face** (company, P3, C) - Open ML hub with French roots. <https://huggingface.co>
- **Ifri** (think-tank, P3, C) - French think tank; digital geopolitics. <https://www.ifri.org>
- **Institut Montaigne** (think-tank, P3, C) - Think tank with reports on digital and sovereignty. <https://www.institutmontaigne.org>
- **La Quadrature du Net** (community, P3, B) - Digital rights advocacy. <https://www.laquadrature.net>
- **LinuxFr.org** (media, P3, B) - French free software news community. <https://linuxfr.org>
- **Montpellier Méditerranée Métropole** (region-city, P3, C) - Early adopter of free software in local government (ADULLACT member). <https://www.montpellier3m.fr>
- **Next (ex-Next INpact)** (media, P3, B) - Tech news covering sovereignty and public IT. <https://next.ink>
- **Numeum** (association, P3, C) - French digital industry association (ex-Syntec Numérique). <https://numeum.fr>
- **Qwant** (company, P3, C) - European search engine; Ecosia partner (EUSP). <https://www.qwant.com>
- **RECIA (Région Centre-Val de Loire IT cooperation)** (region-city, P3, A) - Regional public-sector IT cooperation using free software since 2003. <https://www.recia.fr>
- **Rencontres Mondiales du Logiciel Libre** (event, P3, C, unverified) - Annual free software event in France. <https://rmll.info>
- **Scaleway** (company, P3, C) - European cloud provider (Iliad). <https://www.scaleway.com>
- **Smile** (company, P3, C) - Open source integrator (OSS since 1991). <https://www.smile.eu>
- **Systematic Paris-Region** (association, P3, C) - Deep-tech cluster with open source working group. <https://www.systematic-paris-region.org>
- **YunoHost** (community, P3, C) - Self-hosting distribution. <https://yunohost.org>

### Italy (IT) - 40
- **Autonomous Province of Bolzano** (region-city, P1, B, unverified) - Migrated administration to LibreOffice; NOI Techpark and SFSCon. <https://www.provincia.bz.it>
- **Nexa Center for Internet and Society (Politecnico di Torino)** (academia, P1, B) - Academic centre on open source, digital commons and sovereignty. <https://nexa.polito.it>
- **PagoPA S.p.A.** (government, P1, B) - State company publishing IO app and payment platform as open source. <https://www.pagopa.it> Project: [IO app open source](https://github.com/pagopa/io-app).
- **Consip** (government, P2, B) - National central purchasing body; framework agreements for cloud and open source. <https://www.consip.it>
- **Dyne.org** (company, P2, B) - Software commons foundation (Zenroom, Interfacer). <https://www.dyne.org>
- **Hermes Center for Transparency and Digital Human Rights** (community, P2, B) - Italian NGO developing GlobaLeaks and open source privacy tools. <https://www.hermescenter.org>
- **LibreItalia** (community, P2, B) - Italian LibreOffice community; public administration migrations. <https://www.libreitalia.org>
- **MERGE-it** (event, P2, C) - Italian FOSS community conference. <https://merge-it.net>
- **National Cybersecurity Agency** (government, P2, B) - Cybersecurity authority and cloud qualification. <https://www.acn.gov.it>
- **Nethesis** (company, P2, B, unverified) - Open source ICT company (NethServer, Nethesis). <https://www.nethesis.it>
- **NOI Techpark (Free Software Lab)** (region-city, P2, B) - South Tyrol tech park; Open Data Hub and Free Software Lab. <https://noi.bz.it> Project: [Open Data Hub](https://opendatahub.com).
- **noze** (company, P2, B) - Open source company organising Tuscan open source business meeting towards a national association. <https://www.noze.it>
- **Regione Emilia-Romagna** (region-city, P2, C) - Regional open source policy and Lepida. <https://www.regione.emilia-romagna.it>
- **South Tyrol Free Software Conference (SFSCon)** (event, P2, B) - Annual free software conference at NOI Techpark. <https://www.sfscon.it>
- **Agenda Digitale** (media, P3, B) - Italian digital policy media. <https://www.agendadigitale.eu>
- **Anitec-Assinform** (association, P3, C) - ICT industry association (Confindustria). <https://www.anitec-assinform.it>
- **Aruba** (company, P3, C) - Italian cloud/hosting provider. <https://www.aruba.it>
- **Assintel** (association, P3, C) - ICT companies association (Confcommercio). <https://www.assintel.it>
- **Associazione Software Libero (Assoli)** (community, P3, C) - Italian free software association. <https://www.softwarelibero.it>
- **City of Bologna** (region-city, P3, C) - Iperbole civic network; open source and commons regulation. <https://www.comune.bologna.it>
- **Copernicani** (community, P3, C) - Italian association on technology and rights. <https://copernicani.it>
- **CSI Piemonte** (region-city, P3, C) - Regional IT consortium publishing open source. <https://www.csipiemonte.it>
- **Fondazione Bruno Kessler** (academia, P3, C) - Research foundation (Trento) on open source and digital. <https://www.fbk.eu>
- **Fondazione Ugo Bordoni** (think-tank, P3, C) - Research foundation on communications. <https://www.fub.it>
- **GFOSS.it (Italian geospatial open source association)** (community, P3, B, unverified) - OSGeo Italian chapter. <https://www.gfoss.it>
- **Internet Society Italy Chapter** (association, P3, C) - Internet governance chapter. <https://www.isoc.it>
- **Istituto Affari Internazionali** (think-tank, P3, C) - Think tank covering digital sovereignty and EU-China. <https://www.iai.it>
- **Istituto per la Competitività (I-Com)** (think-tank, P3, C) - Think tank on digital and EU policy. <https://www.i-com.it>
- **Italian Linux Society** (community, P3, B) - Promotes free software; Linux Day. <https://www.ils.org> Project: [Linux Day](https://www.linuxday.it).
- **LazioCrea** (region-city, P3, C) - Regional ICT in-house company (Lazio). <https://www.laziocrea.it>
- **National Research Council** (academia, P3, C, unverified) - Research body with open science policy. <https://www.cnr.it>
- **Osservatori Digital Innovation, Politecnico di Milano** (academia, P3, C) - Research observatories on public-sector digital. <https://www.osservatori.net>
- **Politecnico di Torino** (academia, P3, C) - University with open source research. <https://www.polito.it>
- **Punto Informatico** (media, P3, C) - Italian tech news. <https://www.punto-informatico.it>
- **Seeweb** (company, P3, C) - Italian cloud provider, open source infrastructure. <https://www.seeweb.it>
- **Sogei** (government, P3, C) - Tax IT provider; open source adoption. <https://www.sogei.it>
- **Spaghetti Open Data** (community, P3, C, unverified) - Open data community. <https://www.spaghettiopendata.org>
- **Trentino Digitale** (region-city, P3, C) - Provincial ICT in-house company. <https://www.trentinodigitale.it>
- **UNI** (standards, P3, C) - Italian standards body. <https://www.uni.com>
- **Wikimedia Italia** (community, P3, B) - Wikimedia chapter. <https://www.wikimedia.it>

### Spain (ES) - 21
- **Centro Nacional de Referencia de Aplicación de las TIC (CTT)** (government, P1, B) - Spanish state software reuse repository (CTT) and PAe portal. <https://administracionelectronica.gob.es>
- **Barcelona Supercomputing Center** (academia, P2, B, unverified) - Open hardware (RISC-V) and HPC software. <https://www.bsc.es>
- **Generalitat de Catalunya** (region-city, P2, C) - Open source and digital sovereignty policy. <https://web.gencat.cat>
- **Junta de Extremadura** (region-city, P2, B) - LinEx free software distribution pioneer. <https://www.juntaex.es>
- **Madrid City Council** (region-city, P2, B) - Decide Madrid / Consul Democracy open source. <https://www.madrid.es> Project: [Consul Democracy](https://consuldemocracy.org).
- **Asociación de Empresas de Software Libre (ASOLIF)** (association, P3, C, unverified) - Spanish open source companies association. <https://www.asolif.com>
- **Fundación CTIC** (community, P3, C) - Spanish centre for open technologies and standards. <https://www.fundacionctic.org>
- **Gaia-X Hub Spain** (association, P3, C, unverified) - Spanish Gaia-X hub. <https://gaiax.es>
- **Generalitat Valenciana** (region-city, P3, C) - Regional open source (Lliurex). <https://www.gva.es>
- **Hispalinux** (community, P3, C) - Spanish Linux users association. <https://hispalinux.es>
- **Hispasec** (company, P3, C) - Spanish security firm. <https://www.hispasec.com>
- **Junta de Andalucía** (region-city, P3, C) - Guadalinex and open source regional policy. <https://www.juntadeandalucia.es>
- **National Cryptologic Centre (CCN)** (government, P3, C) - Cybersecurity authority; Lorenzo open source tools. <https://www.ccn.cni.es>
- **Open Source Summit / OpenExpo Europe** (event, P3, C, unverified) - Madrid open source and digital event. <https://openexpoeurope.com>
- **OpenSouthCode** (event, P3, C) - Open source conference in Málaga. <https://www.opensouthcode.org>
- **Real Instituto Elcano** (think-tank, P3, C) - Spanish think tank on digital sovereignty. <https://www.realinstitutoelcano.org>
- **UNE** (standards, P3, C, unverified) - Spanish standards body. <https://www.une.org>
- **Universidad de Granada OSL** (academia, P3, C) - University open source office. <https://osl.ugr.es>
- **Universidad Rey Juan Carlos (GSyC/LibreSoft)** (academia, P3, C) - Academic open source research (LibreSoft). <https://www.urjc.es>
- **Wikimedia España** (community, P3, C) - Chapter. <https://wikimedia.es>
- **Xnet** (think-tank, P3, C) - Digital rights and commons advocacy. <https://xnet-x.net>

### Netherlands (NL) - 28
- **code.overheid.nl** (government, P1, B) - Dutch government code repository; policy of open by default. <https://code.overheid.nl>
- **Forum Standaardisatie / Logius** (government, P1, B) - Dutch open standards list (comply-or-explain) and open source guidance. <https://www.forumstandaardisatie.nl>
- **Government Digital Autonomy Programme (Rijksoverheid)** (government, P1, C) - Cabinet strategy for digital autonomy and cloud policy. <https://www.rijksoverheid.nl>
- **NLnet Foundation** (funder, P1, B) - Funds open internet projects; manages NGI Zero programmes for the Commission. <https://nlnet.nl> Project: [NGI Zero Commons Fund](https://nlnet.nl/commonsfund/).
- **OSPO of the Dutch national government (Open Source Werken)** (government, P1, B, unverified) - Dutch national OSPO at BZK (created March 2023); sovereign Forgejo-based code platform, MijnBureau office suite with DE/FR. <https://opensourcewerken.nl> Project: [MijnBureau (with DE/FR)](https://opensourcewerken.nl). Publication: [Presentation to EU OSPO Network (Forgejo platform)](https://interoperable-europe.ec.europa.eu/collection/eu-ospo-network).
- **VNG Realisatie** (association, P1, B) - Association of Dutch municipalities; Common Ground programme (open source municipal stack). <https://vng.nl> Project: [Common Ground](https://commonground.nl).
- **developer.overheid.nl** (government, P2, A) - Developer portal for Dutch government APIs and open source (OSPO list entry, 2019). <https://developer.overheid.nl>
- **ICTU** (government, P2, B) - Government IT foundation; NL Design System and open source. <https://www.ictu.nl>
- **Logius** (government, P2, B) - Government digital service provider (DigiD); open source components. <https://www.logius.nl>
- **NL Design System** (government, P2, B, unverified) - Shared open source design system for Dutch government. <https://nldesignsystem.nl> Project: [NL Design System](https://nldesignsystem.nl).
- **Bits of Freedom** (community, P3, B) - Digital rights NGO. <https://www.bitsoffreedom.nl>
- **Clingendael** (think-tank, P3, C, unverified) - Dutch think tank on tech geopolitics. <https://www.clingendael.org>
- **Dutch Cloud Community** (association, P3, C) - Dutch cloud providers; sovereignty. <https://dutchcloudcommunity.nl>
- **Fairphone** (company, P3, C) - Sustainable phone, open OS support. <https://www.fairphone.com>
- **Geonovum** (government, P3, C) - Geo-standards and open source (PDOK). <https://www.geonovum.nl>
- **iSHARE Foundation** (company, P3, C) - Trust framework for data sharing. <https://ishare.eu>
- **Kopano** (company, P3, C) - Open source collaboration (Dutch/German). <https://kopano.com>
- **KubeCon + CloudNativeCon Europe** (event, P3, C) - CNCF event (Amsterdam 2026). <https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/>
- **NEN** (standards, P3, C) - Dutch standards body. <https://www.nen.nl>
- **NLnet Labs** (foundation, P3, B) - Open source internet infrastructure software (Unbound, Routinator). <https://www.nlnetlabs.nl>
- **Radboud University (iHub)** (academia, P3, C) - Privacy and open source security research. <https://www.ru.nl>
- **Rathenau Institute** (think-tank, P3, C) - Science and technology policy think tank. <https://www.rathenau.nl>
- **SIDN Fonds** (foundation, P3, B) - Funds internet projects incl. open source. <https://www.sidnfonds.nl>
- **SURF** (foundation, P3, C) - Dutch research ICT cooperative; open source and sovereignty positions. <https://www.surf.nl>
- **TNO** (academia, P3, C) - Applied research; open source and data spaces. <https://www.tno.nl>
- **TU Delft Open Source Programme** (academia, P3, C) - University OSPO; research on open source. <https://www.tudelft.nl>
- **Vrije Universiteit Amsterdam** (academia, P3, C) - Research on open source ecosystems. <https://vu.nl>
- **Wikimedia Nederland** (community, P3, C) - Chapter. <https://www.wikimedia.nl>

### Belgium (BE) - 9
_Little found: only 9 entries beyond the national ministry already in stakeholders.json._
- **Digital Flanders (Agentschap Digitaal Vlaanderen)** (region-city, P2, C) - Flemish digital agency with open source projects. <https://www.vlaanderen.be/digitaal-vlaanderen>
- **Centre for Cybersecurity Belgium** (government, P3, B) - National cyber authority; CRA. <https://ccb.belgium.be>
- **Digital Wallonia (AdN)** (region-city, P3, C) - Walloon digital strategy and open source. <https://www.digitalwallonia.be>
- **EuroISPA** (association, P3, C) - European ISP association. <https://www.euroispa.org>
- **imec-SMIT / VUB** (academia, P3, C) - Research on digital policy. <https://smit.vub.ac.be>
- **Odoo** (company, P3, B) - Open source ERP (Belgium). <https://www.odoo.com>
- **Open Knowledge Belgium** (community, P3, B) - Open data and civic tech association. <https://openknowledge.be>
- **Paradigm / Brussels Region** (region-city, P3, C) - Brussels regional IT body. <https://paradigm.brussels>
- **Université libre de Bruxelles (FOSDEM host)** (academia, P3, C) - FOSDEM hosting university. <https://www.ulb.be>

### Luxembourg (LU) - 4
_Little found: only 4 entries beyond the national ministry already in stakeholders.json._
- **CIRCL** (government, P2, B) - CERT developing open source MISP, AIL. <https://www.circl.lu>
- **CTIE (State IT centre)** (government, P2, B) - State IT centre; open source solutions. <https://ctie.gouvernement.lu>
- **Luxembourg House of Cybersecurity (LHC)** (association, P2, B) - Cyber agency; open source tools (MISP, CIRCL). <https://www.lhc.lu> Project: [MISP threat sharing platform](https://www.misp-project.org).
- **University of Luxembourg SnT** (academia, P3, C, unverified) - Research centre. <https://wwwen.uni.lu/snt>

### Austria (AT) - 10
_Little found: only 10 entries beyond the national ministry already in stakeholders.json._
- **Austrian Federal Ministry - ELAK/Open source in BRZ** (government, P2, B) - Federal computing centre; open source based services. <https://www.brz.gv.at>
- **City of Vienna** (region-city, P2, C) - Wiener Linux (WIENUX) and open source strategy. <https://www.wien.gv.at>
- **Proxmox Server Solutions** (company, P2, B) - Open source virtualisation (Vienna), alternative to VMware. <https://www.proxmox.com>
- **Austrian Federal Economic Chamber (WKO)** (association, P3, C) - Business chamber. <https://www.wko.at>
- **City of Graz** (region-city, P3, C) - Municipal open source usage. <https://www.graz.at>
- **epicenter.works** (community, P3, B) - Digital rights; open source CRA advocacy. <https://epicenter.works>
- **Johannes Kepler University Linz** (academia, P3, C) - Open source research. <https://www.jku.at>
- **Linuxwochen** (event, P3, C) - Austrian Linux events. <https://linuxwochen.at>
- **SBA Research** (company, P3, C) - Security research. <https://www.sba-research.org>
- **TU Wien** (academia, P3, C) - University research. <https://www.tuwien.at>

### Switzerland (CH) - 21
- **CERN Open Source Program Office** (academia, P1, B) - OSPO at CERN; Open Hardware Licence and Zenodo. <https://ospo.web.cern.ch> Project: [CERN Open Hardware Licence](https://ohwr.org/project/cernohl/wikis/home).
- **CH Open** (association, P1, B, unverified) - Swiss open source association; Open Source Studie and Open Source Awards. <https://ch-open.ch>
- **Federal Office of Information Technology (BIT)** (government, P1, B) - Open source policy (EMBAG), publishes software on code.admin.ch. <https://www.bit.admin.ch> Project: [EMBAG federal law](https://www.fedlex.admin.ch).
- **Canton of Zurich - Open Source Strategy** (region-city, P2, C) - Cantonal open source tools. <https://www.zh.ch>
- **Digital Administration Switzerland** (government, P2, B) - Federal-cantonal coordination. <https://www.digitale-verwaltung-schweiz.ch>
- **opencode.ch** (government, P2, B, unverified) - Swiss public open source platform. <https://opencode.ch>
- **Parldigi** (community, P2, B) - Swiss parliamentary group on digital sustainability and open source. <https://parldigi.ch>
- **Bern University of Applied Sciences (Open Source Lab)** (academia, P3, C) - Open source research. <https://www.bfh.ch>
- **Camptocamp** (company, P3, B) - Open source geomatics and ERP. <https://camptocamp.com>
- **Canton of Bern** (region-city, P3, C) - Cantonal. <https://www.be.ch>
- **Digitale Gesellschaft Schweiz** (community, P3, C) - Swiss digital rights. <https://www.digitale-gesellschaft.ch>
- **Ecma International** (standards, P3, B) - Standards body (Geneva); ECMA-376 OOXML and JavaScript. <https://ecma-international.org>
- **EPFL Open Science Office** (academia, P3, C) - Open source and open science. <https://www.epfl.ch>
- **ETH Zurich** (academia, P3, C) - Research and Open Source Software publishing (e.g., Swiss cyber). <https://ethz.ch>
- **Geneva State** (region-city, P3, C) - Cantonal IT and open source. <https://www.ge.ch>
- **ITU** (standards, P3, C) - UN agency; Digital Public Goods. <https://www.itu.int>
- **Opendata.ch** (community, P3, B) - Open data community. <https://opendata.ch>
- **Proton** (company, P3, B) - Open source privacy email and VPN. <https://proton.me>
- **Swiss Data Alliance / Digitalswitzerland** (association, P3, C) - Digital cross-industry initiative. <https://digitalswitzerland.com>
- **swisstopo** (government, P3, C) - Open government data and open source geo. <https://www.swisstopo.admin.ch>
- **Wikimedia CH** (community, P3, C) - Chapter. <https://www.wikimedia.ch>

### United Kingdom (UK) - 22
- **Government Digital Service (GDS)** (government, P1, B) - Service Standard: code in the open; GOV.UK Design System. <https://www.gov.uk/government/organisations/government-digital-service> Project: [GOV.UK Design System](https://design-system.service.gov.uk).
- **OpenUK** (association, P1, B) - UK body for open technology; organises State of Open Con; State of Open reports. <https://openuk.uk>
- **State of Open Con** (event, P1, B) - Annual London open source conference (OpenUK). <https://stateofopencon.com>
- **Canonical** (company, P2, B) - Ubuntu publisher; public-sector Linux. <https://canonical.com>
- **Collabora Productivity (UK)** (company, P2, B) - Open source consultancy (Cambridge). <https://www.collabora.com>
- **Department for Science, Innovation and Technology** (government, P2, B) - Digital policy; open source in public sector. <https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology>
- **Local Digital (MHCLG)** (government, P2, B) - Local government digital and open standards (Local Digital Declaration). <https://localdigital.gov.uk>
- **National Cyber Security Centre** (government, P2, B) - Open source security guidance and open sourcing code. <https://www.ncsc.gov.uk>
- **Open Data Institute** (think-tank, P2, B) - Open data and data infrastructure think tank. <https://theodi.org>
- **Open Knowledge Foundation** (community, P2, B) - Global open data/knowledge NGO (UK registered). <https://okfn.org>
- **OpenStreetMap Foundation** (community, P2, B) - Foundation supporting OSM (UK). <https://osmfoundation.org>
- **Software Sustainability Institute** (academia, P2, B) - Research software sustainability. <https://www.software.ac.uk>
- **BCS The Chartered Institute for IT** (association, P3, C) - Professional body. <https://www.bcs.org>
- **NHS England Digital (open source)** (government, P3, C, unverified) - Open source policy for health IT. <https://www.england.nhs.uk>
- **Open Rights Group** (community, P3, B) - Digital rights. <https://www.openrightsgroup.org>
- **Public Digital** (company, P3, C) - Digital government consultancy; open standards and code. <https://public.digital>
- **techUK** (association, P3, C) - Industry association. <https://www.techuk.org>
- **The Alan Turing Institute (research software)** (academia, P3, C, unverified) - Research software engineering. <https://www.turing.ac.uk>
- **The Register** (media, P3, C) - Tech media with open source coverage. <https://www.theregister.com>
- **UK Open Source Consortium (LinuxUK)** (association, P3, C, unverified) - UK open source SMEs. <https://www.opensourceconsortium.org>
- **University of Edinburgh** (academia, P3, C) - Open source in research. <https://www.ed.ac.uk>
- **Wikimedia UK** (community, P3, C, unverified) - Chapter. <https://wikimedia.org.uk>

### Norway (NO) - 11
_Little found: only 11 entries beyond the national ministry already in stakeholders.json._
- **Norwegian Digitalisation Agency** (government, P1, B) - Open source policy, publishes on GitHub. <https://www.digdir.no>
- **DHIS2 (University of Oslo)** (foundation, P2, B) - Open source health platform, digital public good. <https://dhis2.org>
- **Bergen municipality** (region-city, P3, C) - Open source. <https://www.bergen.kommune.no>
- **IKT-Norge** (association, P3, C) - ICT industry association. <https://www.ikt-norge.no>
- **NAV Norwegian Labour and Welfare** (government, P3, C) - Open source by default. <https://www.nav.no>
- **Norwegian Consumer Council** (think-tank, P3, C) - Digital rights reports. <https://www.forbrukerradet.no>
- **NUUG** (community, P3, C) - Norwegian Unix User Group. <https://www.nuug.no>
- **Oslo municipality** (region-city, P3, C) - Open source. <https://www.oslo.kommune.no>
- **Statistics Norway** (government, P3, C) - Open source statistical tools. <https://www.ssb.no>
- **University of Oslo** (academia, P3, C) - Free software and DHIS2 origin. <https://www.uio.no>
- **Vivaldi / Opera** (company, P3, C) - Browser company. <https://vivaldi.com>

### Ireland (IE) - 4
_Little found: only 4 entries beyond the national ministry already in stakeholders.json._
- **Lero (Science Foundation Ireland Research Centre for Software)** (academia, P2, B) - Software research, open source. <https://lero.ie>
- **Dublin City Council** (region-city, P3, C) - Open data Dublinked. <https://www.dublincity.ie>
- **Trinity College Dublin** (academia, P3, C) - Research. <https://www.tcd.ie>
- **University College Dublin** (academia, P3, C) - Research. <https://www.ucd.ie>

### Denmark (DK) - 10
_Little found: only 10 entries beyond the national ministry already in stakeholders.json._
- **Agency for Digital Government (Denmark)** (government, P1, B) - Danish open source policy; Danish Digital Strategy. <https://digst.dk>
- **OS2 - Public Digitalization Network** (community, P1, B) - OS2 public-sector open source cooperation for Danish municipalities. <https://os2.eu> Project: [OS2 programme](https://os2.eu).
- **City of Copenhagen** (region-city, P2, C) - Moving from Microsoft to open source. <https://www.kk.dk>
- **Magenta ApS** (company, P2, B) - Open source public-sector vendor (OS2mo). <https://www.magenta.dk>
- **Aalborg University** (academia, P3, C) - Research. <https://www.aau.dk>
- **City of Aarhus** (region-city, P3, C) - Open source strategy. <https://www.aarhus.dk>
- **IT Branchen** (association, P3, C) - Industry association. <https://itb.dk>
- **IT University of Copenhagen** (academia, P3, C) - Research on open source. <https://en.itu.dk>
- **KL (Local Government Denmark)** (association, P3, C) - Municipal association; digital sovereignty. <https://www.kl.dk>
- **PROSA** (association, P3, C) - IT professionals' union. <https://prosa.dk>

### Sweden (SE) - 10
_Little found: only 10 entries beyond the national ministry already in stakeholders.json._
- **Swedish Agency for Digital Administration (Digg)** (government, P1, B) - Open source and Swedish public code programme. <https://www.digg.se>
- **Open Source Sweden** (community, P2, C) - Swedish open source ecosystem association. <https://www.opensource.se>
- **The Swedish Internet Foundation** (funder, P2, B) - Funder of open internet projects. <https://internetstiftelsen.se>
- **City of Gothenburg** (region-city, P3, C) - Open source. <https://goteborg.se>
- **City of Stockholm** (region-city, P3, C) - Open source. <https://start.stockholm>
- **KTH Royal Institute of Technology** (academia, P3, C) - Open source research. <https://www.kth.se>
- **Mullvad VPN** (company, P3, C) - Open source VPN. <https://mullvad.net>
- **RISE Research Institutes of Sweden** (academia, P3, C, unverified) - Research on open source. <https://www.ri.se>
- **Swedish Agency for Public Procurement** (government, P3, C) - Procurement guidance for open source. <https://www.upphandlingsmyndigheten.se>
- **Wikimedia Sverige** (community, P3, C) - Chapter. <https://se.wikimedia.org>

### Finland (FI) - 14
- **Digital and Population Data Services Agency** (government, P1, B) - Finnish public sector open source; Suomi.fi. <https://dvv.fi>
- **City of Helsinki** (region-city, P2, C) - Open source city. <https://www.hel.fi>
- **COSS - Finnish Centre for Open Systems and Solutions** (association, P2, B) - Finnish open source association. <https://www.coss.fi>
- **Finnish Ministry of Finance (Digital)** (government, P2, B) - Digital policy. <https://vm.fi>
- **Gofore** (company, P2, C) - Public sector open source. <https://gofore.com>
- **Sitra** (funder, P2, B) - Innovation fund; data economy and open source. <https://www.sitra.fi>
- **Aalto University** (academia, P3, C) - Open source research. <https://www.aalto.fi>
- **Eficode** (company, P3, C) - DevOps. <https://www.eficode.com>
- **Kela** (government, P3, C) - Open source. <https://www.kela.fi>
- **Tampere University** (academia, P3, C) - Research. <https://www.tuni.fi>
- **The Qt Company** (company, P3, B) - Qt framework. <https://www.qt.io>
- **Traficom** (government, P3, B) - Cybersecurity regulator. <https://www.traficom.fi>
- **University of Oulu** (academia, P3, C) - Research. <https://www.oulu.fi>
- **Wikimedia Suomi** (community, P3, C) - Chapter. <https://wikimedia.fi>

### Poland (PL) - 14
- **Centralny Ośrodek Informatyki (COI)** (government, P2, B) - Polish government IT centre; open source and sovereign cloud. <https://www.coi.gov.pl>
- **Centrum Cyfrowe** (think-tank, P2, B) - Think tank on digital commons and education. <https://centrumcyfrowe.pl>
- **Foundation for Free and Open Source Software (FWiOO)** (community, P2, B) - Polish FOSS advocacy foundation. <https://fwioo.pl>
- **NASK National Research Institute** (government, P2, B) - Research institute and CERT Polska; open source security tools. <https://www.nask.pl>
- **Allegro Tech** (company, P3, C) - Open source contributions. <https://allegro.tech>
- **City of Warsaw** (region-city, P3, C, unverified) - Open data and open source. <https://um.warszawa.pl>
- **Digital Poland Foundation** (association, P3, C) - Digital policy and cloud association. <https://digitalpoland.org>
- **ePaństwo Foundation** (community, P3, B, unverified) - Civic tech and open data. <https://epf.org.pl>
- **ICM University of Warsaw** (academia, P3, C) - Interdisciplinary centre for computational modelling; open science. <https://icm.edu.pl>
- **Linux Polska** (company, P3, C) - Open source integrator. <https://linuxpolska.com>
- **Panoptykon Foundation** (community, P3, B) - Digital rights. <https://panoptykon.org>
- **Polish Chamber of Information Technology and Telecommunications (PIIT)** (association, P3, C) - Industry chamber. <https://piit.org.pl>
- **Warsaw University of Technology** (academia, P3, C) - Research. <https://www.pw.edu.pl>
- **Wikimedia Polska** (community, P3, C) - Chapter. <https://wikimedia.pl>

### Czechia (CZ) - 11
_Little found: only 11 entries beyond the national ministry already in stakeholders.json._
- **CZ.NIC** (foundation, P1, B) - Domain registry developing Knot DNS, BIRD, Turris open source/hardware. <https://www.nic.cz> Project: [Turris open hardware](https://www.turris.com).
- **Digital and Information Agency (DIA)** (government, P1, B) - Czech digital agency; open source and public code. <https://www.dia.gov.cz>
- **OpenAlt** (event, P2, B, unverified) - Brno open source conference. <https://www.openalt.cz>
- **Czech Linux User Group (CZLUG)** (community, P3, C, unverified) - Linux user community. <https://www.linux.cz>
- **Czech Technical University FIT** (academia, P3, C) - University research. <https://fit.cvut.cz>
- **Masaryk University** (academia, P3, C) - Open source research. <https://www.muni.cz>
- **NAKIT** (government, P3, C) - Government IT agency. <https://nakit.cz>
- **National Cyber and Information Security Agency** (government, P3, C) - Cyber authority. <https://nukib.gov.cz>
- **Prague ICT Operator** (region-city, P3, C) - City of Prague IT; open source and data. <https://operatorict.cz>
- **SPIS (Czech ICT Alliance)** (association, P3, C) - ICT industry association. <https://www.spis.cz>
- **Wikimedia Česká republika** (community, P3, C) - Chapter. <https://www.wikimedia.cz>

### Slovakia (SK) - 5
_Little found: only 5 entries beyond the national ministry already in stakeholders.json._
- **Slovensko.Digital** (community, P1, B) - Civic tech initiative building open source for public services. <https://slovensko.digital>
- **City of Bratislava** (region-city, P3, C) - Open data, open source. <https://bratislava.sk>
- **IT Association of Slovakia (ITAS)** (association, P3, C) - Industry association. <https://itas.sk>
- **Slovak University of Technology** (academia, P3, C) - University. <https://www.stuba.sk>
- **Wikimedia Slovakia** (community, P3, C) - Chapter. <https://wikimedia.sk>

### Hungary (HU) - 6
_Little found: only 6 entries beyond the national ministry already in stakeholders.json._
- **Budapest University of Technology** (academia, P3, C) - University. <https://www.bme.hu>
- **IVSZ Digital Association Hungary** (association, P3, C) - Industry association. <https://ivsz.hu>
- **K-Monitor** (community, P3, C) - Anti-corruption and open data. <https://k-monitor.hu>
- **NISZ National Infocommunications Service Company** (government, P3, C) - State IT service provider. <https://nisz.hu>
- **SZTAKI** (academia, P3, C) - Research institute with open source cloud and data. <https://www.sztaki.hu>
- **Wikimédia Magyarország** (community, P3, C) - Chapter. <https://wikimedia.hu>

### Romania (RO) - 8
_Little found: only 8 entries beyond the national ministry already in stakeholders.json._
- **Code for Romania** (community, P2, B) - Civic tech open source. <https://code4.ro>
- **ANIS** (association, P3, C, unverified) - Software and services association. <https://anis.ro>
- **ApTI (Association for Technology and Internet)** (community, P3, B, unverified) - Digital rights. <https://www.apti.ro>
- **Ministry of Research, Innovation and Digitalisation** (government, P3, C, unverified) - Digital policy. <https://www.mcid.gov.ro>
- **Politehnica University of Bucharest** (academia, P3, C) - Open source education, Linux kernel. <https://upb.ro>
- **Romanian National Cyber Security Directorate** (government, P3, B, unverified) - Cyber authority. <https://dnsc.ro>
- **ROSEdu** (community, P3, C, unverified) - Student open source community. <https://rosedu.org>
- **Wikimedia România** (community, P3, C) - Chapter. <https://wikimedia.ro>

### Bulgaria (BG) - 7
_Little found: only 7 entries beyond the national ministry already in stakeholders.json._
- **OpenFest** (event, P2, B) - Sofia open source conference. <https://www.openfest.org>
- **State e-Government Agency** (government, P2, B, unverified) - Bulgarian e-government; open source requirements in procurement law. <https://e-gov.bg>
- **Access to Information Programme** (community, P3, C) - Transparency NGO. <https://www.aip-bg.org>
- **BASSCOM** (association, P3, C) - Software companies association. <https://basscom.org>
- **Sofia Municipality** (region-city, P3, C) - Municipality. <https://www.sofia.bg>
- **Sofia University** (academia, P3, C) - University. <https://www.uni-sofia.bg>
- **Wikimedia Bulgaria** (community, P3, C) - Chapter. <https://wikimedia.bg>

### Croatia (HR) - 5
_Little found: only 5 entries beyond the national ministry already in stakeholders.json._
- **APIS IT** (government, P3, C) - Public IT service company. <https://www.apis-it.hr>
- **CARNET** (academia, P3, C) - Croatian academic network; open source. <https://www.carnet.hr>
- **City of Zagreb** (region-city, P3, C) - Municipality. <https://www.zagreb.hr>
- **FER University of Zagreb** (academia, P3, C) - University research. <https://www.fer.unizg.hr>
- **HULK (Croatian Linux User Group)** (community, P3, C) - Linux community. <https://www.linux.hr>

### Slovenia (SI) - 6
_Little found: only 6 entries beyond the national ministry already in stakeholders.json._
- **Ministry of Public Administration** (government, P2, C) - Public administration IT; open source. <https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-javno-upravo/>
- **ARNES** (academia, P3, C) - Academic research network; open source (Arnes Video, Jitsi). <https://www.arnes.si>
- **City of Ljubljana** (region-city, P3, C) - Municipality. <https://www.ljubljana.si>
- **Faculty of Computer and Information Science, Ljubljana** (academia, P3, C) - University. <https://www.fri.uni-lj.si>
- **Jožef Stefan Institute** (academia, P3, C) - Research institute. <https://www.ijs.si>
- **Kiberpipa / Zavod Kersnikova** (community, P3, C) - Hackerspace and community. <https://kiberpipa.org>

### Estonia (EE) - 8
_Little found: only 8 entries beyond the national ministry already in stakeholders.json._
- **Cybernetica** (company, P2, B) - Developer of X-Road, open source. <https://cyber.ee>
- **e-Estonia Briefing Centre** (government, P2, B) - Promotes Estonian digital state and X-Road. <https://e-estonia.com>
- **Ministry of Economic Affairs and Communications** (government, P2, C) - Digital state policy; open source. <https://www.mkm.ee>
- **City of Tallinn** (region-city, P3, C, unverified) - Municipality. <https://www.tallinn.ee>
- **Estonian Association of IT and Telecom (ITL)** (association, P3, C) - Industry association. <https://itl.ee>
- **Nortal** (company, P3, C) - Government IT systems integrator. <https://nortal.com>
- **TalTech** (academia, P3, C) - University; Ragnar Nurkse Department on e-gov. <https://taltech.ee>
- **University of Tartu** (academia, P3, C) - University. <https://ut.ee>

### Latvia (LV) - 8
_Little found: only 8 entries beyond the national ministry already in stakeholders.json._
- **Latvian Open Technology Association** (association, P2, B, unverified) - Open technology association. <https://lota.lv>
- **CERT.LV** (government, P3, B) - Cyber authority. <https://cert.lv>
- **LIKTA** (association, P3, C) - ICT association. <https://www.likta.lv>
- **LVRTC** (government, P3, C) - State radio and TV centre; government cloud. <https://www.lvrtc.lv>
- **Riga City Council** (region-city, P3, C) - Municipality. <https://www.riga.lv>
- **Riga Technical University** (academia, P3, C, unverified) - University. <https://www.rtu.lv>
- **State Regional Development Agency** (government, P3, C) - Government IT services. <https://www.vraa.gov.lv>
- **University of Latvia** (academia, P3, C) - University. <https://www.lu.lv>

### Lithuania (LT) - 8
_Little found: only 8 entries beyond the national ministry already in stakeholders.json._
- **City of Vilnius** (region-city, P3, C, unverified) - Municipality. <https://vilnius.lt>
- **Infobalt** (association, P3, C) - ICT association. <https://www.infobalt.lt>
- **Information Society Development Committee** (government, P3, C, unverified) - Open data and e-government. <https://ivpk.lrv.lt>
- **Kaunas University of Technology** (academia, P3, C) - University. <https://ktu.edu>
- **Ministry of Economy and Innovation** (government, P3, C, unverified) - Digital policy. <https://eimin.lrv.lt>
- **National Cyber Security Centre Lithuania** (government, P3, C, unverified) - Cyber authority. <https://www.nksc.lt>
- **Nord Security** (company, P3, C) - Cybersecurity company. <https://nordsecurity.com>
- **Vilnius University** (academia, P3, C) - University. <https://www.vu.lt>

### Portugal (PT) - 9
_Little found: only 9 entries beyond the national ministry already in stakeholders.json._
- **ANSOL** (community, P2, B) - Portuguese free software association. <https://ansol.org>
- **ESOP (Portuguese Open Source Companies Association)** (association, P2, B) - Open source companies association. <https://esop.pt>
- **Associação D3** (community, P3, B) - Digital rights. <https://direitosdigitais.pt>
- **FCT - FCCN** (academia, P3, C) - Research network; open source. <https://www.fccn.pt>
- **INESC TEC** (academia, P3, C) - Research institute. <https://www.inesctec.pt>
- **Instituto Superior Técnico** (academia, P3, C) - University. <https://tecnico.ulisboa.pt>
- **Lisbon City Council** (region-city, P3, C, unverified) - Municipality; open data. <https://www.lisboa.pt>
- **National Cybersecurity Centre** (government, P3, C, unverified) - Cyber authority. <https://www.cncs.gov.pt>
- **Wikimedia Portugal** (community, P3, C) - Chapter. <https://wikimedia.pt>

### Greece (GR) - 10
_Little found: only 10 entries beyond the national ministry already in stakeholders.json._
- **Open Technologies Alliance (GFOSS/EELLAK)** (association, P1, B) - Greek open technologies alliance of universities and research bodies. <https://eellak.gr>
- **FOSSCOMM** (event, P2, B) - National free software communities conference. <https://fosscomm.gr>
- **GRNET** (government, P2, B) - Greek research and education network; open source and cloud. <https://grnet.gr>
- **Open Technologies Centre, Aristotle University of Thessaloniki** (academia, P2, A) - University OSPO (2022). <https://opentech.auth.gr>
- **Athena Research Center** (academia, P3, C) - Research centre. <https://www.athenarc.gr>
- **Athens University of Economics and Business** (academia, P3, C) - University; open source research. <https://www.aueb.gr>
- **City of Athens** (region-city, P3, C, unverified) - Municipality. <https://www.cityofathens.gr>
- **GUnet (Open eClass)** (academia, P3, C) - Academic network developing Open eClass. <https://www.gunet.gr>
- **NTUA** (academia, P3, C) - University. <https://www.ntua.gr>
- **Vouliwatch** (community, P3, C) - Civic tech. <https://vouliwatch.gr>

### Cyprus (CY) - 4
_Little found: only 4 entries beyond the national ministry already in stakeholders.json._
- **CYENS Centre of Excellence** (academia, P3, C, unverified) - Research centre. <https://www.cyens.org.cy>
- **Cyprus Computer Society** (association, P3, C) - Professional association. <https://www.ccs.org.cy>
- **The Cyprus Institute** (academia, P3, C) - Research. <https://www.cyi.ac.cy>
- **University of Cyprus** (academia, P3, C, unverified) - University. <https://www.ucy.ac.cy>

### Malta (MT) - 3
_Little found: only 3 entries beyond the national ministry already in stakeholders.json._
- **Malta Communications Authority** (government, P3, C) - Telecom regulator. <https://www.mca.org.mt>
- **Malta Digital Innovation Authority** (government, P3, C, unverified) - Digital regulator. <https://mdia.gov.mt>
- **University of Malta** (academia, P3, C) - University. <https://www.um.edu.mt>
