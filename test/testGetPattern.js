const getPattern = require('../src/getPattern.js');
const assert = require('assert');

describe("findDimension" , function() {
  it("should return array for -d as specifier", function() {
  assert.deepStrictEqual(getPattern.findDimensions([5,5],['-d',"1,2,3"]),[1,2,3]);
  })
  
  it("should return default array when specifier is not -d", function() {
  assert.deepStrictEqual(getPattern.findDimensions([5,5],['-s',"1,2,3"]),[5,5]);
  })
});

describe("findPattern" , function() {
  it("should return pattern for -p as specifier", function() {
    assert.strictEqual(getPattern.findPattern("filled",['-p','hollow']),"hollow");
  })

  it("should return default pattern when specfier is not -p", function() {
    assert.strictEqual(getPattern.findPattern("filled",['-s','hollow']),"filled");
  })

});

describe("findShape" , function() {
  it("should return shape for -s as specifier", function() {
  assert.strictEqual(getPattern.findShape("rectangle",['-s','triangle']),'triangle');
  })

  it("should return default shape when specifier is not -s", function() {
  assert.strictEqual(getPattern.findShape("rectangle",['-p','filled']),'rectangle');
  })
});

describe("getPattern" , function() {
  it("should return a shape for valid input", function() {
  assert.strictEqual(getPattern.getPattern(['-s','rectangle']),"*****\n*****\n*****\n*****\n*****");
  assert.strictEqual(getPattern.getPattern(['-s','rectangle','-p','hollow']),"*****\n*   *\n*   *\n*   *\n*****");
  })

  it("should invalidate a wrong input", function() {
    assert.strictEqual(getPattern.getPattern(['-t','rectangle']),"wrong input");
  })
});

