describe('verfiy the checkout functionality', () => {
    it('validate the add to cart functinality', () => {

        // cy.visit('/')

        // cy.fixture('emerson').then(function (data) {
        //    cy.neviBar("Fruits")
        //     cy.url().should('contain', 'seasonal')
        //     cy.get('.grid-item').eq(4).click()
        //     cy.get('.qty-group > input').clear()
        //     cy.get('.qty-group > input').type('4')
        //     cy.get('.groups-btn > .checkbox-group > .title').click()
        //     cy.get('#product-add-to-cart').click()
        //     cy.get('.btn-go-to-cart').click()
        //     cy.contains('18').click()
        //     cy.get('.btn-actions > .checkbox-group > .title').click()
        //     cy.wait(3000)
        //     cy.get('.ui-state-default').each((el) => {
        //         if (el.text().includes('18')) {
        //             cy.wrap(el).parent('td').click()
        //         }
        //     })
        //     cy.get('.btn-actions > .btn-checkout').click()
        //     cy.shipping(data)
        // })

        cy.visit('https://freshindiaorganics.com/cart')
        cy.wait(3000)
        cy.get('.ui-datepicker-calendar').find('tbody').find('tr').find('td').find('a').each((el) => {
            cy.log(el.text())
        })
    })
})