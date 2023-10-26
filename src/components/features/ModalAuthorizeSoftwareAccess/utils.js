import { createTheme } from '@mui/material';
import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalAuthorizeAccessValidationSchema = z.object({
  userId: z.string({ required_error: 'Favor selecionar uma email' }), // Needs to be required_error because it is for a select component
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 40,
          fontSize: 15,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 20,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 13,
          fontWeight: 500,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 500,
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontSize: 12,
          fontWeight: 500,
        },
      },
    },
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

// toast success
export const toastSuccessMessage =
  'Autorização de acesso ao software concedida com sucesso!';

// Create user softwareAccess request
const createUserSoftwareAccessErrorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Dados inválidos',
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.FORBIDDEN]: 'Usuário não autorizado',
  [ERROR_CODES.CONFLICT]: 'O usuário já tem acesso ao software',
};
const createUserSoftwareAccessDefaultErrorMessage =
  'Erro autorizar acesso do software ao usuário. Tente novamente mais tarde';

export function buildCreateUserSoftwareAccessErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createUserSoftwareAccessErrorMessages[code] ||
    createUserSoftwareAccessDefaultErrorMessage
  );
}
