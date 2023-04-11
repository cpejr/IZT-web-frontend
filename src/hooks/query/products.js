import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getProducts,
  getProductById,
  createProduct,
  searchProductByName,
  // updateProducts,
  // deleteProducts,
  sendProductBudget,
} from '../../services/api';

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

export function useGetProductById({
  _id,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['product', _id],
    queryFn: () => getProductById(_id),
    onSucess,
    onError,
  });
}

export function useSearchProductByName({
  name,
  category,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['products', 'searchProductByName', { name, category }],
    queryFn: () => searchProductByName({ name, category }),
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
