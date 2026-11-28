# Community channels: Telegram ↔ WeChat bridge

Roadmap item set by Fabio on 28 Nov 2026. Status: **options evaluated 28 Nov 2026** ([full comparison](community/TG-WECHAT-BRIDGE-OPTIONS.md)); decision pending.

## Requirements
- **Two communities, one conversation.** A Telegram channel or group for members outside China and a WeChat group for members in China.
- **Automatic two-way bridge.** Every message reaches the other side with the sender's own identity (e.g. `[Name · WeChat]`, `[Name · Telegram]`).
- **Translation layer.** English ↔ Chinese, automatic. The original text is kept beside the translation.
- **Join events.** A new member on one side is announced on the other.
- **Call to action on every page.** Telegram and WeChat banners with join QR codes and an invitation to join and contribute, in EN and ZH. WeChat group QR codes expire, so they must be refreshed automatically or replaced by a stable entry point (to check).
- **Self-managed.** We run it ourselves; cheap hosted services are considered only if they are clearly better under WeChat's restrictions.
- **Reusable.** Once it works, the same setup is replicated for BioHackit.

## Findings (28 Nov 2026)
- No official way exists to bridge an ordinary WeChat group automatically: WeChat's own bot (ClawBot/iLink, Mar 2026) works only in one-to-one chats; WeCom customer groups need manual confirmation for each message (about one per group per day) and full verification is open only to mainland organisations.
- Every working unofficial tool breaches WeChat's licence (§8.2.1.4, §8.2.1.6) and risks a permanent ban; several were shut down or archived in 2025–2026 (Gewechat, WeChatFerry). The only headless Linux option found is WeChatPadPro (iPad protocol).
- No maintained Telegram–WeChat bridge or SaaS was found; Matterbridge does not support WeChat.
- WeChat group QR codes reportedly expire after 7 days and stop working above 200 members (third-party reports): a static group QR on the site will break.
- Translation costs are negligible (DeepL free tier or DeepSeek API).

## Recommended design
1. Our own bridge core: Telegram supergroup (with optional announcement channel) ↔ core (name tags, EN↔ZH translation with original kept, join announcements, moderation, rate limits) ↔ replaceable WeChat adapter.
2. WeChat adapter options: (a) WeChatPadPro on a dedicated, real-name, aged account held by a Chinese co-organiser, low volume, accepting the ban risk; (b) compliant fallback: a Chinese moderator posts a translated digest by hand, prepared by the core; (c) a WeCom customer group through a Chinese partner institution.
3. On the site: Telegram invite QR (stable) and, for WeChat, the bot or moderator's personal QR, or a group QR refreshed automatically.
4. Filtering of content going into WeChat (the group owner is legally responsible in China); privacy check under GDPR and PIPL.

## Open questions
- Which open-source bridge supports WeChat groups reliably in 2026 (Wechaty puppets, EH Forwarder Bot, Matrix bridges, WeChatFerry, WeCom official APIs), and with what ban risk?
- Which WeChat account runs the bot (dedicated, real-name verified) and who owns it.
- Telegram: channel (broadcast) with a linked discussion group, or a group only.

## Plan
1. Compare bridge options (research in progress) and choose one.
2. Open the Telegram channel and group, and the WeChat account and group (Fabio).
3. Deploy the bridge on the server with the translation middleware; test with a closed group.
4. Add banners and QR codes to the site (EN/ZH), with automatic QR refresh if needed.
5. Write a replication guide for BioHackit.
