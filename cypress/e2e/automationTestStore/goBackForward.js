///<reference types="cypress"/>
describe('moving through the website', () => {
    before(() => {
        cy.visit('https://automationteststore.com/')
    })
    it.only('moving back', () => {
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()
        cy.go('back')
        cy.go('forward')
        cy.reload(true)
    });

    it('USING ATTRIBUTE BLANK', () => {
        cy.get('.twitter').eq(0).invoke('removeAttr','target').click({force: true})
        cy.url().should('include','twitter')
    });
});