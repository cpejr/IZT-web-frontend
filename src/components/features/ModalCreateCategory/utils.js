import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const createCategoryValidationSchema = z.object({
  name: z
    .string()
    .nonempty('Favor inserir o nome da categoria')
    .min(3, 'O nome da categoria deve ter pelo menos 3 caracteres')
    .max(40, 'O nome da categoria deve ter no máximo 40 caracteres'),
});

// Error Handling
const createCategoryErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.CONFLICT]: 'Categoria já existente no banco de dados',
};
const createCategoryDefaultErrorMessage =
  'Ocorreu um erro na criação da categoria. Tente novamente mais tarde';

export function buildCreateCategoryErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return createCategoryErrorMessages[code] || createCategoryDefaultErrorMessage;
}
