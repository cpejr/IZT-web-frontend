import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const authorizeAccessValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),

  // const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  // accessExpiration: z
  //   .date()
  //   .refine((val) => dateRegex.test(val), {
  //     message: 'Data inválida. O formato deve ser DD/MM/YY',
  //   })
  //   .transform((val) => {
  //     // eslint-disable-next-line no-unused-vars
  //     const [_, day, month, year] = val.match(dateRegex);
  //     return new Date(`${year}-${month}-${day}`);
  //   }),
});

// Error Handling
const authorizeAccessErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const authorizeAccessDefaultErrorMessage =
  'Ocorreu um erro na liberação do curso. Tente novamente mais tarde';

export function buildAuthorizeAccessErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    authorizeAccessErrorMessages[code] || authorizeAccessDefaultErrorMessage
  );
}
