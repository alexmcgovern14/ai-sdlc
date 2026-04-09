# [AI-Generated]
# Skill: granola-sync

Sync recent meetings from Granola MCP to Guti cards. Reads meeting notes and action items, transforms them into Guti card format, and writes directly to ~/Documents/Coding-documents/Guti/cards/.

## Trigger

Use this skill when the user wants to sync meetings from Granola to Guti, or when they invoke `/granola-sync`.

## Prerequisites

- **Granola MCP** must be configured — the Granola desktop app includes an MCP server that exposes meeting data
- **Guti cards directory** must exist at `~/Documents/Coding-documents/Guti/cards/`

## Process

### Step 1 — Check parameters

Use the ask_user_questions tool to ask:

1. How many recent meetings to sync? (default: 5)
2. Should action items be created as separate task cards? (default: yes)
3. Any meetings to exclude by title keyword?

If the user wants defaults, proceed without further questions.

### Step 2 — Fetch meetings from Granola MCP

Call `mcp__granola__list_documents` to get recent meetings.

For each meeting, call `mcp__granola__get_document` with the document ID to retrieve:
- Title
- Date/time
- Attendees
- Transcript or notes
- Action items (if extracted)

### Step 3 — Transform to Guti card format

For each meeting, create a **note card** with this structure:

**Frontmatter:**
```yaml
---
title: "Meeting: <meeting title>"
type: note
priority: unprioritised
labels: [meeting, granola-sync]
columns: []
archived: false
createdAt: "<ISO timestamp of meeting>"
updatedAt: "<current ISO timestamp>"
---
```

**Body content:**
```markdown
## Attendees
- <attendee 1>
- <attendee 2>

## Summary
<AI-generated summary or transcript highlights>

## Key Points
- <point 1>
- <point 2>

## Action Items
- [ ] <action 1> — Owner: <name>
- [ ] <action 2> — Owner: <name>

---
*Synced from Granola on <sync date>*
```

If the user opted for separate task cards, also create a **task card** for each action item:

**Frontmatter:**
```yaml
---
title: "<action item text>"
type: task
priority: P2
labels: [action-item, granola-sync, meeting-followup]
columns: []
archived: false
createdAt: "<current ISO timestamp>"
updatedAt: "<current ISO timestamp>"
---
```

**Body:**
```markdown
From meeting: <meeting title> (<meeting date>)

<any additional context about the action>
```

### Step 4 — Verify Guti directory exists

Before writing, verify the cards directory exists:
```bash
ls ~/Documents/Coding-documents/Guti/cards/
```

If the directory doesn't exist, warn the user that Guti may not be set up and ask if they want to create it.

### Step 5 — Check for duplicates

Before creating a card for a meeting, check if it has already been synced by searching for existing cards with the same meeting title AND date:

```bash
grep -l "title: \"Meeting: <exact meeting title>\"" ~/Documents/Coding-documents/Guti/cards/*.md 2>/dev/null | xargs grep -l "createdAt: \"<meeting date>" 2>/dev/null
```

If found, skip that meeting and note it in the summary. This prevents duplicate cards when running the skill multiple times.

### Step 6 — Generate UUIDs and write cards

For each meeting that passes the duplicate check:

1. Generate a UUID v4 for each card using:
   - `uuidgen` (available on macOS and Linux)
   - Or `cat /proc/sys/kernel/random/uuid` (Linux only)

2. Write each card to `~/Documents/Coding-documents/Guti/cards/<uuid>.md`

Card filenames:
- Note card: `<uuid>.md`
- Task cards: `<uuid>.md` (one per action item, each with its own UUID)

### Step 7 — Report results

Return a summary in chat:

```markdown
## Granola Sync Complete

**Meetings synced:** <count>
**Note cards created:** <count>
**Task cards created:** <count>
**Skipped (already synced):** <count>

### Cards created:
| Type | Title | File |
|------|-------|------|
| note | Meeting: <title> | <uuid>.md |
| task | <action item> | <uuid>.md |
```

## Output

- Note cards written to `~/Documents/Coding-documents/Guti/cards/`
- Task cards (optional) written to the same location
- Summary displayed in chat

## Error Handling

- If Granola MCP is not available, inform the user: "Granola MCP not found. Please ensure the Granola desktop app is running and MCP is enabled."
- If Guti cards directory doesn't exist, warn the user and offer to create it
- If a meeting has already been synced, skip it and note in the summary

## Notes

- This skill requires the Granola MCP server to be available (runs locally with the Granola desktop app)
- Cards are created with `labels: [granola-sync]` for easy filtering in Guti
- The skill does not delete or modify existing Guti cards — it only creates new ones
- Meeting notes are synced as `type: note`, action items as `type: task`
