describe('validae future date',()=>{

    it('validate the moneycontrol calender date select', () => {

        cy.visit('https://www.moneycontrol.com/markets/earnings/#')

        let d2 = new Date()
        d2.setDate(d2.getDate() + 350)  // to get the date from today ( Expected date ) 
        let year = d2.getFullYear()
        let month =d2.toLocaleString('default', { month: 'long' })
        let furturedate = d2.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(furturedate)

        function selectYear() {
            cy.get('.eventCalendar-currentTitle').first().then((el) => {
                //cy.log(el.text()) 
                if (!el.text().includes(year)) {             //  ! true = false     ! false = true
                    cy.get('.eventCalendar-arrow.eventCalendar-next').first().click()   

                    selectMonthandYear()

                }
            }) 
            
            return true                
        }
        function selectMonth(){
            cy.get('.eventCalendar-currentTitle').first().then((el) => {
                //cy.log(el.text())  
                if (!el.text().includes(month)) {    
                    cy.get('.eventCalendar-arrow.eventCalendar-next').first().click()
                    selectMonthandYear()
                }
            })
            return true

        } 

        function selectDate() {
            cy.get('.eventCalendar-monthWrap.eventCalendar-currentMonth').first().contains(furturedate).click();
            return true

        }
        selectYear()
        selectMonth()
        selectDate()


    })
})
