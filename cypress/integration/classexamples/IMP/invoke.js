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








// describe('handling browser tab switching in cypress', () => {
//     let hrevalu = "https://www.google.com"

//     it('by removing target attribute', () => {
//         cy.visit('/')      // we fetch url from cypress.json file
//         cy.get('#contact-us').invoke('removeAttr','target').click()        // remove attribute
//         cy.url().should('contain',"Contact-Us") 

//     })
//     it('Scroll Into view', () => {
//         cy.visit('/')
//         cy.get('#contact-us').then(function($input){
//             $input[0].setAttribute('target', '_self')        // update attribute
//           })
//           .should('have.attr', 'target', '_self')
//         cy.get('#contact-us').click()
//     })

//     it('second way doing handling tab switching', () => {
//         cy.visit('/')
//         cy.get('#contact-us').invoke('attr', 'href').then(function(el){
//             cy.visit(`/${el}`)                                                 // we add url in our base url 
//         })                                        // href has  value url

//     })

//     it('setting the value of attribute of html element', () => {
//         cy.visit('/')
//         cy.get('#contact-us').then(function($input){
//             $input[0].setAttribute('href', 'https://www.google.com')
//           })
//         //cy.get('#contact-us').invoke('removeAttr','target').click()
//         cy.get('#contact-us').invoke('attr', 'href').then(function(el){
//                 expect(el).to.equals(hrevalu)
//         })

//     })

//     it('Scroll Into view', () => {
//         cy.visit(hrevalu)

//     })





// })