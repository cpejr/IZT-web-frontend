import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from '../../services/api';

export function useGetUsers({
  filters,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
    onSucess,
    onError,
  });
}

export function UseCreateUser({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUser,
    onSucess,
    onError,
  });
}

export function UseUpdateUser({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSucess,
    onError,
  });
}

export function UseDeleteUser({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSucess,
    onError,
  });
}
