/// <reference types = "Cypress"/>
class login {
    visit(url) {
        cy.visit(url)
    }
    id(id) {
        cy.get('').type(id)
    }
    pass(pass) {
        cy.get("").type(pass)
    }
    click() {
        cy.get("").click()
    }
}
export default login