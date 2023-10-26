import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalUpdateAuthorizeAccessValidationSchemaEN = z.object({
  softwareAccess: z.coerce.date({
    errorMap: () => ({
      message: 'Please enter a date',
    }),
  }),
});

// Error Handling
const updateSoftwareAccessErrorMessagesEN = {
  [ERROR_CODES.UNAUTHORIZED]: 'Unauthorized user',
  [ERROR_CODES.CONFLICT]: 'The user already has access to the software',
};
const updateSoftwareAccessDefaultErrorMessageEN =
  'Error authorizing user access to the software. Please try again later';

export function buildUpdateSoftwareAccessErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateSoftwareAccessErrorMessagesEN[code] ||
    updateSoftwareAccessDefaultErrorMessageEN
  );
}
