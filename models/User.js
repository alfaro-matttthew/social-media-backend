const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  lastAccessed: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// const handleError = (err) => console.error(err);

// User
//   .create({
//     username: 'testUser001',
//     email: 'test001@test.com',
//   })
//   .then(result => console.log('Created new user', result))
//   .catch(err => handleError(err));

module.exports = User;
