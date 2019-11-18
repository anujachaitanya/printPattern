const inputP = require('./inputHandlingLib.js');
const patternL = require('./shapesLib.js');
const util = require('./utilLib.js');

const findPattern = function(context, element) {
  if(element[0] == '-p') {
    context = element[1];
    return context;
  }
  return context;
};

const findShape = function(context, element) {
  if(element[0] == '-s') {
    context = element[1];
    return context;
  }
  return context;
};

const findDimensions = function(context, element) {
  if(element[0] == '-d') {
    let splited= element[1].split(",");
    context = splited.map(function(x){ return +x;});
  }
  return context;
};

const getPattern = function(inputs) {
  let options = inputP.getOptions(inputs);
  let patterns = inputP.getPattern(inputs);
  let zippedInput = inputP.zip(options, patterns);

  let pattern = zippedInput.reduce(findPattern,"filled");
  let shape = zippedInput.reduce(findShape,"rectangle");
  let dimension = zippedInput.reduce(findDimensions,[5,5])
  let isInputValid = (inputs.length %2 == 0);

  if(inputP.isValidArgv(zippedInput) && isInputValid && inputP.isCombinationValid(shape,pattern,dimension)) {
    pattern = shape+pattern;
    return drawPattern(pattern,dimension);
  }
  return "wrong input";
};

const drawPattern = function(pattern,dimension) {
  return util.createPattern(patternL[pattern](dimension));
};

exports.findDimensions = findDimensions;
exports.findPattern = findPattern;
exports.findShape = findShape;
exports.getPattern = getPattern;
