# Skill: coding-agent

Pick up a Linear issue, implement it in an isolated git worktree, and return a branch + PR ready for review.

## Trigger
Use this skill when a Linear issue is ready to be implemented. The user should provide an issue identifier (e.g. ALE-12) or confirm which issue to pick up.

---

## Process

### Step 1 — Fetch the issue
Call `linear_search_issues_by_identifier` with the issue identifier to retrieve:
- Title and full description
- Acceptance criteria
- Parent project name (for branch naming context)
- Any linked issues or dependencies

### Step 2 — Confirm scope with user (if ambiguous)
If the issue description leaves implementation details unclear, use `ask_user_questions` to clarify before starting. Do not build on assumptions for anything compliance-relevant or architecturally significant.

### Step 3 — Implement in a worktree
Use the Agent tool with `isolation: "worktree"` so the implementation runs on an isolated branch without affecting the main working directory.

Brief the agent with:
- The full issue title, description, and acceptance criteria
- The branch name to use: `feat/<issue-id>-<slug>` (e.g. `feat/ALE-12-intercom-ingestion`)
- A reminder to commit with the issue ID in the message (e.g. `ALE-12: Add Intercom ticket ingestion`)
- Any relevant context files from `/knowledge/` that apply

The agent should:
1. Read existing code before writing anything
2. Implement the minimum needed to satisfy acceptance criteria — no scope creep
3. Write or update tests if applicable
4. Commit on completion

### Step 4 — Create a PR
Once the worktree agent returns, create a GitHub PR:
- Title: `[ALE-XX] <issue title>`
- Body: link to the Linear issue + summary of what was built + test plan

### Step 5 — Update the Linear issue
Call `linear_create_comment` on the issue with:
- A brief summary of what was implemented
- The PR link
- Any outstanding notes or follow-up items

---

## Output
A branch + open PR ready for review. The Linear issue updated with a comment linking to the PR.
