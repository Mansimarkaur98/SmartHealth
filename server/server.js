const express = require('express');
const app = express();

app.get('/express-backend', (req, res)=> {
    res.json({
        ok: true
    });
});

module.exports = app;
// testing the backend with node js