import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// eslint-disable-next-line import/prefer-default-export
export const formsValidationSchemaDE = z.object({
  company: z.string().nonempty('Bitte geben Sie den Firmennamen ein'),
  representative: z
    .string()
    .nonempty('Bitte geben Sie den Namen des Vertreters ein'),
  email: z
    .string()
    .nonempty('Bitte geben Sie die E-Mail-Adresse ein')
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .trim(),
  telephone: z
    .string()
    .nonempty('Bitte geben Sie die Telefonnummer ein')
    .transform((value) => value.replace(/[\s()-]*/g, '')),
  message: z
    .string()
    .nonempty('Bitte geben Sie eine Nachricht ein')
    .min(5, 'Die Nachricht muss mindestens 5 Zeichen enthalten')
    .max(1500, 'Die Nachricht darf maximal 1500 Zeichen enthalten'),
});

const formContactErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const defaultFormContactErrorMessage =
  'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut';

export function buildFormContactErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return formContactErrorMessages[code] || defaultFormContactErrorMessage;
}
