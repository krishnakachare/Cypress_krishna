// Write test cases
// 1. u have login page, login it and validate it
// 2. after login in dashboard have 1 table in that table validate the no. of columes
// 3. in one of the colume have email id the validate the all email id corret or not



describe("s 1", () => {
    it("login functionality", () => {
        cy.visit(" ")
        cy.get('').type(id)
        cy.get("").type(passward)
        cy.get("").click()
        cy.url().contains()
    })
    it("validate table columes", () => {
        cy.visit(" ")
        cy.get('').type(id)
        cy.get("").type(passward)
        cy.get("").click()
        cy.get("").find('tbody').find('tr').childrens().then((el) => {
            expect(el.length).to.eql("expected")
        })
    })
    it("validate table colume email", () => {
        let arr = ["Actual emails..."]
        cy.visit(" ")
        cy.get('').type(id)
        cy.get("").type(passward)
        cy.get("").click()
        cy.get("").then((el) => {
            Array.from(el).filter((el, ind, array) => {
                return arr.includes(el.textContent)
            })
        }).then((el) => {
            expect(el.length).to.eql(arr.length)
        })
    })
})



/// <reference types = "Cypress"/>
import login from "../POM/class/page.spec.js"
describe("s 1", () => {
    it("login functionality", () => {
        let log = new login
        log.visit()
        log.id(id)
        log.pass(id)
        log.click()
        cy.url().contains()
    })
    it("validate table columes", () => {
        let log = new login
        log.visit()
        log.id(id)
        log.pass(id)
        log.click()
        cy.get("").find('tbody').find('tr').childrens().then((el) => {
            expect(el.length).to.eql("expected")
        })
    })
    it("validate table colume email", () => {
        let arr = ["Actual emails..."]
        let log = new login
        log.visit()
        log.id(id)
        log.pass(id)
        log.click()
        cy.get("").then((el) => {
            Array.from(el).filter((el) => {
                return arr.includes(el.textContent)
            }).then((el) => {
                expect(el.length).to.eql(arr.length)
            })
        })
    })
})















// my misteks
  // for (let i = 0; i < arr.length; i++) {
                //     if (arr[i] == el.textContent) {
                //         return true
                //     }
                //}
































