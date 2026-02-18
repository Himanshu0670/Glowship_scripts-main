describe('Advance Commands', function(){
    it.only('Cy Visit to Google', function(){
    // Visit a remote URL.
        cy.visit('http://saas.test.glowsun.io/');
        cy.get('.gLFyf').click().type("Elephant")
        cy.wait(1000)
        cy.contains('Google Search').trigger('mouseover').click(    )
    
    })
    it('Cy Visit to Local App', function(){
    // Visit a remote URL.
        cy.visit('http://143.110.254.166:443/');
        
    })
    it('Cy Visit to Local App and more options', function(){
        // Visit a remote URL.
        cy.visit('http://127.0.0.1:9989/',{ timeout: 30000 });
        cy.visit('http://127.0.0.1:9989/',{ retryOnNetworkFailure :true });
    
    // Whether Cypress should automatically retry transient network errors under the hood.
    // Cypress will retry a request up to 4 times if this is set to true
    })
 // it('Cy Visit to Local Folder', function(){
    // Visit a remote URL.
    //  cy.visit('file:///Users/promode/Documents/QA/Testing/server/index.html');
    //})
    it('Cy Visit with GET Url', function(){
        // Visit a remote URL.
        cy.visit({
            url : "https://bing.com",
            method : "GET"
        })
    })
})
 
// To drag cards
/*cy.get(' .dragable-cards ').eq(0)
.trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })

.trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })

.trigger('mouseup')
*/

// Mutiple Assertion
//cy.get('button').should('have.class', 'active').and('not.be.disabled')
