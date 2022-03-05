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


    // it("Validate Navigation Bar", () => {
    //     cy.visit("/")
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
    // })





    describe('', () => {
        it("", () => {

            cy.visit('https://freshindiaorganics.com/collections/regular-fruits')

            let product = 'Organic Apple'
            let quantity = 4
            let t = 0
            let tt = 1000


            let date = new Date()
            console.log(date)

            let d = date.setDate(date.getDate() - 1)
            console.log(d)

            // cy.intercept({
            //     method: 'GET',
            //     url: 'https://cart-go.apphq.co/api/freshindiaorganics.myshopify.com'
            // }).as('GET')
            cy.get('.sidebar-label').click()
            // cy.wait('@GET')
            cy.wait(1000)
            cy.get('#Filter-Price-2').first().clear({force: true}).type(t)
            cy.get("input[class='field__input filter__price filter__max']").clear().type(tt)

            // cy.intercept({
            //     method: 'GET',
            //     url: 'https://freshindiaorganics.com/collections/regular-fruits?section_id=template--14169763643477__main&filter.v.price.gte=00&filter.v.price.lte=0&sort_by=best-selling'
            //     // url: ' https://freshindiaorganics.com/collections/regular-fruits?section_id=template--14169763643477__main&filter.v.price.gte=010&filter.v.price.lte=1350&sort_by=best-selling'
            // }).as('GET2')
            cy.get('.apply__button').click()
            // cy.wait('@GET2')
            cy.wait(1000)
            cy.get('.close-sidebar.close').click()
            cy.wait(2000)
            if (tt === 0) {
                cy.get('.col-12.text-center').contains('Sorry, there are no products in this collection')
            } else {
                cy.get('.product-collection.products-grid.row').find('div').find('div').find('div').children().eq(1).find('a').each((el) => {
                    if (el.text().includes(product)) {
                        cy.log(el.text())
                        cy.wrap(el).click()
                        cy.wait(2000)
                        cy.get('.breadcrumb').find('span').last().should('have.text', product)
                        cy.get("input[type='number']").clear().type(quantity)
                        
                        cy.get('#product-add-to-cart').last().click()
                        cy.contains('Go to cart').click()

                        }    cy.wait(20000)
                    //     cy.get('.ui-datepicker-calendar').find('tbody').find('tr').find('td').find('a').each((el)=>{
                    //         cy.log(el.text())
                    //     })
                   
                        
                    //     // cy.contains('Buy it now').click()
                    //     cy.wait(2000)
                        
                    //     cy.fixture('emerson').then(function (data) {
                    //         cy.get('#checkout_email_or_phone').type(data.email)
                    //         cy.get('#checkout_shipping_address_first_name').type(data.firstName)
                    //         cy.get('#checkout_shipping_address_last_name').type(data.lastName)
                    //         cy.get('#checkout_shipping_address_address1').type(data.address)
                    //         cy.get('#checkout_shipping_address_city').type(data.city)
                    //         cy.get('#checkout_shipping_address_province').select(data.state)
                    //         cy.get('#checkout_shipping_address_zip').type(data.pincode)
                    //         cy.get('#checkout_shipping_address_phone').type(data.phoneNumber)
                    //         cy.get('#continue_button').click()
                    //     })
                    //     cy.get('.notice__text').invoke('text')
                    // } else {
                    //     cy.log(`Given ${t} to ${tt} cost range ${product} is not available`)
                    // }

                })
            }

        })
    })













})