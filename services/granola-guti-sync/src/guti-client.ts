import { GutiCard } from './types.js';

const GUTI_API_URL = process.env.GUTI_API_URL || 'http://localhost:3000';

export interface GutiResponse {
  success: boolean;
  id?: string;
  error?: string;
}

/**
 * Create a card in Guti
 */
export async function createCard(card: GutiCard): Promise<GutiResponse> {
  try {
    const response = await fetch(`${GUTI_API_URL}/api/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { success: false, error: `HTTP ${response.status}: ${errorText}` };
    }

    const data = await response.json();
    return { success: true, id: data.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: message };
  }
}

/**
 * Check if Guti API is available
 */
export async function healthCheck(): Promise<boolean> {
  try {
    const response = await fetch(`${GUTI_API_URL}/api/cards`, {
      method: 'GET',
    });
    return response.ok;
  } catch {
    return false;
  }
}
