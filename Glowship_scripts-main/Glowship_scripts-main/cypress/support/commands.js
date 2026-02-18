
import 'cypress-file-upload';
import 'cypress-wait-until';
import { vars } from '../e2e/Web_Calculator/constant'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("paraXlsx", (inputFile) => {
    return cy.task('paraXlsx', { filePath: inputFile })
});

Cypress.Commands.add('firstcon', (text) => {
    cy.get('.mat-snack-bar-container').then(($val) => {
        vars.logdata.push($val.text(),'------------------------------------Condition completed------------------------------------------------------------')
        cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
        cy.reload().wait(2000)
        
    })

});
//Strat conditional function
Cypress.Commands.add('start', (text) => {
    let item1, item2;
    cy.document().then(($doc) => {
        item1 = $doc.querySelectorAll('.mat-headline').length;
        console.log(item1)
        if (item1 == 35) {
            cy.get('.mat-headline').eq(13).then(($val) => {
                vars.logdata.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
            })
            cy.get('.mat-headline').eq(14).then(($val) => {
                vars.logdata.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
            })
            cy.contains('Grid-tied System').click().wait(1000)
            cy.document().then(($doc) => {
                item2 = $doc.querySelectorAll('.mat-display-1').length;
                console.log(item2)

                if (item2 == 11) {
                    cy.get('.mat-display-1').eq(1).then(($val) => {
                        vars.logdata.push($val.text())
                        cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
                    })
                    cy.get('.mat-display-1').eq(2).then(($val) => {
                        vars.logdata.push($val.text(),'------------------------------------Condition completed------------------------------------------------------------')
                        cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
                        cy.go('back');
                        //These lines are used to clear sessionStorage.            
                        cy.window().then((win) => {
                            win.sessionStorage.clear()
                        })
                    })
                }
                else (
                    cy.get('.mat-display-1').eq(1).then(($val) => {
                        vars.logdata.push($val.text(),'------------------------------------Condition completed------------------------------------------------------------')
                        cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
                        cy.go('back');
                        cy.window().then((win) => {
                            win.sessionStorage.clear()
                        })
                    })
                )
            })
        }

        else (
            cy.get('.mat-headline').eq(3).then(($val) => {
                vars.logdata.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
                cy.contains('Grid-tied System').click()
                cy.document().then(($doc) => {
                    item2 = $doc.querySelectorAll('.mat-display-1').length;
                    console.log(item2)    
                if (item2 == 11) {
                    cy.get('.mat-display-1').eq(1).then(($val) => {
                        vars.logdata.push($val.text())
                        cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
                    })
                    cy.get('.mat-display-1').eq(2).then(($val) => {
                        vars.logdata.push($val.text(),'------------------------------------Condition completed------------------------------------------------------------')
                        cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
                        cy.go('back');
                        cy.window().then((win) => {
                            win.sessionStorage.clear()
                        })
                    })
                }
                else (
                    cy.get('.mat-display-1').eq(1).then(($val) => {
                        vars.logdata.push($val.text(),'------------------------------------Condition completed------------------------------------------------------------')
                        cy.writeFile('cypress/fixtures/Scriptdata/tpsdev3_3.json', vars.logdata)
                        cy.go('back');
                        cy.window().then((win) => {
                            win.sessionStorage.clear()
                        })
                    })
                )
            })
        })
        )
    })
})
