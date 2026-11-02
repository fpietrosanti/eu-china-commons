#!/usr/bin/env bash
# Checks reachability of URLs (no tokens). Usage: linkcheck.sh urls.txt > out.tsv
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"
while read -r u; do [ -z "$u" ] && continue
  r=$(curl -sL -m 30 -k -A "$UA" -o /dev/null -w '%{http_code}\t%{url_effective}' "$u")
  printf '%s\t%s\t%s\n' "$(date -u +%F)" "$u" "$r"; sleep 1
done < "$1"
