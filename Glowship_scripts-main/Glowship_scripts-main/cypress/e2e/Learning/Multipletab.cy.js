//Using Jquery 'removeAttr' method we can handle multiple window in cypress

describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://si.test.glowsun.io/")
        cy.get('#mat-input-0').type('mamta@thelattice.in');
        cy.get('#continuebtn').click();
        cy.get('#mat-input-1').type('password');
        cy.get('.mat-button-wrapper').click();
        cy.wait(7000)
        cy.get('#proposals-nav > .nav-item').invoke('removeAttr', 'target').click()
        })

})
