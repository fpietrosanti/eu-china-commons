# tools/registry - harvesters for the open-source funding registry

Output: `data/registry/projects.json` (schema: `data/registry/SCHEMA.md`). Overview and findings: `docs/REGISTRY.md`.

All scripts are plain Node (>= 18, no npm dependencies), UTF-8, idempotent. Each harvester **merges by `id`**: new ids are
added with `first_seen`, known ids get refreshed fields and `last_checked`; empty harvested values never erase existing data;
nothing is ever deleted (use `status` / `repo_http`). Raw downloads are cached in `tools/registry/.cache/` (git-ignore it;
CORDIS zips are ~100 MB). Politeness: concurrency <= 5 (mostly 3-4), 200-300 ms delay, User-Agent identifies the project.
Harvesters may run side by side: the final read-merge-write of `projects.json` is protected by a lock file (`projects.json.lock`, stale after 2 min). E-mail addresses are redacted on write. Use the Write/Edit tools or a file for regexes in shell heredocs: some shells collapse backslashes.

| script | source | records | cadence | notes |
|---|---|---|---|---|
| `nlnet.js` | nlnet.nl/project/ index + ~1,860 project pages | NGI / NLnet funded projects (EU) | monthly | ~8 min cold, seconds from cache; `--refresh` re-downloads pages; `--limit N` for tests |
| `sta.js` | sovereign.tech/tech (+ project pages) | Sovereign Tech Agency investments with amounts | monthly | |
| `cordis.js` | cordis.europa.eu/data (H2020 + Horizon Europe CSV bulk) | EU projects whose CORDIS text mentions open source or that link a code forge | after each CORDIS release (~monthly) | downloads ~90 MB; one child process per dataset (memory) |
| `zenodo.js` | zenodo.org/api/records (open software records with funder metadata) | EC (H2020/HE/FP7), SNSF, DFG, ANR, UKRI, FWF, RCN and Chinese funders (NSFC, CAS, MOST, provincial) as declared by depositors; collapsed per repository+grant | quarterly | anonymous API: 25 records/page, ~1.2 s/request; date windows keep queries small; ~25 min for everything; `--only ec,cn,...` |
| `developers_italia.js` | api.developers.italia.it/v1/software (publiccode.yml) | Italian PA software catalogue | monthly | |
| `codegouv.js` | code.gouv.fr/data/repositories.json | French public-sector repos (licensed, non-fork, >=5 stars or publiccode or gov forge) | quarterly | upstream snapshot is stale (mid-2024) |
| `opencode_de.js` | gitlab.opencode.de API (ZenDiS openCoDE) | German public-sector group projects | monthly | ~40 API pages; personal namespaces skipped |
| `code_overheid_nl.js` | code.overheid.nl Gitea API | Dutch government repos | monthly | |
| `openatom.js` | openatom.cn/projects (SSR HTML) | OpenAtom graduated / incubating projects | monthly | individual donors are dropped |
| `gh_funding.js` | GitHub search + README check | repos whose README *states* funding: Prototype Fund, Sovereign Tech, NGI cascade funders, Horizon 2020/Europe, ERC, ANR, BMBF, DFG, SNSF, UKRI, NWO, PNRR, and Chinese NSFC / MOST key R&D / 863-973-核高基 / CAS / provincial & city funds | quarterly | needs `gh auth login` (token read via `gh auth token`, never stored) or `GH_TOKEN`; `--only key1,key2`, `--list`, `--pages N`; ~1.5 h for all keys (search limit 30/min) |
| `seed_profiles.js` | `data/project-funding.json` | the 34 deep profiles | on change of the profile file | |
| `link_funding.js` | `data/funding/*.json` | adds `funding_ref` (programme-level money) | after any harvest | |
| `repo_check.js` | HTTP HEAD on every `repo_url` | fills `repo_http` | monthly (`--recheck` for all) | |
| `cn_vpn_queue.js` | - | appends the authoritative Chinese gov sources that are unreachable from outside China to `data/cn_vpn_needed.txt` with a `# registry` comment | once | |
| `stats.js` | the registry | counts for `docs/REGISTRY.md` (`--write` rewrites the auto block) | after any harvest | |
| `lib.js`, `csv.js` | helpers | | | |

## Re-run everything (from the repo root)

```bash
node tools/registry/nlnet.js
node tools/registry/sta.js
node tools/registry/cordis.js
node tools/registry/developers_italia.js
node tools/registry/codegouv.js
node tools/registry/opencode_de.js
node tools/registry/code_overheid_nl.js
node tools/registry/openatom.js
node tools/registry/zenodo.js                # ~25 min; or --only cn
node tools/registry/gh_funding.js            # long; or --only nsfc,mostkey,cas
node tools/registry/seed_profiles.js
node tools/registry/link_funding.js
node tools/registry/repo_check.js
node tools/registry/stats.js --write
```

## Known blockers / not harvested (and why)
- **Prototype Fund website** (prototypefund.de) sits behind a Bunny Shield bot challenge (HTTP 403 + JS challenge). We do not
  bypass bot detection; Prototype Fund projects are therefore taken from READMEs on GitHub (`gh_funding.js`, key `prototypefund`),
  which is a partial, README-dependent view. Ask the programme for an export or use a browser session by hand.
- **Gitee search** needs an access token (anonymous v5 search returns an empty list); only per-repo Gitee API lookups work
  anonymously. AtomGit search needs a private token. Neither is used.
- **Chinese official databases** (MOST service platform, NSFC project search, MIIT, provincial S&T bureaux) are unreachable or
  captcha-gated outside China; their URLs are queued in `data/cn_vpn_needed.txt` (`# registry` lines) for a VPN session.
