'use strict';

var express = require('express');
var app = express();

app.get('/express-backend', function (req, res) {
    res.json({
        ok: true
    });
});

module.export = app;
// testing the backend with node js