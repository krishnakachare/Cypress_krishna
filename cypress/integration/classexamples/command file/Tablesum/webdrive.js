describe('validate table sum', () => {

    // it('table sum using code utilization', () => {
    // let sum = 0
    // let sumx = 159
    // let regex = /[0-9]/

    // cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

     //cy.get('#t01').find('tbody').find('tr').find('td').then((el, ind, array) => {
    //     cy.get(el).each((el) => {
    //         if (Number(el.text())) {
    //             sum = sum + Number(el.text())
    //         }
    //         //cy.log(sum)
    //     })
    //-----------------------------------------------------------------------------------   
    // cy.get('#t01').find('tbody').find('tr').find('td').each((el, ind, array) => {
    // cy.get(el).then((el) => {
    //     if (regex.test(Number(el.text()))) {                     // Number(el.text())
    //         sum = sum + Number(el.text())
    //     }
    //     cy.log(sum)
    //     console.log(sum)
    // })

    //-----------------------------------------------------------------------------------------------

    //cy.get('#t01').find('tbody').find('tr').find('td').each((el, ind, array) => {

    // if (regex.test(Number(el.text()))) {                     // Number(el.text())  when 0 its false
    //     sum = sum + Number(el.text())                        // .each(()=>{})    ----- when we want to convert elements text in NUMBER
    // }
    // cy.log(sum)
    // console.log(sum)

    //     }).then(function () {
    //         expect(sum).to.eqls(sumx)
    //     })
    // })




    it('table sum',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.tablesum(1,159)
        cy.tablesum(2,163)
    })

})