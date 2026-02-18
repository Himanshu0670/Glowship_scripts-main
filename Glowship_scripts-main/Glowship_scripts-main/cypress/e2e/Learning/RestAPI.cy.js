describe( 'HTTP Example', function(){
    
    it('GET', function() {
        cy.request({
            method : 'GET',
            url : 'https://httpbin.org/get',
    
        }). then(function( response){
            expect (response.body).have.property('url');
    })
    })
    it.only('POST', function () {
        cy. request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                "name": 'Pramod',
                 "age": 27
            },
            headers: {
                'content-type': 'application/json'
            }
        }). then( function (response) {
            expect (response. body). have.property('json');
            expect (response. body.json).to.deep.equal({
                "name": 'Pramod',
                "age": 27
            });
        })
    })
        
    it.only('Put Request', function () {
        cy.request('PUT', 'https://httpbin.org/put', { 'name': 'Himanshu' 
    }).then((response) => {
            expect (response.body).to.have.property('json');
            expect(response. body.json).to.deep.equal({ "name": "Himanshu"})
        })
    })
    it('Patch Request', function () {
        cy.request('PATCH', 'https://httpbin.org/patch', { 'name': 'Ram' 
    }).
        then( (response) => {
            expect(response.body).to.have.property('json');
            expect (response. body.json).to.deep.equal({ "name": "Ram"})
        })
    })
        
}) 
