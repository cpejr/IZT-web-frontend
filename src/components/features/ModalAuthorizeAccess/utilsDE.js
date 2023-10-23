import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalAuthorizeAccessValidationSchemaDE = z.object({
  userId: z.string({ required_error: 'Bitte wählen Sie eine E-Mail aus' }), // Needs to be required_error because it is for a select component
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Bitte geben Sie ein Datum ein',
    }),
  }),
});

// Get users for select
const getUsersErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const getUsersIdDefaultErrorMessageDE =
  'Beim Abrufen von Benutzern ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';
export function buildGetUsersErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return getUsersErrorMessagesDE[code] || getUsersIdDefaultErrorMessageDE;
}

// toast success

export const toastSuccessMessageDE = 'Erfolgreiche Autorisierung zum Kurs!';

// Create user course request
const createUserCourseErrorMessagesDE = {
  [ERROR_CODES.NOT_FOUND]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.FORBIDDEN]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.CONFLICT]: 'Der Benutzer hat bereits Zugriff auf den Kurs',
};
const createUserCourseDefaultErrorMessageDE =
  'Fehler beim Autorisieren des Kurszugriffs für den Benutzer. Bitte versuchen Sie es später erneut';

export function buildCreateUserCourseErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserCourseErrorMessagesDE[code] ||
    createUserCourseDefaultErrorMessageDE
  );
}
