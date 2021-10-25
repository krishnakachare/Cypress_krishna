// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//========================================================================================================================
// webdrive table sumation

// Cypress.Commands.add('tablesum', (id, total) => {
//     let sum = 0
//     let regex = /[0-9]/

//     cy.get(`#t0${id}`).find('tbody').find('tr').find('td').each((el, ind, array) => {
//         if (regex.test(Number(el.text()))) {
//             sum = sum + Number(el.text())
//         }
//     }).then(function () {
//         expect(sum).to.eqls(total)
//     })
// })


//====================================================================================================================
// cricinfo table sumation


// Cypress.Commands.add('cricinfo', (r, e, t) => {
//     let runs = 0
//     let extraruns = 0
//     let totalruns = 0
//     let rarr = [0, 0, 1, 2, 3]
//     let earr = [0, 0, 2, 4, 6]
//     let tarr = [0, 1, 3, 5, 7]

//     cy.get('.table.batsman').eq(`${rarr[r]}`).find('td[class="font-weight-bold"]').each((el) => {
//         runs = runs + Number(el.text())
//     })
//     cy.get('.text-right.font-weight-bold').eq(`${earr[e]}`).then((el) => {
//         extraruns = Number(el.text())
//     })
//     cy.get('.text-right.font-weight-bold').eq(`${tarr[t]}`).then((el) => {
//         totalruns = Number(el.text())
//     }).then((el) => {
//         expect(runs + extraruns).to.eqls(totalruns)
//     })
// })


//========================================================================================================================

// Dependant dropdown


// Cypress.Commands.add('dropDown', (C, s, c) => {
//     cy.get('select').first().select(C).then(()=>{
//         cy.get('select').eq(1).select(s).then(()=>{
//             cy.get('select').last().select(c)
//         })
//     })   
// })


//=================================================================================================================

// Emerson test case

Cypress.Commands.add('neviBar', (input) => {
    // cy.get('.icon-nav').last().click()
    // cy.wait(3000)
    // cy.get('.site-nav').find('li').each((el) => {
    //     cy.wait(3000)
    //     if (el.text().includes(input)) {
    //         cy.log(el.text())
    //         el.click({ force: true })
    //     }
    // }).then(() => {

    // })
})


Cypress.Commands.add('shipping', (data) => {
    cy.get('#checkout_email_or_phone').type(data.email)
    cy.get('#checkout_shipping_address_first_name').type(data.firstName)
    cy.get('#checkout_shipping_address_last_name').type(data.lastName)
    cy.get('#checkout_shipping_address_address1').type(data.address)
    cy.get('#checkout_shipping_address_city').type(data.city)
    cy.get('#checkout_shipping_address_province').select(data.state)
    cy.get('#checkout_shipping_address_zip').type(data.pincode)
    cy.get('#checkout_shipping_address_phone').type(data.phoneNumber)
    cy.get('#continue_button > .btn__content').click({ force: true })
})


//=================================================================================================================
// Emerson test (sir) assignment = Utility for the Nevigation Bar

Cypress.Commands.add('nBar', (input, subInput) => {
    let cond = false
    let eq = 0
    if (input !== 'Fruits') {
        eq = input == 'Groceries' ? 2 : 1
    }
    cy.intercept({
        method: 'GET',
        url: '/search?view=mega'
    }).as('GET')
    cy.get('.icon-nav').last().click()
    cy.wait('@GET')
    cy.get('.site-nav').last().find('li').as('a')
    if (input === 'Fruits' || 'Vegetables' || 'Groceries') {
        cond = true
        cy.get('@a').find('div').find('div').find('span').each((el) => {
            if (el.text().includes(input)) {
                cy.wrap(el).parent('div').parent('div').click({ force: true })
                cy.get('.site-nav-dropdown').eq(`${eq}`).find('li').find('a').find('span').each((el) => {
                    if (el.text().includes(subInput)) {
                        cy.wrap(el).click()
                    }
                })
            }
        })
    }
    cy.get('@a').find('a').find('span').each((el) => {
        if (el.text().includes(input)) {
            el.click()
        }
    })
    let value = cond = false ? subInput : input
    value = value.slice(-4)
    let validate = input === "Home" ? '/' : value
    let validation = input === "Blog" ? 'news' : validate
    cy.url().should('contain', validation)
    // cy.get('.bd-title').should('contain', validate)
})
//================================================================================================================
