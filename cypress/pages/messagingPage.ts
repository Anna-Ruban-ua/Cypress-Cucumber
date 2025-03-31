import BasePage from "./basePage";

export default class MessagingPage extends BasePage {
    
  public currencySelect = '#currency-filter';
  public currencyElement = 'span.c-PJLV.c-ihLeEO';
  public priceContainer = '#Services';
    
  getCurrencySelect() {
    return this.getElement(this.currencySelect);
  }
    
  selectCurrency(currency: string) {
    this.getCurrencyElement(currency).click();
  }

  getCurrencyElement(currency: string) {
    return this.getElementByText(this.currencyElement, currency);
  }

  getPriceContainer() {
    return this.getElement(this.priceContainer);
  }  

}