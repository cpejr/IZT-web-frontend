import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

const useAuthStore = create((set) => ({
  auth: {},
  setAuth: (accessToken) => {
    const { userId, isAdmin } = jwtDecode(accessToken);

    set(({ oldAuth }) => ({
      auth: {
        ...oldAuth,
        accessToken,
        userId,
        isAdmin,
      },
    }));
  },
  clearAuth: () => set({ auth: {} }),
}));

export default useAuthStore;
