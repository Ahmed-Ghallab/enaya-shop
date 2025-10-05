import { create } from "zustand";

export const authStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,

  login: (email,) => {
    // تسجيل دخول بسيط ومحاكاة لقاعدة بيانات
    const mockUser = {
      name: email.split("@")[0], // استخراج اسم مبدئي من الإيميل
      email,
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    set({ user: mockUser });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },

  updateName: (newName) => {
    set((state) => {
      if (!state.user) return state; // تأمين ضد null
      const updatedUser = { ...state.user, name: newName };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return { user: updatedUser };
    });
  },
}));
