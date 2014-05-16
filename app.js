var express = require('express');
var moment = require('moment');
var underscore = require('underscore');
var app = express();

app.get('/time', function(req, res) {
	res.send(moment().format('MMMM Do YYYY, h:mm:ss a'));
});

app.get('/mood', function(req, res) {
	res.send(underscore.sample([ 'happy', 'sad', 'joyful', 'antsy', 'despondent', 'GRRREEAAT' ]));
});

var server = app.listen(7420, function() {
	console.log('Express server listening on port ' + server.address().port);
});
