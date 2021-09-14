const { expect } = require("chai")

describe('POST Request Validate', () => {
  
    it("validate Post request",()=>{

        cy.request({
            method : 'POST',
            url : "https://reqres.in/api/users",
            body : {
                'name': 'sarika', 
                'job': 'tester'
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).to.contain({
                "name": "sarika",
                "job": "tester",
            })
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('createdAt')
        })
    })
})
