//noinspection JSUnresolvedFunction
var express = require('express');
var app = express();
var path = require('path');

var routes = require('./api/routes');

app.set('port', 8080);

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

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