#!/usr/bin/env python3
"""R18.2/18.3: derived tables from the OpenShare/OpenDigger dump (tools/openshare_dump.py).

Usage: python3 -I tools/kys_opendigger_analysis.py ~/mirrors/openshare
Writes TSV files to data/external/kaiyuanshe/derived/ and prints a summary in Markdown.
Source attribution for every output: OpenDigger (X-lab, ECNU) via OpenShare (KAIYUANSHE), open-share.com.
"""
import json, os, re, sys, csv
from collections import defaultdict

B = sys.argv[1].rstrip('/') + '/'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'data/external/kaiyuanshe/derived'); os.makedirs(OUT, exist_ok=True)
EU27 = 'AT BE BG HR CY CZ DK EE FI FR DE GR IE IT LV LT LU MT NL PL PT RO SK SI ES SE'.split()

def load(rel):
    p = B + rel
    return json.load(open(p, encoding='utf-8')) if os.path.exists(p) else None

def tsv(name, header, rows):
    with open(os.path.join(OUT, name), 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f, delimiter='\t', lineterminator='\n'); w.writerow(header); w.writerows(rows)

out = []
# ---------- 1. Countries 2025: EU27 vs China vs US ----------
metrics = {}
for m in ['developers', 'contribution', 'influence']:
    o = load(f'openshare/overview/{m}.json')
    for lb in o['leaderboards']:
        key = {'Latest Total Developers by Country': 'dev_total', 'Active Developers by Country': 'dev_active',
               'Developer OpenRank Contribution by Country': 'contribution', 'Open Source Project OpenRank Influence by Country': 'influence'}.get(lb['title'])
        if key: metrics[key] = {r.get('code') or r['identifier'].split('/')[-1]: (r['value'], r.get('rank')) for r in lb['data']}
cols = ['dev_total', 'dev_active', 'contribution', 'influence']
tot = {k: sum(v for v, _ in metrics[k].values()) for k in cols}
codes = sorted(set().union(*[metrics[k].keys() for k in cols]), key=lambda c: -metrics['contribution'].get(c, (0, 0))[0])
rows = []
for c in codes:
    rows.append([c, 'EU27' if c in EU27 else ''] + [f"{metrics[k].get(c, (0, 0))[0]:.0f}" for k in cols] + [metrics['contribution'].get(c, (0, ''))[1]])
tsv('countries-2025.tsv', ['country', 'group', 'developers_total', 'developers_active', 'developer_openrank_contribution', 'project_openrank_influence', 'contribution_rank'], rows)
agg = {}
for name, sel in [('EU27', EU27), ('China', ['CN']), ('United States', ['US']), ('India', ['IN'])]:
    agg[name] = {k: sum(metrics[k].get(c, (0, 0))[0] for c in sel) for k in cols}
out.append('### 1. EU27, China and the US in 2025 (OpenDigger, natural year 2025)\n')
out.append('| | Developers (total) | Active developers | Developer OpenRank contribution | Project OpenRank influence |')
out.append('|---|---|---|---|---|')
for n, a in agg.items():
    out.append(f"| {n} | {a['dev_total']/1e6:.1f} m ({a['dev_total']/tot['dev_total']:.1%}) | {a['dev_active']/1e6:.2f} m ({a['dev_active']/tot['dev_active']:.1%}) | {a['contribution']/1e3:,.0f} k ({a['contribution']/tot['contribution']:.1%}) | {a['influence']/1e3:,.0f} k ({a['influence']/tot['influence']:.1%}) |")
out.append(f"\nShares are of the sum over all countries listed ({len(metrics['contribution'])} for contribution; influence lists only {len(metrics['influence'])} countries). "
           "Contribution = OpenRank earned by developers located in the country. Influence = OpenRank of projects attributed to the country.\n")
top_eu = sorted([(metrics['contribution'].get(c, (0, 0))[0], c) for c in EU27], reverse=True)[:5]
out.append('Largest EU contributors: ' + ', '.join(f"{c} {v/1e3:,.0f} k (rank {metrics['contribution'][c][1]})" for v, c in top_eu) + '.\n')

# ---------- 2. Trends: China active developers vs global ----------
o = load('openshare/overview/developers.json'); tr = {t['title']: t for t in o['trends']}
g, cn = tr['Global Active Developers'], tr['China Active Developers']
o2 = load('openshare/overview/contribution.json'); tr2 = {t['title']: t for t in o2['trends']}
trows = []
for i, y in enumerate(g['labels']):
    row = [y, f"{g['values'][i]:.0f}", f"{cn['values'][i]:.0f}", f"{cn['values'][i]/g['values'][i]:.4f}"]
    gc, uc, cc = (tr2.get('Global Developer OpenRank Contribution'), tr2.get('United States Developer OpenRank Contribution'), tr2.get('China Developer OpenRank Contribution'))
    if gc and y in gc['labels']:
        j = gc['labels'].index(y); row += [f"{cc['values'][j]/gc['values'][j]:.4f}", f"{uc['values'][j]/gc['values'][j]:.4f}"]
    trows.append(row)
tsv('china-share-trend.tsv', ['year', 'global_active_developers', 'china_active_developers', 'china_share_active', 'china_share_contribution', 'us_share_contribution'], trows)
out.append('### 2. China\'s share over time\n')
out.append('| Year | China share of active developers | China share of OpenRank contribution | US share of contribution |')
out.append('|---|---|---|---|')
for r in trows: out.append(f"| {r[0]} | {float(r[3]):.1%} | {float(r[4]):.1%} | {float(r[5]):.1%} |" if len(r) > 4 else f"| {r[0]} | {float(r[3]):.1%} | – | – |")
out.append('')

# ---------- 3. Chinese entries in the global top 300, 2015-2025 ----------
def lb(scope, group, y):
    d = load(f'open_leaderboard/{scope}/{group}/year/{y}/data.json'); return d['data'] if d else []
srows = []
out.append('### 3. Chinese projects, initiators and foundations in the global leaderboards\n')
out.append('Definitions. Projects: Chinese = listed in OpenShare\'s "China" scope that year. Initiators: Chinese = in the China scope with the same OpenRank as globally (foreign firms such as VMware or Yahoo appear in the China scope with only their Chinese projects counted, so they are excluded). Foundations: share = OpenRank of Chinese projects inside foundations (China-scope value) over the OpenRank of all foundations listed.\n')
out.append('| Year | CN projects in global top 300 | their share of top-300 OpenRank | CN initiators in global top 300 | their share | Chinese projects\' share of foundation OpenRank |')
out.append('|---|---|---|---|---|---|')
for y in range(2015, 2026):
    r = [y]
    G, C = lb('global', 'project', y), {e['id'] for e in lb('china', 'project', y)}
    t = sum(e['openrank'] for e in G); r += [sum(1 for e in G if e['id'] in C), f"{sum(e['openrank'] for e in G if e['id'] in C)/t:.4f}"]
    G = lb('global', 'initiator', y); C = {e['id']: e['openrank'] for e in lb('china', 'initiator', y)}
    cn = [e for e in G if e['id'] in C and abs(C[e['id']] - e['openrank']) <= max(1, 0.01 * e['openrank'])]
    t = sum(e['openrank'] for e in G); r += [len(cn), f"{sum(e['openrank'] for e in cn)/t:.4f}"]
    G, Cf = lb('global', 'foundation', y), lb('china', 'foundation', y)
    r += [f"{sum(e['openrank'] for e in Cf)/sum(e['openrank'] for e in G):.4f}" if G else '']
    srows.append(r)
    out.append(f"| {y} | {r[1]} | {float(r[2]):.1%} | {r[3]} | {float(r[4]):.1%} | {float(r[5]):.1%} |" if r[5] else f"| {y} | {r[1]} | {float(r[2]):.1%} | {r[3]} | {float(r[4]):.1%} | – |")
tsv('china-in-global-top.tsv', ['year', 'cn_projects_top300', 'cn_project_openrank_share', 'cn_initiators_top300', 'cn_initiator_openrank_share', 'cn_project_share_of_foundation_openrank'], srows)
out.append('')
for grp, n in [('project', 15), ('initiator', 15), ('foundation', 10)]:
    G = lb('global', grp, 2025); Cv = {e['id']: e['openrank'] for e in lb('china', grp, 2025)}
    def mark(e):
        if e['id'] not in Cv: return ''
        if grp == 'foundation' and abs(Cv[e['id']] - e['openrank']) > 1: return f" [of which Chinese projects {Cv[e['id']]:,.0f}]"
        if grp == 'initiator' and abs(Cv[e['id']] - e['openrank']) > max(1, 0.01 * e['openrank']): return ''
        return ' ★'
    out.append(f"**Global top {n} {grp}s, 2025** (★ = Chinese): " + '; '.join(f"{e['rank']}. {e['name']}{mark(e)} ({e['openrank']:,.0f})" for e in G[:n]) + '\n')

# ---------- 4. China scope 2025: full ranking + time series of top 30 ----------
C25 = lb('china', 'project', 2025)
hist = defaultdict(dict)
for y in range(2015, 2026):
    for e in lb('china', 'project', y): hist[e['id']][y] = e['openrank']
G25 = {e['id']: e['rank'] for e in lb('global', 'project', 2025)}
tsv('china-projects-2025.tsv', ['rank', 'id', 'name', 'name_zh', 'openrank', 'openrank_delta', 'participants', 'global_rank_2025'] + [f'openrank_{y}' for y in range(2015, 2026)],
    [[e['rank'], e['id'], e['name'], e.get('name_zh', ''), e['openrank'], e.get('openrankDelta', ''), e.get('participants', ''), G25.get(e['id'], '')] + [f"{hist[e['id']].get(y, ''):.2f}" if hist[e['id']].get(y) else '' for y in range(2015, 2026)] for e in C25])
ini = lb('china', 'initiator', 2025)
tsv('china-initiators-2025.tsv', ['rank', 'id', 'name', 'name_zh', 'openrank', 'participants'], [[e['rank'], e['id'], e['name'], e.get('name_zh', ''), e['openrank'], e.get('participants', '')] for e in ini])
out.append('### 4. Top Chinese initiators 2025 (OpenRank)\n')
out.append('; '.join(f"{e['rank']}. {e['name']} ({e['openrank']:,.0f})" for e in ini[:20]) + '\n')

# ---------- 5. Cross-match with the external report (504 projects) ----------
def norm(s): return re.sub(r'[^a-z0-9一-鿿]', '', (s or '').lower().replace('apache ', ''))
ext = list(csv.DictReader(open(os.path.join(ROOT, 'data/external/cn-oss-landscape-2026-11/projects.tsv'), encoding='utf-8'), delimiter='\t'))
namecol = 'name'
ext_names = {norm(r[namecol]): r for r in ext}
match, only_od = [], []
for e in C25:
    keys = {norm(e['name']), norm(e.get('name_zh')), norm(e['id'].split('/')[-1])}
    hit = next((ext_names[k] for k in keys if k in ext_names), None)
    (match if hit else only_od).append((e, hit))
tsv('xmatch-opendigger-vs-ext-report.tsv', ['china_rank_2025', 'name', 'openrank_2025', 'in_ext_report', 'ext_report_name', 'ext_kind'],
    [[e['rank'], e['name'], e['openrank'], 'yes' if h else 'no', h[namecol] if h else '', (h.get('kind') if h else '')] for e, h in match + only_od])
out.append('### 5. Cross-match with the external report\n')
out.append(f"Of the {len(C25)} projects in OpenShare's China scope (2025), {len(match)} are among the external report's 504 projects (name match) and {len(only_od)} are not. "
           f"The {len(only_od)} unmatched include: " + ', '.join(e['name'] for e, _ in sorted(only_od, key=lambda x: x[0]['rank'])[:40]) + '.\n')
print('\n'.join(out))
open(os.path.join(OUT, 'SUMMARY.md'), 'w', encoding='utf-8').write('# OpenDigger/OpenShare derived figures (R18.2–18.3)\n\nGenerated by tools/kys_opendigger_analysis.py. Source: OpenDigger (X-lab, ECNU) via OpenShare (KAIYUANSHE), files dumped 25 Nov 2026.\n\n' + '\n'.join(out) + '\n')
