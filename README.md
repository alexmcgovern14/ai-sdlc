# AI SDLC

An AI-native software development lifecycle built on Claude Code. Takes an idea from plain-English conversation to a merged GitHub PR — with Linear tickets, Slack notifications, automated QA, and human review at the end.

---

## The workflow

```
You describe an idea
  → Claude asks clarifying questions to pin down requirements
  → Product agent creates a Linear project + issues, posts each to #dev-tasks in Slack
  → You reply @Claude on any Slack message to assign it
  → Claude Code spins up, reads the ticket, writes the code on an isolated branch
  → CI runs automatically; Claude auto-fixes any failures
  → Claude replies in the Slack thread with a PR link
  → You review and merge on GitHub
```

**What you do:** describe ideas, answer questions, reply @Claude, review PRs, click merge.  
**What Claude does:** everything else.

---

## Structure

```
.claude/
├── agents/                  # Isolated workers — own context window, own tools
│   ├── product-agent.md     # Requirements → Linear project + issues + Slack
│   ├── coding-agent.md      # Linear issue → code → PR (runs in isolated worktree)
│   ├── research-agent.md    # Web research, returns summary only
│   └── linear-agent.md      # Lightweight Linear queries and updates
└── skills/                  # Prompt guides — invoked directly in conversation
    ├── interview-summariser/ # Stakeholder notes → structured markdown summary
    ├── story-writer/         # Write a single Linear-compatible user story
    ├── prd-writer/           # Write a PRD with mandatory compliance section
    ├── research/             # Scopes and delegates a research task
    └── skill-builder/        # Create a new agent or skill

.github/workflows/
├── ci.yml                   # Runs on every PR — structural validation
├── claude-auto-fix.yml      # Auto-fixes CI failures, loops until green
└── claude-pr-assistant.yml  # Responds to @claude comments on PRs

knowledge/                   # Context files: role, design system, domain knowledge
outputs/                     # Generated files: interview summaries, PRDs, research
.mcp.json                    # Linear MCP for cloud Claude Code sessions (Slack-triggered)
REVIEW.md                    # Acceptance criteria and review standards for every PR
CLAUDE.md                    # Primary instructions for Claude Code
```

---

## Setup

### 1. Linear MCP
```bash
claude mcp add --transport http linear https://mcp.linear.app/mcp
```
Then restart and authenticate via the OAuth browser flow.

Update the team name in `.claude/agents/product-agent.md` to match your Linear workspace.

### 2. Slack webhook
Create an incoming webhook for your dev channel at api.slack.com/apps, then add to `.env` (gitignored):
```
SLACK_WEBHOOK_DEV_TASKS=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 3. GitHub Actions
Add `ANTHROPIC_API_KEY` to your repo secrets:
Settings → Secrets and variables → Actions → New repository secret

### 4. Claude Slack App
Install the Claude Slack App in your workspace and connect your GitHub account at claude.ai. When you @Claude in your dev channel, it will automatically spin up a Claude Code session and build the issue.

### 5. Knowledge files
Populate the files in `knowledge/` with your own context:
- `design-system.md` — your design tokens and component conventions
- Add any other domain context your agents should reference

---

## QA layer

Every PR automatically goes through:
1. **CI** — validates structure, no secrets committed
2. **Claude auto-fix** — if CI fails, Claude diagnoses and fixes in a loop until green
3. **REVIEW.md** — Claude Code Review checks acceptance criteria and flags violations inline
4. **PR assistant** — comment `@claude <instruction>` on any PR to request changes

Human approval and merge on GitHub is always the final step.

---

Built by [Alex McGovern](https://github.com/alexmcgovern14)
