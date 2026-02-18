// Checkbox & radio button & dropdown example

describe("Handling checkbox & radio button", () =>{
    it("Check & validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        // Using input type in code - cy.get("input[type='checkbox']").eq(0).check()
        cy.get('#checkboxes > :nth-child(5) > input').check().should('be.checked')

        //To check that checkbox is uncheck - cy.get('#checkboxes > :nth-child(5) > input').check().should('not.be.checked')
    // Us alias to reduce & improve our code -
        cy.get('#checkboxes>:nth-child(1)>input ').as('option-1')
        cy.get('@option-1').check().should('be.checked')
        
      // To uncheck all the checkbox  
        cy.get(':checkbox').uncheck({force: true}).should('not.be.checked')  
    })
    it("Check & validate radio button", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get("input[type='radio']").eq(0).should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.get('[value="cabbage"]').should('be.not.enabled')  
    })
    it.only("Check & validate dropdown", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#dropdowm-menu-1').select('C#').should('contain','C#')
        cy.get('#dropdowm-menu-2').select('Maven').should('contain','Maven')
        cy.get('#fruit-selects').select('pear').should('contain','Pear')
     

    })

})
