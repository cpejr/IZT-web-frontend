import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const redifinePasswordValidationSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'Favor digitar uma senha' })
      .min(6, 'A senha não pode ter menos de 6 caracteres')
      .max(16, 'A senha não pode ter mais de 16 caracteres'),

    confirmPassword: z.string().min(1, { message: 'Confirme sua senha' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não coincidem',
  });

// Error Handling
const redefinePasswordErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'E-mail ou senha incorretos',
  [ERROR_CODES.FORBIDDEN]:
    'A sua conta ainda não foi ativada. Por favor verifique o e-mail',
};
const redefinePasswordDefaultErrorMessage =
  'Erro ao realizar a redefinição de senha. Tente novamente mais tarde';

export function buildRedefinePasswordErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    redefinePasswordErrorMessages[code] || redefinePasswordDefaultErrorMessage
  );
}
