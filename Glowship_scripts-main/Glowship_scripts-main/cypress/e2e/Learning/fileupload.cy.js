describe('Fileupload', () => {
    it('File', () => {
        cy.visit('https://fineuploader.com/demos.html')
        const upload = 'logo.png';
        cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').attachFile(upload)
        cy.wait(1000)
        /*cy.visit('https://the-internet.herokuapp.com/upload')
        const fileName1  = 'cypress.zip';
        const fileName2 = 'logo.png';
        cy.get('#file-upload').attachFile(fileName2).wait(2000)
        cy.get('#file-submit').click();
        cy.get('body').should('contain.text','File Uploaded!');*/
    })
})



 // To select a file --  cy.get('input[type=file]').selectFile('./cypress/fixtures/option.jpg' , {force: true})