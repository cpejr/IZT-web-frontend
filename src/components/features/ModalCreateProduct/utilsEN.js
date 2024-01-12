import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const createProductValidationSchemaEN = z.object({
  name: z
    .string()
    .nonempty('Please enter the product name')
    .max(20, 'Product name must be at most 20 characters'),
  category: z.string({ required_error: 'Please select a category' }),
  description: z
    .string()
    .nonempty('Please enter a product description')
    .max(150, 'Product description must be at most 150 characters'),
  advantages: z
    .string()
    .nonempty('Please enter the product advantages')
    .min(5, 'Minimum of 5 characters')
    .max(150, 'Product advantages must be at most 150 characters'),
  pictures: z
    .array(z.object({ file: z.instanceof(File) }))
    .nonempty('You must upload at least one picture')
    .transform((pictures) => pictures.map(({ file }) => file)),
  documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file)),
});

// Error Handling
const createProductErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'User not authenticated',
  [ERROR_CODES.FORBIDDEN]: 'User not authorized',
  [ERROR_CODES.CONFLICT]: 'The product has already been created',
};
const createProductDefaultErrorMessageEN =
  'Error creating the product. Please try again later';

export function buildCreateProductErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createProductErrorMessagesEN[code] || createProductDefaultErrorMessageEN
  );
}

const getCategoriesErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const getCategoriesIdDefaultErrorMessageEN =
  'An error occurred while listing the categories. Please try again later';

export function buildGetCategoriesErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getCategoriesErrorMessagesEN[code] || getCategoriesIdDefaultErrorMessageEN
  );
}
