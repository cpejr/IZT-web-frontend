import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const calculateProfileAnalysisValidationSchema = z.object({
  // Analysis Data
  rectificationProcess: z
    .string({ required_error: 'Rectification Process is required' })
    .min(3, 'Rectification Process must be atleast 3 characters')
    .max(40, 'Rectification Process must be a maximum of 40 characters'),
  machine: z
    .string({ required_error: 'Machine is required' })
    .min(3, 'Machine must be atleast 3 characters')
    .max(40, 'Machine must be a maximum of 40 characters'),
  machineNumber: z
    .number({ required_error: 'Machine number is required' })
    .positive(),
  operation: z
    .string({ required_error: 'Operation is required' })
    .min(3, 'Operation must be atleast 3 characters')
    .max(40, 'Operation must be a maximum of 40 characters'),
  department: z
    .string({ required_error: 'Department is required' })
    .min(3, 'Department must be atleast 3 characters')
    .max(40, 'Department must be a maximum of 40 characters'),
  responsiblePerson: z
    .string({ required_error: 'Responsible Person is required' })
    .min(3, 'Responsible Person must be atleast 3 characters')
    .max(40, 'Responsible Person must be a maximum of 40 characters'),

  // Machine Data
  rcMaxDiameter: z
    .number({
      required_error: 'RC Max Diameter is required',
      invalid_type_error: 'RC Max Diameter must be a number',
    })
    .positive(),
  rcMinDiameter: z
    .number({
      required_error: 'RC Min Diameter is required',
      invalid_type_error: 'RC Min Diameter must be a number',
    })
    .positive(),
  raDiameter: z
    .number({
      required_error: 'RA Diameter is required',
      invalid_type_error: 'RA Diameter must be a number',
    })
    .positive(),
  rcLength: z
    .number({
      required_error: 'RC Length is required',
      invalid_type_error: 'RC Length must be a number',
    })
    .positive(),
  raLength: z
    .number({
      required_error: 'RA Length is required',
      invalid_type_error: 'RA Length must be a number',
    })
    .positive(),
  rcEffectiveLength: z
    .number({
      required_error: 'RC Effective Length is required',
      invalid_type_error: 'RC Effective Length must be a number',
    })
    .positive(),
  rcRotation: z
    .number({
      required_error: 'RC Rotation is required',
      invalid_type_error: 'RC Rotation must be a number',
    })
    .max(360, 'RC Rotation must be a maximum of 360°')
    .min(-360, 'RC Rotation must be atleast -360°'),
  raRotation: z
    .number({
      required_error: 'RA Rotation is required',
      invalid_type_error: 'RA Rotation must be a number',
    })
    .max(360, 'RA Rotation must be a maximum of 360°')
    .min(-360, 'RA Rotation must be atleast -360°'),
  rwInclination: z
    .number({
      required_error: 'RW Inclination is required',
      invalid_type_error: 'RW Inclination must be a number',
    })
    .max(90, 'RW Inclination must be a maximum of 90°')
    .min(-90, 'RW Inclination must be atleast -90°'),

  // Product Data
  product: z
    .string({ required_error: 'Product is required' })
    .min(3, 'Product must be atleast 3 characters')
    .max(40, 'Product must be a maximum of 40 characters'),
  productNumber: z
    .number({
      required_error: 'Product number is required',
      invalid_type_error: 'Product number must be a number',
    })
    .positive(),
  diameter: z
    .number({
      required_error: 'Diameter is required',
      invalid_type_error: 'Diameter must be a number',
    })
    .positive(),
  totalLength: z
    .number({
      required_error: 'Total length is required',
      invalid_type_error: 'Total length must be a number',
    })
    .positive(),
  electiveLength: z
    .number({
      required_error: 'Elective length is required',
      invalid_type_error: 'Elective length must be a number',
    })
    .positive(),

  // Profile Analysis RA
  hwCenterHeight: z
    .number({
      required_error: 'RA Rotation is required',
      invalid_type_error: 'RA Rotation must be a number',
    })
    .positive(),
  raInclination: z
    .number({
      required_error: 'RA Inclination is required',
      invalid_type_error: 'RA Inclination must be a number',
    })
    .positive(),
  raDresserInclination: z
    .number({
      required_error: 'RA Dresser Inclination is required',
      invalid_type_error: 'RA Dresser Inclination must be a number',
    })
    .positive(),
  dresserHeight: z
    .number({
      required_error: 'Dresser height is required',
      invalid_type_error: 'Dresser height must be a number',
    })
    .positive(),
  dresserPosition: z
    .string({
      required_error: 'Dresser position is required',
      invalid_type_error: 'Dresser position must be a string',
    })
    .min(3)
    .max(20),
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
