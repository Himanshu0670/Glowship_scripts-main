     //cy.get('.mat-form-field').eq(2).click();
     // To get right input field address
/// <reference types="cypress" />
let rowsLength;
let i= 0
describe('Lead_Site', () => {
    let userdetails
    beforeEach(()=> {
        cy.fixture('UserLogin').then((para)=> {
        userdetails = para
        
        cy.visit('https://saas.test.glowsun.io/auth/login')
        cy.get('.mat-form-field-infix').type(userdetails.email)
        cy.get('.mat-button-wrapper > span').click()
        cy.get('#mat-input-1').type(userdetails.password)
        cy.get('.mat-button-wrapper').click() 
        cy.wait(1000) 
     })
    })

    
    before(() => {
        cy.task('readXlsx', { file: 'C:/Users/himan/Testing/Local_Test/cypress/fixtures/Lead_Site.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("C:/Users/himan/Testing/Local_Test/cypress/fixtures/lead.json", {rows})
    })
  })     
  it('Add lead', () => {
      cy.fixture('lead').then((data) => {
        console.log(data)
        //let i = 0;
        cy.get('#homeowner-nav > .nav-item > .mat-body-2').click() 
        cy.get('.header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('.mat-form-field.ng-tns-c82-28 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click() 
        cy.get('mat-option').contains(data.rows[i].salutation).click()  
        cy.get('#mat-select-14 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.get('mat-option').contains(data.rows[i].c_type).click()  
        cy.get('.mat-form-field.ng-tns-c82-32 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].fname)
        cy.get('.mat-form-field.ng-tns-c82-33 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].email)
        cy.get('.mat-form-field.ng-tns-c82-34 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].mobile)
        cy.get('.mat-form-field.ng-tns-c82-35 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].add_line1)
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].add_line2)
        cy.get('.mat-form-field.ng-tns-c82-37 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].city)
        cy.get('[fxlayoutalign="start end"] > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get("mat-option").contains(data.rows[i].state).click();
        cy.get('[fxlayoutalign="start end"]').find('#mat-input-9').type(data.rows[i].pincode)
      //Decendent //cy.get('[fxlayoutalign="start end"]').find('#mat-input-9').click().type('560063')
              
        cy.wait(2000)
        cy.get('.p-16.ng-untouched > :nth-child(1) > [fxlayout="row"]').click()
     //cy.get('#mat-option-58 > .mat-option-text > [fxlayout="column"] > [fxflex="40px"]').click() 
             
        cy.get('mat-option').contains(data.rows[i].assign).click()
        //cy.contains('CANCEL').click()
        cy.contains('SAVE').click() 
    })
})

   it('General site', () => {
       cy.fixture('lead').then((data) => {
        //let i = 0
        cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
        cy.get('.example-header > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type(data.rows[i].searchlead)
        cy.get('.mat-row > .cdk-column-phone').click() 
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click() 
        cy.wait(1000)
        cy.get('#mat-expansion-panel-header-0').click()
        cy.get('mat-radio-button').eq(1).click() 
        cy.get('.mat-form-field').eq(0).click().type(data.rows[i].monthly)
        cy.get('.mat-form-field').eq(2).click().type(data.rows[i].occupants)
        cy.get('.mat-form-field').eq(3).click().type(data.rows[i].roofarea)
        cy.get('.mat-form-field').eq(4).click().type(data.rows[i].bedroom)
        cy.get('.mat-form-field').eq(5).click().type(data.rows[i].sanction)
        cy.get('mat-radio-button').eq(4).click()
        // To select a radio button
        cy.get('mat-radio-button').eq(7).click()
        cy.get('mat-radio-button').eq(9).click()
        cy.get('.mat-checkbox-layout').eq(1).click()
        // To select a checkbox
        cy.get('.mat-checkbox-layout').eq(2).click()
        cy.get('.mat-select-value').eq(2).click()
        cy.get('mat-option').contains(data.rows[i].ac).click();
        cy.get('.mat-checkbox-layout').eq(5).click()
        cy.get('.mat-select-value').eq(3).click()
        cy.get('mat-option').contains(data.rows[i].water).click();
        cy.get('.mat-select-value').eq(4).click()
        cy.get('mat-option').contains(data.rows[i].hp).click();
        cy.get('.mr-28 > .mat-button-wrapper').click()
        cy.get('[type="submit"] > .mat-button-wrapper').click()
        
      })
    })

    it('Proposalcreate- Grid-tied', () => {
        cy.fixture('lead').then((data) => {
          cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
          cy.get('.example-header > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type(data.rows[i].searchlead)
          cy.get('.mat-row > .cdk-column-phone').click()
          cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
          cy.wait(5000)
          cy.get('.mat-radio-button').eq(3).click().click()
          cy.get('.mt-12 > .mat-focus-indicator > .mat-button-wrapper').click()
          cy.contains('CONFIRM').click()
          cy.wait(3000)
          cy.contains('NEXT').click()
          cy.wait(1000)
          //cy.get('.disable > .mat-button-wrapper').should('not.be.enabled')
          cy.get('mat-radio-button').eq(0).click()
          cy.get('mat-form-field').eq(0).type(data.rows[i].reference)
          cy.contains('Floor Level').click()
          cy.get('mat-option').contains(data.rows[i].floorlevel).click()
          cy.get('.enable > .mat-button-wrapper').should('not.be.disabled')
          //cy.contains('NEXT').click()
          cy.get('.enable > .mat-button-wrapper').click()
          cy.wait(2000)
          //STEP 3
          cy.get(':nth-child(2) > [fxlayout="row"] > .icon-container > .mat-icon').click()
          cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].editmargin)
          cy.contains('SAVE').click()
          cy.get(':nth-child(3) > [fxlayout="row"] > .icon-container > .mat-icon').click()
          cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].parter)
          cy.contains('SAVE').click()
          cy.get(':nth-child(5) > .icon-container > [fxflex="20px"] > .mat-icon').click()
          cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].taxes)
          cy.contains('SAVE').click()
          cy.get('.ng-star-inserted > .mat-icon').click()
          cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].liaisoning)
          cy.contains('SAVE').click()
          //Financing
          cy.get('[fxflex="45%"] > :nth-child(2) > [fxlayout="row"] > .mat-icon').click() 
          cy.get('.mat-slide-toggle-bar').click()
          cy.wait(1000)
          cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].downpayment)
          cy.get('.mat-form-field').eq(1).click().clear().type(data.rows[i].interest)
          //cy.get('.mat-form-field').eq(2).click().clear().type(data.rows[i].year)
          cy.get('.heading.ng-star-inserted > :nth-child(2) > .mat-icon').click()
          cy.get('.mat-checkbox-layout').eq(1).click()
          cy.contains('SAVE').click()
          /*cy.get(':nth-child(3) > .heading > :nth-child(2) > .mat-icon').click()
          cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].order)
          cy.get('.mat-form-field').eq(2).click().clear().type(data.rows[i].schedule)
          cy.get('.mat-form-field').eq(4).click().clear().type(data.rows[i].prior)
          cy.get('.mat-form-field').eq(6).click().clear().type(data.rows[i].commission)
          */
          cy.wait(2000)
          cy.contains('NEXT').click()

          //STEP 4
          cy.get(':nth-child(3) > .icon-container > .mat-icon').click()
          cy.get('.mat-slide-toggle-bar').click()
          cy.get('.mat-checkbox-layout').eq(1).click()
          cy.get('.mat-checkbox-layout').eq(2).click()
          cy.contains('SAVE')
          cy.get(':nth-child(4) > .icon-container > .mat-icon').click()
          cy.get('.mat-slide-toggle-bar').click()
          cy.get('.mat-checkbox-layout').eq(1).click()
          cy.contains('SAVE');
          cy.wait(1000)
          cy.get(':nth-child(5) > .icon-container > .mat-icon').click()
          cy.get('.mat-slide-toggle-bar').click()
          cy.contains('SAVE').click()
          //cy.get('.mat-primary.ng-star-inserted > .mat-button-wrapper').click()
          //cy.get('[mat-dialog-close=""] > .mat-button-wrapper').click()        
          //cy.get(':nth-child(4) > .mat-button-wrapper').click()
          //cy.wait(3000)  
          
          
          //Edit
          //cy.get(':nth-child(3) > .mat-button-wrapper').click()
          //cy.get('.mat-dialog-actions > :nth-child(1) > .mat-button-wrapper').click()
          //cy.wait(2000)
          //cy.contains('NEXT').click()


       })
    })
    it.only('Proposalcreate- Off-Grid (alternative)', () => {
      cy.fixture('lead').then((data) => {
        cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
        cy.get('.example-header > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type(data.rows[i].searchlead)
        cy.get('.mat-row > .cdk-column-phone').click()
        cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
        cy.wait(5000)
        cy.get('.mat-radio-label').eq(0).click().click()
        cy.get('.mt-12 > .ng-star-inserted > .mat-button-wrapper').click()
        //cy.get('More Options').click()
        cy.wait(3000)
        cy.get('.mat-radio-label').eq(6).click().click() 
        cy.contains('Select').click()
        cy.contains('CONFIRM').click()
        cy.wait(2000)
        cy.contains('NEXT').click() 
    //STEP 2
        cy.get('mat-radio-button').eq(0).click()
        cy.get('mat-form-field').eq(0).type(data.rows[i].reference)
        cy.get('.mat-form-field').eq(1).click() 
        cy.get('mat-option').contains(data.rows[i].floorlevel).click()
        cy.get('.enable > .mat-button-wrapper').should('not.be.disabled')
        cy.contains('NEXT').click()
        //cy.get('.enable > .mat-button-wrapper').click()
        cy.wait(2000)  
    //STEP 3        
        cy.get(':nth-child(2) > [fxlayout="row"] > .icon-container > .mat-icon').click()
        cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].editmargin)
        cy.contains('SAVE').click()
        cy.get(':nth-child(3) > [fxlayout="row"] > .icon-container > .mat-icon').click()
        cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].parter)
        cy.contains('SAVE').click()
        cy.get(':nth-child(5) > .icon-container > [fxflex="20px"] > .mat-icon').click()
        cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].taxes)
        cy.contains('SAVE').click()
        cy.wait(2000)
        //cy.get('.ng-star-inserted > .mat-icon').click()
        //cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].liaisoning)
        //cy.contains('SAVE').click()
        //Financing
        cy.get('[fxflex="45%"] > :nth-child(2) > [fxlayout="row"] > .mat-icon').click() 
        cy.get('.mat-slide-toggle-bar').click()
        cy.wait(1000)
        cy.get('.mat-form-field').eq(0).click().clear().type(data.rows[i].downpayment)
        cy.get('.mat-form-field').eq(1).click().clear().type(data.rows[i].interest)
        //cy.get('.mat-form-field').eq(2).click().clear().type(data.rows[i].year)
        cy.get('.heading.ng-star-inserted > :nth-child(2) > .mat-icon').click()
        cy.get('.mat-checkbox-layout').eq(1).click()
        cy.contains('SAVE').click()
        cy.wait(2000)
        cy.contains('NEXT').click()

      //STEP 4
        cy.get(':nth-child(3) > .icon-container > .mat-icon').click()
        cy.get('.mat-slide-toggle-bar').click()
        cy.get('.mat-checkbox-layout').eq(1).click()
        cy.get('.mat-checkbox-layout').eq(2).click()
        cy.contains('SAVE')
        cy.get(':nth-child(4) > .icon-container > .mat-icon').click()
        cy.get('.mat-slide-toggle-bar').click()
        cy.get('.mat-checkbox-layout').eq(1).click()
        cy.contains('SAVE');
        cy.wait(1000)
        cy.get(':nth-child(5) > .icon-container > .mat-icon').click()
        cy.get('.mat-slide-toggle-bar').click()
        cy.contains('SAVE').click()
        cy.get('.mat-primary.ng-star-inserted > .mat-button-wrapper').click()
        //cy.get('[mat-dialog-close=""] > .mat-button-wrapper').click()        
        //cy.get(':nth-child(4) > .mat-button-wrapper').click()
        //cy.wait(3000)  
         
      })
    })
})