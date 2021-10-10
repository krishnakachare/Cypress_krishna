/// <reference types = "Cypress"/>
import login from "../POM/class/page.spec.js"
describe('upload a file in cypress testcases', function () {

    it('upoload a basic file', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const fixturePath = 'abc.png'
        cy.get('#fileUpload').attachFile(fixturePath)
    })

    it('upoload a basic file 2', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        const fixturePath = 'abc.png'
        cy.get('#myFile').attachFile(fixturePath)
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')   // text validate

        })
    })

    it('upoload a basic file 2', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        const fixturePath = 'abc.png'
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')   // text validate

        })
    })

    it('upoload a basic file 3', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const fixturePath = 'abc.png'
        const fixturePath2 = 'abc.png'
        cy.get('#igUpload1_ibb_fp')
            .attachFile(fixturePath)
            .attachFile(fixturePath2)

    })


    it('changing the file name while uploading', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const fixturePath = 'abc.png'
        cy.get('#igUpload1_ibb_fp')
            .attachFile({ filePath: fixturePath, fileName: 'cde.png' })


    })


    it('changing the file name while uploading', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const fixturePath = 'abc.png'
        cy.get('#igUpload1_ibb_fp')
            .attachFile([fixturePath, fixturePath])

    })

    it.only("login functionality", () => {
      
      
        let log = new login
        log.visit("http://www.webdriveruniversity.com/File-Upload/index.html")
      
    })

})











































// describe('upload a file in cypress testcases',function(){

//     it('upoload a basic file',()=>{
//         cy.visit('http://automationpractice.com/index.php?controller=contact')
//         const fixturePath = 'abc.png'
//         cy.get('#fileUpload').attachFile(fixturePath)
//     })

//     it('upoload a basic file 2',()=>{
//         cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
//         const fixturePath = 'abc.png'
//         cy.get('#myFile').attachFile(fixturePath)
//         cy.get('#submit-button').click()
//             cy.on('window:alert',(str)=>{
//             expect(str).to.equal('Your file has now been uploaded!')   // text validate

//         })  
//     })

//     it('upoload a basic file 2',()=>{
//         cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
//         const fixturePath = 'abc.png'
//         cy.get('#submit-button').click()
//             cy.on('window:alert',(str)=>{
//             expect(str).to.equal('You need to select a file to upload!')   // text validate

//         })  
//     })

//     it('upoload a basic file 3',()=>{
//         cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
//         const fixturePath = 'abc.png'
//         const fixturePath2 = 'abc.png'
//         cy.get('#igUpload1_ibb_fp')
//         .attachFile(fixturePath)
//         .attachFile(fixturePath2)
    
//     })


//     it.only('changing the file name while uploading',()=>{
//         cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
//         const fixturePath = 'abc.png'
//         cy.get('#igUpload1_ibb_fp')
//         .attachFile({ filePath:fixturePath, fileName: 'cde.png'})
        
    
//     })


//     it.only('changing the file name while uploading',()=>{
//         cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
//         const fixturePath = 'abc.png'
//         cy.get('#igUpload1_ibb_fp')
//         .attachFile([fixturePath,fixturePath])
        
    
//     })


// })