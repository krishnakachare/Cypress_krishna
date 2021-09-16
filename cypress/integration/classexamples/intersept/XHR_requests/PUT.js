describe('PUT XHR request and MOCKING it', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    // XHR PuT Request validation (simply hit request and validate its body,headers,statuCode) WITH cy.intersept ( simply cy.wait)

    it('validate XHR PUT Request without mocking', () => {

        cy.intercept({
            method: 'PUT',
            url: '**/comments/*'
        }).as('PUT')

        cy.get('.btn-warning').click()

        cy.wait('@PUT').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)

            expect(request.headers).contains({
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
            expect(request).contains({
                httpVersion: "1.1",
                method: "PUT"
            })

            expect(response.headers).contains({
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
            expect(response).contains({
                httpVersion: "1.1",
                method: null,
                statusCode: 200,
                statusMessage: "OK"
            })
        })

    })


    // XHR POST Request Moking by adding moking data (create,update) in request mocking body [RIGHT FORMATE]

    it('validate XHR PUT Request with mocking through mocking object', () => {

        cy.intercept({
            method: 'PUT',
            url: '**/comments/*'
        },
            {
                body: {
                    "name": "Using PUT in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "HI, I AM KRISHNA",
                    "id": 507
                },
                headers: {
                    'msg': "HI, I AM KRISHNA"
                },
                'statusCode': 400,

            }).as('PUT')

        cy.get('.btn-warning').click()

        cy.wait('@PUT').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)

            expect(response.headers).contains({
                'msg': "HI, I AM KRISHNA"
            })
            expect(response.body).contains({
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "HI, I AM KRISHNA",
                "id": 507
            })
            expect(response.statusCode).to.eq(400)
            expect(response).contains({
                httpVersion: null,
                method: null,
                statusCode: 400,
                statusMessage: null
            })
        })
    })

    // XHR PUT Request Moking by using variables (stores moking data (create,update)) in request body
    // we can define variables in globaly for the mocking

    let body = "HI, I AM KRISHNA"
    let headers = 'HI, I AM KRISHNA'
    let status = 400

    it('validate XHR PUT Request with mocking through global variables', () => {

        cy.intercept({
            method: 'PUT',
            url: '**/comments/*'
        },
            {
                body: {
                    "name": "Using PUT in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": body,
                    "id": 507
                },
                headers: {
                    'msg': headers
                },
                'statusCode': status,

            }).as('PUT')

        cy.get('.btn-warning').click()

        cy.wait('@PUT').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)

            expect(response.headers).contains({
                'msg': "HI, I AM KRISHNA"
            })
            expect(response.body).contains({
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "HI, I AM KRISHNA",
                "id": 507
            })
            expect(response.statusCode).to.eq(400)
            expect(response).contains({
                httpVersion: null,
                method: null,
                statusCode: 400,
                statusMessage: null
            })
        })
    })

    // XHR POST Request Moking by fixture file moking data (create,update) save in fixture file and used in request body
    // Mocking using fixture file

    it('validate XHR PUT Request with mocking through fixture file', () => {

        cy.fixture('XHRrequest/PUT').then((fix) => {

            cy.intercept({
                method: 'PUT',
                url: '**/comments/*'
            },
                {
                    body: {
                        "name": "Using PUT in cy.intercept()",
                        "email": "hello@cypress.io",
                        "body": fix.body.body,
                        "skills": fix.body.skills,
                        "id": 507
                    },
                    headers: {
                        'msg': fix.headers.myName
                    },
                    'statusCode': fix.status.code

                }).as('PUT')

            cy.get('.btn-warning').click()

            cy.wait('@PUT').should(({ request, response }) => {
                cy.log(response)
                cy.log(response.body)
                cy.log(request)

                expect(response.headers).contains({
                    'msg': "krishna"
                })
                expect(response.body).contains({
                    "name": "Using PUT in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "HI ! I am new in Python",
                    "skills" : "[js,python,mech]",
                    "id": 507
                })
                expect(response.statusCode).to.eq(300)
                expect(response).contains({
                    httpVersion: null,
                    method: null,
                    statusCode: 300,
                    statusMessage: null
                })
            })
        })
    })



})