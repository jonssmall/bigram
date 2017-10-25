'use strict';
const fs = require('fs');
const u = require('./utilities');

fs.readFile(process.argv[2], 'utf8', (err,data) => {
  if (err) throw err;
  console.log(u.buildHistogram(u.getPairs(u.cleanInput(data)))); // i am become scheme
});