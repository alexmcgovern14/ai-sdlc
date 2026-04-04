---
name: meeting-notes
description: Turn raw meeting notes pasted into chat into a structured markdown summary with four sections, saved to /outputs/meetings/. Use when the user wants to process or summarise meeting notes.
user-invocable: true
---

## Trigger

User invokes `/meeting-notes` and pastes raw meeting notes into the chat.

## Process

### Step 1 — Receive input
Ask the user to paste the raw meeting notes if they haven't already.

### Step 2 — Parse and structure

Extract the following from the notes:

1. **Attendees & Context** — who was present, meeting purpose, and date (infer if not explicit)
2. **Decisions Made** — a clear numbered list of decisions reached during the meeting
3. **Actions** — bulleted list of action items, each with owner and due date where mentioned
4. **Open Questions** — unresolved items or topics requiring follow-up

### Step 3 — Write the output

Format the summary as:

```
# Meeting Notes: <Meeting Name>
**Date:** YYYY-MM-DD
**Prepared by:** Claude Code

## Attendees & Context
<!-- Who was present, purpose of the meeting -->

## Decisions Made
1. <decision>
2. <decision>

## Actions
- [ ] <action> — **Owner:** <name> — **Due:** <date or "TBD">

## Open Questions
- <question>
```

Derive the filename from the date and meeting name in the notes: `YYYY-MM-DD-<meeting-name>.md` (kebab-case, e.g. `2026-04-03-product-standup.md`).

Save to `/outputs/meetings/<filename>`.

### Step 4 — Return in chat
Return the full formatted summary in the conversation. Do not post to Slack or any external system.

## Output

A structured markdown summary returned in chat and saved to `/outputs/meetings/YYYY-MM-DD-<meeting-name>.md`.
