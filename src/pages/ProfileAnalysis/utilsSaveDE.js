import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const saveProfileAnalysisValidationSchemaDE = z.object({
  name: z
    .string({ required_error: 'Name ist erforderlich' })
    .min(3, 'Der Name muss mindestens 3 Zeichen lang sein')
    .max(40, 'Der Name darf höchstens 40 Zeichen haben'),
});

// Error Handling
const calculateStabilityAnalysisErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const calculateStabilityAnalysisDefaultErrorMessageDE =
  'Bei der Berechnung der Stabilitätsanalyse ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';

export function buildCalculateStabilityAnalysisErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateStabilityAnalysisErrorMessagesDE[code] ||
    calculateStabilityAnalysisDefaultErrorMessageDE
  );
}
