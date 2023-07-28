import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getStabilityAnalysis,
  deleteStabilityAnalysis,
  getNormalStabilityAnalysis,
} from '../../services/api/endpoints';

export function useGetStabilityAnalysis({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['stability-analysis', filters],
    queryFn: () => getStabilityAnalysis(filters),
    onSuccess,
    onError,
  });
}
export function useGetNormalStabilityAnalysis({
  user,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['stability-analysis', user],
    queryFn: () => getNormalStabilityAnalysis(user),
    onSuccess,
    onError,
  });
}

export function useDeleteStabilityAnalysis({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteStabilityAnalysis,
    onSuccess,
    onError,
  });
}
