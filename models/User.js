// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const userSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  username: { type: String, required: true },
  email: { type: String, required: true },
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const User = mongoose.model('User', userSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

// We use the model to create individual documents that have the properties as defined in our schema
User
  .create({
    username: 'testUser001',
    email: 'test001@test.com',
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

module.exports = User;
