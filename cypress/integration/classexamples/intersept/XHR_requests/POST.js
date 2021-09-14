describe('POST XHR request with Mocking', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('validate XHR POST Request', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('POST')

        cy.get('.btn-success').click()

       
        cy.wait('@POST').should(({ request, response }) => {
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

                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 501

            })
            expect(response.statusCode).to.eq(201)
        })

    })





    it('validate XHR POST Request with mocking = write a body with request ** RIGHT FORMATE OF MOCKING **', () => {

        cy.intercept({
            method: 'POST',
            url: '**/comments'
        },
            {body: {
                    "name": "Using POST in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "HI, I AM KRISHNA",
                    "id": 507
                },        // we can add data when we do mocking in right formate  // pass full object
                headers: {
                    'msg': "HI, I AM KRISHNA"
                },
                'statusCode': 400

            }).as('POST')

        cy.get('.btn-success').click()

        cy.wait('@POST').should(({ request, response }) => {
            cy.log(response)
            cy.log(response.body)
            cy.log(request)
            expect(request.headers).contain({
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
            //cy.log(response)
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
        })
    })

    // we can define variables in globaly for the mocking

    let body = "HI, I AM KRISHNA"
    let headers = 'HI, I AM KRISHNA'
    let status = 400

    it('validate XHR POST Request with mocking = mocking using global variables ** RIGHT FORMATE OF MOCKING **', () => {

        cy.intercept({
            method: 'POST',
            url: '**/comments'
        },
            {body: {
                    "name": "Using POST in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": body,
                    "id": 507
                },        // we can add data when we do mocking in right formate  // pass full object
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
            expect(request.headers).contain({
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
            //cy.log(response)
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
        })
    })


    // Mocking using fixture file


    it.only('validate XHR POST Request with mocking = Mocking using fixture file ** RIGHT FORMATE OF MOCKING **', () => {

        cy.fixture('GET').then((fix) => {
            cy.intercept({
                method: 'POST',
                url: '**/comments'
            },
                {body: {
                        "name": "Using POST in cy.intercept()",
                        "email": "hello@cypress.io",
                        "body": fix.body.body,
                        "id": 507
                    },        // we can add data when we do mocking in right formate  // pass full object
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
                expect(request.headers).contain({
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                })
                //cy.log(response)
                expect(response.headers).contain({
                    "myName" : "krishna"
                })
                expect(response.body).contains({
                    "name": "Using POST in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "HI ! I am new in Python",
                    "id": 507
                })
                expect(response.statusCode).to.eq(300)
            })
        })
    })


    ////// *******************************************************************************************************************


//    REQUEST MOCKING          ***************************************************



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