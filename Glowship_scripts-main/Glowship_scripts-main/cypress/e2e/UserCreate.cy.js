let rowsLength;
describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://saas.test.glowsun.io')
      cy.get('#mat-input-0').type('admintest@glowsun.io');
      cy.get('#continuebtn').click();
      cy.get('#mat-input-1').type('password');
      cy.get('.mat-button-wrapper').click();
      cy.get('#users-nav > .nav-item > .mat-body-2').click()    
    })
    before(() => {
        cy.task('readXlsx', { file: 'C:/Users/himan/Testing/Local_Test/cypress/fixtures/excelDta.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("C:/Users/himan/Testing/Local_Test/cypress/fixtures/Data.json", {rows})
    })
  })     
  it('Read excel file', () => {
      cy.fixture('Data').then((data) => {
        console.log(data)
        for ( let i = 0; i < rowsLength; i++){ 
          if(data.rows[i].user_type == 1){    
            console.log(data.rows[1].role)
            console.log(data)
            cy.get('.mat-accent > .mat-button-wrapper').click() 
            cy.get('.mat-select-trigger').click()
            cy.get('mat-option').contains(data.rows[i].role).click()
            cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].fname)
            cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].mobile)
            cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.rows[i].email)
          if(data.notify==0){
            cy.get('.mat-checkbox-inner-container').click()
            //cy.contains('button.mat-raised-button','SAVE').should("not.be.disabled");
            cy.get('button.mat-raised-button').contains("SAVE").click()
            cy.get('#add-paid-account > div > :nth-child(1)').click()
   
          }
          }
          else{
            cy.get('.mat-accent > .mat-button-wrapper').click()
            cy.get('.mat-select-arrow').click()
            cy.get('mat-option').contains(data.rows[i].role).click(); 
            cy.get('#mat-radio-13 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force:true})
            it('Fileupload', () => {
              const logoname = 'logo.png';
              cy.get('#image-upload-box > .mat-icon').attachFile(logoname);
            })
            
            
            /*cy.get('#mat-input-21').type(data.rows[i].fname)
            cy.get('#mat-input-22').type(data.rows[i].mobile)
            cy.get('#mat-input-23').type(data.rows[i].email)
          if(data.notify==0){
            cy.get('.mat-checkbox-inner-container').click()
          }
            cy.get('#mat-input-24').type(data.rows[i].add_line1)
            cy.get('#mat-input-25').type(data.rows[i].add_line2)
            cy.get('#mat-input-26').type(data.rows[i].add_line3)
            cy.get('#mat-input-27').type(data.rows[i].city)
            cy.get('.mat-select-placeholder').click()
            cy.get('mat-option').contains(data.rows[i].state).click()
            cy.get('#mat-input-27').type(data.rows[i].city)
            cy.get('#mat-input-28').type(data.rows[i].pincode)
            cy.get('[style="margin-right: 10px;"] > .mat-button-wrapper').click()*/
          }
        }
    })         
    })  
}) 
