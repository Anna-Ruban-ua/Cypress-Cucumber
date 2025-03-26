import { endpoints } from "../utils/endpoints";
export default class BasePage {

    navigateTo(page: string) {
        const key = page.toLowerCase() as keyof typeof endpoints;
        const path = endpoints[key];
    
        if (!path) throw new Error(`No endpoint found for page: "${page}"`);
        cy.visit(path);
    }
    
    visit(url: string, options?: Partial<Cypress.VisitOptions>) {
        cy.visit(url, options);
    }

    getCurrentUrl() {
        return cy.url();
    }

    getElement(selector: string,) {
        return cy.get(selector);
    }

    getElementByText(selector: string, text: string) {
        return cy.contains(selector, text);
    }

    clickElement(selector: string) {
        this.getElement(selector).click();
    }

    clickElementByText(selector: string, text: string) {
        return cy.contains(selector, text).click();
    }

    typeText(selector: string, text: string) {
        this.getElement(selector).type(text);
    }

    containsText(text: string) {
        return cy.contains(text);
    }

    wrap(el: JQuery<HTMLElement>) {
        return cy.wrap(el);
    }

    getCookieByName(name: string) {
        return cy.getCookie(name);
    }

}