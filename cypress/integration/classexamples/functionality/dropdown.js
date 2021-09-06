//// STATIC DROPDOWN (select) /////////////////////////////


// describe('drop down testcases', () => {

//     it.only('valide the functionality of redbus drop down', () => {
//         cy.visit('https://www.spicejet.com/')
//         cy.get('#ctl00_mainContent_DropDownListCurrency').select('EUR')
//     })


//     it('valide the functionality of redbus drop down', () => {
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#dropdown-class-example').select('Option2')
//     })
// })





////  DYNAMIC DROPDOWN  (Auto-suggestion)  ////////////////////


describe('validate the dropdown functionality', () => {


    // it('valide the functionality of redbus drop down', () => {
    //     cy.visit('https://www.oyorooms.com/')
    //     cy.get('#autoComplete__home').type('pune')
    //     cy.get('.geoSuggestionsList__container').find('div').each(function (el) {
    //         if (el.text().includes('Shivaji')) {
    //             el.click()
    //         }
    //     })

    // })
    it('valide the functionality of redbus drop down', () => {
        cy.visit('https://www.oyorooms.com/')
        cy.get('#autoComplete__home').type('pune')
        cy.get('.geoSuggestionsList__container').find('div').then(function (ela) {
            Array.from(ela).forEach(function (el) {
                if (el.textContent.includes('Shivaji')) {
                    el.click()

                }
            })
        })

    })



    it('validate the mouseover dropdown', () => {

        cy.visit('https://www.flipkart.com/')
        cy.get('.exehdJ').trigger('mouseover')
        cy.get('.pO9syL').find('li').find('a').find('div').each((el) => {
            //cy.log(el.text())
            if (el.text() === 'Sell on Flipkart') {
                cy.log(el.text())
                el.click()
            }
        })
        cy.url().should('eq', 'https://seller.flipkart.com/sell-online/?utm_source=flipkart&utm_medium=website&utm_campaign=sellbutton')
        cy.get('.link-color').first().should('have.attr', 'href')

    })


    it('validate dropdown without click', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._1_3w1N').trigger('mouseover')
        cy.get('.pO9syL._1s9xSv').find('li').find('a').find('div').each((el) => {
            //cy.log(el.text())

            if (el.text() === 'My Profile') {
                cy.log(el.text())
                el.click()
            }

            cy.url().should('contain', 'account')
        })
    })



    it('validite eltronic component in flipkart', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._1psGvi.SLyWEo').eq(1).trigger('mouseover', { force: true })
        cy.get('._3XS_gI._7qr1OC').children().eq(3).click({ force: true })
        cy.wait(7000)
        cy.get('._3V8rao').first().should('have.text', 'Filters')
    })


    it('validate the mouseover dropdown2', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._1psGvi.SLyWEo').eq(1).trigger('mouseover', { force: true })
        cy.get('._3XS_gI._7qr1OC').children().each((el) => {
            //cy.log(el.text())
            if (el.text().includes('Gaming')) {
                cy.log(el.text())
                cy.wrap(el).trigger('mouseover', { force: true })
            }
        })
        cy.wait(1000)
        cy.get('._3XS_gI').last().find('a').each((el) => {
            //cy.log(el.text())
            if(el.text().includes('Games')){
                cy.log(el.text())
                cy.wrap(el).click({ force: true })
            }  
        })
        cy.url().should('contain', '7OVL0P8FJ3EW')
        
    })

    
    // it.only('validate the mouseover dropdown2', () => {
    //     cy.visit('https://www.flipkart.com/')
    //     cy.get('._1psGvi.SLyWEo').eq(1).trigger('mouseover', { force: true })
    //     cy.get('._3XS_gI._7qr1OC').children().each((el) => {
    //         //cy.log(el.text())
    //         if (el.text().includes('Health & Personal Care')) {
    //             cy.log(el.text())
    //             cy.wrap(el).trigger('mouseover', { force: true })
    //         }
    //     })
    //     cy.wait(1000)
    //     cy.get('._3XS_gI').last().find('a').each((el) => {
    //         //cy.log(el.text())
    //         if(el.text().includes('Trimmers')){
    //             cy.log(el.text())
    //             cy.wrap(el).click({ force: true })
    //         }  
    //     })
        
        
    // })

    // it('validate dropdown', () => {

    //     cy.visit('https://www.flipkart.com/')
    //     cy.get('._1_3w1N')

    //     // cy.get('._1_3w1N').click()
    //     //  cy.get('._2doB4z').click()

    //     cy.get('.pO9syL _1s9xSv').children().each((el) => {
    //         cy.log(el.text())
    //     })
    // })



    // it.only("keasri", () => {
    //     cy.visit("https://ksrtc.in")
    //     cy.get("#fromPlaceName").type("BAL")
    //     cy.get(".ui-autocomplete >li>a").each((el) => {
    //         if (el.text() == "BALLARI") {
    //             cy.wrap(el).click()
    //         }
    //     })

    // })

    // it('valide the functionality of redbus drop down', () => {
    //     cy.visit('https://ksrtc.in/oprs-web/')
    //     cy.get('#fromPlaceName').type('BAL')
    //     cy.get('#fromPlaceName').type('{downarrow}{enter}')


    //     cy.get('.ui-autocomplete').first().find('li').find('a').each((el) => {
    //         // cy.get('#fromPlaceName').clear()
    //         if (el.text() === "BAL") {
    //             el.click()
    //             //cy.get('#fromPlaceName').clear()
    //             //cy.get('#fromPlaceName').type('{downarrow}{enter}')
    //         }


    //     })
    // })

    // it('validate dynamic dropdown', () => {
    //     cy.visit('https://ksrtc.in/oprs-web/')
    //     cy.get('#fromPlaceName').type('har')
    //     cy.get('#ui-id-1').children().eq(1).trigger('mouseover').click()

    // })

    // describe("validate the dropdown", () => {
    //     it('valide the functionality of redbus drop down', () => {
    //         cy.visit('https://ksrtc.in/oprs-web/')
    //         cy.get('#fromPlaceName').type('BAL')
    //         cy.get('#fromPlaceName').type('{downarrow}{enter}')


    //         cy.get('#ui-id-1').find('li').find('a').each((el) => {
    //             // cy.log(el.text())
    //             if (el.text() === "BALLARI") {
    //                 // cy.log(el.text())

    //                 cy.wrap(el).click({ force: true })

    //             }

    //         })

    //     })




    //     it('valide the functionality of redbus drop down', () => {
    //         cy.visit('www.google.com')
    //         cy.get('input[name="q"]').type('python ')
    //         cy.get('.erkvQe').find('li').each(function (el) {
    //             cy.log(el.text())
    //             if (el.text().includes('tutorial')) {
    //                 el.click()
    //             }
    //         })

    //         // cy.url().should('include','tutorial')
    //     })




    //     it('valide the functionality of google drop down', () => {
    //         cy.visit('www.google.com')
    //         cy.get('.gLFyf').last().type('python')
    //         cy.get('.erkvQe').last().find('li').find('div').find('div').find('div').find('span').each((el) => {
    //             cy.log(el.text())

    //             if (el.text() === 'python tutorial') {
    //                 cy.log(el.text())
    //                 el.click()
    //             }
    //         })

    //     })

    // })



})

