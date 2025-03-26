import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import { endpoints } from "cypress/utils/endpoints";

const homePage = new HomePage();

Given('I open the {string} page', (page: string) => {
    homePage.navigateTo(page);
});

Then('I redirected to the {string} page', (page: string) => {
    const expectedPath = endpoints[page as keyof typeof endpoints];
    if (!expectedPath) throw new Error(`No endpoint found for page: "${page}"`);
    homePage.getCurrentUrl().should('include', expectedPath);
});