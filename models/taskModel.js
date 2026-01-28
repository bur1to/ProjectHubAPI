const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  project_id: { type: String },
  title: { type: String },
  description: { type: String },
  status: { type: String, default: 'todo' },
  assigned_to: { type: String },
  createdAt: { type: Date }
}, {
  collection: 'tasks',
  versionKey: false
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
