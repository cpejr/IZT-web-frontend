import { createTheme } from '@mui/material';
import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Error Handling

const createUserSoftwareAccessDefaultErrorMessage =
  'Ocorreu um erro na listagem das autorizações do software. Tente novamente mais tarde';

// eslint-disable-next-line import/prefer-default-export
const createUserSoftwareAccessErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
  [ERROR_CODES.CONFLICT]: 'O usuário já tem acesso ao software',
};
export function buildCreateUserSoftwareAccessErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserSoftwareAccessErrorMessages[code] ||
    createUserSoftwareAccessDefaultErrorMessage
  );
}

export const authorizeAccessValidationSchema = z.object({
  userId: z.string({ required_error: 'Favor selecionar uma email' }).trim(),
  softwareAccess: z.coerce.date({
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
