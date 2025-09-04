const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new message
router.post('/', async (req, res) => {
  try {
    const { sender, text } = req.body;
    if (!sender || !text) {
      return res.status(400).json({ message: 'sender and text are required' });
    }
    const saved = await Message.create({ sender, text });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Recent conversations grouped by sender
router.get('/recent', async (req, res) => {
  try {
    const pipeline = [
      { $sort: { timestamp: -1 } },
      {
        $group: {
          _id: '$sender',
          lastMessage: { $first: '$text' },
          lastTimestamp: { $first: '$timestamp' },
          count: { $sum: 1 },
        },
      },
      { $sort: { lastTimestamp: -1 } },
    ];
    const results = await Message.aggregate(pipeline);
    res.json(
      results.map((r) => ({
        sender: r._id,
        lastMessage: r.lastMessage,
        lastTimestamp: r.lastTimestamp,
        count: r.count,
      }))
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Conversation with a specific sender
router.get('/with/:sender', async (req, res) => {
  try {
    const { sender } = req.params;
    const thread = await Message.find({ sender }).sort({ timestamp: 1 });
    res.json(thread);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;