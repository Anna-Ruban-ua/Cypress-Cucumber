import { When } from "@badeball/cypress-cucumber-preprocessor";
import error404Page from "cypress/pages/error404Page";
import { error404Texts } from '../../support/texts';

When('I see the 404 error message', () => {
    error404Page.getError().should('contain.text', error404Texts.message1, error404Texts.message2);
    error404Page.getBackToHomeButton().should('be.visible');
});

When('I click "Back to home" button', () => {
    error404Page.clickBackToHome();
});