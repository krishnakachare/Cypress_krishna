describe('verify checkbox functionality',()=>{

    it('verify checkbox with check ',()=>{

        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_chk_friendsandfamily').check()          // on checkbox click
        //cy.get('#familyandfriend > label').check()              // on html element click
        cy.get('').should()
    })

    
    it('verify checkbox with uncheck ',()=>{

        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_chk_friendsandfamily').check()            // on checkbox click
        cy.get('#familyandfriend > label').check()          // on html element click
        cy.get('').should()
    })
})


































describe('Handling checkbox', () => {

    it('valiate checkbox', () => {
        cy.visit('https://www.testingwithtechbrothers99.com')
        cy.get('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li:nth-child(6) > a').click()
        cy.get('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li.active > a').click()
        cy.get('input[type="checkbox"]').check(['checkbox1', 'checkbox2', 'checkbox3'])

    })

})