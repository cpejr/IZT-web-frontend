import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';
import uploadFiles from '../../utils/uploadFiles';

// Form Validation
export const createProductValidationSchema = z.object({
  name: z
    .string()
    .nonempty('Favor digitar o nome do produto')
    .max(20, 'Nome do produto deve ter no máximo 20 caracteres'),
  category: z.string({ required_error: 'Favor selecionar uma categoria' }), // Here we need to pass the category id only
  description: z
    .string()
    .nonempty('Favor inserir uma descrição do produto')
    .max(150, 'Descrição do produto deve ter no máximo 150 caracteres'),
  advantages: z
    .string()
    .nonempty('Favor inserir as vantagens do produto')
    .min(5, 'Mínimo de 5 caracteres')
    .max(150, 'Vantagens do produto devem ter no máximo 150 caracteres'),
  pictures: z
    .array(z.object({ file: z.instanceof(File) }))
    .nonempty('Você deve inserir ao menos uma foto')
    .transform((pictures) => pictures.map(({ file }) => file)),
  documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file)),
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

const getCategoriesErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getCategoriesIdDefaultErrorMessage =
  'Ocorreu um erro na listagem das categorias. Tente novamente mais tarde';
export function buildGetCategoriesErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getCategoriesErrorMessages[code] || getCategoriesIdDefaultErrorMessage;
}

// Form on submit
export async function processSubmitData({ uploadFn, updatedProductData }) {
  const { pictures: newPictures, documents: newDocuments } = updatedProductData;

  const uploadPicsReq = uploadFiles({
    uploadFn,
    files: newPictures,
  });
  const uploadDocsReq = uploadFiles({
    uploadFn,
    files: newDocuments,
  });

  const [uploadedPictures, uploadedDocuments] = await Promise.all([
    uploadPicsReq,
    uploadDocsReq,
  ]);

  return {
    ...updatedProductData,
    pictures: uploadedPictures,
    documents: uploadedDocuments,
  };
}
