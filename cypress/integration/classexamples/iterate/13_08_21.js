describe('Iterate over the element', () => {

    //     it('validate the elements in skincare',()=>{
    //         cy.visit('https://automationteststore.com/')
    //         cy.get("#categorymenu > nav > ul > li:nth-child(4) > a").click()
    //         cy.get("div[class='mt10 align_center']").find('a').each((el)=>{
    //             // cy.log(el.text())
    //             let array = ["Eyes","Face","Gift Ideas & Sets","Hands & Nails","Sun"]
    //             expect(array.indexOf(el.text())).to.be.greaterThan(-1)
    //         })
    //     })

    it('validate total score', () => {

        let sum = null
        let extra = null
        let total = null

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')
        cy.get('.batsman').first().find("td[class='font-weight-bold']").each((el, ind, arr) => {

            cy.log(el.text())
            sum = sum + Number(el.text())
            cy.log(sum)
//   made array of el and using for loop add all element text(number)
        }).then(() => {
            cy.log(sum)
            cy.get('.batsman').first().find("td[class='text-right font-weight-bold']").first().each((el) => {

                cy.log(el.text())
                extra = Number(el.text())
            })

        }).then(() => {
            cy.get('.batsman').first().find("td[class='text-right font-weight-bold']").eq(1).each((el) => {

                cy.log(el.text())
                total = Number(el.text())
                expect(total).to.be.eql(sum + extra)
            })

        })
    })


    it.only('validate total score', () => {

        let array = [ ]

        // let sum = null
        let n = null
        let extra = null
        let total = null

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')
        cy.get('.batsman').first().find("td[class='font-weight-bold']").each((el, ind, arr) => {

             n = Number(el.text())

             array.push(n)

            // cy.log(el.text())
            // sum = sum + Number(el.text())
            // cy.log(sum)
//   made array of el and using for loop add all element text(number)
        }).then(() => {
            //cy.log(sum)
            cy.get('.batsman').first().find("td[class='text-right font-weight-bold']").first().each((el) => {

                //cy.log(el.text())
                extra = Number(el.text())
                array.push(extra)
            })

        }).then(() => {
            cy.get('.batsman').first().find("td[class='text-right font-weight-bold']").eq(1).each((el) => {

                //cy.log(el.text())
                total = Number(el.text())
                array.push(total)
                //expect(total).to.be.eql(sum + extra)

            })

        })
    })



    it('validate no. of batsman whos score  greater than 50', () => {

        let array = []

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')
        cy.get('.batsman').first().find("td[class='font-weight-bold']").each((el, ind, arr) => {

            let n = Number(el.text())
            cy.log(n)

            //array.push(n)

            if (n > 50) {
                array.push(n)
            }

        }).then(() => {

            cy.log(array)
            expect(array.length).to.be.eql(2)
        })
    })

    it('validate no. of batsman whos score is equals to Zero', () => {

        let array = []

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')
        cy.get('.batsman').first().find("td[class='font-weight-bold']").each((el, ind, arr) => {

            let n = Number(el.text())
            cy.log(n)

            //array.push(n)

            if (n == 0) {
                array.push(n)
            }

        }).then(() => {

            cy.log(array)
            expect(array.length).to.be.eql(3)
        })
    })
})






















































// describe('Iterate over the element',()=>{

// //     it('validate title of skin care products',()=>{
// //         cy.visit('https://automationteststore.com/')
// //         cy.get('#categorymenu > nav > ul > li:nth-child(4) > a').click({force:true})
// //         cy.get('.mt10').find('a').each(function(el){
// //             let expectedArray = ["Eyes","Face","Gift Ideas & Sets","Hands & Nails","Sun"]
// //             expect(expectedArray.indexOf(el.text())).to.be.greaterThan(-1)    
// //         })

// //     })


// // specific player playing or not 
//         // total numbers of runs
//         // total numbers f extra runs
//         // how many players run more than 50
//         // total numbers of fours and total numbers of sixs
//         // player hits boundires/ sixs
//         // numbers of player score 0

// it.only('Verify the total score ',()=>{
//     cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')

//     let sum = 0
//     let extras = 0
//     let total = 0
//      cy.get('.batsman').first().find('td[class="font-weight-bold"]').each((el,index,arr)=>{
//         //cy.log(el.text())
//         sum = sum + Number(el.text())
//     }).then(()=>{
//         cy.log(sum)
//         cy.get('.batsman').first().find('tr[class= "extras"]').children().eq(2).then((el)=>{
//             extras = Number(el.text())
//         cy.get('.batsman').first().find('tfoot').find('td[class="text-right font-weight-bold"]').then((el)=>{
//             total = Number(el.text())
//             expect(total).to.eqls(sum+extras)
//         })

//         })


//     })
// })


// it ("total no of fours",()=>{

//     cy.visit("https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard")

//     let sum = 0

//          cy.get('.batsman').first().find('td[class="font-weight-bold"]').next().next().next().each((el,index,arr)=>{
//                 sum = sum + Number(el.text())

//     }).then(()=>{
//         cy.log(sum)
//         expect(sum).to.eqls(36)
    
//     })
// })



// it.only("players played more than 100 balls",()=>{

//     cy.visit("https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard")

//     let moreThan =[]
//     cy.get('.batsman').first().find('td[class="font-weight-bold"]').next().each((el,index,arr)=>{

//         if(Number(el.text()) > 100){
//             moreThan.push(Number(el.text()))
//         }
// }).then(()=>{
//         cy.log(moreThan)
//         expect(moreThan.length).to.eqls(4)
//     })
// })

// })




