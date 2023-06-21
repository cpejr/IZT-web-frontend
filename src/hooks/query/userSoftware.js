import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getSoftwareAccess,
  updateSoftwareAccess,
  deleteSoftwareAccess,
} from '../../services/api/endpoints';

export function useGetSoftwareAccess({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['users', filters],
    queryFn: () => getSoftwareAccess(filters),
    onSuccess,
    onError,
  });
}

export function useCreateSoftwareAccess({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateSoftwareAccess,
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
