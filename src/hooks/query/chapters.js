import { useQuery } from '@tanstack/react-query';

import { getVideo } from '../../services/api/endpoints';

/* eslint-disable import/prefer-default-export */
export function useGetVideo({
  videoId,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['video', videoId],
    queryFn: () => getVideo(videoId),
    onSuccess,
    onError,
    enabled: !!videoId,
  });
}
