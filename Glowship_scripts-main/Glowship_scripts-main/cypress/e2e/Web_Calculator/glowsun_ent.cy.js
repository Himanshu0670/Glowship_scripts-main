/// <reference types="cypress" />
import 'C:/Users/himan/Testing/Glowship_scripts/cypress/support/Ent_fun.js'
let rowsLength;
let i = 0;
let a, b, c = 0;
describe('EditSite', () => {
    let userdetails
    beforeEach(() => {
        cy.fixture('UserLogin').then((para) => {
            userdetails = para
            cy.visit('https://saas.test.glowsun.io')
            cy.get('.mat-form-field').type(userdetails.email)
            cy.get('.mat-button-wrapper > span').click()
            cy.get('#mat-input-1').type(userdetails.password)
            let text_1 = Math.random().toString(36).slice(2, 7);
            cy.intercept('GET', '/glowsun/api/admin/dashboard/graphs').as(text_1)
            cy.get('.mat-button-wrapper').click()
            cy.wait('@' + text_1).wait(1000)
            cy.contains('Leads').click()
        })
    })
    before(() => {
        cy.task('readXlsx', { file: 'C:/Users/himan/Testing/Glowship_scripts/cypress/fixtures/Glowsun_Ent.xlsx', sheet: "Sheet5" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("C:/Users/himan/Testing/Glowship_scripts/cypress/fixtures/Ent_glow.json", { rows })
        })
    })

    it('Basic info', () => {
        cy.fixture('Ent_glow').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.get('.mat-form-field').eq(4).click().type(8986876786)
                cy.get('.mat-row > .cdk-column-phone').click()
                cy.contains(' EDIT INFO').click()
                cy.wait(1000)
                cy.get('.mat-select-value').eq(2).click()
                cy.get('.mat-option').contains(data.rows[i].State).click()
                cy.get('.mat-form-field').eq(9).clear().type(data.rows[i].Pincode).wait(2000)
                cy.contains(' SAVE').should('be.enabled')
                cy.contains(' SAVE').click({ force: true }).wait(3000)
                cy.get('.mat-form-field').eq(4).click().type(8986876786)
                cy.get('.mat-row > .cdk-column-phone').click().wait(2000)
                let text_2 = Math.random().toString(36).slice(2, 7);
                cy.intercept('GET', '/glowsun/api/admin/utility_company/319').as(text_2)
                cy.contains('Site Details').click()
                cy.wait('@' + text_2).wait(1000)
                cy.contains('Edit').click()
                cy.contains('General Information').click()
                cy.get('.mat-form-field').eq(0).clear().type(data.rows[i].Electricity_Bill)
                cy.get('.mat-form-field').eq(2).clear().type(data.rows[i].No_of_People)
                cy.get('.mat-form-field').eq(3).clear().type(data.rows[i].Roof_area)
                if (data.rows[i].UPS_Power_Backup === 'Yes') {
                    cy.get('.mat-radio-button').eq(7).click()
                }
                else {
                    cy.get('.mat-radio-button').eq(8).click()
                }
                if (data.rows[i].Supply_phase === 'Single Phase') {
                    cy.get('.mat-radio-button').eq(9).click()
                }
                else {
                    cy.get('.mat-radio-button').eq(10).click()
                }
                cy.get(':checkbox').uncheck({ force: true })
                if (data.rows[i].Geysers === 'Yes') {
                    cy.get('.mat-checkbox').eq(0).click()
                    cy.get('.mat-select-value').eq(1).click()
                    cy.get('.mat-option').contains(data.rows[i].Run_simultaneously).click()
                }
                if (data.rows[i].Geysers === 'Yes') {
                    if (data.rows[i].AC_Heaters === 'Yes') {
                        cy.get('mat-checkbox').eq(1).click()
                        cy.get('.mat-select-value').eq(2).click()
                        cy.get('.mat-option').contains(data.rows[i].Run_Simultaneously).click()
                    }
                }
                else {
                    if (data.rows[i].AC_Heaters === 'Yes') {
                        cy.get('mat-checkbox').eq(1).click()
                        cy.get('.mat-select-value').eq(1).click()
                        cy.get('.mat-option').contains(data.rows[i].Run_Simultaneously).click()
                    }
                }
                if (data.rows[i].Dishwasher === 'Yes') {
                    cy.get('.mat-checkbox').eq(2).click()
                }
                if (data.rows[i].Induction_stove === 'Yes') {
                    cy.get('.mat-checkbox').eq(3).click()
                }
                if (data.rows[i].Microwave_oven === 'Yes') {
                    cy.get('.mat-checkbox').eq(4).click()
                }
                if (data.rows[i].Floor === 'First') {
                    cy.get('.mat-radio-button').eq(2).click()
                }
                else if (data.rows[i].Floor === 'Second') {
                    cy.get('.mat-radio-button').eq(3).click()
                }
                else if (data.rows[i].Floor === 'Third') {
                    cy.get('.mat-radio-button').eq(4).click()
                }
                else {
                    cy.get('.mat-radio-button').eq(5).click()
                }

                cy.contains('Next').click()
                let text_3 = Math.random().toString(36).slice(2, 7);
                cy.intercept('GET', '/glowsun/api/admin/web_calculator/319').as(text_3)
                cy.contains('Save and Continue').click()
                cy.wait('@' + text_3).wait(1000)
                cy.fir("function calling");
            }
        })
    })
})
