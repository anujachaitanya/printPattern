util = require('./utilLib.js');

const createFilledRow = function(times) {
  return util.repeatChar(times,"*");
};

const createAngledRow = function(times) {
  return "/" + util.repeatChar(times-2," ") + "\\";
};

const reverseStr = function(string) {
  return string.split("").reverse().join("");
};

const createHollowRow = function(times) {
  let row = "";
  for(let repeat = 0; repeat < times; repeat++) {
    if(repeat == 0 || repeat == times-1) {
      row = row + "*";
    } else {
    row = row + " ";
    }
  }
  return row;
};

const createAlternatingRow = function(times,rowNo) {
  let symbols = ['-','+'];
  let character = symbols[rowNo % 2]
  return util.repeatChar(times,character);
};

const createInterLacedRow = function(times,rowNo) {
  let symbols = ['+','-'];
  let result = "";
  let index = rowNo % 2;
  for(let i = 0; i < times; i++) {
    result = result + symbols[index];
    index == 1? index =0 : index = 1;
  }
  return result;
};

const addSpaces = function(length) {
  return function(string) {
    let noOfSpaces = (length - string.length)/2; 
    return util.repeatChar(noOfSpaces," ") + string;
  }
};

exports.addSpaces = addSpaces;
exports.hollow = createHollowRow;
exports.alternating = createAlternatingRow;
exports.filled = createFilledRow;
exports.interlaced = createInterLacedRow;
exports.angled = createAngledRow;
exports.reverseStr = reverseStr;
