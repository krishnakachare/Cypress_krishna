describe("verify login functionability", function () {

    it("test login with valid credentials", function () {

        cy.visit("https://app.recast.studio/auth/login/'")
        cy.get("#login-form_email").type("tecure.shrikrishna96@gmail.com")
        cy.get("#login-form_password").type("Shrikrishna_@2020")
        cy.get("#login-form > div:nth-child(5) > div > div > div > button").click()

        cy.wait(5000)
        cy.get("#root > div > section > header > div > div.ant-col.ant-col-14 > div > div.ant-col.ant-col-xs-12.ant-col-md-16.ant-col-lg-16.ant-col-xl-16.ant-col-xxl-16 > button").click()
        //cy.get("#root > div > section > section > section > main > div > div:nth-child(1) > div > div:nth-child(3) > button > div").should("have.text", "Automatically transcribe your video's audio into captions")
        //cy.get("#root > div > section > section > aside > div > ul > li:nth-child(5) > div").should('have.text','Current Team')

    })

    it("test login with invalid credentials", function () {
        cy.get("#root > div > section > section > main > div > div > div > div.ant-col.ant-col-xs-22.ant-col-sm-22.ant-col-md-4.ant-col-lg-4.ant-col-xl-4.ant-col-xxl-4 > span > strong").should("have.text", "Or")
    })
})







// describe('validate the login functionality',()=>{

//     it('validate with valid credentials',()=>{
//         cy.visit('https://opensource-demo.orangehrmlive.com/')
//         cy.get('input[name="txtUsername"]').type('Admin')
//         cy.get('input[id="txtPassword"]').type('admin123')
//         cy.get('input[id="btnLogin"]').click()
//         cy.get('img[alt="OrangeHRM"]').should('be.visible')
//     })

//     it('validate with invalid credentials',()=>{
//         cy.visit('https://opensource-demo.orangehrmlive.com/')
//         cy.get('input[name="txtUsername"]').type('ddd')
//         cy.get('input[id="txtPassword"]').type('ag')
//         cy.get('input[id="btnLogin"]').click()
//         cy.get('span[id="spanMessage"]').should('be.visible')  
//     })

    //<h1 name="id" class = "name" name = "new">Heading</h1>
    // tagName[attribute = "value"]
    // h1[name="id"]
// })
// let h = [233,55,66,7,8]
// let human = {
//     'age':12,
//     'rollNo':13,
//     display(){
//         console.log('human')
//     }
// }
// // human.age
// // human.display()
// describe('validate the login functionality',function(){
// })






















