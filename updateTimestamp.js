var fs = require('fs'),
  moment = require('moment'),
  timestamp,
  username;


timestamp = moment().format('YYYYMMDD-HHmmss');
username = process.env.USER;
// The format we want is: 20150706-004444-neilotoole
timestamp = timestamp + '-' + username;

fs.writeFile('timestamp.txt', timestamp, function(err) {
  if(err) {
    return console.error(err);
  }

  console.log(timestamp);
});


