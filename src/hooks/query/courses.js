import { useQuery } from '@tanstack/react-query';

import { getCourseById } from '../../services/api/endpoints';

// eslint-disable-next-line import/prefer-default-export
export function useGetUserCourse({
  user,
  course,
  userHasAccess,
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['course', { user, course }],
    queryFn: () => getCourseById({ user, course }),
    onSucess,
    onError,
    enabled: userHasAccess,
  });
}
