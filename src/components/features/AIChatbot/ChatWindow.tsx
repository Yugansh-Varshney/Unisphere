// src/components/features/AIChatbot/ChatWindow.tsx (Correct Version with Memory)

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from './types';

const CHATBOT_API_URL = 'http://127.0.0.1:8000/chat';

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
    };

    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setIsLoading(true);

    const history = currentMessages.slice(-5);

    try {
      const response = await fetch(CHATBOT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageText,
          history: history 
        }),
      });

      if (!response.ok) throw new Error('API response was not ok.');
      
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error('Error calling chatbot API:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I am having trouble connecting. Please try again later.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto h-[70vh] flex flex-col">
      <CardHeader>
        <CardTitle>UniSphere AI Assistant</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-4 pr-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'bot' && <Avatar><AvatarFallback>AI</AvatarFallback></Avatar>}
                <div className={`whitespace-pre-wrap rounded-lg px-4 py-2 max-w-[80%] ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar><AvatarFallback>AI</AvatarFallback></Avatar>
                <div className="rounded-lg px-4 py-2 bg-muted"><p className="animate-pulse">...</p></div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleFormSubmit} className="flex w-full items-center space-x-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." disabled={isLoading} />
          <Button type="submit" disabled={isLoading}>Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}