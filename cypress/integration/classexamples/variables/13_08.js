describe(('variables in the cypress'),()=>{

    it('firstwat',()=>{


         cy.visit('https://automationteststore.com/index.php?rt=account/login')
        // const ar = cy.get('#loginFrm_loginname')
        // ar.type('chinmaydeshpande@gmail.com')
        // const ps = cy.get('#loginFrm_password')
        // ps.type('hh')


        // const ar = cy.get('#loginFrm_loginname')
        // const ps = cy.get('#loginFrm_password')
        // // ar.type('chinmaydeshpande@gmail.com')
        // // ps.type('hh')



        cy.get('#loginFrm_loginname').type('chinmaydeshpande010')
        cy.get('#loginFrm_password').type('hello')


        // Alias

        //cy.get('#loginFrm_loginname').as('ga')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')
        // cy.get('@ga').type('hello')


        //<h1 id = "headingOne">headingOne</h1>


        // let aa = cy.get('.maintext')
        // console.log(aa.text)

        cy.get('.maintext').then((el)=>{
            console.log(el.text())
            expect(el.text()).to.eq('Account Login')
            cy.get('#loginFrm_loginname').click()
        
        })

        
        




    })



})