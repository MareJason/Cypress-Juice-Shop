import Juice_Shop from "../support/PageObject/juice-shop_PO"

/// <reference types="Cypress" />

let randomString = Math.random().toString(36).substring(2)
let email = randomString + "@gmail.com"
let pass = randomString


describe("User Registration", () => {

    const juiceShop = new Juice_Shop()

    it("Should register new user", () => {

        cy.intercept("POST","https://juice-shop.herokuapp.com/api/Users/").as("newUser")

        juiceShop.visitHomepage()
        juiceShop.registerUser()

        cy.wait('@newUser').then(({request,response}) => {
            cy.log("Request: " + JSON.stringify(request))
            cy.log("Response: " + JSON.stringify(response))

            expect(response.statusCode).to.eq(201)
            expect(response.httpVersion).to.eq('1.1')
            expect(response.statusMessage).to.eq('Created')
        })

        cy.request({
            method: "POST",
            url: "https://juice-shop.herokuapp.com/#/login",
            body: {
                email: email,
                password: pass,
                passwordRepeat: pass,
                question: "Mother's maiden name",
                securityAnswer: "sqcmg1k5trk"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
        })

    })
})