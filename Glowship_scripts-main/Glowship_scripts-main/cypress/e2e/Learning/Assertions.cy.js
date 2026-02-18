describe("Handling autocomplete texts", () => {
    it("Select specific text in the list", () => {
        cy.visit("http://www.webdriveruniversity.com")
    //Should asseetion
        cy.get('body').should('contain.text', 'The Complete Cypress v12 Course: From Zero to Expert! [2023]')
            .and('contain.text', 'Cypress with Cucumber BDD - Beginner to Expert in 9 Hours!')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('G')
        //      cy.get('#myInputautocomplete-list > :nth-child(2)').click()
        cy.get('#myInputautocomplete-list >').eq(3).click()
        cy.get('#submit-button').click()
        cy.url().should('contain', 'Grapes')
            .then(() => {
                cy.get('#myInput').type('A')
                cy.get('#myInputautocomplete-list >').eq(2).click()
                cy.get('#submit-button').click()
                cy.url().should('contain', 'Almond')
                cy.get('#myInput').should('have.attr', 'name', 'food-item')
    //expect asseetion
                cy.get('.section_header').then(($el) => {
                    expect($el).to.have.text("Autocomplete TextField")
                })       
                cy.get('#submit-button').then(($el) => {
                    expect($el).to.have.attr('type','submit')
                })
    //assert assertion
            })
    })
})