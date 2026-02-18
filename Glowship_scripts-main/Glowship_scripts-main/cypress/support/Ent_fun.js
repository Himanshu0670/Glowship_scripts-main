const demo = [];
Cypress.Commands.add('fir', (text) => {
    
    
    //------------------------ First Card -----------------------------------------------------------------//
    cy.get('.mat-expansion-panel').eq(0).then(($ele1) => {
        cy.wait(2000)
        if ($ele1.text().includes('kW')) {
            cy.get('.mat-radio-inner-circle').eq(0).click({force: true}).wait(1000)
            //Best value                
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(0).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Panel value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(3).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(1).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Inverter value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(4).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Battery value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(6).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(3).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Financials value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(12).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(11).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(17).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(19).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(20).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(21).then(($val) => {
                demo.push($val.text(), '----------------------------------- Off grid-Budget ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-radio-inner-circle').eq(0).click({force: true}).wait(1000)
        }
        else {
            cy.get('.h6').eq(0).then(($theElement) => {
                demo.push($theElement.text(), '----------------------------------- Off grid-Budget ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
                cy.wait(1000)
            })
        }
    })
    //------------------------ Second Card -----------------------------------------------------------------//
    cy.get('.mat-expansion-panel').eq(1).then(($ele2) => {
        if ($ele2.text().includes('kW')) {
            cy.get('.mat-radio-inner-circle').eq(1).click({force: true}).wait(1000)
            //Best value                
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(0).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Panel value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(3).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(1).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Inverter value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(4).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Battery value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(6).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(3).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Financials value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(12).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(11).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(17).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(19).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(20).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(21).then(($val) => {
                demo.push($val.text(), '----------------------------------- Off grid-Comfort ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-radio-inner-circle').eq(1).click({force: true}).wait(1000)
        }
        else {
            cy.get('.h6').eq(1).then(($theElement) => {
                demo.push($theElement.text(), '----------------------------------- Off grid-Comfort ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
                cy.wait(1000)
            })
        }
    })
    //------------------------ Third Card -----------------------------------------------------------------//
    // cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline')

    cy.get('.mat-expansion-panel').eq(2).then(($ele3) => {
        if ($ele3.text().includes('kW')) {

            cy.get('.mat-radio-inner-circle').eq(2).click({force: true}).wait(1000)
            //Best value                
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(0).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Panel value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(3).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(1).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Inverter value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(4).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Financials value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(8).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(11).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(15).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(17).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(18).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(19).then(($val) => {
                demo.push($val.text(), '----------------------------------- Grid tied-Usage ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
        }
        else {
            cy.get('.h6').eq(2).then(($theElement) => {
                demo.push($theElement.text(), '----------------------------------- Grid tied-Usage ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
                cy.wait(1000)
            })
            cy.get('.mat-radio-inner-circle').eq(2).click({force: true}).wait(1000)

        }
    })
    //------------------------ Fourth Card -----------------------------------------------------------------//
    cy.get('.mat-expansion-panel').eq(3).then(($ele4) => {
        if ($ele4.text().includes('kW')) {
            cy.get('.mat-radio-inner-circle').eq(3).click({force: true}).wait(1000)
            //Best value                
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(0).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Panel value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(3).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(1).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Inverter value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(4).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1').eq(2).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            //Financials value
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(8).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(10).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-body-1 > >').eq(11).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(15).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(17).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(18).then(($val) => {
                demo.push($val.text())
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
            cy.get('.mat-accordion .mat-expanded.mat-expansion-panel-spacing .mat-headline').eq(19).then(($val) => {
                demo.push($val.text(), '----------------------------------- Grid tied-Maximum ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
        }
        else {
            cy.get('.h6').eq(3).then(($theElement) => {
                demo.push($theElement.text(), '----------------------------------- Grid tied-Maximum ------------------------------------------------------------')
                cy.writeFile('cypress/fixtures/Scriptdata/glowsun_5.json', demo)
            })
        }
    })
    cy.contains('Leads').click()
});