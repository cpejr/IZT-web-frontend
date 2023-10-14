import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getUserCoursesErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const getUserCoursesDefaultErrorMessageDE =
  'Beim Auflisten der Kursberechtigungen ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';

// eslint-disable-next-line import/prefer-default-export
export function buildGetUserCoursesErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getUserCoursesErrorMessagesDE[code] || getUserCoursesDefaultErrorMessageDE
  );
}
