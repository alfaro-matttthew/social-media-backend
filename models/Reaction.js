const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reaction: { type: Number, required: true },
  user_id: { type: String, required: true },
  post_id: { type: String, required: true},
  lastAccessed: { type: Date, default: Date.now },
});

const Reaction = mongoose.model('Reaction', reactionSchema);

const handleError = (err) => console.error(err);

Reaction
  .create({
    reaction: 'I sure do love coding!',
    user_id: '',
    post_id: '',
  })
  .then(result => console.log('Created new reaction', result))
  .catch(err => handleError(err));

module.exports = Reaction;