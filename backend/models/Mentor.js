const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: String,
  role: String,
  rating: Number,
  reviews: Number,
  tasksCompleted: Number,
  isFollowing: Boolean,
  avatar: String,
  specialties: [String],
});

module.exports = mongoose.model('Mentor', mentorSchema);