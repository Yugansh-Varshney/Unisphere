import React from 'react';
import { PostCard } from './PostCard';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';
import { Card, CardContent } from '../../ui/card';

export const Community = () => {
  // Mock data for the feed. Later, this will come from your backend.
  const samplePosts = [
    { id: 1, authorName: 'Shivani', authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', timestamp: '2h ago', content: 'Anyone forming a study group for the upcoming CS101 midterm? Let me know!', likes: 12, commentsCount: 5 },
    { id: 2, authorName: 'Amita', authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', timestamp: '5h ago', content: 'Reminder: The University Coding Club is meeting tonight at 7 PM in the main library. Free pizza will be provided! 🍕', likes: 45, commentsCount: 18 },
    { id: 3, authorName: 'Ashu', authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d', timestamp: '1d ago', content: 'Selling my old chemistry textbook, in great condition. DM if interested. Check it out on the marketplace!', likes: 8, commentsCount: 2 },
  ];

  return (
    <div className="container mx-auto max-w-2xl p-6">
      <h1 className="text-4xl font-bold mb-6">Community Hub</h1>
      
      {/* Create Post Section */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="space-y-4">
            <Textarea placeholder="What's on your mind?" />
            <Button className="w-full">Post</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Feed Section */}
      <div className="space-y-6">
        {samplePosts.map(post => (
          <PostCard
            key={post.id}
            authorName={post.authorName}
            authorAvatarUrl={post.authorAvatarUrl}
            timestamp={post.timestamp}
            content={post.content}
            likes={post.likes}
            commentsCount={post.commentsCount}
          />
        ))}
      </div>
    </div>
  );
};