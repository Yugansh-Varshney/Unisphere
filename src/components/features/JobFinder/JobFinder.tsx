import React from 'react';
import { JobCard } from './JobCard';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

export const JobFinder = () => {
  // Mock data for the job board.
  const sampleJobs = [
    { id: 1, title: 'Software Engineer Intern', company: 'Tech Solutions Inc.', location: 'Remote', type: 'Internship', tags: ['React', 'Node.js', 'TypeScript'], matchPercentage: 95 },
    { id: 2, title: 'Digital Marketing Assistant', company: 'Creative Minds Agency', location: 'New York, NY', type: 'Part-time', tags: ['SEO', 'Social Media', 'Content Creation'], matchPercentage: 88 },
    { id: 3, title: 'Data Analyst (Entry-Level)', company: 'Data Insights Corp.', location: 'San Francisco, CA', type: 'Full-time', tags: ['SQL', 'Python', 'Tableau'], matchPercentage: 82 },
    { id: 4, title: 'UX/UI Design Intern', company: 'Innovate Design Co.', location: 'Remote', type: 'Internship', tags: ['Figma', 'User Research', 'Prototyping'], matchPercentage: 76 },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">AI Job & Internship Finder</h1>
        <p className="text-muted-foreground mt-2">Opportunities tailored to your skills and interests.</p>
      </div>
      
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input placeholder="Search by title or skill..." className="flex-grow" />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="internship">Internship</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="full-time">Full-time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Job Listings */}
      <div className="space-y-6">
        {sampleJobs.map(job => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
            tags={job.tags}
            matchPercentage={job.matchPercentage}
          />
        ))}
      </div>
    </div>
  );
};