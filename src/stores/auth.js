import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

const useAuthStore = create((set) => ({
  auth: null,
  setAuth: (accessToken) => {
    const { user } = jwtDecode(accessToken);

    set((state) => ({
      auth: {
        ...state.auth,
        accessToken,
        user,
      },
    }));
  },
  setUser: (user) => {
    set((state) => ({
      auth: {
        ...state.auth,
        user,
      },
    }));
  },
  clearAuth: () => set({ auth: null }),
}));

export default useAuthStore;
