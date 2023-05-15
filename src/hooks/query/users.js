import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  verifyEmail,
  forgotPassword,
  redefinePassword,
} from '../../services/api/endpoints';

export function useGetUsers({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
    onSuccess,
    onError,
  });
}

export function useForgotPassword({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess,
    onError,
  });
}

export function useRedefinePassword({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: redefinePassword,
    onSuccess,
    onError,
  });
}

export function useCreateUser({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUser,
    onSuccess,
    onError,
  });
}

export function useVerifyUser({
  token,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['verifyEmail'],
    queryFn: () => verifyEmail(token),
    onSuccess,
    onError,
  });
}

export function useUpdateUser({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSuccess,
    onError,
  });
}

export function useDeleteUser({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
