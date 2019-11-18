const pattern = require("./patternLib.js")
const util = require("./utilLib.js");

const rectangleFilled = function(dimension) {
  let shape = util.getRange(+dimension[0]).fill(+dimension[1]);
  shape = shape.map(pattern.filled)
  return shape;
};

const rectangleHollow = function(dimension) {
  let range = util.getRange(+dimension[0]).fill(+dimension[1]);
  shape = range.map(pattern.filled);
  let hollowRow = pattern.hollow(+dimension[1]);
  shape = shape.fill(hollowRow,1,-1);
  return shape;
};

const rectangleAlternating = function(dimension) {
  let shape = util.getRange(+dimension[0]).fill(+dimension[1]);
  shape = shape.map(pattern.alternating);
  return shape;
};

const rectangleInterlaced = function(dimension) {
  let range = util.getRange(+dimension[0]).fill(+dimension[1]);
  let shape = range.map(pattern.interlaced);
  return shape;
};

const triangleHollow = function(dimension) {
  let range = util.getRange(+dimension[0]);
  shape = range.map(pattern.hollow);
  filledRow = pattern.filled(range[range.length -1]);
  shape[shape.length -1 ] = filledRow;
  return shape;
};

const triangleAlternating = function(dimension) {
  let range = util.getRange(+dimension[0]);
  shape = range.map(pattern.alternating);
  return shape;
};

const triangleInterlaced = function(dimension) {
  let range = util.getRange(+dimension[0]);
  shape = range.map(pattern.interlaced);
  return shape;
};

const triangleFilled = function(dimension) {
  let shape = util.getRange(+dimension[0]);
  shape = shape.map(pattern.filled);
  return shape;
};

const diamondFilled = function(dimension) {
  let range = util.getRange(+dimension[0],2);
  range = range.concat(range.slice(0,-1).reverse());
  shape = range.map(pattern.filled);
  addSpacesToShape = pattern.addSpaces(+dimension[0]);
  shape = shape.map(addSpacesToShape);
  return shape;
};

const diamondAlternating = function(dimension) {
  let range = util.getRange(+dimension[0],2);
  range = range.concat(range.slice(0,-1).reverse());
  shape = range.map(pattern.alternating);
  addSpacesToShape = pattern.addSpaces(+dimension[0]);
  shape = shape.map(addSpacesToShape);
  return shape;
};

const diamondHollow = function(dimension) {
  let range = util.getRange(+dimension[0],2);
  range = range.concat(range.slice(0,-1).reverse());
  shape = range.map(pattern.hollow);
  addSpacesToShape = pattern.addSpaces(+dimension[0]);
  shape = shape.map(addSpacesToShape);
  return shape;
};

const diamondInterlaced = function(dimension) {
  let range = util.getRange(+dimension[0],2);
  range = range.concat(range.slice(0,-1).reverse());
  shape = range.map(pattern.interlaced);
  addSpacesToShape = pattern.addSpaces(+dimension[0]);
  shape = shape.map(addSpacesToShape);
  return shape;
};

const diamondangled = function(dimension) {
  let range = util.getRange(dimension[0],2);
  let edgeRow = pattern.filled(range[0]);
  let middleRow = pattern.hollow(range[range.length -1]);
  let upperHalf = range.slice(1,-1).map(pattern.angled);
  upperHalf.unshift(edgeRow);
  upperHalf.push(middleRow);
  let lowerHalf = upperHalf.slice(0,-1).reverse().map(pattern.reverseStr);
  shape = upperHalf.concat(lowerHalf); 
  addSpacesToShape = pattern.addSpaces(dimension[0]);
  shape = shape.map(addSpacesToShape);
  return shape;
};

exports.rectanglehollow = rectangleHollow;
exports.rectanglefilled = rectangleFilled;
exports.rectanglealternating = rectangleAlternating;
exports.rectangleinterlaced = rectangleInterlaced;
exports.trianglefilled = triangleFilled;
exports.trianglehollow = triangleHollow;
exports.trianglealternating = triangleAlternating;
exports.triangleinterlaced = triangleInterlaced;
exports.diamondalternating = diamondAlternating;
exports.diamondfilled = diamondFilled;
exports.diamondinterlaced = diamondInterlaced;
exports.diamondhollow = diamondHollow;
exports.diamondangled = diamondangled;
