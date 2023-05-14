/* eslint-disable import/prefer-default-export */
import { ERROR_CODES } from '../../../utils/constants';

// Error Handling
const deleteCategorieErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Essa categoria não existe',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
};
const deleteCategorieDefaultErrorMessage =
  'Erro ao deletar a categoria. Tente novamente mais tarde';

export function buildDeleteCategoryErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    deleteCategorieErrorMessages[code] || deleteCategorieDefaultErrorMessage
  );
}
