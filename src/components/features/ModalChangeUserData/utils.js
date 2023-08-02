import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const updateUserSchema = z.object({
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
  role: z
    .string()
    .nonempty('Informe um cargo')
    .min(3, 'O cargo não pode ter menos de 3 caracteres'),
  country: z
    .string()
    .nonempty('Informe um telefone')
    .min(3, 'User country must be atleast 3 characters')
    .max(90, 'User country must be a maximum of 30 characters'),
  state: z
    .string()
    .nonempty('Informe um estado')
    .min(3, 'User state must be atleast 3 characters')
    .max(90, 'User state must be a maximum of 30 characters'),
  city: z
    .string()
    .nonempty('Informe uma cidade')
    .min(3, 'User city must be atleast 3 characters')
    .max(90, 'User city must be a maximum of 30 characters'),

  address: z
    .string()
    .nonempty('Informe um endereço')
    .min(3, 'User address must be at least 3 characters')
    .max(50, 'User address must be a maximum of 50 characters'),
});

// Error Handling
const updateUserErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autorizado',
  [ERROR_CODES.NOT_FOUND]: 'Usuário não encontrado',
};
const updateUserDefaultErrorMessage =
  'Erro ao editar os dados cadastrais. Tente novamente mais tarde';

export function buildUpdateUserErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return updateUserErrorMessages[code] || updateUserDefaultErrorMessage;
}
