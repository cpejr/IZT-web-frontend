import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const updateAuthorizeAccessValidationSchemaEN = z.object({
  softwareAccess: z.coerce.date({
    errorMap: () => ({
      message: 'Please enter a date',
    }),
  }),
});

// Toast Success

export const toastSuccessMessageEN =
  'Software access authorization updated successfully!';

// Error Handling
const updateSoftwareAccessErrorMessagesEN = {
  [ERROR_CODES.UNAUTHORIZED]: 'User not authenticated',
  [ERROR_CODES.CONFLICT]: 'The user already has access to the software',
};
const updateSoftwareAccessDefaultErrorMessageEN =
  'Error authorizing software access for the user. Please try again later';

export function buildUpdateSoftwareAccessErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateSoftwareAccessErrorMessagesEN[code] ||
    updateSoftwareAccessDefaultErrorMessageEN
  );
}
