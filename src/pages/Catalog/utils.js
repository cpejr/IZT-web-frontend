import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getCategoriesErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getCategoriesDefaultErrorMessage =
  'Ocorreu um erro na listagem das categorias. Tente novamente mais tarde';

export default function buildGetCategoriesErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getCategoriesErrorMessages[code] || getCategoriesDefaultErrorMessage;
}
