var assert = require('assert');
var superagent = require('superagent');
var status = require('http-status');
 
describe('/user', function() {
  var app = require('../app');
  var server;
  before(function() {
    server = app.listen(3000);
  });
 
  after(function() {
    server.close();
  });
 
  it('returns user object if name is a valid user', function(done) {
    superagent.get('http://localhost:3000/list/test').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      var result = JSON.parse(res.text);      
      assert.deepEqual({ "username": "test", "data": ["Coffee", "Tea"] }, result);
      done();
    });
  });

  it('returns 404 if name is an invalid user', function(done) {
    superagent.get('http://localhost:3000/list/invalid').end(function(err, res) {
      assert.equal(res.status, status.NOT_FOUND);
      done();
    });
  });  
});