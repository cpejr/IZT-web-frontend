import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const updateCategoryValidationSchemaEN = z.object({
  name: z
    .string()
    .nonempty('Please enter the category name')
    .min(3, 'Category name must have at least 3 characters')
    .max(40, 'Category name should have a maximum of 40 characters'),
});

// Error Handling
const updateCategoryErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.CONFLICT]: 'Category already exists in the database',
};
const updateCategoryDefaultErrorMessageEN =
  'Error creating the category. Please try again later';

export function buildUpdateCategoryErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateCategoryErrorMessagesEN[code] || updateCategoryDefaultErrorMessageEN
  );
}
