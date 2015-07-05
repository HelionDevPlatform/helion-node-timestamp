var http = require('http'),
  fs = require('fs'),
  port = process.env.PORT || 8888;

http.createServer(function (req, res) {
  var contents = fs.readFileSync('timestamp.txt');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(contents);
}).listen(parseInt(port, 10));

console.log("Server running at\n  => http://0.0.0.0:" + port + "/\nCTRL + C to shutdown");