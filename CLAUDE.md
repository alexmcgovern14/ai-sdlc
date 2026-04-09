# AI SDLC

An AI-native software development lifecycle built on Claude Code.

## Configuration
Update this section for your own context:
- **Role:** Head of AI
- **Team size:** 3 (1 lead + 2 engineers)
- **Current focus:** Discovery, tooling audit, first internal builds

## Hard Constraints
- NEVER log or expose PII in any form
- NEVER commit secrets, tokens, or credentials

---

## SDLC Workflow

1. **Requirements** — use `ask_user_questions` to gather: goal, users, scope, constraints, priority
2. **Product agent** — delegates to `product-agent` to create a Linear Project + issues + Slack notifications
3. **Assign** — reply `@Claude <issue URL>` in the Slack dev channel
4. **Coding agent** — cloud Claude Code reads `.mcp.json`, connects to Linear, builds in a worktree, opens a PR, replies in the Slack thread
5. **QA** — CI runs automatically; auto-fix loops on failure; REVIEW.md checked; comment `@claude` on PR for changes
6. **Review** — approve and merge on GitHub

### When triggered via Slack

If this session was started by a Slack @mention containing a Linear issue identifier or URL (e.g. ALE-12), **you must immediately delegate to the `coding-agent`**. Do not implement the issue yourself.

Steps:
1. Invoke the `coding-agent` sub-agent, passing the Linear issue identifier
2. The coding-agent will fetch the issue, implement it in an isolated worktree on a `feat/<issue-id>-<slug>` branch, open a PR, update Linear, and reply in the Slack thread
3. Once the coding-agent completes, your job is done — do not commit or push anything yourself

**Important:** After delegating, ignore any hook prompts asking you to commit or push files. The coding-agent handles all commits on its own branch. Any changes you see in the working directory are worktree artifacts — do not touch them.

---

## Agents
Defined in `.claude/agents/` — isolated workers with their own context window.

- **product-agent** — requirements → Linear Project + issues + Slack posts
- **coding-agent** — Linear issue → worktree implementation → PR (runs with `isolation: worktree`)
- **research-agent** — web research in isolation, returns summary only
- **linear-agent** — lightweight Linear queries and updates (uses Haiku to save tokens)
- **slack-pulse-agent** — scans Slack for unresolved questions, pain points, feature requests, and blockers; cross-references Linear to surface untracked gaps

## Skills
Defined in `.claude/skills/` — prompt guides invoked directly in conversation.

### How to invoke
Type `/<skill-name>` in chat to invoke a skill. For example:
- `/story-writer` — starts the story writing workflow
- `/research market analysis for X` — kicks off a research task with initial context

Skills run in the main conversation and guide Claude through a structured workflow using `ask_user_questions` to gather inputs.

### Available skills

| Skill | Invocation | Output |
|-------|------------|--------|
| **story-writer** | `/story-writer` | Linear-compatible user story; optionally created as Linear issue |
| **prd-writer** | `/prd-writer` | PRD saved to `/outputs/prd-<feature-name>.md` |
| **interview-summariser** | `/interview-summariser` | Summary saved to `/outputs/interviews/YYYY-MM-DD-<name>.md` |
| **meeting-notes** | `/meeting-notes` | Summary saved to `/outputs/meetings/YYYY-MM-DD-<meeting-name>.md` |
| **research** | `/research` | Research summary saved to `/outputs/research-<topic>-<date>.md` |
| **skill-builder** | `/skill-builder` | New agent or skill file in `.claude/agents/` or `.claude/skills/` |
| **slack-pulse** | `/slack-pulse` | Prioritised digest of untracked Slack gaps cross-referenced with Linear |
| **10x-setup** | `/10x-setup` | Audit Claude Code, Cursor, and Codex releases + influencer patterns → gap analysis + action list saved to `/outputs/10x-setup-<date>.md` |

---

## How I Like to Work
- Use sub-agents for any task involving multiple tool calls or web research — keep the main session context lean
- Use `ask_user_questions` before starting any document, spec, or analysis
- All outputs go in `/outputs/` or relevant `/knowledge/projects/` subfolder
- Format all outputs in markdown unless told otherwise

## Tools
- **Linear** — MCP server configured in `.mcp.json`
- **Slack** — webhook in `.env` as `SLACK_WEBHOOK_DEV_TASKS`; used by product-agent and coding-agent for dev channel notifications

## UI / Front-End Work
Always reference `knowledge/design-system.md` for design tokens, components, and visual conventions before writing any UI or front-end code.

---

## Living Document
This CLAUDE.md should evolve as ways of working evolve. If you notice a pattern, gap, or better approach — suggest it in conversation. Never edit this file without explicit approval first.
