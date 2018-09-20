const express = require ('express');
const app = express();

app.get('/express-backend', (req, res)=> {
    res.json({
        ok: true
    });
});

module.export = app;
// testing the backend with node js