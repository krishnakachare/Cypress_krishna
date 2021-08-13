//[8:48 AM, 8/6/2021] +91 93225 80270: // hooks in cypress

// before()
// after()
// bearEach
// afterEach

describe('Verify the Hooks Concept', ()=>{

    afterEach(()=>{
        cy.log('Run After All Test')
    })

    before(()=>{
        cy.log('Before all')
    })

    beforeEach(()=>{
        cy.log('Run Before all Test')
    })

    it('Testing', ()=>{
        cy.log('Welcome to Cypress')
    })

    it('Testing', ()=>{
        cy.log('Hello World')
    })

    after(()=>{
        cy.log('After All')
    })
})
//[8:49 AM, 8/6/2021] +91 93225 80270: describe('Validate the Login functionality', ()=>{

    // beforeEach(()=>{
    //     cy.visit('https://app.recast.studio/auth/login/?next=/?next=/')
    // })

    // afterEach(()=>{
    //     cy.log('Successfully Run')
    // })

    // it('Validate the Valid Credentials', () =>{
    //     cy.visit('https://app.recast.studio/auth/login/?next=/?next=/')
    //     cy.get('#login-form_email').type('pansaregauri9@gmail.com')
    //     cy.get("#login-form_password").type('gauri@')
    //     cy.get('.auth-form-button').click()
    //     cy.get('h4[class="ant-typography"]').should('have.text', 'Create New Project')
    //     // cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text', 'Create New Project')

    // })

    // it('Validate the Invalid Credentials', () =>{  
    //     cy.visit('https://app.recast.studio/auth/login/?next=/?next=/')
    //     cy.get('#login-form_email').type('pansaregauri@gmail.com')
    //     cy.get("#login-form_password").type('gauri@')
    //     cy.get('.auth-form-button').click()
    //     // cy.get('.ant-message-custom-content > :nth-child(2)').should('have.text', 'Unable to log in with provided credentials.')
    //     cy.url().should('include', 'login')
    // })


    it('Validate the Valid Credentials', () =>{
        cy.login('pansaregauri9@gmail.com', 'gauri@')
        cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text', 'Create New Project')
    })

    it('Validate the Invalid Credentials', () =>{  
        cy.login('pansaregauri@gmail.com', 'gauri@')
        cy.url().should('include', 'login')
    })
  
//})




// function add(){
//     return a+b
// }

// add(10, 20) 10+20
// add(20, 30) 20+30
//[8:49 AM, 8/6/2021] +91 93225 80270: Cypress.Commands.add('login', (email, password) => { 
        cy.visit('https://app.recast.studio/auth/login/?next=/?next=/')
        cy.get('#login-form_email').type(email)
        cy.get("#login-form_password").type(password)
        cy.get('.auth-form-button').click()
// })




// add(a, b){
//     return 30+40
// }
// add(10, 20) // 70


//  add(a, b){
//      return a+b
//  }
//  add(10, 20)
//  add(90,8) // 98