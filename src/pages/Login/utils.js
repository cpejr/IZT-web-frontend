import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const loginValidationSchema = z.object({
  email: z
    .string()
    .nonempty('Favor digitar o email')
    .email('Insira um email no formato email@email.com')
    .trim(),
  password: z
    .string()
    .nonempty('Favor digitar uma senha')
    .min(6, 'A senha não pode ter menos de 6 caracteres')
    .max(16, 'A senha não pode ter mais de 16 caracteres'),
});

// Error Handling
const loginErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'E-mail ou senha incorretos',
  [ERROR_CODES.FORBIDDEN]:
    'A sua conta ainda não foi ativada. Por favor verifique o e-mail',
};
const loginDefaultErrorMessage =
  'Erro ao realizar o login. Tente novamente mais tarde';

export function buildLoginErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return loginErrorMessages[code] || loginDefaultErrorMessage;
}
