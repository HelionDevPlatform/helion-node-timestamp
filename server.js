var http = require('http'),
  fs = require('fs');

http.createServer(function (req, res) {
  var contents = fs.readFileSync('timestamp.txt');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(contents);
}).listen(8001, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8001/');