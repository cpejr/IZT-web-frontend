import jwtDecode from 'jwt-decode';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  auth: null,
  setAuth: (accessToken) => {
    const {
      user,
      iat: issuedAtTimeStamp,
      exp: expireAtTimeStamp,
    } = jwtDecode(accessToken);

    const secureTime = 10; // Seconds before the expire in, for secure refresh token request
    const expireIn = expireAtTimeStamp - issuedAtTimeStamp - secureTime; // Seconds

    set({ auth: { accessToken, user, expireIn } });
  },
  setUser: (user) => set((state) => ({ auth: { ...state?.auth, user } })),
  clearAuth: () => set({ auth: null }),
}));

export default useAuthStore;
