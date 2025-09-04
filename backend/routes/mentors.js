const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor');

// GET all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new mentor
router.post('/', async (req, res) => {
  const mentor = new Mentor(req.body);
  try {
    const savedMentor = await mentor.save();
    res.status(201).json(savedMentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
 
// Toggle follow status
router.patch('/:id/follow', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });
    mentor.isFollowing = !Boolean(mentor.isFollowing);
    await mentor.save();
    res.json(mentor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});