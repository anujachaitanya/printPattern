const shape = require('../src/shapesLib.js');
const assert = require('assert');

const testForFilledTriangle = function() {
  console.log("test for trianglefilled function");
  assert.deepStrictEqual(shape.trianglefilled([3]),['*','**','***']);
};

const testForHollowTriangle = function() {
  console.log("test for trianglehollow function");
  assert.deepStrictEqual(shape.trianglehollow([3]),['*','**','***']);
};

const testForInterlacedTriangle  = function() {
  console.log("test for triangleinterlaced function");
  assert.deepStrictEqual(shape.triangleinterlaced([2]),['+','-+']);
};

const testForAlternatingTriangle  = function() {
  console.log("test for trianglealternating");
  assert.deepStrictEqual(shape.trianglealternating([2]),['-','++']);
};

const runtests  = function() {
  console.log("\ntests for triangle patterns\n");
  testForFilledTriangle();
  testForHollowTriangle();
  testForInterlacedTriangle();
  testForAlternatingTriangle()
  console.log("\n testing done.");
};

runtests();
