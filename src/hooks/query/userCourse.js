import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getUserCourses,
  updateUserCourse,
  deleteUserCourse,
  createUserCourse,
} from '../../services/api';

export function useGetUserCourses({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ['user-courses', filters],
    queryFn: () => getUserCourses(filters),
    onSuccess,
    onError,
  });
}

export function useCreateUserCourse({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUserCourse,
    onSuccess,
    onError,
  });
}

export function useUpdateUserCourse({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateUserCourse,
    onSuccess,
    onError,
  });
}

export function useDeleteUserCourse({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUserCourse,
    onSuccess,
    onError,
  });
}
