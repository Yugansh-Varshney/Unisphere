// src/components/features/Community/Community.tsx

import React, { useState, useEffect } from 'react';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { PostCard } from './PostCard';

export interface User { name: string; avatarUrl?: string; }
export interface Comment { id: string; author: User; text: string; timestamp: string; }
export interface Post { id: string; author: User; text: string; timestamp: string; likes: number; comments: Comment[]; }

const currentUser: User = {
  name: 'Shubham',
  avatarUrl: 'https://github.com/shadcn.png',
};

const samplePosts: Post[] = [
  {
    id: 'post1',
    author: { name: 'Shivani', avatarUrl: 'https://i.pravatar.cc/150?u=shivani' },
    text: 'Anyone forming a study group for the upcoming CS101 midterm? Let me know!',
    timestamp: '2 hours ago',
    likes: 12,
    comments: [
      { id: 'c1', author: { name: 'Rohan' }, text: 'I am interested!', timestamp: '1 hour ago' },
      { id: 'c2', author: { name: 'Shubham', avatarUrl: 'https://github.com/shadcn.png' }, text: 'Great idea! Count me in.', timestamp: '45 mins ago' },
    ],
  },
  {
    id: 'post2',
    author: { name: 'Shubham', avatarUrl: 'https://github.com/shadcn.png' }, // A post by the current user
    text: 'Just finished the marketplace feature for our project. Feeling accomplished! ✨',
    timestamp: '8 hours ago',
    likes: 42,
    comments: [],
  },
];

const getInitialPosts = (): Post[] => {
  try {
    const savedPosts = localStorage.getItem('communityPosts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      if (Array.isArray(parsedPosts) && parsedPosts.length > 0) {
        return parsedPosts;
      }
    }
  } catch (error) {
    console.error("Failed to parse posts from localStorage", error);
  }
  return samplePosts;
};

export const Community = () => {
  const [posts, setPosts] = useState<Post[]>(getInitialPosts);
  const [newPostText, setNewPostText] = useState('');

  useEffect(() => {
    localStorage.setItem('communityPosts', JSON.stringify(posts));
  }, [posts]);

  // --- HANDLER FUNCTIONS ---

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    const newPost: Post = { id: `post_${Date.now()}`, author: currentUser, text: newPostText, timestamp: 'Just now', likes: 0, comments: [] };
    setPosts(prevPosts => [newPost, ...prevPosts]);
    setNewPostText('');
  };

  const handleLike = (postId: string) => {
    setPosts(currentPosts => currentPosts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleAddComment = (postId: string, commentText: string) => {
    const newComment: Comment = { id: `c_${Date.now()}`, author: currentUser, text: commentText, timestamp: 'Just now' };
    setPosts(currentPosts => currentPosts.map(p => p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p));
  };

  // ✅ The delete handlers are back
  const handleDeletePost = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
        setPosts(currentPosts => currentPosts.filter(p => p.id !== postId));
    }
  };

  const handleDeleteComment = (postId: string, commentId: string) => {
    setPosts(currentPosts =>
      currentPosts.map(post => {
        if (post.id === postId) {
          const updatedComments = post.comments.filter(comment => comment.id !== commentId);
          return { ...post, comments: updatedComments };
        }
        return post;
      })
    );
  };

  return (
    <div className="container mx-auto max-w-2xl p-4 sm:p-6 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Community Hub</h1>
      
      <Card>
        <CardContent className="p-4">
          <form onSubmit={handlePostSubmit} className="space-y-4">
            <Textarea
              placeholder={`What's on your mind, ${currentUser.name}?`}
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              className="min-h-[80px]"
            />
            <Button type="submit" className="w-full">Post</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {posts.map(post => (
          <PostCard 
            key={post.id} 
            post={post}
            currentUser={currentUser}
            onLike={handleLike}
            onAddComment={handleAddComment}
            onDeletePost={handleDeletePost}       // ✅ Pass the handlers down
            onDeleteComment={handleDeleteComment} // ✅ Pass the handlers down
          />
        ))}
      </div>
    </div>
  );
};