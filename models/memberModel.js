const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  project_id: { type: String },
  user_id: { type: String },
  role: { type: String }
}, {
  collection: 'members',
  versionKey: false
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
