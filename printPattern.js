const inputP = require('./src/inputHandlingLib.js');
const draw = require('./src/getPattern.js');
let inputs = process.argv.slice(2)
const main = function() {
  console.log(draw.getPattern(inputs));
};

main();
