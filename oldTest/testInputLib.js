const inputP = require('../src/inputHandlingLib.js');
const assert = require('assert');

const testForIsOdd = function() {
  console.log("test for isOdd..");
  assert.ok(inputP.isOdd('a',3));
};

const testForIsValidation = function() {
  console.log("test for isValidCombination")
  assert.ok(inputP.isCombinationValid('rectangle','filled',[2,3]));
  assert.ok(! inputP.isCombinationValid('rectangle','filled',[2]));
  assert.ok(! inputP.isCombinationValid('rectangle','angled',[2]));
};

const testForIsEvem = function() {
  console.log("test for isEven");
  assert.ok(inputP.isEven('b',4));
};

const testForIsValidPattern = function() {
  console.log("test for isValidPattern");
  assert.strictEqual(inputP.isValidPattern(['-p','hollow']),true);
};

const testForIsValidShape = function() {
  console.log("test for isValidShape");
  assert.ok(inputP.isValidShape(['-s','rectangle']));
  assert.ok(! inputP.isValidShape(['-s','rectangl']));
};

const testForIsValidDimension = function() {
  console.log("test isValidDimension function");
  assert.ok(inputP.isValidDimension(['-d',"1,2"]));
  assert.ok(! inputP.isValidDimension(['-d',"1,"]));
};

const testForIsValidPair = function() {
  console.log("test is isValidPair");
  assert.ok(inputP.isValidPair(['-s','rectangle']));
  assert.ok(inputP.isValidPair(['-p','filled']));
  assert.ok(! inputP.isValidPair(['-s','filled']));
};

const testGetPattern = function() {
  console.log("test for getPattern");
  assert.deepStrictEqual(inputP.getPattern(['-s','rectangle']),['rectangle']);
};

const testForGetOption = function() {
  console.log("test for getOptions");
  assert.deepStrictEqual(inputP.getOptions(['-s','triangle']),['-s']);
};

const testForIsValidArgv = function() {
  console.log("test for isValidArgv");
  assert.ok(inputP.isValidArgv([['-s','rectangle'],['-p','filled']]));
  assert.ok(! inputP.isValidArgv([['-t','rectangle'],['-p','filled']]));
};

const runTests = function() {
  console.log("\nrunning inputLib tests....\n");
  testForIsOdd();
  testForIsEvem();
  testForIsValidShape();
  testForIsValidPattern();
  testGetPattern();
  testForIsValidPair();
  testForGetOption();
  testForIsValidDimension();
  testForIsValidArgv();
  testForIsValidation();
  console.log("\n....testing done.\n");
};

runTests();
