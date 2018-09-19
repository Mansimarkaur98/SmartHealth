import express from 'express';
const app = express();

app.get('/express-backend', (req, res)=> {
    res.json({
        ok: true
    });
});

export default app;
// testing the backend with node js