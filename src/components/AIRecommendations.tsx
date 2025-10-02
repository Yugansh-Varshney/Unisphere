import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { apiService } from '../utils/api';
import { 
  Brain, 
  Lightbulb, 
  Target, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Zap,
  RefreshCw
} from 'lucide-react';

interface AIRecommendationsProps {
  userId: string;
  onNavigate: (view: string) => void;
}

export function AIRecommendations({ userId, onNavigate }: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState([]);
  const [optimizations, setOptimizations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRecommendations = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      const [recommendationsResult, optimizationsResult] = await Promise.all([
        apiService.getAIRecommendations(userId),
        apiService.getStudyOptimizations(userId)
      ]);

      setRecommendations(recommendationsResult.recommendations || []);
      setOptimizations(optimizationsResult.optimizations || []);
    } catch (err) {
      console.error('Error fetching AI recommendations:', err);
      setError('Failed to load AI recommendations');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRecommendations();
    }
  }, [userId]);

  const handleRefresh = () => {
    fetchRecommendations();
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'study_time': return Clock;
      case 'task_management': return Target;
      case 'subject_optimization': return BookOpen;
      case 'motivation': return Zap;
      case 'time_optimization': return TrendingUp;
      default: return Lightbulb;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-60" />
            </div>
            <Skeleton className="h-9 w-20" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-8 w-24" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">AI Recommendations Unavailable</CardTitle>
          <CardDescription>
            We couldn't load your personalized recommendations. Please try again.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleRefresh} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* AI Recommendations */}
      <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>AI Recommendations</CardTitle>
            </div>
            <CardDescription>
              Personalized suggestions based on your study patterns and goals
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>AI is analyzing your study patterns...</p>
              <p className="text-sm">Complete a few study sessions to get personalized recommendations!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((rec: any, index: number) => {
                const Icon = getRecommendationIcon(rec.type);
                return (
                  <div key={index} className="p-4 bg-background rounded-lg border">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{rec.title}</h4>
                        <Badge variant="outline" className={getPriorityColor(rec.priority)}>
                          {rec.priority} priority
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {rec.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        if (rec.action === 'schedule_study') onNavigate('planner');
                        if (rec.action === 'organize_tasks') onNavigate('planner');
                        if (rec.action === 'optimize_schedule') onNavigate('planner');
                      }}
                    >
                      {rec.actionText}
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Study Optimization Techniques */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle>Study Optimization Techniques</CardTitle>
          </div>
          <CardDescription>
            Evidence-based methods to enhance your learning efficiency
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {optimizations.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              <p>Loading optimization techniques...</p>
            </div>
          ) : (
            optimizations.map((optimization: any, index: number) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{optimization.technique}</h4>
                  <Badge variant="secondary">{optimization.effectiveness}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {optimization.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-medium">Time Required:</span>
                    <p className="text-muted-foreground">{optimization.timeRequired}</p>
                  </div>
                  <div>
                    <span className="font-medium">Best For:</span>
                    <p className="text-muted-foreground">
                      {optimization.bestFor.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}