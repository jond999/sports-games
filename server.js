
var http = require('http');
var fs = require('fs');

var port = 8008;

var server = http.createServer(function (req, res) {
	
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
})

server.listen(port, function() {
	console.log('The server is running, ' +
		'open a browser at http://localhost:%s', port);
});
