import { useMutation } from '@tanstack/react-query';

import { saveVideoProgress } from '../../services/api/endpoints';

// eslint-disable-next-line import/prefer-default-export
export function useSaveProgress({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: saveVideoProgress,
    onError,
    onSuccess,
  });
}
