// src/components/features/Community/PostCard.tsx

import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Separator } from '../../ui/separator';
import type { Post, User, Comment } from './Community';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react'; // Icon for the three dots

interface PostCardProps {
  post: Post;
  currentUser: User;
  onLike: (postId: string) => void;
  onAddComment: (postId: string, commentText: string) => void;
  onDeletePost: (postId: string) => void;      // Add this back
  onDeleteComment: (postId: string, commentId: string) => void; // Add this back
}

export const PostCard = ({ post, currentUser, onLike, onAddComment, onDeletePost, onDeleteComment }: PostCardProps) => {
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const isAuthor = currentUser.name === post.author.name;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <span className="font-semibold">{post.author.name}</span>
          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
        </div>

        {/* ✅ The three-dot menu for the POST is back */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {isAuthor && (
              <DropdownMenuItem onClick={() => onDeletePost(post.id)} className="text-destructive">
                Delete Post
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => alert('Reported!')}>Report Post</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </CardHeader>
      <CardContent>
        <p className="text-sm whitespace-pre-wrap">{post.text}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-4">
        <div className="flex justify-between w-full text-xs text-muted-foreground">
          <span>{post.likes} Likes</span>
          <button onClick={() => setShowComments(!showComments)} className="hover:underline">
            {post.comments.length} Comments
          </button>
        </div>
        <Separator />
        <div className="w-full grid grid-cols-2 gap-2">
          <Button variant="ghost" onClick={() => onLike(post.id)}>👍 Like</Button>
          <Button variant="ghost" onClick={() => setShowComments(!showComments)}>💬 Comment</Button>
        </div>
        
        {showComments && (
            <>
                <Separator />
                <div className="w-full space-y-4 max-h-60 overflow-y-auto pr-2">
                  {post.comments.map(comment => (
                    <div key={comment.id} className="flex items-start gap-3 group">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.author.avatarUrl} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg w-full">
                        <span className="font-semibold text-sm">{comment.author.name}</span>
                        <p className="text-sm">{comment.text}</p>
                      </div>

                      {/* ✅ The three-dot menu for COMMENTS is back */}
                      {currentUser.name === comment.author.name && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => onDeleteComment(post.id, comment.id)} className="text-destructive">
                                Delete Comment
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleCommentSubmit} className="flex w-full items-center gap-2 pt-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Input 
                    placeholder="Write a comment..." 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <Button type="submit" size="sm">Post</Button>
                </form>
            </>
        )}
      </CardFooter>
    </Card>
  );
};