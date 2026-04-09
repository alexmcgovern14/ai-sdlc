import { GranolaMeeting, GutiCard } from './types.js';

/**
 * Transform a Granola meeting into a Guti card
 */
export function transformMeetingToCard(meeting: GranolaMeeting): GutiCard {
  const now = new Date().toISOString();

  // Build the card body with meeting details
  const bodyParts: string[] = [];

  if (meeting.attendees?.length) {
    bodyParts.push(`## Attendees\n${meeting.attendees.map(a => `- ${a}`).join('\n')}`);
  }

  if (meeting.summary) {
    bodyParts.push(`## Summary\n${meeting.summary}`);
  }

  if (meeting.notes) {
    bodyParts.push(`## Notes\n${meeting.notes}`);
  }

  if (meeting.actionItems?.length) {
    bodyParts.push(`## Action Items\n${meeting.actionItems.map(a => `- [ ] ${a}`).join('\n')}`);
  }

  if (meeting.transcript) {
    bodyParts.push(`## Transcript\n<details>\n<summary>View transcript</summary>\n\n${meeting.transcript}\n</details>`);
  }

  const meetingDate = new Date(meeting.startTime);
  const formattedDate = meetingDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return {
    title: `${meeting.title} (${formattedDate})`,
    type: 'note',
    priority: 'unprioritised',
    labels: ['meeting', 'granola'],
    columns: [], // Will be set by Guti based on user config
    archived: false,
    createdAt: meeting.startTime || now,
    updatedAt: now,
    body: bodyParts.join('\n\n')
  };
}

/**
 * Transform action items from a meeting into separate task cards
 */
export function extractActionItemCards(meeting: GranolaMeeting): GutiCard[] {
  if (!meeting.actionItems?.length) return [];

  const now = new Date().toISOString();

  return meeting.actionItems.map((item, index) => ({
    title: item,
    type: 'task' as const,
    priority: 'unprioritised' as const,
    labels: ['action-item', 'granola'],
    columns: [],
    archived: false,
    createdAt: now,
    updatedAt: now,
    body: `From meeting: **${meeting.title}**\n\nExtracted action item #${index + 1}`
  }));
}
