import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const createCategoryValidationSchemaEN = z.object({
  name: z
    .string()
    .nonempty('Please enter the category name')
    .min(3, 'Category name must have at least 3 characters')
    .max(40, 'Category name must have at most 40 characters'),
  description: z.string().optional(),
});

// Error Handling
const createCategoryErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.CONFLICT]: 'Category already exists in the database',
};
const createCategoryDefaultErrorMessageEN =
  'An error occurred while creating the category. Please try again later';

export function buildCreateCategoryErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createCategoryErrorMessagesEN[code] || createCategoryDefaultErrorMessageEN
  );
}
