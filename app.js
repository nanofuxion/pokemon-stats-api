var express = require('express');
var app = express();

app.set('port', 8080)

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Server is running on port ' + port);
});