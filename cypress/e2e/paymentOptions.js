import Juice_Shop from "../support/PageObject/juice-shop_PO"

///<reference types="cypress"/>

    const juiceShop = new Juice_Shop()

describe('Validate My Payment Options Page',() => {

    before(() => {
        juiceShop.visitHomepage()
    })

    it('validates My Payment Options page', () => {
        juiceShop.login()
        juiceShop.paymentOptions()
    })

})