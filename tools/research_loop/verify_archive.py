#!/usr/bin/env python3
"""Verify and archive the output of a research run.

Usage: verify_archive.py RUN_DIR [--no-archive]

Input  RUN_DIR/sources.tsv  columns: url, title, publisher, date, language, level, fetched_file, quote
       RUN_DIR/raw/<fetched_file>
Output RUN_DIR/verified.tsv columns: url, status, archive_name, reason
       status = ok (quote found in the fetched file, archived) | unverified (no file or quote mismatch)
Quotes are matched ignoring whitespace; '…' or '...' split a quote into fragments that must all match.
PDFs are converted with pdftotext. Files go to sources/archive with method 'research-agent'.
"""
import csv, datetime, hashlib, os, re, shutil, subprocess, sys, urllib.parse

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(REPO, 'sources', 'archive')
IDX = os.path.join(OUT, 'index.tsv')


def text_of(path):
    if path.lower().endswith('.pdf'):
        try:
            out = ''
            for mode in (['-layout'], ['-raw']):
                out += subprocess.run(['pdftotext', *mode, path, '-'], capture_output=True, timeout=120).stdout.decode('utf8', 'ignore')
            return out
        except Exception:
            return ''
    raw = open(path, 'rb').read().decode('utf8', 'ignore')
    return re.sub(r'<[^>]+>', ' ', raw)


def squash(t):
    t = t.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"').replace('&nbsp;', ' ').replace('&amp;', '&')
    return re.sub(r'\s+', '', t)


def main():
    run = sys.argv[1]
    archive = '--no-archive' not in sys.argv
    have = {}
    for line in open(IDX, encoding='utf8'):
        p = line.rstrip('\n').split('\t')
        if len(p) > 2:
            have[p[1]] = p[2]
    now = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
    rows = []
    src = os.path.join(run, 'sources.tsv')
    if not os.path.exists(src):
        print('no sources.tsv'); open(os.path.join(run, 'verified.tsv'), 'w').write('url\tstatus\tarchive_name\treason\n'); return
    for r in csv.DictReader(open(src, encoding='utf8'), delimiter='\t'):
        u = (r.get('url') or '').strip(); f = (r.get('fetched_file') or '').strip(); q = (r.get('quote') or r.get('verbatim_quote') or '').strip()
        if not u.startswith('http'):
            continue
        if not f:
            rows.append((u, 'unverified', '', 'no fetched file')); continue
        p = os.path.join(run, 'raw', os.path.basename(f))
        if not os.path.isfile(p):
            rows.append((u, 'unverified', '', 'file missing')); continue
        body = squash(text_of(p))
        side = p + '.txt'
        if os.path.isfile(side):
            body += squash(open(side, encoding='utf8', errors='ignore').read())
        frags = [x for x in re.split(r'…|\.\.\.', re.sub(r'\[[^\]]*\]', '', q)) if len(squash(x).strip('"')) >= 6]
        if not frags:
            rows.append((u, 'unverified', '', 'no quote')); continue
        def found(x):
            k = squash(x).strip('".()')
            return k[:40] in body or (k[:20] in body and k[-20:] in body)
        miss = [x for x in frags if not found(x)]
        if miss:
            rows.append((u, 'unverified', '', 'quote not found: ' + miss[0][:60])); continue
        if u in have:
            rows.append((u, 'ok', have[u], 'already archived')); continue
        host = urllib.parse.urlparse(u).netloc or 'unknown'
        ext = os.path.splitext(p)[1].lower() or '.html'
        name = f"{host}-{hashlib.sha1(u.encode()).hexdigest()[:10]}.agent{ext}"
        if archive:
            shutil.copy(p, os.path.join(OUT, name)); os.chmod(os.path.join(OUT, name), 0o664)
            sha = hashlib.sha256(open(os.path.join(OUT, name), 'rb').read()).hexdigest()
            with open(IDX, 'a', encoding='utf8') as fh:
                fh.write(f"{now}\t{u}\t{name}\tresearch-agent\t200\t{sha}\n")
            have[u] = name
        rows.append((u, 'ok', name, 'archived'))
    with open(os.path.join(run, 'verified.tsv'), 'w', encoding='utf8') as fh:
        fh.write('url\tstatus\tarchive_name\treason\n')
        for x in rows:
            fh.write('\t'.join(x) + '\n')
    ok = sum(1 for x in rows if x[1] == 'ok')
    print(f'{ok} verified, {len(rows) - ok} unverified')


if __name__ == '__main__':
    main()
