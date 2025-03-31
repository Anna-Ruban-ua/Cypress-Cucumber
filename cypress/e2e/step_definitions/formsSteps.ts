import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import { generateValidEmail, generateInvalidEmail, generateInvalidPhone, generateInvalidDomain, generateValidCompanyName } from "cypress/utils/dataGenerator";
import receiveCallData from "../../fixtures/receiveCallData.json";
import { faker } from '@faker-js/faker';
import { endpoints } from "../../utils/endpoints";

When(/^I enter an? (valid|invalid) email in the "Connect with us" form$/, (type: string) => {
    const email = type === 'valid' ? generateValidEmail() : generateInvalidEmail();
    homePage.fillContactWithUsForm(email);
});

Then('I see an error notification', () => {
    homePage.getConnectWithUsInputElement().then(($input) => {
        const validationMessage = ($input[0] as HTMLInputElement).validationMessage;
        expect(validationMessage).to.not.be.empty;
        cy.url().should('not.include', endpoints.signUp);
    });
});

When('I fill the {string} Form with:', (formName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const email = data.email === 'invalid' ? generateInvalidEmail() : generateValidEmail();
    const mobile = data.mobile === 'invalid' ? generateInvalidPhone() : faker.helpers.arrayElement(receiveCallData.validPhones);
    const domain = data.domain === 'invalid' ? generateInvalidDomain() : faker.helpers.arrayElement(receiveCallData.validDomains);
    const companyName = generateValidCompanyName();
    homePage.fillReceiveACallForm({ email, mobile, domain, companyName });
});

Then(/^I see an? (\w+) error message$/, (field: string) => {
    homePage.checkErrorMessageForField(field as 'email' | 'domain' | 'mobile' | 'terms')
      .should('be.visible');
  });
