// XHR GET Request validation (simply hit request and validate its body,headers,statuCode,duration) WITH cy.intersept    ( simply cy.wait)
// MOCKING
// XHR GET Request Moking by adding moking data (create,update) in request body
// XHR GET Request Moking by variables moking data (create,update) in request body
// XHR GET Request Moking by fixture file moking data (create,update) save in fixture file and used in request body

describe('GET XHR request with Mocking', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('validate XHR GET Request', () => {

        cy.intercept({
            method: 'GET',
            url: '**/comments/*'
        }).as('GET')

        cy.get('.network-btn').click()

        //     ////** status code validation **

        //     cy.wait('@GET').its('response.statusCode').should('be.oneOf', [200])
        //     cy.wait('@GET').its('response.statusCode').should('eql', 200)
        //     cy.wait('@GET').its('response.statusCode').then((r)=>{
        //         expect(r).to.eqls(200)
        //     })

        //    //// ** duration validation **
        //     cy.wait('@GET').its('response').then((response)=>{
        //     })


        //    //// **  headers validation */

        //     cy.wait('@GET').its('response.headers').then((body)=>{
        //         expect(body).contain({
        //             'cf-cache-status': 'DYNAMIC'
        //         })
        //         cy.log(body)
        //     })


        //    //// ** body validation

        //     cy.wait('@GET').its('response').then(({ body }) => {
        //         cy.log(body)
        //         expect(body).property('email')
        //         expect(body).contain({
        //             "email": "Eliseo@gardner.biz",
        //         })
        //     })


        cy.wait('@GET').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)
            expect(request.headers).contain({
                'host': "jsonplaceholder.cypress.io"
            })

            cy.log(response)
            expect(response.headers).contain({
                'content-type': 'application/json; charset=utf-8',
                'cf-cache-status': 'DYNAMIC'
            })
            expect(response.body).contains({
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            })
            expect(response.statusCode).to.eq(200)
        })

    })


    it('validate XHR GET Request with mocking = write a body with request', () => {

        cy.intercept({
            method: 'GET',
            url: '**/comments/*'
        },
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "HI ! I am new in Python",
                "skills": "[js,python,mech]",          // we can add wit right formate
                'statusCode': 201
            }).as('GET')

        cy.get('.network-btn').click()

        cy.wait('@GET').should(({ request, response }) => {

            cy.log(request)
            cy.log(response)
            cy.log(response.body)                       //  HI ! I am new in Python  // in response body its not give full body(object)
            expect(request.body).to.include("")                          // in mocking also request body is empty
            expect(response.body).contains("HI ! I am new in Python")    // we not give full body(object)  only updated body (key) is get
            expect(response.statusCode).to.eq(201)                      // 200 before mocking
        })
    })


    it('validate XHR GET Request with mocking = write a body with request ** RIGHT FORMATE OF MOCKING **', () => {

        cy.intercept({
            method: 'GET',
            url: '**/comments/*'
        },
            {body: {
                    "postId": 1,
                    "id": 1,
                    "email": "Eliseo@gardner.biz",
                    "body": "HI ! I am new in Python",
                    "skills": "[js,python,mech]",
                },        // we can add data when we do mocking in right formate  // pass full object

                headers: {

                    'access-control-allow-credentials': "true"
                },

                'statusCode': 201

            }).as('GET')

        cy.get('.network-btn').click()

        cy.wait('@GET').should(({ request, response }) => {

            cy.log(request)
            cy.log(response)
            cy.log(response.body)
            expect(request.body).to.include("")                          // in mocking also request body is empty
            expect(response.body).contains({

                "body": "HI ! I am new in Python",
                "skills": "[js,python,mech]"

            })

            expect(response.statusCode).to.eq(201)                      // 200 before mocking
        })
    })

    // we can define variables in globaly for the mocking

    let body = "HI ! I am new in Python"
    let headers = 'hi am krishna'
    let status = 200


    it('validate XHR GET Request with mocking = Using Global Variables ** RIGHT FORMATE OF MOCKING **', () => {

        cy.intercept({
            method: 'GET',
            url: '**/comments/*'
        },
            {
                body: {
                    "postId": 1,
                    "id": 1,
                    "email": "Eliseo@gardner.biz",
                    "body": body,
                    "skills": "[js,python,mech]",
                },                                         // we can add data when we do mocking in right formate

                headers: {

                    'access-control-allow-credentials': "true",
                    'myName': headers
                },

                'statusCode': status

            }).as('GET')

        cy.get('.network-btn').click()

        cy.wait('@GET').should(({ request, response }) => {

            cy.log(request)
            cy.log(response)
            cy.log(response.body)
            expect(request.body).to.include("")
            expect(request.headers).to.have.property('host')                         // in mocking also request body is empty
            expect(request.headers).contains({
                accept: "*/*"
            })
            expect(response.body).contains({
                "body": "HI ! I am new in Python",
                "skills": "[js,python,mech]"
            })

            expect(response.statusCode).to.eq(200)                      // 201 before mocking
        })
    })



    // Mocking using fixture file


    it.only('validate XHR GET Request with mocking = fixture file ** RIGHT FORMATE OF MOCKING **', () => {
        //cy.fixture('XHRrequest/GET')
        cy.fixture('GET').then((fix) => {
            cy.intercept({
                method: 'GET',
                url: '**/comments/*'
            },
                {
                    body: {
                        "postId": 1,
                        "id": 1,
                        "email": "Eliseo@gardner.biz",
                        "body": fix.body.body,
                        "skills": fix.body.skills
                    },                                         // we can add data when we do mocking in right formate
                    headers: {
                        'access-control-allow-credentials': "true",
                        'myName': fix.headers.myName
                    },
                    'statusCode': fix.status.code
                }).as('GET')

            cy.get('.network-btn').click()

            cy.wait('@GET').should(({ request, response }) => {
                cy.log(request)
                cy.log(response)
                cy.log(response.body)
                expect(request.body).to.include("")
                expect(request.headers).to.have.property('host')                         // in mocking also request body is empty
                expect(request.headers).contains({
                    accept: "*/*"
                })
                expect(response.body).contains({
                    "body": "HI ! I am new in Python",
                    "skills": "[js,python,mech]"
                })
                expect(response).contains({
                    'statusMessage': null
                })

                expect(response.statusCode).to.eq(300)                      // 200 before mocking
            })
        })
    })


    ////// *******************************************************************************************************************

    // Mocking OF REQUEST HEADERS using fixture file


    it('validate XHR GET Request with REQUEST mocking = fixture file ** RIGHT FORMATE OF MOCKING **', () => {

        cy.fixture('GET').then((fix) => {
            cy.intercept({
                method: 'GET',
                url: '**/comments/*'
            },
                {
                    body: {
                        "postId": 1,
                        "id": 1,
                        "email": "Eliseo@gardner.biz",
                        "body": fix.body.body,
                        "skills": fix.body.skills
                    },                                         // we can add data when we do mocking in right formate
                    headers: {
                        'access-control-allow-credentials': "true",
                        'myName': fix.headers.myName
                    },
                    'statusCode': fix.status.code
                }).as('GET')

            cy.get('.network-btn').click()

            cy.wait('@GET').should(({ request, response }) => {
                cy.log(request)
                cy.log(response)
                cy.log(response.body)
                expect(request.body).to.include("")
                expect(request.headers).to.have.property('host')                         // in mocking also request body is empty
                expect(request.headers).contains({
                    accept: "*/*"
                })
                expect(response.body).contains({
                    "body": "HI ! I am new in Python",
                    "skills": "[js,python,mech]"
                })

                expect(response.statusCode).to.eq(300)                      // 201 before mocking
            })
        })
    })




})