const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nickname: { type: String, minLength: 2 },
  email: { type: String, unique: true },
  password: { type: String, minLength: 8 },
  salt: { type: String }
}, {
  collection: 'users',
  versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;
