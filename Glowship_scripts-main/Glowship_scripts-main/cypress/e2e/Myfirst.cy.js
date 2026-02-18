/// <reference types ="cypress" />


it('glowsun test', function() {

    cy.visit('https://saas.test.glowsun.io/auth/login')
    cy.get('.mat-form-field-infix').type('sushant@thelattice.in{enter}')
 
    // To press the continue button - 
    //cy.get('#continuebtn').click();  
    cy.get('#mat-input-1').type('password{enter}')
    cy.get('#inventory-pricing-nav > .nav-item > .mat-body-2').click()
    cy.get('[routerlink="solar-panels-list"] > span').click()
    cy.get(':nth-child(1) > #price_column > #edit_icon').click() 
    //  To clear the text on a textfield
    // .clear()
    cy.get('.mat-dialog-content > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').clear().type('3333')
    cy.wait(1000) 
    cy.get('.savebtn > .mat-button-wrapper > span').click()  
    cy.wait(3000)
    cy.get(':nth-child(1) > #rs_column > span > #close_icon').click() 
    cy.get('.btn2 > .mat-button-wrapper').click() 
    cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
    cy.wait(1000) 
    cy.get('.btn2 > .mat-button-wrapper').click() 
    //cy.get('.mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click() 
    cy.get('#mat-input-5').click() 
    cy.get('#mat-input-5').type('Emmvee Solar')
    cy.wait(2000)
    cy.get('#mat-input-5').clear().type('335')
    cy.wait(1000)
    cy.get('#mat-input-5').clear().type('6722')
    cy.wait(1000)
    cy.get('#mat-input-5').clear().type('10')
    cy.wait(1000)
    cy.get('#mat-input-5').clear()
    cy.get('.cdk-column-panel_brand > .mat-sort-header-container > .mat-sort-header-arrow > .mat-sort-header-indicator > .mat-sort-header-pointer-right').click() 
    cy.wait(3000)
    cy.get('.cdk-column-panel_series > .mat-sort-header-container > .mat-sort-header-arrow > .mat-sort-header-stem').click() 
    cy.get('.header-container > div > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() 

} )