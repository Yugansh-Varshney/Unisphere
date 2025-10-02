import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: '*',
  credentials: true,
}));
app.use('*', logger(console.log));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Health check
app.get('/make-server-3042be65/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// User registration endpoint
app.post('/make-server-3042be65/auth/signup', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name, university, year, major } = body;

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { 
        name, 
        university, 
        year, 
        major,
        onboarding_completed: false
      },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (authError) {
      console.log('Auth error during signup:', authError);
      return c.json({ error: 'Failed to create user: ' + authError.message }, 400);
    }

    // Store additional user profile data
    await kv.set(`profile:${authData.user.id}`, {
      id: authData.user.id,
      email,
      name,
      university,
      year,
      major,
      created_at: new Date().toISOString(),
      study_preferences: {},
      ai_settings: {
        notifications_enabled: true,
        recommendation_frequency: 'daily'
      }
    });

    // Initialize user study data
    await kv.set(`study_data:${authData.user.id}`, {
      total_hours: 0,
      streak_days: 0,
      tasks_completed: 0,
      weekly_goal: 25,
      last_activity: new Date().toISOString()
    });

    return c.json({ 
      user: {
        id: authData.user.id,
        email: authData.user.email,
        name,
        university,
        year,
        major
      }
    });
  } catch (error) {
    console.log('Signup error:', error);
    return c.json({ error: 'Internal server error during signup' }, 500);
  }
});

// AI Recommendations endpoint
app.get('/make-server-3042be65/ai/recommendations/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    
    // Verify user is authenticated
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: userError } = await supabase.auth.getUser(accessToken);
    
    if (!user || userError) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    // Get user profile and study data
    const profile = await kv.get(`profile:${userId}`);
    const studyData = await kv.get(`study_data:${userId}`);
    const tasks = await kv.getByPrefix(`task:${userId}:`);

    if (!profile) {
      return c.json({ error: 'User profile not found' }, 404);
    }

    // Generate AI recommendations based on user data
    const recommendations = generateAIRecommendations(profile, studyData, tasks);

    return c.json({ recommendations });
  } catch (error) {
    console.log('AI recommendations error:', error);
    return c.json({ error: 'Failed to generate recommendations' }, 500);
  }
});

// Study optimization suggestions
app.get('/make-server-3042be65/ai/study-optimization/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: userError } = await supabase.auth.getUser(accessToken);
    
    if (!user || userError) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const profile = await kv.get(`profile:${userId}`);
    const studyData = await kv.get(`study_data:${userId}`);
    
    if (!profile || !studyData) {
      return c.json({ error: 'User data not found' }, 404);
    }

    const optimizations = generateStudyOptimizations(profile, studyData);

    return c.json({ optimizations });
  } catch (error) {
    console.log('Study optimization error:', error);
    return c.json({ error: 'Failed to generate study optimizations' }, 500);
  }
});

// Save study task
app.post('/make-server-3042be65/tasks', async (c) => {
  try {
    const body = await c.req.json();
    const { title, course, priority, duration, description, userId } = body;
    
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: userError } = await supabase.auth.getUser(accessToken);
    
    if (!user || userError) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const taskId = crypto.randomUUID();
    const task = {
      id: taskId,
      userId,
      title,
      course,
      priority,
      duration,
      description,
      completed: false,
      created_at: new Date().toISOString(),
      due_date: null,
      ai_suggestions: generateTaskSuggestions(title, course, priority, duration)
    };

    await kv.set(`task:${userId}:${taskId}`, task);

    return c.json({ task });
  } catch (error) {
    console.log('Task creation error:', error);
    return c.json({ error: 'Failed to create task' }, 500);
  }
});

// Get user tasks
app.get('/make-server-3042be65/tasks/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: userError } = await supabase.auth.getUser(accessToken);
    
    if (!user || userError) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const tasks = await kv.getByPrefix(`task:${userId}:`);
    
    return c.json({ tasks: tasks || [] });
  } catch (error) {
    console.log('Get tasks error:', error);
    return c.json({ error: 'Failed to get tasks' }, 500);
  }
});

// Update study progress
app.post('/make-server-3042be65/study-progress/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    const body = await c.req.json();
    const { hours, tasksCompleted } = body;
    
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: userError } = await supabase.auth.getUser(accessToken);
    
    if (!user || userError) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const currentData = await kv.get(`study_data:${userId}`) || {
      total_hours: 0,
      streak_days: 0,
      tasks_completed: 0,
      weekly_goal: 25,
      last_activity: new Date().toISOString()
    };

    // Update study data
    const updatedData = {
      ...currentData,
      total_hours: (currentData.total_hours || 0) + hours,
      tasks_completed: (currentData.tasks_completed || 0) + tasksCompleted,
      last_activity: new Date().toISOString()
    };

    await kv.set(`study_data:${userId}`, updatedData);

    return c.json({ studyData: updatedData });
  } catch (error) {
    console.log('Study progress update error:', error);
    return c.json({ error: 'Failed to update study progress' }, 500);
  }
});

// AI recommendation generation functions
function generateAIRecommendations(profile: any, studyData: any, tasks: any[]) {
  const recommendations = [];
  
  // Study pattern analysis
  if (studyData && studyData.total_hours < studyData.weekly_goal * 0.5) {
    recommendations.push({
      type: 'study_time',
      title: 'Increase Study Time',
      description: `You're at ${studyData.total_hours}h this week. Consider adding 30-minute study sessions to reach your ${studyData.weekly_goal}h goal.`,
      priority: 'medium',
      action: 'schedule_study',
      actionText: 'Schedule Study Time'
    });
  }

  // Task management suggestions
  const highPriorityTasks = tasks.filter(task => task.priority === 'high' && !task.completed);
  if (highPriorityTasks.length > 3) {
    recommendations.push({
      type: 'task_management',
      title: 'Focus on High Priority Tasks',
      description: `You have ${highPriorityTasks.length} high-priority tasks. Consider breaking them into smaller chunks.`,
      priority: 'high',
      action: 'organize_tasks',
      actionText: 'Organize Tasks'
    });
  }

  // Subject-specific recommendations based on major
  if (profile.major === 'Computer Science') {
    recommendations.push({
      type: 'subject_optimization',
      title: 'CS Study Technique',
      description: 'For programming assignments, try the rubber duck debugging method to improve problem-solving skills.',
      priority: 'low',
      action: 'learn_technique',
      actionText: 'Learn More'
    });
  }

  // Streak encouragement
  if (studyData && studyData.streak_days > 0) {
    recommendations.push({
      type: 'motivation',
      title: `${studyData.streak_days}-Day Streak!`,
      description: 'Great consistency! Keep up the momentum with a short review session today.',
      priority: 'low',
      action: 'continue_streak',
      actionText: 'Plan Today'
    });
  }

  // Time optimization
  recommendations.push({
    type: 'time_optimization',
    title: 'Peak Performance Window',
    description: 'Research shows most students perform best between 2-4 PM. Schedule challenging tasks during this time.',
    priority: 'medium',
    action: 'optimize_schedule',
    actionText: 'Optimize Schedule'
  });

  return recommendations.slice(0, 4); // Return top 4 recommendations
}

function generateStudyOptimizations(profile: any, studyData: any) {
  const optimizations = [];

  // Pomodoro technique suggestion
  optimizations.push({
    technique: 'Pomodoro Technique',
    description: '25-minute focused study sessions with 5-minute breaks improve retention by 35%.',
    effectiveness: '35% improvement in retention',
    timeRequired: '25 min sessions',
    bestFor: ['Long study sessions', 'Difficult subjects']
  });

  // Spaced repetition
  optimizations.push({
    technique: 'Spaced Repetition',
    description: 'Review material at increasing intervals to strengthen long-term memory.',
    effectiveness: '50% better long-term retention',
    timeRequired: '10-15 min daily',
    bestFor: ['Memorization', 'Language learning', 'Definitions']
  });

  // Active recall
  optimizations.push({
    technique: 'Active Recall',
    description: 'Test yourself without looking at notes to strengthen memory pathways.',
    effectiveness: '40% improvement in recall',
    timeRequired: 'Same as normal study time',
    bestFor: ['Concept understanding', 'Exam preparation']
  });

  return optimizations;
}

function generateTaskSuggestions(title: string, course: string, priority: string, duration: string) {
  const suggestions = [];

  // Duration-based suggestions
  if (duration === '3hours' || duration === '2hours') {
    suggestions.push('Consider breaking this into multiple sessions for better focus');
    suggestions.push('Use the Pomodoro technique: 25min work, 5min break');
  }

  // Course-specific suggestions
  if (course.toLowerCase().includes('math')) {
    suggestions.push('Practice problems work better than just reading for math');
    suggestions.push('Best studied when your mind is fresh - morning or early afternoon');
  }

  if (course.toLowerCase().includes('cs') || course.toLowerCase().includes('computer')) {
    suggestions.push('Code along while learning - hands-on practice is key');
    suggestions.push('Use rubber duck debugging for problem-solving');
  }

  // Priority-based suggestions
  if (priority === 'high') {
    suggestions.push('Schedule this during your peak performance hours (typically 2-4 PM)');
    suggestions.push('Eliminate distractions and find a quiet study space');
  }

  return suggestions.slice(0, 2); // Return top 2 suggestions
}

Deno.serve(app.fetch);