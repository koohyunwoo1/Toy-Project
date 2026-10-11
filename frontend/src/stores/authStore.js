
import { create } from 'zustand';
import { authApi } from '../api/authApi';

export const useAuthStore = create((set) => ({
  user: null,

  signup: async (formData) => {
    const response = await authApi.signup(formData);

    return response.data.user;
  },

  login: async (formData) => {
    const response = await authApi.login(formData);

    set({
      user: response.data.user,
    });

    return response.data.user;
  },

  logout: () => {
    set({ user: null });
  },
}));
