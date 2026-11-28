#!/usr/bin/env python3
"""Write the verified findings of a research run into the chapter and the review queue.

Usage: apply_updates.py RUN_DIR DOC_FILE TOPIC

Input  RUN_DIR/findings.tsv  columns: kind, statement, level, url, quote
         kind = fact      a new fact (published automatically if its source is verified)
                proposal  a proposed change to the chapter's text or conclusions (goes to review)
                gap       something searched for and not found (negative result, published)
       RUN_DIR/verified.tsv  from verify_archive.py
Output DOC_FILE gets a dated block under "## Updates (continuous research)".
       docs/research-loop/REVIEW-QUEUE.md gets the proposals and the unverified facts.
Prints the number of published entries; exit code 0 even when nothing is published.
"""
import csv, datetime, os, re, sys

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
HEAD = '## Updates (continuous research)'
NOTE = ('*Entries added by the continuous-research agents (see [tools/research_loop](../tools/research_loop/README.md)). '
        'Each fact has an archived source and a verbatim quote checked by script. They have not yet been reviewed: '
        'the text and conclusions above change only after review ([review queue](research-loop/REVIEW-QUEUE.md)).*')
LEVELS = {'A', 'A-v', 'B', 'C'}


def host(u):
    return re.sub(r'^https?://(www\.)?', '', u).split('/')[0]


def clean(s):
    return re.sub(r'\s+', ' ', (s or '').replace('|', '/')).strip()


def main():
    run, doc, topic = sys.argv[1], sys.argv[2], sys.argv[3]
    today = datetime.date.today().isoformat()
    ver = {}
    vp = os.path.join(run, 'verified.tsv')
    if os.path.exists(vp):
        for r in csv.DictReader(open(vp, encoding='utf8'), delimiter='\t'):
            if r['status'] == 'ok':
                ver[r['url']] = r['archive_name']
    pub, review = [], []
    fp = os.path.join(run, 'findings.tsv')
    if os.path.exists(fp):
        for r in csv.DictReader(open(fp, encoding='utf8'), delimiter='\t'):
            kind = clean(r.get('kind')).lower(); st = clean(r.get('statement')); lv = clean(r.get('level')); u = clean(r.get('url'))
            if not st:
                continue
            if kind == 'gap':
                pub.append(f'- **Not found.** {st}')
            elif kind == 'fact' and u in ver and lv in LEVELS:
                pub.append(f'- **FACT ({lv}).** {st} Source: [{host(u)}]({u}) (archived `sources/archive/{ver[u]}`).')
            elif kind == 'fact':
                review.append(f'- [ ] **Unverified fact** ({lv or "?"}): {st} Source: [{host(u)}]({u}) — not published: source not archived or quote not matched.')
            else:
                review.append(f'- [ ] **Proposal:** {st}' + (f' Source: [{host(u)}]({u})' + (f' (archived `{ver[u]}`)' if u in ver else '') if u else ''))
    if pub:
        p = os.path.join(REPO, 'docs', doc)
        s = open(p, encoding='utf8').read()
        block = f'\n### {today}\n' + '\n'.join(pub) + '\n'
        if HEAD in s:
            i = s.index(HEAD); j = s.index(NOTE, i) + len(NOTE) if NOTE in s[i:] else s.index('\n', i)
            s = s[:j] + '\n' + block + s[j:]
        else:
            sec = f'\n{HEAD}\n\n{NOTE}\n{block}'
            m = re.search(r'\n## Changelog', s)
            s = s[:m.start()] + '\n' + sec + s[m.start():] if m else s.rstrip('\n') + '\n' + sec
        open(p, 'w', encoding='utf8').write(re.sub(r'\n{3,}', '\n\n', s))
    if review:
        q = os.path.join(REPO, 'docs', 'research-loop', 'REVIEW-QUEUE.md')
        os.makedirs(os.path.dirname(q), exist_ok=True)
        if not os.path.exists(q):
            open(q, 'w', encoding='utf8').write('# Review queue of the continuous research\n\nProposals and unverified facts from the research agents, newest first. A reviewer accepts an item by editing the chapter and ticking it, or rejects it with a one-line reason.\n')
        s = open(q, encoding='utf8').read()
        k = s.find('\n## ')
        intro, rest = (s, '') if k < 0 else (s[:k + 1], s[k + 1:])
        s = intro.rstrip('\n') + '\n\n' + f'## {today} · {topic} ([{doc}](../{doc}))\n' + '\n'.join(review) + '\n\n' + rest
        open(q, 'w', encoding='utf8').write(s)
    print(f'{len(pub)} published, {len(review)} to review')


if __name__ == '__main__':
    main()
