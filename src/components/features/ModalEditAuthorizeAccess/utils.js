import { createTheme } from '@mui/material';
import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const modalUpdateAuthorizeAccessValidationSchema = z.object({
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
const updateUserCourseErrorMessages = {
  [ERROR_CODES.UNAUTHORIZED]: 'Usuário não autenticado',
  [ERROR_CODES.CONFLICT]: 'O usuário já tem acesso ao curso',
};
const updateUserCourseDefaultErrorMessage =
  'Erro autorizar acesso do curso ao usuário. Tente novamente mais tarde';

export function buildUpdateUserCourseErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    updateUserCourseErrorMessages[code] || updateUserCourseDefaultErrorMessage
  );
}
