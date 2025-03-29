import React from 'react';
import { CartItem } from '../types';

interface CartBadgeProps {
  items: CartItem[];
}

export const CartBadge: React.FC<CartBadgeProps> = ({ items }) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-blue-500 text-white p-2 rounded fixed top-4 right-4">
      Cart Items: {totalItems}
    </div>
  );
};