describe("", () => {
    it("", () => {
        cy.visit('https://www.redbus.com/')
        // cy.get('.sc-jTzLTM').click({ force: true })
        cy.get('#src').click({ force: true })
        cy.get('#src').type('pun')
        cy.get('.autoFill.homeSearch li').each((el, index) => {
            // cy.log(el.text())
            if (el.text().includes('Swargate')) {
                cy.wrap(el).click({ force: true })
            }
        })
        cy.get('#dest').type('Kal')//.type('{enter}')
        //**** */
        cy.get('.autoFill.homeSearch li').each((el, ind) => {
            if (ind == 0) {
                if (el.text().includes('Kalyan')) {
                    cy.wrap(el).click({ force: true })
                }
            }

        })
    })
})