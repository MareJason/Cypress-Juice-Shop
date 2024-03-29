import Juice_Shop from "../support/PageObject/juice-shop_PO";

/// <reference types="Cypress"/>

const juiceShop = new Juice_Shop()

describe('User Log In', () => {
    
    it('should log in a user',() => {

        juiceShop.visitHomepage()
        juiceShop.login()
        
        cy.request({
            method: "POST",
            url:"https://juice-shop.herokuapp.com/rest/user/login",
            body:{
                email:"m7ospzbyez@gmail.com",
                password:"m7ospzbyez"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
});