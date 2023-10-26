import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const calculateProfileAnalysisValidationSchemaEN = z.object({
  // Analysis Data
  rectificationProcess: z
    .string({ required_error: 'Grinding Process is required' })
    .min(3, 'Grinding Process should have at least 3 characters')
    .max(40, 'Grinding Process should have at most 40 characters'),
  machine: z
    .string({ required_error: 'Machine is required' })
    .min(3, 'Machine should have at least 3 characters')
    .max(40, 'Machine should have at most 40 characters'),
  machineNumber: z
    .number({
      required_error: 'Machine Number is required',
      invalid_type_error: 'Machine Number should be a number',
    })
    .positive('Machine Number should be positive'),
  operation: z
    .string({ required_error: 'Operation is required' })
    .min(3, 'Operation should have at least 3 characters')
    .max(40, 'Operation should have at most 40 characters'),
  department: z
    .string({ required_error: 'Department is required' })
    .min(3, 'Department should have at least 3 characters')
    .max(40, 'Department should have at most 40 characters'),
  responsiblePerson: z
    .string({ required_error: 'Responsible Person is required' })
    .min(3, 'Responsible Person should have at least 3 characters')
    .max(40, 'Responsible Person should have at most 40 characters'),

  // Machine Data
  rcMaxDiameter: z
    .number({
      required_error: 'RC Max Diameter is required',
      invalid_type_error: 'RC Max Diameter should be a number',
    })
    .positive('RC Max Diameter should be positive'),
  rcMinDiameter: z
    .number({
      required_error: 'RC Min Diameter is required',
      invalid_type_error: 'RC Min Diameter should be a number',
    })
    .positive('RC Min Diameter should be positive'),
  raDiameter: z
    .number({
      required_error: 'RA Diameter is required',
      invalid_type_error: 'RA Diameter should be a number',
    })
    .positive('RA Diameter should be positive'),
  rcLength: z
    .number({
      required_error: 'RC Length is required',
      invalid_type_error: 'RC Length should be a number',
    })
    .positive('RC Length should be positive'),
  raLength: z
    .number({
      required_error: 'RA Length is required',
      invalid_type_error: 'RA Length should be a number',
    })
    .positive('RA Length should be positive'),
  rcEffectiveLength: z
    .number({
      required_error: 'RC Effective Length is required',
      invalid_type_error: 'RC Effective Length should be a number',
    })
    .positive('RC Effective Length should be positive'),
  rcRotation: z
    .number({
      required_error: 'RC Rotation is required',
      invalid_type_error: 'RC Rotation should be a number',
    })
    .max(360, 'RC Rotation should have at most 360°')
    .min(-360, 'RC Rotation should have at least -360°'),
  raRotation: z
    .number({
      required_error: 'RA Rotation is required',
      invalid_type_error: 'RA Rotation should be a number',
    })
    .max(360, 'RA Rotation should have at most 360°')
    .min(-360, 'RA Rotation should have at least -360°'),
  rwInclination: z
    .number({
      required_error: 'RW Inclination is required',
      invalid_type_error: 'RW Inclination should be a number',
    })
    .max(90, 'RW Inclination should have at most 90°')
    .min(-90, 'RW Inclination should have at least -90°'),

  // Product Data
  product: z
    .string({ required_error: 'Product is required' })
    .min(3, 'Product should have at least 3 characters')
    .max(40, 'Product should have at most 40 characters'),
  productNumber: z
    .number({
      required_error: 'Product Number is required',
      invalid_type_error: 'Product Number should be a number',
    })
    .positive('Product Number should be positive'),
  diameter: z
    .number({
      required_error: 'Diameter is required',
      invalid_type_error: 'Diameter should be a number',
    })
    .positive('Diameter should be positive'),
  totalLength: z
    .number({
      required_error: 'Total Length is required',
      invalid_type_error: 'Total Length should be a number',
    })
    .positive('Total Length should be positive'),
  electiveLength: z
    .number({
      required_error: 'Elective Length is required',
      invalid_type_error: 'Elective Length should be a number',
    })
    .positive('Elective Length should be positive'),
  allowance: z
    .number({
      required_error: 'Allowance is required',
      invalid_type_error: 'Allowance should be a number',
    })
    .positive('Allowance should be positive'),

  // RA Profile Analysis
  hwCenterHeight: z
    .number({
      required_error: 'RA Profile Center Height is required',
      invalid_type_error: 'RA Profile Center Height should be a number',
    })
    .positive('RA Profile Center Height should be positive'),
  raInclination: z
    .number({
      required_error: 'RA Inclination is required',
      invalid_type_error: 'RA Inclination should be a number',
    })
    .positive('RA Inclination should be positive'),
  raDresserInclination: z
    .number({
      required_error: 'RA Dresser Inclination is required',
      invalid_type_error: 'RA Dresser Inclination should be a number',
    })
    .positive('RA Dresser Inclination should be positive'),
  dresserHeight: z
    .number({
      required_error: 'Dresser Height is required',
      invalid_type_error: 'Dresser Height should be a number',
    })
    .positive('Dresser Height should be positive'),
  dresserPosition: z
    .string({
      required_error: 'Dresser Position is required',
      invalid_type_error: 'Dresser Position should be a string',
    })
    .min(3, 'Dresser Position should have at least 3 characters')
    .max(20, 'Dresser Position should have at most 20 characters'),
  raRotationnr: z
    .number({
      required_error: 'RA Rotation (nr) is required',
      invalid_type_error: 'RA Rotation (nr) must be a number',
    })
    .positive('RA Rotation (nr) must be a positive number'),
  heightCenters: z
    .number({
      required_error: 'Hight between centers is required',
      invalid_type_error: 'Hight between centers  must be a number',
    })
    .positive(),
  angleTangency: z
    .number({
      required_error: 'Angle of tangencia(y) is required',
      invalid_type_error: 'Angle of tangencia(y) must be a number',
    })
    .positive(),
  angleRuler: z
    .number({
      required_error: 'Angle of rule is required',
      invalid_type_error: 'Angle of rule must be a number',
    })
    .positive(),
});

// Error Handling
const calculateProfileAnalysisErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const calculateProfileAnalysisDefaultErrorMessageEN =
  'An error occurred while calculating Profile Analysis. Please try again later';

export function buildCalculateProfileAnalysisErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateProfileAnalysisErrorMessagesEN[code] ||
    calculateProfileAnalysisDefaultErrorMessageEN
  );
}
