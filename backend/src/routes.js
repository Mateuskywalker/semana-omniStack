const express = require('express');
const routes = express.Router();

routes.get('/users/:name', (req, res) => {
    // get the query params
    if(req.query) {
        const params = req.query;
        console.log(params);
    }

    //get the route params
    if(req.params) {
        const routeParams = req.params;
        console.log(routeParams);
    }


    res.json({
        message: 'Hello, World!'
    })
});

routes.get('/users/:id', (req, res) => {
    res.json({
        message: 'Hello, World!'
    })
});

routes.post('/users', (req, res) => {
    const params = req.body;
    console.log('Parâmetros recebidos', params);
    res.json({
        message: 'ok'
    });
});

module.exports = routes;