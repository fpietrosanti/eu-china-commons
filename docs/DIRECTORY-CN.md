# Directory of Chinese organisations in open source, digital commons, xinchuang and public-sector software

Generated 2026-11-08. Data: `data/directory/cn-orgs.json` (259 new organisations, on top of the 52 CN records in `data/stakeholders.json`). Unreachable URLs are queued in `data/cn_vpn_needed.txt`.

## Summary (English)

- **259 new organisations** across 17 types and 32 province-level units (plus National). 183 homepages answered HTTP 200 from outside China; 57 did not answer (000) and were queued for a Chinese VPN fetch; the rest returned 4xx/5xx (site alive but blocking scripted clients).
- **Evidence grades.** A = the role or policy was confirmed by a search result or document read in this session. B = organisation is well known, homepage reachable, role from established background knowledge and project links not individually fetched. C = homepage unreachable or the role/URL is a lead only; verify before citing. Almost all entries are B or C: this is a directory seed, not a verified dataset. `verified` = true only when the homepage returned 200.
- **Provincial open-source plans found (A, relay-confirmed, originals queued for VPN):** Beijing (Implementation Plan 2026-2028, 24 Dec 2025), Shanghai (Dec 2025; 100 commercial open-source firms, 200+ projects, up to CNY 20m per basic dev-tool project), Zhejiang (Jul 2026; 150+ firms), Hunan (OpenHarmony plan, 13 Oct 2026), Guangdong (19 Jun 2026 clause), Shenzhen (software-industry funding guide with a "major open-source projects" category), Hangzhou (compute vouchers for AI open-source communities), Wuhan East Lake zone (pilot subsidy). For Sichuan, Fujian, Shandong, Henan, Hubei (province), Jiangsu and the others, no dedicated plan was found by search; their IT departments are listed so the gap is explicit.
- **Projects and publications** are attached only where we had a confident link (about 37 orgs with projects, 7 with publications). Most org-level publication lists (white papers, annual reports) are still empty: see gaps.

## Existing ids that could be enriched (not duplicated here)

- cm-openatom: projects (58 in 18 fields), Mulan, G-Star, AtomGit, Global Open Source Summit; annual reports 2020-23 (OCR done), 2024-25 missing.
- cm-kaiyuanshe: COSCon series, annual China Open Source Report (COSR25), FY reports at kaiyuanshe.github.io.
- cm-copu: blue books 2021-2025 (gitcode.com/choss_skw/2025book).
- cn-caict / cn-cesi / cn-miit: white papers (open-source, trusted open source OSCAR), xinchuang catalogues.
- cm-openeuler, cm-openharmony, cm-openkylin: sub-SIGs, certified products counts.
- cn-bj, cn-sh, cn-zj, cn-gd, cn-hn: add the plan documents listed above to their records (see cn-beijing-gov, cn-sh-gov, cn-zj-gov, cn-gd-gov, cn-hunan-zzb in the directory).
- cn-sz, cn-hz, cn-wh: district-level bodies now split out (Longgang, Longhua, Xihu, Donghu).
- co-huawei, co-alibaba, co-tencent, co-baidu, co-bytedance: OSPOs, OpenRank placements (Huawei 89,369, Alibaba 26,349, Ant 18,679, ByteDance 16,626, Baidu 13,652 in 2025).
- ac-iscas: OSPP, PLCT, supply-chain lighting plan; ac-xlab: OpenDigger.

## By type

### central ministry/agency (5)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| National Data Administration | 国家数据局 | National | https://www.nda.gov.cn | 200 | B | Runs national data-element and public-data policy; relevant to data commons and public data opening. |
| Chinese Academy of Sciences | 中国科学院 | National | https://www.cas.cn | 200 | B | Parent of ISCAS, ICT, and many open-source research groups; funds basic OS/RISC-V work. |
| Ministry of Education | 教育部 | National | https://www.moe.gov.cn | 200 | B | Sets university curricula; open-source education and the new-engineering agenda. |
| China National Intellectual Property Administration | 国家知识产权局 | National | https://www.cnipa.gov.cn | 200 | B | Patents/IP; open-source licence and IP policy context. |
| National Copyright Administration of China | 国家版权局 | National | https://www.ncac.gov.cn | 200 | B | Software copyright registration; licence enforceability context. |

### state think tank/agency (7)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| CCID Group (CCID Think Tank) | 赛迪研究院 / 中国电子信息产业发展研究院 | National | https://www.ccidgroup.com | 0 | C | MIIT-affiliated think tank; co-authors the China open-source development blue book and xinchuang industry reports. |
| CCID Consulting | 赛迪顾问 | National | https://www.ccidconsulting.com | 403 | B | Market analysis of xinchuang, domestic OS and open-source industry. |
| China Information Technology Security Evaluation Center | 中国信息安全测评中心 | National | https://www.itsec.gov.cn | 200 | C | Security evaluation and CNNVD vulnerability database; software supply chain. |
| China Software Testing Center (CSTC) | 中国软件评测中心 | National | https://www.cstc.org.cn | 0 | C | CCID unit; software testing, xinchuang product evaluation and certification. |
| Chinese Academy of Engineering | 中国工程院 | National | https://www.cae.cn | 200 | B | Strategy studies on software and information technology; academician advisory. |
| CNCERT/CC | 国家计算机网络应急技术处理协调中心 | National | https://www.cert.org.cn | 200 | B | National CERT; vulnerability handling affecting open-source components. |
| China Internet Network Information Center | 中国互联网络信息中心 | National | https://www.cnnic.cn | 200 | B | Internet statistics and domain governance; reports on developer and internet infrastructure. |

### funder (1)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| National Natural Science Foundation of China | 国家自然科学基金委员会 | National | https://www.nsfc.gov.cn | 200 | B | Funds basic research incl. software and open-source methodology. |

### standardisation body (4)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| National Cybersecurity Standardization TC (TC260) | 全国网络安全标准化技术委员会 | National | https://www.tc260.org.cn | 200 | B | Cybersecurity standards incl. software supply-chain security and AI safety. |
| National Information Technology Standardization TC (SAC/TC28) | 全国信息技术标准化技术委员会 | National | https://www.tc28.org.cn | 0 | C | Drafts national IT standards incl. open-source management rules. |
| Standardization Administration of China | 国家标准化管理委员会 | National | https://www.sac.gov.cn | 200 | B | National standards body; open-source and software standards approvals. |
| China Communications Standards Association | 中国通信标准化协会 | National | https://www.ccsa.org.cn | 200 | B | Telecom standards body; open-source and cloud-native working groups. |

### state-owned enterprise (5)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| China Electronics Corporation (CEC) | 中国电子信息产业集团 | National | https://www.cec.com.cn | 200 | B | State group behind Kylin, Great Wall, PKS xinchuang stack. |
| China Telecom | 中国电信 | National | https://www.chinatelecom.com.cn | 412 | B | Operator; cloud, open-source LLM (TeleChat) and openEuler/openAnolis adoption. |
| China Unicom | 中国联通 | National | https://www.chinaunicom.com.cn | 0 | C | Operator; Yuanjing LLM and open-source cloud-native contributions. |
| China Electronics Technology Group | 中国电子科技集团 | National | https://www.cetc.com.cn | 200 | B | Defence-electronics SOE with domestic software/OS efforts. |
| State Grid Corporation of China | 国家电网 | National | https://www.sgcc.com.cn | 0 | C | Large domestic-OS and open-source adopter in critical infrastructure. |

### company (51)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| DeepSeek | 深度求索 DeepSeek | Zhejiang | https://www.deepseek.com | 403 | B | MIT-licensed open weights (V3, R1); catalysed 2025 open-model wave. |
| UnionTech Software (UOS) | 统信软件 | Hubei | https://www.chinauos.com | 0 | C | Government desktop OS vendor based on deepin. |
| Alibaba Cloud (Alinux / Tongyi) | 阿里云 | Zhejiang | https://www.aliyun.com | 200 | B | Alinux to Anolis; Qwen/Tongyi. |
| Ant Group | 蚂蚁集团 | Zhejiang | https://www.antgroup.com | 200 | B | Ant Design, OceanBase, SOFAStack; 3rd Chinese company by OpenRank. |
| Inspur | 浪潮 | Shandong | https://www.inspur.com | 200 | B | OpenAtom founding donor; servers; xinchuang. |
| Loongson Technology | 龙芯中科 | Beijing | https://www.loongson.cn | 200 | B | LoongArch ISA; contributes to Linux, LLVM, GCC; OpenAtom LoongArch projects. |
| Moonshot AI (Kimi) | 月之暗面 | Beijing | https://www.moonshot.cn | 200 | B | Kimi K2 open-weight models. |
| Zhipu AI (Z.ai) | 智谱AI | Beijing | https://www.zhipuai.cn | 0 | C | GLM open models; Tsinghua spin-out. |
| ChinaSoft International | 中软国际 | Guangdong | https://www.chinasofti.com | 200 | B | Huawei-ecosystem integrator; OpenAtom donor 8.1M (2023). |
| DaoCloud | DaoCloud 道客 | Shanghai | https://www.daocloud.io | 200 | B | Cloud-native open-source vendor, ranked by OpenRank. |
| Espressif Systems | 乐鑫科技 | Shanghai | https://www.espressif.com | 200 | B | ESP-IDF open-source IoT; top OpenRank Chinese firm. |
| FIT2CLOUD | 飞致云 | Beijing | https://www.fit2cloud.com | 200 | B | Maker of 1Panel, MaxKB, JumpServer. |
| Hoperun Software | 润和软件 | Jiangsu | https://www.hoperun.com | 0 | C | OpenHarmony/openEuler ecosystem vendor. |
| Huawei Cloud | 华为云 | Guangdong | https://www.huaweicloud.com | 200 | B | Hosts OpenHarmony/openEuler infra paid by OpenAtom (CNY 6.5M 2023). |
| Hygon Information Technology | 海光信息 | Tianjin | https://www.hygon.cn | 200 | B | x86-licensed CPU/DCU vendor in xinchuang. |
| iFLYTEK | 科大讯飞 | Anhui | https://www.iflytek.com | 200 | B | Xinghuo; openEuler partner; xinchuang AI. |
| KaihongOS (Shenzhen Kaihong Digital) | 深开鸿 | Guangdong | https://www.kaihong.com | 200 | C | OpenHarmony distribution vendor; OpenAtom donor. |
| KylinSec | 麒麟信安 | Hunan | https://www.kylinsec.com.cn | 200 | C | openEuler-based secure OS; OpenAtom donor. |
| LangGenius (Dify) | LangGenius / Dify | Jiangsu | https://dify.ai | 200 | B | LLM app platform; most-starred Chinese-origin GitHub project 2026. |
| MiniMax | MiniMax 稀宇科技 | Shanghai | https://www.minimax.io | 200 | B | Open-weight MiniMax-M models. |
| OceanBase (Ant Group) | OceanBase | Zhejiang | https://www.oceanbase.com | 429 | B | Open-sourced distributed database 2021. |
| Phytium Technology | 飞腾信息技术 | Tianjin | https://www.phytium.com.cn | 200 | B | ARM-based CPU core of xinchuang; partner for openEuler/Kylin adaptation. |
| SiliconFlow | 硅基流动 | Beijing | https://www.siliconflow.cn | 200 | B | Inference platform for open models; owns OneFlow. |
| Talkweb | 拓维信息 | Hunan | https://www.talkweb.com.cn | 200 | C | OpenHarmony distribution vendor; Hunan OpenHarmony base. |
| Zilliz | Zilliz | Shanghai | https://zilliz.com | 200 | B | Maker of Milvus (LF AI & Data). |
| 01.AI | 零一万物 | Beijing | https://www.01.ai | 200 | B | Yi open models. |
| AgiBot | 智元机器人 | Shanghai | https://www.zhiyuan-robot.com | 200 | B | Open datasets/embodied-AI open source. |
| Baichuan AI | 百川智能 | Beijing | https://www.baichuan-ai.com | 200 | B | Baichuan open models. |
| China Standard Software (NeoKylin) | 中标软件 | Shanghai | https://www.cs2c.com.cn | 200 | C | CEC unit; NeoKylin legacy. |
| Digital China | 神州数码 | Beijing | https://www.digitalchina.com | 200 | B | openEuler ecosystem partner; xinchuang integrator. |
| InfiniFlow (RAGFlow) | InfiniFlow | Shanghai | https://infiniflow.org | 200 | B | RAGFlow engine, Infinity DB. |
| JD.com | 京东 | Beijing | https://www.jd.com | 200 | B | JoyAgent, OpenHarmony donor; open-source projects. |
| Meituan | 美团 | Beijing | https://www.meituan.com | 200 | B | LongCat open models; tech open-source. |
| Qihoo 360 | 奇虎360 | Beijing | https://www.360.cn | 200 | B | OpenAtom founding donor; security open-source. |
| SelectDB | SelectDB | Beijing | https://www.selectdb.com | 200 | B | Commercial steward of Apache Doris. |
| SenseTime | 商汤科技 | Shanghai | https://www.sensetime.com | 200 | B | OpenMMLab (with Shanghai AI Lab). |
| StepFun | 阶跃星辰 | Shanghai | https://www.stepfun.com | 200 | B | Step open multimodal models. |
| Sugon (Dawning) | 中科曙光 | Beijing | https://www.sugon.com | 200 | B | HPC/servers; xinchuang hardware, open-source ecosystem partner. |
| Tencent Cloud (TencentOS) | 腾讯云 TencentOS | Guangdong | https://cloud.tencent.com | 200 | B | TencentOS Server to OpenCloudOS. |
| Unitree Robotics | 宇树科技 | Zhejiang | https://www.unitree.com | 200 | B | Open-sourced robot SDK/models. |
| Volcengine (ByteDance) | 火山引擎 | Beijing | https://www.volcengine.com | 200 | B | ByteDance cloud; Doubao, open models. |
| Xiaomi | 小米 | Beijing | https://www.mi.com | 200 | B | MiMo open models; HyperOS; open-source contributor. |
| Zhaoxin Semiconductor | 兆芯 | Shanghai | https://www.zhaoxin.com | 200 | B | x86 CPU vendor in xinchuang. |
| Kingdee | 金蝶 | Guangdong | https://www.kingdee.com | 403 | B | Enterprise software; xinchuang ERP. |
| Kuaishou | 快手 | Beijing | https://www.kuaishou.com | 200 | B | Kwai/KAT open models. |
| Megvii | 旷视科技 | Beijing | https://www.megvii.com | 200 | B | MegEngine open-source framework. |
| NetEase | 网易 | Zhejiang | https://www.netease.com | 200 | C | Open-source projects and cloud contributions. |
| Qiniu Cloud | 七牛云 | Shanghai | https://www.qiniu.com | 200 | B | Cloud; XGo (Go+) open-source language. |
| Rockchip | 瑞芯微 | Fujian | https://www.rock-chips.com | 200 | C | SoC vendor; OpenHarmony hardware. |
| Sangfor | 深信服 | Guangdong | https://www.sangfor.com.cn | 200 | B | Security/cloud; open-source contributor. |
| Yonyou | 用友 | Beijing | https://www.yonyou.com | 200 | B | Enterprise software; xinchuang ERP. |

### research lab (13)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| Beijing Academy of Artificial Intelligence (BAAI) | 北京智源人工智能研究院 | Beijing | https://www.baai.ac.cn | 200 | B | Open models (Aquila, BGE, Emu), FlagOpen, FlagEval; annual BAAI Conference. |
| Beijing Institute of Open Source Chip (BOSC) | 北京开源芯片研究院 | Beijing | https://www.bosc.ac.cn | 200 | B | Runs XiangShan RISC-V CPU open-source project. |
| Shanghai AI Laboratory | 上海人工智能实验室 | Shanghai | https://www.shlab.org.cn | 200 | B | InternLM, OpenCompass, OpenGVLab, OpenDataLab open ecosystem. |
| Peng Cheng Laboratory | 鹏城实验室 | Guangdong | https://www.pcl.ac.cn | 200 | B | Shenzhen lab; PCL models, OpenI Qizhi platform, compute network. |
| PLCT Lab (ISCAS) | 中科院软件所 PLCT 实验室 | Beijing | https://plctlab.org | 200 | B | RISC-V software ecosystem lab at ISCAS; toolchain/OS porting. |
| Institute of Computing Technology, CAS | 中国科学院计算技术研究所 | Beijing | https://www.ict.ac.cn | 200 | B | Origin of Loongson, XiangShan; open chip and OS research. |
| Shanghai Innovation Institute | 上海创智学院 | Shanghai | https://www.sii.edu.cn | 200 | C | Shanghai AI talent/research institute with open-source AI mandate. |
| Tsinghua KEG Lab | 清华大学知识工程实验室 KEG | Beijing | https://keg.cs.tsinghua.edu.cn | 200 | B | Origin of GLM models and Zhipu AI. |
| Zhejiang Lab | 之江实验室 | Zhejiang | https://www.zhejianglab.com | 200 | B | Intelligent-computing lab; open models and platforms. |
| Institute for AI Industry Research (AIR), Tsinghua | 清华大学智能产业研究院 | Beijing | https://air.tsinghua.edu.cn | 200 | B | Industry-oriented AI research; open-source AI products. |
| Institute of Information Engineering, CAS | 中国科学院信息工程研究所 | Beijing | https://www.iie.ac.cn | 200 | B | Security and software supply-chain research. |
| Shenzhen Institute of Advanced Technology (CAS) | 中国科学院深圳先进技术研究院 | Guangdong | https://www.siat.ac.cn | 200 | B | CAS institute in Shenzhen; AI and open platforms. |
| Zhongguancun Laboratory | 中关村实验室 | Beijing | https://www.zgclab.edu.cn | 0 | C | Beijing new-type research lab; secure and trusted computing. |

### university (45)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| National University of Defense Technology | 国防科技大学 | Hunan | https://www.nudt.edu.cn | 200 | B | Kylin OS originator; supercomputing. |
| Shanghai Jiao Tong University | 上海交通大学 | Shanghai | https://www.sjtu.edu.cn | 200 | B | IPADS lab (OS research), OpenHarmony and openEuler research. |
| Zhejiang University | 浙江大学 | Zhejiang | https://www.zju.edu.cn | 200 | B | Open-source teaching and research; Hangzhou AI cluster. |
| Beihang University | 北京航空航天大学 | Beijing | https://www.buaa.edu.cn | 200 | B | Software dev. environment lab; open-source research. |
| Huazhong University of Science and Technology | 华中科技大学 | Hubei | https://www.hust.edu.cn | 200 | B | Systems research; openEuler campus work. |
| Nanjing University | 南京大学 | Jiangsu | https://www.nju.edu.cn | 200 | B | Software engineering; open-source OS courses. |
| University of Science and Technology of China | 中国科学技术大学 | Anhui | https://www.ustc.edu.cn | 200 | B | Linux User Group (USTC LUG) mirror and OSS culture. |
| Wuhan University | 武汉大学 | Hubei | https://www.whu.edu.cn | 200 | B | Open-source software research and OS education. |
| Beijing Institute of Technology | 北京理工大学 | Beijing | https://www.bit.edu.cn | 200 | B | OS and open-source supply-chain research. |
| Beijing University of Posts and Telecommunications | 北京邮电大学 | Beijing | https://www.bupt.edu.cn | 412 | B | Communication software; open-source education. |
| Harbin Institute of Technology | 哈尔滨工业大学 | Heilongjiang | https://www.hit.edu.cn | 200 | B | Systems/OS research. |
| Hunan University | 湖南大学 | Hunan | https://www.hnu.edu.cn | 200 | B | Changsha; Kylin/OpenHarmony teaching. |
| Renmin University of China | 中国人民大学 | Beijing | https://www.ruc.edu.cn | 200 | B | Policy/legal research on open source and data. |
| Sichuan University | 四川大学 | Sichuan | https://www.scu.edu.cn | 0 | C | Software engineering; open-source education. |
| Southern University of Science and Technology | 南方科技大学 | Guangdong | https://www.sustech.edu.cn | 200 | B | Shenzhen university; open-source and OpenHarmony teaching. |
| Sun Yat-sen University | 中山大学 | Guangdong | https://www.sysu.edu.cn | 200 | B | HPC and software research. |
| University of Electronic Science and Technology of China | 电子科技大学 | Sichuan | https://www.uestc.edu.cn | 200 | B | Chengdu; open-source hardware/software. |
| Westlake University | 西湖大学 | Zhejiang | https://www.westlake.edu.cn | 200 | B | Private research university in Hangzhou; AI and open-source collaborations. |
| Xi'an Jiaotong University | 西安交通大学 | Shaanxi | https://www.xjtu.edu.cn | 200 | B | Software engineering; openEuler Xi'an. |
| Central South University | 中南大学 | Hunan | https://www.csu.edu.cn | 200 | B | Changsha; software/AI research. |
| Chongqing University | 重庆大学 | Chongqing | https://www.cqu.edu.cn | 200 | B | Software engineering research. |
| Dalian University of Technology | 大连理工大学 | Liaoning | https://www.dlut.edu.cn | 0 | C | Dalian; software school. |
| Fuzhou University | 福州大学 | Fujian | https://www.fzu.edu.cn | 200 | B | Fujian; software school. |
| Guangxi University | 广西大学 | Guangxi | https://www.gxu.edu.cn | 200 | B | ASEAN computing. |
| Guizhou University | 贵州大学 | Guizhou | https://www.gzu.edu.cn | 200 | B | Big-data and open-source education. |
| Hainan University | 海南大学 | Hainan | https://www.hainanu.edu.cn | 200 | B | Hainan; digital free-trade port research. |
| Hebei University of Technology | 河北工业大学 | Hebei | https://www.hebut.edu.cn | 200 | B | Hebei; computing education. |
| Heilongjiang University | 黑龙江大学 | Heilongjiang | https://www.hlju.edu.cn | 200 | B | Heilongjiang; computing education. |
| Inner Mongolia University | 内蒙古大学 | Inner Mongolia | https://www.imu.edu.cn | 200 | B | Inner Mongolia; computing education. |
| Jilin University | 吉林大学 | Jilin | https://www.jlu.edu.cn | 200 | B | Computer science research. |
| Lanzhou University | 兰州大学 | Gansu | https://www.lzu.edu.cn | 412 | B | Gansu; open-source teaching. |
| Nanchang University | 南昌大学 | Jiangxi | https://www.ncu.edu.cn | 200 | B | Jiangxi; computing education. |
| Nankai University | 南开大学 | Tianjin | https://www.nankai.edu.cn | 200 | B | Tianjin; software and cybersecurity. |
| Ningxia University | 宁夏大学 | Ningxia | https://www.nxu.edu.cn | 200 | B | Ningxia; computing education. |
| Northwestern Polytechnical University | 西北工业大学 | Shaanxi | https://www.nwpu.edu.cn | 200 | B | Embedded/real-time OS research. |
| Qinghai University | 青海大学 | Qinghai | https://www.qhu.edu.cn | 200 | B | Qinghai; computing education. |
| Shandong University | 山东大学 | Shandong | https://www.sdu.edu.cn | 200 | B | Software college; open-source teaching. |
| Shanxi University | 山西大学 | Shanxi | https://www.sxu.edu.cn | 200 | B | Shanxi; computing education. |
| Southeast University | 东南大学 | Jiangsu | https://www.seu.edu.cn | 200 | B | Nanjing; software and chip research. |
| Tianjin University | 天津大学 | Tianjin | https://www.tju.edu.cn | 200 | B | Software and OS research; Tianjin xinchuang. |
| Tibet University | 西藏大学 | Tibet | https://www.utibet.edu.cn | 200 | B | Tibet; computing education. |
| Xiamen University | 厦门大学 | Fujian | https://www.xmu.edu.cn | 200 | B | Big data and open-source teaching. |
| Xinjiang University | 新疆大学 | Xinjiang | https://www.xju.edu.cn | 200 | B | Xinjiang; computing education. |
| Yunnan University | 云南大学 | Yunnan | https://www.ynu.edu.cn | 200 | B | Software school. |
| Zhengzhou University | 郑州大学 | Henan | https://www.zzu.edu.cn | 200 | B | Henan; software school. |

### alliance/association (11)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| Information Technology Application Innovation Working Committee (xinchuang) | 信息技术应用创新工作委员会 | National | https://www.itaic.org.cn | 418 | C | Core industry body of xinchuang; product catalogues, adaptation standards. |
| Mulan licence / COSCL (China Open Source Cloud League) | 中国开源云联盟 / 木兰开源许可证 | National | https://license.coscl.org.cn | 0 | C | Authors of the Mulan PSL licence family, now stewarded with OpenAtom. |
| China Open Instruction Ecosystem (RISC-V) Alliance (CNRV) | 中国开放指令生态（RISC-V）联盟 | National | https://www.cnrv.org.cn | 0 | C | RISC-V ecosystem alliance with CAS/BOSC. |
| Linux Foundation Asia Pacific (LF China) | Linux基金会亚太/中国 | National | https://www.lfasiallc.com | 200 | C | LF presence for China; hosts LF AI & Data Chinese projects, OSS Summit China. |
| AI Industry Alliance (AIIA) | 中国人工智能产业发展联盟 | National | https://www.aiiaorg.cn | 200 | C | CAICT-led alliance; AI benchmarks, open model assessments. |
| China Computer Federation (CCF) | 中国计算机学会 | National | https://www.ccf.org.cn | 200 | B | Parent society of CCF ODC; CNCC conference; open-source curricula. |
| China RISC-V Industry Consortium (CRVIC) | 中国RISC-V产业联盟 | National | https://www.crvic.org | 200 | C | RISC-V industry alliance. |
| China Software Industry Association | 中国软件行业协会 | National | https://www.csia.org.cn | 200 | B | Industry association; software industry statistics and rankings. |
| Internet Society of China | 中国互联网协会 | National | https://www.isc.org.cn | 200 | B | Industry association; annual internet development reports. |
| China Institute of Communications | 中国通信学会 | National | https://www.china-cic.org.cn | 0 | C | Learned society for communications. |
| Chinese Institute of Electronics | 中国电子学会 | National | https://www.cie.org.cn | 200 | B | Learned society; RISC-V and electronics standards activity. |

### open-source community (7)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| deepin community / UnionTech | 深度社区 / 统信软件 | Hubei | https://www.deepin.org | 200 | B | Linux desktop distro; UnionTech UOS is the commercial government desktop. |
| OpenAnolis (Dragon Lizard) community | 龙蜥社区 | National | https://openanolis.cn | 200 | B | Alibaba-seeded server OS community; Anolis OS; used in government procurement. |
| MindSpore community | 昇思 MindSpore 社区 | Guangdong | https://www.mindspore.cn | 200 | B | Huawei AI framework community. |
| OpenCloudOS community | OpenCloudOS 社区 | Guangdong | https://www.opencloudos.org | 200 | B | Tencent-seeded server OS community in OpenAtom ecosystem. |
| OpenDigger / OpenRank (X-lab) | OpenDigger 开源数据洞察 | Shanghai | https://open-digger.cn | 200 | B | Open-source metrics (OpenRank) used in COSR annual reports. |
| PaddlePaddle community | 飞桨社区 | Beijing | https://www.paddlepaddle.org.cn | 200 | B | Baidu deep-learning framework community. |
| Dromara open-source community | Dromara 开源社区 | National | https://dromara.org | 200 | B | Gitee-native community behind Hutool, Sa-Token, Forest. |

### code/model platform (8)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| AtomGit | AtomGit 代码托管平台 | National | https://atomgit.com | 200 | B | OpenAtom-backed code platform; merged with GitCode; G-Star programme. |
| ModelScope | 魔搭社区 ModelScope | Zhejiang | https://www.modelscope.cn | 200 | B | Alibaba open model community; Hangzhou ModelScope Developer Center. |
| CSDN | CSDN | Beijing | https://www.csdn.net | 521 | B | Largest Chinese developer community; co-publishes the open-source blue book. |
| GitCode / CSDN | GitCode / CSDN | Beijing | https://gitcode.com | 200 | B | CSDN code platform merged into AtomGit; hosts COPU blue-book repos. |
| GitLink (CCF) | 确实开源创新服务平台 GitLink | National | https://www.gitlink.org.cn | 200 | B | MOE/CCF-backed open-source collaboration platform used in universities. |
| OpenI Qizhi AI platform | 启智社区 OpenI | Guangdong | https://openi.pcl.ac.cn | 0 | C | PCL/Peking-Univ-led open AI collaboration platform. |
| Juejin (ByteDance) | 稀土掘金 | Beijing | https://juejin.cn | 200 | B | Developer content community owned by ByteDance. |
| SegmentFault | 思否 SegmentFault | Beijing | https://segmentfault.com | 0 | C | Developer Q&A community; open-source events. |

### event/programme (9)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| COSCon (China Open Source Conference) | 中国开源年会 COSCon | National | https://coscon.kaiyuanshe.cn | 200 | C | KAIYUANSHE annual flagship conference since 2015. |
| GOSIM | GOSIM 全球开源创新汇 | Zhejiang | https://gosim.org | 200 | C | International open-source innovation conferences (Hangzhou, Paris). |
| Open Source Promotion Plan (OSPP) | 开源之夏 | National | https://summer-ospp.ac.cn | 200 | B | ISCAS/openEuler student open-source summer programme. |
| World Artificial Intelligence Conference | 世界人工智能大会 WAIC | Shanghai | https://www.worldaic.com.cn | 200 | B | Annual Shanghai AI conference; open-source forum and global AI governance. |
| Alibaba Cloud Apsara Conference | 云栖大会 | Zhejiang | https://yunqi.aliyun.com | 200 | B | Hangzhou conference; Qwen/ModelScope open-source announcements. |
| Huawei Developer Conference (HDC) | 华为开发者大会 | Guangdong | https://developer.huawei.com | 200 | B | OpenHarmony/HarmonyOS/openEuler product announcements. |
| Open-source Supply Chain Lighting Plan | 开源软件供应链点亮计划 | National | https://summer.iscas.ac.cn | 200 | C | ISCAS programme to enrol students in open-source projects. |
| World Internet Conference | 世界互联网大会 | Zhejiang | https://www.wicinternet.org | 200 | B | Wuzhen summit; digital commons and open-source forums. |
| Zhongguancun Forum | 中关村论坛 | Beijing | https://www.zgcforum.com | 200 | C | Annual Beijing S&T forum; open-source sessions. |

### media (9)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| Xinhua News Agency | 新华社 | National | https://www.news.cn | 200 | B | State news agency; primary press source for OpenAtom and policy. |
| InfoQ China | InfoQ 中国 | Beijing | https://www.infoq.cn | 200 | B | Tech media; QCon; open-source coverage. |
| IT Home | IT之家 | Shanghai | https://www.ithome.com | 200 | B | Tech news; relays COSR annual report and provincial policy news. |
| People's Daily | 人民日报 | National | http://www.people.com.cn | 200 | B | Party newspaper; policy signalling on self-reliance and open source. |
| QbitAI | 量子位 | Beijing | https://www.qbitai.com | 200 | B | AI media covering open models and openEuler. |
| Synced (Jiqizhixin) | 机器之心 | Beijing | https://www.jiqizhixin.com | 200 | B | AI media covering Chinese open models. |
| 36Kr | 36氪 | Beijing | https://36kr.com | 200 | B | Startup/tech media; open-source company coverage. |
| 51CTO | 51CTO | Beijing | https://www.51cto.com | 200 | B | IT professional community and media. |
| Leiphone | 雷锋网 | Guangdong | https://www.leiphone.com | 200 | B | Tech media on AI and open source. |

### provincial government/department (39)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| Guangdong Provincial People's Government | 广东省人民政府 | Guangdong | https://www.gd.gov.cn | 200 | A | 19 Jun 2026 services-sector plan: speed up open-source ecosystem via the provincial OpenHarmony adaptation centre and build a leading AI open-source community. |
| Hunan Manufacturing Powerhouse Leading Group Office | 湖南省制造强省建设领导小组办公室 | Hunan | https://gxt.hunan.gov.cn | 0 | A | 13 Oct 2026 OpenHarmony implementation plan (Xiang Zhi Zao Qiang Sheng Ban [2026] No.7): 100 demo scenes and 100+ core firms by 2028. |
| Shanghai Municipal People's Government | 上海市人民政府 | Shanghai | https://www.shanghai.gov.cn | 200 | A | Issued 2025-12 Shanghai Plan to Strengthen the Open-Source System (target by 2027: 1-2 internationally influential communities, 100 commercial open-source firms, 200+ projects, 3m developers; up to CNY 20m per basic dev-tool project). |
| Zhejiang Provincial People's Government | 浙江省人民政府 | Zhejiang | https://www.zj.gov.cn | 0 | A | Parent of the Jul 2026 open-source system implementation opinion (7 depts led by Dept of Economy and IT): by 2027, 1-2 globally influential communities, 50+ quality projects, 150+ open-source innovation firms. |
| Beijing Municipal People's Government | 北京市人民政府 | Beijing | https://www.beijing.gov.cn | 200 | A | Hosts policy documents incl. 2023 xinchuang measures (priority funding for open-source software projects). |
| Chongqing Municipal People's Government | 重庆市人民政府 | Chongqing | https://www.cq.gov.cn | 0 | C | Provincial-level city; April 2026 news on open-source/xinchuang referenced in relay archive. |
| Hunan Provincial People's Government | 湖南省人民政府 | Hunan | https://www.hunan.gov.cn | 200 | B | Parent of Oct 2026 OpenHarmony plan. |
| Shanghai Science and Technology Commission | 上海市科学技术委员会 | Shanghai | https://stcsm.sh.gov.cn | 200 | B | Shanghai S&T funding; AI and open-source innovation programmes. |
| Tianjin Municipal People's Government | 天津市人民政府 | Tianjin | https://www.tj.gov.cn | 200 | B | Home of Phytium/Hygon/Kylin xinchuang cluster ("Tianjin Binhai Information Innovation Valley"). |
| Anhui Department of Economy and Information Technology | 安徽省经济和信息化厅 | Anhui | https://jx.ah.gov.cn | 403 | C | Anhui IT department; iFLYTEK base. |
| Beijing Municipal Science and Technology Commission | 北京市科学技术委员会 | Beijing | https://kw.beijing.gov.cn | 200 | C | Beijing S&T funding incl. AI and basic-software projects. |
| Guangdong Department of Science and Technology | 广东省科学技术厅 | Guangdong | https://gdstc.gd.gov.cn | 200 | B | Provincial S&T plans and funding. |
| Hebei Department of Industry and Information Technology | 河北省工业和信息化厅 | Hebei | https://gxt.hebei.gov.cn | 0 | C | Hebei IT department; Shijiazhuang procurement specifying Anolis OS (ccgp-hebei). |
| Hubei Provincial People's Government | 湖北省人民政府 | Hubei | https://www.hubei.gov.cn | 412 | B | Provincial policy; Wuhan hosts UnionTech/deepin and Donghu pilots. |
| Jiangsu Provincial People's Government | 江苏省人民政府 | Jiangsu | https://www.jiangsu.gov.cn | 403 | C | Provincial software and AI policy; no dedicated open-source plan found. |
| Shaanxi Department of Industry and Information Technology | 陕西省工业和信息化厅 | Shaanxi | https://gxt.shaanxi.gov.cn | 0 | C | Shaanxi IT department; Xi'an software hub; Shaanxi procurement requires openEuler compatibility (Pingli archive project). |
| Shandong Department of Industry and Information Technology | 山东省工业和信息化厅 | Shandong | https://gxt.shandong.gov.cn | 0 | C | Shandong IT department; Inspur home province; no open-source plan found. |
| Sichuan Department of Economy and Information Technology | 四川省经济和信息化厅 | Sichuan | https://jxt.sc.gov.cn | 0 | C | Provincial IT department; no dedicated open-source plan found. |
| Tianjin Bureau of Industry and Information Technology | 天津市工业和信息化局 | Tianjin | https://gxj.tj.gov.cn | 0 | C | Tianjin IT department. |
| Zhejiang Department of Science and Technology | 浙江省科学技术厅 | Zhejiang | https://kjt.zj.gov.cn | 0 | C | Provincial S&T plans; co-signatory in open-source coordination. |
| Fujian Department of Industry and Information Technology | 福建省工业和信息化厅 | Fujian | https://gxt.fujian.gov.cn | 200 | C | Fujian IT department; no open-source plan found. |
| Guizhou Department of Industry and Information Technology | 贵州省工业和信息化厅 | Guizhou | https://gxt.guizhou.gov.cn | 0 | C | Guizhou big-data province; no open-source plan found. |
| Henan Department of Industry and Information Technology | 河南省工业和信息化厅 | Henan | https://gxt.henan.gov.cn | 403 | C | Henan IT department; search for 2025-26 open-source plan found none. |
| Jiangsu Department of Science and Technology | 江苏省科学技术厅 | Jiangsu | https://kjt.jiangsu.gov.cn | 0 | C | Provincial S&T plans. |
| Sichuan Provincial People's Government | 四川省人民政府 | Sichuan | https://www.sc.gov.cn | 0 | C | Provincial policy. |
| Gansu Department of Industry and Information Technology | 甘肃省工业和信息化厅 | Gansu | https://gxt.gansu.gov.cn | 412 | C | Gansu IT department; Qingyang compute hub. |
| Guangxi Department of Industry and Information Technology | 广西壮族自治区工业和信息化厅 | Guangxi | https://gxt.gxzf.gov.cn | 0 | C | Guangxi IT department; ASEAN digital cooperation. |
| Hainan Department of Industry and Information Technology | 海南省工业和信息化厅 | Hainan | https://iitb.hainan.gov.cn | 0 | C | Hainan Free Trade Port IT; data cross-border pilot. |
| Heilongjiang Department of Industry and Information Technology | 黑龙江省工业和信息化厅 | Heilongjiang | https://gxt.hlj.gov.cn | 200 | C | Heilongjiang IT department; Harbin Institute of Technology base. |
| Inner Mongolia Department of Industry and Information Technology | 内蒙古自治区工业和信息化厅 | Inner Mongolia | https://gxt.nmg.gov.cn | 403 | C | Hohhot compute-centre region; no open-source plan found. |
| Jiangxi Department of Industry and Information Technology | 江西省工业和信息化厅 | Jiangxi | https://gxt.jiangxi.gov.cn | 0 | C | Jiangxi IT department; Nanchang VR/OpenHarmony. |
| Jilin Department of Industry and Information Technology | 吉林省工业和信息化厅 | Jilin | https://gxt.jl.gov.cn | 200 | C | Jilin IT department. |
| Liaoning Department of Industry and Information Technology | 辽宁省工业和信息化厅 | Liaoning | https://gxt.ln.gov.cn | 200 | C | Liaoning IT department; Shenyang/Dalian software parks. |
| Ningxia Department of Industry and Information Technology | 宁夏回族自治区工业和信息化厅 | Ningxia | https://gxt.nx.gov.cn | 200 | C | Ningxia IT department; Zhongwei data centres. |
| Qinghai Department of Industry and Information Technology | 青海省工业和信息化厅 | Qinghai | https://gxt.qinghai.gov.cn | 0 | C | Qinghai IT department. |
| Shanxi Department of Industry and Information Technology | 山西省工业和信息化厅 | Shanxi | https://gxt.shanxi.gov.cn | 0 | C | Shanxi IT department; no open-source plan found. |
| Tibet Department of Industry and Information Technology | 西藏自治区经济和信息化厅 | Tibet | https://jxt.xizang.gov.cn | 0 | C | Tibet IT department; no open-source activity found. |
| Xinjiang Department of Industry and Information Technology | 新疆维吾尔自治区工业和信息化厅 | Xinjiang | https://gxt.xinjiang.gov.cn | 200 | C | Xinjiang IT department. |
| Yunnan Department of Industry and Information Technology | 云南省工业和信息化厅 | Yunnan | https://gxt.yn.gov.cn | 200 | C | Yunnan IT department. |

### industrial park/zone (11)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| Beijing Economic-Technological Development Area (Yizhuang) | 北京经济技术开发区 | Beijing | https://kfqgw.beijing.gov.cn | 200 | A | Hosts the Beijing International Open Source Community and OpenAtom events; first Open-Source Pioneer Enterprises (Jul 2025). |
| Wuhan East Lake High-tech Zone (Optics Valley) | 武汉东湖新技术开发区 | Hubei | https://www.wehdz.gov.cn | 200 | A | Open-source application pilot: 50% of project spend, cap CNY 1m per pilot-user firm (Yicai report). |
| Beijing Open Source Hub (Beijing International Open Source Community) | 北京国际开源社区 | Beijing | https://www.openatom.org | 200 | A | Yizhuang-based community announced first Open-Source Pioneer Enterprises Jul 2025 and the Yuanchuang Tribe. |
| Chengdu High-tech Zone | 成都高新区 | Sichuan | https://www.cdht.gov.cn | 412 | B | Software park; Tianfu Software Park. |
| Hangzhou Future Sci-Tech City | 杭州未来科技城 | Zhejiang | https://www.hzfstc.gov.cn | 0 | C | Alibaba/ModelScope cluster; AI open-source ecosystem. |
| Zhangjiang Hi-Tech Park (Shanghai) | 张江高科技园区 | Shanghai | https://www.zjpark.com | 200 | C | Shanghai integrated-circuit and AI cluster; open-source chip and AI firms. |
| Zhongguancun Science Park Management Committee | 中关村科技园区管理委员会 | Beijing | https://zgc.beijing.gov.cn | 0 | C | Runs Zhongguancun policies; open-source community support and Zhongguancun Forum. |
| Chongqing Liangjiang New Area | 重庆两江新区 | Chongqing | https://www.liangjiang.gov.cn | 0 | C | Chongqing software/AI cluster; openEuler and OpenHarmony. |
| Lingang New Area (Shanghai) | 临港新片区 | Shanghai | https://www.lingang.gov.cn | 200 | C | Lingang free-trade zone; data and AI open-source pilots. |
| Suzhou Industrial Park Administrative Committee | 苏州工业园区管委会 | Jiangsu | https://www.sipac.gov.cn | 200 | B | SIP software and AI cluster. |
| Xiong'an New Area | 雄安新区管理委员会 | Hebei | https://www.xiongan.gov.cn | 200 | B | Digital twin city; data and OS pilot. |

### district government (10)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| Longgang District Government (Shenzhen) | 深圳市龙岗区人民政府 | Guangdong | https://www.lg.gov.cn | 0 | A | March 2026 ten-point OpenClaw AI-agent subsidy plan; open-source AI hub. |
| Xihu District Government (Hangzhou) | 杭州市西湖区人民政府 | Zhejiang | https://www.hzxh.gov.cn | 0 | C | Aug 2026 compute vouchers CNY 26.85m for AI open-source communities (reported via WeChat relay). |
| Haidian District Government (Beijing) | 北京市海淀区人民政府 | Beijing | https://www.bjhd.gov.cn | 200 | B | Home to Tsinghua/PKU and most open-source firms; AI policy. |
| Longhua District Government (Shenzhen) | 深圳市龙华区人民政府 | Guangdong | https://www.szlhq.gov.cn | 0 | C | HarmonyOS e-government matchmaking (2026). |
| Pudong New Area Government (Shanghai) | 上海市浦东新区人民政府 | Shanghai | https://www.pudong.gov.cn | 412 | B | Hosts Pudong Innovation Forum and Zhangjiang; open-source AI incentives. |
| Yuhang District Government (Hangzhou) | 杭州市余杭区人民政府 | Zhejiang | https://www.yuhang.gov.cn | 0 | C | Home of Alibaba HQ, Future Sci-Tech City, DeepSeek area; AI policies. |
| Futian District Government (Shenzhen) | 深圳市福田区人民政府 | Guangdong | https://www.szft.gov.cn | 0 | C | Shenzhen CBD district; AI and digital policy. |
| Huangpu District Government (Guangzhou) | 广州市黄埔区人民政府 | Guangdong | https://www.hp.gov.cn | 200 | B | Guangzhou development zone; software and AI subsidies. |
| Nanshan District Government (Shenzhen) | 深圳市南山区人民政府 | Guangdong | https://www.szns.gov.cn | 0 | C | Tencent/Huawei-area district; AI incentives. |
| Xuhui District Government (Shanghai) | 上海市徐汇区人民政府 | Shanghai | https://www.xuhui.gov.cn | 200 | B | West Bund AI cluster; Shanghai AI Lab area. |

### municipal government/bureau (24)

| Organisation | Chinese name | Province | Website | HTTP | Ev | Relevance |
|---|---|---|---|---|---|---|
| Hangzhou Municipal Bureau of Economy and Information Technology | 杭州市经济和信息化局 | Zhejiang | https://jxj.hangzhou.gov.cn | 0 | C | Administers the compute-voucher scheme for AI open-source communities. |
| Shenzhen Bureau of Industry and Information Technology | 深圳市工业和信息化局 | Guangdong | https://gxj.sz.gov.cn | 0 | A | Funds key open-source projects within the Software Industry High-Quality Development guide (commercial distribution promotion and terminal OS-chip-module purchase; up to CNY 10m/project in 2024). |
| Changsha Municipal People's Government | 长沙市人民政府 | Hunan | https://www.changsha.gov.cn | 0 | C | Home of Kylin/KylinSec and Talkweb; Kylin xinchuang cluster. |
| Chengdu Municipal People's Government | 成都市人民政府 | Sichuan | https://www.cd.gov.cn | 0 | C | Chengdu software / xinchuang and openEuler ecosystem city. |
| Guangzhou Municipal People's Government | 广州市人民政府 | Guangdong | https://www.gz.gov.cn | 200 | B | Guangzhou AI/software policy and OpenHarmony adaptation. |
| Hefei Municipal People's Government | 合肥市人民政府 | Anhui | https://www.hefei.gov.cn | 0 | C | Hefei AI "Voice Valley" iFLYTEK cluster; USTC. |
| Nanjing Municipal People's Government | 南京市人民政府 | Jiangsu | https://www.nanjing.gov.cn | 403 | B | Software capital; openEuler/xinchuang adopter. |
| Shenzhen Science, Technology and Innovation Commission | 深圳市科技创新委员会 | Guangdong | https://stic.sz.gov.cn | 403 | B | Shenzhen S&T grants incl. AI/OS basic software. |
| Wuhan Municipal Bureau of Economy and Information Technology | 武汉市经济和信息化局 | Hubei | https://jxj.wuhan.gov.cn | 200 | C | Wuhan industrial IT policy. |
| Wuxi Municipal People's Government | 无锡市人民政府 | Jiangsu | https://www.wuxi.gov.cn | 200 | B | Wuxi Hi-Tech Zone OpenClaw ecosystem incentives (2026). |
| Fuzhou Municipal People's Government | 福州市人民政府 | Fujian | https://www.fuzhou.gov.cn | 200 | B | Digital China Summit host city. |
| Guiyang Municipal People's Government | 贵阳市人民政府 | Guizhou | https://www.guiyang.gov.cn | 0 | C | Big Data Expo host; data commons pilots. |
| Jinan Municipal People's Government | 济南市人民政府 | Shandong | https://www.jinan.gov.cn | 200 | B | Jinan software park; Inspur. |
| Ningbo Municipal People's Government | 宁波市人民政府 | Zhejiang | https://www.ningbo.gov.cn | 0 | C | Ningbo AI/open-source policy referenced in Aug 2026 coverage. |
| Suzhou Municipal People's Government | 苏州市人民政府 | Jiangsu | https://www.suzhou.gov.cn | 200 | B | Suzhou AI/open-source support measures. |
| Xi'an Municipal People's Government | 西安市人民政府 | Shaanxi | https://www.xa.gov.cn | 200 | B | Xi'an software new town; xinchuang adopter. |
| Dalian Municipal People's Government | 大连市人民政府 | Liaoning | https://www.dl.gov.cn | 0 | C | Dalian software park hub. |
| Dongguan Municipal People's Government | 东莞市人民政府 | Guangdong | https://www.dg.gov.cn | 0 | C | Manufacturing city; OpenHarmony/industrial software pilots. |
| Kunming Municipal People's Government | 昆明市人民政府 | Yunnan | https://www.km.gov.cn | 0 | C | South Asia gateway; digital cooperation. |
| Nanning Municipal People's Government | 南宁市人民政府 | Guangxi | https://www.nanning.gov.cn | 0 | C | ASEAN Expo host. |
| Qingdao Municipal People's Government | 青岛市人民政府 | Shandong | https://www.qingdao.gov.cn | 0 | C | Qingdao software and OS pilots. |
| Xiamen Municipal People's Government | 厦门市人民政府 | Fujian | https://www.xm.gov.cn | 0 | C | Software park Xiamen; OpenHarmony. |
| Zhengzhou Municipal People's Government | 郑州市人民政府 | Henan | https://www.zhengzhou.gov.cn | 200 | B | Zhengzhou software park; OS/Kylin pilots. |
| Zhuzhou Municipal People's Government | 株洲市人民政府 | Hunan | https://www.zhuzhou.gov.cn | 0 | C | Rail-industry software; OpenHarmony industrial scenes. |

## By province

### National (42)

- AtomGit (AtomGit 代码托管平台) [code/model platform, B]
- CCID Group (CCID Think Tank) (赛迪研究院 / 中国电子信息产业发展研究院) [state think tank/agency, C]
- COSCon (China Open Source Conference) (中国开源年会 COSCon) [event/programme, C]
- Information Technology Application Innovation Working Committee (xinchuang) (信息技术应用创新工作委员会) [alliance/association, C]
- Mulan licence / COSCL (China Open Source Cloud League) (中国开源云联盟 / 木兰开源许可证) [alliance/association, C]
- National Data Administration (国家数据局) [central ministry/agency, B]
- OpenAnolis (Dragon Lizard) community (龙蜥社区) [open-source community, B]
- China Electronics Corporation (CEC) (中国电子信息产业集团) [state-owned enterprise, B]
- China Open Instruction Ecosystem (RISC-V) Alliance (CNRV) (中国开放指令生态（RISC-V）联盟) [alliance/association, C]
- Chinese Academy of Sciences (中国科学院) [central ministry/agency, B]
- GitLink (CCF) (确实开源创新服务平台 GitLink) [code/model platform, B]
- Linux Foundation Asia Pacific (LF China) (Linux基金会亚太/中国) [alliance/association, C]
- National Cybersecurity Standardization TC (TC260) (全国网络安全标准化技术委员会) [standardisation body, B]
- National Information Technology Standardization TC (SAC/TC28) (全国信息技术标准化技术委员会) [standardisation body, C]
- National Natural Science Foundation of China (国家自然科学基金委员会) [funder, B]
- Open Source Promotion Plan (OSPP) (开源之夏) [event/programme, B]
- Standardization Administration of China (国家标准化管理委员会) [standardisation body, B]
- AI Industry Alliance (AIIA) (中国人工智能产业发展联盟) [alliance/association, C]
- CCID Consulting (赛迪顾问) [state think tank/agency, B]
- China Communications Standards Association (中国通信标准化协会) [standardisation body, B]
- China Computer Federation (CCF) (中国计算机学会) [alliance/association, B]
- China Information Technology Security Evaluation Center (中国信息安全测评中心) [state think tank/agency, C]
- China RISC-V Industry Consortium (CRVIC) (中国RISC-V产业联盟) [alliance/association, C]
- China Software Industry Association (中国软件行业协会) [alliance/association, B]
- China Software Testing Center (CSTC) (中国软件评测中心) [state think tank/agency, C]
- China Telecom (中国电信) [state-owned enterprise, B]
- China Unicom (中国联通) [state-owned enterprise, C]
- Chinese Academy of Engineering (中国工程院) [state think tank/agency, B]
- CNCERT/CC (国家计算机网络应急技术处理协调中心) [state think tank/agency, B]
- Dromara open-source community (Dromara 开源社区) [open-source community, B]
- Internet Society of China (中国互联网协会) [alliance/association, B]
- Ministry of Education (教育部) [central ministry/agency, B]
- Open-source Supply Chain Lighting Plan (开源软件供应链点亮计划) [event/programme, C]
- Xinhua News Agency (新华社) [media, B]
- China Electronics Technology Group (中国电子科技集团) [state-owned enterprise, B]
- China Institute of Communications (中国通信学会) [alliance/association, C]
- China Internet Network Information Center (中国互联网络信息中心) [state think tank/agency, B]
- China National Intellectual Property Administration (国家知识产权局) [central ministry/agency, B]
- Chinese Institute of Electronics (中国电子学会) [alliance/association, B]
- National Copyright Administration of China (国家版权局) [central ministry/agency, B]
- People's Daily (人民日报) [media, B]
- State Grid Corporation of China (国家电网) [state-owned enterprise, C]

### Anhui (4)

- Anhui Department of Economy and Information Technology (安徽省经济和信息化厅) [provincial government/department, C]
- Hefei Municipal People's Government (合肥市人民政府) [municipal government/bureau, C]
- iFLYTEK (科大讯飞) [company, B]
- University of Science and Technology of China (中国科学技术大学) [university, B]

### Beijing (47)

- Beijing Academy of Artificial Intelligence (BAAI) (北京智源人工智能研究院) [research lab, B]
- Beijing Economic-Technological Development Area (Yizhuang) (北京经济技术开发区) [industrial park/zone, A]
- Beijing Institute of Open Source Chip (BOSC) (北京开源芯片研究院) [research lab, B]
- Beijing Municipal People's Government (北京市人民政府) [provincial government/department, A]
- Beijing Open Source Hub (Beijing International Open Source Community) (北京国际开源社区) [industrial park/zone, A]
- CSDN (CSDN) [code/model platform, B]
- GitCode / CSDN (GitCode / CSDN) [code/model platform, B]
- Loongson Technology (龙芯中科) [company, B]
- Moonshot AI (Kimi) (月之暗面) [company, B]
- PaddlePaddle community (飞桨社区) [open-source community, B]
- PLCT Lab (ISCAS) (中科院软件所 PLCT 实验室) [research lab, B]
- Zhipu AI (Z.ai) (智谱AI) [company, C]
- Beihang University (北京航空航天大学) [university, B]
- Beijing Municipal Science and Technology Commission (北京市科学技术委员会) [provincial government/department, C]
- FIT2CLOUD (飞致云) [company, B]
- Haidian District Government (Beijing) (北京市海淀区人民政府) [district government, B]
- Institute of Computing Technology, CAS (中国科学院计算技术研究所) [research lab, B]
- SiliconFlow (硅基流动) [company, B]
- Tsinghua KEG Lab (清华大学知识工程实验室 KEG) [research lab, B]
- Zhongguancun Science Park Management Committee (中关村科技园区管理委员会) [industrial park/zone, C]
- 01.AI (零一万物) [company, B]
- Baichuan AI (百川智能) [company, B]
- Beijing Institute of Technology (北京理工大学) [university, B]
- Beijing University of Posts and Telecommunications (北京邮电大学) [university, B]
- Digital China (神州数码) [company, B]
- InfoQ China (InfoQ 中国) [media, B]
- Institute for AI Industry Research (AIR), Tsinghua (清华大学智能产业研究院) [research lab, B]
- Institute of Information Engineering, CAS (中国科学院信息工程研究所) [research lab, B]
- JD.com (京东) [company, B]
- Meituan (美团) [company, B]
- QbitAI (量子位) [media, B]
- Qihoo 360 (奇虎360) [company, B]
- Renmin University of China (中国人民大学) [university, B]
- SelectDB (SelectDB) [company, B]
- Sugon (Dawning) (中科曙光) [company, B]
- Synced (Jiqizhixin) (机器之心) [media, B]
- Volcengine (ByteDance) (火山引擎) [company, B]
- Xiaomi (小米) [company, B]
- Zhongguancun Forum (中关村论坛) [event/programme, C]
- Zhongguancun Laboratory (中关村实验室) [research lab, C]
- 36Kr (36氪) [media, B]
- 51CTO (51CTO) [media, B]
- Juejin (ByteDance) (稀土掘金) [code/model platform, B]
- Kuaishou (快手) [company, B]
- Megvii (旷视科技) [company, B]
- SegmentFault (思否 SegmentFault) [code/model platform, C]
- Yonyou (用友) [company, B]

### Chongqing (3)

- Chongqing Municipal People's Government (重庆市人民政府) [provincial government/department, C]
- Chongqing Liangjiang New Area (重庆两江新区) [industrial park/zone, C]
- Chongqing University (重庆大学) [university, B]

### Fujian (6)

- Fujian Department of Industry and Information Technology (福建省工业和信息化厅) [provincial government/department, C]
- Fuzhou Municipal People's Government (福州市人民政府) [municipal government/bureau, B]
- Fuzhou University (福州大学) [university, B]
- Rockchip (瑞芯微) [company, C]
- Xiamen Municipal People's Government (厦门市人民政府) [municipal government/bureau, C]
- Xiamen University (厦门大学) [university, B]

### Gansu (2)

- Gansu Department of Industry and Information Technology (甘肃省工业和信息化厅) [provincial government/department, C]
- Lanzhou University (兰州大学) [university, B]

### Guangdong (26)

- Guangdong Provincial People's Government (广东省人民政府) [provincial government/department, A]
- Shenzhen Bureau of Industry and Information Technology (深圳市工业和信息化局) [municipal government/bureau, A]
- Longgang District Government (Shenzhen) (深圳市龙岗区人民政府) [district government, A]
- MindSpore community (昇思 MindSpore 社区) [open-source community, B]
- OpenCloudOS community (OpenCloudOS 社区) [open-source community, B]
- Peng Cheng Laboratory (鹏城实验室) [research lab, B]
- ChinaSoft International (中软国际) [company, B]
- Guangdong Department of Science and Technology (广东省科学技术厅) [provincial government/department, B]
- Guangzhou Municipal People's Government (广州市人民政府) [municipal government/bureau, B]
- Huawei Cloud (华为云) [company, B]
- Huawei Developer Conference (HDC) (华为开发者大会) [event/programme, B]
- KaihongOS (Shenzhen Kaihong Digital) (深开鸿) [company, C]
- Longhua District Government (Shenzhen) (深圳市龙华区人民政府) [district government, C]
- OpenI Qizhi AI platform (启智社区 OpenI) [code/model platform, C]
- Shenzhen Science, Technology and Innovation Commission (深圳市科技创新委员会) [municipal government/bureau, B]
- Futian District Government (Shenzhen) (深圳市福田区人民政府) [district government, C]
- Huangpu District Government (Guangzhou) (广州市黄埔区人民政府) [district government, B]
- Nanshan District Government (Shenzhen) (深圳市南山区人民政府) [district government, C]
- Shenzhen Institute of Advanced Technology (CAS) (中国科学院深圳先进技术研究院) [research lab, B]
- Southern University of Science and Technology (南方科技大学) [university, B]
- Sun Yat-sen University (中山大学) [university, B]
- Tencent Cloud (TencentOS) (腾讯云 TencentOS) [company, B]
- Dongguan Municipal People's Government (东莞市人民政府) [municipal government/bureau, C]
- Kingdee (金蝶) [company, B]
- Leiphone (雷锋网) [media, B]
- Sangfor (深信服) [company, B]

### Guangxi (3)

- Guangxi Department of Industry and Information Technology (广西壮族自治区工业和信息化厅) [provincial government/department, C]
- Guangxi University (广西大学) [university, B]
- Nanning Municipal People's Government (南宁市人民政府) [municipal government/bureau, C]

### Guizhou (3)

- Guiyang Municipal People's Government (贵阳市人民政府) [municipal government/bureau, C]
- Guizhou Department of Industry and Information Technology (贵州省工业和信息化厅) [provincial government/department, C]
- Guizhou University (贵州大学) [university, B]

### Hainan (2)

- Hainan Department of Industry and Information Technology (海南省工业和信息化厅) [provincial government/department, C]
- Hainan University (海南大学) [university, B]

### Hebei (3)

- Hebei Department of Industry and Information Technology (河北省工业和信息化厅) [provincial government/department, C]
- Xiong'an New Area (雄安新区管理委员会) [industrial park/zone, B]
- Hebei University of Technology (河北工业大学) [university, B]

### Heilongjiang (3)

- Harbin Institute of Technology (哈尔滨工业大学) [university, B]
- Heilongjiang Department of Industry and Information Technology (黑龙江省工业和信息化厅) [provincial government/department, C]
- Heilongjiang University (黑龙江大学) [university, B]

### Henan (3)

- Henan Department of Industry and Information Technology (河南省工业和信息化厅) [provincial government/department, C]
- Zhengzhou Municipal People's Government (郑州市人民政府) [municipal government/bureau, B]
- Zhengzhou University (郑州大学) [university, B]

### Hubei (7)

- deepin community / UnionTech (深度社区 / 统信软件) [open-source community, B]
- UnionTech Software (UOS) (统信软件) [company, C]
- Wuhan East Lake High-tech Zone (Optics Valley) (武汉东湖新技术开发区) [industrial park/zone, A]
- Huazhong University of Science and Technology (华中科技大学) [university, B]
- Hubei Provincial People's Government (湖北省人民政府) [provincial government/department, B]
- Wuhan Municipal Bureau of Economy and Information Technology (武汉市经济和信息化局) [municipal government/bureau, C]
- Wuhan University (武汉大学) [university, B]

### Hunan (9)

- Hunan Manufacturing Powerhouse Leading Group Office (湖南省制造强省建设领导小组办公室) [provincial government/department, A]
- Changsha Municipal People's Government (长沙市人民政府) [municipal government/bureau, C]
- Hunan Provincial People's Government (湖南省人民政府) [provincial government/department, B]
- National University of Defense Technology (国防科技大学) [university, B]
- KylinSec (麒麟信安) [company, C]
- Talkweb (拓维信息) [company, C]
- Hunan University (湖南大学) [university, B]
- Central South University (中南大学) [university, B]
- Zhuzhou Municipal People's Government (株洲市人民政府) [municipal government/bureau, C]

### Inner Mongolia (2)

- Inner Mongolia Department of Industry and Information Technology (内蒙古自治区工业和信息化厅) [provincial government/department, C]
- Inner Mongolia University (内蒙古大学) [university, B]

### Jiangsu (10)

- Hoperun Software (润和软件) [company, C]
- Jiangsu Provincial People's Government (江苏省人民政府) [provincial government/department, C]
- LangGenius (Dify) (LangGenius / Dify) [company, B]
- Nanjing Municipal People's Government (南京市人民政府) [municipal government/bureau, B]
- Nanjing University (南京大学) [university, B]
- Wuxi Municipal People's Government (无锡市人民政府) [municipal government/bureau, B]
- Jiangsu Department of Science and Technology (江苏省科学技术厅) [provincial government/department, C]
- Suzhou Industrial Park Administrative Committee (苏州工业园区管委会) [industrial park/zone, B]
- Suzhou Municipal People's Government (苏州市人民政府) [municipal government/bureau, B]
- Southeast University (东南大学) [university, B]

### Jiangxi (2)

- Jiangxi Department of Industry and Information Technology (江西省工业和信息化厅) [provincial government/department, C]
- Nanchang University (南昌大学) [university, B]

### Jilin (2)

- Jilin Department of Industry and Information Technology (吉林省工业和信息化厅) [provincial government/department, C]
- Jilin University (吉林大学) [university, B]

### Liaoning (3)

- Dalian Municipal People's Government (大连市人民政府) [municipal government/bureau, C]
- Dalian University of Technology (大连理工大学) [university, C]
- Liaoning Department of Industry and Information Technology (辽宁省工业和信息化厅) [provincial government/department, C]

### Ningxia (2)

- Ningxia Department of Industry and Information Technology (宁夏回族自治区工业和信息化厅) [provincial government/department, C]
- Ningxia University (宁夏大学) [university, B]

### Qinghai (2)

- Qinghai Department of Industry and Information Technology (青海省工业和信息化厅) [provincial government/department, C]
- Qinghai University (青海大学) [university, B]

### Shaanxi (4)

- Shaanxi Department of Industry and Information Technology (陕西省工业和信息化厅) [provincial government/department, C]
- Xi'an Jiaotong University (西安交通大学) [university, B]
- Xi'an Municipal People's Government (西安市人民政府) [municipal government/bureau, B]
- Northwestern Polytechnical University (西北工业大学) [university, B]

### Shandong (5)

- Inspur (浪潮) [company, B]
- Shandong Department of Industry and Information Technology (山东省工业和信息化厅) [provincial government/department, C]
- Jinan Municipal People's Government (济南市人民政府) [municipal government/bureau, B]
- Qingdao Municipal People's Government (青岛市人民政府) [municipal government/bureau, C]
- Shandong University (山东大学) [university, B]

### Shanghai (23)

- Shanghai AI Laboratory (上海人工智能实验室) [research lab, B]
- Shanghai Municipal People's Government (上海市人民政府) [provincial government/department, A]
- OpenDigger / OpenRank (X-lab) (OpenDigger 开源数据洞察) [open-source community, B]
- Shanghai Jiao Tong University (上海交通大学) [university, B]
- Shanghai Science and Technology Commission (上海市科学技术委员会) [provincial government/department, B]
- World Artificial Intelligence Conference (世界人工智能大会 WAIC) [event/programme, B]
- DaoCloud (DaoCloud 道客) [company, B]
- Espressif Systems (乐鑫科技) [company, B]
- MiniMax (MiniMax 稀宇科技) [company, B]
- Pudong New Area Government (Shanghai) (上海市浦东新区人民政府) [district government, B]
- Shanghai Innovation Institute (上海创智学院) [research lab, C]
- Zhangjiang Hi-Tech Park (Shanghai) (张江高科技园区) [industrial park/zone, C]
- Zilliz (Zilliz) [company, B]
- AgiBot (智元机器人) [company, B]
- China Standard Software (NeoKylin) (中标软件) [company, C]
- InfiniFlow (RAGFlow) (InfiniFlow) [company, B]
- IT Home (IT之家) [media, B]
- Lingang New Area (Shanghai) (临港新片区) [industrial park/zone, C]
- SenseTime (商汤科技) [company, B]
- StepFun (阶跃星辰) [company, B]
- Xuhui District Government (Shanghai) (上海市徐汇区人民政府) [district government, B]
- Zhaoxin Semiconductor (兆芯) [company, B]
- Qiniu Cloud (七牛云) [company, B]

### Shanxi (2)

- Shanxi Department of Industry and Information Technology (山西省工业和信息化厅) [provincial government/department, C]
- Shanxi University (山西大学) [university, B]

### Sichuan (6)

- Chengdu High-tech Zone (成都高新区) [industrial park/zone, B]
- Chengdu Municipal People's Government (成都市人民政府) [municipal government/bureau, C]
- Sichuan Department of Economy and Information Technology (四川省经济和信息化厅) [provincial government/department, C]
- Sichuan Provincial People's Government (四川省人民政府) [provincial government/department, C]
- Sichuan University (四川大学) [university, C]
- University of Electronic Science and Technology of China (电子科技大学) [university, B]

### Tianjin (6)

- Tianjin Municipal People's Government (天津市人民政府) [provincial government/department, B]
- Hygon Information Technology (海光信息) [company, B]
- Phytium Technology (飞腾信息技术) [company, B]
- Tianjin Bureau of Industry and Information Technology (天津市工业和信息化局) [provincial government/department, C]
- Nankai University (南开大学) [university, B]
- Tianjin University (天津大学) [university, B]

### Tibet (2)

- Tibet Department of Industry and Information Technology (西藏自治区经济和信息化厅) [provincial government/department, C]
- Tibet University (西藏大学) [university, B]

### Xinjiang (2)

- Xinjiang Department of Industry and Information Technology (新疆维吾尔自治区工业和信息化厅) [provincial government/department, C]
- Xinjiang University (新疆大学) [university, B]

### Yunnan (3)

- Kunming Municipal People's Government (昆明市人民政府) [municipal government/bureau, C]
- Yunnan Department of Industry and Information Technology (云南省工业和信息化厅) [provincial government/department, C]
- Yunnan University (云南大学) [university, B]

### Zhejiang (20)

- DeepSeek (深度求索 DeepSeek) [company, B]
- Hangzhou Municipal Bureau of Economy and Information Technology (杭州市经济和信息化局) [municipal government/bureau, C]
- ModelScope (魔搭社区 ModelScope) [code/model platform, B]
- Zhejiang Provincial People's Government (浙江省人民政府) [provincial government/department, A]
- Alibaba Cloud (Alinux / Tongyi) (阿里云) [company, B]
- Ant Group (蚂蚁集团) [company, B]
- GOSIM (GOSIM 全球开源创新汇) [event/programme, C]
- Xihu District Government (Hangzhou) (杭州市西湖区人民政府) [district government, C]
- Zhejiang University (浙江大学) [university, B]
- Alibaba Cloud Apsara Conference (云栖大会) [event/programme, B]
- Hangzhou Future Sci-Tech City (杭州未来科技城) [industrial park/zone, C]
- OceanBase (Ant Group) (OceanBase) [company, B]
- World Internet Conference (世界互联网大会) [event/programme, B]
- Yuhang District Government (Hangzhou) (杭州市余杭区人民政府) [district government, C]
- Zhejiang Department of Science and Technology (浙江省科学技术厅) [provincial government/department, C]
- Zhejiang Lab (之江实验室) [research lab, B]
- Ningbo Municipal People's Government (宁波市人民政府) [municipal government/bureau, C]
- Unitree Robotics (宇树科技) [company, B]
- Westlake University (西湖大学) [university, B]
- NetEase (网易) [company, C]

## Projects and publications attached

- **CCID Group (CCID Think Tank)**: pub 中国开源发展蓝皮书（2025） <https://gitcode.com/choss_skw/2025book> (2025)
- **Loongson Technology**: project LoongArch documentation and upstream ports <https://loongson.github.io/LoongArch-Documentation/> (2021)
- **Beijing Institute of Open Source Chip (BOSC)**: project XiangShan RISC-V CPU <https://github.com/OpenXiangShan/XiangShan> (2020)
- **PLCT Lab (ISCAS)**: project RuyiSDK <https://ruyisdk.org> (2023)
- **Beijing Academy of Artificial Intelligence (BAAI)**: project FlagOpen / FlagEmbedding (BGE) <https://github.com/FlagOpen/FlagEmbedding> (2023); project Aquila / FlagEval <https://github.com/FlagAI-Open/FlagAI> (2023)
- **Shanghai AI Laboratory**: project InternLM <https://github.com/InternLM/InternLM> (2023); project OpenCompass <https://opencompass.org.cn> (2023); project OpenDataLab <https://opendatalab.com> (2022)
- **Mulan licence / COSCL (China Open Source Cloud League)**: project Mulan PSL v2 <https://license.coscl.org.cn/MulanPSL2> (2020)
- **OpenAnolis (Dragon Lizard) community**: project Anolis OS <https://openanolis.cn> (2021)
- **deepin community / UnionTech**: project deepin / DDE <https://github.com/linuxdeepin> (2004)
- **AtomGit**: project G-Star programme <https://atomgit.com/g-star/rank> (2025)
- **ModelScope**: project ModelScope library <https://github.com/modelscope/modelscope> (2022)
- **PaddlePaddle community**: project PaddlePaddle <https://github.com/PaddlePaddle/Paddle> (2016)
- **MindSpore community**: project MindSpore <https://gitee.com/mindspore/mindspore> (2020)
- **OpenDigger / OpenRank (X-lab)**: project OpenDigger <https://github.com/X-lab2017/open-digger> (2021)
- **Open Source Promotion Plan (OSPP)**: project Open Source Promotion Plan <https://summer-ospp.ac.cn> (2020)
- **GOSIM**: project GOSIM Hangzhou / Paris <https://gosim.org> (2025)
- **Huawei Developer Conference (HDC)**: project Huawei Developer Conference <https://developer.huawei.com> (2025)
- **Zilliz**: project Milvus <https://github.com/milvus-io/milvus> (2019)
- **OceanBase (Ant Group)**: project OceanBase <https://github.com/oceanbase/oceanbase> (2021)
- **FIT2CLOUD**: project 1Panel <https://github.com/1Panel-dev/1Panel> (2022)
- **LangGenius (Dify)**: project Dify <https://github.com/langgenius/dify> (2023)
- **InfiniFlow (RAGFlow)**: project RAGFlow <https://github.com/infiniflow/ragflow> (2024)
- **DeepSeek**: project DeepSeek-V3 <https://github.com/deepseek-ai/DeepSeek-V3> (2024); project DeepSeek-R1 <https://github.com/deepseek-ai/DeepSeek-R1> (2025)
- **Moonshot AI (Kimi)**: project Kimi K2 <https://github.com/MoonshotAI/Kimi-K2> (2025)
- **Zhipu AI (Z.ai)**: project GLM-4 series <https://github.com/THUDM/GLM-4> (2024)
- **MiniMax**: project MiniMax-M <https://github.com/MiniMax-AI> (2025)
- **StepFun**: project Step models <https://github.com/stepfun-ai> (2025)
- **01.AI**: project Yi <https://github.com/01-ai/Yi> (2023)
- **Baichuan AI**: project Baichuan 2 <https://github.com/baichuan-inc/Baichuan2> (2023)
- **Xiaomi**: project MiMo <https://github.com/XiaomiMiMo> (2025)
- **Meituan**: project LongCat <https://github.com/meituan-longcat> (2025)
- **Ant Group**: project Ant Design <https://github.com/ant-design/ant-design> (2015)
- **SenseTime**: project OpenMMLab <https://openmmlab.com> (2018)
- **Megvii**: project MegEngine <https://github.com/MegEngine/MegEngine> (2020)
- **Espressif Systems**: project ESP-IDF <https://github.com/espressif/esp-idf> (2016)
- **Beijing Municipal People's Government**: pub 北京市开源生态体系建设实施方案（2026—2028年） <https://cs.com.cn/cj2020/202512/t20251225_6530175.html> (2025)
- **Beijing Economic-Technological Development Area (Yizhuang)**: project Beijing International Open Source Community and Yuanchuang Tribe (2025)
- **Shanghai Municipal People's Government**: pub 上海市加强开源体系建设实施方案 <https://english.shanghai.gov.cn/en-PolicyInsights/20251226/099a08e0944147d69b02c9ca4704230e.html> (2025)
- **Shenzhen Bureau of Industry and Information Technology**: pub 2026年软件产业高质量发展项目（第一批）申请指南 (2025)
- **Longgang District Government (Shenzhen)**: project Ten OpenClaw AI-agent measures <https://cntechpost.com/2026/03/09/chinese-local-governments-subsidies-attract-openclaw-developers> (2026)
- **Guangdong Provincial People's Government**: pub 广东省服务业扩能提质方案 <https://www.ithome.com/0/966/519.htm> (2026)
- **Zhejiang Provincial People's Government**: pub 浙江省开源体系建设实施意见 (2026)
- **Hangzhou Municipal Bureau of Economy and Information Technology**: project Compute vouchers for AI open-source communities (2026)
- **Hunan Manufacturing Powerhouse Leading Group Office**: pub 湖南省开源鸿蒙专项实施方案（湘制造强省办〔2026〕7号） <https://news.qq.com/rain/a/20261014A08SQL00> (2026)

## Gaps

- Provinces with no open-source plan found (search only): Sichuan, Fujian, Shandong, Henan, Jiangsu, Hubei (province level), Anhui, Shaanxi, Tianjin, Hebei, Chongqing and all western/north-eastern units. Need a VPN pass on each provincial 工信厅 site.
- Not covered: company OSPOs with their own site (Huawei, Alibaba, Tencent, Baidu, ByteDance, covered in existing records), LUG groups other than USTC, local open-source associations (e.g. Shenzhen, Chengdu), COSCon sub-communities, Gitee/AtomGit organisation lists, G-Star and GVP lists.
- Publications: white papers (CAICT, CCID, COPU, KAIYUANSHE, OpenAtom annual reports) are known but their links were not fetched; add them from the existing landscape notes after VPN.
- University entries beyond the top ~25 are generic placeholders (priority 5): none has a verified open-source programme yet.
- Contacts: only official homepages are recorded.
