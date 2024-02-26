import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// eslint-disable-next-line import/prefer-default-export

export const formsValidationSchema = z.object({
  company: z.string().nonempty('Favor digitar o nome da empresa'),
  representative: z.string().nonempty('Favor digitar o nome do representante'),
  email: z
    .string()
    .nonempty('Favor digitar o email')
    .email('Insira um email válido')
    .trim(),
  telephone: z
    .string()
    .nonempty('Favor digitar o número do telefone')
    .regex(
      /^\+\d{2} \(\d{2}\) \d{5}-\d{4}$/,
      'Insira um número de telefone válido'
    )
    .transform((value) => value.replace(/[\s()-]*/g, '')),
  message: z
    .string()
    .nonempty('Favor inserir uma mensagem')
    .min(5, 'A mensagem deve conter no mínimo 5 caracteres')
    .max(1500, 'A mensagem deve conter até no máximo 1500 caracteres'),
});

const formContactErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const defaultFormContactErrorMessage =
  'Erro ao enviar a mensagem. Tente novamente mais tarde';

export function buildFormContactErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return formContactErrorMessages[code] || defaultFormContactErrorMessage;
}
