import { useMutation } from '@tanstack/react-query';

import {
  updateUserCourse,
  deleteUserCourse,
  createUserCourse,
} from '../../services/api';

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
