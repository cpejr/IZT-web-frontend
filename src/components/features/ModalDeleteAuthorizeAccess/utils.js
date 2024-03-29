/* eslint-disable import/prefer-default-export */
import { ERROR_CODES } from '../../../utils/constants';

// Error Handling
const deleteUserCourseErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Essa autorização não existe',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
};
const deleteUserCourseDefaultErrorMessage =
  'Erro ao deletar a o acesso ao curso. Tente novamente mais tarde';

export function buildDeleteUserCourseErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    deleteUserCourseErrorMessages[code] || deleteUserCourseDefaultErrorMessage
  );
}
