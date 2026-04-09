# Guti — Personal Operating System

Guti is Alex's personal task management app and second brain. It is a separate codebase from ai-sdlc and runs locally.

## What it is
A single-user kanban-style app built with Next.js 14 + TypeScript. All data is stored as individual markdown files — no external database. Cards represent tasks, notes, and meeting summaries.

## Card format
Each card is a `.md` file named `{uuid}.md` stored in `~/Documents/Coding-documents/Guti/cards/`.

YAML frontmatter:
```yaml
---
title: "Card title"
type: task | note          # task = action item, note = reference/meeting/research
priority: P0 | P1 | P2 | P3 | P4 | unprioritised
labels: [label1, label2]
columns: [column-uuid]
archived: false
createdAt: "ISO timestamp"
updatedAt: "ISO timestamp"
---
```
Markdown body follows the frontmatter.

## API
Guti exposes a local REST API (when running):
- `GET /api/cards` — list all cards
- `POST /api/cards` — create a card
- `PUT /api/cards` — update a card
- `DELETE /api/cards` — delete a card

## Relationship to ai-sdlc
- The product-agent reads guti cards for context before structuring requirements
- Meeting notes and action items from Granola are synced via `services/granola-guti-sync/`
- Cloud agents (Slack-triggered) cannot access guti directly — relevant context should be included in Linear issue descriptions by the product-agent

## Granola Integration
The `granola-guti-sync` service receives webhooks from the `granola-webhook` daemon and creates cards in Guti:
- Meeting notes → `note` cards with attendees, summary, action items
- Optional: Action items → separate `task` cards

See `services/granola-guti-sync/README.md` for setup instructions.
