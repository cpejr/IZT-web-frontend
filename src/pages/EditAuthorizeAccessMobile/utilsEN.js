import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const updateAuthorizeAccessValidationSchemaEN = z.object({
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Please enter a date',
    }),
  }),
});

// Toast Success

export const toastSuccessMessageEN =
  'Course access authorization updated successfully!';
// Error Handling
const updateUserCourseErrorMessagesEN = {
  [ERROR_CODES.UNAUTHORIZED]: 'User not authenticated',
  [ERROR_CODES.CONFLICT]: 'The user already has access to the course',
};
const updateUserCourseDefaultErrorMessageEN =
  'Error authorizing course access for the user. Please try again later';

export function buildUpdateUserCourseErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateUserCourseErrorMessagesEN[code] ||
    updateUserCourseDefaultErrorMessageEN
  );
}
