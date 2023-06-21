/* eslint-disable import/prefer-default-export */
import { ERROR_CODES } from '../../../utils/constants';

// Error Handling
const deleteUserSoftwareAccessErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Essa autorização não existe',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
};
const deleteUserSoftwareAccessDefaultErrorMessage =
  'Erro ao deletar a o acesso ao software. Tente novamente mais tarde';

export function buildDeleteUserSoftwareAccessErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    deleteUserSoftwareAccessErrorMessages[code] ||
    deleteUserSoftwareAccessDefaultErrorMessage
  );
}
