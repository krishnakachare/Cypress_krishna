describe('Iframe elements validation',()=>{

    it('Find Iframe HTML elements Using JQuiry',()=>{

        cy.visit('https://jqueryui.com/datepicker/')
        cy.get('.demo-frame').then(($jq)=>{

           let body = $jq.contents().find('html').find('body')
           cy.wrap(body).as('iframebody')
        })
        cy.log('@iframebody')
        cy.get('@iframebody').find('p').find('input').click()

    })


    it.only('Find Iframe HTML elements Using JAVASCRIPT',()=>{

        cy.visit('https://jqueryui.com/datepicker/')
        cy.get('.demo-frame').within(function(frame){

           let body = frame.get()
           cy.log(body)
           cy.wrap(body).as('iframebody')
        })
        cy.log('@iframebody')
        cy.get('@iframebody').find('body').find('p').find('input').click()

    })
})