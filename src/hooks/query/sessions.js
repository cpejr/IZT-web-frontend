import { useMutation, useQuery } from '@tanstack/react-query';
import { login, logout, refresh } from '../../services/api';
import useAuthStore from '../../stores/auth';

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
  onError = (err) => console.error(err),
} = {}) {
  const { auth } = useAuthStore();
  const isLoggedIn = !!localStorage.getItem('isLoggedIn');

  return useQuery({
    queryKey: ['refresh'],
    queryFn: refresh,
    onError,
    onSuccess,
    enabled: isLoggedIn && !auth?.accessToken,
  });
}
