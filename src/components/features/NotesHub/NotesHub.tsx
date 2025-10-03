// src/components/features/NotesHub/NotesHub.tsx

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Forum } from './Forum';
import { NoteCard } from './NoteCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../ui/card';
import { Button } from '../../ui/button';

interface NoteCardProps {
  title: string;
  course: string;
  author: string;
  fileUrl: string; // Add fileUrl to the interface
}

export const NoteCard = ({ title, course, author, fileUrl }: NoteCardProps) => {
  return (
    <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Course: {course}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Uploaded by: {author}</p>
        </CardContent>
      </div>

      {/* The CardFooter should be a direct child of Card, not inside CardContent */}
      <CardFooter className="flex justify-end gap-2 pt-4">
        <a href={fileUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">Preview</Button>
        </a>
        <a href={fileUrl} download>
          <Button>Download</Button>
        </a>
      </CardFooter>
    </Card>
  
  );
};




export const NotesHub = () => {
  // Mock data for notes. In the future, you'll fetch this from your backend.
  const notes = [
     { id: 1, title: 'Intro to Python - Lecture 1', course: 'CS101', author: 'Shubham', fileUrl: '/Computer_Network.pdf' },
    { id: 2, title: 'Calculus I - Chapter 3 Summary', course: 'MATH203', author: 'Ashutosh', fileUrl: '/Computer_Network.pdf' },
    { id: 3, title: 'Organic Chemistry Final Review', course: 'CHEM301', author: 'Amit', fileUrl: '/Computer_Network.pdf' },
    { id: 4, title: 'History of Ancient Civilizations', course: 'HIST105', author: 'Yugansh', fileUrl: '/Computer_Network.pdf' },
    { id: 5, title: 'Microeconomics Supply & Demand', course: 'ECON201', author: 'Sharanya', fileUrl: '/Computer_Network.pdf' },
    { id: 6, title: 'Intro to Psychology Notes', course: 'PSYCH101', author: 'Arpit', fileUrl: '/Computer_Network.pdf' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Notes Hub</h1>
      <Tabs defaultValue="notes">
        <TabsList>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="forum">Forum</TabsTrigger>
        </TabsList>
        <TabsContent value="notes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map(note => (
              <NoteCard 
    key={note.id} 
    title={note.title} 
    author={note.author} 
    course={note.course}
    fileUrl={note.fileUrl} // ✅ ADD THIS LINE
  />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="forum">
          <Forum />
        </TabsContent>
      </Tabs>
    </div>
  );
};