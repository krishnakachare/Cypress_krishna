describe('validate spicejet', () => {

    it('spicejet date', () => {

        cy.visit('https://book.spicejet.com/')

        let kk = new Date()


        kk.setDate(kk.getDate() + 50)


        let year = kk.getFullYear()
        let month = kk.toLocaleString('default', { month: 'long' })
        let furturedate = kk.getDate()

        cy.log('**** DEPART DATE ****')
        cy.log(furturedate)
        cy.log(month)
        cy.log(year)


        cy.get('#custom_date_picker_id_1').first().click()

        function fYear() {
            cy.get('.ui-datepicker-year').last().then((el) => {
                //cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.log(el.text())
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    fYear()
                }
            })
        }

        function fMonth() {
            cy.get('.ui-datepicker-month').last().then((el) => {
                //cy.log(el.text())
                if (!el.text().includes(month)) {
                    cy.log(el.text())
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    fMonth()
                }
            })
        }

        function fDate() {
            cy.get('.ui-datepicker-calendar').last().find('tbody').find('tr').find('td').find('a').each((el) => {
                //    cy.log(el.text())
                //     if((el.text().match(/[furturedate]/m))){
                //         cy.log(el.text())
                //         el.click()
                //      }

                if ((el.text().includes(furturedate))) {
                    cy.log(el.text())
                    el.click()
                }
            })
        }

        fYear()
        fMonth()
        fDate()

        // cy.wait(5000)


        let kk1 = new Date()

        kk1.setDate(kk1.getDate() + 50)

        let year1 = kk1.getFullYear()
        let month1 = kk1.toLocaleString('default', { month: 'long' })
        let furturedate1 = kk1.getDate()

        cy.log('**** RETURN DATE ****')
        cy.log(furturedate1)
        cy.log(month1)
        cy.log(year1)


        cy.get('#custom_date_picker_id_1').last().click()

        function returnYear() {
            cy.get('.ui-datepicker-year').last().then((el) => {       // ui-datepicker-year       // .ui-datepicker-title
                cy.log(el.text())
                if (!el.text().includes(year1)) {
                    cy.log(el.text())
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    returnYear()
                }
             })//.then((el) => {

            //     cy.log(el.text())
            //     if (!el.text().includes(month1)) {
            //         cy.log(el.text())
            //         cy.get('.ui-datepicker-next.ui-corner-all').click()
            //         fYear1()
            //     }


            // })
        }

        function returnMonth() {
            cy.get('.ui-datepicker-month').last().then((el) => {
                cy.log(el.text())
                if (!el.text().includes(month1)) {
                    cy.log(el.text())
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    returnMonth()
                }
            })
        }

        function returnDate() {
            cy.get('.ui-datepicker-calendar').last().find('tbody').find('tr').find('td').find('a').each((el) => {
                //    cy.log(el.text())
                //     if((el.text().match(/[furturedate]/m))){
                //         cy.log(el.text())
                //         el.click()
                //      }

                if ((el.text().includes(furturedate1))) {
                    cy.log(el.text())
                    el.click()
                }
            })
        }

        returnYear()
        returnMonth()
        returnDate()         // RUN AT TIME ONE

    })
})