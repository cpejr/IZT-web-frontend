import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const updateUserSchemaDE = z.object({
  company: z.string().nonempty('Bitte geben Sie den Firmennamen ein'),
  name: z
    .string()
    .nonempty('Geben Sie einen Namen ein')
    .min(3, 'Der Name darf nicht weniger als 3 Zeichen haben')
    .max(40, 'Der Name darf nicht mehr als 40 Zeichen haben'),
  surname: z
    .string()
    .nonempty('Geben Sie einen Nachnamen ein')
    .min(2, 'Der Nachname darf nicht weniger als 2 Zeichen haben')
    .max(40, 'Der Nachname darf nicht mehr als 40 Zeichen haben'),
  role: z
    .string()
    .nonempty('Geben Sie eine Rolle ein')
    .min(3, 'Die Rolle darf nicht weniger als 3 Zeichen haben'),
  country: z
    .string()
    .nonempty('Geben Sie ein Land ein')
    .min(3, 'Das Land muss mindestens 3 Zeichen haben')
    .max(90, 'Das Land darf maximal 90 Zeichen haben'),
  state: z
    .string()
    .nonempty('Geben Sie einen Bundesstaat ein')
    .min(3, 'Der Bundesstaat muss mindestens 3 Zeichen haben')
    .max(90, 'Der Bundesstaat darf maximal 30 Zeichen haben'),
  city: z
    .string()
    .nonempty('Geben Sie eine Stadt ein')
    .min(3, 'Die Stadt muss mindestens 3 Zeichen haben')
    .max(90, 'Die Stadt darf maximal 30 Zeichen haben'),

  address: z
    .string()
    .nonempty('Geben Sie eine Adresse ein')
    .min(3, 'Die Adresse muss mindestens 3 Zeichen haben')
    .max(50, 'Die Adresse darf maximal 50 Zeichen haben'),
});

// Error Handling
const updateUserErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.NOT_FOUND]: 'Benutzer nicht gefunden',
};
const updateUserDefaultErrorMessageDE =
  'Fehler beim Bearbeiten der Benutzerdaten. Bitte versuchen Sie es später erneut';

export function buildUpdateUserErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return updateUserErrorMessagesDE[code] || updateUserDefaultErrorMessageDE;
}
