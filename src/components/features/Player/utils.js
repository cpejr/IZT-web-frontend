import { ERROR_CODES } from '../../../utils/constants';

// Error Handling
const saveProgressErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Vídeo não encontrado. Tente novamente mais tarde',
  [ERROR_CODES.FORBIDDEN]: 'Você não tem acesso a esse recurso',
};
const saveProgressDefaultErrorMessage =
  'Erro ao acessar o vídeo. Tente novamente mais tarde';

// eslint-disable-next-line import/prefer-default-export
export function buildSaveProgressErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return saveProgressErrorMessages[code] || saveProgressDefaultErrorMessage;
}
