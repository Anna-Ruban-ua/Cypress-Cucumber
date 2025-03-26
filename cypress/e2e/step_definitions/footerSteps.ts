import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import { footerCompanyItems } from "../../utils/constants";

const homePage = new HomePage();

Given("I open the {string} page", (page: string) => {
    homePage.navigateTo(page);
});

When('I check that the {string} block links are visible in the footer', () => {
    footerCompanyItems.forEach(({ footerName }) => {
        homePage.getFooterItemElement(footerName).should('be.visible');
      });
});

Then("each link in the {string} block should navigate to its corresponding page", (blockName: string) => {
    footerCompanyItems.forEach(({ footerName, itemUrl }) => {
      homePage.clickFooterItem(footerName);
      homePage.getCurrentUrl().should("include", itemUrl);
      cy.visit("/");
    });
  });