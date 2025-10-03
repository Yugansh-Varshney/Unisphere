import React from 'react';
import { MarketplaceItem } from './MarketplaceItem';
import { Button } from '../../ui/button';

export const Marketplace = () => {
  // Mock data for now. Later, this will come from your backend.
  const sampleItems = [
    { id: 1, title: 'Used "Intro to CS" Textbook', price: 25.00, imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.WNVhQ3hcII838ko6JdjeEQHaJT?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', seller: 'Shubham.', condition: 'Used - Good' },
    { id: 2, title: 'Drafter', price: 50.00, imageUrl: 'https://www.htconline.in/images/thumbs/0015904_omega-mini-drafter.jpeg', seller: 'Ashutosh', condition: 'Used - Like New' },
    { id: 3, title: 'Scientific Calculator TI-84', price: 40.00, imageUrl: 'https://i5.walmartimages.com/asr/a36594b4-842d-473c-9127-87bc6b25f484_1.854fef866dec4f0b4363c2aa911514fc.jpeg', seller: 'Alex R.', condition: 'Used - Good' },
    { id: 4, title: 'Desk Lamp with USB Port', price: 15.00, imageUrl: 'https://picsum.photos/seed/lamp/400/300', seller: 'Prince', condition: 'New' },
    { id: 5, title: 'Barely Used Bicycle', price: 120.00, imageUrl: 'https://picsum.photos/seed/bicycle/400/300', seller: 'Ankit', condition: 'Used - Like New' },
    { id: 6, title: 'Noise-Cancelling Headphones', price: 75.00, imageUrl: 'https://b2c-contenthub.com/wp-content/uploads/2022/06/BW-Px7-S2-primary.jpg?quality=50&strip=all', seller: 'Amit', condition: 'Used - Fair' },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Campus Marketplace</h1>
        <Button>Post an Item</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleItems.map(item => (
          <MarketplaceItem
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            seller={item.seller}
            condition={item.condition}
          />
        ))}
      </div>
    </div>
  );
};