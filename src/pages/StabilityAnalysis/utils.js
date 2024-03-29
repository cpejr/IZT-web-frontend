import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const calculateStabilityAnalysisValidationSchema = z.object({
  // Analysis Data
  rectificationProcess: z
    .string({ required_error: 'Processo de Retificação é obrigatório' })
    .min(3, 'Selecione uma opção válida da operação')
    .max(40, 'Processo de Retificação deve ter no máximo 40 caracteres'),
  machine: z
    .string({ required_error: 'Máquina é obrigatória' })
    .min(3, 'Máquina deve ter pelo menos 3 caracteres')
    .max(40, 'Máquina deve ter no máximo 40 caracteres'),
  machineNumber: z
    .number({
      required_error: 'Número da máquina é obrigatório',
      invalid_type_error: 'Número da máquina deve ser um número',
    })
    .positive('Número da máquina deve ser positivo'),
  operation: z
    .string({ required_error: 'Operação é obrigatória' })
    .min(3, 'Selecione uma opção válida da operação')
    .max(40, 'Operação deve ter no máximo 40 caracteres'),
  department: z
    .string({ required_error: 'Departamento é obrigatório' })
    .min(3, 'Departamento deve ter pelo menos 3 caracteres')
    .max(40, 'Departamento deve ter no máximo 40 caracteres'),
  responsiblePerson: z
    .string({ required_error: 'Pessoa responsável é obrigatória' })
    .min(3, 'Pessoa responsável deve ter pelo menos 3 caracteres')
    .max(40, 'Pessoa responsável deve ter no máximo 40 caracteres'),

  // Dados da Máquina
  rcMaxDiameter: z
    .number({
      required_error: 'Diâmetro Máximo do RC é obrigatório',
      invalid_type_error: 'Diâmetro Máximo do RC deve ser um número',
    })
    .positive('Diâmetro Máximo deve ser positivo'),
  rcMinDiameter: z
    .number({
      required_error: 'Diâmetro Mínimo do RC é obrigatório',
      invalid_type_error: 'Diâmetro Mínimo do RC deve ser um número',
    })
    .positive('Diâmetro Mínimo deve ser positivo'),
  raDiameter: z
    .number({
      required_error: 'Diâmetro do RA é obrigatório',
      invalid_type_error: 'Diâmetro do RA deve ser um número',
    })
    .positive('Diâmetro do RA deve ser positivo'),
  rcLength: z
    .number({
      required_error: 'Comprimento do RC é obrigatório',
      invalid_type_error: 'Comprimento do RC deve ser um número',
    })
    .positive('Comprimento do RC deve ser positivo'),
  raLength: z
    .number({
      required_error: 'Comprimento do RA é obrigatório',
      invalid_type_error: 'Comprimento do RA deve ser um número',
    })
    .positive('Comprimento do RA deve ser positivo'),
  rcEffectiveLength: z
    .number({
      required_error: 'Comprimento Efetivo do RC é obrigatório',
      invalid_type_error: 'Comprimento Efetivo do RC deve ser um número',
    })
    .positive('Comprimento Efetivo do RC deve ser positivo'),
  rcRotation: z
    .number({
      required_error: 'Rotação do RC é obrigatória',
      invalid_type_error: 'Rotação do RC deve ser um número',
    })
    .max(360, 'Rotação do RC deve ter no máximo 360°')
    .min(-360, 'Rotação do RC deve ter pelo menos -360°'),
  raRotation: z
    .number({
      required_error: 'Rotação do RA é obrigatória',
      invalid_type_error: 'Rotação do RA deve ser um número',
    })
    .max(360, 'Rotação do RA deve ter no máximo 360°')
    .min(-360, 'Rotação do RA deve ter pelo menos -360°'),
  rwInclination: z
    .number({
      required_error: 'Inclinação do RW é obrigatória',
      invalid_type_error: 'Inclinação do RW deve ser um número',
    })
    .max(90, 'Inclinação do RW deve ter no máximo 90°')
    .min(-90, 'Inclinação do RW deve ter pelo menos -90°'),

  // Dados do Produto
  product: z
    .string({ required_error: 'Produto é obrigatório' })
    .min(3, 'Produto deve ter pelo menos 3 caracteres')
    .max(40, 'Produto deve ter no máximo 40 caracteres'),
  productNumber: z
    .number({
      required_error: 'Número do Produto é obrigatório',
      invalid_type_error: 'Número do Produto deve ser um número',
    })
    .positive('Número do Produto deve ser positivo'),
  diameter: z
    .number({
      required_error: 'Diâmetro é obrigatório',
      invalid_type_error: 'Diâmetro deve ser um número',
    })
    .positive('Diâmetro deve ser positivo'),
  totalLength: z
    .number({
      required_error: 'Comprimento Total é obrigatório',
      invalid_type_error: 'Comprimento Total deve ser um número',
    })
    .positive('Comprimento Total deve ser positivo'),
  electiveLength: z
    .number({
      required_error: 'Comprimento Eletivo é obrigatório',
      invalid_type_error: 'Comprimento Eletivo deve ser um número',
    })
    .positive('Comprimento Eletivo deve ser positivo'),

  allowance: z
    .number({
      required_error: 'Sobremetal é obrigatório',
      invalid_type_error: 'Sobremetal deve ser um número',
    })
    .positive('Sobremetal deve ser positivo'),
});

// Error Handling
const calculateStabilityAnalysisErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const calculateStabilityAnalysisDefaultErrorMessage =
  'Ocorreu um erro no cálculo da Análise de Estabilidade. Tente novamente mais tarde';

export function buildCalculateStabilityAnalysisErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateStabilityAnalysisErrorMessages[code] ||
    calculateStabilityAnalysisDefaultErrorMessage
  );
}
