// backend/plannerRoutes.js

const express = require('express');
const router = express.Router();
const dataStore = require('./tempDataStore'); // Import the mock store
const mockAiRecommendations = require('./mockAiRecommendations'); // We'll create this next

// --- Middleware (Mock User Authentication) ---
// Since we don't have real auth yet, we'll mock the user ID
const mockAuth = (req, res, next) => {
    // In a real app, this would come from a JWT/Session
    req.user = { id: 'user-unisphere-123' }; 
    next();
};

router.use(mockAuth); // Apply mock auth to all planner routes

// --- 1. GET: Fetch all pending tasks ---
router.get('/tasks', (req, res) => {
    const tasks = dataStore.getPendingTasks(req.user.id);
    res.json(tasks);
});

// --- 2. POST: Create a new task ---
router.post('/tasks', (req, res) => {
    const newTask = dataStore.addTask({
        ...req.body,
        userId: req.user.id
    });
    res.status(201).json(newTask);
});

// --- 3. PUT: Update a task (e.g., set status to completed) ---
router.put('/tasks/:id', (req, res) => {
    const updatedTask = dataStore.updateTask(req.params.id, req.body);
    if (updatedTask) {
        res.json(updatedTask);
    } else {
        res.status(404).send({ message: 'Task not found' });
    }
});

// --- 4. GET: Fetch AI Insights (Mocked) ---
router.get('/ai-insights', (req, res) => {
    const metrics = dataStore.getMetrics(req.user.id);
    // Combine metrics with general recommendations (from mockAiRecommendations)
    const insights = mockAiRecommendations.generateInsights(metrics);
    res.json(insights);
});

module.exports = router;