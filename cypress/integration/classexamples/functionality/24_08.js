// Radio
// Checkbox (Disable or Enable) (checkbox used for single and multiple check)























































































// describe('check the functina',()=>{
//     it('verify  the  functionality for RoundTrip radio button',()=>{
//         cy.visit('https://www.spicejet.com/')
//         cy.get('input[value = "RoundTrip"]').as('roundTrip')
//         cy.get('input[value = "OneWay"]').as('oneWay')
//         cy.get('@roundTrip').first().check()
//         cy.get('@roundTrip').should('be.checked')
//         cy.get('@oneWay').first().click()
//         cy.get('@roundTrip').should('not.be.checked')
//     })


//     it('verify  the radio button is disabled or not',()=>{
       
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[value="cabbage"]').should('be.disabled')
//         cy.get('input[value="pumpkin"]').should('not.be.disabled')
    
//     })

//     it('Vaildate the single checkbox',()=>{
       
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[value="option-1"]').as('option-1')
//         cy.get('@option-1').check()
//         cy.get('@option-1').should('be.checked')
//         cy.get('@option-1').uncheck()
//         cy.get('@option-1').should('not.be.checked')

//     })

//     it('Vaildate the multipe checkbox',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('#checkboxes').find('input').check(['option-1','option-2','option-3','option-4'])  
//     })

// })