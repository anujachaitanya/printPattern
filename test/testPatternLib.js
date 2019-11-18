const assert = require('assert');
const pattern = require('../src/patternLib.js');

describe("createFilledRow", function() {
  it("should repeat * given no. of times", function() {
    assert.strictEqual(pattern.filled(3),"***");
  })

  it("should return empty string for 0 as input", function() {
    assert.strictEqual(pattern.filled(0),"");
  })
});

describe("createAngledRow", function() {
  it("should return angled row input greater than 1", function() {
    assert.strictEqual(pattern.angled(3),"/ \\");
  })
});

describe("createHollowRow", function() {
  it("should return hollow row for input greater than 2" , function() {
    assert.strictEqual(pattern.hollow(3),"* *");
  })
});

describe("reverseStr", function() {
  it("should return reverse a string", function() {
    assert.strictEqual(pattern.reverseStr("abd"),"dba");
  })
});
