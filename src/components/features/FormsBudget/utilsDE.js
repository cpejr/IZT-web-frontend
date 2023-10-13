import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const budgetEmailSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Geben Sie Ihren vollständigen Namen ein')
    .min(3, 'Geben Sie einen Namen mit mindestens 3 Zeichen ein'),
  company: z.string().nonempty('Geben Sie den Firmennamen ein'),
  email: z
    .string()
    .nonempty('Geben Sie die E-Mail-Adresse ein')
    .email('Geben Sie eine gültige E-Mail-Adresse ein')
    .trim(),
  telephone: z
    .string()
    .nonempty('Geben Sie Ihre Telefonnummer ein')
    .transform((value) => value.replace(/[\s()-]*/g, '')), // Maskierungszeichen entfernen
  country: z
    .string({
      errorMap: () => ({
        // Erforderlich, da Land mit "undefined" beginnt
        message: 'Geben Sie ein Land ein',
      }),
    })
    .transform((value) => JSON.parse(value).name),
  state: z
    .string()
    .nonempty('Geben Sie einen Bundesstaat ein')
    .transform((value) => JSON.parse(value).name),
  city: z
    .string()
    .nonempty('Geben Sie eine Stadt ein')
    .transform((value) => JSON.parse(value).name),
  ZIPcode: z
    .string()
    .nonempty('Geben Sie Ihre Postleitzahl ein')
    .length(9, 'Geben Sie eine gültige Postleitzahl ein')
    .transform((value) => value.replace(/-/g, '')), // Maskierungszeichen entfernen
  address: z.string().nonempty('Geben Sie Ihre Adresse ein'),
});

// Error Handling
const budgetEmailErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Produkt nicht gefunden',
};
const budgetEmailDefaultErrorMessage =
  'Fehler beim Abrufen der Produktinformationen. Bitte versuchen Sie es später erneut';

export function buildBudgetEmailErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return budgetEmailErrorMessages[code] || budgetEmailDefaultErrorMessage;
}
