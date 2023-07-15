import { useMutation } from '@tanstack/react-query';

import { calculateProfileAnalysis } from '../../services/api/endpoints';

// eslint-disable-next-line import/prefer-default-export
export function useCalculateProfileAnalysis({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: calculateProfileAnalysis,
    onSuccess,
    onError,
  });
}
