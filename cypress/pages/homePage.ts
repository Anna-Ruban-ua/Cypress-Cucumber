import BasePage from "./basePage";
import { endpoints } from '../utils/endpoints';

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
}