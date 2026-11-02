const fs=require('fs');
const P={p:'policy',g:'governance',f:'funding',o:'operations'};
// id|side|level|country|name_en|name_orig|role|pillars|prio|website|contact|lang
const R=`
eu-cnect|EU|EU|EU|DG CNECT (Commission, Communications Networks, Content and Technology)|Direction générale CNECT|Owns EU Open Source Strategy and Digital Commons EDIC policy.|pg f|1|https://digital-strategy.ec.europa.eu|https://digital-strategy.ec.europa.eu/en/contact|EN
eu-digit-ospo|EU|EU|EU|European Commission OSPO / DG DIGIT|Commission Open Source Programme Office|Runs the Commission OSPO and internal open-source practice.|g o|1|https://commission.europa.eu/about/departments-and-executive-agencies/informatics_en|https://commission.europa.eu/about/contact_en|EN
eu-interop|EU|EU|EU|Interoperable Europe / OSOR|Interoperable Europe portal, Open Source Observatory|OSOR is the EU open-source observatory for public administrations; natural host for cases.|g o|1|https://interoperable-europe.ec.europa.eu|https://interoperable-europe.ec.europa.eu/contact|EN
eu-jrc|EU|EU|EU|Joint Research Centre (open-source analysis)|JRC|Commission science service producing open-source and digital-commons analysis.|g|2|https://joint-research-centre.ec.europa.eu|https://joint-research-centre.ec.europa.eu/contact_en|EN
eu-eeas|EU|diplomacy|EU|European External Action Service|EEAS|Owns EU-China relations and digital dialogue framing.|p|2|https://www.eeas.europa.eu|https://www.eeas.europa.eu/eeas/contact-us_en|EN
eu-del-china|EU|diplomacy|CN|EU Delegation to China|欧盟驻华代表团|Embassy-level EU presence in Beijing; science and digital attaches.|p|2|https://www.eeas.europa.eu/china_en|https://www.eeas.europa.eu/delegations/china/contact_en|EN/ZH
eu-dcedic|EU|EU|EU|Digital Commons EDIC (Director and Advisory Board)|DC-EDIC|The consortium whose strategy this observatory analyses; target of evidence briefs.|p g f o|1|https://digital-strategy.ec.europa.eu/en/policies/edic|https://digital-strategy.ec.europa.eu/en/contact|EN
eu-edcom|EU|EU|EU|EDCOM partners (European Digital Commons)|EDCOM|Partner network around the commons EDIC; potential operational partners.|g o|2|https://digital-strategy.ec.europa.eu/en/policies/edic|https://digital-strategy.ec.europa.eu/en/contact|EN
eu-alt-edic|EU|EU|EU|ALT-EDIC (Alternative Digital Infrastructure EDIC)|ALT-EDIC|Sister EDIC on language technologies; peer for open resources.|g o|3|https://digital-strategy.ec.europa.eu/en/policies/edic|https://digital-strategy.ec.europa.eu/en/contact|EN
eu-ngi|EU|EU|EU|Next Generation Internet (NGI) / NLnet|NGI Zero|Main EU funder of open-source maintenance; funding pillar partner.|f|1|https://www.ngi.eu|https://www.ngi.eu/contact/|EN
eu-enisa|EU|EU|EU|ENISA|European Union Agency for Cybersecurity|Open-source security and CRA context.|p g|3|https://www.enisa.europa.eu|https://www.enisa.europa.eu/about-enisa/contact|EN
eu-itre|EU|EU|EU|European Parliament ITRE Committee|ITRE|Parliament committee for industry, research, energy; policy audience.|p|3|https://www.europarl.europa.eu/committees/en/itre/home/highlights|https://www.europarl.europa.eu/committees/en/itre/home/members|EN
eu-cor|EU|EU|EU|European Committee of the Regions|CoR|Voice of regions and cities; links to regional open-source programmes.|p|3|https://cor.europa.eu|https://cor.europa.eu/en/about/Pages/contact.aspx|EN
ms-fr-dinum|EU|member-state|FR|DINUM (Interministerial Digital Directorate)|Direction interministérielle du numérique|Runs French public open-source policy, La Suite numérique, code.gouv.fr.|p g o|1|https://www.numerique.gouv.fr/dinum/|https://www.numerique.gouv.fr/contact/|FR/EN
ms-de-zendis|EU|member-state|DE|ZenDiS (Centre for Digital Sovereignty)|Zentrum für Digitale Souveränität|Operates openDesk for public administration.|g o|1|https://zendis.de|https://zendis.de/kontakt|EN/DE
ms-de-bmds|EU|member-state|DE|Federal Ministry for Digital and State Modernisation|Bundesministerium für Digitales und Staatsmodernisierung|Commissioning ministry for openDesk and sovereign workplace.|p f|2|https://bmds.bund.de|https://bmds.bund.de/service/kontakt|DE/EN
ms-de-sta|EU|member-state|DE|Sovereign Tech Agency|Sovereign Tech Agency|Funds maintenance of open digital base technologies; closest funding peer.|f g|1|https://www.sovereign.tech|https://www.sovereign.tech/contact|EN
ms-nl-minbzk|EU|member-state|NL|Dutch Ministry of Interior (Open Source Programme Office / Digital Government)|BZK, Programma Open Source|Dutch public-sector open-source push and Developer.overheid.nl.|p g|1|https://www.digitaleoverheid.nl|https://www.rijksoverheid.nl/contact|EN/NL
ms-it-agid|EU|member-state|IT|AgID (Agency for Digital Italy)|Agenzia per l'Italia Digitale|Italian software reuse catalogue (Developers Italia) and PA guidelines.|p g o|1|https://www.agid.gov.it|https://www.agid.gov.it/it/contatti|IT/EN
ms-it-dtd|EU|member-state|IT|Department for Digital Transformation|Dipartimento per la Trasformazione Digitale|Italian digital policy lead.|p f|1|https://innovazione.gov.it|https://innovazione.gov.it/contatti/|IT/EN
ms-es-sedia|EU|member-state|ES|Spain Secretary of State for Digitalisation and AI|SEDIA, Ministerio para la Transformación Digital|Spanish digital policy; open-source in public sector.|p|2|https://portal.mineco.gob.es|https://portal.mineco.gob.es/es-es/ministerio/paginas/contacto.aspx|ES/EN
ms-lu-mdd|EU|member-state|LU|Ministry of Digitalisation Luxembourg|Ministère de la Digitalisation|Luxembourg digital strategy; small, open to EU cooperation.|p|3|https://digital.gouv.lu|https://digital.gouv.lu/en/contact.html|EN/FR
ms-be-bosa|EU|member-state|BE|FPS BOSA (Policy and Support, Digital Transformation)|SPF BOSA|Belgian federal digital and OSPO activity.|p g|3|https://bosa.belgium.be|https://bosa.belgium.be/en/contact|EN/FR
ms-pl-mc|EU|member-state|PL|Ministry of Digital Affairs Poland|Ministerstwo Cyfryzacji|Polish digital ministry; open-source and cybersecurity.|p|3|https://www.gov.pl/web/digitalization|https://www.gov.pl/web/digitalization/contact|EN/PL
ms-at-bmf|EU|member-state|AT|Austrian Federal Ministry (Digital Austria)|Digitales Österreich|Austrian public digital policy and open-source reuse.|p|3|https://www.digitalaustria.gv.at|https://www.digitalaustria.gv.at/Kontakt.html|EN/DE
ms-dk-digst|EU|member-state|DK|Agency for Digital Government Denmark|Digitaliseringsstyrelsen|Danish digital agency; open-source exits from vendor lock-in.|p g|2|https://en.digst.dk|https://en.digst.dk/contact/|EN
ms-ee-ria|EU|member-state|EE|RIA / Estonian Information System Authority|Riigi Infosüsteemi Amet|X-Road open-source ecosystem (NIIS partner).|g o|3|https://www.ria.ee/en|https://www.ria.ee/en/contact|EN
ms-fi-dvv|EU|member-state|FI|Digital and Population Data Services Agency Finland|DVV|Finnish digital public infrastructure.|g|3|https://dvv.fi/en|https://dvv.fi/en/contact-information|EN
ms-se-digg|EU|member-state|SE|Agency for Digital Government Sweden (DIGG)|Myndigheten för digital förvaltning|Swedish public-sector open source policy.|p g|3|https://www.digg.se/en|https://www.digg.se/en/contact|EN
ms-cz-mvcr|EU|member-state|CZ|Czech Ministry of Interior (Digital Czechia)|Ministerstvo vnitra, Digitální Česko|Czech eGovernment and open-source policy.|p|3|https://www.digitalnicesko.gov.cz|https://www.digitalnicesko.gov.cz/kontakt|EN/CZ
ms-pt-ama|EU|member-state|PT|AMA (Agency for Administrative Modernisation)|Agência para a Modernização Administrativa|Portuguese digital public services agency.|p g|3|https://www.ama.gov.pt|https://www.ama.gov.pt/web/agencia-para-a-modernizacao-administrativa/contactos|EN/PT
reg-sh|EU|region|DE-SH|Schleswig-Holstein (Digital Ministry)|Ministerium für Digitalisierung SH|Flagship regional LibreOffice/Linux/Open-Xchange migration.|g o|1|https://www.schleswig-holstein.de|https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/digitalisierungsministerium|DE/EN
reg-bcn|EU|region|ES-CT|Barcelona City Council (Digital Commons)|Ajuntament de Barcelona|Pioneer of public-code and digital-commons policy (Decidim).|p g|1|https://ajuntament.barcelona.cat/digital/en|https://ajuntament.barcelona.cat/digital/en/contact|EN
reg-munich|EU|region|DE-BY|City of Munich (LiMux legacy, public money public code)|Landeshauptstadt München|Reversal and return to open source; lessons for governance.|p g|2|https://stadt.muenchen.de|https://stadt.muenchen.de/infos/kontakt.html|DE/EN
cn-miit|CN|CN-central|CN|Ministry of Industry and Information Technology|工业和信息化部|Lead ministry for open-source policy and OpenAtom oversight.|p f|1|https://www.miit.gov.cn|https://www.miit.gov.cn/jgsj/index.html|ZH
cn-cac|CN|CN-central|CN|Cyberspace Administration of China|国家互联网信息办公室|Digital governance regulator; context for data and software rules.|p|3|https://www.cac.gov.cn|https://www.cac.gov.cn/|ZH
cn-ndrc|CN|CN-central|CN|National Development and Reform Commission|国家发展和改革委员会|Digital economy and national plans incl. open source.|p f|3|https://www.ndrc.gov.cn|https://www.ndrc.gov.cn/|ZH
cn-most|CN|CN-central|CN|Ministry of Science and Technology|科学技术部|Research funding including open-source programmes; EU-China S&T cooperation.|p f|2|https://www.most.gov.cn|https://www.most.gov.cn/|ZH
cn-mofcom|CN|CN-central|CN|Ministry of Commerce|商务部|Trade side of EU-China relations; EU trade dialogue.|p|3|https://www.mofcom.gov.cn|https://www.mofcom.gov.cn/|ZH
cn-sasac|CN|CN-central|CN|SASAC (State-owned Assets Supervision)|国务院国有资产监督管理委员会|Supervises central SOEs that adopt open-source platforms.|p|3|http://www.sasac.gov.cn|http://www.sasac.gov.cn/|ZH
cn-cesi|CN|CN-central|CN|China Electronics Standardization Institute|中国电子技术标准化研究院|Standards and open-source evaluation body under MIIT.|g o|1|https://www.cesi.cn|https://www.cesi.cn/|ZH
cn-caict|CN|CN-central|CN|China Academy of Information and Communications Technology|中国信息通信研究院|Publishes open-source industry white papers, runs OSS evaluation.|g o|1|https://www.caict.ac.cn|https://www.caict.ac.cn/|ZH
cn-mission-eu|CN|diplomacy|BE|Mission of China to the EU|中国驻欧盟使团|Channel to Chinese government on EU-China digital dialogue.|p|2|http://eu.china-mission.gov.cn|http://eu.china-mission.gov.cn/eng/|EN/ZH
cn-emb-de|CN|diplomacy|DE|Chinese Embassy in Germany (S&T / Economic sections)|中国驻德国使馆|Key EU capital for open-source (ZenDiS, STA).|p|3|http://de.china-embassy.gov.cn|http://de.china-embassy.gov.cn/|EN/ZH
cn-emb-fr|CN|diplomacy|FR|Chinese Embassy in France|中国驻法国使馆|Key EU capital (DINUM).|p|3|http://fr.china-embassy.gov.cn|http://fr.china-embassy.gov.cn/|EN/ZH
cn-emb-nl|CN|diplomacy|NL|Chinese Embassy in the Netherlands|中国驻荷兰使馆|Key EU capital.|p|3|http://nl.china-embassy.gov.cn|http://nl.china-embassy.gov.cn/|EN/ZH
cn-emb-it|CN|diplomacy|IT|Chinese Embassy in Italy|中国驻意大利使馆|Key EU capital (AgID).|p|3|http://it.china-embassy.gov.cn|http://it.china-embassy.gov.cn/|EN/ZH
cn-bj|CN|CN-provincial|Beijing|Beijing Municipal Bureau of Economy and Information Technology|北京市经济和信息化局|Beijing open-source programmes (e.g. OpenAtom, openKylin hub).|p f o|2|https://jxj.beijing.gov.cn|https://jxj.beijing.gov.cn/|ZH
cn-sh|CN|CN-provincial|Shanghai|Shanghai Municipal Commission of Economy and Informatisation|上海市经济和信息化委员会|Shanghai open-source policy and annual open-source conference.|p f o|1|https://sheitc.sh.gov.cn|https://sheitc.sh.gov.cn/|ZH
cn-zj|CN|CN-provincial|Zhejiang|Zhejiang Department of Economy and Information Technology|浙江省经济和信息化厅|Zhejiang/Hangzhou open-source ecosystem.|p f o|2|https://jxt.zj.gov.cn|https://jxt.zj.gov.cn/|ZH
cn-js|CN|CN-provincial|Jiangsu|Jiangsu Department of Industry and Information Technology|江苏省工业和信息化厅|Jiangsu/Suzhou open-source industry.|p f o|3|https://gxt.jiangsu.gov.cn|https://gxt.jiangsu.gov.cn/|ZH
cn-gd|CN|CN-provincial|Guangdong|Guangdong Department of Industry and Information Technology|广东省工业和信息化厅|Guangdong/Shenzhen OpenHarmony centre candidate case.|p f o|1|http://gdii.gd.gov.cn|http://gdii.gd.gov.cn/|ZH
cn-cq|CN|CN-provincial|Chongqing|Chongqing Commission of Economy and Information Technology|重庆市经济和信息化委员会|Chongqing open-source plan.|p f|3|https://jjxxw.cq.gov.cn|https://jjxxw.cq.gov.cn/|ZH
cn-hb|CN|CN-provincial|Hubei|Hubei Department of Economy and Information Technology|湖北省经济和信息化厅|Wuhan open-source plan.|p f|3|https://jxt.hubei.gov.cn|https://jxt.hubei.gov.cn/|ZH
cn-hn|CN|CN-provincial|Hunan|Hunan Department of Industry and Information Technology|湖南省工业和信息化厅|Hunan (Changsha) open-source/Kylin ecosystem.|p f|3|https://gxt.hunan.gov.cn|https://gxt.hunan.gov.cn/|ZH
fd-eclipse|global|foundation|EU (BE)|Eclipse Foundation|Eclipse Foundation AISBL|Brussels-based, runs Open Regulatory Compliance WG; Chinese members.|g o f|1|https://www.eclipse.org|https://www.eclipse.org/org/foundation/contact.php|EN
fd-lfe|EU|foundation|EU|Linux Foundation Europe|Linux Foundation Europe|European arm of LF; OSPO tooling.|g o|1|https://linuxfoundation.eu|https://linuxfoundation.eu/contact|EN
fd-ofe|EU|foundation|EU|OpenForum Europe|OpenForum Europe|Policy think-and-do tank on open source in Brussels.|p g|1|https://openforumeurope.org|https://openforumeurope.org/contact/|EN
fd-fsfe|EU|foundation|EU|Free Software Foundation Europe|FSFE|Public Money Public Code advocacy.|p g|2|https://fsfe.org|https://fsfe.org/contact/|EN
fd-apell|EU|foundation|EU|APELL|Association for Promotion of Open Source Entrepreneurship|EU open-source companies association (name to confirm).|p|3|https://apell.eu|https://apell.eu/|EN
fd-osba|EU|foundation|DE|OSB Alliance|Open Source Business Alliance|German open-source business association.|p o|2|https://osb-alliance.de|https://osb-alliance.de/kontakt|EN/DE
fd-tdf|EU|foundation|DE|The Document Foundation|The Document Foundation|LibreOffice steward; backs many PA migrations.|o g|2|https://www.documentfoundation.org|https://www.documentfoundation.org/contact/|EN
fd-matrix|EU|foundation|UK|Matrix.org Foundation|Matrix.org Foundation|Open protocol used by governments; Chinese interest.|o g|2|https://matrix.org|https://matrix.org/contact/|EN
fd-osi|global|foundation|US|Open Source Initiative|OSI|Open Source Definition and AI definition steward.|g|2|https://opensource.org|https://opensource.org/contact|EN
fd-asf|global|foundation|US|Apache Software Foundation|ASF|Large Chinese contributor base; neutral upstream.|g o|2|https://www.apache.org|https://www.apache.org/foundation/contact.html|EN
fd-riscv|global|foundation|CH|RISC-V International|RISC-V International|Open hardware ISA with EU and Chinese members.|g o|2|https://riscv.org|https://riscv.org/about/contact/|EN
fd-niis|EU|foundation|EE|Nordic Institute for Interoperability Solutions|NIIS|X-Road governance with international adoption.|g o|3|https://www.niis.org|https://www.niis.org/contact|EN
fd-ow2|EU|foundation|FR|OW2|OW2 community|European open-source community with Chinese members.|g o|2|https://www.ow2.org|https://www.ow2.org/view/About/Contact|EN
fd-wmeu|EU|foundation|BE|Wikimedia Europe|Wikimedia Europe|Open knowledge advocacy.|p|3|https://wikimedia.brussels|https://wikimedia.brussels/contact/|EN
cm-openatom|CN|foundation|CN|OpenAtom Foundation|开放原子开源基金会|Chinese national open-source foundation (openHarmony, openEuler donor).|g f o|1|https://www.openatom.org|https://www.openatom.org/|ZH/EN
cm-kaiyuanshe|CN|community|CN|KAIYUANSHE (Open Source Society of China)|开源社|Community org, runs COSCon; best bridge partner.|g o|1|https://kaiyuanshe.cn|https://kaiyuanshe.cn/|ZH/EN
cm-chance|CN|foundation|CN|Chance Foundation (Lingshang)|Chance Foundation|Funds open-source in China.|f|2|https://www.chancefoundation.org|https://www.chancefoundation.org/|ZH
cm-sh-osa|CN|community|CN|Shanghai Open Source Information Technology Association|上海开源信息技术协会|Shanghai industry association; organises open-source events.|g o|2|https://www.shosa.org.cn|https://www.shosa.org.cn/|ZH
cm-ccf-odc|CN|community|CN|CCF Open Source Development Committee|中国计算机学会开源发展委员会|Academic-industry committee; publishes open-source reports.|g o|1|https://www.ccf.org.cn/odc|https://www.ccf.org.cn/|ZH
cm-copu|CN|community|CN|COPU (China Open Source Promotion Union)|中国开源软件推进联盟|Veteran open-source promotion alliance under MIIT.|p g|2|http://www.copu.org.cn|http://www.copu.org.cn/|ZH
cm-oschina|CN|media|CN|OSChina|开源中国|Largest Chinese open-source news and community; Gitee operator.|o|1|https://www.oschina.net|https://www.oschina.net/home/contact|ZH
cm-gitee|CN|community|CN|Gitee and OSS-Compass|Gitee / OSS-Compass|Source forge and open-source health metrics (CHAOSS-like); metric peer.|g o|1|https://gitee.com|https://gitee.com/about_us|ZH
cm-openeuler|CN|community|CN|openEuler community|openEuler|Open OS community with EU participants.|o g|2|https://www.openeuler.org|https://www.openeuler.org/en/|ZH/EN
cm-openharmony|CN|community|CN|OpenHarmony community|OpenHarmony|OpenAtom OS project; Guangdong centre case.|o g|2|https://www.openharmony.cn|https://www.openharmony.cn/|ZH/EN
cm-openkylin|CN|community|CN|openKylin community|openKylin|Desktop OS community, government deployments.|o|3|https://www.openkylin.top|https://www.openkylin.top/|ZH
co-suse|EU|company|DE|SUSE|SUSE|European enterprise open-source vendor present in China.|o|2|https://www.suse.com|https://www.suse.com/contact/|EN
co-bitergia|EU|company|ES|Bitergia|Bitergia|Open-source analytics, OSPO metrics partner.|g o|1|https://bitergia.com|https://bitergia.com/contact/|EN
co-element|EU|company|UK|Element|Element|Matrix-based secure collaboration for governments.|o|3|https://element.io|https://element.io/contact|EN
co-nextcloud|EU|company|DE|Nextcloud GmbH|Nextcloud|Sovereign collaboration, used by PAs.|o|2|https://nextcloud.com|https://nextcloud.com/contact/|EN
co-collabora|EU|company|UK|Collabora Productivity|Collabora|LibreOffice online for openDesk.|o|3|https://www.collaboraoffice.com|https://www.collaboraoffice.com/contact/|EN
co-onlyoffice|EU|company|LV|ONLYOFFICE (Ascensio System SIA)|ONLYOFFICE|EU-registered office suite with Chinese users.|o|3|https://www.onlyoffice.com|https://www.onlyoffice.com/contacts.aspx|EN
co-xwiki|EU|company|FR|XWiki SAS|XWiki|Used in La Suite; OW2 member.|o|3|https://xwiki.com|https://xwiki.com/en/contact|EN
co-redhat|EU|company|EU|Red Hat EMEA|Red Hat|Open-source enterprise upstream; OSPO practice.|o|3|https://www.redhat.com/en|https://www.redhat.com/en/contact|EN
co-ionos|EU|company|DE|IONOS|IONOS|Cloud provider in openDesk ecosystem.|o|3|https://www.ionos.com|https://www.ionos.com/about-us/contact|EN
co-ovh|EU|company|FR|OVHcloud|OVHcloud|European sovereign cloud and open-source user.|o|3|https://corporate.ovhcloud.com|https://corporate.ovhcloud.com/en/contact/|EN
co-huawei|CN|company|CN|Huawei (open-source office)|华为|Main openEuler/OpenHarmony contributor; EU subsidiaries.|o f|1|https://www.huawei.com/en|https://www.huawei.com/en/contact-us|EN/ZH
co-alibaba|CN|company|CN|Alibaba (Open Source Committee)|阿里巴巴|Large contributor (Apache, Dragonwell).|o|2|https://opensource.alibaba.com|https://opensource.alibaba.com/|EN/ZH
co-tencent|CN|company|CN|Tencent Open Source|腾讯开源|Open Source Management Office.|o|2|https://opensource.tencent.com|https://opensource.tencent.com/|EN/ZH
co-baidu|CN|company|CN|Baidu (PaddlePaddle)|百度|Open AI framework.|o|3|https://www.baidu.com|https://home.baidu.com/|ZH
co-bytedance|CN|company|CN|ByteDance open source|字节跳动|Large contributor; EU presence.|o|3|https://opensource.bytedance.com|https://opensource.bytedance.com/|EN/ZH
co-kylinsoft|CN|company|CN|Kylinsoft|麒麟软件|openKylin lead vendor.|o|3|https://www.kylinos.cn|https://www.kylinos.cn/|ZH
co-isoftstone|CN|company|CN|iSoftStone|软通动力|OpenHarmony distro vendor.|o|3|https://www.isoftstone.com|https://www.isoftstone.com/|ZH/EN
co-kingsoft|CN|company|CN|Kingsoft Office (WPS)|金山办公|Office suite relevant to document formats.|o|3|https://www.wps.cn|https://www.wps.cn/|ZH
co-pingcap|CN|company|CN|PingCAP|平凯星辰|TiDB, EU and global open-source presence.|o|3|https://www.pingcap.com|https://www.pingcap.com/contact-us/|EN
ac-merics|EU|academia|DE|MERICS|Mercator Institute for China Studies|Leading EU think tank on China tech.|p|1|https://merics.org|https://merics.org/en/contact|EN
ac-bruegel|EU|academia|BE|Bruegel|Bruegel|Economic think tank, digital sovereignty.|p|2|https://www.bruegel.org|https://www.bruegel.org/contact|EN
ac-ecfr|EU|academia|EU|ECFR|European Council on Foreign Relations|Foreign-policy think tank.|p|3|https://ecfr.eu|https://ecfr.eu/contact/|EN
ac-ofa|EU|academia|EU|OpenForum Academy|OpenForum Academy|Academic arm of OFE.|p g|1|https://openforumeurope.org/openforum-academy/|https://openforumeurope.org/contact/|EN
ac-tsinghua|CN|academia|CN|Tsinghua University|清华大学|Open-source research and OSPO-like programmes.|g|2|https://www.tsinghua.edu.cn|https://www.tsinghua.edu.cn/|ZH/EN
ac-pku|CN|academia|CN|Peking University|北京大学|Open-source research.|g|3|https://www.pku.edu.cn|https://www.pku.edu.cn/|ZH/EN
ac-xlab|CN|academia|CN|ECNU X-lab (Open Source)|华东师范大学 X-lab|OpenDigger, open-source metrics; strong bridge partner.|g o|1|https://github.com/X-lab2017|https://github.com/X-lab2017|ZH/EN
ac-iscas|CN|academia|CN|CAS Institute of Software (ISCAS)|中国科学院软件研究所|RISC-V and openEuler research.|g o|2|http://www.iscas.ac.cn|http://www.iscas.ac.cn/|ZH/EN
ac-fudan|CN|academia|CN|Fudan University|复旦大学|Open-source research and Shanghai ecosystem.|g|3|https://www.fudan.edu.cn|https://www.fudan.edu.cn/|ZH/EN
dp-euccc|global|diplomacy|CN|EU Chamber of Commerce in China|中国欧盟商会|Business voice, position papers.|p|2|https://www.europeanchamber.com.cn|https://www.europeanchamber.com.cn/en/contact|EN
dp-eusmec|global|diplomacy|CN|EU SME Centre|中国欧盟中小企业中心|SME support in China.|o|3|https://www.eusmecentre.org.cn|https://www.eusmecentre.org.cn/contact|EN
dp-ccceu|CN|diplomacy|BE|China Chamber of Commerce to the EU|中国驻欧盟商会|Chinese business voice in Brussels (name to confirm).|p|3|https://www.cccceu.eu|https://www.cccceu.eu/|EN
`.trim().split('\n').map(l=>{const c=l.split('|');return{id:c[0],side:c[1],level:c[2],country:c[3],name_en:c[4],name_original:c[5],role_relevance:c[6],pillar:c[7].split(' ').map(x=>P[x]),priority:+c[8],official_website:c[9],contact_channel:c[10],contact_type:'official institutional page (generic)',language:c[11],source_url:c[10],verified:false}});
fs.writeFileSync('data/stakeholders.json',JSON.stringify(R,null,1),'utf8');
const urls=[...new Set(R.flatMap(r=>[r.official_website,r.contact_channel]))];
const ex=new Set(fs.readFileSync('data/new_source_urls.txt','utf8').split(/\r?\n/));
fs.appendFileSync('data/new_source_urls.txt','\n'+urls.filter(u=>!ex.has(u)).join('\n')+'\n');
const cnt=(k)=>R.reduce((a,r)=>(a[r[k]]=(a[r[k]]||0)+1,a),{});
const tab=(k)=>'| '+k+' | n |\n|---|---|\n'+Object.entries(cnt(k)).map(([a,b])=>`| ${a} | ${b} |`).join('\n');
const w1=R.filter(r=>r.priority==1);
const zh=R.filter(r=>/^ZH/.test(r.language));
const md=`# STAKEHOLDERS — outreach map

Source of truth: [../data/stakeholders.json](../data/stakeholders.json) (${R.length} entries). Built from the audience map (METHODOLOGY Part II) plus the brief; **no invitations are sent**.

**Status: first draft.** Websites and contact pages come from prior knowledge and have not yet been checked entry by entry (\`verified: false\`). Entries marked "to confirm" (APELL, China Chamber to the EU) need identity checks. Run a link check before any outreach.

## Counts
${tab('side')}

${tab('level')}

Priority 1: ${w1.length}, priority 2: ${R.filter(r=>r.priority==2).length}, priority 3: ${R.filter(r=>r.priority==3).length}.

## First wave (priority 1)
| id | name | level | country | lang |
|---|---|---|---|---|
${w1.map(r=>`| ${r.id} | ${r.name_en} | ${r.level} | ${r.country} | ${r.language} |`).join('\n')}

## Outreach notes
- **Need Chinese (ZH) materials:** ${zh.length} entries (CN-central, CN-provincial, CN communities, most CN companies). Use the ZH brief in official register for ministries, community register for KAIYUANSHE, OSChina, Gitee.
- **Need an intermediary (do not cold-contact):** Chinese ministries and provincial bureaus (MIIT, CAC, NDRC, MOST, MOFCOM, SASAC, provincial bureaus): go via KAIYUANSHE, CCF ODC, CAICT, ECNU X-lab, OpenAtom, or the EU Delegation / Chinese Mission. Chinese embassies and the mission: via EEAS or national contacts. Chinese state websites mostly list no generic email; contact_channel is the site's own contact or home page, to be completed by a trusted partner.
- **EU institutions:** official contact forms; for DC-EDIC and EDCOM go through DG CNECT and the Advisory Board secretariat.
- **Member states:** prefer OSPO or digital-agency generic channels; pair each with the matching provincial case ("Beijing <-> Netherlands"). Not yet covered: BG, HR, CY, GR, HU, IE, LV, LT, MT, RO, SK, SI (add in a second pass).
- **Companies:** use corporate open-source offices, not sales contacts.

## GDPR and approvals
Only institutional channels (generic pages, forms, press offices) are stored. No personal emails, phone numbers, or private social accounts. Named office-holders may be added later only as role + name with a public source. **Every invitation requires Fabio's explicit approval before sending.**
`;
fs.writeFileSync('docs/STAKEHOLDERS.md',md,'utf8');
console.log(R.length,JSON.stringify(cnt('side')),JSON.stringify(cnt('level')),w1.length,zh.length);
