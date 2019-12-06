const app = require('express').Router();
const { join } = require('path');

// require controllers 
const recipeController =  require ('..recipe_controller.js');

app.get ('/', recipeController.index);

module.exports = app;
