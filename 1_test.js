'use strict';
var multiples = require('./multiples');
var should = require('should');
describe('The sum of multiples', function() {
  describe('Multiples()', function() {
    it('should return multiples of 3 or 5', function () {
        multiples(10).should.equal(23);
        multiples(20).should.equal(78);
    });
  });
});
