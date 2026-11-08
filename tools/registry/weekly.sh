#!/bin/bash
# Weekly refresh of the publicly-funded open-source registry.
# Runs on the server as user euchina (cron), in ~/eu-china-commons. Idempotent and resumable:
# every harvester merges by id and never deletes, so an interrupted run is simply completed next time.
# Log: ~/registry-logs/YYYY-MM-DD.log  ·  last success marker: ~/registry-logs/LAST_OK
set -u
REPO="$HOME/eu-china-commons"; LOGDIR="$HOME/registry-logs"; mkdir -p "$LOGDIR"
LOG="$LOGDIR/$(date +%F).log"
exec 9>"$LOGDIR/weekly.lock"
flock -n 9 || { echo "$(date -Is) another run in progress, exit" >> "$LOG"; exit 0; }
exec >>"$LOG" 2>&1
echo "=== $(date -Is) start"
cd "$REPO" || exit 1
git pull --rebase -q || { echo "git pull failed"; exit 1; }

run() { echo "--- $(date -Is) $*"; timeout 3h node "$@" || echo "!!! failed: $* (exit $?)"; }
run tools/registry/nlnet.js
run tools/registry/sta.js
run tools/registry/cordis.js
run tools/registry/developers_italia.js
run tools/registry/codegouv.js
run tools/registry/opencode_de.js
run tools/registry/code_overheid_nl.js
run tools/registry/openatom.js
run tools/registry/zenodo.js
# GitHub README search needs a token: put GH_TOKEN=... in ~/.config/gh_token.env to enable it.
if [ -f "$HOME/.config/gh_token.env" ]; then set -a; . "$HOME/.config/gh_token.env"; set +a; run tools/registry/gh_funding.js; else echo "--- gh_funding skipped (no token)"; fi
run tools/registry/seed_profiles.js
run tools/registry/link_funding.js
run tools/registry/repo_check.js
run tools/registry/stats.js --write
node tools/queues.js --write || echo "!!! queues rebuild failed"

git add data/registry docs/REGISTRY.md data/queues docs/QUEUES.md data/cn_vpn_needed.txt 2>/dev/null
if git diff --cached --quiet; then echo "no changes"; else
  N=$(node -e "console.log(require('./data/registry/projects.json').length)")
  git commit -q -m "Registry weekly refresh $(date +%F): $N records

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
  for i in 1 2 3; do git pull --rebase -q && git push -q && break; echo "push retry $i"; sleep 60; done
fi
date -Is > "$LOGDIR/LAST_OK"
echo "=== $(date -Is) end"
