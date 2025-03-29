import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { CartBadge } from './components/CartBadge';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="p-4">
      <CartBadge items={cartItems} />
      
      <h1 className="text-2xl font-bold mb-4 text-center">My Shop</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;