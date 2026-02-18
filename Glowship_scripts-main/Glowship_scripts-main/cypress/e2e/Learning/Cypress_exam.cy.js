it('Simple Cypress program', function() {
    cy.visit('https://www.webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click()
    cy.get('[name="first_name"]').type('Raman')
    cy.get('[name="last_name"]').type('Deep')
    cy.get('[name="email"]').type('raman121@gmail.com')
    cy.get('textarea.feedback-input').type('Please wait for response !')
    cy.get('[type="submit"]').click()
 //When email format is not valid -   
    //cy.get('body').should('contain', 'Error: Invalid email address')
    cy.get('body').should('not.contain', 'Error: Invalid email address')
    cy.get('body').should('contain.text', 'Thank You for your Message!')

})