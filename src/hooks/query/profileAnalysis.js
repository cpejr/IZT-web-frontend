import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getProfileAnalysis,
  deleteProfileAnalysis,
  getNormalProfileAnalysis,
  searchByNameProfileAnalysis,
} from '../../services/api/endpoints';

export function useGetProfileAnalysis({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['profile-analysis', filters],
    queryFn: () => getProfileAnalysis(filters),
    onSuccess,
    onError,
  });
}
export function useGetNormalProfileAnalysis({
  user,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['profile-analysis', user],
    queryFn: () => getNormalProfileAnalysis(user),
    onSuccess,
    onError,
  });
}

export function useDeleteProfileAnalysis({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteProfileAnalysis,
    onSuccess,
    onError,
  });
}

export function useSearchByNameProfileAnalysis({
  name,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['profile-analysis', 'searchByName', name],
    queryFn: () => searchByNameProfileAnalysis(name),
    onSuccess,
    onError,
  });
}
