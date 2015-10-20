var express = require('express');
var server = express();

// Use www as the "root" directory for all requests.
// if no path is given, it will look for index.html in that directoy.
server.use(express.static('www'));

// Start the server listening on a port
server.listen(3000, function(){
	console.log ("server listening on port " + 3000);
});