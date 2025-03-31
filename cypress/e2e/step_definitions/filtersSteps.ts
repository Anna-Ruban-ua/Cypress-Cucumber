import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SolutionsPage from "cypress/pages/solutionsPage";
import MessagingPage from "cypress/pages/messagingPage";
import { pickRandomTitle, generateInvalidSearch } from "cypress/utils/dataGenerator";
import FilterPage from "cypress/pages/filterPage";

const solutionsPage = new SolutionsPage();
const messagingPage = new MessagingPage();
const filterPage = new FilterPage();


When('I choose the filter option', () => {
  filterPage.openFilterMenu();
  filterPage.isFilterMenuVisible().should('be.visible');
});

Then('content is filtered', () => {
  filterPage.getAllCheckboxItems().each(($el) => {
    filterPage.getLabelText($el).then((labelText) => {
        const name = labelText.trim();
        filterPage.checkCheckbox($el);
        filterPage.getCheckboxElement($el).should('be.checked');
        filterPage.getContentByName(name).should('exist');
        filterPage.uncheckCheckbox($el);
        filterPage.getCheckboxElement($el).should('not.be.checked');
      });
  });
});

When(/^I search (valid|invalid) title$/, (type: string) => {
    if (type === 'valid') {
      solutionsPage.getSearchResults().should('have.length.greaterThan', 0).then(($titles) => {
          const randomTitle = pickRandomTitle($titles);
          cy.wrap<string>(randomTitle).as('searchedTitle');
          solutionsPage.typeInSearch(randomTitle);
        });
    } else {
      const invalidSearch = generateInvalidSearch();
      solutionsPage.typeInSearch(invalidSearch);
    }
  });

Then('content is searched', () => {
    cy.get('@searchedTitle').then((title) => {
      const searchedTitle = title as unknown as string;
      solutionsPage.getSearchResultByText(searchedTitle).should('be.visible');
    });
});

Then('no results for this filter', () => {
  solutionsPage.getNoResultsMessage().should('be.visible');
});

When('I switch currency from {string} to {string}', (fromCurrency: string, toCurrency: string) => {
  messagingPage.getCurrencySelect().scrollIntoView().click();
  messagingPage.selectCurrency(toCurrency);
  messagingPage.getCurrencyElement(toCurrency).should('be.visible');
});

Then('I should see the prices update accordingly with {string}', (symbol) => {
  messagingPage.getPriceContainer().first().invoke('text').should('include', symbol);
});