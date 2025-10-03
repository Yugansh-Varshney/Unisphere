// backend/server.js (Main Express file)

const express = require('express');
const cors = require('cors'); // Required to allow frontend to talk to the backend
const plannerRoutes = require('./plannerRoutes');

// src/utils/api.tsx (Example)

const API_BASE_URL = 'http://localhost:3001/api/planner';

// Function to fetch tasks
export const fetchTasks = async () => {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return response.json();
};

// Function to fetch AI Insights
export const fetchAiInsights = async () => {
    const response = await fetch(`${API_BASE_URL}/ai-insights`);
    if (!response.ok) {
        throw new Error('Failed to fetch AI insights');
    }
    return response.json();
};

// ... add functions for createTask, updateTask, etc.

const app = express();
const PORT = 3001; // Use a different port than React (usually 3000)

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// --- Use the Planner API Routes ---
app.use('/api/planner', plannerRoutes);

app.listen(PORT, () => {
    console.log(`Mock Planner API running on http://localhost:${PORT}/api/planner/tasks`);
});