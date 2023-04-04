import { z } from 'zod';

// eslint-disable-next-line import/prefer-default-export
export const formsValidationSchema = z.object({
  company: z.string().min(1, 'Favor digitar o nome da empresa'),
  representative: z.string().min(1, 'Favor digitar o nome do representante'),
  email: z
    .string()
    .min(1, { message: 'Favor digitar o email' })
    .email({
      message: 'Insira um email válido',
    })
    .trim(),
  telephone: z.string().min(1, 'Favor digitar o número do telefone'),
  message: z
    .string({ required_error: 'Favor inserir uma mensagem' })
    .max(1500, {
      message: 'A mensagem deve conter até no máximo 1500 caracteres',
    })
    .min(5, { message: 'A mensagem deve conter no mínimo 5 caracteres' }),
});
