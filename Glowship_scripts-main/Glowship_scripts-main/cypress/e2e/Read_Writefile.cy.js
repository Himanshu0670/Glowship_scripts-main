describe('Read-write files content', ()=>{

    it('Write a file', ()=>{

        cy.writeFile('sample.txt','Hello Himanshu\n')
        cy.writeFile('sample.txt', 'I am a Devil of my world',{flag: 'a+'})
    })

    it('Read from a file', ()=>{

        cy.readFile('sample.txt').should('contains','Himanshu')
    })

})