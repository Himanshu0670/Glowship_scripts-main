describe('Inspect automation test store items using chain of commands', () =>{
    it("Click on the item using child class" , function() {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.prdocutname').contains ('Skinsheen Bronzer Stick').click().then(function (itemHeaderText) {
        console.log("Selected the following item:" + itemHeaderText.text())
        })
        
        console.log("Test123")
    
    })
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
    //cy.log is used to print value on cypress console
        cy.log("clicked on link using text:" + linkText.text())
        
        })
    })
    it("Click on the item using parent class" , function() {
        //cy.visit("https://automationteststore.com/")
        //cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Joe');
        console.log('Hello world!')
        cy.get('[name="last_name"]').type('blogs')
        cy.get('[type="submit"]').click()
        cy.log('Test execution is complete') 
    })

})