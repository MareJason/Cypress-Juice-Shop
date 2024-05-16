/// <reference types="cypress"/>

describe('Automation Test Store Contact Us Page testing', () => {
     
    before(function() {
        cy.fixture("contactUsData").as('contactFormData')
    })

    it('should test contact us page correctly', () => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href$='contact']").then(function(footerLinkText){
        cy.log('Footer link text is ' + footerLinkText.text())
        })
    })

    it('proveravam svoje znanje u trazenju selektora - linkova', () => {
        const makeUpLink = cy.get("a[href*='index.php?rt=product/category&path=']").contains('Makeup')
        makeUpLink.click()
    })

    it('inserting data via json file', () => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href$='contact']").then(function(footerLinkText){
        cy.log('Footer link text is ' + footerLinkText.text())
        cy.get("a[href$='contact']").click()
        cy.get('@contactFormData').then((userData) => {
            cy.get('#ContactUsFrm_first_name').type(userData.firstName)
            cy.get('#ContactUsFrm_email').type(userData.email)
            cy.get('#ContactUsFrm_enquiry').type(userData.comment)
        })
        })
    })

    it.only('filling contact us form via cypress command', () => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href$='contact']").click()
        cy.contactUsForm('Marko','mare@gmail.com','neki random text')
    });

});