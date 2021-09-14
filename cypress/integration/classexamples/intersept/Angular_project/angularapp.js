describe('Signup with Angular App', () => {


    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }



    it('Signup', () => {

        // cy.intercept('POST', '**/users').as('newUser')
        cy.intercept("GET", "**/tags", {fixture:'tag.json'})

        cy.visit('http://localhost:4200/register')

        cy.get('input[placeholder="Username"]').type(str)
        cy.get('input[placeholder="Email"]').type(`${str}@gmail.com`)
        cy.get('input[placeholder="Password"]').type(str)
        cy.get('button[type="submit"]').click({ force: true })

        // cy.wait('@newUser')
        // cy.get('@newUser').should((xhr) => {
        //     console.log(xhr)
        // })

        cy.get(':nth-child(4) > .nav-link').should('be.visible')

        cy.get('.tag-list').should("contain", "HTML").and("contain", "CSS");

    })

 
})
























describe('Signup with Angular App', () => {


    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }



    it('Signup', () => {

        // cy.intercept('POST', '**/users').as('newUser')
        cy.intercept("GET", "**/tags", {fixture:'tag.json'})

        cy.visit('http://localhost:4200/register')

        cy.get('input[placeholder="Username"]').type(str)
        cy.get('input[placeholder="Email"]').type(`${str}@gmail.com`)
        cy.get('input[placeholder="Password"]').type(str)
        cy.get('button[type="submit"]').click({ force: true })

        // cy.wait('@newUser')
        // cy.get('@newUser').should((xhr) => {
        //     console.log(xhr)
        // })

        cy.get(':nth-child(4) > .nav-link').should('be.visible')

        cy.get('.tag-list').should("contain", "HTML").and("contain", "CSS").and('contain', 'JavaScript');

    })

    // it.only("Test valid login", () => {
    //     cy.intercept("GET", "**/tags", {fixture:'tag.json'})
    //     cy.visit("http://localhost:4200/");
    //     cy.get(".nav").contains("Sign in").click();

    //     cy.get('input[placeholder="Username"]').type(str)
    //     cy.get('input[placeholder="Email"]').type(`${str}@gmail.com`)
    //     cy.get('input[placeholder="Password"]').type(str)
    //     cy.get('button[type="submit"]').click({ force: true })

    //     cy.get(':nth-child(4) > .nav-link').should('be.visible')

    //     cy.get('.tag-list').should("contain", "qauni").and("contain", "automation-testing");
    // })

})











{
    "tags":["HTML", "CSS", "JavaScript"]
}




// npm install -g @angular/cli




















