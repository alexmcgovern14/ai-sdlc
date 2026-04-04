# AI SDLC

An AI-native software development lifecycle built on Claude Code. Takes an idea from plain-English conversation to a merged GitHub PR — with Linear tickets, Slack notifications, automated QA, and human review at the end.

---

## The workflow

```
You: "I've got an idea..."
  │
  ▼
Claude uses ask_user_questions to gather requirements
(goal, users, scope, constraints, priority)
  │
  ▼
product-agent (isolated sub-agent)
  → structures requirements into an epic with themes and definition of done
  → calls Linear MCP to create a Project + child issues
  → posts each issue to #dev-tasks in Slack via webhook
  → returns issue identifiers (e.g. ALE-12)
  │
  ▼
You reply @Claude on any Slack issue post
  │
  ▼
coding-agent (isolated worktree — own branch, own context)
  → reads the Linear issue via MCP
  → checks CLAUDE.md, REVIEW.md, knowledge/design-system.md
  → implements the feature on a new branch
  → CI runs automatically on PR open
      └─ if CI fails → claude-auto-fix loops until green
  → opens GitHub PR
  → updates Linear issue status to "In Review"
  → replies in Slack thread with PR link
  │
  ▼
You review the PR on GitHub
  → want changes? Comment @claude on the PR
      └─ claude-pr-assistant reads the comment, fixes, pushes
  → happy? Click Merge ✅
```

**Skills available in conversation** (invoke with `/skill-name`):
- `/interview-summariser` — process stakeholder notes into a structured summary
- `/story-writer` — write a single Linear issue without the full product-agent flow
- `/prd-writer` — write a PRD before breaking work into issues
- `/research` — delegate a web research task to the research-agent
- `/skill-builder` — create a new agent or skill

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
