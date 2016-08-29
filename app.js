//noinspection JSUnresolvedFunction
var express = require('express');
var app = express();
var path = require('path');

app.set('port', 8080);

app.get('/', function (req,res) {
    console.log('Get the homepage');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/pokemon', function (req,res) {
    console.log('Get the json');
    res
        .status(200)
        .json({"jsonData": true});
});

app.get('/file', function (req, res) {
    console.log('Get the file');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function () {
    //noinspection JSUnresolvedFunction
    var port = server.address().port;
    console.log('Server is running on port ' + port);
});