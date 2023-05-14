import { useMutation, useQuery } from '@tanstack/react-query';

import { login, logout, refresh } from '../../services/api';
import useAuthStore from '../../stores/auth';
import { getIsLoggedIn, removeIsLoggedIn } from '../../utils/isLoggedIn';

export function useLogin({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: login,
    onError,
    onSuccess,
  });
}

export function useLogout({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: logout,
    onError,
    onSuccess,
  });
}

export function useRefreshToken({
  onSuccess = () => {},
  onError = (err) => {
    removeIsLoggedIn(); // In case the user did not logout and the cookie expire
    console.error(err);
  },
} = {}) {
  const auth = useAuthStore((state) => state.auth);

  return useQuery({
    queryKey: ['refresh'],
    queryFn: refresh,
    onError,
    onSuccess,
    enabled: !!getIsLoggedIn() && !auth,
  });
}
