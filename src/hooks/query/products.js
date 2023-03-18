import { useMutation, useQuery } from '@tanstack/react-query';
import { getProducts, sendProductBudget } from '../../services/api';

export function useGetProducts({
  filters,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters),
    onSucess,
    onError,
  });
}

export function useSendProductBudget({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: sendProductBudget,
    onSuccess,
    onError,
  });
}
