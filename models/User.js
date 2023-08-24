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

module.exports = User;
