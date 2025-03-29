import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg mt-2">{product.name}</h3>
      <p className="text-xl font-bold">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};