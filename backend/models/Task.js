const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  category: String,
  progress: Number,
  timeLeft: String,
  image: String,
  dueDate: { type: Date, required: false },
});

module.exports = mongoose.model('Task', taskSchema);