/// <reference types="cypress" />
let rowsLength;
describe('Edit SI Admin', () => {
    beforeEach(() => {
        cy.visit('https://si.test.glowsun.io')
        cy.get('#mat-input-0').type('sitest@glowsun.io');
        cy.get('#continuebtn').click();
        cy.get('#mat-input-1').type('password');
        cy.get('.mat-button-wrapper').click();
        cy.wait(10000)    
    })
    before(() => {        
        cy.task('readXlsx', { file: './cypress/fixtures/owner/SIedit.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("./cypress/fixtures/owner/SIedit.json", {rows})
    })
  })     
  it('Edit SI Admin', () => {
      cy.fixture('owner/SIedit').then((data) => {
        console.log(data)
        for ( let i = 0; i < rowsLength; i++){ 
            console.log(data.rows)
            let  a,b,c= 0;
            cy.get('.mat-form-field').eq(0).type(data.rows[i].searchlead)
            cy.get('#name').click()
            cy.wait(1000);
            cy.contains('EDIT').click({force:true})
            cy.wait(1000)
            //cy.contains('Upload Organization logo').attachFile(fileName);
            a = data.rows[i].fname.split(',')[0]
            b = data.rows[i].fname.split(',')[1] 
            c = data.rows[i].fname.split(',')[2]           
            
 
    // EDIT SI ADMIN 
        // Full Name
            cy.get('.mat-form-field').eq(0).click().clear()
            cy.get('body').click()
            cy.get('.mat-error').eq(0).should('contain.text', "Please enter user's full name" )
            cy.get('.mat-form-field').eq(0).type(a)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', 'Please enter alphabets only')
            cy.get('.mat-form-field').eq(0).clear().type(b)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', 'Minimum length 3 characters ')
            cy.get('.mat-form-field').eq(0).clear().type(c)
            cy.contains('SAVE').should('be.enabled')
        
        // Email
            
            a = data.rows[i].email.split(',')[0]
            b = data.rows[i].email.split(',')[1]
            c = data.rows[i].email.split(',')[2]
            console.log(a)
            console.log(b)
            console.log(c,'value of c')
           
            if(c === 'admintest@glowsun.io.in'){
                console.log('Apply')
                cy.get('.mat-form-field').eq(1).clear().type(c)
                cy.contains('SAVE').should('be.enabled')
                cy.contains('SAVE').click()
                cy.get('.mat-error').eq(0).should('contain.text', "This email already exists ")
                cy.get('.mat-form-field').eq(1).clear().type(b)
            }
 
            cy.get('.mat-form-field').eq(1).clear()
            cy.get('body').click()
            cy.get('.mat-error').eq(0).should('contain.text', "Please enter a valid email address ")
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-form-field').eq(1).type(a)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', "Please enter a valid email address ")
            cy.get('.mat-form-field').eq(1).clear().type(b)
            cy.contains('SAVE').should('be.enabled')
            
            
    // Mobile
            a = data.rows[i].mobile.split(',')[0]
            b = data.rows[i].mobile.split(',')[1]
            c = data.rows[i].mobile.split(',')[2]
            cy.get('.mat-form-field').eq(2).clear().type(a)
            cy.get('body').click()
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', "10-digit number, no spaces or dashes ")
            cy.get('.mat-form-field').eq(2).click().clear().type(b)
            cy.contains('SAVE').should('be.enabled')
   /*       if(c==7878787822){
                cy.get('.mat-form-field').eq(2).clear().type(c)
                cy.contains('SAVE').should('be.enabled')
                cy.contains('SAVE').click()
                cy.get('.mat-error').eq(0).should('contain.text', "This mobile number already exists ")
                cy.get('.mat-form-field').eq(2).click().clear().type(b)
            }            
    */        
    // GST IN    
            a = data.rows[i].GSTIN.split(',')[0]
            b = data.rows[i].GSTIN.split(',')[1]
            cy.get('.mat-form-field').eq(3).clear().type(a)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('body').click()
            cy.get('.mat-error').eq(0).should('contain.text', "Please enter valid value for GSTIN ")
            cy.get('.mat-form-field').eq(3).click().clear().type(b)
            cy.contains('SAVE').should('be.enabled')         
            if(data.notify==0){
                cy.get('.mat-checkbox-inner-container').click()
            }
    // ORG NAME     
            a = data.rows[i].Orgname.split(',')[0]
            b = data.rows[i].Orgname.split(',')[1]
            cy.get('.mat-form-field').eq(4).clear()
            cy.get('body').click()
            cy.get('.mat-error').eq(0).should('contain.text', 'Please enter organization name')
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-form-field').eq(4).type(a)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', 'Organization name must be at least 3 characters long')
            cy.get('.mat-form-field').eq(4).clear().type(b)
            cy.contains('SAVE').should('be.enabled')
    // ADDRESS LINE 1     
            a = data.rows[i].addline1.split(',')[0]
            b = data.rows[i].addline1.split(',')[1]
            cy.get('.mat-form-field').eq(5).clear()
            cy.get('body').click()
            cy.get('.mat-error').eq(0).should('contain.text', 'Please enter address')
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-form-field').eq(5).type(a)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', 'Address must be at least 3 characters long')
            cy.get('.mat-form-field').eq(5).clear().type(b)
            cy.contains('SAVE').should('be.enabled')
    // ADDRESS LINE 2     
            a = data.rows[i].addline2.split(':')[0]
            b = data.rows[i].addline2.split(':')[1]
            cy.get('.mat-form-field').eq(6).clear().type(a)
            cy.get('body').click()
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', "Address must be at least 3 characters long")
            cy.get('.mat-form-field').eq(6).click().clear().type(b)
            cy.contains('SAVE').should('be.enabled')
        // CITY     
            a = data.rows[i].city.split(',')[0]
            b = data.rows[i].city.split(',')[1]
            cy.get('.mat-form-field').eq(7).clear()
            cy.get('body').click()
            cy.get('.mat-error').eq(0).should('contain.text', 'Please enter city/ town ')
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-form-field').eq(7).type(a)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', 'Must be at least 3 characters long')
            cy.get('.mat-form-field').eq(7).clear().type(b)
            cy.contains('SAVE').should('be.enabled')
        // STATE
            cy.get('.mat-select-value').eq(0).click()
            cy.get('body').click()
            cy.get('.mat-select-value').eq(0).click()
            cy.get('.mat-option').contains(data.rows[i].state).click() 
            cy.get('.mat-accent > .mat-button-wrapper > .mat-icon').should('not.be.enabled')
        // PINCODE     
            a = data.rows[i].pincode.split(',')[0]
            b = data.rows[i].pincode.split(',')[1]
            c = data.rows[i].pincode.split(',')[2]
            cy.get('.mat-form-field').eq(9).clear()
            cy.get('body').click()
            cy.get('.mat-error').eq(0).should('contain.text', 'Please enter zipcode')
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-form-field').eq(9).type(a)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', 'Enter a valid 6 digit zipcode')
            cy.get('.mat-form-field').eq(9).clear().type(b)
            cy.wait(2000)
            cy.contains('SAVE').should('not.be.enabled')
            cy.get('.mat-error').eq(0).should('contain.text', 'Zipcode and state did not match')
            cy.get('.mat-form-field').eq(9).clear().type(c)
            cy.wait(2000)
            cy.contains('SAVE').should('be.enabled')
            cy.contains('SAVE').click()
            cy.wait(2000)
            cy.get('.header-container > div > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()       
        }                   
   })         
 })  
}) 
