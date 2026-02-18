let rowsLength, c11, c12, a = 0;
const data_1 = [];
// Function is used to get the current time.
function time() {
    const time = new Date()
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: '2-digit', hour12: true });

}
describe('glowsun test2', function () {
    beforeEach(() => {

        cy.visit('https://tpsdev.thelattice.org/')

        cy.wait(3000)
    })
    before(() => {
        cy.task('readXlsx', { file: './cypress/fixtures/webtest2.xlsx', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.log(rowsLength)
            cy.writeFile("./cypress/fixtures/webtest2.json", { rows })
        })
    })
    it('Test on TPS Solar calculator', () => {
        cy.fixture('webtest2').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.wait(2000)
                cy.contains(' CHANGE ').click({ force: true })
                cy.wait(3000)
                cy.get('input[name=pincode').click({ force: true }).clear().type(data.rows[i].Pincode)
                var text_a = "";
                text_a = Math.random().toString(36).slice(2, 7);
                cy.intercept('GET', '/glowsun/api/saas/getAppliance').as(text_a)
                cy.contains(' SUBMIT ').click()
                cy.wait('@' + text_a).wait(2000)
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
                            cy.get('.mat-option').contains(data.rows[i].Run_simultaneously).click({ force: true })
                        }
                        else {
                            cy.get('.mat-select-value').eq(1).click()
                            cy.get('.mat-option').contains(data.rows[i].Run_simultaneously).click({ force: true })
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

                var text_1 = "";
                text_1 = Math.random().toString(36).slice(2, 7);
                cy.intercept('GET', '/glowsun/api/saas/recommendation/1').as(text_1)
                cy.contains(' CALCULATE MY SAVINGS ').click({ force: true })
                const t = time();
                cy.writeFile('cypress/fixtures/Scriptdata/time.txt', t)
                cy.wait('@' + text_1).wait(3000)
                //---------------------------------- 1 st condition started----------------------------------------------------------------------------//
                cy.get('body').then(($ele) => {
                    if (data.rows[i].Electricity_Bill < 499) {
                        cy.get('.mat-snack-bar-container').then(($val) => {
                            data_1.push($val.text(), '------------------------------------Condition completed------------------------------------------------------------')
                            //   data_1.push(new Date().toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',second: '2-digit', hour12: true }))
                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                            cy.reload().wait(2000)
                            cy.window().then((win) => {
                                win.sessionStorage.clear()
                            })
                        })
                    }
                    else if ($ele.text().includes('high demand, inverter not found')) {
                        cy.contains('Grid-tied System').click().wait(1000)
                        cy.document().then(($doc) => {
                            c12 = $doc.querySelectorAll('.mat-headline').length;
                            console.log(c12)
                            if (c12 == 61) {
                                cy.get('.mat-headline').eq(6).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(7).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(9).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(10).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(13).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(15).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.carousel-indicators').click({ force: true })
                                cy.get('.mat-display-1').eq(5).then(($val) => {
                                    data_1.push($val.text() + 'units/mth')
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-display-1').eq(6).then(($val) => {
                                    data_1.push($val.text() + 'units/mth', '------------------------------------Condition completed------------------------------------------------------------')
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })

                            }
                            else {
                                cy.get('.mat-headline').eq(6).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(8).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-title > b').then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.carousel-indicators').click({ force: true })
                                cy.get('.mat-display-1').eq(3).then(($val) => {
                                    data_1.push($val.text() + 'units/mth', '------------------------------------Condition completed------------------------------------------------------------')
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })

                            }
                        })
                        cy.window().then((win) => {
                            win.sessionStorage.clear()
                        })
                    }
                    //---------------------------------- 1 st condition completed----------------------------------------------------------------------------//
                    //---------------------------------- 2 nd condition started----------------------------------------------------------------------------//
                    else {
                        cy.get('.mat-button-wrapper').eq(2).click({ force: true }).wait(1000)
                        /*cy.get('.more-details').click().wait(1000)
                        cy.get('.mat-form-field').eq(1).click().type('example@gmail.com')
                        cy.get('.mat-form-field').eq(2).click().type('9389600131')
                        //cy.get('.mat-form-field').eq(1).click({force:true}).type('000000')
                        var text_2 = "";
                        text_2 = Math.random().toString(36).slice(2, 7);               
                        cy.intercept('PUT', '/api/saas/getOtp').as(text_2)
                        cy.contains('RECEIVE OTP').should('be.enabled').click()
                        //cy.contains('VERIFY OTP').should('be.enabled').click()
                        cy.wait('@'+text_2).wait(3000)*/
                        cy.document().then(($doc) => {
                            c11 = $doc.querySelectorAll('.mat-headline').length;
                            console.log(c11)

                            if (c11 == 35) {
                                cy.get('.mat-headline').eq(13).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(14).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(16).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(17).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(19).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(20).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(23).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(25).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                // This block of code is used to pick (SOLAR ENERGY GENERATED)
                                cy.get('.carousel-indicators').click({ force: true })
                                cy.get('.mat-display-1').eq(1).then(($val) => {
                                    data_1.push($val.text() + 'units/mth')
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-display-1').eq(2).then(($val) => {
                                    data_1.push($val.text() + 'units/mth')
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })

                                cy.contains('Grid-tied System').click().wait(1000)
                                cy.document().then(($doc) => {
                                    c12 = $doc.querySelectorAll('.mat-headline').length;
                                    console.log(c12)
                                    if (c12 == 61) {
                                        cy.get('.mat-headline').eq(6).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(8).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-title > b').then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.carousel-indicators').click({ force: true })
                                        cy.get('.mat-display-1').eq(3).then(($val) => {
                                            data_1.push($val.text() + 'units/mth', '------------------------------------Condition completed------------------------------------------------------------')
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                    }
                                    else {
                                        cy.get('.mat-headline').eq(6).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(7).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(9).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(10).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(13).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(15).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.carousel-indicators').click({ force: true })
                                        cy.get('.mat-display-1').eq(5).then(($val) => {
                                            data_1.push($val.text() + 'units/mth')
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-display-1').eq(6).then(($val) => {
                                            data_1.push($val.text() + 'units/mth', '------------------------------------Condition completed------------------------------------------------------------')
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                    }
                                })
                                cy.window().then((win) => {
                                    win.sessionStorage.clear()
                                })
                            }

                            else {
                                cy.get('.mat-headline').eq(10).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(12).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-headline').eq(14).then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.mat-title > b').then(($val) => {
                                    data_1.push($val.text())
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.get('.carousel-indicators').click({ force: true })
                                cy.get('.mat-display-1').eq(1).then(($val) => {
                                    data_1.push($val.text() + 'units/mth')
                                    cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                })
                                cy.contains('Grid-tied System').click().wait(1000)
                                cy.document().then(($doc) => {
                                    c12 = $doc.querySelectorAll('.mat-headline').length;
                                    console.log(c12)
                                    if (c12 == 61) {
                                        cy.get('.mat-headline').eq(6).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(8).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-title > b').then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.carousel-indicators').click({ force: true })
                                        cy.get('.mat-display-1').eq(3).then(($val) => {
                                            data_1.push($val.text() + 'units/mth', '------------------------------------Condition completed------------------------------------------------------------')
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                    }
                                    else {
                                        cy.get('.mat-headline').eq(6).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(7).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(9).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(10).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(13).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-headline').eq(15).then(($val) => {
                                            data_1.push($val.text())
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.carousel-indicators').click({ force: true })
                                        cy.get('.mat-display-1').eq(5).then(($val) => {
                                            data_1.push($val.text() + 'units/mth')
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                        cy.get('.mat-display-1').eq(6).then(($val) => {
                                            data_1.push($val.text() + 'units/mth', '------------------------------------Condition completed------------------------------------------------------------')
                                            cy.writeFile('cypress/fixtures/Scriptdata/demo_1.json', data_1)
                                        })
                                    }
                                })
                                cy.window().then((win) => {
                                    win.sessionStorage.clear()
                                })
                            }
                        })
                    }
                    //---------------------------------- 2 nd condition completed----------------------------------------------------------------------------//
                })
            }
        })
    })
})

