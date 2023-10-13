import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const budgetEmailSchemaEN = z.object({
  name: z
    .string()
    .nonempty('Enter your full name')
    .min(3, 'Enter a name with at least 3 characters'),
  company: z.string().nonempty('Enter the company name'),
  email: z
    .string()
    .nonempty('Enter the email')
    .email('Insert a valid email')
    .trim(),
  telephone: z
    .string()
    .nonempty('Enter your telephone number')
    .transform((value) => value.replace(/[\s()-]*/g, '')), // Taking off mask chars
  country: z
    .string({
      errorMap: () => ({
        // Necessary because country starts with undefined
        message: 'Provide a country',
      }),
    })
    .transform((value) => JSON.parse(value).name),
  state: z
    .string()
    .nonempty('Provide a state')
    .transform((value) => JSON.parse(value).name),
  city: z
    .string()
    .nonempty('Provide a city')
    .transform((value) => JSON.parse(value).name),
  ZIPcode: z
    .string()
    .nonempty('Enter your ZIP code')
    .length(9, 'Enter a valid ZIP code')
    .transform((value) => value.replace(/-/g, '')), // Taking off mask chars
  address: z.string().nonempty('Enter your address'),
});

// Error Handling
const budgetEmailErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Product not found',
};
const budgetEmailDefaultErrorMessage =
  'Error requesting product data. Please try again later';

export function buildBudgetEmailErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return budgetEmailErrorMessages[code] || budgetEmailDefaultErrorMessage;
}
