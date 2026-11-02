# DeepSeek (web chat, free, Search on) — 2 Nov 2026
Task: Chinese PA deployments of openEuler/openKylin/OpenHarmony with .gov.cn sources; government code-sharing platform?
Chat: https://chat.deepseek.com/a/chat/s/b6d03ab7-efc8-473e-a5e8-e5b9b113eaac
Prompt: ZH (see llm-runs.tsv). Output summary (verbatim key points, unverified LLM output):

- Found NO case meeting "named body + openEuler/openKylin/OpenHarmony + .gov.cn + deployed". Explicitly declined to invent.
- China Telecom (central SOE, not government) runs openEuler at scale since 2021 — non-.gov.cn sources.
- Key explanation: governments deploy *commercial distributions* (Kylin OS 麒麟, UOS 统信) built on openEuler/open kernels; official pages name the distribution, not the upstream project → this is why upstream-named cases are rare.
- Provincial 政务云 tenders often name 麒麟/统信 (procurement ≠ deployment).
- No national government code-sharing platform equivalent to code.europa.eu / code.overheid.nl; only internal departmental repos (not public).
- Suggested evidence route: .gov.cn public resource trading platforms (采购/中标公告) and provincial big-data bureau white papers, labelled "procurement/plan".

Assessment (Claude): consistent with our round-4 finding (no named body running upstream openEuler/openKylin). New hypothesis to test: count deployments of openEuler-based distributions (Kylin/UOS) as "derived reuse" with explicit labelling.
