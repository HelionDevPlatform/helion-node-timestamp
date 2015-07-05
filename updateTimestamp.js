var fs = require('fs'),
  moment = require('moment'),
  timestamp,
  username;

timestamp = moment().format('YYYY-MM-DD_HH.mm.ss');
username = process.env.USER;

// What we really want is: '2012-11-04_14.55.45_neilotoole'
timestamp = timestamp + '_' + username;

fs.writeFile('timestamp.txt', timestamp, function(err) {
  if(err) {
    return console.error(err);
  }

  console.log(timestamp);
});


