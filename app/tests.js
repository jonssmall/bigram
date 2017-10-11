const utilities = require('./utilities');

describe("The histogram builder", function() {
  const input = "the quick brown fox and the quick blue hare";
  const result = { 
    'the quick': 2,
    'quick brown': 1,
    'brown fox': 1,
    'fox and': 1,
    'and the': 1,
    'quick blue': 1,
    'blue hare': 1 
  };

  it("outputs an object", function() {    
    expect(typeof utilities.buildHistogram(input)).toBe("object");
  });

  it("returns the correct count", function() {    
    expect(utilities.buildHistogram(input)).toEqual(result);
  });
});

describe("The input cleaner", function() {
  const input = "      $$The, QUICK brown, fOx    and the qUIck blue%!%,,   hare.      !";
  const newlineInput = `      $$The,  QUICK brown, fOx\t
  and the   qUIck blue%!%,,   hare.      !`;  
  const escapedInput = "The\tquick brown fox\n\nand\nthe quick\t\t\vblue\rhare.";
  const unicodeInput = "The\u0009quick\u000A\u000Abrown\u0020fox\u000B\u000Dand the quick blue hare.";
  const result = "the quick brown fox and the quick blue hare";
  
  
  it("outputs a string", function() {    
    expect(typeof utilities.cleanInput(input)).toBe("string");
  });
  it("returns a well-formed string", function() {    
    expect(utilities.cleanInput(input)).toBe(result);
  });
  it("handles newlines and tabs", function() {    
    expect(utilities.cleanInput(newlineInput)).toBe(result);
  });
  it("handles escape sequences", function() {    
    expect(utilities.cleanInput(escapedInput)).toBe(result);
  });
  it("handles unicode characters", function() {    
    expect(utilities.cleanInput(unicodeInput)).toBe(result);
  });
});