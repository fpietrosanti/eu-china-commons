#!/usr/bin/env bash
# Archive every cited URL: direct fetch, fallback via r.jina.ai relay (geo-blocks).
# Idempotent: skips URLs already archived. Usage: archive_sources.sh urls.txt outdir
set -u
LIST=$1; OUT=$2; mkdir -p "$OUT"; IDX="$OUT/index.tsv"; touch "$IDX"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"
while read -r u; do
  [ -z "$u" ] && continue
  grep -qF "	$u	" "$IDX" && continue
  h=$(echo -n "$u" | sha1sum | cut -c1-10); host=$(echo "$u" | awk -F/ '{print $3}')
  ext=$(echo "${u%%\?*}" | grep -oiE '\.(pdf|docx?|xlsx?)$' | tr A-Z a-z); [ -z "$ext" ] && ext=.html
  f="$host-$h$ext"; m=direct
  c=$(curl -sL -m 60 -k -A "$UA" -H 'Accept-Language: en,zh-CN;q=0.8' -o "$OUT/$f" -w '%{http_code}' "$u")
  if [ "$c" != 200 ] || [ ! -s "$OUT/$f" ]; then
    f="$host-$h.relay.md"; m=relay
    c=$(curl -s -m 120 -o "$OUT/$f" -w '%{http_code}' "https://r.jina.ai/$u")
  fi
  s=$(sha256sum "$OUT/$f" 2>/dev/null | cut -d' ' -f1)
  printf '%s\t%s\t%s\t%s\t%s\t%s\n' "$(date -u +%FT%TZ)" "$u" "$f" "$m" "$c" "$s" >> "$IDX"
  sleep 2
done < "$LIST"
