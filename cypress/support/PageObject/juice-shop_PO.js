let randomString = Math.random().toString(36).substring(2)
let email = randomString + "@gmail.com"
let pass = randomString
let maidenName = randomString

class Juice_Shop {

    visitHomepage() {
        cy.visit('/')
        cy.get('.cdk-overlay-backdrop').click(-50, -50, { force: true })
    }

    registerUser() {
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.get('.mat-focus-indicator').contains('Account').click()
        cy.get('.mat-menu-ripple').click({ force: true })
        cy.title().should('include', 'OWASP Juice Shop')
        cy.get('#newCustomerLink').click()
        cy.get('#emailControl').type(email)
        cy.get('#passwordControl').type(pass)
            .should('have.value', pass)
            .should('have.attr', 'type', 'password')
        cy.get('#repeatPasswordControl').type(pass)
        cy.get('.mat-select-placeholder').click()
        cy.get('#mat-option-4').contains("Mother's maiden name?").click()
        cy.get('#securityAnswerControl').type(maidenName)
        cy.get('#registerButton').click()
        cy.get('h1').should('be.visible').and('have.text', 'Login')
    }

    login() {
        cy.get('.mat-focus-indicator').contains('Account').click()
        cy.get('.mat-menu-ripple').click({ force: true })
        cy.title().should('include', 'OWASP Juice Shop')
        cy.get('#email').type('xitq4t7s1x@gmail.com')
        cy.get('#password').type('xitq4t7s1x')
        cy.get('.mat-button-wrapper').eq(6).click()
        cy.url().should('eq', 'https://juice-shop.herokuapp.com/#/search')
        cy.get('.heading').should('be.visible').and('have.text', 'All Products')
    }

    aboutUs() {
        cy.get('.mat-icon').eq(3).click()
        cy.get('.menu-text').eq(2).click()
        cy.get('h1')
            .should('be.visible')
            .and('have.text', 'About Us')
        cy.get('.arrow-container').find('.next').click()
        cy.get('body').contains('Lorem ipsum dolor sit amet, consetetur sadipscing elitr')
        cy.get('a[href]').eq(7) //.click() 
            .should('have.css', 'color', 'rgb(174, 213, 129)')
    }

    socialIcon() {
        cy.get('.mat-icon').eq(3).click()
        cy.get('.menu-text').eq(2).click()
        cy.get('h1')
            .should('be.visible')
            .and('have.text', 'About Us')
        cy.get('.ng-star-inserted a[aria-label="Button for the Twitter page of the shop"]').invoke('removeAttr', 'target').click({ force: true })
    }

    cstmrFdbck() {
        cy.get('.mat-icon').eq(3).click()
        cy.get('.menu-text').eq(1).click()
        cy.get('h1').should('have.text', 'Customer Feedback')
        cy.get('#comment')
            .should('have.attr', 'placeholder', 'What did you like or dislike?')
            .type('many things')
        cy.get('.mat-slider-ticks').click({ force: true })
        cy.get('#captchaControl').type(-12)
        cy.get('#submitButton').click()
        cy.get('.mat-simple-snack-bar-content').should('have.text', 'Wrong answer to CAPTCHA. Please try again.')

    }

    Photo() {
        cy.get('.mat-icon').eq(3).click()
        cy.get('.menu-text').eq(3).click()
        cy.get('h1')
            .should('be.visible')
            .and('have.text', 'Photo Wall')
        //cy.get('.image').eq(0)
        cy.get('img').each((image) => {
            cy.wrap(image).should('be.visible')
        })
        cy.get('.image').eq(3)
            .should('have.attr', 'src', 'assets/public/images/uploads/BeeHaven.png')
            .and('have.attr', 'alt', 'Welcome to the Bee Haven (/#/bee-haven)🐝 (© evmrox)')
    }

    sideMenu() {
        cy.get('.mat-icon').eq(3).trigger('mouseover')
        cy.get('.cdk-overlay-container').should('be.visible')
    }

    paymentOptions() {
        cy.get('.mat-focus-indicator').contains('Account').click()
        cy.get('.mat-menu-trigger').eq(2).click()
        cy.get('.mat-focus-indicator').contains('My Payment Options').click()
        cy.get('.mat-expansion-panel-header-title').click()
        cy.get('.mat-form-field-infix').eq(1)
        .should('have.text','Name *')
        .type('Marko')
        cy.get('.mat-form-field-infix').eq(2)
        .should('have.text','Card Number *')
        .type('3324234234234243')
        cy.get('#mat-input-5').select(7)
        cy.get('#mat-input-6').select(7)
        cy.get('#submitButton').click()
        cy.get('h1').should('be.visible')
        .and('have.text','My Payment Options')
    }
    complaintForm() {
        cy.get('.mat-tooltip-trigger').eq(0).click()
        cy.get('.ng-star-inserted').contains('Complaint').click()
        cy.get('h1')
        .should('be.visible')
        .and('have.text','Complaint')
        cy.get('.mat-input-element').eq(2).type("Everything's just fine")
    }
}
export default Juice_Shop