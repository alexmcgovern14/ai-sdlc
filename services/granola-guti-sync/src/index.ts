import express from 'express';
import { GranolaWebhookPayload } from './types.js';
import { transformMeetingToCard, extractActionItemCards } from './transform.js';
import { createCard, healthCheck } from './guti-client.js';

const app = express();
const PORT = process.env.PORT || 3001;
const CREATE_ACTION_ITEM_CARDS = process.env.CREATE_ACTION_ITEM_CARDS === 'true';

app.use(express.json());

// Health check endpoint
app.get('/health', async (_req, res) => {
  const gutiAvailable = await healthCheck();
  res.json({
    status: 'ok',
    gutiConnected: gutiAvailable,
    timestamp: new Date().toISOString()
  });
});

// Webhook endpoint for granola-webhook daemon
app.post('/webhook/granola', async (req, res) => {
  const payload = req.body as GranolaWebhookPayload;

  console.log(`[${new Date().toISOString()}] Received ${payload.event} for meeting: ${payload.meeting.title}`);

  if (!payload.meeting) {
    res.status(400).json({ error: 'Missing meeting data' });
    return;
  }

  // Transform meeting to Guti card
  const meetingCard = transformMeetingToCard(payload.meeting);
  const result = await createCard(meetingCard);

  if (!result.success) {
    console.error(`Failed to create meeting card: ${result.error}`);
    res.status(500).json({ error: result.error });
    return;
  }

  console.log(`Created meeting card: ${result.id}`);

  // Optionally create separate cards for each action item
  const actionItemResults: string[] = [];
  if (CREATE_ACTION_ITEM_CARDS) {
    const actionCards = extractActionItemCards(payload.meeting);
    for (const card of actionCards) {
      const actionResult = await createCard(card);
      if (actionResult.success && actionResult.id) {
        actionItemResults.push(actionResult.id);
        console.log(`Created action item card: ${actionResult.id}`);
      }
    }
  }

  res.json({
    success: true,
    meetingCardId: result.id,
    actionItemCardIds: actionItemResults
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Granola-Guti sync service running on port ${PORT}`);
  console.log(`Webhook endpoint: http://localhost:${PORT}/webhook/granola`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Action item cards: ${CREATE_ACTION_ITEM_CARDS ? 'enabled' : 'disabled'}`);
});
