import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { AIRecommendations } from './AIRecommendations';
import { apiService } from '../utils/api';
import { 
  Calendar,
  BookOpen,
  Briefcase,
  Users,
  Home,
  ShoppingCart,
  MessageCircle,
  Bot,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Plus,
  ArrowRight
} from 'lucide-react';

interface DashboardProps {
  user: any;
  onNavigate: (view: string) => void;
}

export function Dashboard({ user, onNavigate }: DashboardProps) {
  const [tasks, setTasks] = useState([]);
  const [studyData, setStudyData] = useState({
    weeklyGoal: 25,
    completed: 18,
    streakDays: 7,
    tasksCompleted: 12
  });

  // Fetch user tasks and study data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const tasksResult = await apiService.getTasks(user.id);
        setTasks(tasksResult.tasks || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    if (user?.id) {
      fetchDashboardData();
    }
  }, [user?.id]);

  const quickActions = [
    {
      icon: Calendar,
      title: "Study Planner",
      description: "Plan your study sessions with AI",
      action: () => onNavigate('planner'),
      color: "bg-blue-500",
      badge: "2 tasks due"
    },
    {
      icon: Briefcase,
      title: "Job Finder",
      description: "Discover new opportunities",
      action: () => onNavigate('jobs'),
      color: "bg-green-500",
      badge: "5 new matches"
    },
    {
      icon: BookOpen,
      title: "Notes Hub",
      description: "Access shared study materials",
      action: () => onNavigate('notes'),
      color: "bg-purple-500",
      badge: "3 new uploads"
    },
    {
      icon: Users,
      title: "Study Buddy",
      description: "Find study partners",
      action: () => onNavigate('study-buddy'),
      color: "bg-orange-500",
      badge: "2 matches"
    },
    {
      icon: Home,
      title: "Roommate Finder",
      description: "Find your ideal roommate",
      action: () => onNavigate('roommate'),
      color: "bg-pink-500",
      badge: "1 new match"
    },
    {
      icon: ShoppingCart,
      title: "Marketplace",
      description: "Buy, sell, exchange items",
      action: () => onNavigate('marketplace'),
      color: "bg-indigo-500",
      badge: "4 new items"
    }
  ];

  const upcomingTasks = [
    { title: "CS101 Assignment", due: "Today, 11:59 PM", priority: "high", completed: false },
    { title: "Math Study Session", due: "Tomorrow, 2:00 PM", priority: "medium", completed: false },
    { title: "Physics Lab Report", due: "Friday, 5:00 PM", priority: "medium", completed: false },
    { title: "Group Project Meeting", due: "Saturday, 10:00 AM", priority: "low", completed: false }
  ];

  const recentActivity = [
    { icon: BookOpen, text: "New study material uploaded for CS101", time: "2 hours ago" },
    { icon: Users, text: "Sarah wants to be your study buddy", time: "4 hours ago" },
    { icon: Briefcase, text: "New internship match: Google SWE Intern", time: "1 day ago" },
    { icon: MessageCircle, text: "5 new messages in Computer Science group", time: "1 day ago" }
  ];



  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">
              {user.major} • {user.year} • {user.university}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={() => onNavigate('chatbot')} className="flex items-center space-x-2">
              <Bot className="h-4 w-4" />
              <span>AI Assistant</span>
            </Button>
            <Avatar className="h-10 w-10">
              <AvatarImage src="" alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studyData.completed}h</div>
              <p className="text-xs text-muted-foreground">
                of {studyData.weeklyGoal}h weekly goal
              </p>
              <Progress value={(studyData.completed / studyData.weeklyGoal) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studyData.streakDays}</div>
              <p className="text-xs text-muted-foreground">days in a row</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studyData.tasksCompleted}</div>
              <p className="text-xs text-muted-foreground">this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12%</div>
              <p className="text-xs text-muted-foreground">vs last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions Grid */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={action.action}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-white`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    {action.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {action.badge}
                      </Badge>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="w-full justify-between">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Tasks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Stay on top of your deadlines</CardDescription>
              </div>
              <Button size="sm" onClick={() => onNavigate('planner')}>
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                  <div className={`w-2 h-2 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' : 
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{task.title}</p>
                    <p className="text-sm text-muted-foreground">{task.due}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>What's happening in your network</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-muted p-2 rounded-lg">
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" onClick={() => onNavigate('community')}>
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <AIRecommendations userId={user.id} onNavigate={onNavigate} />
      </div>
    </div>
  );
}