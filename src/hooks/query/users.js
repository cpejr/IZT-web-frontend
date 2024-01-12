import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  verifyEmail,
  forgotPassword,
  redefinePassword,
  updateSoftwareAccess,
  getUsersWithSoftwareAccess,
  deleteSoftwareAccess,
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

export function useGetUsersWithSoftwareAccess({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['users-with-software-access', filters],
    queryFn: () => getUsersWithSoftwareAccess(filters),
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

export function useUpdateSoftwareAccess({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateSoftwareAccess,
    onSuccess,
    onError,
  });
}

export function useDeleteSoftwareAccess({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteSoftwareAccess,
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
