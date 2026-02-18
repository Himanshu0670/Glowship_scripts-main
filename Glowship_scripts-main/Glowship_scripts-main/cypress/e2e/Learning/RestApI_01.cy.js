describe( 'HTTP Example', function(){
    
    // To set the base URL for all the same api request
    //  cypress.config('baseUrl', 'http://restapi.adequateshop.com/api')
    it('GET', function() {
        cy.request({
            method : 'GET',
            url : 'http://restapi.adequateshop.com/api/Tourist?page=2',
    
        }). then(function( response){
            expect (response).have.property('status', 200);
            expect (response.body).not.to.be.null
            expect (response.body.data).to.have.length(10) 
    })
      })
    it('POST', function () {
        cy.request({
            method: 'POST',
            url: 'http://dummy.restapiexample.com/api/v1/create',
           /* body: {
                "email": 'himanshu@thelattice.in',
                "name" : '121',
                "id" : 22
                
            },*/
            headers: {
                'content-type': 'application/json'
            }
        }). then( function (response) {
            expect (response).have.property('status', 200);
            expect (response.headers).have.property('content-type');
            expect (response.body).to.have.property('status', "success")
            expect (response.body).to.have.property('message', "Successfully! Record has been added.")
            expect (response.headers).have.property('content-length')
            /*expect (response.body.data.json).to.deep.equal({
                "email": 'himanshu@thelattice.in',
                "name" : '121',
                "id" : 22 
            })*/
        })
    })
        
    it.only('Put Request', function () {
        const item = {"name": "test1", "salary" : 20000}
        cy.request({ method:'PUT', url : 'http://dummy.restapiexample.com/api/v1/update/21', body: item}).        
        its('body').
        its('data').should('include', {"name" : "test1"}).and
        its('headers').should('include', 'display')
         
      })
    it('Patch Request', function () {
        cy.request('PATCH', 'https://httpbin.org/patch', { 'name': 'Ram' }).
        then( (response) => {
            expect(response.body).to.have.property('json');
            expect (response. body.json).to.deep.equal({ "name": "Ram"})
        })
    })
        
}) 



//cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees')