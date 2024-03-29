import Juice_Shop from "../support/PageObject/juice-shop_PO";

const juiceShop = new Juice_Shop()

describe('Photo Wall Page Validation', () => {

    it('should validate if all images on the page are visible', () => {
        
        juiceShop.visitHomepage()
        juiceShop.Photo()
    })


});