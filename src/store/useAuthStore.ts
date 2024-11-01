import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
    tokenBalance: number;
  } | null;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: () => set({
    isAuthenticated: true,
    user: {
      id: '1',
      username: 'demo_user',
      tokenBalance: 470.20
    }
  }),
  logout: () => set({ isAuthenticated: false, user: null })
}));