import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getProductsErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getProductsIdDefaultErrorMessage =
  'Ocorreu um erro na listagem dos produtos. Tente novamente mais tarde';

// eslint-disable-next-line import/prefer-default-export
export function buildGetProductsErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getProductsErrorMessages[code] || getProductsIdDefaultErrorMessage;
}
