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