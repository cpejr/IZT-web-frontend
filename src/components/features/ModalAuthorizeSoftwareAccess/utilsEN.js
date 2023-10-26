import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalAuthorizeAccessValidationSchemaEN = z.object({
  userId: z.string({ required_error: 'Please select an email' }), // Needs to be required_error because it is for a select component
  softwareAccess: z.coerce.date({
    errorMap: () => ({
      message: 'Please enter a date',
    }),
  }),
});

// Get users for select
const getUsersErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const getUsersIdDefaultErrorMessageEN =
  'An error occurred while listing users. Please try again later';
export function buildGetUsersErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return getUsersErrorMessagesEN[code] || getUsersIdDefaultErrorMessageEN;
}

// toast success

export const toastSuccessMessageEN =
  'Authorization to access the software granted successfully!';

// Create user softwareAccess request
const createUserSoftwareAccessErrorMessagesEN = {
  [ERROR_CODES.NOT_FOUND]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'User not authenticated',
  [ERROR_CODES.FORBIDDEN]: 'User not authorized',
  [ERROR_CODES.CONFLICT]: 'The user already has access to the software',
};
const createUserSoftwareAccessDefaultErrorMessageEN =
  'Error authorizing software access for the user. Please try again later';

export function buildCreateUserSoftwareAccessErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserSoftwareAccessErrorMessagesEN[code] ||
    createUserSoftwareAccessDefaultErrorMessageEN
  );
}
