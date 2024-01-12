import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalUpdateAuthorizeAccessValidationSchemaEN = z.object({
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Please enter a date',
    }),
  }),
});

// Error Handling
const updateUserCourseErrorMessagesEN = {
  [ERROR_CODES.UNAUTHORIZED]: 'Unauthorized user',
  [ERROR_CODES.CONFLICT]: 'The user already has access to the course',
};
const updateUserCourseDefaultErrorMessageEN =
  'Error authorizing user access to the course. Please try again later';

export function buildUpdateUserCourseErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateUserCourseErrorMessagesEN[code] ||
    updateUserCourseDefaultErrorMessageEN
  );
}
