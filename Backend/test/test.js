var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var mysql = require('./../routes/mysql');
describe('Routing', function() {
	var url = 'http://localhost:3000';
	it('is should successfully login into the application', function(done) {
	    var profile = {
		username: 'kotu',
		password: 'kotu'
	    };
	    request(url)
		.post('/api/validate/')
		.send(profile)
	    .expect(200)
		.end(function(err, res) {
			if (err) {
				throw err;
			}
			done();
		});
    });

	it('it should return all posts', function(done) {
	    request(url)
		.get('/api/getpost')
		.expect(200)
		.end(function(err, res) {
			if (err) {
				throw err;
			}
			done();
		});
    });

});
