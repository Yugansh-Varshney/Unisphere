// src/components/features/Marketplace/Marketplace.tsx

import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import { Button } from '../../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '../../ui/dialog';
import { MarketplaceItem } from './MarketplaceItem';
import { PostItemForm } from './PostItemForm';

type Item = {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  condition: 'New' | 'Used - Like New' | 'Used - Good' | 'Used - Fair';
  imageUrl: string;
  seller: string;
  description: string;
  status: 'For Sale' | 'Sold';
};

const sampleItems: Item[] = [
    // ... your sample items array
];

// 2. LOGIC TO LOAD INITIAL DATA
// We check localStorage for saved items. If none are found, we use the default sampleItems.
const getInitialItems = (): Item[] => {
  try {
    const savedItems = localStorage.getItem('marketplaceItems');
    return savedItems ? JSON.parse(savedItems) : sampleItems;
  } catch (error) {
    console.error("Failed to parse items from localStorage", error);
    return sampleItems;
  }
};


export const Marketplace = () => {
  // Initialize state with data from localStorage (or the default samples)
  const [items, setItems] = useState<Item[]>(getInitialItems);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [viewingItemId, setViewingItemId] = useState<string | null>(null);
  
  // 3. LOGIC TO SAVE DATA
  // This useEffect hook runs every time the 'items' state changes.
  useEffect(() => {
    // We convert the 'items' array to a string and save it in localStorage.
    localStorage.setItem('marketplaceItems', JSON.stringify(items));
  }, [items]); // The dependency array ensures this runs only when 'items' changes.


  const handlePostItem = (newItem: Item) => {
    setItems(prevItems => [newItem, ...prevItems]);
  };

  const handleMarkAsSold = (itemId: string) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, status: 'Sold' } : item
      )
    );
    setViewingItemId(null);
  };
  
  const handleDeleteItem = (itemId: string) => {
    if (window.confirm('Are you sure you want to delete this post? This cannot be undone.')) {
        setItems(currentItems => currentItems.filter(item => item.id !== itemId));
        setViewingItemId(null);
    }
  };

  const selectedItem = items.find(item => item.id === viewingItemId);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Campus Marketplace</h1>
        <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
          <DialogTrigger asChild>
            <Button>Post an Item</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle>List Your Item for Sale</DialogTitle>
            </DialogHeader>
            <PostItemForm 
              onPostItem={handlePostItem}
              onClose={() => setIsPostModalOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <MarketplaceItem 
              key={item.id} 
              item={item}
              onViewDetails={() => setViewingItemId(item.id)}
              onDeleteItem={() => handleDeleteItem(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed rounded-lg h-64">
            <h2 className="text-2xl font-semibold">No Items Available</h2>
            <p className="text-muted-foreground mt-2">Check back later or be the first to post something for sale!</p>
        </div>
      )}

      {/* ... (The Dialog for viewing details remains the same) ... */}
      <Dialog open={!!viewingItemId} onOpenChange={() => setViewingItemId(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedItem.title}</DialogTitle>
                <DialogDescription>Sold by {selectedItem.seller}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="aspect-square bg-muted rounded-md">
                    <img src={selectedItem.imageUrl} alt={selectedItem.title} className="h-full w-full object-contain rounded-md" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Price</h4>
                    <p className="text-2xl font-bold">₹{selectedItem.price.toLocaleString('en-IN')}</p>
                  </div>
                   <div>
                    <h4 className="font-semibold">Condition</h4>
                    <p className="text-muted-foreground">{selectedItem.condition}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Description</h4>
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                  </div>
                </div>
              </div>
              <DialogFooter className="sm:justify-between">
                <div>
                    {selectedItem.seller === 'You' && (
                        <Button variant="ghost" className="text-destructive hover:text-destructive" onClick={() => handleDeleteItem(selectedItem.id)}>
                            Delete Post
                        </Button>
                    )}
                </div>
                <div className="flex gap-2">
                    {selectedItem.seller === 'You' && selectedItem.status === 'For Sale' && (
                        <Button variant="destructive" onClick={() => handleMarkAsSold(selectedItem.id)}>
                            Mark as Sold
                        </Button>
                    )}
                    <Button variant="outline" onClick={() => setViewingItemId(null)}>Close</Button>
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};