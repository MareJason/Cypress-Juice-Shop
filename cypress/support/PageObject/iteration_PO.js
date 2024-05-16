class iteration {

    visitHomePage() {
        cy.visit('https://automationteststore.com')
    }

    iterationThourghProducts() {

        cy.get('.oneprice').invoke('text').as('nonSaleItemPrice')
        cy.get('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0

        cy.get('@nonSaleItemPrice').then(($linktext) => {
            var nonSaleItemsTotal = 0
            var nonSaleItem = $linktext.split('$')
            var i
            for (i = 0; i < nonSaleItem.length; i++) {
                cy.log(nonSaleItem[i])
                nonSaleItemsTotal += Number(nonSaleItem[i])
            }
            cy.log("Non sale items total ammount: " + nonSaleItemsTotal)

            itemsTotal += nonSaleItemsTotal
        })

        cy.get('@saleItemPrice').then(($linktext) => {
            var saleItemsPriceTotal = 0
            var saleItems = $linktext.split('$')
            var i
            for (i = 0; i < saleItems.length; i++) {
                cy.log(saleItems[i])
                saleItemsPriceTotal += Number(saleItems[i])
            }
            itemsTotal += saleItemsPriceTotal
            cy.log("Sale items total ammount: " + saleItemsPriceTotal).then(() => {
                cy.log("The total ammount of all prices: " + itemsTotal)
                expect(itemsTotal).to.equal(648.5)
            })

        })
    }
}

export default iteration