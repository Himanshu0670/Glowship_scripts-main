/// <reference types="cypress" />

// To use Email & Password in a single script
/*it('glowsun test', function() {
          cy.visit('https://saas.test.glowsun.io/auth/login')
          cy.fixture('UserLogin ').then((user)=> {
          cy.get('.mat-form-field-infix').type(user.email)
          cy.get('.mat-button-wrapper > span').click()
          cy.get('#mat-input-1').type(user.password)
          cy.get('.mat-button-wrapper').click() 
          cy.wait(1000)
    })
})/*/

//To use Email & Password in multiple scripts using beforeEach function
describe ('Login',()=> {

let userdetails
beforeEach(()=> {
    cy.fixture('UserLogin').then((para)=> {
        userdetails = para
    })
})

     it('glowsun test', function() {
         cy.visit('https://saas.test.glowsun.io/auth/login')
         cy.get('.mat-form-field-infix').type(userdetails.email)
         cy.get('.mat-button-wrapper > span').click()
         cy.get('#mat-input-1').type(userdetails.password)
         cy.get('.mat-button-wrapper').click() 
         cy.wait(1000)
       })
})



