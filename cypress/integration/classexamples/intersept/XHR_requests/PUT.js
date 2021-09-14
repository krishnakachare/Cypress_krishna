describe('PUT XHR request with Mocking', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('validate XHR PUT Request', () => {

        cy.intercept({
            method: 'PUT',
            url: '**/comments/*'
        }).as('PUT')

        cy.get('.btn-warning').click()

       
        cy.wait('@PUT').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)
            expect(request.headers).contain({
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })

            //cy.log(response)
            expect(response.headers).contain({
                'content-type': 'application/json; charset=utf-8',
                'cf-cache-status': 'DYNAMIC'
            })
            expect(response.body).contains({
                    "name": "Using PUT in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                    "id": 1
            })

            expect(response.statusCode).to.eq(200)
        })

    })




    it.only('validate XHR PUT Request', () => {

        cy.intercept({
            method: 'PUT',
            url: '**/comments/*'},
            {body:{
                "name": "Using PUT in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                    "id": 1
            },
            headers:{


            },

            statusCode : 600



        }).as('PUT')

        cy.get('.btn-warning').click()

       
        cy.wait('@PUT').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)
            expect(request.headers).contain({
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })

            //cy.log(response)
            expect(response.headers).contain({
                'content-type': 'application/json; charset=utf-8',
                'cf-cache-status': 'DYNAMIC'
            })
            expect(response.body).contains({
                    "name": "Using PUT in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                    "id": 1
            })
            
            expect(response.statusCode).to.eq(200)
        })

    })






})