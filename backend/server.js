const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Important to parse JSON body

// Import routes
const mentorRoutes = require('./routes/mentors');
const taskRoutes = require('./routes/tasks');
const messageRoutes = require('./routes/messages');

// Use routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/messages', messageRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});