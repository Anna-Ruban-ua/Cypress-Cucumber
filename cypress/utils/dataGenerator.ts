export const generateValidEmail = () => `user_${Date.now()}@test.com`;

export const generateInvalidEmail = () => `user_${Date.now()}_invalid`;

export const generateInvalidUrl = () => `https://telnyx.com/${Date.now()}`;

export function pickRandomTitle($elements: JQuery<HTMLElement>): string {
    const randomIndex = Math.floor(Math.random() * $elements.length);
    return $elements.eq(randomIndex).text();
  }

export function generateInvalidSearch(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 15; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result + Date.now();
  }