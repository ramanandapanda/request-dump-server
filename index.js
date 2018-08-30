var http = require('http');
var argv = require('minimist')(process.argv.slice(2));
let port = 8000;
if (argv.port) {
    port = +argv.port;
  }
var body = '';
//create a server object:
console.log("Server is listening to port: "+port)
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    req.on('data', function (data) {
        body += data;
        console.log("Partial body: " + body);
    });
    req.on('end', function () {
        res.write(body);
        res.end();
        body = "";
    });

}).listen(port);