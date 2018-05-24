const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server',() => {

describe('Get / ',() => {

    it('should handle app response',(done) => {
        request(app)
        .get('/')
        .expect(200)
        .expect('hello world')
        .end(done);
        });
        
})

describe('Get /users ',() => {
    
it('should return user object',(done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => { 
        expect(res.body).toInclude({
name:'sree',
age:33
        });
    })
    .end(done);
    });
})

});

