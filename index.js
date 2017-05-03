/**
 * Created by marni on 3-5-2017.
 */
var config = require("./config.json");

var http = require('http');
var express = require('express');

var app = express();

app.set('PORT', config.webPort);

var port = process.env.PORT || app.get('PORT');

app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
})

app.use('/api/v1', require('./routes/route_api_v1'));
app.use('/api/v2', require('./routes/route_api_v2'));

app.listen(port, function() {

    console.log('Server luistert op poort ' + port);
});

module.exports = app;
