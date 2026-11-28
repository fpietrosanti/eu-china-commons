#!/usr/bin/env bash
# Continuous research: one run = one topic (the one updated least recently).
# Runs as ubuntu (holder of the Claude login); git and builds run as the project owner euchina.
# Started by the systemd timer eu-china-research-loop.timer (every 6 h). Manual: tools/research_loop/run.sh [topic]
set -uo pipefail
REPO=/home/euchina/eu-china-commons
BASE=/home/euchina/research-loop
TOPICS=$REPO/tools/research_loop/topics.tsv
STATE=$BASE/state.tsv
LOG=$BASE/runs.log
mkdir -p "$BASE/runs"; touch "$STATE" "$LOG"
exec 9>"$BASE/lock"; flock -n 9 || { echo "$(date -u +%FT%TZ) busy, skipped" >> "$LOG"; exit 0; }
[ -f "$BASE/PAUSE" ] && { echo "$(date -u +%FT%TZ) paused (remove $BASE/PAUSE)" >> "$LOG"; exit 0; }

# pick topic: argument, else the one with the oldest (or no) last run
if [ $# -ge 1 ]; then T=$1; else
  T=$(tail -n +2 "$TOPICS" | cut -f1 | while read -r t; do l=$(awk -F'\t' -v t="$t" '$1==t{d=$2} END{print d}' "$STATE"); echo -e "${l:-0000}\t$t"; done | sort | head -1 | cut -f2)
fi
ROW=$(awk -F'\t' -v t="$T" '$1==t' "$TOPICS"); [ -z "$ROW" ] && { echo "unknown topic $T" >> "$LOG"; exit 1; }
DOC=$(cut -f2 <<<"$ROW"); TITLE=$(cut -f4 <<<"$ROW"); FOCUS=$(cut -f5 <<<"$ROW")
TS=$(date -u +%Y%m%dT%H%M); RUN=$BASE/runs/$TS-$T; mkdir -p "$RUN/raw"
echo "$(date -u +%FT%TZ) start $T" >> "$LOG"

sudo -u euchina -H bash -lc "cd $REPO && git pull -q --rebase --autostash" >> "$RUN/git.log" 2>&1

PROMPT=$(python3 - "$REPO/tools/research_loop/prompt.md" <<PY
import sys
t = open(sys.argv[1], encoding='utf8').read()
for k, v in {'REPO': """$REPO""", 'TODAY': """$(date +%F)""", 'DOC': """$DOC""", 'RUN': """$RUN""", 'TITLE': """$TITLE""", 'FOCUS': """$FOCUS"""}.items():
    t = t.replace('{' + k + '}', v)
print(t)
PY
)
# Least privilege: web research, reading the repo, writing only in the run directory, a few shell tools.
cd "$RUN" && timeout 2h claude -p "$PROMPT" --add-dir "$REPO" \
  --allowedTools "WebSearch" "WebFetch" "Read" "Glob" "Grep" \
    "Edit(//home/euchina/research-loop/runs/**)" \
    "Bash(curl:*)" "Bash(grep:*)" "Bash(pdftotext:*)" "Bash(via-casa:*)" "Bash(sleep:*)" "Bash(ls:*)" "Bash(wc:*)" "Bash(head:*)" \
  > "$RUN/agent.out" 2> "$RUN/agent.err"
RC=$?
echo "$(date -u +%FT%TZ) agent exit $RC" >> "$LOG"

V=$(python3 "$REPO/tools/research_loop/verify_archive.py" "$RUN" 2>&1)
A=$(python3 "$REPO/tools/research_loop/apply_updates.py" "$RUN" "$DOC" "$T" 2>&1)
echo -e "$(date -u +%FT%TZ) $T: $V; $A" >> "$LOG"
printf '%s\t%s\t%s\t%s\n' "$T" "$(date -u +%FT%TZ)" "$V" "$A" >> "$STATE"

# commit, build, push, deploy (only if something changed)
sudo -u euchina -H bash -lc "cd $REPO && git add docs/$DOC docs/research-loop sources/archive && \
  if git diff --cached --quiet; then echo nothing; else set -o pipefail && node tools/build_site.js | tail -1 && git add site && \
  git commit -q -m 'Continuous research: $T ($V; $A)' && git pull -q --rebase --autostash && git push -q && echo pushed; fi" >> "$RUN/git.log" 2>&1
if grep -q pushed "$RUN/git.log"; then
  gh workflow run "Deploy site" -R fpietrosanti/eu-china-commons >> "$RUN/git.log" 2>&1
  echo "$(date -u +%FT%TZ) $T deployed" >> "$LOG"
fi
# keep run directories 60 days (raw files are archived in the repo when verified)
find "$BASE/runs" -mindepth 1 -maxdepth 1 -type d -mtime +60 -exec rm -rf {} +
