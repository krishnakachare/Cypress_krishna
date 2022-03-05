describe("Flipkart", () => {
    // it('Search mobiles on flipkart which have cost upto 10000 rs', () => {
    //     let cost = 10000
    //     let arr = []
    //     cy.intercept({
    //         method: 'POST',
    //         url: 'https://collector-pxgnttli3a.px-cloud.net/api/v2/collector'
    //     }).as('POST')
    //     cy.visit("https://www.flipkart.com/")
    //     cy.wait('@POST')
    //     cy.get('input[type="text"]').type('mobiles').type('{enter}')
    //     cy.wait('@POST')
    //     cy.get('select[class="_2YxCDZ"]').last().select(String(cost))
    //     cy.wait('@POST')
    //     cy.wait(3000)
    //     cy.get('._30jeq3._1_WHN1').each((el) => {
    //         // cy.log(el.text())
    //         arr.push(el.text().slice(1))
    //     }).then(() => {
    //         for (let j = 0; j < arr.length; j++) {
    //             let str = ''
    //             for (let i = 0; i < arr[j].length; i++) {
    //                 if (arr[j][i] == ',') {
    //                 } else {
    //                     str = (str) + arr[j][i]
    //                 }
    //             }
    //             arr[j] = Number(str)
    //         }
    //         for (let k of arr) {
    //             if (!(k <= cost)) {
    //                 cy.log('Test Case FAIL')
    //                 break;
    //             }
    //         }
    //     })
    //     cy.log(arr)
    // })


    // it.only('Search mobiles on flipkart which have cost upto 10000 rs', () => {
    //     let cost = 10000
    //     let arr = []
    //     cy.visit("https://www.flipkart.com/")
    //     cy.get('input[type="text"]').type('mobiles').type('{enter}')
    //     cy.wait(3000)
    //     cy.get('select[class="_2YxCDZ"]').last().select(String(cost))
    //     cy.wait(3000)
    //     cy.get('._30jeq3._1_WHN1').each((el) => {
    //         // cy.log(el.text())
    //         arr.push(el.text().slice(1))
    //     }).then(() => {
    //         for (let j = 0; j < arr.length; j++) {
    //             let str = ''
    //             for (let i = 0; i < arr[j].length; i++) {
    //                 if (arr[j][i] == ',') {
    //                 } else {
    //                     str = (str) + arr[j][i]
    //                 }
    //             }
    //             arr[j] = Number(str)
    //         }
    //         for (let k of arr) {
    //             if (!(k <= cost)) {
    //                 cy.log('Test Case FAIL')
    //                 break;
    //             }
    //         }
    //     })
    //     cy.log(arr)
    // })

    // Refactoring

    describe('validate flipcart website', () => {
        it('Search mobiles on flipkart which have cost upto 10000 rs', () => {
            let cost = 10000
            cy.visit("https://www.flipkart.com/")
            cy.get('input[type="text"]').type('mobiles').type('{enter}')
            cy.wait(3000)
            cy.get('select[class="_2YxCDZ"]').last().select(String(cost))
            cy.wait(3000)
            cy.get('._30jeq3._1_WHN1').each((el) => {
                cy.wrap(Number(el.text().replace(/₹|,/gi, ""))).should('be.lte', cost)
            })
        })
    })






})