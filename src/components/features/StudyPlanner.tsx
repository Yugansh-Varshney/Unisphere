import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { toast } from 'sonner@2.0.3';
import { apiService } from '../../utils/api';
import { 
  Calendar as CalendarIcon,
  Clock,
  Brain,
  Target,
  Plus,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Lightbulb,
  Timer
} from 'lucide-react';

interface StudyPlannerProps {
  user?: {
    id: string;
    name: string;
  };
}

export function StudyPlanner({ user }: StudyPlannerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    course: '',
    priority: '',
    duration: '',
    description: ''
  });

  const [studyStats, setStudyStats] = useState({
    todayHours: 4.5,
    weeklyGoal: 25,
    completedTasks: 8,
    streak: 5
  });

  // Fetch user tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      if (user?.id) {
        try {
          setIsLoading(true);
          const result = await apiService.getTasks(user.id);
          setTasks(result.tasks || []);
        } catch (error) {
          console.error('Error fetching tasks:', error);
          toast.error('Failed to load tasks');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTasks();
  }, [user?.id]);

  const todaySchedule = [
    { time: "9:00 AM", task: "CS 201 Lecture", type: "class" },
    { time: "11:00 AM", task: "Study Break", type: "break" },
    { time: "11:30 AM", task: "Math Study Session", type: "study" },
    { time: "1:00 PM", task: "Lunch", type: "break" },
    { time: "2:00 PM", task: "Linear Algebra Review", type: "study" },
    { time: "4:00 PM", task: "Physics Lab", type: "class" },
    { time: "6:00 PM", task: "Data Structures Assignment", type: "study" }
  ];

  const aiInsights = [
    {
      type: "productivity",
      title: "Peak Performance Time",
      description: "Your productivity is highest between 2-4 PM. Schedule challenging tasks during this window.",
      action: "Optimize Schedule"
    },
    {
      type: "balance",
      title: "Study-Life Balance",
      description: "You've been studying for 6 days straight. Consider taking a break tomorrow.",
      action: "Schedule Break"
    },
    {
      type: "technique",
      title: "Study Technique",
      description: "Try the Feynman Technique for your Math review - it improves retention by 40%.",
      action: "Learn More"
    }
  ];

  const handleAddTask = async () => {
    if (!user?.id) {
      toast.error('You must be logged in to add tasks');
      return;
    }

    if (!newTask.title || !newTask.course || !newTask.priority || !newTask.duration) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setIsLoading(true);
      const result = await apiService.createTask({
        ...newTask,
        userId: user.id
      });

      setTasks(prev => [...prev, result.task]);
      setIsAddTaskOpen(false);
      setNewTask({ title: '', course: '', priority: '', duration: '', description: '' });
      toast.success('Task added successfully!');
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to add task');
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'class': return 'bg-blue-500';
      case 'study': return 'bg-green-500';
      case 'break': return 'bg-gray-500';
      default: return 'bg-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold flex items-center space-x-3">
              <Brain className="h-8 w-8 text-primary" />
              <span>Smart Study Planner</span>
            </h1>
            <p className="text-muted-foreground">
              AI-powered scheduling with personalized recommendations
            </p>
          </div>
          <Dialog open={isAddTaskOpen} onOpenChange={setIsAddTaskOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Study Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Study Task</DialogTitle>
                <DialogDescription>
                  Create a new study task and let AI suggest the optimal time
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="task-title">Task Title</Label>
                  <Input
                    id="task-title"
                    placeholder="e.g., Review Calculus Chapter 3"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    placeholder="e.g., MATH 201"
                    value={newTask.course}
                    onChange={(e) => setNewTask({ ...newTask, course: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select onValueChange={(value) => setNewTask({ ...newTask, priority: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Select onValueChange={(value) => setNewTask({ ...newTask, duration: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30min">30 minutes</SelectItem>
                        <SelectItem value="1hour">1 hour</SelectItem>
                        <SelectItem value="1.5hours">1.5 hours</SelectItem>
                        <SelectItem value="2hours">2 hours</SelectItem>
                        <SelectItem value="3hours">3 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Add any additional details..."
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddTaskOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddTask}>Add Task</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Study Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Progress</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studyStats.todayHours}h</div>
              <p className="text-xs text-muted-foreground">
                +0.5h from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studyStats.weeklyGoal}h</div>
              <Progress value={72} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">
                18h completed (72%)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studyStats.completedTasks}</div>
              <p className="text-xs text-muted-foreground">
                This week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studyStats.streak}</div>
              <p className="text-xs text-muted-foreground">
                Days in a row
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks and Schedule */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Your study tasks prioritized by AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading your tasks...</p>
                  </div>
                ) : tasks.length === 0 ? (
                  <div className="text-center py-8">
                    <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <p className="text-muted-foreground mb-2">No tasks yet</p>
                    <p className="text-sm text-muted-foreground">Add your first study task to get started!</p>
                  </div>
                ) : (
                  tasks.map((task: any) => (
                    <div key={task.id} className={`p-4 rounded-lg border ${task.completed ? 'opacity-60' : ''}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto"
                            >
                              {task.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                              )}
                            </Button>
                            <div>
                              <h4 className={`font-medium ${task.completed ? 'line-through' : ''}`}>
                                {task.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {task.course} • {task.duration}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-8">
                            <Badge variant="outline" className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              Created: {new Date(task.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          {task.ai_suggestions && task.ai_suggestions.length > 0 && (
                            <div className="ml-8 p-3 bg-primary/5 rounded-lg border border-primary/20">
                              <div className="flex items-center space-x-2 mb-2">
                                <Lightbulb className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">AI Suggestions:</span>
                              </div>
                              {task.ai_suggestions.map((suggestion: string, index: number) => (
                                <p key={index} className="text-sm text-primary ml-6">
                                  • {suggestion}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span>Today's Schedule</span>
                </CardTitle>
                <CardDescription>Your optimized daily timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-sm font-medium text-muted-foreground w-20">
                        {item.time}
                      </div>
                      <div className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`} />
                      <div className="flex-1">
                        <p className="font-medium">{item.task}</p>
                        <p className="text-sm text-muted-foreground capitalize">{item.type}</p>
                      </div>
                      {item.type === 'study' && (
                        <Button variant="ghost" size="sm">
                          <Timer className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>AI Insights</span>
                </CardTitle>
                <CardDescription>Personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">{insight.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      {insight.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      {insight.action}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}