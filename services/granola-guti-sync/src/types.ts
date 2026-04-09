// Granola meeting note structure (from granola-webhook daemon)
export interface GranolaMeeting {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  attendees?: string[];
  transcript?: string;
  notes?: string;
  summary?: string;
  actionItems?: string[];
}

// Guti card structure (from knowledge/guti.md)
export interface GutiCard {
  title: string;
  type: 'task' | 'note';
  priority: 'P0' | 'P1' | 'P2' | 'P3' | 'P4' | 'unprioritised';
  labels: string[];
  columns: string[];
  archived: boolean;
  createdAt: string;
  updatedAt: string;
  body: string;
}

// Webhook payload from granola-webhook daemon
export interface GranolaWebhookPayload {
  event: 'meeting.created' | 'meeting.updated';
  meeting: GranolaMeeting;
}
