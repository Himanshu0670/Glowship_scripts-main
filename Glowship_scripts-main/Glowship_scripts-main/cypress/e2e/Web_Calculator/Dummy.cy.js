let rowsLength, a = 0;
import { vars } from './constant'
describe('glowsun test', function () {
    beforeEach(() => {

        cy.visit('https://tpsdev.thelattice.org/')

        cy.wait(3000)
    })
    before(() => {
        cy.task('readXlsx', { file: './cypress/fixtures/webtest.xlsx', sheet: "Sheet3" }).then((rows) => {
            rowsLength = rows.length;
            cy.log(rowsLength)
            cy.writeFile("./cypress/fixtures/webtest.json", { rows })
        })
    })
    it('Test on TPS Solar calculator', () => {
        cy.fixture('webtest').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.wait(3000)
                cy.contains(' CHANGE ').click({ force: true })
                cy.get('input[name=pincode').click({ force: true }).clear().type(data.rows[i].Pincode)
                var text = "";
                text = Math.random().toString(36).slice(2, 7); 
                cy.intercept('GET', '/glowsun/api/saas/getAppliance').as(text)
                cy.contains(' SUBMIT ').click()
                cy.wait('@'+text).wait(2000)
                cy.contains('Electricity Bill').click({ force: true })
                cy.get('input[name=electricity_bill').click().clear().type(data.rows[i].Electricity_Bill)
                cy.get('input[name=num_people').click().clear().type(data.rows[i].No_of_People)
                cy.get('.mat-radio-button').contains(data.rows[i].UPS_Power_Backup).click()
                if (data.rows[i].Dishwasher === 'Yes') {
                    cy.get('mat-checkbox').eq(0).click()
                }
                if (data.rows[i].Induction_stove === 'Yes') {
                    cy.get('mat-checkbox').eq(1).click()
                }
                if (data.rows[i].Microwave_oven === 'Yes') {
                    cy.get('mat-checkbox').eq(2).click()
                }
                if (data.rows[i].Geysers === 'Yes') {
                    cy.get('mat-checkbox').eq(3).click()
                    let item_1;
                    cy.document().then(($doc) => {
                        item_1 = $doc.querySelectorAll('.mat-select-value').length;
                        console.log(item_1)
                        if (item_1 == 2) {
                            cy.get('.mat-select-value').eq(0).click()
                            cy.get('.mat-option').contains(data.rows[i].Run_simultaneously).click({force:true})
                        }
                        else {
                            cy.get('.mat-select-value').eq(1).click()
                            cy.get('.mat-option').contains(data.rows[i].Run_simultaneously).click()
                        }
                    })
                }
                if (data.rows[i].AC_Heaters === 'Yes') {
                    cy.get('mat-checkbox').eq(4).click()
                    let item_2;
                    cy.document().then(($doc) => {
                        item_2 = $doc.querySelectorAll('.mat-select-value').length;
                        console.log(item_2)
                        if (item_2 == 2) {
                            cy.get('.mat-select-value').eq(1).click()
                            cy.get('.mat-option').contains(data.rows[i].Run_Simultaneously).click({ force: true })
                        }
                        else {
                            cy.get('.mat-select-value').eq(2).click()
                            cy.get('.mat-option').contains(data.rows[i].Run_Simultaneously).click({ force: true })
                        }
                    })
                }
                var text_1,text_2 = "";
                text_1 = Math.random().toString(36).slice(2, 7);
               // text_2 = Math.random().toString(36).slice(2, 7);
                cy.intercept('GET', '/glowsun/api/saas/recommendation/1').as(text_1)
// This intercept is required when there is no less than 1000 electriity bill condition             
                //cy.intercept('GET', '/api/saas/microInverterMax').as(text_2)
                cy.contains(' CALCULATE MY SAVINGS ').click({force:true})
                cy.wait('@'+text_1).wait(3000)
                //.its('response').should('deep.include', {statusCode: 201 || 200}).wait(3000)
                //cy.wait('@'+text_2).its('response').should('deep.include', 
                //{statusCode: 200}).wait(3000)
                  
                  /*cy.waitUntil(() =>
                cy.get('#loading-spinner-text').then($ele =>
                                    ($ele.hasClass('hidden loading-text')),
                                    //timeouts (#loading-spinner-text,hidden loading-text)
                                    {
                                        timeout: 60000, // waits up to 60000 ms
                                        interval: 1000 // performs the check every 500 ms
                                    }

                                ))*/
                              
                //---------------------------------- 1 st condition started----------------------------------------------------------------------------//
                cy.get('body').then(($ele) => {
                    if (data.rows[i].Electricity_Bill < 499) {
                        //Off-grid Solar Capacity Values
                        //Function Callling
                        cy.firstcon()
                    }   
                    //---------------------------------- 1 st condition completed----------------------------------------------------------------------------//
                    //---------------------------------- 2 nd condition started----------------------------------------------------------------------------//

                    else if ($ele.hasClass('grid-card-button') || ('hybrid-card-button')) {
                        if ($ele.text().includes(' MORE DETAILS ')) {
                            //Function Callling    
                            cy.start('function calling')
                        }
                        else {
                            cy.get('.mat-button-wrapper').eq(2).click().wait(1000)
                            //Function Callling
                            cy.start('function calling')
                        }
                    }
                    //---------------------------------- 2 nd condition completed----------------------------------------------------------------------------//
                })
            }
        })
    })

})

