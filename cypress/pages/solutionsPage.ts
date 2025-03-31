import BasePage from "./basePage";
import { solutionsTexts } from '../support/texts';

export default class SolutionsPage extends BasePage {

    public searchInput = '#search';
    public searchResultTitles = 'h3.c-PJLV.c-rMlRu.c-PJLV-cHtIMp-dark-false';

    typeInSearch(text: string) {
        this.typeText(this.searchInput, `${text}{enter}`);
    }
    
    getSearchResults() {
        return this.getElement(this.searchResultTitles);
    }
    
    getSearchResultByText(text: string) {
        return this.getElementByText(this.searchResultTitles, text);
    }

    getNoResultsMessage() {
        return this.containsText(solutionsTexts.noResults);
    }
      
    getContentByName(name: string) {
        return this.getElementByTextWithOptions(name, { matchCase: false });
    }
}