import { faker } from '@faker-js/faker';

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

export function getRandomCountries(count: number = 1): string[] {
    const countries = [
      'Ukraine', 'United States', 'Canada', 'Germany', 'France',
      'United Kingdom', 'Australia', 'Brazil', 'India', 'Japan',
      'Netherlands', 'Spain', 'Italy', 'Mexico', 'Poland'
    ];
    return Cypress._.sampleSize(countries, count);
  }

export const generateInvalidPhone = (): string => {
  return faker.string.numeric(5);
};

export const generateInvalidDomain = (): string => {
  return faker.internet.domainWord();
};

export const generateValidCompanyName = (): string => {
  return faker.company.name();
};