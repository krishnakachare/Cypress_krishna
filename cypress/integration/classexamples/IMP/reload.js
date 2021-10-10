describe('validate reload page and title',()=>{


    it('validate the title for html element', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        //cy.title().should('have.text','Ethernet Devices - PLC Tools')
        cy.title().should('eq', 'Ethernet Devices - PLC Tools')
        // cy.log(cy.title())
        // //expect(cy.title().chainerId).equals('"chainer132"')
        // expect(cy.title().chainerId).includes('chainer')
        // regular expression
    })
    
    it('reload the page', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        //cy.title().should('have.text','Ethernet Devices - PLC Tools')
        cy.title().should('eq', 'Ethernet Devices - PLC Tools')
        cy.reload()
    })
    

    
})



