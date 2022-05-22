const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/js'));
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

http.listen(2000, function () {
	console.log('listening on http://prop-hunt.io:2000');
});