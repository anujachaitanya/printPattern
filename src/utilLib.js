const repeatChar = function(times, character) {
  if(times < 0) {
    return "";
  }
  return character.repeat(times);
};
  
const createPattern = function(shape) {
  return shape.join("\n");
};

const getRange = function(limit,incrementBy) {
  if(incrementBy < 1) {
    return [];
  }
  let range =[];
  incrementBy = incrementBy || 1;
  for(let element = 1; element <= limit; element += incrementBy) {
    range.push(element);
  }
  return range;
};

exports.repeatChar = repeatChar;
exports.createPattern = createPattern;
exports.getRange = getRange;
