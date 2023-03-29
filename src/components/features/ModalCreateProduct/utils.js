import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const createProductValidationSchema = z.object({
  name: z
    .string()
    .min(1, 'Favor digitar o nome do produto')
    .max(20, 'Nome do produto deve ter no máximo 20 caracteres'),
  category: z.string({ required_error: 'Product category ID is required' }), // Here we need to pass the category id only

  description: z
    .string()
    .min(1, 'Favor inserir uma descrição do produto')
    .max(150, 'Descrição do produto deve ter no máximo 150 caracteres'),

  advantages: z
    .string()
    .min(1, 'Favor inserir as vantagens do produto')
    .max(150, 'Vantagens do produto devem ter no máximo 150 caracteres'),

  pictures: z
    .array(z.instanceof(File))
    .nonempty('Você deve inserir ao menos uma foto'),

  documents: z.array(z.instanceof(File)).default([]),
});

// Error Handling
const createProductErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
  [ERROR_CODES.CONFLICT]: 'O produto já foi criado',
};
const createProductDefaultErrorMessage =
  'Erro ao criar o produto. Tente novamente mais tarde';

export function buildCreateProductErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return createProductErrorMessages[code] || createProductDefaultErrorMessage;
}
