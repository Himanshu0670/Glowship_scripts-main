describe("Test Contact Us form via WebdriverUni" , function () {
    it.only("Should be able to submit a successful submission" , function() {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //Document function - 'Get the  window.document of the page that is currently active'      
        cy.document().should('have.property', 'charset').and('eq','UTF-8')

    //To check the title page - Title function- 'Get the document.title of the page that is currently active'  
        cy.title().should('include', 'WebDriver | Contact Us')
    //To check the url of the page - url function- 'Get the current Url of the page that is currently active'
        cy.url().should('include','Contact-Us')
        cy.get('[name="first_name"]').type('Ram')
        cy.get('[name="last_name"]').type('Charan')
        cy.get('textarea.feedback-input').type('Its a really interesting concept to learn')
        cy.contains('SUBMIT').click()
        cy.wait(2000)
        cy.get('body').contains('Error: Invalid email address')
        //cy.get('h1').should('have.text', "Thank You for your Message!")

    })

    it("Test Contact us" , function() {
        cy.visit("https://automationteststore.com/")
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').click()
//      cy.title().should('eq', 'Fragrance') or cy.title().should('include', 'Fragrance') // To check the title
        cy.url().should('include', 'path=49')
        cy.get(':nth-child(2) > .promo_text').should('have.class', "promo_text")
        cy.get('.block_frame').eq(7).should('have.id', 'block_frame_html_block_1777')
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').click()
        cy.get('.block_frame').eq(2).should('have.id', 'block_frame_html_block_2066')

    })


})
