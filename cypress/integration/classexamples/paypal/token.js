describe('paypal request', () => {

    let token = null

    it('generate token', () => {

        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            form: true,
            headers: {
                authorization: 'Basic QVVuQnRfeldKTUZ6UG1WaWFMQ1o3UTNTMy1zUzg4Ym1xMGZlSlkzWkptTG9SUVZibmJ2OVdvbldZajRsZzg0VUk4WGZlWjlqNVFZMExucmY6RU9RcVFGSnpYLXEzVllIenBsaEVCT0NZcnFEa3RoVll0VzVuUUhMZEdzekU3SS1YdkF2amlGZFJPeEJCYkZPNlNKbENNa3VsM0tCaXZ6YzI='

            },
            body: {
                grant_type: 'client_credentials'
            }

        }).then((response) => {

            //cy.log(response.body.access_token)
            token = response.body.access_token
            expect(response.status).to.eql(200)
            //expect(response.duration).to.be.lessThan(1500)
            expect(response.body).contains({
            })

            expect(response.headers).contains({

            })
        })
    })
})