// (imports and other functions remain the same...)
import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../ui/card';
import { Button } from '../../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Plus, Trash2 } from 'lucide-react';
import { Skeleton } from '../../ui/skeleton';


export interface Subject { 
  id: string;
  subject_name: string;
  subject_code: string | null;
}

interface SubjectManagerProps {
    user: any;
    onSelectSubject: (subject: Subject) => void;
}

export const SubjectManager = ({ user, onSelectSubject }: SubjectManagerProps) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectCode, setNewSubjectCode] = useState('');

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('subjects').select('*').eq('user_id', user.id);
      if (error) { console.error('Error fetching subjects:', error); } 
      else { setSubjects(data); }
      setLoading(false);
    };
    if (user?.id) { fetchSubjects(); }
  }, [user?.id]);

  const handleAddSubject = async () => {
    if (!newSubjectName.trim()) { alert('Subject name is required.'); return; }
    const { data, error } = await supabase.from('subjects').insert({ user_id: user.id, subject_name: newSubjectName, subject_code: newSubjectCode || null, }).select().single();
    if (error) { console.error('Error adding subject:', error); } 
    else {
      setSubjects(prev => [...prev, data]);
      setNewSubjectName('');
      setNewSubjectCode('');
      setIsDialogOpen(false);
    }
  };
  
  const handleDeleteSubject = async (e: React.MouseEvent, subjectId: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this subject?')) return;
    const { error } = await supabase.from('subjects').delete().eq('id', subjectId);
    if(error){ console.error('Error deleting subject:', error); }
    else { setSubjects(prev => prev.filter(s => s.id !== subjectId)); }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div><CardTitle>Your Subjects</CardTitle></div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild><Button size="sm"><Plus className="h-4 w-4 mr-2" /> Add Subject</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add a New Subject</DialogTitle></DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2"><Label htmlFor="subject-name">Subject Name</Label><Input id="subject-name" value={newSubjectName} onChange={(e) => setNewSubjectName(e.target.value)} placeholder="e.g., Data Structures & Algorithms" /></div>
              <div className="grid gap-2"><Label htmlFor="subject-code">Subject Code (Optional)</Label><Input id="subject-code" value={newSubjectCode} onChange={(e) => setNewSubjectCode(e.target.value)} placeholder="e.g., CS-301" /></div>
            </div>
            <CardFooter><Button onClick={handleAddSubject} className="w-full">Save Subject</Button></CardFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4"><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /></div>
        ) : subjects.length > 0 ? (
          <div className="space-y-3">
            {subjects.map(subject => (
              <button 
                key={subject.id} 
                onClick={() => onSelectSubject(subject)}
                // --- ADD HOVER EFFECT HERE ---
                className="w-full text-left flex items-center justify-between p-3 rounded-md border bg-muted/50 hover:bg-muted transition-transform hover:scale-[1.02]"
              >
                <div>
                  <p className="font-semibold">{subject.subject_name}</p>
                  {subject.subject_code && <p className="text-sm text-muted-foreground">{subject.subject_code}</p>}
                </div>
                <Button variant="ghost" size="icon" onClick={(e) => handleDeleteSubject(e, subject.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You haven't added any subjects yet.</p>
            <p className="text-sm text-muted-foreground">Click "Add Subject" to get started.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};