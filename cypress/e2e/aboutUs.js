import Juice_Shop from "../support/PageObject/juice-shop_PO";

///<reference types="cypress"/>

const juiceShop = new Juice_Shop()

describe('About US Page Validation', () => {

it('validates About US page', () => {
    cy.document().should('have.property','charset').and('eq','UTF-8')
    juiceShop.visitHomepage()
    cy.title().should('include','Juice')
    juiceShop.aboutUs()
})
it('should redirect to another website after clicking on social icon', () => {
    juiceShop.visitHomepage()
    juiceShop.socialIcon()
})
});