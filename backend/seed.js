const mongoose = require('mongoose');
require('dotenv').config();

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

const Mentor = mongoose.model('Mentor', mentorSchema);

const taskSchema = new mongoose.Schema({
  title: String,
  category: String,
  progress: Number,
  timeLeft: String,
  image: String,
});

const Task = mongoose.model('Task', taskSchema);

const messageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected');

  // Clear existing data
  await Mentor.deleteMany({});
  await Task.deleteMany({});
  await Message.deleteMany({});

  // Seed mentors
  const mentors = [
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      rating: 4.8,
      reviews: 1320,
      tasksCompleted: 410,
      isFollowing: false,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['UI Design', 'Prototyping', 'User Research'],
    },
    {
      name: 'Michael Chen',
      role: 'Full-Stack Engineer',
      rating: 4.7,
      reviews: 980,
      tasksCompleted: 520,
      isFollowing: true,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['Node.js', 'React', 'MongoDB'],
    },
    {
      name: 'Aisha Khan',
      role: 'Product Designer',
      rating: 4.9,
      reviews: 1540,
      tasksCompleted: 600,
      isFollowing: false,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['Design Systems', 'Figma', 'Accessibility'],
    },
    {
      name: 'Diego Martínez',
      role: 'Mobile Developer',
      rating: 4.6,
      reviews: 740,
      tasksCompleted: 430,
      isFollowing: false,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['React Native', 'Expo', 'TypeScript'],
    },
    {
      name: 'Emily Davis',
      role: 'Data Scientist',
      rating: 4.8,
      reviews: 1120,
      tasksCompleted: 380,
      isFollowing: true,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['Python', 'Pandas', 'ML'],
    },
    {
      name: 'Hiro Tanaka',
      role: 'Backend Engineer',
      rating: 4.7,
      reviews: 860,
      tasksCompleted: 720,
      isFollowing: false,
      avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['Express', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'Olivia Rossi',
      role: 'Frontend Engineer',
      rating: 4.9,
      reviews: 1490,
      tasksCompleted: 690,
      isFollowing: false,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['React', 'Next.js', 'CSS'],
    },
    {
      name: 'Noah Williams',
      role: 'DevOps Engineer',
      rating: 4.6,
      reviews: 510,
      tasksCompleted: 450,
      isFollowing: true,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['AWS', 'Kubernetes', 'CI/CD'],
    },
    {
      name: 'Priya Sharma',
      role: 'QA Engineer',
      rating: 4.7,
      reviews: 640,
      tasksCompleted: 560,
      isFollowing: false,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['Automation', 'Cypress', 'Playwright'],
    },
    {
      name: 'Lucas Becker',
      role: 'Security Engineer',
      rating: 4.8,
      reviews: 720,
      tasksCompleted: 510,
      isFollowing: false,
      avatar: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=200',
      specialties: ['AppSec', 'OWASP', 'Threat Modeling'],
    },
  ];

  // Seed tasks
  const today = new Date();
  const toISODate = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const tasks = [
    {
      title: 'Creating Awesome Mobile Apps',
      category: 'UI UX Design',
      progress: 90,
      timeLeft: '1 Hour',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      dueDate: toISODate(today),
    },
    {
      title: 'Creating Fresh Website',
      category: 'Web Developer',
      progress: 85,
      timeLeft: '2 Hour',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      dueDate: toISODate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)),
    },
    {
      title: 'Refactor API Layer',
      category: 'Backend',
      progress: 40,
      timeLeft: '1 Day',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      dueDate: toISODate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)),
    },
  ];

  const insertedMentors = await Mentor.insertMany(mentors);
  await Task.insertMany(tasks);

  // Seed a few chat messages between first two mentors
  const [m1, m2] = insertedMentors;
  const chats = [
    { sender: m1.name, text: 'Hey, have you reviewed the new design specs?' },
    { sender: m2.name, text: 'Yes, looks great. I have a few suggestions.' },
    { sender: m1.name, text: 'Awesome! Let’s sync at 3 PM.' },
    { sender: m2.name, text: 'Works for me. See you then.' },
  ];
  await Message.insertMany(chats);

  console.log('Database seeded');
  mongoose.disconnect();
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});