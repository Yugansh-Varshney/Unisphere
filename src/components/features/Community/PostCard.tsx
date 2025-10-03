import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { MessageCircle, ThumbsUp } from 'lucide-react'; // Icons we just installed

interface PostCardProps {
  authorName: string;
  authorAvatarUrl: string;
  timestamp: string;
  content: string;
  likes: number;
  commentsCount: number;
}

export const PostCard = ({ authorName, authorAvatarUrl, timestamp, content, likes, commentsCount }: PostCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={authorAvatarUrl} alt={authorName} />
          <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{authorName}</span>
          <span className="text-sm text-muted-foreground">{timestamp}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="ghost" className="flex items-center gap-2">
          <ThumbsUp className="h-4 w-4" /> {likes} Likes
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" /> {commentsCount} Comments
        </Button>
      </CardFooter>
    </Card>
  );
};