/* eslint-disable */
import { createTheme } from '@mui/material';
import { z } from 'zod';

const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

// Form Validation
export const modalAuthorizeAccessValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),

  accessExpiration: z.coerce.date({
    errorMap: () => ({
      message: 'Favor inserir uma data',
    }),
  }),
});

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

export const emails = [
  { label: 'thiagofraga@cpejr.com.br', value: 'thiagofraga@cpejr.com.br' },
  { label: 'amandaalves@cpejr.com.br', value: 'amandaalves@cpejr.com.br' },
  { label: 'joaopiraja@cpejr.com.br', value: 'joaopiraja@cpejr.com.br' },
];
