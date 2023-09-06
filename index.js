var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h2>')
    res.end('adres ip klienta: ' + req.socket.remoteAddress);
}).listen(8080);
//Test