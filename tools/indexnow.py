#!/usr/bin/env python3
"""Submit pages changed since the last submission to IndexNow (shared by Bing, Yandex, Seznam, Naver, Yep).

Run after a deploy: python3 tools/indexnow.py [--all] [--dry-run]
Changed = pages whose entry in data/site-lastmod.json differs from data/indexnow-sent.json.
Google and Baidu do not use IndexNow: they read sitemap.xml (submitted in their webmaster consoles).
"""
import json, os, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://eu-china-commons.eu'
KEY = '55674caacb02cd33b7d2bed0a3e1fa36'
LM = os.path.join(ROOT, 'data', 'site-lastmod.json')
SENT = os.path.join(ROOT, 'data', 'indexnow-sent.json')

lm = json.load(open(LM))
sent = json.load(open(SENT)) if os.path.exists(SENT) and '--all' not in sys.argv else {}
changed = [r for r, v in lm.items() if sent.get(r) != v.get('h')]
urls = [BASE + '/' + r.replace('index.html', '') for r in sorted(changed)]
print(len(urls), 'changed pages')
if not urls or '--dry-run' in sys.argv:
    sys.exit(0)
# the key file must be live before submitting
live = urllib.request.urlopen(f'{BASE}/{KEY}.txt', timeout=30).read().decode().strip()
if live != KEY:
    sys.exit('key file not live yet; deploy first')
body = json.dumps({'host': 'eu-china-commons.eu', 'key': KEY, 'keyLocation': f'{BASE}/{KEY}.txt', 'urlList': urls[:10000]}).encode()
req = urllib.request.Request('https://api.indexnow.org/indexnow', data=body, headers={'Content-Type': 'application/json; charset=utf-8'})
with urllib.request.urlopen(req, timeout=60) as r:
    print('IndexNow HTTP', r.status)
for r in changed:
    sent[r] = lm[r]['h']
json.dump(sent, open(SENT, 'w'), indent=0, sort_keys=True)
