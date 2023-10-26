import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const updateAuthorizeAccessValidationSchemaDE = z.object({
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Bitte geben Sie ein Datum ein',
    }),
  }),
});

// Toast Success
export const toastSuccessMessageDE =
  'Berechtigung für den Zugriff auf den Kurs erfolgreich aktualisiert!';

// Error Handling
const updateUserCourseErrorMessagesDE = {
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.CONFLICT]: 'Der Benutzer hat bereits Zugriff auf den Kurs',
};

const updateUserCourseDefaultErrorMessageDE =
  'Fehler bei der Autorisierung des Kurszugriffs für den Benutzer. Bitte versuchen Sie es später erneut';

export function buildUpdateUserCourseErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateUserCourseErrorMessagesDE[code] ||
    updateUserCourseDefaultErrorMessageDE
  );
}
