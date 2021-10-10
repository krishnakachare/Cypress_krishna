

describe('validate go forward and go backward',()=>{

    it('reload the page and validate', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.contains(/^Analog Simulators$/).click({ force: true })
        // cy.url().should('include', "analog")
        // cy.go('back')
        // cy.go('forward')
    
    })



})


