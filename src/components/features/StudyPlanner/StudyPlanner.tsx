import React, { useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { SubjectManager, Subject } from './SubjectManager';
import { TopicManager } from './TopicManager';
import { Button } from '../../ui/button';
import { Sparkles } from 'lucide-react';
import { Toaster } from '../../ui/sonner';
import { toast } from 'sonner';
import { UpcomingTasks } from './UpcomingTasks'; // <-- 1. Import the new component

export const StudyPlanner = ({ user }: { user: any }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // A key to force the UpcomingTasks component to re-fetch data
  const [tasksVersion, setTasksVersion] = useState(1);

  const handleGeneratePlan = async () => {
    if (!window.confirm("This will generate a new 7-day study plan using AI. Continue?")) return;

    setIsGenerating(true);
    toast.info("Your personal AI coach is generating a new study plan...");
    
    try {
        const response = await fetch('http://localhost:8001/generate-plan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.id }),
        });

        const result = await response.json();

        if (response.ok && result.message) {
            toast.success(result.message);
            setTasksVersion(v => v + 1); // <-- Force a re-fetch of tasks
        } else {
            throw new Error(result.error || "An unknown error occurred.");
        }
    } catch (error: any) {
        toast.error(`Failed to generate plan: ${error.message}`);
    } finally {
        setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="space-y-2">
            <h1 className="text-4xl font-bold">Smart Study Planner</h1>
            <p className="text-muted-foreground">Manage your subjects, add topics, and let AI build your schedule.</p>
        </div>
        <Button onClick={handleGeneratePlan} disabled={isGenerating}>
            <Sparkles className="h-4 w-4 mr-2" />
            {isGenerating ? "Generating Plan..." : "Generate AI Study Plan"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column for Management */}
        <div>
          {user && (
            selectedSubject ? (
              <TopicManager 
                user={user} 
                subject={selectedSubject} 
                onBack={() => setSelectedSubject(null)}
              />
            ) : (
              <SubjectManager 
                user={user} 
                onSelectSubject={(subject) => setSelectedSubject(subject)}
              />
            )
          )}
        </div>
        {/* Right Column for Displaying the Plan */}
        <div>
            {/* --- 2. ADD THE NEW COMPONENT HERE --- */}
            {user && <UpcomingTasks key={tasksVersion} user={user} />
        }
        </div>
      </div>
      <Toaster />
    </div>
  );
};