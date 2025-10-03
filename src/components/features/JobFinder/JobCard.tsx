import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Progress } from '../../ui/progress'; // For the AI match score

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Part-time';
  tags: string[];
  matchPercentage: number;
}

export const JobCard = ({ title, company, location, type, tags, matchPercentage }: JobCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{company} - {location}</CardDescription>
          </div>
          <Badge>{type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Key Skills:</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium">AI Match Score: {matchPercentage}%</p>
          <Progress value={matchPercentage} className="w-full mt-1" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="w-full">View Details</Button>
          <Button className="w-full">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};