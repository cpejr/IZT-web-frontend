import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const updateUserSchemaEN = z.object({
  company: z.string().nonempty('Please enter the company name'),
  name: z
    .string()
    .nonempty('Enter a name')
    .min(3, 'Name cannot be less than 3 characters')
    .max(40, 'Name cannot exceed 40 characters'),
  surname: z
    .string()
    .nonempty('Enter a surname')
    .min(2, 'Surname cannot be less than 2 characters')
    .max(40, 'Surname cannot exceed 40 characters'),
  role: z
    .string()
    .nonempty('Enter a role')
    .min(3, 'Role cannot be less than 3 characters'),
  country: z
    .string()
    .nonempty('Enter a country')
    .min(3, 'User country must be at least 3 characters')
    .max(90, 'User country must be a maximum of 90 characters'),
  state: z
    .string()
    .nonempty('Enter a state')
    .min(3, 'User state must be at least 3 characters')
    .max(90, 'User state must be a maximum of 90 characters'),
  city: z
    .string()
    .nonempty('Enter a city')
    .min(3, 'User city must be at least 3 characters')
    .max(90, 'User city must be a maximum of 90 characters'),

  address: z
    .string()
    .nonempty('Enter an address')
    .min(3, 'User address must be at least 3 characters')
    .max(50, 'User address must be a maximum of 50 characters'),
});

// Error Handling
const updateUserErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'User not authorized',
  [ERROR_CODES.NOT_FOUND]: 'User not found',
};
const updateUserDefaultErrorMessageEN =
  'Error updating user data. Please try again later';

export function buildUpdateUserErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return updateUserErrorMessagesEN[code] || updateUserDefaultErrorMessageEN;
}
