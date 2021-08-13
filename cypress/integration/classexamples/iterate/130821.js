describe('Iterate over the element',()=>{

    it('validate title of skin care products',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#categorymenu > nav > ul > li:nth-child(4) > a').click({force:true})
        cy.get('.mt10').find('a').each(function(el){
            let expectedArray = ["Eyes","Face","Gift Ideas & Sets","Hands & Nails","Sun"]
            expect(expectedArray.indexOf(el.text())).to.be.greaterThan(-1)    
        })
        
    })


})




