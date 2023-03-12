import { useMutation, useQuery } from '@tanstack/react-query';
import { login, logout, refresh } from '../../services/api';

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
    localStorage.removeItem('isLoggedIn'); // In case the user did not logout and the cookie expire
    console.error(err);
  },
} = {}) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return useQuery({
    queryKey: ['refresh'],
    queryFn: refresh,
    onError,
    onSuccess,
    enabled: !!isLoggedIn,
  });
}
