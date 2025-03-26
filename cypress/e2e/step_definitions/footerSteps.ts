import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import { footerBlocksMap } from "../../utils/constants";

const homePage = new HomePage();

When('I check that the {string} block links are visible in the footer', (blockName: string) => {
  const items = footerBlocksMap[blockName];
  if (!items) {
    throw new Error(`No footer block found for: ${blockName}`);
  }
  items.forEach(({ footerName }) => {
    homePage.getFooterItemElement(footerName).should('be.visible');
  });
});

Then("each link in the {string} block should navigate to its corresponding page", (blockName: string) => {
  const items = footerBlocksMap[blockName];
  if (!items) {
    throw new Error(`No footer block found for: ${blockName}`);
  }
  items.forEach(({ footerName, itemUrl }) => {
    homePage.clickFooterItem(footerName);
    homePage.getCurrentUrl().should("include", itemUrl);
    cy.visit("/");
  });
});