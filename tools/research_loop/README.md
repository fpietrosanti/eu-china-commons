# Continuous research

Research agents revisit every published chapter in turn, add new verifiable sources and facts, and propose improvements to the conclusions. Set up on 28 Nov 2026 at Fabio's request ("continuous enrichment").

## How it works
- **Schedule.** The systemd timer `eu-china-research-loop.timer` starts `run.sh` every 6 hours. Each run takes the topic in [`topics.tsv`](topics.tsv) updated least recently, so each of the 20 topics is revisited about every 5 days.
- **Agent.** A headless Claude Code session with the instructions in [`prompt.md`](prompt.md). It may only search and read the web, read the repository, write in its run directory (`/home/euchina/research-loop/runs/<time>-<topic>/`) and use `curl`, `grep`, `pdftotext` and `via-casa`. It cannot edit the repository, log in, submit forms or post anywhere.
- **Verification.** [`verify_archive.py`](verify_archive.py) checks that every quote occurs verbatim in the saved document, then archives the document in `sources/archive/` (method `research-agent`, SHA-256 in `index.tsv`).
- **Publication.** [`apply_updates.py`](apply_updates.py) writes the facts with a verified source, and the negative results, into the chapter under "Updates (continuous research)", dated. They go online automatically.
- **Review.** Proposed changes to text and conclusions, and facts whose source could not be verified, go to [`docs/research-loop/REVIEW-QUEUE.md`](../../docs/research-loop/REVIEW-QUEUE.md). The chapter's main text changes only after review in a working session.

## Operating it
- Log: `/home/euchina/research-loop/runs.log`; last run per topic: `state.tsv`.
- Pause: `touch /home/euchina/research-loop/PAUSE`; resume: remove the file.
- Run a topic now: `tools/research_loop/run.sh <topic>` (as ubuntu).
- Timer: `systemctl status eu-china-research-loop.timer`; stop with `sudo systemctl disable --now eu-china-research-loop.timer`.
- Add a topic: one line in `topics.tsv` (topic, doc, site slug, title, focus).
