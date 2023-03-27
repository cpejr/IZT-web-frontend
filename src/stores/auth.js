import jwtDecode from 'jwt-decode';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  auth: null,
  setAuth: (accessToken) => {
    const { user } = jwtDecode(accessToken);

    set({ auth: { accessToken, user } });
  },
  setUser: (user) => set((state) => ({ auth: { ...state?.auth, user } })),
  clearAuth: () => set({ auth: null }),
}));

export default useAuthStore;
