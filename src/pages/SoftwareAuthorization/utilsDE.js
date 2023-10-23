import { ERROR_CODES } from '../../utils/constants';

// Error Handling

const getSoftwareAccessErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const getSoftwareAccessDefaultErrorMessageDE =
  'Beim Auflisten der Software-Berechtigungen ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';

// eslint-disable-next-line import/prefer-default-export
export function buildGetSoftwareAccessErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getSoftwareAccessErrorMessagesDE[code] ||
    getSoftwareAccessDefaultErrorMessageDE
  );
}
