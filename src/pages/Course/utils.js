import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getCourseInfoErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Curso não encontrado. Tente novamente mais tarde',
  [ERROR_CODES.FORBIDDEN]: 'Você não tem acesso a esse recurso',
};
const getCourseInfoDefaultErrorMessage =
  'Erro ao acessar o curso. Tente novamente mais tarde';

// eslint-disable-next-line import/prefer-default-export
export function buildGetCourseInfoErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getCourseInfoErrorMessages[code] || getCourseInfoDefaultErrorMessage;
}
