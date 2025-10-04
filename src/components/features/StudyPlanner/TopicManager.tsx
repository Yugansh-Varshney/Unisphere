import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Skeleton } from '../../ui/skeleton';

interface Subject {
  id: string;
  subject_name: string;
  subject_code: string | null;
}

interface Topic {
  id: string;
  topic_name: string;
}

interface TopicManagerProps {
  user: any;
  subject: Subject;
  onBack: () => void;
}

export const TopicManager = ({ user, subject, onBack }: TopicManagerProps) => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTopicName, setNewTopicName] = useState('');

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('syllabus_topics')
        .select('id, topic_name')
        .eq('subject_id', subject.id);
      
      if (error) {
        console.error(`Error fetching topics for ${subject.subject_name}:`, error);
      } else {
        setTopics(data);
      }
      setLoading(false);
    };

    fetchTopics();
  }, [subject.id]);

  const handleAddTopic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicName.trim()) return;

    const { data, error } = await supabase
      .from('syllabus_topics')
      .insert({
        user_id: user.id,
        subject_id: subject.id,
        topic_name: newTopicName,
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding topic:', error);
    } else {
      setTopics(prev => [...prev, data]);
      setNewTopicName('');
    }
  };

  const handleDeleteTopic = async (topicId: string) => {
     if (!window.confirm('Are you sure you want to delete this topic?')) return;
     const { error } = await supabase.from('syllabus_topics').delete().eq('id', topicId);
     if(error){ console.error('Error deleting topic:', error); }
     else { setTopics(prev => prev.filter(t => t.id !== topicId)); }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={onBack}>
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
                <CardTitle className="text-2xl">{subject.subject_name}</CardTitle>
                {subject.subject_code && <p className="text-sm text-muted-foreground">{subject.subject_code}</p>}
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddTopic} className="flex items-center gap-2 mb-6">
            <Input 
                value={newTopicName}
                onChange={(e) => setNewTopicName(e.target.value)}
                placeholder="Enter a new syllabus topic..."
            />
            <Button type="submit"><Plus className="h-4 w-4 mr-2" /> Add Topic</Button>
        </form>

        <h3 className="text-lg font-semibold mb-4">Syllabus Topics</h3>
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        ) : topics.length > 0 ? (
          <ul className="space-y-3">
            {topics.map(topic => (
              // --- HOVER EFFECT ADDED TO THE LINE BELOW ---
              <li key={topic.id} className="flex items-center justify-between p-3 rounded-md border bg-muted/50 hover:bg-muted transition-colors">
                <p className="font-medium">{topic.topic_name}</p>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteTopic(topic.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No topics added for this subject yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};