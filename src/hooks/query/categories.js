/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/api';

export function useGetCategories({
  filters,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['categories', filters],
    queryFn: () => getCategories(filters),
    onSucess,
    onError,
  });
}
