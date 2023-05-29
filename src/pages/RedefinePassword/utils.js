import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const redifinePasswordValidationSchema = z
  .object({
    password: z
      .string()
      .nonempty('Favor digitar uma senha')
      .min(6, 'A senha não pode ter menos de 6 caracteres')
      .max(16, 'A senha não pode ter mais de 16 caracteres'),

    confirmPassword: z.string().nonempty('Confirme sua senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não coincidem',
  });

// Error Handling
const redefinePasswordErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.FORBIDDEN]: 'Link expirado ou inválido',
  [ERROR_CODES.NOT_FOUND]: 'Usuário não encontrado',
};
const redefinePasswordDefaultErrorMessage =
  'Erro ao realizar a redefinição de senha. Tente novamente mais tarde';

export function buildRedefinePasswordErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    redefinePasswordErrorMessages[code] || redefinePasswordDefaultErrorMessage
  );
}
