#!/bin/sh
# Renders OG/preview PNGs with headless Chrome (run on the server, which has CJK fonts).
# usage: sh render.sh <dir-with-html> <outdir>
set -e; D=$1; O=$2; mkdir -p "$O"
r(){ google-chrome --headless=new --no-sandbox --hide-scrollbars --force-device-scale-factor=1 --window-size=$2 --screenshot="$O/$3" "file://$D/$1" >/dev/null 2>&1; }
r og-en.html 1200,630 og-en.png
r og-zh.html 1200,630 og-zh.png
r square.html 512,512 logo-512.png
