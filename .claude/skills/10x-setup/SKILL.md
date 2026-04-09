---
name: 10x-setup
description: Audit AI coding tool releases (Claude Code, Cursor, Codex) from the last 90 days, analyse how top practitioners are using them, and identify gaps in the current setup. Use when the user wants to ensure their workflow is using the latest capabilities.
user-invocable: true
---

## Overview

A five-step research and gap analysis workflow. Delegates all web research to the `research-agent` to keep the main context lean. Produces a prioritised action list to upgrade the current AI coding setup.

---

## Process

### Step 1 — Feature Audit (parallel research)

Delegate three parallel research tasks to the `research-agent`, one per tool:

**Claude Code**
> Search for everything Anthropic has shipped for Claude Code in the last 90 days. Include: new CLI features, model updates, MCP changes, hooks, skills/plugins, agents, pricing or plan changes. Source from the Anthropic changelog, blog, and release notes.

**Cursor**
> Search for everything Cursor has shipped in the last 90 days. Include: new editor features, AI model integrations, agent mode changes, rules/context features, pricing changes. Source from the Cursor changelog and blog.

**OpenAI Codex / Codex CLI**
> Search for everything OpenAI has shipped for Codex or the Codex CLI in the last 90 days. Include: model updates, CLI features, API changes, agentic coding features. Source from the OpenAI blog, changelog, and GitHub.

Collect all results before proceeding.

---

### Step 2 — Release Timeline

Using the research from Step 1, produce a combined chronological timeline of all releases across the three tools. Format:

```
| Date | Tool | Feature | Impact (High / Med / Low) |
|------|------|---------|--------------------------|
```

Group by month. Flag any features that overlap or compete across tools (e.g. both Cursor and Claude Code shipping agent isolation in the same month).

---

### Step 3 — Influencer Sentiment Analysis

Delegate to `research-agent`:

> Find the top 5–8 practitioners / influencers who post about AI coding tools (Claude Code, Cursor, Codex) — prioritise people who post practical workflows, not hype. For each, find their most-shared or most-discussed posts from the last 90 days. Summarise: what techniques are they using, what do they recommend, what are they critical of?

Sources to check: X/Twitter, YouTube, Substack, LinkedIn, Hacker News, Reddit (r/ClaudeAI, r/cursor, r/ChatGPT).

---

### Step 4 — Gap Analysis

Read the current setup:
- `CLAUDE.md` — current Claude Code configuration, agents, skills
- `.claude/skills/` — installed skills
- `.claude/agents/` — installed agents
- `.mcp.json` — MCP servers configured

Compare against:
- Features found in Step 1 (are any new capabilities unused?)
- Techniques found in Step 3 (are any expert patterns missing from this setup?)

Produce a gap table:

```
| Gap | Tool | Source (feature / influencer) | Effort (S/M/L) | Priority |
|-----|------|-------------------------------|----------------|----------|
```

---

### Step 5 — Optimisation Proposal

Based on the gap table, produce a prioritised action list:

**Quick wins (S effort, High priority)**
Specific changes that can be made immediately — new skills, CLAUDE.md tweaks, MCP servers to add, settings to toggle.

**Medium-term (M effort)**
New agents to build, workflow changes, tool switches worth evaluating.

**Investigate further (L effort or uncertain value)**
Features or techniques that need more context before acting on.

For each action, include: what to do, why it matters (linked to a specific feature or influencer recommendation), and the file or config to change.

---

## Output

Save to `/outputs/10x-setup-<YYYY-MM-DD>.md` with all five sections. Summarise the top 3 quick wins in the chat response so the user can act immediately without reading the full report.
