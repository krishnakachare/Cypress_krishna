describe('validate redbus calender', () => {
    it('validate the future date', () => {
        cy.visit('https://www.redbus.com/')
        let d2 = new Date();
        d2.setDate(d2.getDate() + 400)

        let year = d2.getFullYear()
        let month = d2.toLocaleString('default', { month: 'short' })
        let furturedate = d2.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(furturedate)

        cy.get('#onward_cal').click({ force: true })

        function YearandMonth() {
            cy.get('.monthTitle').last().then((el) => {
                if (!el.text().includes(year)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    YearandMonth()
                }
            }).then((el) => {
                if (!el.text().includes(month)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    YearandMonth()
                }
            })
        }
        function fDate() {
            cy.get('.rb-monthTable.first.last').last().children().first().find('tr').find('td').each((el) => {
                // cy.log(el.text())
                if (el.text().includes(furturedate)) {
                    cy.log(el.text())
                    el.click()
                }
            })
        }

        YearandMonth()
        fDate()

    })

    it('validate the future date', () => {
        cy.visit('https://www.redbus.com/')
        let d2 = new Date();
        d2.setDate(d2.getDate() + 400)

        let year = d2.getFullYear()
        let month = d2.toLocaleString('default', { month: 'short' })
        let furturedate = d2.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(furturedate)

        cy.get('.fl.search-box.date-box.gtm-returnCalendar').click()
        function YearandMonth2() {
            cy.get('.monthTitle').last().then((el) => {
                //cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    YearandMonth2()
                }
            }).then((el) => {
                if (!el.text().includes(month)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    YearandMonth2()
                }
            })
        }
        function fDate2() {
            cy.get('.rb-monthTable.first.last').last().children().first().find('tr').find('td').each((el) => {
                // cy.log(el.text())
                if (el.text().includes(furturedate)) {
                    cy.log(el.text())
                    el.click()
                }
            })
        }
        YearandMonth2()
        fDate2()
    })
})






// describe('validate redbus calender date', () => {

//     it('validate the future date', () => {

//         cy.visit('https://www.redbus.com/')

//         let kk = new Date()

//         kk.setDate(kk.getDate() + 370)

//         let year = kk.getFullYear()
//         let month = kk.toLocaleString('default', { month: 'short' })
//         let furturedate = kk.getDate()
//         cy.log('***** ONWARD DATE ******')

//         cy.log(furturedate)
//         cy.log(month)
//         cy.log(year)

//         cy.get('#onward_cal').click({ force: true })

//         function YearandMonth() {
//             cy.get('.monthTitle').last().then((el) => {
//                 if (!el.text().includes(year)) {
//                     cy.log(el.text())
//                     cy.get('.next').last().click()
//                     YearandMonth()
//                 }
//             }).then((el) => {
//                 if (!el.text().includes(month)) {
//                     cy.log(el.text())
//                     cy.get('.next').last().click()
//                     YearandMonth()
//                 }
//             })
//         }

//         function fDate() {
//             cy.get('.rb-monthTable.first.last').last().children().first().find('tr').find('td').each((el) => {
//                 // cy.log(el.text())
//                 if (el.text().includes(furturedate)) {
//                     cy.log(el.text())
//                     el.click()
//                 }
//             })
//         }
//         YearandMonth()
//         fDate()



//         cy.log('*** RETURN DATE ****')


//         let kk2 = new Date()

//         kk2.setDate(kk2.getDate() + 375)

//         let year2 = kk2.getFullYear()
//         let month2 = kk2.toLocaleString('default', { month: 'short' })
//         let furturedate2 = kk2.getDate()

//         cy.log(furturedate2)
//         cy.log(month2)
//         cy.log(year2)

//         cy.get('.fl.search-box.date-box.gtm-returnCalendar').click()

//         function YearandMonth2() {
//             cy.get('.monthTitle').last().then((el) => {
//                 //cy.log(el.text())
//                 if (!el.text().includes(year2)) {
//                     cy.log(el.text())
//                     cy.get('.next').last().click()
//                     YearandMonth2()
//                 }
//             }).then((el) => {
//                 if (!el.text().includes(month2)) {
//                     cy.log(el.text())
//                     cy.get('.next').last().click()
//                     YearandMonth2()
//                 }
//             })
//         }

//         function fDate2() {
//             cy.get('.rb-monthTable.first.last').last().children().first().find('tr').find('td').each((el) => {
//                 // cy.log(el.text())
//                 if (el.text().includes(furturedate2)) {
//                     cy.log(el.text())
//                     el.click()
//                 }
//             })
//         }

//         YearandMonth2()
//         fDate2()
//     })
// })