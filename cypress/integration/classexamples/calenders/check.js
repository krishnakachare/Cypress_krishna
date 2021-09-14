describe('validate calender date', () => {

    it('select future date', () => {

        cy.visit('https://jqueryui.com/datepicker/')


        cy.find("#datepicker").click()
        cy.get(".ui-datepicker-month").select("10");
        cy.get(".ui-datepicker-year").select("1990");
        cy.get("table.ui-datepicker-calendar").then(() => {
            cy.contains('11').click();
        });


        // cy.get('body').last().find('p > input').then((el) => {

        //     cy.log(el.text())
        //     el.click()
        //     if (el.text().('calendar')) {

        //         cy.log(el.text())
        //         el.click()
        //     }

        // })
        //cy.get('html[lang="en"]')

        //cy.get('#datepicker').last()


        //  cy.window('#datepicker').then((el)=>{

        //     //cy.log(el.text())
        //     el.click()
        //  })
        //cy.get(`#${CSS.escape('datepicker')}`).last()

        // cy.get(`#${CSS.escape('datepicker')}`).click()


        //cy.get(`#${Cypress.$.escapeSelector('datepicker')}`).last()

        // cy.get('.ui-datepicker-year').then((el) => {

        //     cy.log(el.text())
        // })




    })
})