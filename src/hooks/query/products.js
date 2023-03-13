/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/api';

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
