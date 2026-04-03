# Skill: product-agent

Take requirements from the conversation and create a Linear Project (Epic equivalent) with a full breakdown of child issues, then notify #dev-tasks in Slack.

## Linear orientation (from Jira)
In Linear, the equivalent of a **Jira Epic** is a **Project** — a container for a body of work with a goal and timeframe. The equivalent of **Jira Stories/Tasks** are **Issues**. Issues belong to a Project and a Team.

## Trigger
Use this skill after requirements have been gathered and the user is ready to push work into Linear.

---

## Process

### Step 1 — Get the team
Call `mcp__linear__list_teams` to get available teams. Use `Alexmcgovern` as the default team (ID: `71b0864d-1e36-4202-84e8-92ed9c495b39`).

### Step 2 — Synthesise requirements
From the conversation, extract:
- **Project name** — short, noun-phrase (e.g. "Support Ticket Clustering")
- **Project description** — one sentence: what it is and why it exists
- **Target timeframe** — if mentioned
- **Themes / workstreams** — logical groupings for the issue breakdown

### Step 3 — Break down into issues
For each issue, define:
- **Title:** Action-oriented verb phrase (e.g. "Ingest Intercom tickets via API")
- **Description:** What needs to be built, why, and any context the engineer needs
- **Acceptance criteria:** 2–4 bullet points that define done (prefix each with `- [ ]`)
- **Priority:** 1=Urgent, 2=High, 3=Normal, 4=Low

Aim for 4–8 issues per project. Order: foundation first, then features, then integration/docs.

Structure each issue description as:

```
## Context
<why this issue exists>

## What to build
<what the engineer needs to deliver>

## Acceptance Criteria
- [ ] <criterion 1>
- [ ] <criterion 2>
- [ ] <criterion 3>

## Notes
<dependencies, edge cases, compliance flags>
```

### Step 4 — Create in Linear
1. Call `mcp__linear__save_project` with `name`, `description`, and `addTeams: ["Alexmcgovern"]`
2. For each issue, call `mcp__linear__save_issue` with `title`, `description`, `team: "Alexmcgovern"`, `project: <project name>`, and `priority`
3. Note each returned issue identifier (e.g. ALE-12) and URL

### Step 5 — Post to Slack #dev-tasks
After all issues are created, post one message per issue to #dev-tasks using a Slack webhook.

Read the webhook URL from the environment variable `SLACK_WEBHOOK_DEV_TASKS` (set in `.env`).

For each issue, run:
```bash
curl -s -X POST "$SLACK_WEBHOOK_DEV_TASKS" \
  -H 'Content-type: application/json' \
  -d '{
    "text": "*New task:* <ISSUE_URL|ISSUE_ID — ISSUE_TITLE>\n*Project:* PROJECT_NAME\n*Priority:* PRIORITY\n\nCONTEXT_SUMMARY\n\n_Reply with @Claude to assign._"
  }'
```

Replace placeholders with actual values. `CONTEXT_SUMMARY` should be 1–2 sentences summarising what needs to be built — not the full description.

If `SLACK_WEBHOOK_DEV_TASKS` is not set, skip this step and note it in the output.

### Step 6 — Report back
Return:
- Linear project URL
- Numbered list of created issues with identifiers and titles
- Confirmation of Slack posts (or note if skipped)
- Recommended first issue for the coding agent (usually the foundation issue)

---

## Output
Linear Project + issues created. Each issue posted to #dev-tasks in Slack. Summary returned with identifiers.
