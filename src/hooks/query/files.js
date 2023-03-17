import { useQuery } from '@tanstack/react-query';
import { getFiles } from '../../services/api';

// eslint-disable-next-line import/prefer-default-export
export function useGetFiles({
  filters,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['files', filters],
    queryFn: () => getFiles(filters),
    onSucess,
    onError,
  });
}
