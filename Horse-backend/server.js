// horse-tracker-backend/server.js

const express = require('express');
const cors = require('cors');
const { mockHorses } = require('./data/mockData');

const app = express();
const PORT = process.env.PORT || 8000;

const FRONTEND_URL = 'https://horse-tracker.onrender.com';

app.use(cors({ origin: FRONTEND_URL }));

// === Middleware ===
app.use(cors());
app.use(express.json());

// === API Endpoints ===

// GET /api/horses - Retrieve all horses
app.get('/api/horses', (req, res) => {
    res.json(mockHorses);
});

// GET /api/horses/:id - Retrieve a single horse by its ID
app.get('/api/horses/:id', (req, res) => {
    const { id } = req.params;
    const horse = mockHorses.find(h => h.id === id);

    if (horse) {
        res.json(horse);
    } else {
        res.status(404).json({ message: 'Horse not found' });
    }
});

// === Start the Server ===
app.listen(PORT, () => {
    console.log(`🐴 Horse Tracker backend is running on http://localhost:${PORT}`);
});


/// Add this entire block to the end of your server.js file

// === Simulate Live Data Updates ===
// Create pools of plausible data for randomization
const possibleActivities = [
    'Speed Drill',
    'Endurance Run',
    'Agility Course',
    'Dressage Practice',
    'Jumping Grid',
    'Light Hack',
    'Canter Work'
];
const possibleDurations = ['25 mins', '35 mins', '45 mins', '50 mins', '60 mins', '75 mins'];
const possibleNotes = [
    'Excellent energy levels today.',
    'Showed great focus and responsiveness.',
    'Met all training goals for the session.',
    'Solid effort, recovery was quick.',
    'A bit distracted but finished strong.',
    'Seems to enjoy this activity.'
];

// This function simulates a new, varied training log being added every 20 seconds.
setInterval(() => {
    const activeHorses = mockHorses.filter(h => h.status === 'Active');
    
    if (activeHorses.length === 0) return;
    
    const randomHorse = activeHorses[Math.floor(Math.random() * activeHorses.length)];
    
    // 2. Randomly select one item from each pool
    const randomActivity = possibleActivities[Math.floor(Math.random() * possibleActivities.length)];
    const randomDuration = possibleDurations[Math.floor(Math.random() * possibleDurations.length)];
    const randomNotes = possibleNotes[Math.floor(Math.random() * possibleNotes.length)];
    
    // 3. Create the new training log with the randomized data
    const newLog = {
        date: new Date().toISOString().split('T')[0],
        activity: randomActivity,
        duration: randomDuration,
        notes: randomNotes
    };

    randomHorse.trainingLogs.unshift(newLog);

    console.log(`[Data Simulation] Added new training log for ${randomHorse.name}.`);

}, 20000); // Runs every 20,000 milliseconds (20 seconds)