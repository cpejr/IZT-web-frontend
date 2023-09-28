import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Formularvalidierung
export const registerValidationSchemaDE = z
  .object({
    company: z.string().nonempty('Bitte geben Sie den Firmennamen ein'),
    name: z
      .string()
      .nonempty('Bitte geben Sie einen Namen ein')
      .min(3, 'Name darf nicht weniger als 3 Zeichen haben')
      .max(40, 'Name darf nicht mehr als 40 Zeichen haben'),
    surname: z
      .string()
      .nonempty('Bitte geben Sie einen Nachnamen ein')
      .min(3, 'Nachname darf nicht weniger als 2 Zeichen haben')
      .max(40, 'Nachname darf nicht mehr als 40 Zeichen haben'),
    role: z.string().nonempty('Bitte geben Sie eine Rolle ein'),
    country: z
      .string({
        errorMap: () => ({
          message: 'Bitte geben Sie ein Land ein',
        }),
      })
      .transform((value) => JSON.parse(value).name),
    state: z
      .string()
      .nonempty('Bitte geben Sie einen Bundesstaat ein')
      .transform((value) => JSON.parse(value).name),
    city: z
      .string()
      .nonempty('Bitte geben Sie eine Stadt ein')
      .transform((value) => JSON.parse(value).name),
    address: z
      .string()
      .nonempty('Bitte geben Sie eine Adresse ein')
      .min(3, 'Die Benutzeradresse muss mindestens 3 Zeichen lang sein')
      .max(50, 'Die Benutzeradresse darf maximal 50 Zeichen haben'),
    email: z
      .string()
      .nonempty('Bitte geben Sie Ihre E-Mail-Adresse ein')
      .email('Geben Sie eine E-Mail-Adresse im Format email@email.com ein')
      .trim(),
    password: z
      .string()
      .nonempty('Bitte geben Sie ein Passwort ein')
      .min(6, 'Passwort darf nicht weniger als 6 Zeichen haben')
      .max(16, 'Passwort darf nicht mehr als 16 Zeichen haben'),

    confirmPassword: z.string().nonempty('Bitte bestätigen Sie Ihr Passwort'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwörter stimmen nicht überein',
  });

// Fehlerbehandlung
const registerErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.CONFLICT]: 'Die E-Mail-Adresse wird bereits verwendet',
};
const registerDefaultErrorMessage =
  'Fehler bei der Registrierung. Bitte versuchen Sie es später erneut';

export function buildRegisterErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return registerErrorMessages[code] || registerDefaultErrorMessage;
}
