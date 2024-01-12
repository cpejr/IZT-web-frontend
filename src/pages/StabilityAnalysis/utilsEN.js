import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const calculateStabilityAnalysisValidationSchemaEN = z.object({
  // Analysis Data
  rectificationProcess: z
    .string({ required_error: 'Rectification Process is mandatory' })
    .min(3, 'Select a valid operation option')
    .max(40, 'Rectification Process must have a maximum of 40 characters'),
  machine: z
    .string({ required_error: 'Machine is mandatory' })
    .min(3, 'Machine must have at least 3 characters')
    .max(40, 'Machine must have a maximum of 40 characters'),
  machineNumber: z
    .number({
      required_error: 'Machine number is mandatory',
      invalid_type_error: 'Machine number must be a number',
    })
    .positive('Machine number must be positive'),
  operation: z
    .string({ required_error: 'Operation is mandatory' })
    .min(3, 'Select a valid operation option')
    .max(40, 'Operation must have a maximum of 40 characters'),
  department: z
    .string({ required_error: 'Department is mandatory' })
    .min(3, 'Department must have at least 3 characters')
    .max(40, 'Department must have a maximum of 40 characters'),
  responsiblePerson: z
    .string({ required_error: 'Responsible person is mandatory' })
    .min(3, 'Responsible person must have at least 3 characters')
    .max(40, 'Responsible person must have a maximum of 40 characters'),

  // Machine Data
  rcMaxDiameter: z
    .number({
      required_error: 'Maximum RC Diameter is mandatory',
      invalid_type_error: 'Maximum RC Diameter must be a number',
    })
    .positive('Maximum RC Diameter must be positive'),
  rcMinDiameter: z
    .number({
      required_error: 'Minimum RC Diameter is mandatory',
      invalid_type_error: 'Minimum RC Diameter must be a number',
    })
    .positive('Minimum RC Diameter must be positive'),
  raDiameter: z
    .number({
      required_error: 'RA Diameter is mandatory',
      invalid_type_error: 'RA Diameter must be a number',
    })
    .positive('RA Diameter must be positive'),
  rcLength: z
    .number({
      required_error: 'RC Length is mandatory',
      invalid_type_error: 'RC Length must be a number',
    })
    .positive('RC Length must be positive'),
  raLength: z
    .number({
      required_error: 'RA Length is mandatory',
      invalid_type_error: 'RA Length must be a number',
    })
    .positive('RA Length must be positive'),
  rcEffectiveLength: z
    .number({
      required_error: 'Effective RC Length is mandatory',
      invalid_type_error: 'Effective RC Length must be a number',
    })
    .positive('Effective RC Length must be positive'),
  rcRotation: z
    .number({
      required_error: 'RC Rotation is mandatory',
      invalid_type_error: 'RC Rotation must be a number',
    })
    .max(360, 'RC Rotation must have a maximum of 360°')
    .min(-360, 'RC Rotation must have at least -360°'),
  raRotation: z
    .number({
      required_error: 'RA Rotation is mandatory',
      invalid_type_error: 'RA Rotation must be a number',
    })
    .max(360, 'RA Rotation must have a maximum of 360°')
    .min(-360, 'RA Rotation must have at least -360°'),
  rwInclination: z
    .number({
      required_error: 'RW Inclination is mandatory',
      invalid_type_error: 'RW Inclination must be a number',
    })
    .max(90, 'RW Inclination must have a maximum of 90°')
    .min(-90, 'RW Inclination must have at least -90°'),

  // Product Data
  product: z
    .string({ required_error: 'Product is mandatory' })
    .min(3, 'Product must have at least 3 characters')
    .max(40, 'Product must have a maximum of 40 characters'),
  productNumber: z
    .number({
      required_error: 'Product Number is mandatory',
      invalid_type_error: 'Product Number must be a number',
    })
    .positive('Product Number must be positive'),
  diameter: z
    .number({
      required_error: 'Diameter is mandatory',
      invalid_type_error: 'Diameter must be a number',
    })
    .positive('Diameter must be positive'),
  totalLength: z
    .number({
      required_error: 'Total Length is mandatory',
      invalid_type_error: 'Total Length must be a number',
    })
    .positive('Total Length must be positive'),
  electiveLength: z
    .number({
      required_error: 'Elective Length is mandatory',
      invalid_type_error: 'Elective Length must be a number',
    })
    .positive('Elective Length must be positive'),

  allowance: z
    .number({
      required_error: 'Allowance is mandatory',
      invalid_type_error: 'Allowance must be a number',
    })
    .positive('Allowance must be positive'),
});

// Error Handling
const calculateStabilityAnalysisErrorMessagesEN = {
  [ERROR_CODES.BAD_REQUEST]: 'Invalid data',
};
const calculateStabilityAnalysisDefaultErrorMessageEN =
  'There was an error in the Stability Analysis calculation. Please try again later';

export function buildCalculateStabilityAnalysisErrorMessageEN(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateStabilityAnalysisErrorMessagesEN[code] ||
    calculateStabilityAnalysisDefaultErrorMessageEN
  );
}
