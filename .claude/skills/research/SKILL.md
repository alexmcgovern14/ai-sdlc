---
name: research
description: Run a focused web research task in isolation and return a structured summary. Delegates to the research-agent to keep main context lean. Use for market analysis, documentation lookups, competitor review, or any task requiring web sources.
user-invocable: true
---

## Process

### Step 1 — Scope the research
Use ask_user_questions to ask:
1. What is the research question or topic?
2. What do you already know / what can be skipped?
3. How many sources needed? (default: 5–8)
4. Output format? (summary, bullet list, comparison table)
5. Any filters? (date range, region, specific domains)

### Step 2 — Delegate to research-agent
Pass the scoped question to the `research-agent` sub-agent. It will search, read, and synthesise — returning only a summary to keep this context clean.

### Step 3 — Save
Save output to `/outputs/research-<topic>-<date>.md`.

## Output
A structured research summary in markdown, saved to `/outputs/`.
