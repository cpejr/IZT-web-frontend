import { ERROR_CODES } from '../../utils/constants';

// Error Handling
const getSoftwareAccessErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getSoftwareAccessDefaultErrorMessage =
  'Ocorreu um erro na listagem das autorizações dos cursos. Tente novamente mais tarde';

// eslint-disable-next-line import/prefer-default-export
export function buildGetSoftwareAccessErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getSoftwareAccessErrorMessages[code] || getSoftwareAccessDefaultErrorMessage
  );
}
