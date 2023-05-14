import { useQuery } from '@tanstack/react-query';

import { getCourseById } from '../../services/api/endpoints';

// eslint-disable-next-line import/prefer-default-export
export function useGetCourseById({
  _id,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['course', _id],
    queryFn: () => getCourseById(_id),
    onSucess,
    onError,
  });
}
