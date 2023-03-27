import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const budgetEmailSchema = z.object({
  name: z.string().min(1, 'Digite o seu nome completo'),
  company: z.string().min(1, 'Digite o nome da empresa'),
  email: z
    .string()
    .min(1, { message: 'Digite o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),
  telephone: z
    .string()
    .min(1, 'Digite o seu número do telefone')
    .transform((value) => value.replace(/[\s()-]*/g, '')), // Taking off mask chars
  country: z.string().min(1, 'Digite nome do seu país'),
  state: z.string().min(1, 'Digite o estado'),
  city: z.string().min(1, 'Digite a cidade'),
  ZIPcode: z
    .string()
    .min(1, 'Digite o seu CEP')
    .length(9, 'Digite um CEP válido')
    .transform((value) => value.replace(/-/g, '')), // Taking off mask chars,
  address: z.string().min(1, 'Digite o seu seu endereço'),
});

// Error Handling
const budgetEmailErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Produto não encontrado',
};
const budgetEmailDefaultErrorMessage =
  'Erro ao solicitar os dados do produto. Tente novamente mais tarde';

export function buildBudgetEmailErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return budgetEmailErrorMessages[code] || budgetEmailDefaultErrorMessage;
}
