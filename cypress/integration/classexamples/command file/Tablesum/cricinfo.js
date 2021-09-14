describe('Automate table sumation in cricinfo', () => {

    it('automate table sum',()=>{

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-4th-test-1239546/full-scorecard')
        
        cy.cricinfo(1,1,1)
        cy.cricinfo(2,2,2)
        cy.cricinfo(3,3,3)
        cy.cricinfo(4,4,4)

    })

})