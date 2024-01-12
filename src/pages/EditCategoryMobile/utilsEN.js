import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const updateCategoryValidationSchemaEN = z.object({
  name: z
    .string()
    .nonempty('Please enter the category name')
    .min(3, 'The category name must be at least 3 characters long')
    .max(40, 'The category name must be at most 40 characters long'),
  description: z.string().optional(),
});

// Toast Success

export const toastSuccessMessageEN = 'Category updated successfully!';

// Error Handling
const updateCategoryErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.CONFLICT]: 'Category already exists in the database',
};
const updateCategoryDefaultErrorMessageEN =
  'An error occurred in updating the category. Please try again later';

export function buildupdateCategoryErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateCategoryErrorMessagesEN[code] || updateCategoryDefaultErrorMessageEN
  );
}
