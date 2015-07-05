var fs = require('fs'),
  moment = require('moment'),
  timestamp,
  username;
// toISOString uses this format: '2012-11-04T14:51:06.157Z'
// But we want this format: '2012-11-04_14.55.45'
//timestamp = new Date().toISOString().
//  replace(/T/, '_').      // replace T with a space
//  replace(/\..+/, '').
//  replace(/:/, '.');

timestamp = moment().format('YYYY-MM-DD_HH.mm.ss');


username = process.env.USER;

// What we really want is: '2012-11-04_14.55.45_neilotoole'
timestamp = timestamp + '_' + username;

fs.writeFile('timestamp.txt', timestamp, function(err) {
  if(err) {
    return console.error(err);
  }

  console.log('timestamp.txt was updated: ' + timestamp);
});


