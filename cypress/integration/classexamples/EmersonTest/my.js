describe('validate end to end testing', () => {
    // let input = 'Fruits'
    // it("without click", () => {
    //     cy.visit('https://freshindiaorganics.com')
    //     cy.get('.icon-nav').last().click()
    //     cy.get('.site-nav').find('li').find('a').each((el) => {
    //         if (el.text().includes(input)) {            
    //             cy.wrap(el).invoke('attr', 'href').then((el) => {
    //                 cy.wait(1000)
    //                 cy.visit(`https://freshindiaorganics.com${el}`)
    //             })
    //         }
    //     })
    // })


    it("Validate Navigation Bar", () => {
        cy.visit("/")
        // cy.nBar('Home')
        // cy.nBar('Fruits', 'All Fruits')
        // cy.nBar('Fruits', 'Regular Fruits')
        // cy.nBar('Fruits', 'Seasonal Fruits')
        // cy.nBar('Vegetables', 'All Vegetables')
        // cy.nBar('Vegetables', 'Regular Vegetables')
        // cy.nBar('Vegetables', 'Exotic Vegetables')
        // cy.nBar('Vegetables', 'Leafy Greens')
        // cy.nBar('Groceries', 'All Groceries')
        // cy.nBar('Groceries', 'Pulses')
        // cy.nBar('Groceries', 'Rice')
        // cy.nBar('Groceries', 'Spices')
        // cy.nBar('Groceries', 'Cheese')
        // cy.nBar('Groceries', 'Dry Fruits')
        // cy.nBar('Groceries', 'Others')
        // cy.nBar('Gifting')
        // cy.nBar('Blog')
        // cy.nBar('Bulk/Export Queries')
    })
    
})