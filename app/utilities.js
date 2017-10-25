'use strict';
/*
  Input: The contents of the text file input as a string.
  Output: A well-formed string - no special characters, capitalization, excess whitespace etc.
    e.g. "the quick brown fox and the quick blue hare"
*/
const cleanInput = str => {
  return str.toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s{1,}/g,' ')
            .trim();    
};

/*
  Input: A well-formed string.
  Output: An array of adjacent word pairs as strings.
*/
const getPairs = wfString => {
  const words = wfString.split(' ');
  return words.slice(1).map((e, i, a) => words[i] + ' ' + a[i]);
};

/*
  Input: An array of adjacent word pairs.
  Output: A histogram of bigram frequencies.
*/
const buildHistogram = pairArray => {  
  return pairArray.reduce((acc,pair) => {    
    acc[pair] = acc[pair] ? ++acc[pair] : 1;
    return acc;
  }, {});
};

module.exports = {
  cleanInput,
  getPairs,
  buildHistogram
};