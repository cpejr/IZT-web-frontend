/* eslint-disable import/prefer-default-export */
import { ERROR_CODES } from '../../../utils/constants';

// Error Handling
const deleteProfileAnalysisErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Esse relatório não existe',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
};
const deleteProfileAnalysisDefaultErrorMessage =
  'Erro ao deletar  o relatório. Tente novamente mais tarde';

export function buildDeleteProfileAnalysisErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    deleteProfileAnalysisErrorMessages[code] ||
    deleteProfileAnalysisDefaultErrorMessage
  );
}
