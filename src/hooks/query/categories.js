import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getCategories,
  createCategory,
  searchByNameCategories,
  // deleteProducts,
  // updateProducts,
} from '../../services/api';

// eslint-disable-next-line import/prefer-default-export
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

export function useSearchByNameCategories({
  name,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['categories', 'searchByName', name],
    queryFn: () => searchByNameCategories(name),
    onSucess,
    onError,
  });
}

export function useCreateCategory({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createCategory,
    onSucess,
    onError,
  });
}
