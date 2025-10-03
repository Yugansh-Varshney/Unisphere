// src/components/features/NotesHub/NoteCard.tsx

import React, { useState } from 'react'; // 1. Import useState
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../ui/card';
import { Button } from '../../ui/button';

// 2. Import Dialog components from your UI library
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../../ui/dialog';

interface NoteCardProps {
  title: string;
  author: string;
  course: string;
  fileUrl: string;
}

export const NoteCard = ({ title, author, course, fileUrl }: NoteCardProps) => {
  // 3. State to control the Dialog's visibility (not strictly needed if just using DialogTrigger)
  // We'll use the built-in trigger functionality for simplicity.

  return (
    <Dialog>
      <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Course: {course}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Uploaded by: {author}</p>
          </CardContent>
        </div>

        <CardFooter className="flex justify-end gap-2 pt-4">
          {/* 4. The trigger button that opens the modal */}
          <DialogTrigger asChild>
            <Button variant="outline">Preview</Button>
          </DialogTrigger>
          
          <a href={fileUrl} download>
            <Button>Download</Button>
          </a>
        </CardFooter>
      </Card>

      {/* 5. The Dialog's content, which holds the PDF viewer */}
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Course: {course} | Author: {author}</DialogDescription>
        </DialogHeader>
        
        {/* 6. The iframe is the simplest way to display a PDF */}
        <div className="h-full w-full rounded-md border">
            <iframe
              src={fileUrl}
              title={`Preview of ${title}`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
        </div>
      </DialogContent>
    </Dialog>
  );
};