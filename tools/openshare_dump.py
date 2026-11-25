# Dump of OpenShare (open-share.com) public data hosted on OpenDigger OSS.
import json, os, sys, time, hashlib, urllib.request, urllib.parse
OUT = sys.argv[1]; os.makedirs(OUT, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (archival; eu-china-commons)"}
man = open(os.path.join(OUT, "MANIFEST.tsv"), "a")
def get(url, rel):
    p = os.path.join(OUT, rel)
    if os.path.exists(p): return open(p, "rb").read()
    try:
        b = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()
    except Exception as e:
        man.write(f"{time.strftime('%FT%TZ', time.gmtime())}\t{url}\t{rel}\tERR {getattr(e, 'code', e)}\t\n"); man.flush(); return None
    os.makedirs(os.path.dirname(p), exist_ok=True); open(p, "wb").write(b)
    man.write(f"{time.strftime('%FT%TZ', time.gmtime())}\t{url}\t{rel}\t200\t{hashlib.sha256(b).hexdigest()}\n"); man.flush()
    time.sleep(0.4); return b
SO = "https://selfoss.open-digger.cn/"
# 1. Overview (open-world): annual and half-year, world/CN/US, 3 metrics
for base in ["openshare/overview/", "openshare/overview_half_year/"]:
    get(SO + base + "meta.json", base + "meta.json")
    for m in ["developers", "contribution", "influence"]:
        get(SO + base + f"{m}.json", base + f"{m}.json")
        for c in ["CN", "US"]: get(SO + base + f"{c}/{m}.json", base + f"{c}/{m}.json")
# 2. Open leaderboard: every scope x group type, years 2015-2026 and months 2020-01..2026-11
meta = json.loads(get(SO + "open_leaderboard/meta.json", "open_leaderboard/meta.json"))
periods = [("year", str(y)) for y in range(2015, 2027)] + [("month", f"{y}{m}") for y in range(2020, 2027) for m in range(1, 13) if (y, m) <= (2026, 11)]
for sc in meta["scopes"]:
    for gt in meta["groupTypes"]:
        s, g = sc["name"].lower(), gt["name"].lower()
        miss = 0
        for t, v in periods:
            rel = f"open_leaderboard/{s}/{g}/{t}/{v}/data.json"
            r = get(SO + "open_leaderboard/" + urllib.parse.quote(f"{s}/{g}/{t}/{v}") + "/data.json", rel)
# 3. Geo and countries (used by the maps)
get("https://oss.open-digger.cn/countries.json", "oss/countries.json")
for g in ["world.json", "CN.json", "US.json"]: get("https://open-share.com/geo/" + g, "open-share.com/geo/" + g)
print("done")
