# Skill: product-agent

Take requirements from the conversation and create a Linear Project (Epic equivalent) with a full breakdown of child issues, ready for engineering.

## Linear orientation (from Jira)
In Linear, the equivalent of a **Jira Epic** is a **Project** — a container for a body of work with a goal and timeframe. The equivalent of **Jira Stories/Tasks** are **Issues**. Issues belong to a Project and a Team.

## Trigger
Use this skill after requirements have been gathered and the user is ready to push work into Linear.

---

## Process

### Step 1 — Get the team ID
Call `linear_get_teams` to retrieve available teams and their IDs. Use the team that matches the work (default: the user's primary team).

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
- **Size hint:** S / M / L — target 1–3 days per issue; split anything larger

Aim for 4–8 issues per project. Start with the foundation/platform issues, then feature issues, then integration/testing.

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
Call `linear_create_project_with_issues` with:
- `project.name` — project name
- `project.description` — project description
- `project.teamIds` — array containing the team ID from Step 1
- `issues` — array of all issues, each with `title`, `description`, and `teamId`

### Step 5 — Report back
Return:
- The Linear project name and a direct link if available
- A numbered list of created issues with their identifiers (e.g. ALE-12) and titles
- A recommended first issue for the coding agent to pick up (usually the foundation/platform issue)

---

## Output
Linear Project + issues created and linked. Summary returned with identifiers.
