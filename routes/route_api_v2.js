/**
 * Created by marni on 3-5-2017.
 */
// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');

var recipes = require('../recipes');

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Some info about this server."
    });
});

router.get('/recipes/:number', function(request, response) {

    response.status(200);

    var number = request.params.number || '';

    if (number) {

        response.json(recipes[number]);
    } else {

        response.json(recipes);
    }
});

router.get('/recipes', function(request, response) {

    response.status(200);

    var category = request.query.category || '';

    var recipe = recipes.filter(function (r) {

        return (r.category === category);
    });

    if (category) {

        response.json(recipe)
    } else {

        response.json(recipes)
    }
});

    router.all('*', function(request, response) {
    response.status(404);
    response.send("404 - Not Found");
});

module.exports = router;
