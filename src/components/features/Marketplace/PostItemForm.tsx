// src/components/features/Marketplace/PostItemForm.tsx

import React, { useState, useRef } from 'react'; // 1. Import useRef
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

interface PostItemFormProps {
  onPostItem: (newItem: any) => void;
  onClose: () => void;
}

export const PostItemForm = ({ onPostItem, onClose }: PostItemFormProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // 2. Create a ref for the file input

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  // 3. Create a function to handle removing the image
  const handleRemoveImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // This resets the file input
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const imageFile = formData.get('image') as File;

    const newItem = {
      id: Date.now().toString(),
      title: formData.get('title') as string,
      price: Number(formData.get('price')),
      originalPrice: Number(formData.get('originalPrice')) || undefined,
      condition: formData.get('condition') as any,
      description: formData.get('description') as string,
      imageUrl: imageFile && imageFile.size > 0 ? URL.createObjectURL(imageFile) : '',
      seller: 'You', // Items posted by the user are marked as "You"
      status: 'For Sale' as const,
    };
    onPostItem(newItem);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      {/* ... other form fields ... */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="image" className="text-right">Image</Label>
        <Input 
          id="image" 
          name="image" 
          type="file" 
          accept="image/*" 
          className="col-span-3" 
          required 
          ref={fileInputRef} // Attach the ref
          onChange={handleFileChange} 
        />
      </div>
      
      {/* 4. Conditionally show the preview and "Remove" button */}
      {imagePreview && (
        <div className="col-span-4 flex justify-end items-start gap-2">
            <img src={imagePreview} alt="Image preview" className="rounded-md w-24 h-24 object-contain border" />
            <Button type="button" variant="ghost" size="sm" onClick={handleRemoveImage}>
              Remove
            </Button>
        </div>
      )}

      {/* ... rest of the form fields ... */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">Title</Label>
        <Input id="title" name="title" className="col-span-3" required />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="price" className="text-right">Selling Price (₹)</Label>
        <Input id="price" name="price" type="number" className="col-span-3" required />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="condition" className="text-right">Condition</Label>
        <Select name="condition" required>
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Select a condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Used - Like New">Used - Like New</SelectItem>
            <SelectItem value="Used - Good">Used - Good</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">Description</Label>
        <Textarea id="description" name="description" className="col-span-3" required />
      </div>

      <div className="flex justify-end mt-4">
        <Button type="submit">Post Item</Button>
      </div>
    </form>
  );
};