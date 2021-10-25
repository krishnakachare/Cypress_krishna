describe('login and sign up',function(){

    let email = (Math.random() + 1).toString(36).substring(7);
    let password = (Math.random() + 1).toString(36).substring(7);


    it('verify  the sign up functionality',()=>{
        cy.visit('/#/register')
        cy.get('.close-dialog').click()
        cy.get('#emailControl').type(`chinmaydeshpande010${email}@gmail.com`)
        cy.get('#passwordControl').type(`!Poorva@123${password}`)
        cy.get('#repeatPasswordControl').type(`!Poorva@123${password}`)
        cy.get('#mat-slide-toggle-1').click()
        cy.get('#mat-select-0 > div > div.mat-select-arrow-wrapper.ng-tns-c142-11').click()
        cy.get('.mat-option-text').eq(3).click()
        cy.get('.security-container > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('24 feb')
        cy.get('#registerButton > .mat-button-wrapper').click() 
        cy.contains("Registration completed successfully. You can now log in.")

    })

    it('verify  the sign in functionality',()=>{
        cy.visit('/#/login')
        cy.get('.close-dialog').click()
        cy.get('#email').type(`chinmaydeshpande010${email}@gmail.com`)
        cy.get('#password').type(`!Poorva@123${password}`)
        cy.get('#loginButton').click()
        cy.get('.fa-layers-counter').contains('0')
    
    })

    it.only('verify ui less login',()=>{
        let payload = {"email": "chinmaydeshpande0101@gmail.com", "password": "!Ram@123"}
        cy.request({
            method:"POST",
            url:"http://localhost:3000/rest/user/login",
            body:payload
        }).then(function(response){
            expect(response.status).to.eq(200)
            cy.visit('http://localhost:3000/#/search')
            //window.localStorage.setItem('token', response.body.authentication.token)
            //window.localStorage.setItem('name',"amit")
            cy.setLocalStorage("token",response.body.authentication.token);
        })
    })
})