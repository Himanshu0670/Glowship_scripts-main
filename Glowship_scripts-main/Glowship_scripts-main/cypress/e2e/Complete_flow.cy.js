/// <reference types="cypress" />

describe('glowsun test', function() {
      beforeEach(() => {
            cy.visit('https://saas.test.glowsun.io/auth/login')
            cy.get('.mat-form-field-infix').type('himanshu@thelattice.in{enter}')
            cy.get('#mat-input-1').type('password{enter}')
            cy.wait(1000)
      })    

      specify('CREATE LEAD', () => {
            cy.get('#homeowner-nav > .nav-item > .mat-body-2').click() 
// Add New lead working start here 
          
            cy.get('.header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() 
            cy.get('#mat-select-value-13 > .mat-select-placeholder').click()
            cy.get('#mat-option-28 > .mat-option-text').click() 
            cy.get('#mat-select-14 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
            cy.get('#mat-option-37 > .mat-option-text').click()
            cy.get('#mat-input-3').click().type('Kumar Lokesh Rahul')
            cy.get('#mat-input-4').click().type('rahulKL6751@outlook.in')
            cy.get('#mat-input-5').click().type(5646646767)
            cy.get('#mat-input-6').click().type('A F Station Yelahanka')
            cy.get('#mat-input-7').click().type('Karnataka,Bangalore')
            cy.get('#mat-input-8').click().type('Bangalore')
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-45 > .mat-option-text').click()
            cy.get('#mat-input-9').click().type(560012)
      //Decendent //cy.get('[fxlayoutalign="start end"]').find('#mat-input-9').click().type('560063')
              
            cy.wait(2000)
            cy.get('#mat-input-10').click()
            //cy.get('#mat-option-58 > .mat-option-text > [fxlayout="column"] > [fxflex="40px"]').click() 
             
            cy.contains('Aman').click()
            cy.contains('CANCEL').click()
      })

         specify.only('CREATE PROPOSAL FOR EXISTING LEAD', () => {
               cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
               cy.get('.example-header > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('Anjali')
               cy.get('a').click().wait(2000)
               cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
               cy.wait(5000)
               //cy.get('#mat-radio-52 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click(2)
               cy.contains('Off-grid').click().click()
               //cy.contains('More Options').click()
               // More options only show when this script is use for the first time for that lead
               // Second time 'More Options' is not display 
               cy.wait(5000)
               cy.contains('Options 4').click().click()
               cy.get('[fxlayoutalign="start stretch"] > .ng-untouched > .mt-12 > .mr-12').click()
               cy.get('.mt-32 > .glow-yellow-bg').click()
               cy.wait(1000)
               cy.get('.mat-primary > .mat-button-wrapper').click()
               cy.get('#mat-radio-13 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click() 
               cy.get('#mat-input-13').click().type('##00121$$789')
               cy.get('#mat-select-value-39').click() 
               cy.get('#mat-option-97 > .mat-option-text').click()
               cy.get('.enable > .mat-button-wrapper').click()
               cy.get(':nth-child(2) > [fxlayout="row"] > .icon-container > .mat-icon').click()
               cy.get('#mat-input-15').click().clear().type(4.56)
               cy.get('.buttonActive > .mat-button-wrapper').click()
               cy.get('.pricing-container > :nth-child(2) > [fxlayout="row"] > .mat-icon').click()
               cy.get('.mat-slide-toggle-thumb').click() 
               cy.get('#mat-input-16').clear().type(21)
               cy.get('#mat-input-17').clear().type(6.65)
               //cy.get('.mat-form-field-invalid > .mat-form-field-wrapper > .mat-form-field-flex').clear().type(3)
               cy.get('.heading.ng-star-inserted > :nth-child(2) > .mat-icon').click()
               cy.wait(1000)
               cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
               cy.get('.enable > .mat-button-wrapper').click()
               cy.get(':nth-child(3) > .mat-button-wrapper').click() 
               cy.get(':nth-child(4) > .icon-container > .mat-icon').click()
               cy.get('.mat-slide-toggle-thumb').click()
               cy.get('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
               cy.get('[style="font-size: 14px; background-color: rgb(25, 104, 179); color: white; margin-right: 20px;"] > .mat-button-wrapper').click()
               cy.get('.mat-primary.ng-star-inserted').click()
               cy.get('.mat-dialog-actions > [cdkfocusinitial=""]').click()
            //cy.get('[mat-dialog-close=""] > .mat-button-wrapper').click()
            //To Generate a Proposal
         
       })
       
       specify('CREATE USER', () => {

            cy.get('#users-nav > .nav-item > .mat-body-2').click()
            cy.get('.mat-accent > .mat-button-wrapper').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-8 > .mat-option-text').click()
            cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
            cy.get('#mat-input-3').click().type('Raju Srivastav')
            cy.get('#mat-input-4').click().type(7878787878)
            cy.get('#mat-input-5').click().type('raju889@gmail.com')
            cy.get('.mat-checkbox-inner-container').click()
            cy.get('#mat-input-6').click().type('PJTSAU Agricultural College, Palem')
            cy.get('#mat-input-7').click().type('Mahbubnagar')
            cy.get('#mat-input-9').click().type('Mahbubnagar (Telangana)')
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-22 > .mat-option-text').click()
            cy.get('#mat-input-10').click().type(509381)
            cy.wait(1000)
            cy.get('[style="margin-right: 10px;"] > .mat-button-wrapper').click() // CANCEL  
            //cy.get('.mat-accent > .mat-button-wrapper').click() // CREATE
            cy.log('Success');         
      }) 
})      
