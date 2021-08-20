// // https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments

// // This article explains three different approaches to run your Cypress automation tests in different environments. Below are 3 different methods.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //  Method 1. Configuring Cypress To Run On Different Environments Using baseUrl in cypress.json

// //  STEP 1. Accessing baseUrl value from cypress.json

// describe('validate the access BaseUrl from cypress.json file', () => {

//     let url = Cypress.config().baseUrl

//     it('Example of Baseurl in 1st test case', () => {

//         //let url = Cypress.config().baseUrl     // accesing baseUrl from cypress.json file
//         cy.visit(url)                          // passing url value to cy.visit()
//     })

//     it('Example of Baseurl in 2nd test case', () => {

//         cy.visit(url)
//     })

//     it('Example of Baseurl in 3rd test case', () => {

//         cy.visit(url)
//     })


// })


//  Step 4: Use Cypress Command Line (aka Cypress CLI) to Pass baseUrl Dynamically

// * What happens when you pass the baseUrl in the Cypress command line?
// 1. When you run Cypress with the above command (with baseURL option), the baserUrlvalue inside the cypress.json will be ignored (or overridden).
// 2. The value specified for the baseUrl in the Cypress command line takes the priority and the same will be considered as baseUrl by Cypress.


// Run your Cypress tests on a staging environment, passing the staging environment URL:

// CommandSyntax = npx cypress run --config baseUrl="(RequiredUrl) "
// npx cypress run --config baseUrl="https://www.staging-website.com/"                       // its run headless mode

// npx cypress run --headed --config baseUrl="https://www.staging-website.com/"              // its run headed mode
// npx cypress run --headed --no-exit --config baseUrl="https://www.staging-website.com/"

// Run your Cypress tests on a production environment, passing the production environment URL:
// npx cypress run --config baseUrl="https://www.production-website.com/"

// by this way we can overwrite base url in cypress.json file wrt to environment  and perform all test cases again keeping as it is resource and other url


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Method 2: Setup Multiple Environments in Cypress With Separate Cypress Configuration Files for Each Environment

// Step 1: Create Your Own Cypress Config File in The Root Folder(where cypress installed) (Extension Should be .json)
// e.g. staging-config.json, production-config.json

// Step 2: Change Cypress baseUrl settings in the newly created Cypress configuration files
// e.g. { "extends": "./cypress.json",
    //   "baseUrl": "https://www.staging-website.com"
    // }


// Step 3: Create a Cypress Spec File and Use Cypress.config().baseUrl Command to Access the baseURL.(same as method 1)

// describe('Example of BaseUrl', () => {
//     it('Example of Baseurl', () => {
//         let url = Cypress.config().baseUrl
//         cy.visit(url)
//     })
// })


// Step 4: Run Your Cypress Tests on Multiple Environments Using Cypress Command-line aka Cypress CLI

// We have Cypress config files ready and we have the Cypress spec file, now we need to run our specs by specifying the Cypress --config-file option in the command line.

// Run your Cypress specs on a staging environment with the below command:

// CommandSyntax = npx cypress run --config-file (fileName)
// npx cypress run --config-file staging-config.json

// Run your Cypress specs on a production environment with the below command:
// npx cypress run --config-file production-config.json



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  Method 3: Run Your Cypress Tests in Multiple Environments With Cypress Environment Variable and Custom Utility Class

// Step 1: Create a Utility File  = From Project Folder Root > Navigate to cypress folder > open support folder and create 'utility.ts' file

// Step 2: Add Code to Return URL Based on Cypress Environment Variable Value ( write code in utility.js file and export it)

// Step 3: Create a Spec File and Use the Environment URL  ( write code in typescript.js file and import it)


// Step 4: Run the Cypress Test in The Command Line by Specifying the Cypress Environment Variable

// Run your Cypress test on the production environment using the below command:
// npx cypress run  --env ENV="production"


// Run your  Cypress test on the staging environment using the below command:
// npx cypress run  --env ENV="staging"


////////////////////////////////////////////////////////////////////////////////////////////////////////


// Alternatively, You can configure shortcuts to your Cypress project pacakge.json. 

// The example code:

// {
//     "scripts": {
//       "cy:run:prod":"cypress run  --env ENV=production"
//        "cy:run:stg":"cypress run  --env ENV=staging"
//     }
//   }

// If you want to run in production simply type in command line npm run cy:run:prod.



//////////////////////////////////////////////////////////////////////////////////////////////////////////




