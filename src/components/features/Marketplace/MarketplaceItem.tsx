// src/components/features/Marketplace/MarketplaceItem.tsx

import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';

export interface MarketplaceItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    originalPrice?: number;
    condition: 'New' | 'Used - Like New' | 'Used - Good' | 'Used - Fair';
    imageUrl: string;
    seller: string;
    status: 'For Sale' | 'Sold';
  };
  onViewDetails: () => void;
  onDeleteItem: () => void;
}

export const MarketplaceItem = ({ item, onViewDetails, onDeleteItem }: MarketplaceItemProps) => {
  const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : null;

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the details pop-up from opening
    onDeleteItem();
  };

  return (
    <div className="relative">
      {item.seller === 'You' && (
        <Button
          variant="destructive"
          size="icon"
          className="absolute top-2 right-2 z-20 h-6 w-6 rounded-full"
          onClick={handleDeleteClick}
        >
          X
        </Button>
      )}

      {/* 1. The main button NO LONGER has the `disabled` attribute. */}
      <button 
        // 2. The click handler is now conditional. It does nothing if the item is sold.
        onClick={item.status === 'For Sale' ? onViewDetails : (e) => e.preventDefault()}
        // 3. We apply styles conditionally to make it LOOK disabled.
        className={`w-full text-left ${item.status === 'Sold' ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Card className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
          {item.status === 'Sold' && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
              <Badge className="text-xl px-4 py-2 bg-destructive text-destructive-foreground border-2 border-white/50 rotate-[-15deg] scale-110">
                SOLD
              </Badge>
            </div>
          )}
          <div className="relative aspect-square bg-muted">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-full w-full object-contain p-2"
            />
             {discount && item.status === 'For Sale' && (
                <Badge className="absolute top-2 left-2 bg-red-600 text-white border-transparent hover:bg-red-700">
                  {discount}% OFF
                </Badge>
              )}
          </div>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold text-lg truncate" title={item.title}>
              {item.title}
            </h3>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold">₹{item.price.toLocaleString('en-IN')}</p>
              {item.originalPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  ₹{item.originalPrice.toLocaleString('en-IN')}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center text-xs text-muted-foreground pt-1">
              <span>Sold by {item.seller}</span>
              <Badge variant="outline">{item.condition}</Badge>
            </div>
          </CardContent>
        </Card>
      </button>
    </div>
  );
};