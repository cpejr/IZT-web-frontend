import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const createCategoryValidationSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Bitte geben Sie den Kategorienamen ein')
    .min(3, 'Kategorienname muss mindestens 3 Zeichen haben')
    .max(40, 'Kategorienname darf maximal 40 Zeichen haben'),
  description: z.string().optional(),
});

// Error Handling
const createCategoryErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.CONFLICT]: 'Kategorie existiert bereits in der Datenbank',
};
const createCategoryDefaultErrorMessageDE =
  'Ein Fehler ist beim Erstellen der Kategorie aufgetreten. Bitte versuchen Sie es später erneut';

export function buildCreateCategoryErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createCategoryErrorMessagesDE[code] || createCategoryDefaultErrorMessageDE
  );
}
