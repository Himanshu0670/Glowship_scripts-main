describe("Verifying valriable, cypress commands and jquery commands" , function () {
    it("Navogating to a specific page" , function() {
        cy.visit("https://automationteststore.com/")
        const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup').then(function (){
        makeupLink.click({ multiple: true })
      })
        const skincarelink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skincarelink.click()
    })
    it.only("Validate properties of the contact us page" , function() {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        //cy.get('.control-label').eq(0).should('contain.text','First name:')  
    
    //Uses cypress commands and chaining
       cy.contains ('#ContactUsFrm', 'Contact Us Form').find('#field_11').should ('contain', 'First name')
   
    //JQuery Approach
       cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
       const firstNameText = text.find('#field_11').text()
       expect(firstNameText).to.contain('First name') 
      
       })
     })
     

})