import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const editProductValidationSchema = z.object({
  name: z
    .string()
    .nonempty('Favor digitar o nome do produto')
    .max(20, 'Nome do produto deve ter no máximo 20 caracteres'),
  category: z.string({ required_error: 'Product category ID is required' }), // Here we need to pass the category id only
  description: z
    .string()
    .nonempty('Favor inserir uma descrição do produto')
    .max(150, 'Descrição do produto deve ter no máximo 150 caracteres'),
  advantages: z
    .string()
    .nonempty('Favor inserir as vantagens do produto')
    .max(150, 'Vantagens do produto devem ter no máximo 150 caracteres'),
  pictures: z
    .array(
      z.object({
        file: z.instanceof(File).or(
          z.object({
            name: z.string(),
            mimeType: z.string(),
            url: z.string(),
            key: z.string(),
          })
        ),
      })
    )
    .nonempty('Você deve inserir ao menos uma foto')
    .transform((pictures) => pictures.map(({ file }) => file)),
  documents: z
    .array(
      z.object({
        file: z.instanceof(File).or(
          z.object({
            name: z.string(),
            mimeType: z.string(),
            url: z.string(),
            key: z.string(),
          })
        ),
      })
    )
    .nonempty('Você deve inserir ao menos um documento')
    .transform((documents) => documents.map(({ file }) => file)),
});

// Toast Success

export const toastSuccessMessage = 'Produto atualizado com sucesso!';

// Error Handling
const editProductErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
  [ERROR_CODES.CONFLICT]: 'O produto já existe',
};
const editProductDefaultErrorMessage =
  'Erro ao criar o produto. Tente novamente mais tarde';

export function buildEditProductErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return editProductErrorMessages[code] || editProductDefaultErrorMessage;
}
