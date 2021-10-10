describe('Alias and invoke',()=>{

    it.skip('validate the specfic product(common way)',()=>{

        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').eq(9).should('have.text',"Viva Glam Lipstick")
        cy.get('.fixed').eq(1).then((el)=>{
            expect(el.text().length).to.equals(42)
        })
    })

    it('invoke used',()=>{

        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').eq(9).invoke('text').as('text')
        cy.get('@text').should('have.length',18)
        cy.get('@text').should('include','Viva Glam Lipstick')

    })

    it('store in "as()" access it "@"',()=>{

        
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').eq(9).as('el')           // stored in as() html element
        cy.get('@el').should('have.text','Viva Glam Lipstick')    // accessed by @
        cy.get('@el').should('have.attr','class','prdocutname')
        //cy.get('@el').should('have.tag','a')


    })


    it.only('verify the radio button',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type = "radio"]').first().as('radio')
        cy.get('@radio').check()
        cy.get('@radio').should('be.checked')
        cy.get('input[value="yellow"]').check()
        cy.get('@radio').should('not.be.checked')
    })


    describe('check the functina',()=>{
        it('verify  the  functionality for RoundTrip radio button',()=>{
            cy.visit('https://www.spicejet.com/')
            cy.get('input[value = "RoundTrip"]').as('roundTrip')
            cy.get('input[value = "OneWay"]').as('oneWay')
            cy.get('@roundTrip').first().check()
            cy.get('@roundTrip').should('be.checked')
            cy.get('@oneWay').first().click()
            cy.get('@roundTrip').should('not.be.checked')
        })
    
    
        it('verify  the radio button is disabled or not',()=>{
           
            cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('input[value="cabbage"]').should('be.disabled')
            cy.get('input[value="pumpkin"]').should('not.be.disabled')
        
        })
    
        it('Vaildate the single checkbox',()=>{
           
            cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('input[value="option-1"]').as('option-1')
            cy.get('@option-1').check()
            cy.get('@option-1').should('be.checked')
            cy.get('@option-1').uncheck()
            cy.get('@option-1').should('not.be.checked')
    
        })
    
        it('Vaildate the multipe checkbox',()=>{
            cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('#checkboxes').find('input').check(['option-1','option-2','option-3','option-4'])  
        })
    
    })

})


// variables in cypress