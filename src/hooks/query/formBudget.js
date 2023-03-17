/* eslint-disable import/prefer-default-export */
import { useMutation } from '@tanstack/react-query';
import { createBudgetEmail } from '../../services/api';

export function useCreateBudgetEmail({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createBudgetEmail,
    onSuccess,
    onError,
  });
}
