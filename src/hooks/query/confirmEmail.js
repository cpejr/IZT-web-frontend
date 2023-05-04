/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';

import { verifyEmail } from '../../services/api';

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
