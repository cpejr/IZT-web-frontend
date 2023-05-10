import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const verifyEmailSchema = z.object({
  email: z.string().email(),
});

// Error Handling
const verifyEmailErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autorizado',
  [ERROR_CODES.NOT_FOUND]: 'Usuário não encontrado',
};
const verifyEmailDefaultErrorMessage =
  'Erro ao enviar o email. Tente novamente mais tarde';

export function buildVerifyEmailErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return verifyEmailErrorMessages[code] || verifyEmailDefaultErrorMessage;
}
