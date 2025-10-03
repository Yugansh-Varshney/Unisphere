// src/components/features/Marketplace/PostItemForm.tsx

import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

export const PostItemForm = () => {
  // State for the image file itself and its preview URL
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // State for other form inputs
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  // This function runs when the user selects a file
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create a temporary URL for the selected image to show a preview
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real app, this is where you would send the data to your backend
    if (!imageFile) {
      alert('Please select an image!');
      return;
    }
    console.log('Submitting:', { title, price, imageFile });
    alert('Item submitted! (Check the console for the data)');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Post a New Item</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload and Preview Section */}
          <div className="space-y-2">
            <Label>Item Image</Label>
            {imagePreview && (
              <div className="w-full h-64 border rounded-md overflow-hidden">
                <img src={imagePreview} alt="Selected item preview" className="w-full h-full object-cover" />
              </div>
            )}
            <Input 
              id="image" 
              type="file" 
              accept="image/png, image/jpeg" // Only allow image files
              onChange={handleImageChange} 
              required
            />
          </div>
          
          {/* Other Form Fields */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          
          <Button type="submit" className="w-full">Post Item</Button>
        </form>
      </CardContent>
    </Card>
  );
};