import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const saveProfileAnalysisValidationSchemaEN = z.object({
  name: z
    .string({ required_error: ' Name is required' })
    .min(3, 'The name must be at least 3 characters')
    .max(40, 'The name must have a maximum of 40 characters'),
});

// Error Handling
const calculateStabilityAnalysisErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const calculateStabilityAnalysisDefaultErrorMessageEN =
  'There was an error in the Stability Analysis calculation. Please try again later.';

export function buildCalculateStabilityAnalysisErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateStabilityAnalysisErrorMessagesEN[code] ||
    calculateStabilityAnalysisDefaultErrorMessageEN
  );
}
