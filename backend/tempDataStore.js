// backend/tempDataStore.js

// --- Mock Data Structures ---

// A simple counter for generating unique task IDs
let taskIdCounter = 100;

// 1. Mock 'UserTasks' (array of task objects)
let tasks = [
    {
        id: '101',
        userId: 'user-unisphere-123',
        name: 'CS 201 Lecture Review',
        estimatedTime: 1.5,
        dueDate: new Date('2025-10-06T18:00:00'),
        priority: 'High',
        status: 'pending',
        category: 'Class'
    },
    {
        id: '102',
        userId: 'user-unisphere-123',
        name: 'Math Study Session',
        estimatedTime: 2.0,
        dueDate: new Date('2025-10-04T12:00:00'),
        priority: 'Medium',
        status: 'pending',
        category: 'Study'
    },
];

// 2. Mock 'UserStudyMetrics' (object keyed by userId)
// This holds the AI-relevant user performance data.
let userMetrics = {
    'user-unisphere-123': {
        peakPerformanceStart: 14, // 2 PM
        peakPerformanceEnd: 16,   // 4 PM
        studyStreak: 5,           // days in a row
        totalHoursThisWeek: 25.0,
        hoursCompletedToday: 4.5,
    }
};

// --- Exported Functions (Simulated DB Operations) ---

// 1. Get all pending tasks for a specific user
const getPendingTasks = (userId) => {
    return tasks
        .filter(t => t.userId === userId && t.status === 'pending')
        .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()); // Sort by due date
};

// 2. Add a new task
const addTask = (task) => {
    const newTask = {
        ...task,
        id: (taskIdCounter++).toString(),
        status: 'pending', // default status
        userId: task.userId || 'user-unisphere-123' // Fallback for testing
    };
    tasks.push(newTask);
    return newTask;
};

// 3. Update task status (e.g., mark as completed)
const updateTask = (taskId, updates) => {
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updates };
        return tasks[index];
    }
    return null; // Task not found
};

// 4. Get performance metrics for AI Insights
const getMetrics = (userId) => {
    return userMetrics[userId];
};

module.exports = {
    getPendingTasks,
    addTask,
    updateTask,
    getMetrics,
};