import Juice_Shop from "../support/PageObject/juice-shop_PO";

///<reference types="cypress"/>
    
    const juiceShop = new Juice_Shop()

describe('Customer Feedback Page Validation', () => {

    it('Validates customer feedback page', () => {
        juiceShop.visitHomepage()
        juiceShop.cstmrFdbck()
    })
});