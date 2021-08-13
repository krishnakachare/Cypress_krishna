//////////////////// BODY SECTION VALIDATION /////////////////////////////////////////////////////


// I. cy.visit() = to reach on given url 

// II. cy.get() = to reach on given html element ( CSS selector )


// III. cy.contains() = .contains()     ---- its method  

//    .contains() = to only known html text and rest all are unknown 
//    And also we can use "contain" as a assertion( like in validation ---.should('contain','AnyHtmlText'))
//    assertion contain also accept partioal html text or (substring) and numbers

//     Assertion contains for validation must be array,object,string (ERROR = object tested must be an array, a map, an object, a set, a string, or a weakset, but object given)

// made html element   tagname[attribute='value']       e.g.  <h1 id='hello'>Text</h1>





////////////////// METHODS OF BODY SECTION VALIDATION IN DOCUMENT ////////////////////////////////////////


describe('Tranversing the DOM in cypress(body section validation in document)', () => {

    // 1. children() = find children from parent whos ( children ) have uniqe something

    it('children() to get the children element of the DOM', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // check no. of childrens
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().should('have.length', '3')
        // children who have active class
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children('.active').should('contain', 'Contact Us')
        //////////////////////////    ACTUAL (parent)   ///////////////////////////////////   \\\\\\\\\\\  EXPECTED (child)  \\\\\\\\\
    })


    // 2. [ Ancestor] Closest() = children closest to its (current) parent

    it('closest() to validate the closest ancestor of the element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.badge-light').closest('ul').should('have.class', 'list-group')
        ///////// CHILD ////////  \\\\\\\ PARENT \\\\\\\\\\\\\
    })


    // 3. eq() = to retrive specific element in the list based on index value

    it('eq() to get the children element by there index value', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.list-group').children().eq(1).should('contain', 'All Products')
        cy.get('#t01').children().eq(0).children().eq(2).children().eq(0).should('contain', 'Jemma')
        // cy.get('#t01').children().eq(0).eq(2).eq(0).should('contain', 'Jemma')                           // not works
    })


    // 4. first() = first from his parent

    it('first() to retrive first children in sibling', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').children().first().first().first().should('contain', 'Firstname')                             // its works
        cy.get('#t01').children().first().children().first().children().first().should('contain', 'Firstname')
    })



    // 5. last() = last from his parent

    it('last() to retrive last children in sibling', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').children().first().last().last().should('contain', 94)
        cy.get('#t01').children().first().last().last().should('contain', '94')     // assertion contain works both string and numbers                           // its works
        // cy.get('#t01').children().first().children().first().children().first().should('contain', 'Firstname')
    })


    // 6. filter() = seperate the elements based on condition

    it('filter() to retrive the element that matched a specific condition', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // children who have active class with Button-1 text
        cy.get('div[class="btn-group btn-group-toggle"]').children().filter(".active").should('have.text', "Button-1")
        // children who have active class with type attribute
        cy.get('div[class="btn-group btn-group-toggle"]').children().filter(".active").should('have.attr', 'type')

    })


    // 7. find() = Based on elements pattern we are going to find elements (like folders structure or step by steps)

    it('find() to retrive the element that have specific selector or specific', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // div parent in that find table(tagname) in that find tbody in that find tr in that find th in that on 1 index value have text lastname
        cy.get('div[class="thumbnail"]').find('table').find('tbody').find('tr').find('th').eq(1).should('have.text', 'Lastname')

    })


    // 8. nextAll() = [ applied on sibling ] in single parent from the specific child we got nextall childs

    it('nextAll() to get all the next sibling with a specific parent (DOM element)', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // from tea child we got nextall child which have 3 length
        cy.get(".traversal-drinks-list").contains('Tea').nextAll().should('have.length', '3')

    })


    // 9. nextUntil() = get all the sibling element between two defined element

    it('nextUntil() to get all the sibling element for the defined elements  ', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextUntil('ul').should('have.length', 4)                          // passed two elements not included

    })

    // 10. not() = unwanted element remove from the set

    it('not() to remove the element from the set of element', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-food-list').children().not('.list-header').should('have.length', '9')
    })


    // 11. Parent() = to get the parent element from DOM

    it('parent() to get the parent element from DOM', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.contains('Apple').parent().should('have.class', 'traversal-food-list')
    })


    // 12. Parents() = 

    it.only('parents() to get the parent element from DOM', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('thead').parents().should('match', 'table')                     // used tagname
    })


    // 13. preall() =

    // 14. prevUntil() =




})































// describe('Tranversing the DOM in cypress', () => {

//     // children who have 0 index
//     it('children() to get the Children element of the DOM', () => {
//         // tagName[attribute=value] // <h1 id = "hello">Text</h1>
//         cy.visit("https://recast.studio/")
//         cy.get('ul[id="menu-1-b0137a3"]').children().should('have.length', "4")
//         cy.get('ul[id="menu-1-b0137a3"]').children('li').eq(0).children().should('have.text','Home')
//     })

//      // children who have active class

//     it('children() to get the Children element of the DOM',()=>{
//         // tagName[attribute=value]
//         cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//         //cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children('.active').should('contain','Contact Us')
//         cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain','Contact Us')

//     })

//     //ancestor
//     //  children who is closest there parent by using closest() method

//     it('closest() to validate the closest ancestor of the element',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//         cy.get('.badge-light').closest('ul').should('have.class','list-group')
//         // number of child elements in ul list
//     })
//         // find children from parent by there index value by using eq() method

//     it('eq() to retrive the specific element in the list based on index',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//         cy.get('.traversal-drinks-list').children().eq(3).should('contain',"Esp")
//     })

//      // last children from parent by using last() method

//     it('last() to retrive the last element in the list',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//         cy.get('.traversal-drinks-list').children().last().should('contain',"Sugar")
//     })

//     // first children from parent by using first() method

//     it.only('first() to retrive the first element in the list',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//         cy.get('.traversal-drinks-list').children().first().should('contain',"Coffee")
//     })

// filter element who have active class and button-1 text by using filter method

// it('filter() to retrive the element that matched a specific condition',()=>{
//     cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//     cy.get('div[data-toggle="buttons"]').children().filter('.active').should('have.text',"Button-1")
//     cy.get('div[data-toggle="buttons"]').children().filter('.active').should('have.attr',"type")

// })


// element who have childrens and grand-childrens by using find method

// it('find() to retrive the element that have specific selector or specfic',()=>{
//     cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//     cy.get('.pagination.traversal-pagination').find('li').find('a').find('span').should('have.length','4')
//     cy.get('.pagination.traversal-pagination').find('li').find('a').should('have.length','7')
// })

// it('find() 2nd example to retrive the element that have specific selector or specfic',()=>{
//     cy.visit('https://www.espncricinfo.com/series/australia-in-bangladesh-2021-1270832/bangladesh-vs-australia-3rd-t20i-1270836/full-scorecard')
//     cy.get('.batsman').first().find('tbody').find('tr').should('have.length','21')

// })

// find no. of siblings from particular child by using nextAll() method

// it('nextAll() to get all the next sibling with a specfic parent (DOM element)',()=>{
//     cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//     cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length','3')

// it('nextUntil  to get all the sibling  elment for the defined elements',()=>{
//     cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//     cy.get('#veggie').nextUntil('ul').should('have.length','4')

// })


// it('.not to remove the element from the set of elements',()=>{
//     cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//     cy.get('.traversal-food-list').children().not('.list-header').should('have.length','9')

// })

// it('parent()  to get the parent element of DOM',()=>{
// cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
// cy.contains('Apple').parent().should('have.class','traversal-food-list')
// })

// it.only('parents()',()=>{
// cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
// cy.get('thead').parents().should('match','table') // tagName

// })

// it('preAll()',()=>{

// })

// it('prevUntil()',()=>{

// })

// it('siblings()',()=>{

// })




// })


