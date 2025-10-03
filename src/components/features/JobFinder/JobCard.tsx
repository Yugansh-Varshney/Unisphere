// src/components/features/JobFinder/JobCard.tsx

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Progress } from '../../ui/progress';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Part-time';
  tags: string[];
  matchPercentage: number;
  onViewDetails: () => void;
  // 'applyLink' is no longer needed here
}

export const JobCard = ({ title, company, location, type, tags, matchPercentage, onViewDetails }: JobCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{company} - {location}</CardDescription>
          </div>
          <Badge>{type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm font-medium mb-2 text-muted-foreground">Key Skills:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <p className="text-sm font-medium mt-4 text-muted-foreground">AI Match Score: {matchPercentage}%</p>
        <Progress value={matchPercentage} className="w-full mt-1" />
      </CardContent>
      
      {/* ✅ The buttons section is now cleaner, using a CardFooter */}
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={onViewDetails}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};