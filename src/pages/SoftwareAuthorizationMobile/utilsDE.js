import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Fehlerbehandlung

const createUserSoftwareAccessDefaultErrorMessageDE =
  'Beim Auflisten von Software-Berechtigungen ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';

// eslint-disable-next-line import/prefer-default-export
const createUserSoftwareAccessErrorMessagesDE = {
  [ERROR_CODES.NOT_FOUND]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.FORBIDDEN]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.CONFLICT]: 'Der Benutzer hat bereits Zugriff auf die Software',
};
export function buildCreateUserSoftwareAccessErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserSoftwareAccessErrorMessagesDE[code] ||
    createUserSoftwareAccessDefaultErrorMessageDE
  );
}

export const authorizeAccessValidationSchemaDE = z.object({
  userId: z
    .string({ required_error: 'Bitte wählen Sie eine E-Mail aus' })
    .trim(),
  softwareAccess: z.coerce.date({
    errorMap: () => ({
      message: 'Bitte geben Sie ein Datum ein',
    }),
  }),
});

// Toast Erfolg

export const toastSuccessMessageDE =
  'Berechtigung zur Software erfolgreich erteilt!';
