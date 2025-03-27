import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Error404Page from "cypress/pages/error404Page";

const error404Page = new Error404Page();

When('I see the 404 error message', () => {
    error404Page.getErrorMessage1().should('be.visible');
    error404Page.getErrorMessage2().should('be.visible');
    error404Page.getBackToHomeButton().should('be.visible');
});

When('I click "Back to home" button', () => {
    error404Page.clickBackToHome();
});