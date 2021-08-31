describe('Actions class .....', () => {

    it('Scroll Into view', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress#Our-mission')
        cy.get('footer').scrollIntoView()
    })
  
    it.only('Drag and Drop', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p').then((el)=>{
            expect(el).to.have.css('background-color', 'rgb(244, 89, 80)');
        })
    })
  

  

})