import Juice_Shop from "../support/PageObject/juice-shop_PO";

///<reference types="Cypress"/>

describe('Iteration through elements and click on specific product',() => {

    const juiceShop = new Juice_Shop()

    before(() => {
        juiceShop.visitHomepage()
    })

    it('iterateThroughElements',() => {
        cy.selectProduct('Banana Juice')
    })

})