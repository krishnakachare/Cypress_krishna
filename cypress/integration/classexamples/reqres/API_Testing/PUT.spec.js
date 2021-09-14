describe('PUT Request', () =>{

    it("validate PUT request",()=>{

        cy.request({
            method : 'PUT',
            url : "https://reqres.in/api/users",
            body : {
                name: "sarika",
                job: "tester"
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.contain({
                name: "sarika",
                job: "tester" 
            })
            expect(res.body).to.have.property('updatedAt')
        })
    })
})