describe('XHR GET request and MOCKING it', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')  // before each it block its run
    })

    // XHR GET Request validation (simply hit request and validate its body,headers,statuCode) WITH cy.intersept ( simply cy.wait)

    it('validate XHR GET Request without mocking', () => {

        cy.intercept({
            method: 'GET',
            url: '**/comments/*'
        }).as('GET')

        cy.get('.network-btn').click()

        // USED its() = its gives exactly () that value/text.  we can only one time its used in it block.

        ////** status code validation **

        // cy.wait('@GET').its('response.statusCode').should('be.oneOf', [200])
        // cy.wait('@GET').its('response.statusCode').should('eql', 200)
        // cy.wait('@GET').its('response.statusCode').then((r)=>{
        //     expect(r).to.eqls(200)
        // })

        //// ** duration validation **
        // cy.wait('@GET').its('response').then((response)=>{
        // cy.log(response)
        //     expect(response.statusCode).to.equal(200)
        // })

        //    //// **  headers validation */

        // cy.wait('@GET').its('response.headers').then((obj)=> {
        //     cy.log(obj)
        //     expect(obj).contains({
        //         'cf-cache-status': 'DYNAMIC'
        //     })
        // })

        //// ** body validation

        // cy.wait('@GET').its('response').then(({ body }) => {      // we got only response body
        //     cy.log(body)
        //     expect(body).property('email')
        //     expect(body).contain({
        //         "email": "Eliseo@gardner.biz",
        //     })
        // })

        // USED should()= its a method it have 1st parameter is callbackfunction and its also have two parameters which is in object are request and response
        // in should method we destructured object which is given in callback function block

        cy.wait('@GET').should(({ request, response }) => {

            // let {request,response} = xhr              // altimatly meaning of destructuring

            cy.log(response)
            cy.log(response.body)
            cy.log(request)

            expect(request).contain({
                body: "",
                httpVersion: "1.1",
                method: "GET"
            })

            expect(request.headers).contain({
                'host': "jsonplaceholder.cypress.io"
            })

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
            expect(response).contains({
                statusCode: 200,
                statusMessage: "OK",
                method: null
            })
        })
    })

    //###################################### MOCKING #############################################################

    // XHR GET Request Moking by adding moking data (create,update) in request mocking body (incorrect format)

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

            cy.log(response)
            cy.log(response.body)                       //  HI ! I am new in Python  // in response body its not give full body(object)
            cy.log(request)

            expect(request.body).to.include("")                          // in mocking also request body is empty
            expect(response.body).contains("HI ! I am new in Python")    // we not give full body(object)  only updated body (key) is get
            expect(response.statusCode).to.eq(201)                      // 200 before mocking
            expect(response).contains({
                statusCode: 201,
                method: null

            })
        })
    })

    // XHR GET Request Moking by adding moking data (create,update) in request mocking body [RIGHT FORMATE]

    it('validate XHR GET Request with mocking through CORRECT mocking body', () => {

        cy.intercept({
            method: 'GET',
            url: '**/comments/*'
        },
            {
                body: {
                    "postId": 1,
                    "id": 1,
                    "email": "Eliseo@gardner.biz",
                    "body": "HI ! I am new in Python",
                    "skills": "[js,python,mech]",
                },        // we can add data when we do mocking in right formate  // pass full object
                headers: {
                    'access-control-allow-credentials': "true-FORCE",
                    'myName': "krishna"
                },
                'statusCode': 201,
                "msg": "hi"

            }).as('GET')

        cy.get('.network-btn').click()

        cy.wait('@GET').should(({ request, response }) => {

            cy.log(request)
            cy.log(response)
            cy.log(response.body)

            expect(request.body).to.include("")                          // in mocking also request body is empty
            expect(request).contain({
                body: "",
                httpVersion: "1.1",
                method: "GET"
            })

            expect(request.headers).contain({
                'host': "jsonplaceholder.cypress.io"
            })
            expect(response.headers).contains({
                'access-control-allow-credentials': "true-FORCE",
                'myName': "krishna"
            })
            expect(response.body).contains({
                "body": "HI ! I am new in Python",
                "skills": "[js,python,mech]"
            })
            expect(response.statusCode).to.eq(201)                      // 200 before mocking
            expect(response).contains({
                statusCode: 201,
                method: null,
                //"msg" : "hi"               // we cant add property in response only statusCode update and other properties validate
            })
        })
    })


    // XHR GET Request Moking by using variables (stores moking data (create,update)) in request body

    // we can define variables in globaly for the mocking
    let body = "HI ! I am new in Python"
    let headers = 'hi am krishna'
    let status = 200

    it('validate XHR GET Request with mocking through global variables defined', () => {

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
            expect(request).contain({
                body: "",
                httpVersion: "1.1",
                method: "GET"
            })

            expect(response.body).contains({
                "body": "HI ! I am new in Python",
                "skills": "[js,python,mech]"
            })
            expect(response.headers).contains({
                'access-control-allow-credentials': "true",
                'myName': 'hi am krishna'
            })
            expect(response.statusCode).to.eq(200)                      // 201 before mocking
            expect(response).contains({
                statusCode: 200,
                method: null
            })
        })
    })


    // XHR GET Request Moking by fixture file moking data (create,update) save in fixture file and used in request body
    // Mocking using fixture file

    it('validate XHR GET Request with mocking through mocking body', () => {

        //cy.fixture('XHRrequest/GET')   // when in fixture file have folders then give file path (when directly file in fixture folder then only gives its file name in cy.fixture() without its extension)

        cy.fixture('XHRrequest/GET').then((fix) => {

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
                expect(request).contain({
                    body: "",
                    httpVersion: "1.1",
                    method: "GET"
                })

                expect(response.headers).contains({
                    'access-control-allow-credentials': "true",
                    'myName': 'krishna'
                })
                expect(response.body).contains({
                    "body": "HI ! I am new in Python",
                    "skills": "[js,python,mech]"
                })
                expect(response.statusCode).to.eq(300)                      // 200 before mocking
                expect(response).contains({
                    statusCode: 300,
                    'statusMessage': null
                })
            })
        })
    })
})