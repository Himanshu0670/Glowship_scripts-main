describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").invoke("Hair Care").as("Hair Care").click()

        cy.get('.fixed_wrapper > .fixed > .prdocutname').each(($el, index, $list) => {
            console.log("Index :" + index + $el.text())
            cy.log("Index :" + index + ": " + $el.text())
        })
    })

    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper > .fixed > .prdocutname').each(($el, index, $list) => {
            if ($el.text().includes('Curls to straight Shampoo')) {
                cy.wrap($el).click()
            }
        })
    })

    // Alias and invoke example
    it("Alias and invoke", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper > .fixed > .prdocutname').eq(0).invoke('text').as('Thumbnail')
        // When you alias you need to add @
        // .should('be.gt) or ('be.lt) is used to compare the length 
        cy.get('@Thumbnail').its('length').should('be.gt', 3)
        cy.get('@Thumbnail').its('length').should('be.lt', 20)
        cy.get('@Thumbnail').should('includes', 'Seaweed Conditioner')
    })
    it("Alias and invoke", () => {
        cy.visit("https://automationteststore.com/")
        //      cy.get(' .thumbnail ').its('length').should('be.eq',16)
        cy.get(' .thumbnail ').should('have.length', 16)
        //      cy.get(' .pricetag').find('.productcart').invoke('attr','title').should('includes', 'Add to Cart')
        cy.get(' .pricetag').should('contain.html', 'Add to Cart')
    })
    let i = 0;
    it.only("Calculate total of normal & sale products ", () => {
        cy.visit("https://automationteststore.com/")
        // For normal price of the product   
        //cy.get(' .thumbnail ').as('product')
        /*cy.get('@product').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text())
            console.log($el.text())
        })*/
        cy.get(' .thumbnail ').as('product')
        cy.get('@product').find('.priceold').each(($el, index, $list) => {
            let a = 0;
            // To convert text into integer value (+) 
            a = +($el.text().split('$')[1])
            i += a;
            console.log(i)
            cy.log(i)
            
        })
        
    })
})
