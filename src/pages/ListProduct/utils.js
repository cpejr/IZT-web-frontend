import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getProductsErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getProductsIdDefaultErrorMessage =
  'Ocorreu um erro na listagem dos produtos. Tente novamente mais tarde';
export function buildGetProductsErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getProductsErrorMessages[code] || getProductsIdDefaultErrorMessage;
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
