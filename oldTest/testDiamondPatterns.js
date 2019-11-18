const shape = require('../src/shapesLib.js');
const assert = require('assert');

const testForDiamondFilled = function() {
  console.log("test for diamondFilled function");
  assert.deepStrictEqual(shape.diamondfilled([3]),[' *','***',' *']);
};

const testFordiamondHollow = function() {
  console.log("test for diamondHollow function");
  assert.deepStrictEqual(shape.diamondhollow([3]),[' *','* *',' *'])
};

const testForDiamondAlternating = function() {
  console.log("test for diamondalternating function");
  assert.deepStrictEqual(shape.diamondalternating([3]),[' -','+++',' -']);
};

const testForDiamondInterlaced = function() {
  console.log("test for diamondinterlaced function");
  assert.deepStrictEqual(shape.diamondinterlaced([3]),[' +','-+-',' +']);
};

const runTests = function() {
  console.log("\ntests for diamond patterns....\n");
  testForDiamondFilled();
  testFordiamondHollow();
  testForDiamondAlternating();
  testForDiamondInterlaced();
  console.log("\ntesting done.");
};

runTests();
