/// <reference types ="cypress" />

describe('glowsun test', function() {

       
 
    // To press the continue button - 
    //cy.get('#continuebtn').click();  
    
    //To run a specific script in multiple scripts
    //specify.only('create proposal for LEAD 1'); { 
    
      it.skip('create proposal for LEAD 1', () => {
        cy.visit('https://saas.test.glowsun.io/auth/login')
        cy.get('.mat-form-field-infix').type('sushant@thelattice.in{enter}')
        cy.get('#mat-input-1').type('password{enter}')
        cy.wait(1000)
        cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
        cy.get('#mat-input-2').click().type('Himanshu')
        cy.get(':nth-child(9) > .cdk-column-phone').click()
        cy.wait(2000) 
        cy.get(':nth-child(3) > .mat-button-wrapper').click() 
        cy.get('#mat-select-12 > .mat-select-trigger > .mat-select-arrow-wrapper').click() 
        cy.get('#mat-option-29 > .mat-option-text').click() 
        cy.get('#mat-select-14 > .mat-select-trigger > .mat-select-arrow-wrapper').click() 
        cy.get('#mat-option-39 > .mat-option-text').click()
        cy.get('#mat-input-4').click().clear().type('himan@thelattice.in')
        cy.get('.mat-accent > .mat-button-wrapper').click()   
      });
    
      specify('create proposal for LEAD 2', () =>  {
        cy.visit('https://saas.test.glowsun.io/auth/login')
        cy.get('.mat-form-field-infix').type('sushant@thelattice.in{enter}')
        cy.get('#mat-input-1').type('password{enter}')
        cy.wait(2000)
        cy.get('#account-nav > .nav-item').click()
        cy.get(':nth-child(6) > .cdk-column-phone > a').click() 
        cy.get(':nth-child(3) > .mat-button-wrapper').click() 
        cy.get('#mat-input-14').click().clear().type('Rajan')
        cy.get('#mat-select-28 > .mat-select-trigger > .mat-select-arrow-wrapper').click() 
        cy.get('#mat-option-101 > .mat-option-text').click() 
        cy.get('#mat-select-30 > .mat-select-trigger > .mat-select-arrow-wrapper').click() 
        cy.get('#mat-option-107 > .mat-option-text').click() 
        cy.get('#mat-input-15').click().clear().type('rajan121@gmail.in')
        cy.get('.mat-accent > .mat-button-wrapper').click()   
      });
      
      it.skip('create proposal for LEAD 3',() => {
        cy.visit('https://saas.test.glowsun.io/auth/login')
        cy.get('.mat-form-field-infix').type('sushant@thelattice.in{enter}')
        cy.get('#mat-input-1').type('password{enter}')
        cy.get('#homeowner-nav > .nav-item > .mat-body-2')
        cy.get('.header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() 
        cy.get('#mat-select-44 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click() 
        cy.get('#mat-option-179 > .mat-option-text').click() 
        cy.get('#mat-input-25').click().type('Jyoti')
        cy.get('#mat-select-46 > .mat-select-trigger > .mat-select-arrow-wrapper').click() 
        cy.get('#mat-option-183 > .mat-option-text').click() 
        cy.get('#mat-input-27').click().type('8989898998')
        cy.get('#mat-input-26').click().type('jyoti821@gmail.in')
        cy.get('#mat-input-32').click().type('Himanshu')
        cy.get('.mat-option-text').click() 
        cy.get('#mat-input-32').click()      
        cy.get('#mat-input-30').click().type('Delhi')
        cy.get('#mat-select-48 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.get('#mat-option-194 > .mat-option-text').click()  
        cy.get('[fxlayoutalign="start end"]').find('#mat-input-31').click().type('110010')
        cy.wait(2000)  
      }); 

            //Next line is commented because stop to save a new lead 
            //cy.get('.mat-accent').click() 
            //cy.get('#mat-option-194 > .mat-option-text').click() 
            //cy.get('#mat-input-29').click()
            //cy.get('[style="padding-top: 2px; background-color: white; color: #f58220; border-style: solid; border-width: 1px; border-color: #f58220;"]').click()
            //cy.get('[style="padding-top: 2px; background-color: white; color: #f58220; border-style: solid; border-width: 1px; border-color: #f58220;"]').click()
            //cy.contains('Cancel').click()
            // To set the defualt timeout when any error may be occur in script
            //cy.get('[fxlayoutalign="start end"]',{timeout:7000}).click().type('251002') 
            
   }); 

