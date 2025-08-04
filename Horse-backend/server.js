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
// Simulates a new training log being added every 1000 seconds.
setInterval(() => {
    // Filter for horses that are currently 'Active'
    const activeHorses = mockHorses.filter(h => h.status === 'Active');
    
    // If no horses are active, do nothing.
    if (activeHorses.length === 0) return;
    
    // Pick a random active horse from the filtered list
    const randomHorse = activeHorses[Math.floor(Math.random() * activeHorses.length)];
    
    // Create a training log
    const newLog = {
        date: new Date().toISOString().split('T')[0], // Today's date
        activity: 'Routine Gallop',
        duration: '30 mins',
        notes: 'Consistent performance, all vitals normal.'
    };

    // Add the new log to the beginning of that horse's trainingLogs array
    randomHorse.trainingLogs.unshift(newLog);

    // Log a message to the server console to show that the simulation is working
    console.log(`[Data Simulation] Added new training log for ${randomHorse.name}.`);

}, 1000000); // Runs every 1000 seconds