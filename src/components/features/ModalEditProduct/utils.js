import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';
import deleteFiles from '../../../utils/deleteFiles';
import uploadFiles from '../../../utils/uploadFiles';

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
            _id: z.string(),
            key: z.string(),
            name: z.string(),
            mimeType: z.string(),
            url: z.string(),
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
            _id: z.string(),
            key: z.string(),
            name: z.string(),
            mimeType: z.string(),
            url: z.string(),
          })
        ),
      })
    )
    .default([])
    .transform((documents) => documents.map(({ file }) => file)),
});

// Error Handling
const editProductErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Dados inválidos',
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

const getCategoriesErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getCategoriesDefaultErrorMessage =
  'Erro ao listar as categorias disponíveis. Tente novamente mais tarde';
export function buildGetCategoriesErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getCategoriesErrorMessages[code] || getCategoriesDefaultErrorMessage;
}

// Default form data
export function defaultValues(product) {
  return {
    name: product.name,
    description: product.description,
    advantages: product.advantages,
    category: product.category._id,
    pictures: product.pictures.map((pic) => ({
      id: pic.key,
      file: pic,
    })),
    documents: product.documents.map((doc) => ({
      id: doc.key,
      file: doc,
    })),
  };
}

// Form on submit
export async function processSubmitData({
  uploadFn,
  deleteFn,
  updatedProductData,
  oldProductData,
}) {
  const { pictures: oldPictures, documents: oldDocuments } = oldProductData;
  const { pictures: newPictures, documents: newDocuments } = updatedProductData;

  const uploadPicsReq = uploadFiles({
    uploadFn,
    files: newPictures,
  });
  const uploadDocsReq = uploadFiles({
    uploadFn,
    files: newDocuments,
  });
  const deleteOldPicsReq = deleteFiles({
    deleteFn,
    originalFiles: oldPictures,
    newFiles: newPictures,
  });
  const deleteOldDocsReq = deleteFiles({
    deleteFn,
    originalFiles: oldDocuments,
    newFiles: newDocuments,
  });

  const [uploadedPictures, uploadedDocuments] = await Promise.all([
    uploadPicsReq,
    uploadDocsReq,
    deleteOldPicsReq,
    deleteOldDocsReq,
  ]);

  return {
    ...updatedProductData,
    pictures: uploadedPictures,
    documents: uploadedDocuments,
  };
}
