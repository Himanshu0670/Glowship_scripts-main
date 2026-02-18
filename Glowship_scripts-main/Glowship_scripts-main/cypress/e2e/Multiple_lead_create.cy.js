let rowsLength;
describe('Multipl Lead Create', () => {
    beforeEach(() => {
      cy.visit('https://saas.test.glowsun.io')
      cy.get('#mat-input-0').type('admintest@glowsun.io');
      cy.get('#continuebtn').click();
      cy.get('#mat-input-1').type('password');
      cy.get('.mat-button-wrapper').click();
      cy.get('#users-nav > .nav-item > .mat-body-2').click()    
    })
    before(() => {
        cy.task('readXlsx', { file: 'C:/Users/himan/Testing/Local_Test/cypress/fixtures/Multiple_Lead_create.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("C:/Users/himan/Testing/Local_Test/cypress/fixtures/MultipleLead.json", {rows})
    })
  })     
  it('Read excel file', () => {
      cy.fixture('MultipleLead').then((data) => {
        cy.get('#homeowner-nav > .nav-item > .mat-body-2').click()
        console.log(data)
        for ( let i = 0; i < rowsLength; i++){   
            console.log(data)
            cy.get('.header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
            



        
        
        
        }
      })
    })
})