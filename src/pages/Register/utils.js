import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const registerValidationSchema = z
  .object({
    company: z.string().nonempty('Favor digitar o nome da empresa'),
    name: z
      .string()
      .nonempty('Informe um nome')
      .min(3, 'O nome não pode ter menos de 3 caracteres')
      .max(40, 'O nome não pode ter mais de 40 caracteres'),
    surname: z
      .string()
      .nonempty('Informe um sobrenome')
      .min(2, 'O sobrenome não pode ter menos de 2 caracteres')
      .max(40, 'O sobrenome não pode ter mais de 40 caracteres'),
    role: z.string().nonempty('Informe um cargo'),
    country: z
      .string()
      .nonempty('Informe um país')
      .min(3, 'User country must be atleast 3 characters')
      .max(30, 'User country must be a maximum of 30 characters'),
    state: z
      .string()
      .nonempty('Informe um estado')
      .min(3, 'User state must be atleast 3 characters')
      .max(30, 'User state must be a maximum of 30 characters'),
    city: z
      .string()
      .nonempty('Informe uma cidade')
      .min(3, 'User city must be atleast 3 characters')
      .max(30, 'User city must be a maximum of 30 characters'),
    address: z
      .string()
      .nonempty('Informe um endereço')
      .min(3, 'User address must be atleast 3 characters')
      .max(50, 'User address must be a maximum of 50 characters'),
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

    confirmPassword: z.string().nonempty('Confirme sua senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não coincidem',
  });

// Error Handling
const registerErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.CONFLICT]: 'O email já está sendo utilizado',
};
const registerDefaultErrorMessage =
  'Erro ao realizar o cadastro. Tente novamente mais tarde';

export function buildRegisterErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return registerErrorMessages[code] || registerDefaultErrorMessage;
}
