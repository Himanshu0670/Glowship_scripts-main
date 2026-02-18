/*it("passes with cy.origin()", () => {
	cy.visit("https://example.cypress.io");
	cy.visit("https://www.npmjs.com/package/cypress");
	cy.origin("https://www.npmjs.com", () => {
		cy.get("#homePage-link").should("have.text", "github.com/cypress-io/cypress");
	});
});
*/
it("Test origin", () => {

	cy.visit('https://www.google.com/')
	cy.get('.gLFyf').type('https://www.youtube.com/').type('{enter}')
	cy.contains('YouTube').click({ force: true })
	cy.wait(12000)

// Here if we try to open any video link it should give error because the origin is changed(In the current case our base origin is google).
// Soln - So if we want to use the other origin we have to add the following origin function.   
	cy.origin('https://www.youtube.com/', () => {
		cy.get('input[name="search_query"]').click().type('kr$na').type('{enter}').wait(3000)
	})
	cy.visit('https://www.google.com/').wait(2000)
	cy.get('body').should('have.class','gLFyf')
})