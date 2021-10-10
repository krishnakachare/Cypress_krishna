describe('Automate Dependant dropdown', () => {
    it('dependant dropdown', () => {
        cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/')
        cy.dropDown('India', 'Maharashtra', 'Pune')
    })
})