'use strict';

// const app = require ('./server');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.json({
        testing: "still going"
    });
});

app.get('/express-backend', function (req, res) {
    res.json({
        ok: true
    });
});

app.listen(5000, function () {
    console.log('tesssting');
});