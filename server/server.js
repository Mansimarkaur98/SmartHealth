const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log('you port is working')});

app.get('/express-backend', (req, res)=> {
    res.send({express: 'Your express backend is not connected to react'});
});

// testing the backend with node js