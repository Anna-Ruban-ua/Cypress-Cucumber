import BasePage from "./basePage";

export default class Error404Page extends BasePage {
  public backToHomeButtonLocator = 'a[href="/"]';

  constructor() {
    super();
  }

  getErrorMessage1() {
    return this.containsText("Oops, this page doesn’t exist");
  }
  
  getErrorMessage2() {
    return this.containsText("Unless you’re trying to access our 404 page. If you are, then you’re in the right place.");
  }
  
  getBackToHomeButton() {
    return this.getElementByText(this.backToHomeButtonLocator, "Back to home");
  }

  visitInvalidPage(url: string) {
    this.visit(url, { failOnStatusCode: false });
  }

  clickBackToHome() {
    this.getBackToHomeButton().click();
  }
}