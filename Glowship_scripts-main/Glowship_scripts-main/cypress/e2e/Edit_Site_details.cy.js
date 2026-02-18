/// <reference types="cypress" />
let rowsLength;
let i=0;
let a,b,c= 0;
describe('EditSite', () => {
    let userdetails
    beforeEach(()=> {
        cy.fixture('UserLogin').then((para)=> {
        userdetails = para
        
        cy.visit('https://saas.test.glowsun.io')
        cy.get('.mat-form-field-infix').type(userdetails.email)
        cy.get('.mat-button-wrapper > span').click()
        cy.get('#mat-input-1').type(userdetails.password)
        cy.get('.mat-button-wrapper').click() 
        cy.wait(2000) 
     })
    })
    before(() => {
        cy.task('readXlsx', { file: 'C:/Users/himan/Testing/Local_Test/cypress/fixtures/Edit_sitedetails.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("C:/Users/himan/Testing/Local_Test/cypress/fixtures/Edit_site.json", {rows})
    })
  }) 

it('General site', () => {
     cy.fixture('Edit_site').then((data) => {
         cy.wait(2000)
         cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
         cy.get('.example-header > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type(data.rows[i].searchlead)
         cy.get('.mat-row > .cdk-column-phone').click() 
         cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click() 
         cy.wait(1000)
         cy.contains('Edit').click()
    // To Edit Monthly Electricity Bill
         cy.get('.mat-expansion-panel-header').eq(0).click()
         cy.wait(1000)
         cy.get('.mat-form-field').eq(0).clear()
         cy.contains('Next').should('not.be.enabled')
         cy.get('body').click()
         cy.get('.mat-error').eq(0).should('have.text', ' Electricity bill is a required field ')
         
         a = data.rows[i].monthly.split(',')[0]
         b = data.rows[i].monthly.split(',')[1]
         cy.get('.mat-form-field').eq(0).type(a)
         cy.contains('Next').should('not.be.enabled')
         cy.get('.mat-error').eq(0).should('have.text', ' Electricity bill should be Greater than 500 ')
         cy.get('.mat-form-field').eq(0).clear().type(b)
         cy.contains('Next').should('be.enabled')
    // To Edit Occupants
         cy.get('.mat-form-field').eq(2).clear()
         cy.contains('Next').should('not.be.enabled')
         cy.get('body').click()
         cy.get('.mat-error').eq(0).should('have.text', ' No. of Occupants is a required field ')
         a = data.rows[i].occupants.split(',')[0]
         b = data.rows[i].occupants.split(',')[1]
         c = data.rows[i].occupants.split(',')[2]
         cy.get('.mat-form-field').eq(2).type(a)
         cy.contains('Next').should('not.be.enabled')
         cy.get('.mat-error').eq(0).should('have.text', ' Range (1-99) ')
         cy.get('.mat-form-field').eq(2).clear().type(b)
         cy.contains('Next').should('not.be.enabled')
         cy.get('.mat-error').eq(0).should('have.text', ' Range (1-99) ')
         cy.get('.mat-form-field').eq(2).clear().type(c)
         cy.contains('Next').should('be.enabled')
     
    // To Edit Roof Area
        cy.get('.mat-form-field').eq(3).clear()
        cy.contains('Next').should('not.be.enabled')
        cy.get('body').click()
        cy.get('.mat-error').eq(0).should('have.text', ' Range (120-99999) ')
        a = data.rows[i].roofarea.split(',')[0]
        b = data.rows[i].roofarea.split(',')[1]
        c = data.rows[i].roofarea.split(',')[2]
        cy.get('.mat-form-field').eq(3).type(a)
        cy.contains('Next').should('not.be.enabled')
        cy.get('.mat-error').eq(0).should('have.text', ' Range (120-99999) ')
        cy.get('.mat-form-field').eq(3).clear().type(b)
        cy.contains('Next').should('not.be.enabled')
        cy.get('.mat-error').eq(0).should('have.text', ' Range (120-99999) ')
        cy.get('.mat-form-field').eq(3).clear().type(c)
        cy.contains('Next').should('be.enabled')

    // To Edit bedroom
        cy.get('.mat-form-field').eq(4).clear()
        cy.contains('Next').should('be.enabled')
        cy.get('body').click()
        a = data.rows[i].bedroom.split(',')[0]
        b = data.rows[i].bedroom.split(',')[1]
        cy.get('.mat-form-field').eq(4).type(a)
        cy.contains('Next').should('not.be.enabled')
        cy.get('.mat-error').eq(0).should('have.text', ' Range (0-9) ')
        cy.get('.mat-form-field').eq(4).clear().type(b)
        cy.contains('Next').should('be.enabled')
    // To Edit Sanctioned
        cy.get('.mat-form-field').eq(5).clear()
        cy.contains('Next').should('be.enabled')
        cy.get('body').click()
        a = data.rows[i].sanction.split(',')[0]
        b = data.rows[i].sanction.split(',')[1]
        c = data.rows[i].sanction.split(',')[2]
        cy.get('.mat-form-field').eq(5).type(a)
        cy.contains('Next').should('not.be.enabled')
        cy.get('.mat-error').eq(0).should('have.text', ' Sanctioned Load Should be between 1-30 ')
        cy.get('.mat-form-field').eq(5).clear().type(b)
        cy.contains('Next').should('not.be.enabled')
        cy.get('.mat-error').eq(0).should('have.text', ' Sanctioned Load Should be between 1-30 ')
        cy.get('.mat-form-field').eq(5).clear().type(c)
        cy.contains('Next').should('be.enabled')

      // To uncheck all the checkboxes on the page 
        cy.get(':checkbox').uncheck({force: true})
        
    // To Edit Regularly run appliances
        let r,o,p =0;
        a = data.rows[i].appliances.split(',')[0]
        b = data.rows[i].appliances.split(',')[1]
        c = data.rows[i].appliances.split(',')[2]
        r = data.rows[i].qt.split(',')[0]
        o = data.rows[i].qt.split(',')[1]
        p = data.rows[i].qt.split(',')[2]
        cy.get('.mat-checkbox-layout').contains(a).click()
        cy.get('.mat-select').eq(1).click()
        cy.get('.mat-option').contains(r).click()
        cy.wait(1000)
        cy.get('.mat-checkbox-layout').contains(b).click()
        cy.get('.mat-select').eq(2).click()
        cy.get('.mat-option').contains(o).click()
        cy.get('.mat-checkbox-layout').contains(c).click()
        cy.get('.mat-select').eq(3).click()
        cy.get('.mat-option').contains(p).click()
        cy.contains('Next').click()
        //cy.get('[type="submit"] > .mat-button-wrapper').click()
      })
  })

})