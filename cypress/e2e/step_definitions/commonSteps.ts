import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import { endpoints } from "cypress/utils/endpoints";
import error404Page from "cypress/pages/error404Page";
import { generateInvalidUrl } from "cypress/utils/dataGenerator";

Given('I open the {string} page', (page: string) => {
    if (page === 'fake') {
        error404Page.visitInvalidPage(generateInvalidUrl());
    } else {
        homePage.navigateTo(page);
    }
});

Then('I am redirected to the {string} page', (page: string) => {
    const expectedPath = endpoints[page as keyof typeof endpoints];
    if (!expectedPath) throw new Error(`No endpoint found for page: "${page}"`);
    cy.url().should('include', expectedPath);
});

When('I accept cookies', () => {
    homePage.getCookieByName('cookie-consent').should('not.exist');
    homePage.acceptCookies();
    cy.reload();
});

When('I clear cookies', () => {
    cy.clearCookies();
});

Then('the cookie banner should be {string}', (state: 'visible' | 'hidden') => {
  if (state === 'visible') {
    homePage.getCookieBanner().should('be.visible', { timeout: 8000 });
  } else {
    homePage.getCookieBanner().should('not.exist');
  }
});