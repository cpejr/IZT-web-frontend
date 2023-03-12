import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  setAuth: (accessToken) => {
    const { user } = jwtDecode(accessToken);

    set({ accessToken, user });
  },
  clearAuth: () => set({ accessToken: null, user: null }),
}));

export default useAuthStore;
