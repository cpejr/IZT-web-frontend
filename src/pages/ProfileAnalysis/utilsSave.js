import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const saveProfileAnalysisValidationSchema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .max(40, 'O nome deve ter no máximo 40 caracteres'),
});

// Error Handling
const calculateStabilityAnalysisErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const calculateStabilityAnalysisDefaultErrorMessage =
  'Ocorreu um erro no cálculo da Análise de Estabilidade. Tente novamente mais tarde';

export function buildCalculateStabilityAnalysisErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateStabilityAnalysisErrorMessages[code] ||
    calculateStabilityAnalysisDefaultErrorMessage
  );
}
