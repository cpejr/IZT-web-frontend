import { createTheme } from '@mui/material';
import { z } from 'zod';

// Form Validation
export const authorizeAccessValidationSchema = z.object({
  email: z.string({ required_error: 'Favor selecionar uma email' }).trim(),
  accessExpiration: z.coerce.date({
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
      hover: '2#03699',
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
