import { create } from "zustand";
import { persist } from "zustand/middleware";

export const wishlistStore = create(
  persist(
    (set, get) => ({
      // 🩷 الحالة الأساسية
      wishlistItems: [],

      // ➕ إضافة منتج للمفضلة
      addToWishlist: (product) => {
        const existingItem = get().wishlistItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) return; // لو المنتج موجود بالفعل، ما يتكررش

        set((state) => ({
          wishlistItems: [...state.wishlistItems, product],
        }));
      },

      // ❌ إزالة منتج من المفضلة
      removeFromWishlist: (id) => {
        set((state) => ({
          wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
        }));
      },

      // 🗑️ مسح المفضلة بالكامل
      clearWishlist: () => set({ wishlistItems: [] }),

      // ✅ التحقق هل المنتج موجود في المفضلة (لزر النجمة)
      isInWishlist: (id) => {
        return get().wishlistItems.some((item) => item.id === id);
      },
    }),
    {
      name: "wishlist-storage", // اسم التخزين في localStorage
      getStorage: () => localStorage,
    }
  )
);
