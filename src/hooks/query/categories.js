import { useQuery } from '@tanstack/react-query';
import { getCategories, getCategoryById } from '../../services/api';

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

export function useGetCategoryById({
  _id,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['category', _id],
    queryFn: () => getCategoryById(_id),
    onSucess,
    onError,
  });
}
