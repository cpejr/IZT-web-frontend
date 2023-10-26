import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const updateCategoryValidationSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Bitte geben Sie den Kategorienamen ein')
    .min(3, 'Der Kategorienname muss mindestens 3 Zeichen haben')
    .max(40, 'Der Kategorienname darf maximal 40 Zeichen haben'),
});

// Error Handling
const updateCategoryErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.CONFLICT]: 'Kategorie bereits in der Datenbank vorhanden',
};
const updateCategoryDefaultErrorMessageDE =
  'Fehler bei der Kategorieerstellung. Bitte versuchen Sie es später erneut';

export function buildUpdateCategoryErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateCategoryErrorMessagesDE[code] || updateCategoryDefaultErrorMessageDE
  );
}
