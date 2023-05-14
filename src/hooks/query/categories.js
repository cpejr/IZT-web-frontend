import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getCategories,
  getCategoryById,
  searchByNameCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  // deleteProducts,
} from '../../services/api';

// eslint-disable-next-line import/prefer-default-export
export function useGetCategories({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['categories', filters],
    queryFn: () => getCategories(filters),
    onSuccess,
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

export function useSearchByNameCategories({
  name,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['categories', 'searchByName', name],
    queryFn: () => searchByNameCategories(name),
    onSuccess,
    onError,
  });
}

export function useCreateCategory({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createCategory,
    onSuccess,
    onError,
  });
}

export function useUpdateCategory({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateCategory,
    onSuccess,
    onError,
  });
}

export function useDeleteCategory({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess,
    onError,
  });
}
