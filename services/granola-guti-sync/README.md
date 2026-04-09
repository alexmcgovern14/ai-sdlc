# Granola → Guti Sync Service

Automatically syncs meeting notes from Granola to your Guti personal OS.

## Architecture

```
┌─────────────┐     ┌───────────────────┐     ┌──────────┐
│   Granola   │────▶│ granola-webhook   │────▶│   This   │────▶│   Guti   │
│   (macOS)   │     │ (local daemon)    │     │ Service  │     │  (local) │
└─────────────┘     └───────────────────┘     └──────────┘     └──────────┘
     Stores           Monitors cache,          Transforms       Creates
   meetings           sends webhooks          to card format     cards
```

## Prerequisites

1. **Granola** - Install from [granola.so](https://granola.so)
2. **granola-webhook** - Community daemon that monitors Granola's local cache
   ```bash
   npm install -g granola-webhook
   ```
3. **Guti** - Running locally at `http://localhost:3000`

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment file:
   ```bash
   cp .env.example .env
   ```

3. Build and start:
   ```bash
   npm run build
   npm start
   ```

   Or for development:
   ```bash
   npm run dev
   ```

4. Configure granola-webhook to point to this service:
   ```bash
   granola-webhook --webhook-url http://localhost:3001/webhook/granola
   ```

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` | Port for the webhook server |
| `GUTI_API_URL` | `http://localhost:3000` | Guti's local API URL |
| `CREATE_ACTION_ITEM_CARDS` | `false` | Create separate task cards for action items |

## Endpoints

- `GET /health` - Health check (also verifies Guti connectivity)
- `POST /webhook/granola` - Receives meeting data from granola-webhook

## Card Format

Meeting notes are created as Guti cards with:
- **Type**: `note`
- **Labels**: `meeting`, `granola`
- **Body**: Attendees, summary, notes, action items, transcript (collapsed)

If `CREATE_ACTION_ITEM_CARDS=true`, action items are also created as separate `task` cards.

## Webhook Payload

The granola-webhook daemon sends:

```json
{
  "event": "meeting.created",
  "meeting": {
    "id": "uuid",
    "title": "Meeting Title",
    "startTime": "2024-01-15T10:00:00Z",
    "endTime": "2024-01-15T11:00:00Z",
    "attendees": ["Alice", "Bob"],
    "summary": "Key points discussed...",
    "notes": "Detailed notes...",
    "actionItems": ["Follow up on X", "Schedule Y"],
    "transcript": "Full transcript..."
  }
}
```
