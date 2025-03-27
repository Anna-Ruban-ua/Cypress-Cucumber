import BasePage from "./basePage";
import { endpoints } from '../utils/endpoints';
import { ReceiveCallFormData } from '../types/formTypes';

export default class HomePage extends BasePage {
    public mainMenuButton = "#main-menu button";
    public menuToggleButton = "button[aria-controls='main-menu-content']";
    public dropDownMenu = "div[data-radix-menu-content]";

    public footerMenu = "footer a";

    public connectWithUsForm = "form[action='/sign-up']";
    public inputConnectWithUs = "form[action='/sign-up'] input#email";
    public submitButton =  "form[action='/sign-up'] button";

    public cookieBanner = "#onetrust-group-container"
    public acceptCookieButton = "#onetrust-accept-btn-handler";

    public receiveCallForm = "form[aria-label='voice-ai-form']";

    constructor() {
        super();
      }

    visitHomePage() {
        this.visit(endpoints.home);
    }
    
    clickMenuToggleButton() {
        this.getElement(this.menuToggleButton).then(($button) => {
            if ($button.is(":visible")) {
                this.wrap($button).first().click();
            }
        });
    }

    clickHeaderLinkByUrl(itemUrl: string) {
        this.getElement(`header a[href='${itemUrl}']`).first().click();
    }
      
    getDropDownMenuElement() {
        return this.getElement(this.dropDownMenu);
    }

    clickDropdownItem(menuName: string, itemUrl?: string) {
        this.clickElementByText(this.mainMenuButton, menuName);
        this.getElement(this.dropDownMenu).should("be.visible").scrollTo("bottom", { ensureScrollable: false });

        if (itemUrl) {
            this.getElement(this.dropDownMenu).find(`a[href='${itemUrl}']`).click();
        }
    }

    getFooterItemElement(footerName: string) {
        return this.getElementByText(this.footerMenu, footerName);
      }

    clickFooterItem(footerName: string) {
        this.getElement(this.footerMenu).first().scrollIntoView();
        this.clickElementByText(this.footerMenu, footerName);
    }

    getConnectWithUsInputElement() {
        return this.getElement(this.inputConnectWithUs);
      }

    fillContactWithUsForm(email: string) {
        this.getElement(this.inputConnectWithUs).scrollIntoView().type(email);
        this.getElement(this.submitButton).filter(':visible').first().click();

    }

    acceptCookies() {
        this.getElement(this.acceptCookieButton).click();
    }

    getCookieBanner() {
        return this.getElement(this.cookieBanner);
    }

    fillReceiveACallForm({ email, mobile, domain, companyName }: ReceiveCallFormData): void {
        this.getElement(this.receiveCallForm).scrollIntoView().within(() => {
          this.getElement('#business_name').clear().type(companyName);
          this.getElement('#domain').clear().type(domain);
          this.getElement('#phone_number').clear().type(mobile);
          this.getElement('#email').clear().type(email);
          this.getElement('button[type="submit"]').click();
        });
    }

    checkErrorMessageForField(field: 'email' | 'domain' | 'mobile' | 'terms') {
        const selectors = {
          email: '#email_message',
          domain: '#domain_message',
          mobile: '#phone_number_message',
          terms: '#terms_and_conditions_message',
        };
      
        return this.getElement(this.receiveCallForm).find(selectors[field]);
    }
}