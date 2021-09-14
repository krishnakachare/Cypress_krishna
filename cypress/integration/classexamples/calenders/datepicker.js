// Remember =
// this code for univers (not for the particular date)
// becoz of function repetation of code is avoid (like multiple click action for the condition match/requirement)
// check autual and expected date format for comparison

describe('validate the past/future date', () => {

      it.only('select past date', () => {

            let kk = new Date()

            kk.setDate(kk.getDate() - 9000)     // date  from todays date (set future/past date)

            let date = kk.getDate()
            let month = kk.toLocaleString('default', { month: 'short' }) // short/long by requirements
            let year = kk.getFullYear()

            cy.log(date)
            cy.log(month)
            cy.log(year)

            cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')

            cy.get('.input-group-addon').click()
            cy.get('.datepicker-switch').first().click()
            cy.get('.datepicker-switch').eq(1).click()

            function selectyear() {
                  cy.get('.table-condensed').last().children().eq(1).find('tr').find('td').find('span').then((el) => {
                        //cy.log(el.text())
                        if (!el.text().includes(year)) {
                              cy.get('.prev').last().click()
                              selectyear()
                        } else {
                              cy.contains(year).click()
                              //cy.log(el.text())
                        }
                  })
            }

            function selectmonth() {
                  cy.get('td[colspan = "7"]').first().find('span').each((el) => {
                        //cy.log(el.text())
                        if (el.text().includes(month)) {
                              cy.log(el.text())
                              el.click()
                        }
                  })
            }

            function selectdate() {
                  cy.get('.table-condensed').first().children().eq(1).find('tr').find('td').each((el) => {
                        //cy.log(el.text())
                        if (el.text().includes(date)) {
                              cy.log(el.text())
                              el.click()
                        }
                  })
            }

            selectyear()
            selectmonth()
            selectdate()

      })

      it('select future date',()=>{

            let kkk = new Date()

            kkk
      })
})



















































































//--------------------------------------------------------------------------------------------------------

// describe('automate calendra', () => {

//     it('validate the datepicker', () => {

//         // let d = new Date();
//         // cy.log(d.getDate())
//         // cy.log(d.getFullYear())
//         // cy.log(d.toLocaleString('default', { month: 'long' }))
//         // cy.log(d.getDate())

//         // let d2 = new Date();
//         // d2.setDate(d2.getDate()+400)
//         // cy.log(d2.getFullYear())
//         // cy.log(d2.getDate())
//         // cy.log(d2.toLocaleString('default',{ month:'long'}))
//         cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
//         let d2 = new Date();
//         d2.setDate(d2.getDate() + 200)
//         // Expected values 
//         let year = d2.getFullYear()
//         let month = d2.toLocaleString('default', { month: 'long' })
//         let furturedate = d2.getDate()
//         cy.log(year)
//         cy.log(month)

//         function selectMonthandYear() {
//             cy.get('#datepicker').click()
//             cy.get('.datepicker-switch').first().then((el) => {
//                 //cy.log(el.text())  // jan 2022.includes(2022) 
//                 if (!el.text().includes(year)) {
//                     cy.get('.next').first().click()
//                     selectMonthandYear()
//                 }
//             }).then(() => {
//                 cy.get('.datepicker-switch').first().then((el) => {
//                     //cy.log(el.text())  // jan 2022.includes(2022) 
//                     if (!el.text().includes(month)) {
//                         cy.get('.next').first().click()
//                         selectMonthandYear()
//                     }
//                 })
//             })
//         }

//         function selectDate(){
//             cy.get('.day').contains(furturedate).click();
//             return true

//         }
//         selectMonthandYear()
//         selectDate()


//     })

// })


// make my trip 
// spice jet 
// redbus

//--------------------------------------------------------------------------------------------------------------

