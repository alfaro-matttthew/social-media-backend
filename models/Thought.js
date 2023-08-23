const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  body: { type: String, required: true },
  date: { type: String, required: true },
  user_id: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

Thought
  .create({
    body: 'I sure do love coding!',
    date: Date.now(),
    user_id: '',
  })
  .then(result => console.log('Created new thought', result))
  .catch(err => handleError(err));

module.exports = Thought;