// src/store/cartStore.js
import { create } from "zustand";

export const cartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + (product.quantity || 1) }
              : item
          ),
        };
      }
      return {
        cartItems: [
          ...state.cartItems,
          { ...product, quantity: product.quantity || 1 },
        ],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      ),
    })),

  clearCart: () => set({ cartItems: [] }),

  // ✅ خليه function أوضح
  subtotal: () =>
    get().cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
}));
