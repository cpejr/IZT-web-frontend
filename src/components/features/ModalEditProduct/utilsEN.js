import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const editProductValidationSchemaEN = z.object({
  name: z
    .string()
    .nonempty('Please enter the product name')
    .max(20, 'Product name should have a maximum of 20 characters'),
  category: z.string({ required_error: 'Product category ID is required' }), // Here we need to pass the category ID only
  description: z
    .string()
    .nonempty('Please enter a product description')
    .max(150, 'Product description should have a maximum of 150 characters'),
  advantages: z
    .string()
    .nonempty('Please enter the advantages of the product')
    .max(
      150,
      'Advantages of the product should have a maximum of 150 characters'
    ),
  pictures: z
    .array(
      z.object({
        file: z.instanceof(File).or(
          z.object({
            name: z.string(),
            mimeType: z.string(),
            url: z.string(),
            key: z.string(),
          })
        ),
      })
    )
    .nonempty('You must upload at least one photo')
    .transform((pictures) => pictures.map(({ file }) => file)),
    documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file))
    .optional(),
});

// Error Handling
const editProductErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'Unauthenticated user',
  [ERROR_CODES.FORBIDDEN]: 'Unauthorized user',
  [ERROR_CODES.CONFLICT]: 'The product already exists',
};
const editProductDefaultErrorMessageEN =
  'Error creating the product. Please try again later';
export function buildEditProductErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return editProductErrorMessagesEN[code] || editProductDefaultErrorMessageEN;
}

const getCategoriesErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const getCategoriesDefaultErrorMessageEN =
  'Error listing available categories. Please try again later';
export function buildGetCategoriesErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getCategoriesErrorMessagesEN[code] || getCategoriesDefaultErrorMessageEN
  );
}
