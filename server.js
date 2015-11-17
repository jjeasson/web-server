var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger); // this is at the application level

app.get('/about',middleware.requireAuthentication, function(req, res){ //middleware at page level
	res.send('About Us!');	
});

app.use(express.static(__dirname + '/' +'/public')); //expose entire folder to the server

app.listen(PORT, function(){
	console.log('Express server started on port ' + PORT + ' !');
});