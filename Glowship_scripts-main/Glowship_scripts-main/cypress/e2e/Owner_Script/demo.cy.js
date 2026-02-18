describe('Admin portal - Uploaded softwares - Add software', () => {
    it('Visits the initial login page', () => {
      cy.visit('http://admin.repligen.thelattice.org/auth/login')
      cy.url().should('includes','login');
    });
    it('Login and open uploaded softwares page, check the header', () => {
      cy.visit('http://admin.repligen.thelattice.org/auth/login')
      cy.url().should('includes','login');
      cy.get('[formControlName="email_id"]').type('demo@repligen.com');
      cy.get('[formControlName="password"]').type('KFComm2C');
      cy.get('.mat-raised-button').should('contain.text','LOGIN').click();
      cy.get('.navbar-toggle-button').click(); //hamberger
      cy.get('.nav-link').eq(1).should('exist','contain.text','Uploaded Softwares').click();  //Uploaded Software
      cy.get('.add-file-button').click();
      cy.contains('Build Type'); //header of the container box
      cy.contains('Type*'); //types
      cy.contains('NEXT');  //next button
      cy.get('.mat-icon-button').eq(12).should('exist'); //exit button
      cy.get('.mat-button-wrapper').eq(15).should('contain','NEXT').click()
      //cy.contains('NEXT').click();
      const up = 'Greythr.zip';
 //     cy.contains('UPLOAD').click({force:true})
      cy.get('[formcontrolname="version_name"]').clear().type('v2.2.2'); //alphabets    
      cy.get('[formcontrolname="release_notes"]').type('2333ffe')
    cy.contains('UPLOAD').fixture('cypress.zip','base64')
      //cy.contains('UPLOAD').dblclick({force:true}).attachFile('Greythr.zip').wait(100000)
      //cy.contains('UPLOAD').click({force:true}).selectFile('cypress/fixtures/Greythr.zip')
    });
      
     });