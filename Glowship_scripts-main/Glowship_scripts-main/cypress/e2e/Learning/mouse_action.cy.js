// Drag & drog , double click & (click & hold action) script
describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
   
    })
    it("Drap & drop items", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#draggable > p > b').trigger('mousedown',{which: 1}) //{which: 1} is click on the center of the given element
        cy.get('#droppable > p').trigger('mousemove').trigger('mouseup', {force:true}) 
    });
    it("Double click", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#double-click').dblclick()        
    });
    it.only("Click & hold action", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#click-box').trigger('mousedown',{which: 1}).should('have.css','background-color','rgb(0, 255, 0)')         
    })
})
