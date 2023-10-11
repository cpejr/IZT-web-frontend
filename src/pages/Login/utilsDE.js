import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const loginValidationSchemaDE = z.object({
  email: z
    .string()
    .nonempty('Bitte geben Sie eine E-Mail-Adresse ein')
    .email('Geben Sie eine E-Mail-Adresse im Format email@email.com ein')
    .trim(),
  password: z
    .string()
    .nonempty('Bitte geben Sie ein Passwort ein')
    .min(6, 'Das Passwort darf nicht weniger als 6 Zeichen haben')
    .max(16, 'Das Passwort darf nicht mehr als 16 Zeichen haben'),
});

// Error Handling
const loginErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Falsche E-Mail oder Passwort',
  [ERROR_CODES.FORBIDDEN]:
    'Ihr Konto wurde noch nicht aktiviert. Bitte überprüfen Sie Ihre E-Mail',
};
const loginDefaultErrorMessageDE =
  'Fehler beim Anmelden. Bitte versuchen Sie es später erneut';

export function buildLoginErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return loginErrorMessagesDE[code] || loginDefaultErrorMessageDE;
}
