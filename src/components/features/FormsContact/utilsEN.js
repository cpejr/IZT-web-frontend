import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// eslint-disable-next-line import/prefer-default-export
export const formsValidationSchemaEN = z.object({
  company: z.string().nonempty('Please enter the company name'),
  representative: z.string().nonempty("Please enter the representative's name"),
  email: z
    .string()
    .nonempty('Please enter the email')
    .email('Enter a valid email')
    .trim(),
  telephone: z
    .string()
    .nonempty('Please enter the telephone number')
    .transform((value) => value.replace(/[\s()-]*/g, '')),
  message: z
    .string()
    .nonempty('Please enter a message')
    .min(5, 'The message must have at least 5 characters')
    .max(1500, 'The message can contain up to 1500 characters'),
});

const formContactErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const defaultFormContactErrorMessage =
  'Failed to send the message. Please try again later';

export function buildFormContactErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return formContactErrorMessages[code] || defaultFormContactErrorMessage;
}
