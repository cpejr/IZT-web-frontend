import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getProducts,
  createProduct,
  // deleteProducts,
  // updateProducts,
} from '../../services/api';

// eslint-disable-next-line import/prefer-default-export
export function useGetProducts({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters),
    onSuccess,
    onError,
  });
}

export function useCreateProduct({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createProduct,
    onSuccess,
    onError,
  });
}

// export function useUpdateProducts({
//   onSuccess = () => {},
//   onError = (err) => console.log(err),
// } = {}) {
//   return useMutation({
//     mutationFn: updateProducts,
//     onSuccess,
//     onError,
//   });
// }

// export function useDeleteProducts({
//   onSuccess = () => {},
//   onError = (err) => console.log(err),
// } = {}) {
//   return useMutation({
//     mutationFn: deleteProducts,
//     onSuccess,
//     onError,
//   });
// }
