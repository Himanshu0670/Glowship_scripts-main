/// <reference types="cypress" />
let rowsLength;
    before(() => {        
        cy.task('readXlsx', { file: './cypress/fixtures/owner/pincode.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("./cypress/fixtures/owner/pin.json", {rows})
    })
  }) 
   
  it.only('pincode', () => {
      cy.visit('https://si.test.glowsun.io/')
      cy.get('#mat-input-0').type('himanshu@thelattice.in');
      cy.get('#continuebtn').click();
      cy.get('#mat-input-1').type('password');
      cy.get('.mat-button-wrapper').click();
      cy.wait(6000)
      cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()      
      cy.fixture('owner/pin').then((data) => {
      console.log(data)
      for ( let i = 0; i < rowsLength; i++)
      { 
          let  a,b,c,d,e,f = 0;
          a = data.rows[i].pincode.split(',')[0]
          b = data.rows[i].pincode.split(',')[1]
          c = data.rows[i].pincode.split(',')[2]
          d = data.rows[i].pincode.split(',')[3]
          e = data.rows[i].pincode.split(',')[4]
          f = data.rows[i].pincode.split(',')[5]
          cy.get('.header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
          cy.wait(1000)                    
          cy.get('.mat-select-value').eq(2).click()
          cy.get('.mat-option').contains(data.rows[i].state).click()
          cy.get('.mat-form-field').eq(9).type(a)
          cy.get('body').click()
          cy.get('body').should('contains.text', "Individual Home")
          cy.get('body').should('not.have.text', "Zipcode and state did not match")
          cy.get('.mat-form-field').eq(9).click().clear().type(b)
          cy.wait(2000)
          cy.get('body').should('not.have.text', "Zipcode and state did not match")
          cy.get('.mat-form-field').eq(9).clear().type(c)
          cy.wait(2000)
          cy.get('body').should('not.have.text', "Zipcode and state did not match")
          cy.get('.mat-form-field').eq(9).clear().type(d)
          cy.wait(2000)
          cy.get('body').should('not.have.text', "Zipcode and state did not match")
          cy.get('.mat-form-field').eq(9).clear().type(e)
          cy.wait(2000)
          cy.get('body').should('not.have.text', "Zipcode and state did not match")
          cy.get('.mat-form-field').eq(9).clear().type(f) 
          cy.wait(2000)
          cy.get('body').should('not.have.text', "Zipcode and state did not match")
          cy.contains('CANCEL').click()        
      }                      
     })
})
     
      it('pincode', () => {
          cy.visit('https://si.test.glowsun.io/')
          cy.get('#mat-input-0').type('himanshu@thelattice.in');
          cy.get('#continuebtn').click();
          cy.get('#mat-input-1').type('password');
          cy.get('.mat-button-wrapper').click();
          cy.wait(6000)
          cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()      
          cy.fixture('owner/pin').then((data) => {
              console.log(data)
              for ( let i = 0; i < rowsLength; i++)
              { 
                  let  a,b,c,d,e,f = 0;
                  a = data.rows[i].pincode.split(',')[0]
                  b = data.rows[i].pincode.split(',')[1]
                  c = data.rows[i].pincode.split(',')[2]
                  d = data.rows[i].pincode.split(',')[3]
                  e = data.rows[i].pincode.split(',')[4]
                  f = data.rows[i].pincode.split(',')[5]           
        }                      
    })
})