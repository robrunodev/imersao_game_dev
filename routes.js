const express = require('express');
const path = require('path');

const routes = express.Router();


routes.use('/sons', express.static(path.join(__dirname, 'sons')));
routes.use('/images', express.static(path.join(__dirname, 'images')));
routes.use('/scripts', express.static(path.join(__dirname, 'scripts')));
routes.use('/styles', express.static(path.join(__dirname, 'styles')));

routes.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


module.exports = routes;

