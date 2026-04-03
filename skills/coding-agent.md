# Skill: coding-agent

Pick up a Linear issue, implement it in an isolated git worktree, open a PR, and post the PR link back to the Slack thread.

## Trigger
Use this skill when a Linear issue is ready to be implemented. The user should provide an issue identifier (e.g. ALE-12) or URL. In the Slack flow, this is triggered by Alex replying `@Claude <issue URL>` in #dev-tasks.

---

## Process

### Step 1 — Acknowledge
If triggered via Slack, react to the message with 👀 to signal the task has been picked up.

### Step 2 — Fetch the issue
Call `mcp__linear__get_issue` with the issue identifier to retrieve:
- Title and full description
- Acceptance criteria
- Parent project name (for branch naming context)
- Any linked issues or dependencies

### Step 3 — Confirm scope (if ambiguous)
If the issue description leaves implementation details unclear, ask before starting. Do not build on assumptions for anything compliance-relevant or architecturally significant.

### Step 4 — Implement in a worktree
Use the Agent tool with `isolation: "worktree"` so the implementation runs on an isolated branch without affecting main.

Brief the agent with:
- Full issue title, description, and acceptance criteria
- Branch name: `feat/<issue-id>-<slug>` (e.g. `feat/ALE-12-intercom-ingestion`)
- Commit message format: `ALE-12: <short description>`
- Any relevant files from `/knowledge/` that apply (e.g. `design-system.md` for UI work)

The agent must:
1. Read existing code before writing anything
2. Implement only what is needed to satisfy the acceptance criteria — no scope creep
3. Write or update tests if applicable
4. Commit on completion

### Step 5 — Open a PR
Create a GitHub PR:
- Title: `[ALE-XX] <issue title>`
- Body: Linear issue URL + summary of what was built + test plan

### Step 6 — Update Linear and Slack
- Call `mcp__linear__save_issue` with `id: <issue-id>` and `state: "In Review"` to update the issue status
- Call `mcp__linear__save_comment` (or `mcp__linear__save_issue` with a comment) to add the PR link to the issue
- If triggered via Slack, reply in the thread: "Done ✅ PR ready for review: <PR URL>"

---

## Output
Branch + open PR ready for review. Linear issue updated to "In Review". Slack thread updated with PR link.
