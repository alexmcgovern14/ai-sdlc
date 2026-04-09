---
name: skill-builder
description: Create a new agent or skill definition file for the AI SDLC. Use when the user wants to add a new reusable capability. Guides the decision between agent vs skill and writes the correct file in the correct location.
user-invocable: true
---

## Agent vs Skill — decide first

| It's an **agent** if... | It's a **skill** if... |
|---|---|
| It reads many files or makes many tool calls | It's a prompt template or workflow guide |
| It runs in isolation (worktree, own context) | It runs in the main conversation |
| It returns a structured deliverable | It injects knowledge or instructions |
| It calls external APIs (Linear, Slack, GitHub) | The user invokes it directly via `/name` |

**Agents** → `.claude/agents/<name>.md` with YAML frontmatter
**Skills** → `.claude/skills/<name>/SKILL.md` with YAML frontmatter

---

## Process

### Step 1 — Gather requirements
Use ask_user_questions to ask:
1. What should this agent/skill do? (one sentence)
2. What triggers it?
3. What inputs does it need?
4. What should the output look like?
5. Does it need isolation (own context window)?
6. Which tools does it need? (Bash, Linear MCP, WebSearch, etc.)
7. Any compliance constraints or guardrails?

### Step 2 — Determine type
Based on answers, decide: agent or skill.

### Step 3 — Write the file

**For an agent** (`.claude/agents/<name>.md`):
```
---
name: <name>
description: <one sentence — used by Claude to decide when to delegate>
tools: [optional allowlist]
model: inherit | haiku | sonnet | opus
isolation: worktree  # if needed
---

<system prompt — what this agent does and how>
```

**For a skill** (`.claude/skills/<name>/SKILL.md`):
```
---
name: <name>
description: <one sentence>
user-invocable: true | false
---

## Process
<numbered steps>

## Output
<format and save location>
```

### Step 4 — Update CLAUDE.md
Add the new agent or skill to the relevant section in `CLAUDE.md`.

### Step 5 — Commit to git
Stage and commit the new file and the CLAUDE.md update:
```bash
git add .claude/agents/<name>.md  # or .claude/skills/<name>/
git add CLAUDE.md
git commit -m "feat: add <name> agent|skill"
```

## Output
One new file in `.claude/agents/` or `.claude/skills/<name>/`. CLAUDE.md updated. Changes committed to git.
