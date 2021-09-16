describe('transverse methods in cypress', () => {

    it('children()  to get the children of the DOM element', () => {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children('.active').should('have.text', 'Contact Us')


    })

    it('first() to retrive the first Element in the HTMLElement list', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().first().should('have.text', 'Home')

    })

    it('last() to retrive the last Element in the HTMLElement list', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().last().should('have.text', 'Contact Us')

    })

    it('eq() to retrive the element in the HTML list by index', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().eq(1).should('have.text', 'About Us')

    })

    it('parent() to retrive parent of current element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Andy').parent().should('have.class', 'bg-info')

    })

    it('next() to retrive next sibling of the element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.bg-info').children().eq(0).next().should('have.text', 'Andy')

    })

    it('next() to retrive next sibling of the element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.bg-info').children().eq(2).prev().should('have.text', 'Andy')

    })
    it('prev() to retrive next sibling of the element',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.bg-info').children().eq(2).prev().should('have.text','Andy')

    })

    it('closet() to get the closet ancestor ',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Firstname').closest('table').should('have.attr','id','t01')

    })
    it('find() to get descendant DOM elements',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-pagination').find('li').find('a').should('have.length','7')

    })

    it('nextAll() to get the next sibling DOM element from the current element',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Apple').nextAll().should('have.length',9)

    })

    it('nextUntil() to get find the next sibling to a particular sibling element',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Apple').nextUntil('#veggie').should('have.length',4)
    })

    it('not() to remove a particular set of element',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn').not('.disabled').should('have.length',12)
    })

    it('sibling() to get all the sibling for particular',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').siblings().should('have.length','4')
    })


    it('parents() to get  particular or validate a particular element',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
      
    })

    it('parentsUntil() to get a specfic number of elements or only from child',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        
    })

    it('filter() to basically filter out a particular element',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').filter('.active').should('have.text','Contact Us')
      
    })

   //  https://example.cypress.io/commands/traversal


})