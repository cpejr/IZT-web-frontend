import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const editProductValidationSchemaEN = z.object({
  name: z
    .string()
    .nonempty('Please enter the product name')
    .max(20, 'Product name must have a maximum of 20 characters'),
  category: z.string({ required_error: 'Product category ID is required' }), // Here we need to pass the category id only
  description: z
    .string()
    .nonempty('Please enter a product description')
    .max(150, 'Product description must have a maximum of 150 characters'),
  advantages: z
    .string()
    .nonempty('Please enter the product advantages')
    .max(150, 'Product advantages must have a maximum of 150 characters'),
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
    .nonempty('You must upload at least one picture')
    .transform((pictures) => pictures.map(({ file }) => file)),
    documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file))
    .optional(),
});

// Toast Success

export const toastSuccessMessageEN = 'Product updated successfully!';

// Error Handling
const editProductErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
  [ERROR_CODES.UNAUTHORIZED]: 'User not authenticated',
  [ERROR_CODES.FORBIDDEN]: 'User not authorized',
  [ERROR_CODES.CONFLICT]: 'The product already exists',
};
const editProductDefaultErrorMessageEN =
  'Error creating the product. Please try again later';

export function buildEditProductErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return editProductErrorMessagesEN[code] || editProductDefaultErrorMessageEN;
}
