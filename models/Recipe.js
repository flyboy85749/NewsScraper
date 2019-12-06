var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var RecipeSchema = new Schema({
  // `name` is required and of type String
  name: {
    type: String,
    required: true
  },

  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },

  // `image` is required and of type String
  image: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Recipe = mongoose.model("Recipe", RecipeSchema);

// Export the Article model
module.exports = Recipe;
