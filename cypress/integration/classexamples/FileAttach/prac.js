// topic - uploading file in cypress.

// pre-requizites = for uploading file we have to add plugin in our command.js file.
// get this plugin from 'https://www.npmjs.com/package/cypress-file-upload'this url  and store import 'cypress-file-upload'; this plugin in command.js file

// and run 'npm install --save-dev cypress-file-upload' this command in our terminal.

// the file which we want to upload ,we have to strore it in fixture folder first.
// .attachFile('filename') is a method to upload file.

describe('upload a file in cypress testcases', function () {

    it('upoload a basic file by stroring it in a variable', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const fixturePath = 'abc.png'    // we have to store the file in fixture folder which we want to upload using cypress.
        cy.get('#fileUpload').attachFile(fixturePath)  // here we pass a variable in which we store a file that we want upload
        cy.get('.filename').should('have.text', fixturePath)
    })

    it('upoload a basic file directly by its fixture file name', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')

        cy.get('#fileUpload').attachFile('abc.png')  // pass a fixture file name in string that we want upload
        cy.get('.filename').should('have.text', 'abc.png')
    })

    it('upoload a basic file and validate its alert', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        const fixturePath = 'abc.png'
        cy.get('#myFile').attachFile(fixturePath)
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')   // text validate by equal method
            // expect(str).to.includes('Your file has now been uploaded!')  // validation by includes mathod
            // expect(str).to.includes('now been uploaded!')  // includes method can validate substring is well

        })
    })


    it('without file upload we are going to submit it and we have to validate its alert', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        const fixturePath = 'abc.png'
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')   // text validate

        })
    })

    it('upoloading multiple files', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const fixturePath = 'abc.png'
        const fixturePath2 = 'abc.png'
        cy.get('#igUpload1_ibb_fp')
            .attachFile([fixturePath, fixturePath2]); // .attachFile method requires only one parameter but we have to upload multiple files thats why we pass arrey of mutiple files
        // cy.get('#igUpload1_ibb_fp').attachFile(fixturePath2)

    })

    it('second way of upoloading multiple files using arrey', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const filearray = ['abc.png', 'abc.png', 'abc.png']
        //  const fixturePath2 = 'abc.png'
        cy.get('#igUpload1_ibb_fp')
            .attachFile(filearray) // .attachFile method requires only one parameter but we have to upload multiple files thats why we pass arrey of mutiple files
        // cy.get('#igUpload1_ibb_fp').attachFile(fixturePath2)

    })



    it('changing the file name of single file while uploading ', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const fixturePath = 'abc.png'
        cy.get('#igUpload1_ibb_fp')
            .attachFile({ filePath: fixturePath, fileName: 'cde.png' })  // remember this line


    })

    it('first way of changing the multiple files name while uploading', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const filearray = ['abc.png', 'abc.png', 'abc.png']

        cy.get('#igUpload1_ibb_fp').then((el) => {
            for (let i = 0; i < filearray.length; i++) {
                (cy.get('#igUpload1_ibb_fp')).attachFile({ filePath: filearray[i], fileName: 'swapnil.png' })
            }

        })



    })
    it('second way of changing the multiple files name using filter method while uploading', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        const filearray = ['abc.png', 'abc.png', 'abc.png']

        cy.get('#igUpload1_ibb_fp').then(() => {
            filearray.filter((el, index, arrey) => {
               return (cy.get('#igUpload1_ibb_fp')).attachFile({ filePath: el, fileName: 'swapnil.png' })
            })



        })



    })


})