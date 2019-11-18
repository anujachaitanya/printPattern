const isOdd = function(element, index) {
  return index % 2 != 0;
};

const isEven = function(element, index) {
  return index %2  == 0;
};
const getOptions = function(inputs) {
  return inputs.filter(isEven);
};

const getPattern = function(inputs) {
  return inputs.filter(isOdd);
};

const zip = function(list1, list2) {
  const length = Math.min(list1.length, list2.length);
  const  zippedArray = [];
  for(index = 0; index < length; index ++) {
    zippedArray.push([list1[index], list2[index]]);
  }
  return zippedArray;
};

const isValidShape = function(pair) {
  shapes =['rectangle','triangle','diamond'];
  if(pair[0] == '-s') {
    return shapes.includes(pair[1]);
  };
};

const isValidPattern = function(pair) {
  let pattern = ['hollow','alternating','filled','interlaced','angled'];
  if(pair[0] == '-p') {
    return pattern.includes(pair[1]);
  }
};

const isNumber = function(element) {
  return element != "" && Number.isInteger(+element) && +element >=0;
};

const isValidDimension = function(pair) {
  if(pair[0] == '-d' && pair.length == 2) {
    splited = pair[1].split(",");
    return splited.every(isNumber);
  }
};

const isValidPair = function(pair) {
  return (isValidShape(pair) || isValidPattern(pair) || isValidDimension(pair));
};

const isValidArgv = function(list) {
  return list.every(isValidPair);
};

const isCombinationValid = function(shape,pattern,dimension) {
  if(shape != 'diamond' && pattern == 'angled') return false;
  if(shape == 'rectangle' && dimension.length < 2) return false;
  if(shape == 'diamond' && dimension[0]%2 ==0) return false;
  return true;

  // const isRectangle = shape == 'rectangle';
  // const isAngled = pattern == 'angled';

  // let shapeValid = !(pattern == "angled" && shape != "diamond");
  // let rectDimension = !(shape == "rectangle" && dimension.length < 2);
  // let diamondDimension = !(shape == "diamond" && dimension[0] % 2 == 0);
  // return shapeValid && rectDimension && diamondDimension;
};

exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isValidShape = isValidShape;
exports.isValidPattern = isValidPattern;
exports.isValidDimension = isValidDimension;
exports.isValidPair = isValidPair;
exports.getOptions = getOptions;
exports.getPattern = getPattern;
exports.zip = zip;
exports.isValidArgv = isValidArgv;
exports.isCombinationValid = isCombinationValid;
