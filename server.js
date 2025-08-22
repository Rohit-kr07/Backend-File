let http = require('http');
let math = require('./math')


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    let result = math.subtract(10,4)

    res.end(result.toString());

}).listen(4000);