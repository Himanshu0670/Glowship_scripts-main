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
        cy.wait(2000) 
     })
    })
    before(() => {
        cy.task('readXlsx', { file: 'C:/Users/himan/Testing/Local_Test/cypress/fixtures/Edit_lead.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("C:/Users/himan/Testing/Local_Test/cypress/fixtures/Editlead.json", {rows})
    })
  }) 
  it.only('Edit_Lead Deatils', () => {
    cy.fixture('Editlead').then((data) => {
      let  a,b,c= 0
        cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
        cy.get('.example-header > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type(data.rows[i].searchlead)   
        cy.get('.mat-row > .cdk-column-phone').click()
        cy.get(':nth-child(3) > .mat-button-wrapper').click()
        cy.get('.mat-select-value').eq(0).click()
        cy.get('mat-option').contains(data.rows[i].salu).click()
        cy.get('.mat-select-value').eq(1).click()
        cy.get('mat-option').contains(data.rows[i].c_type).click()
        cy.get('.mat-form-field').eq(2).clear()
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
        cy.get('.mat-form-field').eq(2).type(data.rows[i].fname)
        cy.get('.mat-form-field').eq(3).clear().type(data.rows[i].email)
        cy.get('.mat-form-field').eq(4).clear()
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
        //cy.get('.mat-form-field').eq(4).type(data.rows[i].mobile)
        a = data.rows[i].mobile.split(',')[0]
        b = data.rows[i].mobile.split(',')[1]
        cy.get('.mat-form-field').eq(4).type(a)
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
        cy.get('.mat-form-field').eq(4).clear().type(b)
        //cy.get('.mat-form-field').eq(4).should('contain','number')
        cy.get('.mat-form-field').eq(5).clear().type(data.rows[i].add_line1)
        cy.get('.mat-form-field').eq(6).clear().type(data.rows[i].add_line2)
        cy.get('.mat-form-field').eq(7).clear().type(data.rows[i].city)
        cy.get('.mat-select-value').eq(2).click()
        cy.get('.mat-option').contains(data.rows[i].state).click() 
        cy.get('.mat-form-field').eq(9).clear()
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
        a = data.rows[i].pincode.split(',')[0]
        b = data.rows[i].pincode.split(',')[1]
        c = data.rows[i].pincode.split(',')[2]
        //cy.get('.mat-form-field').eq(9).type(data.rows[i].pincode)
        cy.get('.mat-form-field').eq(9).type(a)
        cy.wait(2000)
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
        cy.get('.mat-form-field').eq(9).clear().type(b)
        cy.wait(2000)
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
        cy.get('.mat-form-field').eq(9).clear().type(c)
        cy.wait(2000)
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.disabled')
        //cy.get('.mat-accent > .mat-button-wrapper').click()
   })   
 })
})