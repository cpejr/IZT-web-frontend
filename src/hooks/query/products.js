import {
  // useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  getProducts,
  // createProducts,
  // deleteProducts,
  // updateProducts,
} from '../../services/api';

// eslint-disable-next-line import/prefer-default-export
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

// export function useCreateProducts({
//   onSucess = () => {},
//   onError = (err) => console.log(err),
// } = {}) {
//   return useMutation({
//     mutationFn: createProducts,
//     onSucess,
//     onError,
//   });
// }

// export function useUpdateProducts({
//   onSucess = () => {},
//   onError = (err) => console.log(err),
// } = {}) {
//   return useMutation({
//     mutationFn: updateProducts,
//     onSucess,
//     onError,
//   });
// }

// export function useDeleteProducts({
//   onSucess = () => {},
//   onError = (err) => console.log(err),
// } = {}) {
//   return useMutation({
//     mutationFn: deleteProducts,
//     onSucess,
//     onError,
//   });
// }
