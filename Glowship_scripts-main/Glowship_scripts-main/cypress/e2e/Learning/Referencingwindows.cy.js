//  cy.document() - Get the window.document of the page that is currently active.
describe("Referencing windows", () => {
    it("Demo of cy.document", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.document().then((doc) => {
         let  item = doc.querySelectorAll('.contact_button55').length;
         console.log(item)
         cy.log(item)
        })
    })

// cy.title() - Get the document.title property of the page that is currently active.
    it("Demo of cy.title", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.title().should('include','WebDriver | Contact Us').and('have.length', 22)
    })

// cy.url() - Get the current URL of the page that is currently active.
    it.only("Demo of cy.url", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include','contactus')
        cy.url().should('contain','contact')
        cy.get('.section_header').should('have.css','color', 'rgb(230, 44, 33)') // To check the font color of selected element
        cy.get('.section_header').should('have.css','font-size', '42px') // To check the font size of selected element
        cy.screenshot()  // screenshot will be saved as
                        // cypress/screenshots/filename.cy.js/my tests -- takes a screenshot.png
    })

})

