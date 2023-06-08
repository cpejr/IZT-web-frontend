import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const budgetEmailSchema = z.object({
  name: z
    .string()
    .nonempty('Digite o seu nome completo')
    .min(3, 'Digite um nome com no mínimo 3 caracteres'),
  company: z.string().nonempty('Digite o nome da empresa'),
  email: z
    .string()
    .nonempty('Digite o email')
    .email('Insira um email válido')
    .trim(),
  telephone: z
    .string()
    .nonempty('Digite o seu número do telefone')
    .transform((value) => value.replace(/[\s()-]*/g, '')), // Taking off mask chars
  country: z.string().nonempty('Digite nome do seu país'),
  state: z.string().nonempty('Digite o estado'),
  city: z.string().nonempty('Digite a cidade'),
  ZIPcode: z
    .string()
    .nonempty('Digite o seu CEP')
    .length(9, 'Digite um CEP válido')
    .transform((value) => value.replace(/-/g, '')), // Taking off mask chars
  address: z.string().nonempty('Digite o seu seu endereço'),
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
