import jwtDecode from 'jwt-decode';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  auth: null,
  setAuth: (accessToken) => {
    const {
      user,
      iat: issuedAtTimestamp,
      exp: expireAtTimestamp,
    } = jwtDecode(accessToken);

    const secureTime = 10; // Seconds before the expire in, for secure refresh token request
    const expireIn = expireAtTimestamp - issuedAtTimestamp - secureTime; // Seconds

    set({ auth: { accessToken, user, expireIn } });
  },
  setUser: (user) => set((state) => ({ auth: { ...state?.auth, user } })),
  clearAuth: () => set({ auth: null }),
}));

export default useAuthStore;
