import { createTheme } from '@mui/material';
import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalAuthorizeAccessValidationSchema = z.object({
  userId: z.string({ required_error: 'Favor selecionar uma email' }), // Needs to be required_error because it is for a select component
  expiresAt: z.coerce.date({
    errorMap: () => ({
      message: 'Favor inserir uma data',
    }),
  }),
});

// MUI DatePicker theme
export const themeDatePicker = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#000000',
    },
    action: {
      active: '#000000',
      hover: '#203699',
      selected: '#203699',
      disabled: '#000000',
    },
    background: {
      default: '#fff',
    },
    divider: '#203699',
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

// Error Handling

// Get users for select
const getUsersErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const getUsersIdDefaultErrorMessage =
  'Ocorreu um erro na listagem dos usuários. Tente novamente mais tarde';
export function buildGetUsersErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return getUsersErrorMessages[code] || getUsersIdDefaultErrorMessage;
}

// Create user softwareAccess request
const createUserSoftwareAccessErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
  [ERROR_CODES.CONFLICT]: 'O usuário já tem acesso ao curso',
};
const createUserSoftwareAccessDefaultErrorMessage =
  'Erro autorizar acesso do curso ao usuário. Tente novamente mais tarde';

export function buildCreateUserSoftwareAccessErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserSoftwareAccessErrorMessages[code] ||
    createUserSoftwareAccessDefaultErrorMessage
  );
}
