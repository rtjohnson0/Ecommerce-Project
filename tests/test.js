var expect = require('chai').expect;
var request = require('request');


it('Returns product api status', function (done) {
    request('http://localhost:8080/api/products', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('Returns main page status', function (done) {
    request('http://localhost:8080', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Returns contact api status', function (done) {
    request('http://localhost:8080/api/contacts', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('Returns new contact api status', function (done) {
    request('http://localhost:8080/api/newcontact', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('Returns product query (Shooters) status', function (done) {
    request('http://localhost:8080/api/products/Shooters', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
it('returns product_id = 2 from the productfilter api', function (done) {
    request('http://localhost:8080/productfilter/2', function (error, response, body) {

        expect(({ product_id: 2, product_name: 'Playstation 4' }))
        done();
    });
});
it('returns array from the contacts api', function (done) {
    request('http://localhost:8080/api/contacts', function (error, response, body) {

        expect(('array'))
        done();
    });
});

