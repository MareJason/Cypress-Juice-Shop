import Juice_Shop from "../support/PageObject/juice-shop_PO"

/// <reference types="cypress"/>

const juiceShop = new Juice_Shop()

describe('Complaint Form with file upload', () => {

    it('should fill in the complaint form with uploading a file',() => {

        juiceShop.visitHomepage()
        juiceShop.login()
        juiceShop.complaintForm()

    })

})