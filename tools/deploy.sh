#!/usr/bin/env bash
# Deploy the site (GitHub Pages), wait for it, then notify search engines of changed pages (IndexNow).
# Run as ubuntu (gh login). Git for the IndexNow state runs as the project owner.
set -uo pipefail
R=fpietrosanti/eu-china-commons; REPO=/home/euchina/eu-china-commons
gh workflow run "Deploy site" -R $R || exit 1
sleep 10
id=$(gh run list -R $R -w "Deploy site" -L1 --json databaseId -q '.[0].databaseId')
gh run watch "$id" -R $R --exit-status >/dev/null || { echo "deploy failed: run $id"; exit 1; }
echo "deployed (run $id)"
sleep 30   # Pages CDN propagation before the key file check
sudo -u euchina -H bash -lc "cd $REPO && python3 tools/indexnow.py && git add data/indexnow-sent.json && \
  { git diff --cached --quiet || { git commit -q -m 'IndexNow: record submitted pages' && git pull -q --rebase --autostash && git push -q; }; }"
