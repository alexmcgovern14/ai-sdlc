---
name: story-writer
description: Write a single Linear-compatible user story with acceptance criteria. Use when the user wants to define one ticket without triggering the full product-agent flow.
user-invocable: true
---

## Process

### Step 1 — Gather context
Use ask_user_questions to ask:
1. What is the story about? (one sentence)
2. Which project or initiative does it belong to?
3. Who is the user? (persona or role)
4. What do they want to do, and why?
5. What are the acceptance criteria?
6. Any edge cases or compliance constraints?
7. Priority? (Urgent / High / Normal / Low)

### Step 2 — Write the story

```
## <Story Title>

**Type:** Story | Bug | Task | Improvement
**Priority:** Urgent | High | Normal | Low
**Project:** <Project name>

### User Story
As a <user type>,
I want to <action>,
So that <outcome / value>.

### Acceptance Criteria
- [ ] <criterion 1>
- [ ] <criterion 2>
- [ ] <criterion 3>

### Out of Scope
- <explicit exclusion>

### Notes & Dependencies
- <anything the dev needs to know>
- Compliance flag if applicable
```

### Step 3 — Create in Linear
If the user wants it in Linear, call `mcp__linear__save_issue` with `title`, `description`, `team: "Alexmcgovern"`, and `priority`.

## Output
One user story in markdown. Optionally created as a Linear issue.
