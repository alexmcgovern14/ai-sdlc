# Skill: epic-writer

Write a structured epic definition for a Linear project, broken into themes and ready for story decomposition.

## Trigger
Use this skill when the user wants to create an epic in Linear or plan a large body of work.

## Process

### Step 1 — Gather context
Use the ask_user_questions tool to ask:

1. What is the epic? (name and one-line description)
2. What goal does it serve? (OKR, initiative, or strategic priority)
3. What is the rough scope? (weeks / sprints)
4. Who are the primary users or beneficiaries?
5. Are there known sub-themes or workstreams?
6. What does done look like? (definition of done / exit criteria)
7. Any dependencies, risks, or compliance considerations?

### Step 2 — Write the epic
Structure:

```
# Epic: <Name>

## Goal
<!-- One paragraph: why this epic exists and what outcome it drives -->

## Scope
- Estimated size: <S / M / L / XL>
- Target timeframe: <e.g. Q2 2026>

## Users / Beneficiaries
<!-- Who benefits and how -->

## Themes / Workstreams
<!-- High-level breakdown of work areas -->
1. <Theme 1>
2. <Theme 2>
3. <Theme 3>

## Definition of Done
<!-- What must be true for this epic to be closed? -->

## Dependencies
<!-- Other teams, systems, or decisions this epic relies on -->

## Risks & Compliance
<!-- Flag anything regulated, sensitive, or uncertain -->

## Stories
<!-- Leave blank — use story-writer skill to populate -->
```

### Step 3 — Save & log
Save to `/knowledge/projects/<epic-name>.md`.
If Linear MCP is connected, offer to create the epic in Linear directly.

## Output
An epic definition in markdown, saved to `/knowledge/projects/`.
