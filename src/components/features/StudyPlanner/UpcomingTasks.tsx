// src/components/features/StudyPlanner/UpcomingTasks.tsx (Tutor Version)

import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Skeleton } from '../../ui/skeleton';
import { CheckCircle, Clock, History, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

interface Task {
  id: string;
  scheduled_date: string;
  task_type: string;
  duration_minutes: number;
  status: string;
  details: string | null; // <-- ADDED
  suggested_resource: string | null; // <-- ADDED
  syllabus_topics: {
    topic_name: string;
  };
}

export const UpcomingTasks = ({ user, version }: { user: any, version: number }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      // Update the select query to get the new fields
      const { data, error } = await supabase
        .from('study_tasks')
        .select(`id, scheduled_date, task_type, duration_minutes, status, details, suggested_resource, syllabus_topics ( topic_name )`)
        .eq('user_id', user.id)
        .order('scheduled_date', { ascending: true });

      if (error) { console.error("Error fetching study tasks:", error); } 
      else { setTasks(data); }
      setLoading(false);
    };

    if (user?.id) { fetchTasks(); }
  }, [user?.id, version]);

  const handleMarkAsDone = async (taskId: string) => {
    // ... (this function remains the same, no changes needed)
    setTasks(currentTasks => currentTasks.map(task => task.id === taskId ? { ...task, status: 'completed' } : task));
    const { error } = await supabase.from('study_tasks').update({ status: 'completed' }).eq('id', taskId);
    if (error) {
      console.error("Error updating task status:", error);
      alert("Failed to update task. Please try again.");
      setTasks(currentTasks => currentTasks.map(task => task.id === taskId ? { ...task, status: 'pending' } : task));
    }
  };
  
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const pendingTasks = tasks.filter(task => task.status !== 'completed');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your AI-Generated Study Plan</CardTitle>
        <CardDescription>Your upcoming tasks, prioritized by AI.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {loading && <Skeleton className="h-24 w-full" />}
        {!loading && tasks.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
                <p>No tasks yet.</p>
                <p>Add your subjects and topics, then click "Generate AI Study Plan".</p>
            </div>
        )}
        
        {!loading && pendingTasks.length > 0 && (
            <div className="space-y-4">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="p-4 rounded-lg border bg-card text-card-foreground">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold">{task.syllabus_topics.topic_name}</p>
                        <p className="text-sm font-bold text-primary">{task.task_type}</p>
                        {/* --- NEW: Display the details from the AI --- */}
                        <p className="text-sm text-muted-foreground mt-1">{task.details}</p>
                        <p className="text-xs text-muted-foreground mt-2">{formatDate(task.scheduled_date)} • {task.duration_minutes} mins</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-3">
                        {/* --- NEW: Add a clickable link for the resource --- */}
                        {task.suggested_resource && (
                            <Button variant="outline" size="sm" asChild>
                                <a href={task.suggested_resource} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" /> View Resource
                                </a>
                            </Button>
                        )}
                        <Button variant="ghost" size="sm" onClick={() => handleMarkAsDone(task.id)}>
                          <CheckCircle className="h-4 w-4 mr-2" /> Done
                        </Button>
                    </div>
                  </div>
                ))}
            </div>
        )}

        {!loading && completedTasks.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="completed-tasks">
              <AccordionTrigger>
                <div className="flex items-center gap-2"><History className="h-4 w-4" /><span>View {completedTasks.length} Completed Task(s)</span></div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  {completedTasks.map((task) => (
                    <div key={task.id} className="flex items-center space-x-4 p-3 rounded-lg bg-green-500/10 text-green-700 dark:text-green-400">
                      <CheckCircle className="h-5 w-5" />
                      <div className="flex-1 min-w-0 opacity-70">
                        <p className="font-medium truncate line-through">{task.syllabus_topics.topic_name}</p>
                        <p className="text-sm">{formatDate(task.scheduled_date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};