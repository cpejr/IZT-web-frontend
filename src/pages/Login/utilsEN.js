import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const loginValidationSchemaEN = z.object({
  email: z
    .string()
    .nonempty('Please enter an email')
    .email('Enter an email in the format email@email.com')
    .trim(),
  password: z
    .string()
    .nonempty('Please enter a password')
    .min(6, 'Password must be at least 6 characters long')
    .max(16, 'Password cannot be longer than 16 characters'),
});

// Error Handling
const loginErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'Incorrect email or password',
  [ERROR_CODES.FORBIDDEN]:
    'Your account has not been activated yet. Please check your email',
};
const loginDefaultErrorMessageEN =
  'Error while attempting to log in. Please try again later';

export function buildLoginErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return loginErrorMessagesEN[code] || loginDefaultErrorMessageEN;
}
