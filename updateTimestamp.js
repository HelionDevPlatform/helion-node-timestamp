var fs = require('fs'),
  timestamp;
// toISOString uses this format: '2012-11-04T14:51:06.157Z'
// But we want this format: '2012-11-04 14:55:45'
timestamp = new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '');

fs.writeFile('timestamp.txt', timestamp, function(err) {
  if(err) {
    return console.error(err);
  }

  console.log('timestamp.txt was updated: ' + timestamp);
});


