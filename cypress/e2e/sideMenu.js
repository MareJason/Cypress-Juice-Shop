import Juice_Shop from "../support/PageObject/juice-shop_PO";

///<reference types="cypress"/>

const juiceShop = new Juice_Shop()

describe('Side Menu Validation', () => {

it('Validates side menu', () => {
    
    juiceShop.visitHomepage()
    juiceShop.sideMenu()

})
});