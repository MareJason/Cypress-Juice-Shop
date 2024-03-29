import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given('I access the Juice-Shop Login Page', () => {
    cy.visit('https://juice-shop.herokuapp.com/#/login')
    cy.get('.cdk-overlay-backdrop').click(-50, -50, {force:true})
})

When('I enter an email {word}', (email) => {
    cy.get('#email').type(email)
})
And('I enter a password {word}', (pass) => {
    cy.get('#password').type(pass)
})
And('I click on the Login button', () => {
    cy.get('#loginButton').click()
})
Then('I should be presented with the following page {word} {word}', (message, message2,) => {
    const expectedMessage = message + " " + message2 
    cy.get('.heading').should('have.text',expectedMessage)
})