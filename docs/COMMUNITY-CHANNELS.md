# Community channels: Telegram ↔ WeChat bridge

Roadmap item set by Fabio on 28 Nov 2026. Status: **options under evaluation.**

## Requirements
- **Two communities, one conversation.** A Telegram channel or group for members outside China and a WeChat group for members in China.
- **Automatic two-way bridge.** Every message reaches the other side with the sender's own identity (e.g. `[Name · WeChat]`, `[Name · Telegram]`).
- **Translation layer.** English ↔ Chinese, automatic. The original text is kept beside the translation.
- **Join events.** A new member on one side is announced on the other.
- **Call to action on every page.** Telegram and WeChat banners with join QR codes and an invitation to join and contribute, in EN and ZH. WeChat group QR codes expire, so they must be refreshed automatically or replaced by a stable entry point (to check).
- **Self-managed.** We run it ourselves; cheap hosted services are considered only if they are clearly better under WeChat's restrictions.
- **Reusable.** Once it works, the same setup is replicated for BioHackit.

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
