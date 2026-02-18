
it('Dumy',()=>{
  //  cy.visit('file:///C:/Repligen/KF%20Comm%202C/bin/dist/index.html#/auth/login')
      cy.visit('http://admin.repligen.thelattice.org/auth/login')
      cy.get('#mat-input-0').type('rahul@gmail.com')
      cy.get('#mat-input-1').type('password')
      cy.contains('LOGIN').click({force:true})
   })