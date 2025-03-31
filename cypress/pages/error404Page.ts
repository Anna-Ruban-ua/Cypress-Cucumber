import BasePage from "./basePage";
import { error404Texts } from '../support/texts';

export default class Error404Page extends BasePage {
  public backToHomeButtonLocator = 'a[href="/"]';

  getErrorMessage1() {
    return this.containsText(error404Texts.message1);
  }
  
  getErrorMessage2() {
    return this.containsText(error404Texts.message2);
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