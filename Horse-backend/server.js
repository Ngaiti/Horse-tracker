// horse-tracker-backend/server.js

const express = require('express');
const cors = require('cors');
const { mockHorses } = require('./data/mockData');

const app = express();
const PORT = process.env.PORT || 8000;

// === Middleware ===
// Enable Cross-Origin Resource Sharing (CORS) so your React app can talk to this server
app.use(cors());
// Parse JSON bodies for POST/PUT requests (though not used in this simple GET-only API)
app.use(express.json());

// === API Endpoints ===

// GET /api/horses - Retrieve all horses
app.get('/api/horses', (req, res) => {
    // Return the full list of horses as JSON
    res.json(mockHorses);
});

// GET /api/horses/:id - Retrieve a single horse by its ID
app.get('/api/horses/:id', (req, res) => {
    const { id } = req.params;
    const horse = mockHorses.find(h => h.id === id);

    if (horse) {
        res.json(horse);
    } else {
        // If no horse is found, send a 404 Not Found status
        res.status(404).json({ message: 'Horse not found' });
    }
});

// === Start the Server ===
app.listen(PORT, () => {
    console.log(`🐴 Horse Tracker backend is running on http://localhost:${PORT}`);
});


// This function simulates a new training log being added every 15 seconds.
setInterval(() => {
    // Pick a random active horse
    const activeHorses = mockHorses.filter(h => h.status === 'active');
    if (activeHorses.length === 0) return;
    
    const randomHorse = activeHorses[Math.floor(Math.random() * activeHorses.length)];
    
    // Create a new random training log
    const newLog = {
        date: new Date().toISOString().split('T')[0], // Today's date
        activity: 'Light Trot',
        duration: '25 mins',
        notes: 'Routine check-in, all systems normal.'
    };

    // Add the new log to the beginning of its training log array
    randomHorse.trainingLogs.unshift(newLog);

    console.log(`[Data Simulation] Added new training log for ${randomHorse.name}.`);

}, 60000); // Runs every 60 seconds