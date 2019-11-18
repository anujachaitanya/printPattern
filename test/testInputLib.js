const inputP = require('../src/inputHandlingLib.js');
const assert = require('assert');

describe("isOdd", function() {
  it("should validate positive odd number..", function() {
    assert.ok(inputP.isOdd('a',3));
  })

  it("should validate negative odd number", function() {
    assert.ok(inputP.isOdd('a',-5));
  })

  it("should invalidate positive even number", function() {
    assert.ok(! inputP.isOdd('s',4));
  })

  it("should invalidate negative even number", function() {
    assert.ok(! inputP.isOdd('a',-4));
  })
});

describe("isValidCombination" ,function() {
  it("should validate more than one argument for rectangle", function() {
    assert.ok(inputP.isCombinationValid('rectangle','filled',[2,3]));
  })

  it("should invalidate one argument for rectangle", function() {
    assert.ok(! inputP.isCombinationValid('rectangle','filled',[2]));
  })

  it("should invalidate angled with shapes other than diamond", function() {
    assert.ok(! inputP.isCombinationValid('rectangle','angled',[2]));
  })

  it("should validate angled with diamond", function() {
    assert.ok(inputP.isCombinationValid('diamond','angled',[3]));
  })

  it("should validate odd dimension for diamond", function() {
    assert.ok(inputP.isCombinationValid('diamond','filled',[3]));
  })

  it("should invalidate even dimension for diamond" , function() {
    assert.ok(! inputP.isCombinationValid('diamond','filled',[4]));
  })
});

describe("isEven" , function() {
  it("should validate positive even number", function() {
    assert.ok(inputP.isEven('a','4'));
  })

  it("should validate negative even number", function() {
    assert.ok(inputP.isEven('p',-6));
  })

  it("should invlidate negative odd number", function() {
    assert.ok(! inputP.isEven('a',-1));
  })

  it("should invlidate positive odd number", function() {
    assert.ok(! inputP.isEven('a',1));
  })
});

describe("isValidPattern", function() {
  it("should validate correct pattern", function() {
    assert.ok(inputP.isValidPattern(['-p','hollow']));
  })

  it("should invalidate incorrect pattern", function() {
    assert.ok(! inputP.isValidPattern(['-p','hollowed']));
  })
});

describe("isValidShape" , function() {
  it("should validate correct shape", function() {
    assert.ok(inputP.isValidShape(['-s','rectangle']));
  })

  it("should invalidate incorrect shape", function() {
    assert.ok(! inputP.isValidShape(['-s','rectangl']));
  })
});

describe("isValidDimension" ,function() {
  it("should validate more than one arguments", function() {
    assert.ok(inputP.isValidDimension(['-d',"1,2"]));
  })

  it("should invalidate string as dimension", function() {
    assert.ok(! inputP.isValidDimension(['-d',"1,a"]));
  })

  it("should invalidate empty string as arguments", function() {
    assert.ok(! inputP.isValidDimension(['-d','1,']));
  })
});

describe("isValidPair", function() {
  it("should invalidate wrong shape", function() {
    assert.ok(! inputP.isValidPair(['-s','rectan']));
  })

  it("should validate valid shape", function() {
    assert.ok(inputP.isValidPair(['-s','rectangle']));
  })

  it("should validate valid pattern", function() {
    assert.ok(inputP.isValidPair(['-p','filled']));
  })

  it("should invalidate wrong pattern", function() {
    assert.ok(! inputP.isValidPair(['-s','filled']));
  })
});

describe("getPattern", function() {
  it("should return pattern for given argument", function() {
    assert.deepStrictEqual(inputP.getPattern(['-s','rectangle']),['rectangle']);
  })
});

describe("getOption", function() {
  it("should return option for given argument", function() {
    assert.deepStrictEqual(inputP.getOptions(['-s','triangle']),['-s']);
  })
});

describe("isValidArgv", function() {
  it("should validate valid arguments", function() {
    assert.ok(inputP.isValidArgv([['-s','rectangle'],['-p','filled']]));
  })

  it("should invalidate invalid arguments", function() {
    assert.ok(! inputP.isValidArgv([['-t','rectangle'],['-p','filled']]));
  })
});
