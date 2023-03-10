import { create } from 'zustand';
import jwtDecode from 'jwt-decode';

const useAuthStore = create((set) => ({
  auth: {},
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
  clearAuth: () => set({ auth: {} }),
}));

export default useAuthStore;
