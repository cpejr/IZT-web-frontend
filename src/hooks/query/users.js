import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getEmailUser,
} from '../../services/api';

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
export function useGetEmailUser({
  email,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['users', { email }],
    queryFn: () => getEmailUser(email),
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
