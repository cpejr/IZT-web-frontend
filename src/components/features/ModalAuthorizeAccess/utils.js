/* eslint-disable */
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
