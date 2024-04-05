let randomString = Math.random().toString(36).substring(2)
let email = randomString + "@gmail.com"

class Automation_Store{
    visitHomePage(){
        cy.visit('https://automationteststore.com/')
    }

    registerNewUser(){
        cy.get('#customernav').click()
        cy.get('h2').contains('I am a new customer.')
        cy.get('.btn').eq(2).click()
        cy.get('h1').should('have.class','heading1')
        .and('contain','Create Account')
        cy.get('#AccountFrm_firstname').type('Sergio')
        cy.get('#AccountFrm_lastname').type('Bruno')
        cy.get('#AccountFrm_email').type(email)
        cy.get('#AccountFrm_address_1').type(randomString)
        cy.get('#AccountFrm_city').type('Novi Sad')
        cy.get('#AccountFrm_zone_id').select('Aberdeen')
        cy.get('#AccountFrm_zone_id').should('have.value','3513')
        cy.get('#AccountFrm_postcode').type('pkpk2323')
        cy.get('#AccountFrm_country_id').select('United Kingdom')
        cy.get('#AccountFrm_country_id').should('have.value','222')
        cy.get('#AccountFrm_loginname').type(randomString)
        cy.get('input[type="password"]').eq(0).type('meanMachine')
        cy.get('input[type="password"]').eq(1).type('meanMachine')
        cy.get('#AccountFrm_newsletter1').check()
        cy.get('#AccountFrm_newsletter1').should('be.checked')
        cy.get('#AccountFrm_agree').check()
        cy.get('#AccountFrm_agree').should('be.checked')
        cy.get('button[type="submit"]').eq(0).click()
        cy.url().should('include','https://automationteststore.com/index.php?rt=account/success')
        cy.get('h1').should('be.visible')
        .and('have.class','heading1')
        .and('contain','Your Account Has Been Created!')
    }
}
export default Automation_Store