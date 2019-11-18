const shape = require('../src/shapesLib.js');
const assert = require('assert');

describe("filledTriangle", function() {
  it("should return filled triangle dimension greater than 1", function() {
    assert.deepStrictEqual(shape.trianglefilled([3]),['*','**','***']);
  })
});

describe("hollowTriangle", function() {
  it("should return hollow triangle for dimension greater than 1", function() {
  assert.deepStrictEqual(shape.trianglehollow([3]),['*','**','***']);
  })
});

describe("testForInterlacedTriangle", function() {
  it("test for triangleinterlaced function", function() {
  assert.deepStrictEqual(shape.triangleinterlaced([2]),['+','-+']);
  })
});

describe("trianglealternating", function() {
  it("should return alternating triangle for given argument", function() {
  assert.deepStrictEqual(shape.trianglealternating([2]),['-','++']);
  })
});

