import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const updateAuthorizeAccessValidationSchemaDE = z.object({
  softwareAccess: z.coerce.date({
    errorMap: () => ({
      message: 'Bitte geben Sie ein Datum ein',
    }),
  }),
});

// Toast Success

export const toastSuccessMessageDE =
  'Softwarezugriffsberechtigung erfolgreich aktualisiert!';

// Error Handling
const updateSoftwareAccessErrorMessagesDE = {
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.CONFLICT]: 'Der Benutzer hat bereits Zugriff auf die Software',
};
const updateSoftwareAccessDefaultErrorMessageDE =
  'Fehler bei der Autorisierung des Softwarezugriffs für den Benutzer. Bitte versuchen Sie es später erneut';

export function buildUpdateSoftwareAccessErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateSoftwareAccessErrorMessagesDE[code] ||
    updateSoftwareAccessDefaultErrorMessageDE
  );
}
