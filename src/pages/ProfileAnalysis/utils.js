import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const calculateProfileAnalysisValidationSchema = z.object({
  // Analysis Data
  rectificationProcess: z
    .string({ required_error: 'Processo de Retificação é obrigatório' })
    .min(3, 'Processo de Retificação deve ter pelo menos 3 caracteres')
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
    .min(3, 'Operação deve ter pelo menos 3 caracteres')
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
    .positive('Diâmetro Máximo do RC deve ser positivo'),
  rcMinDiameter: z
    .number({
      required_error: 'Diâmetro Mínimo do RC é obrigatório',
      invalid_type_error: 'Diâmetro Mínimo do RC deve ser um número',
    })
    .positive('Diâmetro Mínimo do RC deve ser positivo'),
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
  quantityPieces: z
    .number({
      required_error: 'Quantidade de peças é obrigatória',
      invalid_type_error: 'A quantidade de peças deve ser um número',
    })
    .positive('A quantidade de peças deve ser positiva'),
  speedPeripheral: z
    .number({
      required_error: 'A velocidade periférica da roda de corte é obrigatória',
      invalid_type_error:
        'A velocidade periférica da roda de corte deve ser um número',
    })
    .positive('A velocidade periférica da roda de corte deve ser positiva'),

  speedPassage: z
    .number({
      required_error: 'A velocidade de passagem da peça é obrigatória',
      invalid_type_error: 'A velocidade de passagem da peça deve ser um número',
    })
    .positive('A velocidade de passagem da peça deve ser positiva'),

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

  // Análise de Perfil RA
  hwCenterHeight: z
    .number({
      required_error: 'Altura do Centro RA é obrigatória',
      invalid_type_error: 'Altura do Centro RA deve ser um número',
    })
    .positive('Altura do Centro RA deve ser positivo'),
  raInclination: z
    .number({
      required_error: 'Inclinação do RA é obrigatória',
      invalid_type_error: 'Inclinação do RA deve ser um número',
    })
    .positive('Inclinação do RA deve ser positivo'),
  raDresserInclination: z
    .number({
      required_error: 'Inclinação do Dressador RA é obrigatória',
      invalid_type_error: 'Inclinação do Dressador RA deve ser um número',
    })
    .positive('Inclinação do Dressador RA deve ser positivo'),
  dresserHeight: z
    .number({
      required_error: 'Altura do Dressador é obrigatória',
      invalid_type_error: 'Altura do Dressador deve ser um número',
    })
    .positive('Altura do Dressador deve ser positivo'),
  dresserPosition: z
    .string({
      required_error: 'Posição do Dressador é obrigatória',
      invalid_type_error: 'Posição do Dressador deve ser uma string',
    })
    .min(3, 'Posição do Dressador deve ter pelo menos 3 caracteres')
    .max(20, 'Posição do Dressador deve ter pelo menos 20 caracteres'),
  raRotationnr: z
    .number({
      required_error: 'Rotação de RA(nr) é obrigatória',
      invalid_type_error: 'Rotação de Ra(nr) deve ser um número',
    })
    .positive('Rotação de RA(nr) precisa ser um número positivo'),
  heightCenters: z
    .number({
      required_error: 'Altura entre centros é obrigatória',
      invalid_type_error: 'Altura entre centros deve ser um número',
    })
    .positive('Altura entre centros deve ser um número positivo'),
  angleTangency: z
    .number({
      required_error: 'Ângulo de tangência(y) é obrigatório',
      invalid_type_error: 'Ângulo de tangência(y) deve ser um número',
    })
    .positive('Ângulo de tangência(y) deve ser um número positivo'),
  angleRuler: z
    .number({
      required_error: 'Ângulo da régua é obrigatório',
      invalid_type_error: 'Ângulo da régua deve ser um número',
    })
    .positive('Ângulo da régua deve ser um número positivo'),
});

// Error Handling
const calculateProfileAnalysisErrorMessages = {
  [ERROR_CODES.BAD_REQUEST]: 'Dados inválidos',
};
const calculateProfileAnalysisDefaultErrorMessage =
  'Ocorreu um erro no cálculo da Análise de Perfil. Tente novamente mais tarde';

export function buildCalculateProfileAnalysisErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateProfileAnalysisErrorMessages[code] ||
    calculateProfileAnalysisDefaultErrorMessage
  );
}
