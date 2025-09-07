// src/store/cartStore.js
import { create } from "zustand";

// مثال بيانات Cart وهمية لعرض الصفحة
export const cartStore = create((set) => ({
  cartItems: [
    {
      id: 1,
      title: "Hydrating Face Cream",
      price: 40,
      image: "/src/assets/rice starter kit.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Vitamin C Serum",
      price: 25,
      image: "/src/assets/logo10.jpeg",
      quantity: 2,
    },
  ],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cartItems.find((item) => item.id === product.id);
      if (exists) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
}));
