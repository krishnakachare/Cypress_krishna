describe('validate the window based elements', () => {
    

    it.only('invoke command', () => {

        cy.visit('https://plctools.com/')
        cy.get('h2[class="page-heading"]').eq(0).should('have.text', 'Featured Products')
        cy.get('h2[class="page-heading"]').eq(0).invoke('text').then(function (el) {
            expect(el).to.equals('Featured Products')
        })
        cy.get('h2[class="page-heading"]').eq(0).invoke('removeAttr', 'class').should('not.have.class', 'page-heading')
    })



    // cy.get('#new').should('have.text','apple')

    // cy.get('#new').invoke('text').then(function(el){
    //     expect(el).to.equals('apple')

    // })

    // <p id = "new">apple</p>

    // object ---> properties and method

    //invoke  --- method    pass its jquery methods
    // invoke stores which we required from html element like text
    // we can update the html text (like remove or add attributes) from using invoke

    //its ---- property     pass its jquery property






})