const mongoose = require('mongoose');
const uuid = require('uuid');

const userSchema = new mongoose.Schema({
  uniqueUrl: { type: String, default: uuid.v4 },
  password: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);