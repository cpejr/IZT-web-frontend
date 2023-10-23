import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Error Handling

const createUserSoftwareAccessDefaultErrorMessageEN =
  'An error occurred while listing software authorizations. Please try again later';

// eslint-disable-next-line import/prefer-default-export
const createUserSoftwareAccessErrorMessagesEN = {
  [ERROR_CODES.NOT_FOUND]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'User not authenticated',
  [ERROR_CODES.FORBIDDEN]: 'User not authorized',
  [ERROR_CODES.CONFLICT]: 'The user already has access to the software',
};
export function buildCreateUserSoftwareAccessErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserSoftwareAccessErrorMessagesEN[code] ||
    createUserSoftwareAccessDefaultErrorMessageEN
  );
}

export const authorizeAccessValidationSchemaEN = z.object({
  userId: z.string({ required_error: 'Please select an email' }).trim(),
  softwareAccess: z.coerce.date({
    errorMap: () => ({
      message: 'Please enter a date',
    }),
  }),
});

// Toast Success

export const toastSuccessMessageEN =
  'Authorization to the software granted successfully!';
