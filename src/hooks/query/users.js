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

export function useCreateUser({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUser,
    onSucess,
    onError,
  });
}

export function useUpdateUser({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateUser,
    onSucess,
    onError,
  });
}

export function useDeleteUser({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSucess,
    onError,
  });
}
