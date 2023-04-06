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

  accessExpiration: z
    .date()
    .refine((val) => dateRegex.test(val), {
      message: 'Data inválida. O formato deve ser DD/MM/YY',
    })
    .transform((val) => {
      // eslint-disable-next-line no-unused-vars
      const [_, day, month, year] = val.match(dateRegex);
      return new Date(`${year}-${month}-${day}`);
    }),
});
