const shape = require('../src/shapesLib.js');
const assert = require('assert');

describe("diamondFilled" , function() {
  it("should return filled diamond for dimension greater than 1", function() {
  assert.deepStrictEqual(shape.diamondfilled([5]),['  *',' ***','*****',' ***','  *']);
  })

  it("should return filled diamond when dimension is 1", function() {
    assert.deepStrictEqual(shape.diamondfilled([1]),['*']);
  })

  it("should return empty array when dimension is 0" , function() {
    assert.deepStrictEqual(shape.diamondfilled([0]),[]);
  })
});

describe("diamondHollow", function() {
  it("should return hollow diamond for dimension greater than 1" , function() {
  assert.deepStrictEqual(shape.diamondhollow([3]),[' *','* *',' *'])
  })

  it("should return hollow diamond when dimension is 1", function() {
    assert.deepStrictEqual(shape.diamondhollow([1]),["*"]);
  })

  it("should return empty array dimension is 0" , function() {
    assert.deepStrictEqual(shape.diamondhollow([0]),[]);
  })
});

describe("diamondAlternating" , function() {
  it("should return alternating diamond for dimension greater than 1", function() {
  assert.deepStrictEqual(shape.diamondalternating([3]),[' -','+++',' -']);
  })

  it("should return alternating diamond when dimension is 1", function() {
    assert.deepStrictEqual(shape.diamondalternating([1]),['-']);
  })

  it("should return empty array dimension is 0" , function() {
    assert.deepStrictEqual(shape.diamondalternating([0]),[]);
  })
});

describe("testForDiamondInterlaced" , function() {
  it("should return interlaced diamond for dimension greater than 1", function() {
  assert.deepStrictEqual(shape.diamondinterlaced([3]),[' +','-+-',' +']);
  })

  it("should return interlaced diamond when dimension is 1", function() {
    assert.deepStrictEqual(shape.diamondinterlaced([1]),['+']);
  })

  it("should return empty array dimension is 0" , function() {
    assert.deepStrictEqual(shape.diamondinterlaced([0]),[]);
  })
});

describe("diamondAngled",function() {
  it("should return angled diamond for input greater than 3", function() {
    assert.deepStrictEqual(shape.diamondangled([5]),["  *"," / \\","*   *"," \\ /","  *"]);
  })
});
