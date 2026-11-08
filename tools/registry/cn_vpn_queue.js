'use strict';
// Appends the Chinese official sources that are NOT reachable from outside China (or are captcha/login gated) and that
// would give the authoritative project lists (MOST key R&D, NSFC, MIIT, provincial S&T bureaux) to data/cn_vpn_needed.txt.
const L = require('./lib');
const Q = [
  ['https://service.most.gov.cn/', 'MOST public-service platform: key R&D programme project approval notices (立项公示) - project titles, lead units, budgets; filter for 开源/软件'],
  ['https://www.most.gov.cn/tztg/', 'MOST notices: 国家重点研发计划 重点专项 立项公示 lists (software / OS / chip / AI special programmes)'],
  ['https://isisn.nsfc.gov.cn/egrantindex/funcindex/prjsearch-list', 'NSFC project database (grant no., title, amount, institution) - query 开源 / 操作系统 / 软件; captcha-gated'],
  ['https://www.miit.gov.cn/jgsj/kjs/', 'MIIT S&T dept: 产业基础再造 / 工业软件 / 开源 project lists and 开源 pilot notices'],
  ['https://www.cas.cn/', 'CAS strategic priority programme (A/B/C class) project lists incl. RISC-V / OS / XiangShan'],
  ['https://www.nstrs.cn/', 'National S&T report service: final reports of funded projects (software outcomes)'],
  ['https://kw.beijing.gov.cn/', 'Beijing S&T Commission: open-source related project funding notices / 开源 lists'],
  ['https://stcsm.sh.gov.cn/', 'Shanghai S&T Commission: 开源 / software project approval notices'],
  ['https://kjt.zj.gov.cn/', 'Zhejiang S&T Dept: key R&D "尖兵领雁" project lists'],
  ['https://gdstc.gd.gov.cn/', 'Guangdong S&T Dept: key-area R&D programme lists (software / OS / chips)'],
  ['https://kjt.jiangsu.gov.cn/', 'Jiangsu S&T Dept: key R&D / basic-research project lists'],
  ['https://kjt.hubei.gov.cn/', 'Hubei S&T Dept: 开源 / OS project lists'],
  ['https://kjt.sc.gov.cn/', 'Sichuan S&T Dept: software / OS project lists'],
  ['https://stic.sz.gov.cn/', 'Shenzhen S&T Innovation Commission: 开源 project funding lists (e.g. OpenHarmony / RISC-V)'],
  ['https://kjj.hangzhou.gov.cn/', 'Hangzhou S&T Bureau: 开源 incubation / excellent-project funding lists'],
  ['https://kjj.wuhan.gov.cn/', 'Wuhan S&T Bureau: 开源 project lists (East Lake zone rules)'],
  ['https://kjj.cq.gov.cn/', 'Chongqing S&T Bureau: OS / software project lists'],
  ['https://www.gov.cn/zhengce/', 'State Council / ministry open-source policy texts that name funded projects'],
];
L.appendVpn(Q);
console.log("queued", Q.length, "URLs in data/cn_vpn_needed.txt");
