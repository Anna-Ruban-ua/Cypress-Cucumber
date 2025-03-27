import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import { generateValidEmail, generateInvalidEmail } from "cypress/utils/dataGenerator";

const homePage = new HomePage();

When(/^I enter an? (valid|invalid) email$/, (type: string) => {
    const email = type === 'valid' ? generateValidEmail() : generateInvalidEmail();
    homePage.fillContactWithUsForm(email);
});

Then('I see an error message', () => {
    homePage.getConnectWithUsInputElement().then(($input) => {
        const validationMessage = ($input[0] as HTMLInputElement).validationMessage;
        expect(validationMessage).to.not.be.empty;
    });
});
