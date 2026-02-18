/// <reference types ="cypress" />


it('OrangeHRM', function() {

cy.visit('https://opensource-demo.orangehrmlive.com')
cy.get('#txtUsername').click().type('Admin')
cy.get('#txtPassword').click().type('admin123')
cy.get('#btnLogin').click()
cy.wait(1000)
cy.contains('Admin').click()
cy.wait(1000)
cy.get('#searchSystemUser_userName').click().type('HimanshuPal')
cy.get('#searchSystemUser_userType').select(0) 
cy.get('#searchSystemUser_employeeName_empName').click().type('Parabullam') 
cy.get('#searchSystemUser_status').select(2)

})
