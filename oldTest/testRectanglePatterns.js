const assert = require('assert');
const shape = require('../src/shapesLib.js');
const util = require('../src/utilLib.js');

const testHollowRectangle = function() {
  console.log("test for rectanglehollow function");
  assert.deepStrictEqual(shape.rectanglehollow([4,4]),['****','*  *','*  *','****']);
};

const testForRectangleFilled = function() {
  console.log("test for rectangleFilled function");
  assert.deepStrictEqual(shape.rectanglefilled([5,5]),['*****','*****','*****','*****','*****']);
};

const testForAlternateRectangle = function() {
  console.log("tests for rectangleAlternate function");
  assert.deepStrictEqual(shape.rectanglealternating([2,3]),['---','+++']);
};

const testForRectangleInterlaced = function() {
  console.log("test for rectangleinterlaced function");
  assert.deepStrictEqual(shape.rectangleinterlaced([2,3]),['+-+','-+-']);
};

const runTests = function() {
  console.log("\n running rectanglePattern tests....\n")
  testForRectangleFilled();
  testForAlternateRectangle();
  testHollowRectangle();
  testForRectangleInterlaced();
  console.log("\n....testing done.\n")
};

runTests();
