---
name: slack-pulse
description: Scan Slack for unresolved questions, pain points, feature requests, and blockers — then cross-reference Linear to surface what isn't being worked on. Use when the user wants a Slack intelligence digest.
user-invocable: true
---

## What this does
Delegates to `slack-pulse-agent` to scan Slack channels, detect signals (unresolved questions, pain points, feature requests, blockers), cross-reference active Linear issues, and return a prioritised digest of things that may need attention.

## Process

1. Ask the user if they want to change the default lookback window (default: **7 days**) or restrict to specific channels. If no preference, proceed with defaults.
2. Delegate to the `slack-pulse-agent` sub-agent with any parameters provided.
3. When the agent returns, present the digest inline and confirm the file was saved to `/outputs/slack-pulse/`.

## Output
Structured markdown digest saved to `/outputs/slack-pulse/YYYY-MM-DD.md` and displayed in conversation.

## Scheduling
To run this automatically (e.g. Monday morning digest), use `/schedule` to set up a recurring trigger pointing at `slack-pulse-agent`.
