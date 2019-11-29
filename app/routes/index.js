const app = require('express').Router();
const { join } = require('path');

app.get('/', (req, res) =>
    require(join(__dirname, '/app/views/index')).index(req, res));

module.exports = app;