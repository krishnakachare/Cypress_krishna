describe("validate alert popup", () => {

    it("Window Alert Method have one button", () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get("#button1").click()
        cy.on("window:alert", function (str) {             // cy.on() method we can find element in window object (which is the outside the html document)
            expect(str).to.eqls("I am an alert box!")   // "window:alert"  window is global object an alert() is its method ( we fetch value from object)
        })                                               // in callback function we got a string which is in that method presrnt(like here alert)
        //cy.log(window)
    })

    it.only("Window Alert Method have two button press ok", () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get("#button4").click()
        cy.on("window:confirm", function (str) {                                     // confirm() its window method and its hve two buttons     
            return true                                                           // return true = click on ok             
        })
        cy.get("#confirm-alert-text").should("have.text", "You pressed OK!")
        //cy.get("#confirm-alert-text").should("not.have.text", "You pressed Cancel!")
    })

    it.only("Window Alert Method have two button press cancel", () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get("#button4").click()
        cy.on("window:confirm", function (str) {
            return false                                           // return false = click on cancel
        })
        cy.get("#confirm-alert-text").should("have.text", "You pressed Cancel!")
        //cy.get("#confirm-alert-text").should("not.have.text", "You pressed OK!")
    })

    it("Document Popup", () => {               // popup message inside the document page
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get("#button2").click()
        cy.get(".modal-title").should("have.text", "It’s that Easy!!  Well I think it is.....")
        cy.get("#myModal").should("have.class", "in")
        cy.get(".modal-body>p").contains("We can inject and use JavaScript code if all else fails! Remember always try to use WebDriver Library method(s) first such as WebElement.")
        //cy.get('.btn.btn-default').first().click({force: true})
        cy.get('.close').click()
        cy.get("#myModal").should("not.have.class", "modal fade in")
    })
})































































// describe('verify the alert',()=>{

//     it.only('validate the normal alert',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button1').click()
//         // cy.on('window:alert',(str) =>{
//         //     expect(str).to.equal('I am an alert box!')
//         // })
//         // cy.window().then((win) => {
//         //     let foo = win.alert()
//         //     cy.log(foo)
//         //   })

//     })


//     it('validate the confirm alert one',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button4').click()
//         cy.on('window:confirm',(str) =>{
//             return true
//         })
//         cy.get('#confirm-alert-text').should('have.text','You pressed OK!')

//     })

//     it('validate the confirm alert two',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button4').click()
//         cy.on('window:confirm',(str) =>{
//             return false
//         })
//         cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')

//     })

//     it('validate modal',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button2').click()
//         cy.get('#myModal').should('have.class','in')
//         cy.get('.modal-title').should('have.text','It’s that Easy!!  Well I think it is.....')
//         cy.get('button[data-dismiss = "modal"]').first().click()
//         cy.get('#myModal').should('not.have.class','in')

//     })

// })