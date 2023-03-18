import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

const useAuthStore = create((set) => ({
  auth: null,
  setAuth: (accessToken) => {
    const { user } = jwtDecode(accessToken);

    set({ auth: { accessToken, user } });
  },
  clearAuth: () => set({ auth: null }),
}));

export default useAuthStore;
