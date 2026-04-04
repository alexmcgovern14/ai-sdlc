# AI SDLC

An AI-native software development lifecycle built on Claude Code.

## Configuration
Update this section for your own context:
- **Role:** Head of AI
- **Team size:** 3 (1 lead + 2 engineers)
- **Current focus:** Discovery, tooling audit, first internal builds

## Constraints
- Regulated industry — compliance and auditability non-negotiable
- Data infrastructure still maturing — some AI workflows may not yet sign-off

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

### Slack setup
Slack notifications use a webhook in `.env`:
```
SLACK_WEBHOOK_DEV_TASKS=https://hooks.slack.com/services/...
```

### GitHub Actions
Requires `ANTHROPIC_API_KEY` in GitHub repo secrets (Settings → Secrets → Actions).

---

## Agents
Defined in `.claude/agents/` — isolated workers with their own context window.

- **product-agent** — requirements → Linear Project + issues + Slack posts
- **coding-agent** — Linear issue → worktree implementation → PR (runs with `isolation: worktree`)
- **research-agent** — web research in isolation, returns summary only
- **linear-agent** — lightweight Linear queries and updates (uses Haiku to save tokens)

## Skills
Defined in `.claude/skills/` — prompt guides invoked directly in conversation.

- **story-writer** — write a single Linear-compatible user story
- **prd-writer** — write a full PRD with mandatory compliance section
- **interview-summariser** — process stakeholder interview notes → structured summary → `/outputs/interviews/`
- **research** — scopes and delegates a research task to research-agent
- **skill-builder** — create a new agent or skill file with correct structure

---

## How I Like to Work
- Delegate heavy lifting to agents — keep main context lean
- Use `ask_user_questions` before starting any document, spec, or analysis
- All outputs go in `/outputs/` or relevant `/knowledge/projects/` subfolder
- Format all outputs in markdown unless told otherwise

## Tools Connected
- Linear MCP (`https://mcp.linear.app/mcp`) — configured in `.mcp.json`
- Slack webhook for dev channel notifications

## UI / Front-End Work
Always reference `knowledge/design-system.md` for design tokens, components, and visual conventions before writing any UI or front-end code.
