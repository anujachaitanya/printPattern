const util = require('../src/utilLib.js');
const assert = require('assert');

describe("repeatChar", function() {
  it("should repeat given char for more than one times...",function(){
  assert.equal(util.repeatChar(3,"*"),"***");
  })
  
  it("should return empty string for 0 times" , function() {
    assert.equal(util.repeatChar(0,"*"),"");
  })

  it("should return empty string for negative input", function() {
    assert.strictEqual(util.repeatChar(-1,"*"),"");
  })
});

describe("createPattern" , function() {
  it("should join array with more than one element", function() {
    assert.strictEqual(util.createPattern(['*','**']),"*\n**");
  })

  it("should return element as it is for single element array" , function() {
    assert.strictEqual(util.createPattern(["*"]),"*");
  })

  it("should return empty string for empty array", function() {
    assert.strictEqual(util.createPattern([]),"");
  })
});

describe("getRange" , function() {
  it("should return a range for whole number as limit with positive incrementer", function() {
    assert.deepStrictEqual(util.getRange(5,2),[1,3,5]);
  })
  
  it("should return a empty array for negative incrementer", function() {
    assert.deepStrictEqual(util.getRange(5,-2),[]);
  })

  it("should return a empty array for negative limit" , function() {
    assert.deepStrictEqual(util.getRange(-5,-1),[]);
  })

  it("should return a range when incrementer is not given", function() {
    assert.deepStrictEqual(util.getRange(5),[1,2,3,4,5]);
  })
});

