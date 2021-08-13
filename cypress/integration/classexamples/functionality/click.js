describe("verify the click function",()=>{


    it('validate the radioButton functionality with click',()=>{
        cy.visit('https://www.spicejet.com/')
        //cy.get('#ctl00_mainContent_rbtnl_Trip_1').click()                // on radioButton click
        cy.get('#ctl00_mainContent_rbtnl_Trip > tbody > tr > td:nth-child(2) > label').click()    // on html element click
        cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should('have.class',"select-label")

    })

    it('validate the radioButton functionality with unclick',()=>{
        cy.visit('https://www.spicejet.com/')
        //cy.get('#ctl00_mainContent_rbtnl_Trip_0').click()                  // on radioButton click
        cy.get('#ctl00_mainContent_rbtnl_Trip > tbody > tr > td:nth-child(1) > label').click()       // on html element click
        cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should('not.have.class','select-label')

    })

    
})