# LLM panel review: every source, page and translation, by six AI models

Roadmap item set by Fabio on 28 Nov 2026. Status: **planned, waiting for logged-in accounts.**

## Purpose
- **Language review.** Every Chinese and English text we publish is reviewed for accuracy, terminology and tone by Western and Chinese models, before and alongside native human review.
- **Content deepening.** Each research page and each key source is put to every model with the same questions, to collect what they know, what they dispute and what they add on EU–China industrial policy and the digital commons in Europe and China, in the light of the project's mission.
- **Mutual enrichment.** The questions are also a way to bring the project's verified findings into the conversation with these models, so that their knowledge of the topic improves.

## The panel
DeepSeek, Qwen (通义), GLM (智谱), ChatGPT, Gemini and Copilot, used through their web interfaces in the shared Chrome on the server (X11 session of user `browser`, Claude in Chrome extension), with accounts that Fabio logs in himself. No passwords are handled by Claude.

## Rules (extends METHODOLOGY §5)
- **All content, all models.** Every page, every key source and every translation goes through all six models. It is done slowly, at a human pace, within each service's terms, never in parallel bursts.
- **Same prompt, two languages.** Each question is asked in English and in Chinese; differences between languages are recorded.
- **Blind.** A model does not see another model's answer before giving its own.
- **Logged.** Each exchange is saved (prompt, answer, model, date) in `reviews/llm-panel/` and listed in `data/llm-runs.tsv`.
- **Nothing becomes a fact without a source.** Model answers are level D. A claim enters a chapter only after it is traced to an archived source at level A or B. Corrections proposed by models go to the review queue (`docs/research-loop/REVIEW-QUEUE.md`).
- **Known framing.** Chinese models' content rules and Western models' security framing are recorded as perspectives, not hidden.

## Workflow per item
1. **Language pass** (translations and Chinese texts): terminology, faithfulness, register, errors; output as suggested edits.
2. **Substance pass** (research pages and sources): what is missing, what is wrong, what is disputed, which sources the model would add.
3. **Mission pass:** what this finding means for non-competitive EU–China cooperation on the digital commons; which actors and instruments the model would involve.
4. **Synthesis:** agreements and disagreements across the six models, in EN and ZH; proposals to the review queue; new leads to the continuous-research topics.

## Order of work
1. Chinese texts already published (manifesto, key-sources block, Chinese catalogue entries): language pass first.
2. Key research chapters (contribution flows, GPL case law, CRA × SBOM, ASEAN/Russia, funding chapter, KAIYUANSHE corpus, external report analysis).
3. All other chapters, then the catalogue entries and key sources, in rotation with the continuous research.

## Prerequisites
- [ ] Fabio logs into the six services in the shared Chrome (RDP session `browser`) and confirms which accounts may be used.
- [ ] Check each service's terms on automated use of the web interface; where they forbid it, Fabio pastes the prompts himself or we use the official API.
- [ ] Prompt set v1 (EN/ZH) for the three passes, stored in `protocols/llm-panel/`.
- [ ] Pilot on one page across all six models, then rotation.
