let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
      })
        cy.visit('https://rh-prd.force.com/dummy/login?locale=us');
      })
    it ('Data Driven: Register User', () => {
      cy.fixture('xlsxData').then((data) => {
         for ( let i = 0; i < rowsLength; i++) {
             cy.get('#username').click();
             cy.get('#username').type(data.rows[i].firstName);
             cy.get('#username').type(data.rows[i].lastName);
             cy.get('#username').type(data.rows[i].username);
             cy.get('#password').type(data.rows[i].password);
             cy.contains('Log In').click();
             //cy.get('alert').should('have.text', data.rows[i].message);           
        }
      })     
     })
    })
    
