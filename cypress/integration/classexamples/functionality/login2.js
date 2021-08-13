describe('Validate the Login functionality', ()=>{

    it('Validate the Valid Credentials', () =>{
        cy.visit('https://app.recast.studio/auth/login/?next=/?next=/')

        // <h1 id='heading1' class='heading2' type='heading'>Heading</h1>
        // #heading1
        // .heading2
        // h1[type='heading']

        // id
        // #login-form_email

        // class
        // (.ant-input).first()
        // (.ant-input).eq(0)
        // (.ant-input).eq(4)

        // tagname
        // input[type="text"]

        cy.get('#login-form_email').type('pansaregauri9@gmail.com')
        cy.get("#login-form_password").type('gauri@')
        cy.get('.auth-form-button').click()
        cy.get('h4[class="ant-typography"]').should('have.text', 'Create New Project')
        // cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text', 'Create New Project')

    })

    it('Validate the Invalid Credentials', () =>{
        cy.visit('https://app.recast.studio/auth/login/?next=/?next=/')
        cy.get('#login-form_email').type('pansaregauri@gmail.com')
        cy.get("#login-form_password").type('gauri@')
        cy.get('.auth-form-button').click()
        // cy.get('.ant-message-custom-content > :nth-child(2)').should('have.text', 'Unable to log in with provided credentials.')
        cy.url().should('include', 'login')
    })

    
})