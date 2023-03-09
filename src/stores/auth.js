import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

const useAuthStore = create((set) => ({
  auth: {},
  setAuth: (accessToken) => {
    const { user } = jwtDecode(accessToken);

    set(({ oldAuth }) => ({
      auth: {
        ...oldAuth,
        accessToken,
        user,
      },
    }));
  },
  clearAuth: () => set({ auth: {} }),
}));

export default useAuthStore;
