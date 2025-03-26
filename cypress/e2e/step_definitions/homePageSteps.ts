import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";
import { blocksMap, BlockItem } from "../../utils/constants";

const homePage = new HomePage();

When('I check that the {string} block links are visible in the footer', (blockName: string) => {
  const items: BlockItem[] = blocksMap[blockName];
  if (!items) {
    throw new Error(`No footer block found for: ${blockName}`);
  }

  items.forEach((item) => {
    if ('footerName' in item) {
      homePage.getFooterItemElement(item.footerName).should('be.visible');
    }
  });
});

Then('each link of the {string} block should navigate to its corresponding page', (blockName: string) => {
  const items: BlockItem[] = blocksMap[blockName];
  if (!items) {
    throw new Error(`No items found for block: "${blockName}"`);
  }

  items.forEach((item, index) => {
    if ('menuName' in item) {
      if (index > 0) {
        homePage.clickMenuToggleButton();
      }

      if (item.isDirectLink) {
        homePage.clickHeaderLinkByUrl(item.itemUrl!);
      } else {
        homePage.clickDropdownItem(item.menuName, item.itemUrl);
      }

      if (item.itemUrl) {
        homePage.getCurrentUrl().should('include', item.itemUrl);
      } else {
        homePage.getDropDownMenuElement().should('be.visible');
      }
    }

    if ('footerName' in item) {
      homePage.clickFooterItem(item.footerName);
      homePage.getCurrentUrl().should('include', item.itemUrl);
    }

    cy.visit("/");
  });
});
