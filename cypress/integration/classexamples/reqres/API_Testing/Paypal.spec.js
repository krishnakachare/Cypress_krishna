describe('Paypal Request', () =>{

    let token = null
    it('Generate Token', () =>{
        
        cy.request({
            method: 'POST', 
            url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
            form : true,
            headers : {
                authorization : "Basic QVNqVDZLLUhRd1lsZlV2a2lRQnZaM1UteHh2aUZHRjE0aDE2VGhZWkt1aVBzMEFyV2s0VXFzS1BEYkY2a0FiZE16b3NYYTRoMjlsVVhpWXc6RUVOdWRWdnVvX0pTLWRZYmw4a2tQUEl5RHZYU21HZWpYY3lrNVFFeEY4UHd3QmtGcnVpNmQtSEpSS0RNa1BobkxQb3Z3SjN2ajNsUkZJQks="
            },
            body: {
                grant_type : "client_credentials"
            }
        }).then((response) =>{

            // cy.log(response.body.access_token)
            token =  response.body.access_token
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)  

            expect(response.body).contains({
                "token_type": "Bearer",                                 //FIRST Way -body in response
                "app_id": "APP-80W284485P519543T"
            })
            expect(response.headers).contains({
                        "content-length" :"918",
                        "content-type" : "application/json"
            })

        })
    
    })

    
    it('create order', () =>{
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
            headers: {
                authorization: `Bearer  ${token}`,
                'Content-Type': 'application/json'
            },
            body:{
                    "intent": "CAPTURE",
                    "purchase_units": [
                      {
                        "amount": {
                          "currency_code": "USD",
                          "value": "100.00"
                        }
                      }
                    ]
            }
        }).then((response) =>{
            expect(response.status).to.eq(201)
        })
    })

    
  

})


