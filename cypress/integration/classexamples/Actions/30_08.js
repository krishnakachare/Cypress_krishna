const { expect } = require("chai")

describe('Actions class ', () => {

    it('validate Scroll Into view action', () => {
        // cy.visit('https://docs.cypress.io/guides/overview/why-cypress#Our-mission')
        // cy.get('footer').scrollIntoView()
        cy.visit('https://www.google.com/search?q=flifkart&rlz=1C1CHBF_enIN963IN963&oq=&aqs=chrome.0.69i59i450l8.351549j0j7&sourceid=chrome&ie=UTF-8')
            .contains('Next').last().scrollIntoView()

    })



    it('vlidate drag and drop action', () => {

        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
            .get('#draggable').trigger('mousedown', { which: 1 })
            .get('#droppable').as('el')
            .get('@el').trigger('mousemove')
            .get('@el').trigger('mouseup', { force: true })
            .get('#droppable > p').then((el) => {                                      // we got patrent first children
                expect(el).to.have.css('background-color', 'rgb(244, 89, 80)');
                //expect(el).to.have.css('height','100%')
            })
            .get('#droppable > p').should('have.text','Dropped!')       

    })
})






































// describe('Actions class ', () => {

//     it('Scroll Into view', () => {
//         cy.visit('https://docs.cypress.io/guides/overview/why-cypress#Our-mission')
//         cy.get('footer').scrollIntoView()
//     })

//     it.only('Drag and Drop', () => {
//     cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
//     // cy.get('#draggable').trigger('mousedown',{which: 1})
//     // cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
//     cy.get('#droppable > p').then((el)=>{
//         expect(el).to.have.css('background-color', 'rgb(244, 89, 80)');
//     })
// })



// })