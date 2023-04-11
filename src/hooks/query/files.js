import { useQuery } from '@tanstack/react-query';

import { getFiles } from '../../services/api';

// eslint-disable-next-line import/prefer-default-export
export function useGetFiles({
  fileIds,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['files', fileIds],
    queryFn: () => getFiles(fileIds),
    onSuccess,
    onError,
  });
}
