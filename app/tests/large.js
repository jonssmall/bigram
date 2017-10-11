'use strict';
//Repeat the same phrase 160 times.
module.exports = {
  text: [...Array(160)].reduce(acc => { 
    return acc + 'the quick brown fox and the quick blue hare '
  }, '').trim()
};