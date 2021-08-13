describe('Basic Authentication', () => {
  
    it('Herokuapp Basic Auth', () =>{

        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/basic_auth',
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            }
           
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
        })

    })
})
