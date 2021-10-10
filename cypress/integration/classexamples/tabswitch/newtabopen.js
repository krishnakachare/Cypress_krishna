// html element = object
// object have properties and methods
// here we can fetch,add,update,delete object

describe('Handling browser tab switch', () => {

// FIRST WAY OF HANDLING TAB SWITCHING

    it('Remove target attribut', () => {
        cy.visit('/')                         // we fetch url from cypress.json file
        cy.get('#contact-us').invoke('removeAttr','target').click()   // target attribut responsible for the opening new tab by the using invoke we here remove target attribute then we going to click
        cy.url().should('contain',"Contact-Us")                          // validation
        cy.title().should('have.text','WebDriver | Contact Us')
    })

  // SECOND WAY OF HANDLING TAB SWITCHING

    it('updating target attribut value', () => {
        cy.visit('/')
        cy.get('#contact-us').then(function($input){
            $input[0].setAttribute('target', '_self')   // using invoke we update the object (html) element property
          })                                            // '-self' load url in same tag
          .should('have.attr', 'target', '_self')
        cy.get('#contact-us').click()   
    })

    it('href attribute value(url) add into our base url and make full url for the ', () => {
        cy.visit('/')
        cy.get('#contact-us').invoke('attr', 'href').then(function(el){      // fetch href value and stored in el
            cy.visit(`/${el}`)   // adding href value (url) in base uel
        })
        
    })



// CROSS BROWSING

    let hrevalu = "https://www.google.com"   // FOR THE RESOLVING cross browser error

    it.only('Scroll Into view', () => {
        cy.visit('/')
        cy.get('#contact-us').then(function($input){
            $input[0].setAttribute('href', 'https://www.google.com')
          })
        //cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('#contact-us').invoke('attr', 'href').then(function(el){
                expect(el).to.equals(hrevalu)
        })
 
    })
    
    it.only('Scroll Into view', () => {
        cy.visit(hrevalu)
       
    })
    

})


// cross origin -- no two different base url in same testcase -- chrome security