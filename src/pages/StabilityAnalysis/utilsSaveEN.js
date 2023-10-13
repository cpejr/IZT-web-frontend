import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const saveStabilityAnalysisValidationSchemaEN = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, 'Name must have at least 3 characters')
    .max(40, 'Name must have a maximum of 40 characters'),
});

// Error Handling
const calculateStabilityAnalysisErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const calculateStabilityAnalysisDefaultErrorMessageEN =
  'An error occurred while calculating the Stability Analysis. Please try again later';

export function buildSaveStabilityAnalysisErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateStabilityAnalysisErrorMessagesEN[code] ||
    calculateStabilityAnalysisDefaultErrorMessageEN
  );
}
