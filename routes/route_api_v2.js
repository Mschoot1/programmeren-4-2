/**
 * Created by marni on 3-5-2017.
 */
// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Some info about this server."
    });
});

router.all('*', function(request, response) {
    response.status(404);
    response.send("404 - Not Found");
});

module.exports = router;
