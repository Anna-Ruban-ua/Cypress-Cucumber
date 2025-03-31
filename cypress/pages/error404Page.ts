import BasePage from "./basePage";
import { error404Texts } from '../support/texts';

class Error404Page extends BasePage {
  public backToHomeButtonLocator = 'a[href="/"]';
  errorBlock = 'div.c-cUhiIV.c-cUhiIV-ibKVMeD-css';

  getError() {
    return this.getElement(this.errorBlock);
  }
  
  getBackToHomeButton() {
    return this.getElementByText(this.backToHomeButtonLocator, error404Texts.backToHome);
  }

  visitInvalidPage(url: string) {
    this.visit(url, { failOnStatusCode: false });
  }

  clickBackToHome() {
    this.getBackToHomeButton().click();
  }
}

export default new Error404Page();