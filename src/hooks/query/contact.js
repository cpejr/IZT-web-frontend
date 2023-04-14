/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';

import { sendFormContact } from '../../services/api';

export function useSendFormContact({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: sendFormContact,
    onError,
    onSuccess,
  });
}
