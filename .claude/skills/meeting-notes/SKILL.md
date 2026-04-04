---
name: meeting-notes
description: Parse raw meeting notes into a structured summary (attendees, decisions, actions, open questions) and save to /outputs/meetings/YYYY-MM-DD-<name>.md. Use after any meeting to create a consistent record.
user-invocable: true
---

## Process

### Step 1 — Get the meeting content
Use ask_user_questions to ask:
1. Paste the meeting notes, or provide a file path to read from
2. What was the meeting name/topic?
3. What was the meeting date? (default: today)
4. Who was the organiser? (optional)

### Step 2 — Parse the content
Extract:
- **Attendees** — list of participants (name and role if mentioned)
- **Agenda items** — topics discussed
- **Decisions** — any conclusions or agreements reached
- **Action items** — tasks assigned, with owner and due date if specified
- **Open questions** — unresolved items needing follow-up
- **Key discussion points** — notable context or rationale behind decisions

### Step 3 — Generate the summary

```markdown
# Meeting Notes: <Meeting Name>

| Field | Value |
|-------|-------|
| **Date** | <YYYY-MM-DD> |
| **Organiser** | <Name> (if provided) |
| **Attendees** | <Comma-separated list> |

## Agenda
1. <Topic 1>
2. <Topic 2>

## Decisions
| # | Decision | Rationale |
|---|----------|-----------|
| 1 | <Decision> | <Brief context> |

## Action Items
| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | <Task> | <Name> | <Date or TBD> |

## Open Questions
- [ ] <Question 1> — <context if any>
- [ ] <Question 2>

## Key Discussion Points
- <Notable point or context worth preserving>

---
<!-- Section below is for manual additions -->

## Follow-up Notes
<!-- Add any post-meeting notes or updates here -->

```

### Step 4 — Save
Save to `/outputs/meetings/YYYY-MM-DD-<meeting-name>.md`.
Use kebab-case for the meeting name (e.g., `2026-04-04-sprint-planning.md`).
Do not overwrite if the file already exists — prompt first.

## Output
Structured meeting summary saved to `/outputs/meetings/`. Follow-up Notes section left blank for manual additions.
