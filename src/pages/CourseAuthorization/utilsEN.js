import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getUserCoursesErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const getUserCoursesDefaultErrorMessageEN =
  'An error occurred while listing course authorizations. Please try again later';

// eslint-disable-next-line import/prefer-default-export
export function buildGetUserCoursesErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getUserCoursesErrorMessagesEN[code] || getUserCoursesDefaultErrorMessageEN
  );
}
