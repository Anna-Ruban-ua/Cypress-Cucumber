import BasePage from "./basePage";
import { solutionsTexts } from '../support/texts';

export default class FilterPage extends BasePage {
    public filterButton = `button:contains("${solutionsTexts.filterButton}")`;
    public filterMenu = '[role="menu"]';
    public menuItemCheckboxes = '[role="menuitemcheckbox"]';
    public checkboxSelector = 'input[type="checkbox"]';
    public labelSelector = 'span';

    openFilterMenu() {
        this.getElement(this.filterButton).scrollIntoView().click();
      }

    getFilterMenu() {
        return this.getElement(this.filterMenu);
    }
    
    getAllCheckboxItems() {
        return this.getElement(this.menuItemCheckboxes);
    }

    getCheckbox(el: JQuery<HTMLElement>) {
        return this.wrap(el).find(this.checkboxSelector);
    }
    
    getLabel(el: JQuery<HTMLElement>) {
        return this.wrap(el).find(this.labelSelector);
    }

    isFilterMenuVisible() {
        return this.getFilterMenu();
    }
      
    checkCheckbox(el: JQuery<HTMLElement>) {
        this.getCheckbox(el).check({ force: true });
    }
      
    uncheckCheckbox(el: JQuery<HTMLElement>) {
        this.getCheckbox(el).uncheck({ force: true });
    }
      
    getCheckboxElement(el: JQuery<HTMLElement>) {
        return this.getCheckbox(el);
    }
      
    getLabelText(el: JQuery<HTMLElement>) {
        return this.getLabel(el).invoke('text');
    }
      
    getContentByName(name: string) {
        return this.getElementByTextWithOptions(name, { matchCase: false });
    }
}