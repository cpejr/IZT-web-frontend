import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
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

export function UseCreateUser({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUser,
    onSuccess,
    onError,
  });
}

export function UseUpdateUser({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSuccess,
    onError,
  });
}

export function UseDeleteUser({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
