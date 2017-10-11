'use strict';
const fs = require('fs');
const utilities = require('./utilities');

fs.readFile(process.argv[2], 'utf8', (err,data) => {
  if (err) throw err;
  console.log(utilities.buildHistogram(utilities.cleanInput(data)));
});