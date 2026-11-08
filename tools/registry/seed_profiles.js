'use strict';
// Seed: the 34 deep project profiles in data/project-funding.json -> registry records (id profile-<id>).
// public_money=false profiles are kept as documented controls (funder_level 'foundation', amount_type unknown).
const fs = require('fs'), path = require('path');
const L = require('./lib');
const prof = JSON.parse(fs.readFileSync(path.join(L.ROOT, 'data', 'project-funding.json'), 'utf8'));
const REPO = { openharmony: 'https://gitee.com/openharmony', openeuler: 'https://gitee.com/openeuler', openanolis: 'https://gitee.com/anolis', opencloudos: 'https://github.com/OpenCloudOS', paddlepaddle: 'https://github.com/PaddlePaddle/Paddle', mindspore: 'https://gitee.com/mindspore/mindspore', qwen: 'https://github.com/QwenLM/Qwen', deepseek: 'https://github.com/deepseek-ai', 'apache-doris': 'https://github.com/apache/doris', 'apache-echarts': 'https://github.com/apache/echarts', 'apache-dubbo': 'https://github.com/apache/dubbo', 'apache-rocketmq': 'https://github.com/apache/rocketmq', 'apache-apisix': 'https://github.com/apache/apisix', tidb: 'https://github.com/pingcap/tidb', dify: 'https://github.com/langgenius/dify', xiangshan: 'https://github.com/OpenXiangShan/XiangShan', 'ant-design': 'https://github.com/ant-design/ant-design', kubesphere: 'https://github.com/kubesphere/kubesphere', 'eclipse-sdv-tractus-x': 'https://github.com/eclipse-tractusx', 'sovereign-cloud-stack': 'https://github.com/SovereignCloudStack', nextcloud: 'https://github.com/nextcloud/server', 'libreoffice-tdf': 'https://github.com/LibreOffice/core', 'open-xchange': 'https://github.com/open-xchange', openeurollm: 'https://github.com/OpenEuroLLM', mistral: 'https://github.com/mistralai', videolan: 'https://code.videolan.org/videolan/vlc', matrix: 'https://github.com/element-hq/synapse', kde: 'https://invent.kde.org/', qt: 'https://code.qt.io/', opensuse: 'https://github.com/openSUSE', curl: 'https://github.com/curl/curl', gnupg: 'https://dev.gnupg.org/', openssl: 'https://github.com/openssl/openssl', 'dare-openhw': 'https://github.com/openhwgroup' };
const COUNTRY = { DE: 'Germany', FR: 'France', UK: 'United Kingdom', EU: 'EU', CN: 'China', FI: 'Finland', SE: 'Sweden', CH: 'Switzerland', LU: 'Luxembourg' };
const recs = prof.map((p) => {
  const r = L.blank();
  const pg = (p.funding_channels && p.funding_channels.public_grants) || {};
  const nat = String(p.funder_nationality || '').split(/[ /(]/)[0];
  r.id = 'profile-' + p.id; r.name = p.name; r.side = p.side;
  r.country = COUNTRY[nat] || (p.side === 'CN' ? 'China' : '');
  if (!p.public_money) r.funder_level = 'foundation';
  else if (p.side === 'CN') r.funder_level = /subsid|Shenzhen|Wuhan|Beijing/i.test(pg.claim || '') ? 'CN-city' : 'CN-central';
  else r.funder_level = nat === 'EU' ? 'EU' : 'member-state';
  r.funder = p.top_funder || ''; r.programme = L.trunc(pg.claim || '', 240);
  r.description = L.trunc(`Deep profile (see data/project-funding.json). Host: ${p.host}. Dominant funding channel: ${p.dominant_channel}. Public money involved: ${p.public_money ? 'yes' : 'no / not found'}.`, 320);
  r.domain = L.classify(p.name + ' ' + p.host + ' ' + (pg.claim || ''));
  r.repo_url = REPO[p.id] || ''; r.licence = p.licence || ''; r.status = 'active';
  r.sources = (p.sources || []).map((s) => ({ url: s.url, accessed: s.accessed }));
  r.evidence = p.evidence || 'B';
  r.public_money = !!p.public_money;
  r.profile_ref = 'data/project-funding.json#' + p.id;
  return r;
});
L.upsert(recs, 'seed_profiles');
