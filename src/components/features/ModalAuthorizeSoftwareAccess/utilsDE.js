import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalAuthorizeAccessValidationSchemaDE = z.object({
  userId: z.string({
    required_error: 'Bitte wählen Sie eine E-Mail-Adresse aus',
  }),
  softwareAccess: z.coerce.date({
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
  'Beim Auflisten der Benutzer ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';
export function buildGetUsersErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return getUsersErrorMessagesDE[code] || getUsersIdDefaultErrorMessageDE;
}

// toast success

export const toastSuccessMessageDE =
  'Berechtigung zum Zugriff auf den Kurs erfolgreich erteilt!';

// Create user softwareAccess request
const createUserSoftwareAccessErrorMessagesDE = {
  [ERROR_CODES.NOT_FOUND]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.FORBIDDEN]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.CONFLICT]: 'Der Benutzer hat bereits Zugriff auf die Software',
};
const createUserSoftwareAccessDefaultErrorMessageDE =
  'Fehler beim Autorisieren des Softwarezugriffs für den Benutzer. Bitte versuchen Sie es später erneut';

export function buildCreateUserSoftwareAccessErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserSoftwareAccessErrorMessagesDE[code] ||
    createUserSoftwareAccessDefaultErrorMessageDE
  );
}
