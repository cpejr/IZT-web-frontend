import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const createCategoryValidationSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Bitte geben Sie den Kategorienamen ein')
    .min(3, 'Der Kategorienamen muss mindestens 3 Zeichen lang sein')
    .max(40, 'Der Kategorienamen darf höchstens 40 Zeichen lang sein'),
  description: z.string().optional(),
});

// Toast Success
export const toastSuccessMessageDE = 'Kategorie erfolgreich erstellt!';

// Error Handling
const createCategoryErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.CONFLICT]: 'Kategorie existiert bereits in der Datenbank',
};
const createCategoryDefaultErrorMessageDE =
  'Beim Erstellen der Kategorie ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';

export function buildCreateCategoryErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createCategoryErrorMessagesDE[code] || createCategoryDefaultErrorMessageDE
  );
}
