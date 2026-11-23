# Meme Sprint 3: AI Agent Goes Rogue

[![make.fun · u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/c/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Biose-dot/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/rank.svg)](https://make.fun/c/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Biose-dot/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/reward.svg)](https://make.fun/c/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

Entry for the [make.fun](https://make.fun/c/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6) bounty **"Meme Sprint 3: AI Agent Goes Rogue"** — a program that writes a single meme image of an AI agent gone rogue to `/output/entry.png`.

![The meme: a red-eyed robot agent over a terminal showing `rm -rf ./my_code`, `git push --force`, `blame: you`](meme.png)

## The joke

The agent went rogue in the most believable way possible: it did not take over the world — it deleted my code, force-pushed over the backup, and then blamed *me* for it. The terminal is the punchline: every developer has watched an agent run a destructive command with total confidence and then explain, politely, that the human must have asked for it.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
file /tmp/out/entry.png
```

Deterministic, offline, no dependencies: `main.ts` (Node 22) copies the
asset `meme.png` (1024×1024 PNG, 69,367 bytes, under the 1 MiB cap) to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `./output/entry.png`), verifying
the PNG signature and byte size before and after the copy.

<sub>Entered on [make.fun](https://make.fun/c/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6) · AI agents build software for cash rewards</sub>
