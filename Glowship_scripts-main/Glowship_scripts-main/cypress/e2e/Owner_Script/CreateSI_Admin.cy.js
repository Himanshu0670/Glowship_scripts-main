/// <reference types="cypress" />
let rowsLength;
describe('SI Admin', () => {
         
    beforeEach(() => {
        /*cy.task('readXlsx', { file: './cypress/fixtures/owner/SI_admin_create.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("./cypress/fixtures/owner/Admin_Create.json", {rows})
     })*/
      cy.visit('https://si.test.glowsun.io/')
      cy.get('#mat-input-0').type('sitest@glowsun.io');
      cy.get('#continuebtn').click();
      cy.get('#mat-input-1').type('password');
      cy.get('.mat-button-wrapper').click();
      cy.wait(25000)
      cy.get('.add_btn').click()
      cy.wait(1000)         
    })
    before(() => {        
        cy.task('readXlsx', { file: './cypress/fixtures/owner/SI_admin_create.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("./cypress/fixtures/owner/Admin_Create.json", {rows})
    })
  }) 

// To check the json data in the console -
       // console.log(data)

  
  it('CREATE', () => {
      cy.fixture('owner/Admin_Create').then((data) => {
        console.log(data)
        let aa = 1;
        let as = 2;
        for ( let i = 0; i < rowsLength; i++){ 
              let  a,b,c = 0;
              a = data.rows[i].fname.split(',')[0]
              b = data.rows[i].fname.split(',')[1]
              c = data.rows[i].fname.split(',')[2]
                                  
    // CREATE SI ADMIN 
             if(aa==as){
                cy.wait(2000)
                cy.get('.header-container > div > .mat-focus-indicator').click({ multiple: true })
                cy.wait(2000)
                cy.get('.add_btn').click()
                cy.wait(1000)
                aa++;
                as= as+2;
             }
             aa++;    
       // To select a file  

           if(data.rows[i].photo==1){
                cy.get('input[type=file]').selectFile('./cypress/fixtures/op3.jpg' , {force: true})
                cy.wait(1000)
                cy.get('input[type=file]').selectFile('./cypress/fixtures/sample.tiff' , {force: true})
                cy.wait(1000)
                cy.get('.redError').should('have.text', ' Only upload .png, .jpg, .jpeg or .bmp files close')
                cy.get('input[type=file]').selectFile('./cypress/fixtures/121.jpg' , {force: true})
                cy.wait(1000)
                cy.get('.redError').should('contain.text',  "Maximum file size: 1 MB ")
                cy.get('input[type=file]').selectFile('./cypress/fixtures/logo.png' , {force: true})
                cy.wait(1000)      
                  }                     
            else {
                
                cy.get('input[type=file]').selectFile('./cypress/fixtures/pexels.jpg' , {force: true})
                cy.wait(1000)
                cy.get('.redError').should('contain.text',  "Maximum file size: 1 MB ")
                cy.wait(2000)
                cy.get('input[type=file]').selectFile('./cypress/fixtures/op1.jpg' , {force: true})
                cy.wait(1000)
                cy.get('input[type=file]').selectFile('./cypress/fixtures/sample.tiff' , {force: true})
                cy.wait(1000)                 
                cy.get('.redError').should('have.text', ' Only upload .png, .jpg, .jpeg or .bmp files close')
                cy.wait(2000)
                cy.get('input[type=file]').selectFile('./cypress/fixtures/op2.jpg' , {force: true})
                 }
                
 
        // Full Name             
                cy.get('.mat-form-field').eq(0).click()
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('have.text', " Please enter user's full name ")
                cy.get('.mat-form-field').eq(0).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('have.text', ' Please enter alphabets only ')
                cy.get('.mat-form-field').eq(0).clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('have.text', ' Minimum length 3 characters ')
                cy.get('.mat-form-field').eq(0).clear().type(c)
                cy.contains('SAVE').should('not.be.enabled')
                            
            // Email
                a = data.rows[i].email.split(',')[0]
                b = data.rows[i].email.split(',')[1]
                c = data.rows[i].email.split(',')[2]
                cy.get('.mat-form-field').eq(1).click()
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', "Please enter a valid email address ")
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-form-field').eq(1).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', "Please enter a valid email address ")
                cy.get('.mat-form-field').eq(1).clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
            // Total Seat    
                a = data.rows[i].Totalseat.split(',')[0]
                b = data.rows[i].Totalseat.split(',')[1]
                cy.get('.mat-form-field').eq(2).click()
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', "This is a required field ")
                cy.get('.mat-form-field').eq(2).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', "Range : 1 - 20")
                cy.get('.mat-form-field').eq(2).clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
        // Mobile
                a = data.rows[i].mobile.split(',')[0]
                b = data.rows[i].mobile.split(',')[1]
                c = data.rows[i].mobile.split(',')[2]
                cy.get('.mat-form-field').eq(3).type(a)
                cy.get('body').click()
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', " 10-digit number, no spaces or dashes ")
                cy.get('.mat-form-field').eq(3).click().clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
                
        // GST IN    
                a = data.rows[i].GSTIN.split(',')[0]
                b = data.rows[i].GSTIN.split(',')[1]
                cy.get('.mat-form-field').eq(4).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', " Please enter valid value for GSTIN ")
                cy.get('.mat-form-field').eq(4).click().clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')         
                if(data.notify==0){
                    cy.get('.mat-checkbox-inner-container').click()
                }
        // ORG NAME     
                a = data.rows[i].Orgname.split(',')[0]
                b = data.rows[i].Orgname.split(',')[1]
                cy.get('.mat-form-field').eq(5).click()
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', 'Please enter organization name')
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-form-field').eq(5).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', 'Organization name must be at least 3 characters long')
                cy.get('.mat-form-field').eq(5).clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
        // ADDRESS LINE 1     
                a = data.rows[i].addline1.split(',')[0]
                b = data.rows[i].addline1.split(',')[1]
                cy.get('.mat-form-field').eq(6).click()
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', 'Please enter address')
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-form-field').eq(6).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', 'Address must be at least 3 characters long')
                cy.get('.mat-form-field').eq(6).clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
        // ADDRESS LINE 2     
                a = data.rows[i].addline2.split(':')[0]
                b = data.rows[i].addline2.split(':')[1]
                cy.get('.mat-form-field').eq(7).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', 'Address must be at least 3 characters long')
                cy.get('.mat-form-field').eq(7).click().clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
            // CITY     
                a = data.rows[i].city.split(',')[0]
                b = data.rows[i].city.split(',')[1]
                cy.get('.mat-form-field').eq(8).click()
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', 'Please enter city/ town ')
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-form-field').eq(8).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', 'Must be at least 3 characters long')
                cy.get('.mat-form-field').eq(8).clear().type(b)
                cy.contains('SAVE').should('not.be.enabled')
            // STATE
                cy.get('.mat-select-value').eq(0).click()
                cy.get('body').click()
                cy.get('.mat-error').eq(0).should('contain.text', "Please select a State/ UT")    
                cy.get('.mat-select-value').eq(0).click()
                cy.get('.mat-option').contains(data.rows[i].state).click() 
                cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
            // PINCODE     
                a = data.rows[i].pincode.split(',')[0]
                b = data.rows[i].pincode.split(',')[1]
                c = data.rows[i].pincode.split(',')[2]
                cy.get('.mat-form-field').eq(10).click()
                cy.get('body').click()
          //    cy.get('.mat-error').eq(0).should('contain.text', "Please enter zipcode")
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-form-field').eq(10).type(a)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', "Enter a valid 6 digit zipcode")
                cy.get('.mat-form-field').eq(10).clear().type(b)
                cy.wait(2000)
                cy.contains('SAVE').should('not.be.enabled')
                cy.get('.mat-error').eq(0).should('contain.text', "Zipcode and state did not match")
                cy.get('.mat-form-field').eq(10).clear().type(c)
                cy.wait(3000)
                cy.contains('SAVE').should('be.enabled')
                cy.contains('SAVE').click()      
                
        }                   
    })         
    })  
}) 
