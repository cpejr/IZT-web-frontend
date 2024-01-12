/* eslint-disable import/prefer-default-export */
import { ERROR_CODES } from '../../../utils/constants';

// Error Handling
const deleteProductErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Esse produto não existe',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
};
const deleteProductDefaultErrorMessage =
  'Erro ao deletar o produto. Tente novamente mais tarde';

export function buildDeleteProductErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return deleteProductErrorMessages[code] || deleteProductDefaultErrorMessage;
}
