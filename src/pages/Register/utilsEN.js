import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const registerValidationSchemaEN = z
  .object({
    company: z.string().nonempty('Please enter the company name'),
    name: z
      .string()
      .nonempty('Please provide a name')
      .min(3, 'Name cannot have less than 3 characters')
      .max(40, 'Name cannot have more than 40 characters'),
    surname: z
      .string()
      .nonempty('Please provide a surname')
      .min(3, 'Surname cannot have less than 2 characters')
      .max(40, 'Surname cannot have more than 40 characters'),
    role: z.string().nonempty('Please provide a role'),
    country: z
      .string({
        errorMap: () => ({
          message: 'Please provide a country',
        }),
      })
      .transform((value) => JSON.parse(value).name),
    state: z
      .string()
      .nonempty('Please provide a state')
      .transform((value) => JSON.parse(value).name),
    city: z
      .string()
      .nonempty('Please provide a city')
      .transform((value) => JSON.parse(value).name),
    address: z
      .string()
      .nonempty('Please provide an address')
      .min(3, 'User address must be at least 3 characters')
      .max(50, 'User address must be a maximum of 50 characters'),
    email: z
      .string()
      .nonempty('Please enter your email')
      .email('Enter an email in the format email@email.com')
      .trim(),
    password: z
      .string()
      .nonempty('Please enter a password')
      .min(6, 'Password cannot have less than 6 characters')
      .max(16, 'Password cannot have more than 16 characters'),

    confirmPassword: z.string().nonempty('Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

// Error Handling
const registerErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.CONFLICT]: 'The email is already in use',
};
const registerDefaultErrorMessage =
  'Error while registering. Please try again later';

export function buildRegisterErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return registerErrorMessages[code] || registerDefaultErrorMessage;
}
