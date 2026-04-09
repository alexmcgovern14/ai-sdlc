---
name: granola-sync
description: Sync recent Granola meetings into Guti as note cards and action item task cards. Use when the user wants to pull meeting notes from Granola into their Guti personal OS.
user-invocable: true
---

## Trigger

User invokes `/granola-sync` in Claude Desktop (where Granola MCP is authenticated).

Optionally accepts a number of days to look back, e.g. `/granola-sync 7` — defaults to 7 days if not provided.

## Context

- **Granola MCP** is authenticated in the Claude Desktop session. Use `list_meetings` and `get_meeting_transcript` (or `get_meetings` with details) to fetch meeting data.
- **Guti cards** live at `~/Documents/Coding-documents/Guti/cards/` as `{uuid}.md` files. Write directly to the filesystem — do not use the Guti REST API.
- **Deduplication** is done by scanning existing card files for `granola_id:` in their frontmatter. If a card with `granola_id: <meeting_id>` already exists, skip that meeting.

## Process

### Step 1 — Establish lookback window

If the user provided a number (e.g. `/granola-sync 14`), use that as days to look back. Otherwise default to 7 days.

Calculate the cutoff ISO timestamp: today minus N days.

### Step 2 — Fetch recent meetings

Call `list_meetings` (or equivalent Granola MCP tool) to retrieve meetings within the lookback window.

If no meetings are returned, report "No meetings found in the last N days." and stop.

### Step 3 — Check for existing cards (deduplication)

Read all `.md` files in `~/Documents/Coding-documents/Guti/cards/` and extract any `granola_id:` values from their frontmatter.

Build a set of already-synced meeting IDs. Any meeting whose ID is in this set should be skipped.

### Step 4 — For each new meeting: fetch details

For each meeting not already synced, call `get_meeting_transcript` (or the appropriate Granola MCP detail tool) to retrieve:
- Meeting title
- Date/time
- Attendees
- Notes / enhanced notes
- Action items (if surfaced separately)

### Step 5 — Write meeting note card

For each new meeting, generate a UUID filename and write a `type: note` card:

```
~/Documents/Coding-documents/Guti/cards/<uuid>.md
```

Frontmatter format:

```yaml
---
title: "<meeting title> (<YYYY-MM-DD>)"
type: note
priority: unprioritised
labels: [Meeting, Granola]
archived: false
granola_id: "<granola meeting id>"
createdAt: "<ISO timestamp>"
updatedAt: "<ISO timestamp>"
---
```

Body: structured summary of the meeting notes. Include:
- **Attendees** (if available)
- **Summary** — 2–4 sentence overview of what was discussed
- **Key points** — bulleted list of main discussion points
- **Decisions** — any decisions made (omit section if none)
- **Action items** — bulleted list (even if also creating task cards)

Use the meeting's actual content from Granola notes/transcript to populate these sections. Do not fabricate content.

### Step 6 — Extract action items and write task cards

Parse action items from the meeting data. Action items may appear as:
- A structured list in the Granola MCP response
- Bullet points containing phrases like "action:", "TODO:", "follow up", "will", or starting with a person's name + verb

For each action item found:

1. Generate a new UUID filename
2. Write a `type: task` card:

```yaml
---
title: "<action item text>"
type: task
priority: unprioritised
labels: [Meeting Action]
archived: false
granola_id: "<meeting_id>-action-<n>"
createdAt: "<ISO timestamp>"
updatedAt: "<ISO timestamp>"
---
From meeting: <meeting title> (<YYYY-MM-DD>)
```

Where `<n>` is a 1-based index for each action item in that meeting.

If no action items are found for a meeting, do not create any task cards for it.

### Step 7 — Report results

After processing all meetings, report a summary in chat:

```
Granola sync complete.

Meetings found: N
├── Synced: N (N note cards, N task cards created)
└── Skipped: N (already synced)
```

If any meetings failed to sync (e.g. Granola MCP error), list them with the error message.

## UUID generation

To generate UUID-like filenames without Node.js `crypto`, use this pattern:
- Combine the current ISO timestamp with a random suffix: `<timestamp-ms>-<4-random-hex-chars>`
- Example: `1744200000000-a3f7.md`

This ensures uniqueness without requiring an import.

## Notes

- This skill runs in the main conversation — it has direct access to Granola MCP and the local filesystem.
- Do NOT use the Guti REST API — write files directly.
- Do NOT create duplicate cards. Always check `granola_id` before writing.
- If Granola MCP tools are not available (e.g. not running in Claude Desktop), surface a clear error: "Granola MCP is not available in this session. Run `/granola-sync` from Claude Desktop."
