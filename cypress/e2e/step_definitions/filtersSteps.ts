import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SolutionsPage from "cypress/pages/solutionsPage";
import { pickRandomTitle, generateInvalidSearch } from "cypress/utils/dataGenerator";

const solutionsPage = new SolutionsPage();

When('I choose the filter option', () => {
    solutionsPage.openFilterMenu();
    solutionsPage.isFilterMenuVisible().should('be.visible');
});

Then('content is filtred', () => {
    solutionsPage.getAllCheckboxItems().each(($el) => {
        solutionsPage.getLabelText($el).then((labelText) => {
          const name = labelText.trim();
      
          solutionsPage.checkCheckbox($el);
          solutionsPage.getCheckboxElement($el).should('be.checked');
      
          solutionsPage.getContentByName(name).should('exist');
      
          solutionsPage.uncheckCheckbox($el);
          solutionsPage.getCheckboxElement($el).should('not.be.checked');
        });
    });
});

When(/^I search (valid|invalid) title$/, (type: string) => {
    if (type === 'valid') {
      solutionsPage.getSearchResults()
        .should('have.length.greaterThan', 0)
        .then(($titles) => {
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