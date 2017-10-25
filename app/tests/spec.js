'use strict';
const utilities = require('../utilities');

describe("The input cleaner", () => {
  const input = "      $$The, QUICK brown, fOx    and the qUIck blue%!%,,   hare.      !";
  const newlineInput = `      $$The,  QUICK brown, fOx\t
  and the   qUIck blue%!%,,   hare.      !`;  
  const escapedInput = "The\tquick brown fox\n\nand\nthe quick\t\t\vblue\rhare.";
  const unicodeInput = "The\u0009quick\u000A\u000Abrown\u0020fox\u000B\u000Dand the quick blue hare.";
  const result = "the quick brown fox and the quick blue hare";  
  
  it("outputs a string", () => {    
    expect(typeof utilities.cleanInput(input)).toBe("string");
  });
  it("returns a well-formed string", () => {    
    expect(utilities.cleanInput(input)).toBe(result);
  });
  it("handles newlines and tabs", () => {    
    expect(utilities.cleanInput(newlineInput)).toBe(result);
  });
  it("handles escape sequences", () => {    
    expect(utilities.cleanInput(escapedInput)).toBe(result);
  });
  it("handles unicode characters", () => {    
    expect(utilities.cleanInput(unicodeInput)).toBe(result);
  });
});

describe("The histogram builder", () => {
  const input = "the quick brown fox and the quick blue hare";
  const pairCount = 8;
  const result = { 
    'the quick': 2,
    'quick brown': 1,
    'brown fox': 1,
    'fox and': 1,
    'and the': 1,
    'quick blue': 1,
    'blue hare': 1 
  };

  it("outputs an object", () => {    
    expect(typeof utilities.buildHistogram(input)).toBe("object");
  });  
  it("returns the correct count", () => {    
    expect(utilities.buildHistogram(input)).toEqual(result);
  });
  it("sums up to the number of pairs", () => {
    const histogram = utilities.buildHistogram(input);
    const sum = Object.keys(histogram).reduce((acc, e) => { return acc + histogram[e] }, 0);
    expect(sum).toBe(pairCount);
  });
  it("builds from a large string", () => {
    const bigInput = require('./large').text;    
    const bigResult = { 
      'the quick': 320,
      'quick brown': 160,
      'brown fox': 160,
      'fox and': 160,
      'and the': 160,
      'quick blue': 160,
      'blue hare': 160,
      'hare the': 159 //repeat gets cut off
    };
    expect(utilities.buildHistogram(bigInput)).toEqual(bigResult);
  });
});