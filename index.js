/**
 * Created by marni on 3-5-2017.
 */
var config = require("./config.json");

var http = require('http');
var express = require('express');

var app = express();

app.set('PORT', config.webPort);

var port = process.env.PORT || app.get('PORT');

app.all('*', function (request, response, next) {
    console.log(request.method + " " + request.url);
    response.send('No version selected');
    next();
});

app.listen(port, function() {

    console.log('Server luistert op poort ' + port);
});

module.exports = app;
