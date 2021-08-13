/////////////////////////////////     HEADER SECTION VALIDATION     ////////////////////////////////////////////


// Test senario = Present in single senario multipal test cases.
// Test sute = multipal test senario in that multipal test cases.

// null = in present values doesnot present but in future ( further operation ) it may be present.
// Undefined = Values doesnot exist  ( Undefined is not error ).

// DOM ( Document Object Model ) = Means Document (Browser page/ html page) is an object.
// Document in header section PageTitle,url,Browser page properties are present.

// it.only() = That particular test case is run 





///////////////// METHODS FOR HEAD SECTION VALIDATION /////////////////////////////////////////////////////////


describe('validation of head section in document', () => {

    // 1. url() = its validate the current page url

    it('current page url validation', () => {

        cy.visit('https://app.recast.studio/auth/login/')
        cy.url().should('contain', 'login')
        // or cy.url().should('contain','log')           // (assertion) contain also accept partial html text ( substring )

    })

    // cy.contains() = this method find only html text

    it('page url validation after changing current page by any action', () => {

        cy.visit('https://app.recast.studio/auth/login/')
        cy.contains('Sign Up').click()
        cy.url().should('contain', 'register')

    })


    // 2. title() = its validate the current page title

    it('current page title validation', () => {

        cy.visit('https://app.recast.studio/auth/login/')
        cy.title().should('contain', 'Login - Recast Studio')

    })


    // 3. document() = validates any document property

    it.only('validating any property of head section', () => {

        cy.visit('https://app.recast.studio/auth/login/')
        cy.document().should('have.property', 'title')
        cy.document().should('have.property', 'URL')
        cy.document().should('have.property', 'head')
        cy.document().should('have.property', 'body')
        cy.document().should('have.property', 'charset')


    })




})




































































































// describe('document level validation',()=>{

//     it.only('validating the url',()=>{
//         cy.visit('https://app.recast.studio/auth/login/')
//         cy.url().should('contain','login')
//     })

//     it('validating the url2',()=>{
//         cy.visit('https://app.recast.studio/auth/login/?next=/')
//         cy.contains('Sign Up').click()
//         cy.url().should('contain','register')

//     })

//     it('validating the url2',()=>{
//         cy.visit('https://app.recast.studio/auth/login/?next=/')
//         cy.contains('Sign Up').click()
//         cy.url().should('contain','register')
//         cy.title().should('contain','Registration - Recast Studio')

//     })

//     it('validating the title for a page',()=>{
//         cy.visit('https://app.recast.studio/auth/login/?next=/')
//         cy.contains('Sign Up').click()
//         cy.url().should('contain','register')
//         cy.title().should('contain','Registration - Recast Studio')

//     })

//     it.only('validating any property of head section',()=>{
//         cy.visit('https://app.recast.studio/auth/login/?next=/')
//         cy.document().should('have.property','charset').and('eq','UTF-8')
//         cy.document().should('have.property','URL')
//         cy.document().should('have.property','head')
//         cy.document().should('have.property','body')
//         cy.document().should('have.property','baseURI')
//     })


// })