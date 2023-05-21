import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getUserCoursesErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getUserCoursesDefaultErrorMessage =
  'Ocorreu um erro na listagem das autorizações dos cursos. Tente novamente mais tarde';

// eslint-disable-next-line import/prefer-default-export
export function buildGetUserCoursesErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getUserCoursesErrorMessages[code] || getUserCoursesDefaultErrorMessage;
}
