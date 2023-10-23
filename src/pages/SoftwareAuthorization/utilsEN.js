import { ERROR_CODES } from '../../utils/constants';

// Error Handling

const getSoftwareAccessErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const getSoftwareAccessDefaultErrorMessageEN =
  'An error occurred while listing software authorizations. Please try again later';

// eslint-disable-next-line import/prefer-default-export
export function buildGetSoftwareAccessErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getSoftwareAccessErrorMessagesEN[code] ||
    getSoftwareAccessDefaultErrorMessageEN
  );
}
