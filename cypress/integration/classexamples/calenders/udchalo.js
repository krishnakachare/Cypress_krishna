//*************************************************************************************************************/
// define proceduger ==== step by step

// set date by calender method and store its in variables like date, month,year and print it in test runner for cross check
// use this variables as a validation like its expected values
// go in browser where calender is present and select future date manualy
// manualy steps copy in the coding (like select particular element and performe actions on it)
// by the need of filtter use if(condition) , each() , then()
// maintain synchronous order of coding use function s for selection each like year,month,date
// after coding run successfully in date select in browser calender is actual date
// Actual = Expected   test competed

//***************************************************************************************************************/

describe('validate the future date', () => {

    it('validate the udchalo calender', () => {

        cy.visit('https://www.udchalo.com/')

        let d2 = new Date();
        d2.setDate(d2.getDate() + 300)  // get the date after 300 days from todays date (set future date)
        let year = d2.getFullYear() // 2022
        let month = d2.toLocaleString('default', { month: 'short' }) // jul 
        let furturedate = d2.getDate()   // 1    // with short it shows jul(short string),and with long it shows july(long string)
        cy.log(year)
        cy.log(month)
        cy.log(furturedate)

        function selectYear() {
            cy.get('.fa.fa-calendar').first().click()
            cy.get('.yearlabel').last().click()
            cy.get('.yeartable.ng-star-inserted').contains(year).click()
            // return true
        }

        function selectMonth() {
            cy.get('.headerlabelbtn.monthlabel').as('el')
            cy.get('@el').then((el) => {
                //cy.log(el.text())
                // cy.wait(2000)
                if (!el.text().includes(month)) {  // atleast one time codition must true.
                    cy.log(el.text())
                    // cy.wait(2000)      // sep = july    !false = true
                    cy.get('.headerbtn.icon.md-caret-left.headerbtnenabled').first().click()
                    selectMonth()
                }
                // return true     // there is problem of sych. and asynch with this
            })
        }

        function selectDate() {
            //cy.get('.caltable.ng-star-inserted').contains(furturedate).click()        // assertion contains not match exact text e.g 3,13,30    contains assertion click in that which is first occurence not a exact date
            cy.get('.caltable.ng-star-inserted').children().last().find('tr').find('td').find('div').each((el) => {

                if (el.text() == furturedate) {
                    el.click()
                }
            })
            //cy.get('@el').should('have.text',furturedate).click()  // we need to find exact html element where text is present
            // return true
        }

        selectYear()
        selectMonth()
        selectDate()
    })
})