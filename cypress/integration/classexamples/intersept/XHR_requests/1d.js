describe('Intercept with Network', () => {

    let message = 'testing message'

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')

    })

    it('verify the first request', () => {
        cy.intercept({
            method: 'GET',
            url: '**/comments/*',
            // response:{
            //         "postId": 1,
            //         "id": 1,
            //         "name": "id labore ex et quam laborum",
            //         "email": "Eliseo@gardner.biz",
            //         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            // }

        }).as('getComment')
        cy.get('.network-btn').eq(0).click()
        //cy.wait('@getComment').its('response.body').then((body)=>{
        //     cy.log(body)
        // })
        //cy.wait('@getComment').its('response.statusCode').then((body)=>{
        //     cy.log(body)
        //     expect(body).to.eq(200)
        // })
        // cy.wait('@getComment').its('response.headers').then((body)=>{

        //     cy.log(body)
        // })

        // cy.wait('@getComment').its('response.duration').then((body)=>{

        //     cy.log(body)
        // })




    })


    it.only('second way', () => {

        cy.intercept({
            method: 'GET',
            url: '*/comments/'
        },
            {

                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": message

            }
        ).as('getComment');
        cy.get('.network-btn').eq(0).click()

        cy.wait('@getComment').should(({ request, response }) => {

            cy.log(request)
            cy.log(response)

            // expect(response.body).contains({
            //     'email': 'Eliseo@gardner.biz',

            // })
            // expect(response.statusCode).to.eq(200)

            // expect(request.responseTimeout).to.eq(30000)

        })

    })


    it('POST request', () => {

        cy.intercept({
            method: 'POST',
            url: '**/comments'
        },
            {
                'body': {
                    'email': 'testing email'
                },
                'statusCode': 600

            }).as('postComment')

        cy.get('button[class="network-post btn btn-success"]').click()

        cy.wait('@postComment').should(({ request, response }) => {
            cy.log(request)
            cy.log(response)
        })


    })




    it('PUT request', () => {


        cy.fixture('test').then((body) => {


            cy.intercept({
                method: 'PUT',
                url: '*/comments/'
            },
                {
                    'body': body
                }
            ).as('putComment')

            cy.get('button[class="network-put btn btn-warning"]').click()

            cy.wait('@putComment').should(({ request, response }) => {
                cy.log(request)
                cy.log(response)
            })


        })



    })
})