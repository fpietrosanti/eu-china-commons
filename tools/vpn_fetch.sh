#!/usr/bin/env bash
# Run ONLY with a mainland-China VPN active (on the laptop). Makes a local copy of every
# Chinese resource the observatory cites or queues, with attachments, into sources/archive-vpn/.
# Inputs: data/cn_vpn_needed.txt (col 1 if it is a URL) + every Chinese URL found in data/, docs/, reviews/.
# Idempotent: skips URLs already in sources/archive-vpn/index.tsv with code 200.
cd "$(dirname "$0")/.."
[ "${1:-}" = --vpn-on ] || { echo "Usage: tools/vpn_fetch.sh --vpn-on   (only with a mainland-China VPN active)"; exit 1; }
OUT=sources/archive-vpn; mkdir -p "$OUT/files"; IDX="$OUT/index.tsv"; touch "$IDX"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"
LIST="$OUT/urls.txt"
{
  cut -f1 data/cn_vpn_needed.txt | grep -oE '^https?://[^ ]+'
  grep -rhoE 'https?://[^ )"<>|`]+' data docs reviews 2>/dev/null \
    | grep -E '\.cn(/|$)|gitee\.com|atomgit\.com|openatom\.org|kaiyuanshe|mp\.weixin\.qq\.com|gitcode|csdn\.net|oschina'
} | sed 's/[.,;]$//' | sort -u > "$LIST"
echo "urls: $(wc -l < "$LIST")"
fetch() { # url outfile -> http code
  curl -sL -m 90 -k -A "$UA" -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.5' --compressed -o "$2" -w '%{http_code}' "$1"; }
while read -r u; do
  awk -F'	' -v u="$u" '$2==u && $4==200{f=1} END{exit !f}' "$IDX" && continue
  h=$(echo -n "$u" | sha1sum | cut -c1-10); host=$(echo "$u" | awk -F/ '{print $3}')
  ext=$(echo "${u%%\?*}" | grep -oiE '\.(pdf|docx?|xlsx?|wps|zip)$' | tr A-Z a-z); [ -z "$ext" ] && ext=.html
  f="files/$host-$h$ext"; c=$(fetch "$u" "$OUT/$f")
  s=$(sha256sum "$OUT/$f" 2>/dev/null | cut -d' ' -f1)
  printf '%s\t%s\t%s\t%s\t%s\n' "$(date -u +%FT%TZ)" "$u" "$f" "$c" "$s" >> "$IDX"
  # attachments linked from HTML pages (公示表, 附件): pdf/doc/xls/wps/zip
  if [ "$ext" = .html ] && [ "$c" = 200 ]; then
    base=$(echo "$u" | grep -oE '^https?://[^/]+')
    grep -oiE 'href="[^"]+\.(pdf|docx?|xlsx?|wps|zip)"' "$OUT/$f" | sed 's/^href="//;s/"$//' | sort -u | while read -r a; do
      case "$a" in http*) au=$a;; /*) au=$base$a;; *) au=${u%/*}/$a;; esac
      grep -qF "	$au	" "$IDX" && continue
      ah=$(echo -n "$au" | sha1sum | cut -c1-10); ae=$(echo "$au" | grep -oiE '\.[a-z]+$' | tr A-Z a-z)
      af="files/$host-$ah$ae"; ac=$(fetch "$au" "$OUT/$af")
      printf '%s\t%s\t%s\t%s\t%s\tattachment-of:%s\n' "$(date -u +%FT%TZ)" "$au" "$af" "$ac" "$(sha256sum "$OUT/$af" | cut -d' ' -f1)" "$u" >> "$IDX"
      sleep 1
    done
  fi
  echo "$c $u"; sleep 2
done < "$LIST"
echo "done: $(awk -F'\t' '$4==200' "$IDX" | wc -l) ok / $(wc -l < "$IDX") total — commit sources/archive-vpn/"
