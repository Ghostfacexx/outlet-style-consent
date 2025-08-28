import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    console.log("CartContext: addItem called with:", newItem);
    
    setItems(prevItems => {
      console.log("CartContext: Previous items:", prevItems);
      const existingItem = prevItems.find(
        item => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === newItem.id && item.size === newItem.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log("CartContext: Updated existing item, new items:", updatedItems);
        return updatedItems;
      }

      const newItems = [...prevItems, { ...newItem, quantity: 1 }];
      console.log("CartContext: Added new item, new items:", newItems);
      return newItems;
    });
  };

  const removeItem = (id: string, size: string) => {
    setItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return items?.reduce((total, item) => total + item.quantity, 0) || 0;
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      getTotalItems,
      getTotalPrice,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};