const assert = require('assert');
const shape = require('../src/shapesLib.js');
const util = require('../src/utilLib.js');

describe("rectangleHollow", function() {
  it("should return hollow rectangle for argument greater than 2", function() {
  assert.deepStrictEqual(shape.rectanglehollow([4,4]),['****','*  *','*  *','****']);
  })

  it("should return rectangle for argument 2" , function() {
    assert.deepStrictEqual(shape.rectanglehollow([2,2]),['**','**'])
  })
});

describe("rectangleFilled", function() {
  it("should return filled rectangle for given argument", function() {
  assert.deepStrictEqual(shape.rectanglefilled([5,5]),['*****','*****','*****','*****','*****']);
  })
});

describe("rectangleAlternating", function() {
  it("should return alternating rectangle for given argument", function() {
  assert.deepStrictEqual(shape.rectanglealternating([2,3]),['---','+++']);
  })
});

describe("rectangleInterlaced", function() {
  it("should return interlaced rectangle for given argument" , function() {
  assert.deepStrictEqual(shape.rectangleinterlaced([2,3]),['+-+','-+-']);
  })
});

