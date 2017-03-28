
var supertest = require("supertest");
var should = require("should");
var app = require('../server.js');
// var expect = require('expect');

var server = supertest.agent("http://localhost:8080");

describe('Hello World testing', function () {

	describe('Get all Tasks', function () {
        it('Should get status equal success ', function (done) {
			server
				.get("/index.htm")
				.end(function (err, results) {
				 // console.log(results);
					results.status.should.equal(200);
					done();
				});
		});
 	});
	});
