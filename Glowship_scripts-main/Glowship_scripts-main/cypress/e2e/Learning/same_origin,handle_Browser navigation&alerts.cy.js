// You can not visit two different domains
describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit('https://automationteststore.com/')
        //cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=49')
    
    })
 // Browser navigation forward/back/reload
     it("Validate links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()
        //cy.reload(true) //reload without using cache
        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'To-Do-List')
        cy.go('back')
    })
    // Cypress automatically handle the js alerts
    it("Handle js alerts", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1 > p').click()  
        cy.on('window:alert', (str) => {
            expect(str).to.equals('I am an alert box!')
        })
    })
    it("Validate js confirm alert box works correctly when clicking ok", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4 > p').click()
        cy.on('window:confirm', (str) => false)
        cy.get('#confirm-alert-text').should('contain', 'You pressed Cancel!')
    })
    it.only("Validate js confirm alert box usingastub", () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get ('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            return true; 
           }). then(() =>{
               cy.get('#confirm-alert-text').should('contain','You pressed OK!')
               })
    })
})