import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

interface MarketplaceItemProps {
  title: string;
  price: number;
  imageUrl: string;
  seller: string;
  condition: 'New' | 'Used - Like New' | 'Used - Good' | 'Used - Fair';
}

export const MarketplaceItem = ({ title, price, imageUrl, seller, condition }: MarketplaceItemProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">{condition}</Badge>
        <CardTitle className="text-lg mb-2 truncate">{title}</CardTitle>
        <p className="text-xl font-bold mb-2">₹{price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground mb-4">Sold by {seller}</p>
        <Button className="w-full">View Details</Button>
      </CardContent>
    </Card>
  );
};