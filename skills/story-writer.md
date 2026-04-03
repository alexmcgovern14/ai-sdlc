# Skill: story-writer

Write user stories in Linear-compatible format, ready to be created as tickets.

## Trigger
Use this skill when the user wants to write a user story, Linear ticket, or task breakdown.

## Process

### Step 1 — Gather context
Use the ask_user_questions tool to ask:

1. What is the story about? (one sentence)
2. Which epic or initiative does it belong to?
3. Who is the user? (persona or role)
4. What do they want to do, and why?
5. What are the acceptance criteria?
6. Are there any edge cases or compliance constraints?
7. Priority? (Urgent / High / Medium / Low)

### Step 2 — Write the story
Use Linear-compatible format:

```
## <Story Title>

**Type:** Story | Bug | Task | Improvement
**Priority:** Urgent | High | Medium | Low
**Epic:** <Epic name or ID>
**Labels:** TBD

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

### Step 3 — Create in Linear (if connected)
If the Linear MCP is available, offer to create the ticket directly.
Use the linear-agent sub-agent for all Linear write operations.

## Output
One or more user stories in markdown, ready for Linear. Saved to `/outputs/stories-<date>.md` unless created directly in Linear.
