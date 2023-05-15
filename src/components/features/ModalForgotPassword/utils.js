import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .nonempty('Favor digitar o email')
    .email('Insira um email no formato email@email.com'),
});

// Error Handling
const forgotPasswordErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.NOT_FOUND]: 'E-mail não encontrado ou não verificado',
};
const forgotPasswordDefaultErrorMessage =
  'Erro ao enviar o e-mail. Tente novamente mais tarde';

export function buildForgotPasswordErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return forgotPasswordErrorMessages[code] || forgotPasswordDefaultErrorMessage;
}
