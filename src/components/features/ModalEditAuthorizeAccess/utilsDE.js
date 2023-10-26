import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalUpdateAuthorizeAccessValidationSchemaDE = z.object({
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Bitte geben Sie ein Datum ein',
    }),
  }),
});

// Error Handling
const updateUserCourseErrorMessagesDE = {
  [ERROR_CODES.UNAUTHORIZED]: 'Nicht authentifizierter Benutzer',
  [ERROR_CODES.CONFLICT]: 'Der Benutzer hat bereits Zugriff auf den Kurs',
};
const updateUserCourseDefaultErrorMessageDE =
  'Fehler bei der Autorisierung des Zugriffs auf den Kurs für den Benutzer. Bitte versuchen Sie es später erneut';

export function buildUpdateUserCourseErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateUserCourseErrorMessagesDE[code] ||
    updateUserCourseDefaultErrorMessageDE
  );
}
