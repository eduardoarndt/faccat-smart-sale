const express = require('express');

const RequestController = require('./controllers/RequestController');

const routes = express.Router();

routes.post('/request', RequestController.readProductList);

module.exports = routes;