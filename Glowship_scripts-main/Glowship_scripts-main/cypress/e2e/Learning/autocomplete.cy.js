const { it } = require("mocha")

// Autocomplete text script
describe("Handling autocomplete texts", () => {
    it("Select specific text in the list", () => {
        cy.visit("http://www.webdriveruniversity.com")
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

            })
    })
})