const util = require('../src/utilLib.js');
const assert = require('assert');

const testForRepeatChar = function() {
  console.log("test for repeatChar function ...");
  assert.equal(util.repeatChar(3,"*"),"***");
};

const testForCreatePattern = function() {
  console.log("test for createPattern function");
  assert.strictEqual(util.createPattern(['*','**']),"*\n**")
};

const testGetRange = function() {
  console.log("test for getRange function");
  assert.deepStrictEqual(util.getRange(5),[1,2,3,4,5]);
};

const runTests = function() {
  console.log("running utilLib tests....\n");
  testForRepeatChar();
  testGetRange();
  testForCreatePattern();
  console.log("\n....testing done.")
};

runTests();



