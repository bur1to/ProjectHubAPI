const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  owner_id: { type: String },
  title: { type: String }
}, {
  collection: 'projects',
  versionKey: false
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
