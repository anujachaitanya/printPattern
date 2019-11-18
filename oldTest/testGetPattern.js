const getPattern = require('../src/getPattern.js');
const assert = require('assert');

const testForFindDimension = function() {
  console.log("tests for findDimensions function");
  assert.deepStrictEqual(getPattern.findDimensions([5,5],['-d',"1,2,3"]),[1,2,3]);
  assert.deepStrictEqual(getPattern.findDimensions([5,5],['-s',"1,2,3"]),[5,5]);
};

const testForFindPattern = function() {
  console.log("tests for findPattern function");
  assert.strictEqual(getPattern.findPattern("filled",['-s','triangle']),"filled");
  assert.strictEqual(getPattern.findPattern("filled",['-p','hollow']),"hollow");
};

const testForFindShape = function() {
  console.log("tests for findShape function");
  assert.strictEqual(getPattern.findShape("rectangle",['-s','triangle']),'triangle');
  assert.strictEqual(getPattern.findShape("rectangle",['-p','filled']),'rectangle');
};

const testGetPattern = function() {
  console.log("tests for getPattern function");
  assert.strictEqual(getPattern.getPattern(['-s','rectangle']),"*****\n*****\n*****\n*****\n*****");
  assert.strictEqual(getPattern.getPattern(['-s','rectangle','-p','hollow']),"*****\n*   *\n*   *\n*   *\n*****");
};

const runTests = function() {
  console.log("\ntests for getPattern.js....\n");
  testForFindPattern();
  testForFindDimension();
  testForFindShape();
  testGetPattern();
  console.log("\n....testing done. ")
};

runTests();
