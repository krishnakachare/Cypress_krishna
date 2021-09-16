describe('POST XHR request and MOCKING it', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    // XHR POST Request validation (simply hit request and validate its body,headers,statuCode) WITH cy.intersept ( simply cy.wait)

    it('validate XHR POST Request without mocking', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('POST')

        cy.get('.btn-success').click()

        cy.wait('@POST').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)

            expect(request.headers).contains({
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
            expect(request).contains({
                httpVersion: "1.1",
                method: "POST"
            })
            expect(response.headers).contains({
                'content-type': 'application/json; charset=utf-8',
                'cf-cache-status': 'DYNAMIC'
            })
            expect(response.body).contains({
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 501

            })
            expect(response.statusCode).to.eq(201)
            expect(response).contains({
                statusCode: 201,
                httpVersion: "1.1",
                method: null,
                statusMessage: "Created"

            })
        })
    })


    // XHR POST Request Moking by adding moking data (create,update) in request mocking body [RIGHT FORMATE]

    it('validate XHR POST Request with mocking through mocking object', () => {

        cy.intercept({
            method: 'POST',
            url: '**/comments'
        },
            {
                body: {
                    "name": "Using POST in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "HI, I AM KRISHNA",
                    "id": 507
                },                                        // we can add data when we do mocking in right formate  // pass full object
                headers: {
                    'msg': "HI, I AM KRISHNA"
                },
                'statusCode': 400,

            }).as('POST')

        cy.get('.btn-success').click()

        cy.wait('@POST').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)

            expect(response.headers).contain({
                'msg': "HI, I AM KRISHNA"
            })
            expect(response.body).contains({
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "HI, I AM KRISHNA",
                "id": 507
            })
            expect(response.statusCode).to.eq(400)
            expect(response).contains({
                statusCode: 400,
                httpVersion: null,
                method: null,
                statusMessage: null                        // after mocking its got null

            })
        })
    })



    // XHR POST Request Moking by using variables (stores moking data (create,update)) in request body
    // we can define variables in globaly for the mocking

    let body = "HI, I AM KRISHNA"
    let headers = 'HI, I AM KRISHNA'
    let status = 400

    it('validate XHR POST Request with mocking through global variables', () => {

        cy.intercept({
            method: 'POST',
            url: '**/comments'
        },
            {
                body: {
                    "name": "Using POST in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": body,
                    "id": 507
                },                                                  // we can add data when we do mocking in right formate  // pass full object
                headers: {
                    'msg': headers
                },
                'statusCode': status

            }).as('POST')

        cy.get('.btn-success').click()

        cy.wait('@POST').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)

            expect(response.headers).contain({
                'msg': "HI, I AM KRISHNA"
            })
            expect(response.body).contains({
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "HI, I AM KRISHNA",
                "id": 507
            })
            expect(response.statusCode).to.eq(400)
            expect(response).contains({
                statusCode: 400,
                httpVersion: null,
                method: null,
                statusMessage: null

            })
        })
    })



    // XHR POST Request Moking by fixture file moking data (create,update) save in fixture file and used in request body
    // Mocking using fixture file

    it('validate XHR POST Request with mocking through fixture file', () => {

        cy.fixture('XHRrequest/POST').then((fix) => {
            cy.intercept({
                method: 'POST',
                url: '**/comments'
            },
                {
                    body: {
                        "name": "Using POST in cy.intercept()",
                        "email": "hello@cypress.io",
                        "body": fix.body.body,
                        "id": 507
                    },                                       // we can add data when we do mocking in right formate  // pass full object
                    headers: {
                        "myName": fix.headers.myName
                    },
                    'statusCode': fix.status.code

                }).as('POST')

            cy.get('.btn-success').click()

            cy.wait('@POST').should(({ request, response }) => {
                cy.log(response)
                cy.log(response.body)
                cy.log(request)

                expect(response.headers).contain({
                    "myName": "krishna"
                })
                expect(response.body).contains({
                    "name": "Using POST in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "HI ! I am new in Python",
                    "id": 507
                })
                expect(response.statusCode).to.eq(300)
                expect(response).contains({
                    statusCode: 300,
                    httpVersion: null,
                    method: null,
                    statusMessage: null

                })
            })
        })
    })
})


// in response body other than body, headers and statusCode properties cant be add or update can only validate it