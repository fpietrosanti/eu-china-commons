# Telegram <-> WeChat community bridge: options, compliance, architecture

Research date: 2026-11-28. Web research only. Nothing was signed up for, bought, or sent.
Labels: **(V)** checked on the primary source (repo, official doc or vendor page) during this session; **(R)** third-party report (blog, forum, media); **(U)** unclear, contradictory or unverified.
GitHub figures (stars, last push, licence, archived flag) come from the GitHub API on 2026-11-28 **(V)**.

---

## 0. Bottom line (read this first)

1. **No official, compliant way exists today to run an automatic two-way bridge into an ordinary WeChat group.**
   - Tencent's only official bot channel for personal WeChat is ClawBot / iLink (launched in March 2026). It handles 1:1 chats only and cannot join groups **(R, consistent across several sources)**.
   - Official WeCom routes cannot post freely into external customer groups:
     - a member has to confirm each mass message **(V)**;
     - bots and webhooks are restricted to internal groups **(R)**;
     - WeCom verification is open only to mainland-China entities **(V)**.
2. **Every working bridge to a normal WeChat group uses an unofficial client**, of one of these kinds:
   - iPad protocol, e.g. WeChatPadPro or the GeWe SaaS;
   - Windows hook, e.g. WeChatFerry (now archived);
   - UI automation, e.g. wxauto on Windows or WorkTool on Android.

   All of them breach the WeChat software licence and service agreement, §8.2.1.4 and §8.2.1.6 **(V)**: no "plugins, cheat tools or third-party tools/services not authorised by Tencent", and no automated operation through such software. The penalties run from restricting features up to a permanent ban **(V, §8.5.1)**. Tencent is actively cracking down on this. Gewechat shut down and cited Tencent's announcement against "illegally obtaining and using WeChat end-user data" **(V)**.
3. **Recommended approach: build the Telegram side and the bridge core properly. Treat the WeChat adapter as a replaceable, risk-accepted plug-in.** The account behind it is expected to get banned at some point.
   - Start with a self-hosted iPad-protocol adapter (WeChatPadPro in Docker on the French server) on a dedicated, aged, real-name WeChat account, at low volume.
   - Keep a **human-relay fallback** (a moderator plus a daily translated digest) that needs no unofficial software.
   - If a Chinese partner institution can own a verified WeCom, the compliant alternative is a WeCom customer group with a permanent join QR. It is only *semi*-automatic, with outbound messages confirmed by a staff member.
4. The project positions itself as an EU–China *commons* observatory. Put the ToS issue in writing in the governance documents, so it is a known and accepted risk and is not discovered later by members. The section 7 options avoid it.

---

## 1. Open-source bridges and WeChat adapters

### 1.1 Comparison table

| Project | Stars / last push / licence (V) | WeChat protocol | Needs Windows + PC WeChat? | Groups | Media | Join events | Path to Telegram | Status and notes |
|---|---|---|---|---|---|---|---|---|
| **Wechaty** (framework) [repo](https://github.com/wechaty/wechaty) | 23,623 / 2026-11-28 / Apache-2.0 | depends on puppet | depends on puppet | yes (Room API) | yes | `room-join` event (puppet-dependent) | none built in. You write the TG side; the old [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice) has 147 stars, last push 2022-09 | Core is active. Community dev server shut down 2026-01-01 **(R, [PMC notice](https://groups.google.com/g/wechaty/c/Qn0_UDCwbDY))**. A downstream README calls Wechaty "not actively maintained" and says "the padlocal author is no longer maintaining it" **(R, [wechat-bot](https://github.com/wangrongding/wechat-bot))** |
| puppet-padlocal [repo](https://github.com/wechaty/puppet-padlocal) | 768 / 2023-07-04 / Apache-2.0 | iPad (paid token) | no | yes | yes | yes | via Wechaty | **Likely dead.** `pad-local.com` did not resolve in DNS on 2026-11-28 **(V)**. No price found |
| puppet-wechat4u [repo](https://github.com/wechaty/puppet-wechat4u) | 130 / 2024-05-31 / Apache-2.0 | Web / UOS web | no | yes | partial | yes | via Wechaty | Web login is closed to most accounts **(R)**. High warning/ban risk **(R, wechat-bot README)** |
| puppet-xp [repo](https://github.com/wechaty/puppet-xp) | 550 / 2025-07-29 / Apache-2.0 | Windows hook (Frida) | **yes**, PC WeChat pinned to 3.9.10.27 or older | list/send; room-join only up to 3.9.2.23 **(V)** | partial | ≤3.9.2.23 | via Wechaty | Pinned to old clients |
| puppet-service (gRPC client) [repo](https://github.com/wechaty/puppet-service) | 83 / 2026-11-24 / Apache-2.0, **archived** (moved into the monorepo) | gateway to commercial puppets | – | – | – | – | – | Listed services: PadLocal, Paimon (Pad, "Beta", 7-day trial, ToS "to be added"), WorkPro (WeCom, Windows, sold through a QR code), Donut/WXWork deprecated **(V, [list](https://wechaty.js.org/docs/puppet-services/))**. No prices published |
| **EH Forwarder Bot** + efb-telegram-master + efb-wechat-slave [EFB](https://github.com/ehForwarderBot/ehForwarderBot) | EFB 2,936 / 2023-03-03; ETM 219 / 2024-03-06; EWS 462 / 2024-03-06; all AGPL-3.0 | Web (ItChat) | no | yes | yes | system msgs | **direct Telegram** (TG is the "master") | EWS's own README warns about web-login blocks and new accounts being unable to use Web WeChat **(V)**. Effectively obsolete |
| efb-wechat-comwechat-slave [repo](https://github.com/ehForwarderBot/efb-wechat-comwechat-slave) | 42 / 2026-01-13 / no licence | Windows hook (ComWeChatRobot) | **yes** (Windows/Wine Docker image) | "partially supported" **(V)** | partial | U | direct Telegram (EFB) | Small, partial. ComWeChatRobot is archived (1,803 stars, 2023-01) |
| **matterbridge** [repo](https://github.com/42wim/matterbridge) | 7,629 / 2024-12-12 / Apache-2.0 | **no WeChat support** **(V)** | – | – | – | – | Telegram native; has an HTTP API gateway for custom adapters | Usable as a hub only if you write a WeChat adapter yourself. Little activity since 2024 |
| **matrix-wechat** (duo) + mautrix-telegram [matrix-wechat](https://github.com/duo/matrix-wechat), [agent](https://github.com/duo/matrix-wechat-agent), [mautrix-telegram](https://github.com/mautrix/telegram) | 177 / 2025-02-19 / AGPL; agent 21 / 2024-09-11; mautrix-telegram 1,770 / 2026-11-27 / AGPL | Windows hook (ComWeChatRobot DLLs, WeChat 3.7.0.30, "disguised" as 3.8.1.26) **(V)** | **yes** | yes, both directions, incl. join/invite/leave **(V)** | text, image, sticker, video, audio, file **(V)** | yes | via Matrix (Synapse/Conduit + 2 bridges) | Best feature list, but rests on a 2022-era client and an unmaintained agent. Heavy stack. Not recommended |
| **WeChatFerry / wcferry** [repo](https://github.com/lich0821/WeChatFerry) | 6,813 / 2026-07-10 / MIT, **archived 2026-07-10** **(V)** | Windows hook (DLL injection) | **yes**, PC WeChat 3.9.12.51 **(V)** | yes (callbacks, @, forward) **(R)** | yes | yes | DIY | Archived with no stated reason. A fork, [wechatferry/wechatferry](https://github.com/wechatferry/wechatferry), has 2,114 stars, last push 2025-07-18, MIT. One report estimates the ban rate for PC hooks at ">80%" **(R, unverified)** |
| wxhelper [repo](https://github.com/ttttupup/wxhelper) | 3,209 / 2026-06-12 / MIT | Windows hook | yes | yes | yes | U | DIY | Version-pinned, same family as wcferry |
| **Gewechat** [repo](https://github.com/Devo919/Gewechat) | 3,507 / 2026-08-06 / Apache-2.0 | iPad-type service (self-described as "RPA, not a hook") | no | yes | yes | yes | DIY | **Discontinued**: "本项目已停止维护". It cites the WeChat crackdown announcement and points to the commercial GeWeAPI / QiWeAPI **(V)** |
| **WeChatPadPro** [repo](https://github.com/WeChatPadPro/WeChatPadPro) | 2,686 / 2026-11-07 / no licence | **iPad protocol** **(V)** | **no** (Linux Docker, MySQL, Redis) | yes | yes | via system msgs / callbacks (U) | DIY (webhook/WebSocket) | Prebuilt binaries; the source does not look fully open (U). Needs a paid **authorisation key per account** (price not found). Requires a **same-city SOCKS5 proxy** for logins away from the account's usual city. New-account limits: group QR 3 days, create group 3 days, add friends 7 days **(V, vendor README)** |
| **chatgpt-on-wechat → CowAgent** [repo](https://github.com/zhayujie/CowAgent) | 48,119 / 2026-11-28 / MIT | personal WeChat channel "backed by WeChat's official API" = ClawBot | no | **personal WeChat: no group support** **(V, channel table)**; WeCom bot: groups | text/img/file/voice | no | has a separate Telegram channel; it is an AI agent, not a bridge | Official route, so compliant, but 1:1 only and reply-only within 24 h of the user's last message **(V, [docs](https://docs.cowagent.ai/channels/weixin))** |
| **LangBot** [repo](https://github.com/langbot-app/LangBot) | 19,258 / 2026-11-28 / Apache-2.0 | WeCom, WeCom AI bot, Official Account (repo description). README also says "Personal & Official Account" (U) | no | U for WeChat | – | – | Telegram adapter present | LLM bot platform, no cross-platform relay |
| **AstrBot** [repo](https://github.com/AstrBotDevs/AstrBot) | 47,679 / 2026-11-28 / AGPL-3.0 | WeCom, WeCom AI bot, Official Account. Personal-WeChat adapters are not listed in the README **(V)** | no | – | – | – | Telegram adapter present | Third-party tutorials pair it with WeChatPadPro **(R, [80aj.com](https://www.80aj.com/2025/12/19/new-wechat-bot-solution-astrbot-wechatpadpro-setup-guide-en/))**. No relay feature |
| wechat-bot (wangrongding) [repo](https://github.com/wangrongding/wechat-bot) | 11,570 / 2026-09-04 / MIT | Wechaty + free web protocol | no | whitelisted groups | – | – | – | README warns: "can trigger WeChat warnings or account bans" **(V)** |
| ItChat / itchat-uos [ItChat](https://github.com/littlecodersh/ItChat), [UOS](https://github.com/why2lyj/ItChat-UOS) | 26,444 / 2023-09; 741 / 2023-02 / MIT | Web / UOS | no | yes | yes | – | – | Web protocol is dead for most accounts. Web login closed in 2019 **(R)**. The UOS route needed real-name verification plus a bank card **(R, [V2EX](https://www.v2ex.com/t/908436))** |
| **wxauto** [repo](https://github.com/cluic/wxauto), wxauto4 [repo](https://github.com/cluic/wxauto4) | 7,489 / 2026-04-13 / Apache-2.0; 229 / 2025-10-27 | Windows UI Automation | **yes**, window must stay visible | polling | limited | parse | DIY | Reported as broken on WeChat 4.0+ (Qt Quick); maintenance stopped in Oct 2025 **(R, [survey](https://yage.ai/share/wechat-uia-platform-feasibility-survey-en-20260327.html))**. Lowest detection risk, but fragile |
| WeChatPYAPI [repo](https://github.com/mrsanshui/WeChatPYAPI) | 1,089 / 2026-11-27 / no licence | Windows hook (closed DLL) | yes | yes | yes | U | DIY | Closed-source binary. Avoid on a server |
| **WorkTool** [repo](https://github.com/gallonyin/worktool) | 2,746 / 2026-09-17 / Apache-2.0 (old open version) | **Android accessibility service** (no root, no hook) **(V)** | no, needs a **dedicated Android phone** | yes (group management; WeCom versions listed) | partial | auto-accept invites etc. | DIY via its HTTP task platform | Maintained version is commercial (price not found). Still "automated operation" under ToS §8.2.1.6 |
| wechatbot-webhook [repo](https://github.com/danni-cool/wechatbot-webhook) | 2,162 / 2024-12 / MIT, **archived** | Wechaty web | – | – | – | – | – | Dead |
| "Telegram 收发微信" projects, e.g. [zhangyile/telegram-wechat](https://github.com/zhangyile/telegram-wechat) | 241 / 2023-01 / archived | EFB + web | – | – | – | – | direct | Dead. GitHub search for "telegram wechat bridge" on 2026-11-28 found **no maintained dedicated TG<->WeChat group bridge** **(V)** |
| **Official WeChat ClawBot / iLink** ([IT之家](https://ithome.com/0/931/431.htm), [TechNews](https://technews.tw/2026/03/23/tencent-enables-openclaw-integration-in-weixin/)) | official, launched around 2026-03-22 | official HTTP/JSON (ilinkai.weixin.qq.com) **(R)** | no | **no, 1:1 only, cannot join groups** **(R)** | text, image, video, file | – | – | The only ToS-clean personal-WeChat bot path, and unusable for a group bridge. Worth watching in case group support arrives |

### 1.2 Takeaways
- **Windows hooks** (wcferry, wxhelper, puppet-xp, ComWeChat, matrix-wechat-agent) all pin old PC clients (3.7–3.9.12). WeChat 4.x changed the architecture. You would need a Windows VM, a frozen client version, and acceptance of the highest detection risk. Not recommended.
- **Web protocol** (ItChat, wechat4u, EFB-EWS) is dead for practical purposes.
- **iPad protocol** (WeChatPadPro self-hosted, GeWe SaaS) is the only adapter that runs headless on Linux/Docker in France and supports groups, media and group events. It is commercial and closed, breaches the ToS, and logins from abroad need a same-city Chinese proxy.
- **Android accessibility** (WorkTool) has lower detection risk but needs a physical phone, likely in China or with a Chinese SIM, and a commercial licence.
- **Matrix and matterbridge give no WeChat advantage.** They would only add the Telegram side, which takes about 100 lines with the Bot API anyway.

---

## 2. Official and compliant routes

| Route | What it allows | Blocking limits |
|---|---|---|
| **WeCom customer group (客户群)** | Ordinary WeChat users can join an "external group" owned by a WeCom member. A **permanent "加入群聊" join QR** via API binds up to 5 groups and **auto-creates a new group when one is full** **(V, [doc 92229](https://developer.work.weixin.qq.com/document/path/92229))** | **Verification only for mainland-China entities**. Fee CNY 300 per review. Unverified accounts are capped at **100 people** for customers and external groups **(V, [help 19729](https://open.work.weixin.qq.com/help2/pc/19729))** |
| **Posting into customer groups** (`add_msg_template`) | Mass message to up to 2,000 groups per call | **"不会直接发送…需要成员确认后才会执行发送"**: a staff member must confirm each message. Cap of one message per group per day (days-in-month per month) **(V, [doc 92135](https://developer.work.weixin.qq.com/document/path/92135))**. Useless for real-time chat relay |
| **Group robot webhook** | Push only, 20 msgs/min **(V, [doc 91770](https://developer.work.weixin.qq.com/document/path/91770))** | Internal groups only; cannot receive messages **(R, several CSDN articles; one contradicts this, so U)** |
| **WeCom smart/AI bot** | Receives and sends with an LLM | Internal groups and 1:1 only, **not external groups** **(R, [CSDN 2026-10-28](https://damodev.csdn.net/6ae1cb7ee5f4ca4eff8cecf5.html))**. Customer-group "auto-reply" is keyword-based and fires only when @-mentioned **(R)** |
| **会话内容存档 (message archive)** | API to pull archived messages of selected staff | Requires verification and a paid per-seat licence (price **not found**). Customer consent events exist **(V, sidebar of [doc 91360](https://developer.work.weixin.qq.com/document/path/91360))**. Coverage of external groups is contradictory: one source says internal only **(U)**. Retention around 90 days **(R)** |
| **Group join events** | Customer-group change callbacks exist (add/remove member) | U, not re-verified in this session |
| **Official Account (公众号)** | Broadcast, 1:1 replies, menus | No groups. Overseas accounts need a third-party agent; overseas verification is quoted at USD 99 for mini-programs **(R)** |
| **ClawBot / iLink** | 1:1 with personal WeChat | No groups **(R)** |

**Verdict:** for a foreign entity, **a bidirectional automatic bridge into a WeChat group is not possible with official APIs.** With a Chinese partner owning a verified WeCom, you could get:
- inbound messages only through the archive (paid, with consent) or through a staff account's client, which is unofficial again;
- outbound messages only as staff-confirmed broadcasts.

That makes it a "semi-bridge" or digest model, not a chat bridge. Third-party vendors such as QiWeAPI and E-yun sell "member-identity" WeCom automation that bypasses this. It is the same ToS problem in WeCom form **(R)**.

---

## 3. WeChat restrictions that shape the design

- **ToS:** §8.2.1.2 (no reverse engineering), §8.2.1.4 (no plugins or unauthorised third-party tools/services), §8.2.1.5 (no tampering with runtime data), §8.2.1.6 (no third-party software for login or automated operation), §8.2.1.7 (no evading security measures), §8.3.7 (no distributing such tools). Sanctions from warnings up to a permanent ban and account reclamation; legal action and reports to authorities are possible (§8.5) **(V, [agreement](https://weixin.qq.com/agreement?lang=zh_CN))**.
- **Enforcement trend:**
  - Crackdown announcement against tools that read chats or contacts or automate replies and friend-adding **(R, [IT之家](https://ithome.com/0/850/207.htm))**.
  - Gewechat closed in reaction to it **(V)**.
  - WeChatFerry archived in July 2026 **(V; the reason was not stated)**.
- **Chinese law:**
  - Selling or using tools that break into or illegally control an information system can fall under Criminal Law Arts. 285/286. Chinese courts have prosecuted WeChat "外挂" sellers **(U, not re-verified this session)**. The risk sits mainly with tool *providers* and commercial spam operations, not a low-volume community relay. It is still a reason not to *distribute* such tools and to avoid closed binaries.
  - Group owners carry management responsibility under the CAC **互联网群组信息服务管理规定** (2017). It covers backend real-name identity and group-owner duties to manage content **(R, [CAC](https://www.cac.gov.cn/2017-09/07/c_1121623889.htm))**. Relaying uncensored Telegram content into a WeChat group makes the *group owner* (and the bot account) responsible for that content inside China, so moderate or filter the TG→WeChat direction.
  - Telegram is blocked in mainland China (common knowledge), so Chinese members cannot simply join the TG group.
- **Privacy:**
  - PIPL: Chinese members' messages are exported to a server in France and possibly to EU or US MT APIs.
  - GDPR: EU members' messages go to Chinese LLM APIs if DeepSeek or Qwen (Beijing) is used.
  - Put a notice in both groups and on the website **(U, legal analysis not done)**.
- **Group QR codes:**
  - Group QR is valid **7 days** and regenerating extends it. WeChat's own explanation was reported in 2016 **(R, [zjol](https://py.zjol.com.cn/pyxw/201603/t20160308_601155.shtml), [ifanr](https://www.ifanr.com/629313))**.
  - Above **200 members** scanning stops working and new members need an invitation from a member **(R, [V2EX](https://www.v2ex.com/t/821445); 36Kr reported a 100 threshold in an older version, so U)**.
  - No current official help page was found. Group size limit 500 is widely reported **(U)**.
  - **Implication for the website:** a static group QR on every page will break within a week. Use one of these instead:
    - (a) the **personal QR of the bot/admin account**, which is long-lived, plus "add me and I'll invite you" (the bot can auto-invite; also automation);
    - (b) a WeCom permanent join QR (official);
    - (c) a regenerated group QR pushed to the site every few days. That needs the unofficial adapter, and new accounts cannot fetch group QR for their first 3 days **(V, WeChatPadPro README)**.
- **Accounts:**
  - Registering outside China may require an existing user to scan a "help friend register" QR. Source requirements for that helper differ (1 vs 6 months of account age, WeChat Pay real-name) **(V/R, [WeChat help](https://cs.help.wechat.com/hc/en-us/articles/11900776953999-How-do-I-sign-up-for-WeChat-and-assistance-registration))**.
  - Virtual numbers often fail **(R)**.
  - Real-name verification (WeChat Pay with bank card or ID) is needed for many features and is recommended by GeWe **(V, GeWe docs "请使用正常实名账号接入")**.
- **Ban-risk reduction (vendor and community practice, R):**
  - Use a **dedicated account at least several months old with normal human history**; never the owner's personal account.
  - Make it real-name verified, ideally with a Chinese +86 number, held by a trusted Chinese co-organiser.
  - Keep the login location stable: same-city proxy, a single device, no frequent re-logins.
  - Let it "age" for at least 3 days before using group features (WeChatPadPro), better 2 weeks of normal use **(R, Zhihu)**.
  - Low volume: no mass friend-adding, no auto-pulling into groups, rate limits, random delays.
  - Do not run other plugins on the same account.
  - Expect appeals after serious bans to succeed under 10–30% of the time **(vendor claim, R)**.

---

## 4. Cheap hosted services

| Service | What | Price | Foreign customers |
|---|---|---|---|
| PadLocal (Wechaty) | iPad puppet token | **not found**. Domain does not resolve (2026-11-28) **(V)** | – (likely defunct) |
| Paimon (Wechaty puppet service) | Pad, gRPC token | not found. 7-day free trial; ToS/SLA "to be added" **(V)** | not stated |
| WorkPro (RPAChat, via Wechaty) | WeCom, Windows | not found. Purchase via a WeChat QR code **(V)** | not stated |
| 句子互动 / Juzi.bot | enterprise WeChat/WeCom bot SaaS | not found | not stated |
| GeWeAPI ([doc](https://doc.geweapi.com/)) | Hosted personal-WeChat HTTP API with webhooks; Gewechat's successor | not found on docs page | not stated. Requires a real-name account **(V)** |
| QiWeAPI | WeCom equivalent | not found | not stated |
| WeChatPadPro | self-hosted binary plus paid per-account key | not found (only a paid support group, ¥199, and Stripe sponsorship shown) **(V)** | Stripe links suggest yes (U) |
| WorkTool commercial | Android RPA | not found | not stated |
| SaaS bridging Telegram <-> WeChat groups | – | **none found** | – |

The vendors are Chinese grey-market providers, often with no published ToS. Giving them the account session means giving them full access to the account's chats and contacts. Self-hosting WeChatPadPro keeps the data in-house but still runs a closed binary. Run it isolated: its own Docker network, no access to other projects on sd-172212.

---

## 5. Translation layer

None of the frameworks above offers a relay-plus-translation plugin that fits. Do the translation in the bridge core.

| Option | Price (V unless noted) | Notes |
|---|---|---|
| DeepSeek `deepseek-flash` (V4.1-Flash) | input $0.15/M tokens (cache miss, off-peak), output $0.60/M; peak hours are double **(V, [pricing](https://api-docs.deepseek.com/quick_start/pricing))** | Very good at ZH<->EN. Data goes to China |
| Qwen-MT (Alibaba Model Studio) | qwen-mt-flash international: input $0.16/M; Beijing $0.101 in / $0.28 out **(R/U, currencies inconsistent across pages)** | Dedicated MT model, supports glossaries |
| DeepL API Free | 500,000 characters/month free **(V, [support](https://support.deepl.com/hc/en-us/articles/360021200939-DeepL-API-Free))** | EU provider (GDPR-friendlier). Pro is about 5.49/month + 25 per M chars **(R, currency U)** |
| Existing FreeLLMAPI router on the server | ~0 | Fine for a fallback; add a cache |

**Cost estimate** for 300 messages/day ≈ 9,000/month, ~60 characters each:
- DeepL Free covers it: ~540k characters is near the 500k limit, so put an LLM fallback behind it.
- DeepSeek-flash: ~300 input tokens with prompt and ~100 output tokens per message is ≈2.7M in + 0.9M out, about **$1–2/month**.

Implementation notes:
- Show the original plus the translation: `[李雷@WeChat] 原文…\n— EN: …`.
- Skip translation when the message is already in the target language (simple CJK-ratio check).
- Never translate commands or URLs.
- Keep a glossary of project terms (OpenDigger, commons, etc.).
- Cap message length.

---

## 6. Telegram side (all V on [Bot API](https://core.telegram.org/bots/api), version 10.5 of 2026-11-22)

- **Channel** is one-way broadcast. **Group/supergroup** allows discussion. A channel can have a **linked discussion group**; auto-forwarded posts are flagged `is_automatic_forward`.
- **Recommendation:** one **supergroup**, the bridged one, optionally with topics. Add an optional channel for announcements, linked to it.
- **Bot setup:**
  - Add the bot as an admin.
  - **Disable privacy mode** in BotFather so it sees all messages; `can_read_all_group_messages` confirms it.
  - Request `chat_member` in `allowed_updates` to get join and leave events. This requires admin rights and must be listed explicitly. `new_chat_members` service messages also work.
- **Invite links:** `createChatInviteLink` supports expiry, member limits and join requests (long-standing Bot API). A permanent `t.me/+…` link rendered as a QR on the website is stable. Telegram links do not expire unless revoked.
- **Join announcement:** on `chat_member` (status → member), post `"👋 Alice joined on Telegram"` plus the ZH translation to WeChat, rate-limited and batched (e.g. at most one join notice per 10 min, aggregated).

---

## 7. Recommended architecture

```
 Telegram supergroup ──Bot API (webhook)──┐
                                          ▼
                          ┌─────────── bridge-core (Python, Docker) ───────────┐
                          │ message bus + SQLite (msg-id map, users, quotas)   │
                          │ ├─ identity tagger "[Name@Telegram]"/"[名@WeChat]" │
                          │ ├─ translation middleware (DeepL→DeepSeek fallback,│
                          │ │   cache, glossary, lang-detect)                  │
                          │ ├─ moderation filter (TG→WeChat: keywords, links,  │
                          │ │   media size; human review queue optional)       │
                          │ ├─ join-event relay (batched)                      │
                          │ ├─ rate limiter (WeChat side: e.g. ≤1 msg/5–10 s,  │
                          │ │   merge bursts into one message)                 │
                          │ └─ health/ban detector → alert admin, auto-pause   │
                          └──────────────▲──────────────────────────▲──────────┘
                                         │ adapter interface        │
                    WeChat adapter A: WeChatPadPro          adapter B: human relay
                    (iPad protocol, Docker, same-city       (moderator app/web page:
                     SOCKS5 proxy, dedicated aged account)   digest + copy buttons)
                                         │
                                  WeChat group (≤200 for QR, ≤500 total)
```

- **Adapter interface:** `send_text`, `send_image`, `on_message`, `on_member_join`, `get_group_qr`. Swapping WeChatPadPro for GeWe, WorkTool or a future official API then means rewriting one file. Duplicate the setup for BioHackit with a second config: a second TG bot, a second WeChat account, the same core.
- **Media:** relay images (compressed) and file links. Do not relay voice or video at first, which keeps volume and risk low.
- **Website QR widget:** a TG QR (static) and a WeChat QR. The WeChat QR is either the bot account's personal QR with auto-invite, or a group QR refreshed by the bridge every 5 days via `get_group_qr`, uploaded to the site. Fall back to the admin's personal QR when the group exceeds 200 members.
- **Hosting:** existing French server. Isolated compose project, run as the project user, under its own Linux user with no access to other projects.

## 8. Fallback architectures

1. **Human-relay / digest (fully ToS-compliant)**
   - The bridge core still runs and gathers TG messages.
   - A Chinese co-moderator gets a translated digest via a private web page (or ClawBot 1:1, which *is* official) and posts it into WeChat manually.
   - WeChat→TG: the moderator forwards notable messages to the ClawBot or a web form, which gets translated and posted to TG.
   - Semi-automatic, zero ban risk.
2. **WeCom customer group via a Chinese partner institution:**
   - official permanent join QR with auto-overflow groups;
   - outbound as staff-confirmed broadcasts (max 1/day per group);
   - inbound via a staff member or the paid archive.

   Suitable for announcements, not chat.
3. **Neutral hub reachable from both sides:** a forum or chat hosted on eu-china-commons.eu (e.g. Discourse, or a Matrix/Element instance with mautrix-telegram). Chinese members join from the browser if reachable from China (needs testing). WeChat becomes only a notification channel.
4. **Windows-hook adapter** (wcferry fork or wxhelper on a Windows VM, client frozen at 3.9.12.51). Last resort only; highest detection risk and archived upstream.

## 9. Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| WeChat bot account restricted or banned | **high over months** | dedicated aged real-name account, low volume, auto-pause on errors, fallback 1 ready, never the owner's personal account |
| Adapter vendor disappears (as with PadLocal and Gewechat) | high | adapter interface; keep fallback 1 |
| Closed binary / grey-market vendor reads all chats | medium | self-host in an isolated container; dedicated account with no other contacts |
| Content liability inside China for relayed TG content | medium | filter TG→WeChat, moderator, clear group rules in both languages |
| Privacy (PIPL/GDPR) for cross-border relay and MT | medium | notice in group rules and on the site; prefer DeepL (EU) for EU users' text; minimise retention |
| Group QR expiry / 200-member QR limit | certain | personal QR or auto-refresh; WeCom permanent QR |
| Translation errors in sensitive topics | medium | always show the original; glossary |
| Reputation: an observatory using ToS-breaching tooling | medium | document the decision; prefer fallback 1 or 2 if the partners object |

## 10. Rough costs (monthly)

| Item | Cost |
|---|---|
| Server (existing, France) | 0 extra |
| Telegram bot | 0 |
| Translation (DeepL Free + DeepSeek fallback) | €0–2 |
| WeChatPadPro auth key or GeWe | **price not found**. Ask the vendor; budget unknown |
| Same-city China SOCKS5/residential proxy (for iPad-protocol login) | price not researched (U) |
| WeCom verification (only with a Chinese partner entity) | CNY 300 per review **(V)**; archive licence price not found |
| Dedicated Android phone (WorkTool option) | one-off hardware, plus a commercial licence (price not found) |

## 11. Step-by-step plan

1. **Decide on policy:** does the project accept a ToS-breaching adapter? If not, go straight to fallback 1 or 2.
2. **Telegram (day 1):**
   - create the supergroup and the optional linked channel;
   - create the bot, make it admin, disable privacy mode;
   - create a permanent invite link and put its QR on the website.
3. **bridge-core (days 2–5):** Python with python-telegram-bot or aiogram, SQLite, the adapter interface, DeepL plus DeepSeek translation with cache, a join-event relay, rate limiter, moderation filter and admin alerts (to TG). Test with a "loopback" mock adapter.
4. **WeChat account (weeks 1–3, in parallel):**
   - a Chinese co-organiser provides a dedicated, real-name, aged account (+86);
   - create the WeChat group from a *human* account, with the bot account as a member or co-admin;
   - write bilingual group rules, including the bot and translation notice.
5. **Adapter A pilot:**
   - deploy WeChatPadPro in isolated Docker with a same-city proxy and log in;
   - let the account sit idle for 3–14 days;
   - enable read-only mirroring WeChat→TG first, then TG→WeChat with merging and rate limits;
   - watch for warnings for 2 weeks.
6. **Website:** add the WeChat QR widget (bot personal QR, or an auto-refreshed group QR) plus the TG QR to every page. Show a "last refreshed" date.
7. **Fallback ready:** build the moderator digest page (fallback 1) in the same core, so a ban switches modes automatically.
8. **Review after 1 month:** ban signals, volume, translation quality, member feedback.
9. **Replicate for BioHackit:** new config, new TG bot, new WeChat account. Never share one WeChat account across communities.

---

### Sources (main)
- Repos (GitHub API, 2026-11-28): links in table 1.1.
- WeChat licence and service agreement: https://weixin.qq.com/agreement?lang=zh_CN
- Gewechat discontinuation: https://github.com/Devo919/Gewechat
- WeChatPadPro README: https://github.com/WeChatPadPro/WeChatPadPro
- Wechaty puppet services: https://wechaty.js.org/docs/puppet-services/ ; dev-server sunset: https://groups.google.com/g/wechaty/c/Qn0_UDCwbDY
- ClawBot/iLink: https://ithome.com/0/931/431.htm ; https://technews.tw/2026/03/23/tencent-enables-openclaw-integration-in-weixin/ ; https://docs.cowagent.ai/channels/weixin ; https://www.v2ex.com/t/1200267
- WeCom docs: https://developer.work.weixin.qq.com/document/path/92229 ; /92135 ; /91770 ; /91360 ; verification: https://open.work.weixin.qq.com/help2/pc/19729
- WeCom external-group bot limits: https://damodev.csdn.net/6ae1cb7ee5f4ca4eff8cecf5.html
- WeChat automation survey (Mar 2026): https://yage.ai/share/wechat-uia-platform-feasibility-survey-en-20260327.html
- Protocol landscape notes: https://jixiaxue-kb.pages.dev/w/research/个人微信接入方案/evidence/Agent1原始产出/
- WeChat crackdown: https://ithome.com/0/850/207.htm
- Group QR rules: https://www.v2ex.com/t/821445 ; https://py.zjol.com.cn/pyxw/201603/t20160308_601155.shtml ; https://www.ifanr.com/629313
- CAC group rules: https://www.cac.gov.cn/2017-09/07/c_1121623889.htm
- WeChat registration help: https://cs.help.wechat.com/hc/en-us/articles/11900776953999-How-do-I-sign-up-for-WeChat-and-assistance-registration
- DeepSeek pricing: https://api-docs.deepseek.com/quick_start/pricing ; DeepL Free: https://support.deepl.com/hc/en-us/articles/360021200939-DeepL-API-Free ; Qwen-MT: https://help.aliyun.com/en/model-studio/qwen-mt-flash
- Telegram Bot API: https://core.telegram.org/bots/api
