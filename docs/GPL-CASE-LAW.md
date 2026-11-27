# GPL in court: China and Europe compared

Chinese courts now enforce the GPL as a binding contract, much as German and French courts do, and China's Supreme People's Court has gone further than any European court on one question: a developer that breaches the GPL still owns the copyright in its own code. This note compares 9 Chinese and 10 European cases (including the CJEU), traced where possible to the judgments, and draws the consequences for European and Chinese contributors working on each other's projects.

Research note for the EU–China Digital Commons Observatory. Compiled 27 November 2026.
Evidence levels follow `docs/METHODOLOGY.md` §4. A = primary text read in the original language. A-v = primary text read through a relay, translation or OCR. B = reliable secondary source. C = single secondary source. D = unverified lead, never stated as fact.
Archived copies are in [`sources/archive/`](../sources/archive/) (method `research-agent` in `index.tsv`). Every URL is listed in [`data/external/research-2026-11/gpl-sources.tsv`](../data/external/research-2026-11/gpl-sources.tsv) with a verbatim quote, checked by script against the archived text.

---

## Key findings

1. **FACT (A).** China's Supreme People's Court (SPC) has decided two GPL appeals on the merits. They are *Luohe v Fengling* ((2021)最高法知民终2063号, 5 May 2023, GPLv3) and *Wangjing v Yibang* ((2021)最高法知民终51号, 12 Oct 2023, GPLv2). Their reasoning was then distilled into an SPC "adjudication point" (裁判要旨, Dec 2024) and into item 25 of the SPC annual report on IP law application (Apr 2026).
2. **FACT (A).** The Observatory's "OfficeTen case" is *Wangjing Technology (Suzhou) v Zhejiang Yibang and Suzhou Qi'ao*. "OfficeTen" is the name of the plaintiff's gateway software. The SPC held that "whether a developer violated GPLv2" and "whether it holds copyright" are "two relatively independent legal questions". A GPL violator may therefore still sue infringers.
3. **FACT (A / A-v).** Chinese courts treat the GPL as a contract: a standard-form copyright licence (格式化著作权许可使用协议) subject to a **condition subsequent** (附解除条件). Breach terminates the licence automatically, and continued use becomes copyright infringement. German courts reached the same construction in 2004 under §158(2) BGB.
4. **FACT (A).** France reached the same practical result by a different route. In *Entr'ouvert v Orange*, the Cour de cassation (5 Oct 2022) applied CJEU *IT Development* (C-666/18). It held that a licensor may sue for infringement (contrefaçon) even though the breach is contractual. On remand, the Paris Court of Appeal (14 Feb 2024, RG 22/18071) awarded **EUR 800,000 in damages plus EUR 60,000 in costs**. **Correction:** our C-level note said EUR 650,000. That figure counts only two of the three damages heads.
5. **FACT (A-v / B).** On the copyright of a violator's own work, Chinese lower courts are split. Nanjing (2021)苏01民初3229号 refused to protect a GPL-tainted program. The SPC (2023) and the Jiangsu High Court ((2024)苏民终581号) hold that the plaintiff's own non-compliance is no defence, though it may reduce damages. **We found no European judgment on this question.**
6. **FACT (A-v).** Chinese GPL litigation is mainly **commercial**: firms sue competitors, and the GPL is often raised as a defence. One licensor ran a **mass-litigation campaign** (DedeCMS) that the Wuxi court criticised by name. European enforcement is mainly **community-driven**: individual kernel and netfilter authors (Welte, Hellwig), developer groups (Stockfish) and SFC-funded users (Steck v AVM). Commercial licensors (Entr'ouvert) are the exception.
7. **INFERENCE.** Damages are low in both jurisdictions, except where the licensor also sells the software commercially (dual licensing): Entr'ouvert in France, VirtualApp in China. German courts have split on damages for GPL breach. LG Bochum (2016) allowed licence-analogy damages, and OLG Hamm (2017) set them at zero on appeal.

---

## 1. China: the case law

### 1.1 Cases table

| # | Court, date | Case no. | Parties | Licence | Holding (short) | Level | Source |
|---|---|---|---|---|---|---|---|
| C1 | Beijing No. 1 Intermediate Court, 2011 (final) | not verified | Huilan v Beijing Zhonghengdian (EasySite / G-BOP) | GPL / BSD (DNN) | An open-source licence is valid. The plaintiff's software, though an "illegal derivative work", is still protected | C | CMS 2018; Hankun 2023 |
| C2 | Beijing IP Court (2015 filing; judgment date not verified) → **Beijing High Court, 6 Nov 2019** | (2015)京知民初字第631号 → **(2018)京民终471号** | Digital Heaven (DCloud, HBuilder) v YouZi (APICloud) | GPLv3 (Aptana module) | Three plug-ins are independent works, and the GPL does not bind them because no GPL file sits in their folders or the root. Infringement found. Damages cut on appeal from RMB 1.25m (plus costs) to **RMB 500,000 + 210,000 costs** | A-v | iphouse relay of judgment |
| C3 | Shenzhen Intermediate Court, 30 Apr 2021 → **SPC IP Tribunal, 5 May 2023** | (2019)粤03民初3928号 → **(2021)最高法知民终2063号** | Jining Luohe (VirtualApp) v Fujian & Beijing Fengling (点心桌面) | GPLv3 | The GPL is a contract with a condition subsequent, and failing to release source terminates the licence. The project manager may sue without the contributors' consent. No notice-and-cure step is needed before suing. **RMB 500,000** upheld | A | ipc.court.gov.cn full text |
| C4 | **Guangzhou IP Court, 29 Sep 2021** (final, no appeal) | **(2019)粤73知民初207号** | Jining Luohe v Guangzhou Wanyou and others | GPLv3 | Same contract construction. The licensor's "commercial use needs authorisation" rider is a void "further restriction" (GPLv3 §§7, 10). The defendant may charge membership fees, but its failure to release source was infringement. **RMB 500,000**. Listed among the SPC's **2021 Top-10 IP cases** | A (SPC list) / A-v (judgment via elawcn) | court.gov.cn 355881; elawcn |
| C5 | Nanjing Intermediate Court (date not verified; reported as final) | (2021)苏01民初3229号 | Nanjing Weilai (未来, bid-document tool) v Jiangsu Yunqingting (云蜻蜓) | GPLv2 + Classpath Exception (SharpZipLib) | The main program is GPL-derivative and unreleased, so the plaintiff's licence terminated and its infringement claim on that part is **rejected** (good-faith reasoning). The separable preview program is protected | B (Hankun, 2 articles) | hankunlaw.com |
| C6 | Suzhou Intermediate Court, 14 Jul 2020 → **SPC IP Tribunal, 12 Oct 2023** | (2018)苏05民初845号 → **(2021)最高法知民终51号** | Wangjing Tech (Suzhou) ("OfficeTen") v Zhejiang Yibang, Suzhou Qi'ao | GPLv2 (OpenWRT) | This is an infringement case, not a contract case. Privity bars ruling on the plaintiff's GPL compliance when the OpenWRT rightholders are not parties. Whether the plaintiff breached the GPL and whether it holds copyright are independent questions. **RMB 500,000** upheld | A | ipc.court.gov.cn 3773, 3042; court.gov.cn 425412; ifross/OpenAtom translation |
| C7 | **Wuxi Intermediate Court**, judgment reported 19 Feb 2024 (date line illegible in our copy) | **(2023)苏02民初482号** | Shanghai Zhuozhuo (DedeCMS) v a website operator (name redacted) | GPLv2-or-later (sphinxclient), analysed under GPLv3 | DedeCMS links to the GPL library sphinxclient, so the whole program must be GPL. The licensor cannot charge licence fees, so there was no infringement of the reproduction right. Its attribution rider is valid under GPLv3 §7(b), so attribution infringement was found: **RMB 800** total. The court criticised the licensor's mass litigation. Appeal lies to the Jiangsu High Court | A-v (OCR of judgment PDF) | oschina-hosted PDF |
| C8 | **Jiangsu High Court**, 2024 | **(2024)苏民终581号** | not stated in our source | "open-source licence" (not stated) | Being bound by an open-source licence does not mean the rights software was licensed under it. "Plaintiff did not open-source" is generally no defence, but it may reduce damages. **SPC annual report (2025), item 25** | A (SPC summary); parties not verified | ipc.court.gov.cn 5637 |
| C9 | SPC IP Tribunal | (2019)最高法知民终663号 | Bu Luan Mai (不乱买) v Shanliang Shishang (闪亮时尚) | unspecified "open-source code" | Only the back-end code was claimed. The defendant did not prove it contained open-source code, so the defence failed | C (quoted in Hankun) | hankunlaw.com 13031 |

**Note on the brief.** The brief named "不乱买 v 未来购". We found no such case. The nearest matches are C9 (不乱买 v 闪亮时尚, SPC) and C5 (a Nanjing case brought by "未来公司"). **INFERENCE:** the brief's name conflates the two.

### 1.2 Notes per case

**C6 Wangjing v Yibang ("OfficeTen"): the SPC's main GPL ruling.**
- **FACT (A).** The plaintiff's OfficeTen gateway software was developed from OpenWRT (GPLv2). The defendants hired two former employees, who downloaded the source code from the plaintiff's server. A forensic report found 90.2% identity in the non-open-source code (People's Court Daily, reprinted on court.gov.cn on 18 Feb 2024 and ipc.court.gov.cn on 19 Feb 2024).
- **FACT (A).** The SPC gave three reasons for rejecting the GPL defence (裁判要旨, ipc.court.gov.cn, 13 Dec 2024).
  1. The dispute is "著作权侵权纠纷，而非合同纠纷". Under privity, the court should not decide whether the plaintiff breached the GPL while the OpenWRT rightholders are absent.
  2. The defendants had no evidence that the plaintiff waived its copyright through the GPL.
  3. Even an assumed "权利瑕疵" (defect of title) does not bar an infringement remedy.
- **FACT (A).** The court added a reservation. Its ruling "并不表明" that the plaintiff escapes its own potential liability to upstream rightholders.
- **FACT (A).** The award was RMB 500,000. The SPC split it into RMB 425,000 in damages and RMB 75,000 in costs. The SPC approved the first-instance figure "且已考虑到 OpenWRT 系统软件等因素" (ifross/OpenAtom bilingual text of the judgment, A-v). The plaintiff's open-source base was therefore discounted at the damages stage.
- **FACT (A).** The SPC listed the case among its "five years, 100 cases" typical cases (published 15 May 2024).
- **FACT (B).** Commentators split. Wang Qian (ECUPL, quoted in People's Court Daily) likens the case to an unauthorised film adaptation of a novel, which is still protected against third parties. Lawyer You Yunting argues that the judgment does not deny GPL "infectiousness" (Jiemian; not archived).

**C3 Luohe v Fengling (SPC 2023).** This is the leading SPC statement on licence nature and standing.
- **FACT (A).** The SPC endorsed the lower court's analysis. "GPL3.0协议的内容具有合同性质，开源软件的发布可视为要约，用户使用即为承诺". The licence is "附解除条件", so failure to release source terminates it automatically.
- **FACT (A).** On standing, contributors who submit pull requests do not become joint authors: "软件开源并不会当然产生项目管理人与贡献者推定为合作作者的效力". The project manager "无需贡献者的同意或授权".
- **FACT (A).** The GPLv3 §8 notice-and-cure mechanism is no precondition to suing. The patent no-litigation clause in §10 does not bar copyright suits.
- **FACT (A).** The SPC refused to divide the damages. Contributors who later prove authorship must claim a share from Luohe.

**C4 Luohe v Wanyou (Guangzhou IP Court 2021).**
- **FACT (A-v).** The court held that breach of an open-source licence gives a choice between contract and tort remedies: "两者竞合，由当事人自行选择". It assessed the case in tort at the plaintiff's election.
- **FACT (A-v).** The court struck down Luohe's own "commercial use requires authorisation" rider as a "进一步限制" under GPLv3 §10.
- **FACT (A-v).** The judgment describes open-source authors as having transferred ("让渡") all economic rights to users. **INFERENCE:** this is a loose formulation, and later SPC judgments do not repeat it.
- **FACT (A).** "一审宣判后，双方当事人均未上诉" (SPC Top-10 list, 21 Apr 2022).

**C5 Nanjing (2021)苏01民初3229号.**
- **FACT (B).** According to Hankun (Mar 2023), the court held that the plaintiff's main program was a derivative of SharpZipLib and did not qualify for the Classpath Exception. The plaintiff's licence therefore terminated.
- **FACT (B).** The court refused relief on good-faith grounds. Granting it would create "一个不当、不法的行为人指责另一个实施相同行为的不当、不法行为人的逻辑怪圈" (quoted by Hankun).
- **FACT (B).** The plaintiff won only on the separable preview program. Hankun calls this the first final civil judgment to accept a "GPL defence".
- **INFERENCE.** This is the opposite of C6 on the same question. C6 is an SPC judgment, and C8 (Jiangsu High Court, 2024) follows C6, so C5 now looks like an outlier.

**C7 DedeCMS (Wuxi, (2023)苏02民初482号).**
- **FACT (A-v, OCR).** The plaintiff claimed RMB 5,800 (the commercial licence fee) plus RMB 8,700 in costs.
- **FACT (A-v, OCR).** The court called open-source licences "附条件地许可给不特定公众的著作权许可合同". It found that sphinxclient is called inside the program, not across a process boundary, so the two form "一个大程序的两个组合部分". The whole program had to be released under the GPL. The licensor's commercial-use clause conflicts with the GPL, and the defendant "获得了对涉案软件使用的授权".
- **FACT (A-v, OCR).** The attribution clause was upheld as a permitted additional term under GPLv3 §7(b). Breach of it infringed the right of authorship (署名权): RMB 800 and an apology on the defendant's homepage.
- **FACT (A-v, OCR).** In setting damages, the court said the licensor, "在使用他人代码时却未遵守他人软件的GPL许可协议", acted against good faith (OCR text: "有违诚信和原则"). It also said the licensor's nationwide mass suits "大量占用解决纠纷的公共资源". The operative text says any appeal lies to the Jiangsu High Court.
- **INFERENCE.** Commentators (You Yunting, Zhichanli, 20 Mar 2024) expected the appeal to go to the SPC. The judgment's own text points to the Jiangsu High Court, so that expectation was mistaken.

**C8 Jiangsu High Court (2024)苏民终581号.**
- **FACT (A).** The SPC annual report (2025) summary, published 21 Apr 2026, gives the holding: "权利软件受开源协议的约束，并不意味着权利软件自动适用开源协议进行了许可". The plaintiff's non-compliance "可作为确定赔偿数额的考量因素".
- **INFERENCE (not verified).** Our working hypothesis is that this is the appeal from a DedeCMS mass-litigation judgment, possibly C7 itself. Three facts point that way: the court is the Wuxi appeal court, the case was docketed in 2024, and the holding answers exactly the question Wuxi decided. If so, the Wuxi "GPL defence" result was not followed on appeal. Parties and outcome must be confirmed from the full judgment.

**C2 DCloud v YouZi (Beijing).**
- **FACT (A-v).** The Beijing High Court accepted that the three plug-ins are independent works. It rejected the GPL defence because the defendants conceded that no GPL text was in the plug-ins' folders or the root directory.
- **INFERENCE (B, CMS 2018).** The test used for licence scope (where the licence file sits) is a formal one. Commentators criticised it.

**C1 Huilan (Beijing, 2011).**
- **FACT (C, quoted by Hankun).** The court said the plaintiff's software, "虽然是非法演绎作品", is still protected, and a GPL-based non-infringement defence fails. This is an early Chinese answer to the "violator's copyright" question. It is consistent with C6. Case number not verified.

### 1.3 Institutional signals 2024–2026

- **FACT (A).** In January 2026, the SPC listed "开源技术知识产权法律问题研究" (legal questions of IP in open-source technology) as a major annual judicial research topic. Source: SPC IP Tribunal roundtable published 24 May 2026.
- **FACT (A).** A roundtable participant (辜凌云) summarises the Chinese position as follows. The GPL is a "附解除条件的著作权合同" (C4). A licence defect "不阻却对第三方侵权的救济" (C6).
- **FACT (A).** A roundtable participant (Zhang Ping, 张平) lists open questions: unilateral revocation by contributors, multi-licence conflicts, and the standing of Chinese translations of foreign licences. The same participant proposes an OpenAtom-led mediation or arbitration channel for licence disputes.
- **FACT (B).** A law-firm review (Landi/iCourt, 2 Sep 2026) treats C3, C5, C6 and C8 as the current body of law. We found **no other 2024–2026 GPL judgment.**
- **Negative result.** We found **no Chinese judgment on the AGPL** and **no judgment on any Mulan licence**. This is not an exhaustive search of 中国裁判文书网.

---

## 2. Europe: the case law

### 2.1 Cases table

| # | Court, date | Case no. | Parties | Licence | Holding (short) | Level | Source |
|---|---|---|---|---|---|---|---|
| E1 | LG München I, 19 May 2004 (prelim. injunction of 2 Apr 2004 upheld) | 21 O 6123/04 | Harald Welte v Sitecom Deutschland | GPLv2 (netfilter/iptables) | The GPL is valid standard terms. §4 GPL operates as a condition subsequent (§158(2) BGB). It is not an inadmissible split of rights under §31 UrhG. Injunction granted | A-v (ifrOSS English translation) | ifross.org PDF |
| E2 | LG Frankfurt a.M., 6 Sep 2006 | 2-6 O 224/06 | Welte v D-Link | GPLv2 (msdosfs, mtd, initrd) | First German main-proceedings judgment. Authorship of separately written modules; GPL incorporated as standard terms; §4 is not unfair; antitrust objections fail. Claim granted. Damages amount **not verified** | B (ifrOSS commentary) | ifross.org |
| E3 | LG Berlin, 2011 (judgment reported 8 Nov 2011) | 16 O 255/10 not verified | AVM v Cybits | GPLv2 (Linux in Fritz!Box firmware) | Third parties may modify and reinstall the GPL parts of router firmware. AVM's copyright and trademark claims rejected, except on misleading status displays | B (FSFE, party-aligned) | fsfe.org |
| E4 | LG Bochum, 3 Mar 2016 → OLG Hamm, 13 Jun 2017 | I-8 O 294/15 → 4 U 72/16 | Rightholder v a university (WLAN software) | GPLv2 | LG: licence-analogy damages are available even for gratis GPL software (dual licensing). **OLG: no damages; value of use "zero"**; injunction and warning costs only | B (ifrOSS) / C (Kanzlei Plutte via fetch, not archived) | ifross.org; ra-plutte.de |
| E5 | LG Hamburg, 2016 → OLG Hamburg, 28 Feb 2019 | not verified | Christoph Hellwig v VMware | GPLv2 (Linux kernel) | Dismissed on evidence and standing: Hellwig did not identify his protected code in VMware's product. Merits not reached. No further appeal | B (SFC) | sfconservancy.org |
| E6 | LG München I, settlement 7 Nov 2022 | 42 O 9765/21 | Stockfish developers v ChessBase | GPLv3 | **Settlement**: one-year distribution ban, licence reinstated afterwards on compliance, a compliance officer, and contractual penalties | B (FSFE) | fsfe.org |
| E7 | LG Berlin, 2023–2024 (fees ruling; not appealed) | not verified | Sebastian Steck (device purchaser) v AVM | LGPLv2.1 | Resolved when AVM delivered installation scripts. AVM paid the plaintiff's fees. **No merits judgment** (reports differ) | B (SFC) / C (heise) | sfconservancy.org |
| E8 | CA Paris, 16 Sep 2009 | 04/24298 (reported) | Edu4 v AFPA | GPL (VNC) | Edu4 breached the GPL by distributing modified VNC without source. Outcome on termination not verified | C | edri.org, linuxfr.org (not archived) |
| E9 | TGI Paris, 21 Jun 2019 → CA Paris, 19 Mar 2021 → **Cass. civ. 1re, 5 Oct 2022** → **CA Paris, 14 Feb 2024** | RG 11/07081 → 19/17493 → **n° 21-15.386** → **RG 22/18071** | Entr'ouvert v Orange, Orange Business Services | GPLv2 (Lasso) | 2019/2021: infringement claim inadmissible (non-cumul of contract and tort). 2021: **EUR 150,000 for parasitism**. 2022: quashed; the licensor may sue in infringement (CJEU C-666/18). 2024: infringement of Lasso through breach of GPLv2 §§2, 3, 4, 10 and of moral rights. **EUR 500,000 + 150,000 + 150,000** and **EUR 60,000** in costs. No further appeal | A | Joinup PDF; curia.europa.eu PDF; april.org |
| E10 | **CJEU (5th Ch.), 18 Dec 2019** | **C-666/18** | IT Development v Free Mobile | proprietary licence | Breach of a software-licence clause concerning IP rights is an "infringement of IP rights" under Directive 2004/48. The rightholder gets the Directive's guarantees "regardless of the liability regime applicable under national law" | A-v (dispositif as quoted by Cour de cassation and CA Paris) | curia.europa.eu (via French judgments) |

**Negative results.**
- **No BGH ruling** on the GPL was found.
- No GPL judgment was found in the **Netherlands, Spain or Italy**. *Jin v IChessU* was an Israeli dispute that was settled in 2008. It was not a Dutch case.
- The French **Free/iliad** dispute (BusyBox/iptables, 2008–2011) is reported as settled. Not verified.
- **No court decision under the EUPL** was found.

### 2.2 Notes

- **FACT (A-v).** In E1, the Munich court answered the German law objection that rights of use cannot be split arbitrarily. It held that "GPL No. 4 does not constitute a circumvention of German Copyright Act Section 31 Para. 1 Subsect. 2." Its reasons: the offer to license stays open, and the infringer can re-acquire rights by complying.
- **FACT (A).** In E9, the Cour de cassation (para. 19) held that a rightholder who would lose the guarantees of Articles 7 and 13 of Directive 2004/48 by suing in contract "est recevable à agir en contrefaçon". The CA Paris on remand quoted C-666/18 verbatim and awarded damages under three separate heads. The heads were economic consequences, moral prejudice (including the omitted attribution of Lasso in Orange's code) and the infringer's profits.
- **FACT (A).** April confirmed with the Cour de cassation registry that no further appeal was lodged against the 2024 ruling (update of 24 May 2024).
- **FACT (B).** In E5, SFC concluded that the ruling was decided "on procedure and standing, not on substance" and "does not set precedent".
- **INFERENCE.** German enforcement relies on summary proceedings (einstweilige Verfügung) and on settlements. Few merits judgments exist, so the doctrine rests on E1, E2 and a handful of LG decisions from 2015–2016 (Leipzig, Hannover, Halle, Bochum; C, not archived).

### 2.3 EUPL and developments 2024–2026

- **FACT (A).** EUPL-1.2 Art. 15 chooses the law of the EU Member State where the licensor is established, or Belgian law if the licensor is outside the EU. Art. 14 gives disputes to the court of the licensor's residence, and to the CJEU (Art. 272 TFEU) where an EU institution is the licensor. All linguistic versions "have identical value".
- **FACT (A).** By contrast, the GPL has no choice-of-law clause and an English-only official text. The SPC judge in C6 had to produce his own translation (People's Court Daily, 2024).
- **FACT (B).** Developments 2024–2026 in Europe:
  - Orange did not appeal E9.
  - E7 closed in late 2024; SFC announced the outcome on 9 Jan 2025.
  - We found no new European GPL merits judgment in 2025–2026.
  - The 23 Dec 2025 *SFC v Vizio* ruling is a US case and is outside scope.

---

## 3. Comparative assessment

### 3.1 Comparison table

| Question | China | Europe |
|---|---|---|
| Legal nature of the GPL | Contract: a standard-form copyright licence, accepted by conduct, with a condition subsequent (C3, C4, C7; A) | Germany: standard terms (AGB) with a condition subsequent, §158(2) BGB (E1, E2; A-v/B). France: a licence contract whose breach is also contrefaçon (E9; A) |
| Contract vs infringement claim | Claimant chooses (C4: "竞合"). Courts in practice decide in tort (C3, C4, C6) | Germany: copyright infringement after automatic termination. France: non-cumul rule overridden for IP licences by C-666/18 (E9, E10) |
| Who can sue | Project manager or main author alone; contributors are not presumed joint authors (C3, C4; A) | Individual authors of identifiable code (E1, E2). Failure to prove authorship of specific code is fatal (E5). Device purchasers have sued under the LGPL (E7; no merits ruling) |
| Notice-and-cure before suit (GPLv3 §8) | Not required (C3; A) | No ruling found |
| Scope of copyleft ("infectiousness") | Decided on the facts: in-process calls and linking bring code in (C7, C5, C4). Separate folders or modules stay out (C2). The SPC avoided the question in C6 | Rarely decided. No European court has ruled squarely on linking. E3 treats firmware as a collective work |
| Licensor's added restrictions | "Commercial use needs a licence" riders are void as "further restrictions" (C4, C7). Attribution riders are valid under §7(b) (C7) | No equivalent ruling found |
| Does a GPL violator keep copyright? | **Yes**, says the SPC (C6) and the Jiangsu High Court (C8). Non-compliance may lower damages (C6, C8). **No**, said Nanjing (C5; outlier) | **No judgment found.** INFERENCE: the general rule that unauthorised adaptations are themselves protected would point to "yes" (not verified against case law) |
| Remedies | Injunction, damages, apology or "eliminate effects"; take-down of apps (C3, C4) | Injunction (mainly summary), information claims, damages, costs; settlements with compliance programmes (E6) |
| Damages | Mostly statutory, at the old RMB 500,000 cap (C3, C4, C6). RMB 710,000 (C2). RMB 800 (C7) | EUR 0 (E4, OLG Hamm) up to EUR 950,000 in total across E9 (incl. EUR 150,000 for parasitism) |
| Litigation culture | Commercial: competitors, ex-employee code theft. The GPL is often a defence. Mass litigation by one licensor (C7). Courts curb abuse through damages | Community: individual developers, gpl-violations.org, SFC, FSFE. Aim: compliance, not money. One commercial suit (E9) |
| Apex court role | The SPC writes rules (裁判要旨, typical cases, annual report, 2026 research topic) | No BGH ruling. The Cour de cassation and the CJEU rule on procedure and remedies, not on copyleft scope |

### 3.2 Discussion

**Characterisation.**
- **INFERENCE (from A sources).** Both systems use contract-law tools: the Chinese 附解除条件 and the German §158(2) BGB. With them, both convert a licence breach into copyright infringement.
- **INFERENCE.** Neither follows the US "condition vs covenant" debate (Jacobsen v Katzer is cited as background by a participant in the SPC roundtable of May 2026).
- **INFERENCE.** France arrived late and by a different route. EU law (C-666/18) forced the opening of the infringement route, because the remedy guarantees of Directive 2004/48 must be available whatever the national liability regime.
- **INFERENCE.** The practical outcomes now converge. A violator loses its licence, the author may sue for infringement, and an injunction is available.

**The "unclean hands" question.**
- **INFERENCE.** This is the sharpest difference, and it exists only because China has the cases. In China the GPL is often pleaded *against* the plaintiff: a defendant who copied proprietary code argues that the plaintiff's own GPL obligations make the code free.
- **INFERENCE.** The SPC's answer protects investment, with the sanction moved to damages. The plaintiff keeps its copyright, the defendant gets no licence, and the court reduces the award for the GPL base (C6, C8). It also leaves upstream authors free to sue the plaintiff (C6).
- **INFERENCE.** In Europe the scenario has not reached a court as far as we can find. European defendants have argued that the plaintiff lacked title (E5), not that the plaintiff's work had to be free.
- **INFERENCE.** The SPC's approach has a cost for copyleft. Downstream users cannot themselves enforce the plaintiff's copyleft obligation. Only the upstream author can, and, as the SPC noted, that author is usually foreign and absent from the case.

**Who enforces copyleft.**
- **INFERENCE.** In Europe, upstream authors (kernel and netfilter developers) enforce the GPL against device makers.
- **INFERENCE.** In China, no reported case has an upstream international author suing a Chinese distributor. In C6, the OpenWRT authors were absent and the court declined to examine the plaintiff's compliance for that reason.
- **INFERENCE.** As a result, Chinese copyleft compliance is policed mainly by defendants raising it as a defence, and through damages reductions.

**Damages.**
- **FACT (A).** Chinese awards cluster at RMB 500,000, which was the statutory cap under the 2010 Copyright Law (C3, C4, C6). The 2020 law raised the cap to RMB 5 million (quoted in C7).
- **FACT (A).** The French award of EUR 800,000 reflects a commercial licensor with a public-procurement market.
- **FACT (B/C).** German courts are split on whether gratis GPL use has any licence value (E4).

**Mass litigation.**
- **FACT (A-v).** Wuxi (C7) is the only judgment in either jurisdiction that criticises a GPL-related enforcement *model*.
- **INFERENCE.** Europe has no parallel. The nearest European concern is the "copyright troll" debate around Patrick McHardy's kernel enforcement in Germany, which we did not research or verify (D, lead only).

---

## 4. What this means for EU–China cooperation

1. **INFERENCE.** European authors whose GPL code is used in Chinese products can rely on Chinese courts to treat the GPL as an enforceable licence. Breach terminates it (C3, C4). Standing is generous for a project manager or main author (C3), and the GPLv3 §8 notice is not a precondition (C3). A European author has standing as a foreign rightholder under the Berne Convention (general law, not checked here).
2. **INFERENCE.** A Chinese firm that ships European GPL code without releasing its source does not lose copyright in its own additions against Chinese copiers (C6, C8). European upstream authors keep a separate claim against that firm (C6 reservation). For European contributors, the SPC's privity reasoning (C6) means compliance is not reviewed unless the upstream author is a party. Enforcement therefore requires the European author to litigate in China.
3. **INFERENCE.** Chinese contributors to European projects face a mirror picture. GPL enforcement in Germany is author-driven, and E5 shows that German courts require precise proof of which code a plaintiff wrote. Clear authorship records (sign-offs, DCO, CLAs) matter in both systems: C3 relied on GitHub merge history, and E5 failed for want of it.
4. **INFERENCE.** Both systems reject licensor-added commercial restrictions where the licence forbids them (C4, C7). European firms that dual-license (the Entr'ouvert model) should not expect a Chinese court to enforce a "commercial use requires authorisation" rider on GPL code.
5. **FACT (A).** **Mulan PSL v2** is bilingual, and "THE CHINESE VERSION SHALL PREVAIL" in case of divergence. It has no choice-of-law clause in the text we archived. **EUPL-1.2** chooses the licensor's Member State law and courts and gives all language versions equal value.
   - **INFERENCE.** A European contributor to a Mulan-licensed Chinese project accepts a Chinese-text-controlling licence. A Chinese contributor to an EUPL project accepts the law of the licensor's EU Member State.
   - **INFERENCE.** Neither licence has yet been tested in court (negative result).
6. **FACT (A, repo record CNC-12).** **GB/T 44272-2024** ("Information technology – Open source – Open source licence framework") was published on 23 Aug 2024 and took effect on 1 Mar 2025 (SAMR listing). Its full text has not been read.
   - **INFERENCE.** As a recommended national standard, it does not bind courts. It may still give Chinese judges a vocabulary for licence elements. Whether it addresses copyleft scope or the condition-subsequent construction is **not verified**.
7. **INFERENCE.** The SPC's 2026 research topic on open-source IP and its proposed OpenAtom mediation channel create an opening for structured dialogue. The partners could be EU judicial-training bodies, EUIPO, or the European Commission OSPO under the Interoperable Europe framework. A concrete shared agenda would cover four questions:
   - the condition-subsequent construction;
   - remedies for violators' works;
   - the GPLv3 §8 cure period;
   - licence-text language (official translations of GPL, EUPL and Mulan).

---

## 5. Not verified / open questions

1. **(2024)苏民终581号.** Parties, date and whether it is the DedeCMS appeal (C7) are not verified. Full judgment not read.
2. **Wuxi C7 date.** The date line is illegible in our OCR copy (seal). The date of 19 Feb 2024 comes from secondary sources (KAIYUANSHE report, You Yunting). Defendant's name is redacted in our copy.
3. **Nanjing C5.** Judgment date, full party names and finality are from Hankun only (B). Primary text not read.
4. **Beijing IP Court C2** first-instance judgment date not verified. The Beijing High Court judgment is from a database relay (A-v).
5. **C1 Huilan v Zhonghengdian (2011).** Case number and text not verified (C).
6. **C9 不乱买 v 闪亮时尚.** Date and full holding not verified (C).
7. **VirtualApp licence change date.** C4 refers to a version before "撤回GPLV3协议即2019年10月29日". C3 says the GPL statement was deleted on 29 Oct **2017**. The discrepancy is unresolved.
8. **Chinese AGPL / Mulan cases.** None found. 中国裁判文书网 was not searched directly.
9. **Germany.**
   - E2 damages figure (≈EUR 3,000 reported on a mailing list) not verified.
   - E3 case number and appeal not verified.
   - E5 file numbers not verified.
   - E4 OLG Hamm reasoning read only through a law-firm summary fetched by tool. No copy is archived, and a quote is not given.
   - LG Berlin 2006 (16 O 134/06), LG München I 2007 (7 O 5245/07, Skype), and the 2015 Leipzig, Hannover and Halle decisions are C, not archived.
   - The McHardy enforcement controversy is a lead (D).
10. **No BGH GPL ruling** was found. This is not exhaustive (juris not searched).
11. **France.** E8 (Edu4/AFPA) outcome on termination and the Free/iliad settlement are not verified.
12. **CJEU C-666/18.** The judgment text could not be fetched (EUR-Lex returned empty or blocked responses). Its holding is taken from the verbatim quotations in the Cour de cassation and CA Paris judgments (A-v).
13. **Europe, "violator keeps copyright".** No case found. The doctrinal inference (unauthorised adaptations are protected) is not checked against German or French case law.
14. **GB/T 44272-2024** content not read. The Mulan PSL v2 governing-law position is based on the SPDX text only.
15. **Exchange rates.** Not applied. Compare RMB and EUR amounts only with an explicit rate and date.
