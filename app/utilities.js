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
  Output: A histogram of bigram frequencies.
*/
const buildHistogram = wfString => {
  const words = wfString.split(' ');
  return words.slice(1).reduce((acc,e,i,a) => {
    const pair = `${words[i]} ${a[i]}`;
    acc[pair] = acc[pair] ? ++acc[pair] : 1;
    return acc;
  }, {});
};

module.exports = {
  cleanInput,
  buildHistogram
};