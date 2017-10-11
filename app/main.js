const fs = require('fs');
const utilities = require('./utilities');

/*
  I would have liked to experiment with streaming the input via NodeJS's pipe 
  interface, but I am not sure if splitting the text content into chunks would 
  create inaccurate histogram output. In this case I am loading the file 
  entirely into memory first, willing to take the performance hit on very large 
  files for worry-free accuracy.
*/

fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) throw err;
  console.log(utilities.buildHistogram(utilities.cleanInput(data)));
});