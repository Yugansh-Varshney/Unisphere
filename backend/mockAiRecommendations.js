// backend/mockAiRecommendations.js

const generateInsights = (metrics) => {
    if (!metrics) return [];

    const recommendations = [];

    // 1. Peak Performance Time Insight
    recommendations.push({
        type: 'Peak Performance Time',
        title: `Your Productivity is Highest`,
        suggestion: `Your peak performance is between ${metrics.peakPerformanceStart}:00 and ${metrics.peakPerformanceEnd}:00. Schedule challenging tasks during this window.`,
    });

    // 2. Study-Life Balance Insight (based on streak)
    if (metrics.studyStreak >= 5) {
        recommendations.push({
            type: 'Study-Life Balance',
            title: `You've earned a break!`,
            suggestion: `You've been studying for ${metrics.studyStreak} days straight. Consider scheduling a break tomorrow to prevent burnout.`,
        });
    }

    // 3. Task-Specific AI Suggestion (Hardcoded for simplicity)
    recommendations.push({
        type: 'Task Suggestion',
        targetTask: 'new task - calc',
        suggestion: 'This high-priority task is perfect for your 2 PM peak. Eliminate distractions and find a quiet study space.',
    });

    return recommendations;
};

module.exports = {
    generateInsights
};