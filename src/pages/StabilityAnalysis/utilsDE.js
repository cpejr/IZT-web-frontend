import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const calculateStabilityAnalysisValidationSchemaDE = z.object({
  // Analysis Data
  rectificationProcess: z
    .string({ required_error: 'Schleifprozess ist erforderlich' })
    .min(3, 'Wählen Sie eine gültige Betriebsoption aus')
    .max(40, 'Schleifprozess darf maximal 40 Zeichen haben'),
  machine: z
    .string({ required_error: 'Maschine ist erforderlich' })
    .min(3, 'Maschine muss mindestens 3 Zeichen haben')
    .max(40, 'Maschine darf maximal 40 Zeichen haben'),
  machineNumber: z
    .number({
      required_error: 'Maschinennummer ist erforderlich',
      invalid_type_error: 'Maschinennummer muss eine Zahl sein',
    })
    .positive('Maschinennummer muss positiv sein'),
  operation: z
    .string({ required_error: 'Betrieb ist erforderlich' })
    .min(3, 'Wählen Sie eine gültige Betriebsoption aus')
    .max(40, 'Betrieb darf maximal 40 Zeichen haben'),
  department: z
    .string({ required_error: 'Abteilung ist erforderlich' })
    .min(3, 'Abteilung muss mindestens 3 Zeichen haben')
    .max(40, 'Abteilung darf maximal 40 Zeichen haben'),
  responsiblePerson: z
    .string({ required_error: 'Verantwortliche Person ist erforderlich' })
    .min(3, 'Verantwortliche Person muss mindestens 3 Zeichen haben')
    .max(40, 'Verantwortliche Person darf maximal 40 Zeichen haben'),

  // Machine Data
  rcMaxDiameter: z
    .number({
      required_error: 'Maximaler RC-Durchmesser ist erforderlich',
      invalid_type_error: 'Maximaler RC-Durchmesser muss eine Zahl sein',
    })
    .positive('Maximaler RC-Durchmesser muss positiv sein'),
  rcMinDiameter: z
    .number({
      required_error: 'Minimaler RC-Durchmesser ist erforderlich',
      invalid_type_error: 'Minimaler RC-Durchmesser muss eine Zahl sein',
    })
    .positive('Minimaler RC-Durchmesser muss positiv sein'),
  raDiameter: z
    .number({
      required_error: 'RA-Durchmesser ist erforderlich',
      invalid_type_error: 'RA-Durchmesser muss eine Zahl sein',
    })
    .positive('RA-Durchmesser muss positiv sein'),
  rcLength: z
    .number({
      required_error: 'RC-Länge ist erforderlich',
      invalid_type_error: 'RC-Länge muss eine Zahl sein',
    })
    .positive('RC-Länge muss positiv sein'),
  raLength: z
    .number({
      required_error: 'RA-Länge ist erforderlich',
      invalid_type_error: 'RA-Länge muss eine Zahl sein',
    })
    .positive('RA-Länge muss positiv sein'),
  rcEffectiveLength: z
    .number({
      required_error: 'Effektive RC-Länge ist erforderlich',
      invalid_type_error: 'Effektive RC-Länge muss eine Zahl sein',
    })
    .positive('Effektive RC-Länge muss positiv sein'),
  rcRotation: z
    .number({
      required_error: 'RC-Rotation ist erforderlich',
      invalid_type_error: 'RC-Rotation muss eine Zahl sein',
    })
    .max(360, 'RC-Rotation darf maximal 360° haben')
    .min(-360, 'RC-Rotation muss mindestens -360° haben'),
  raRotation: z
    .number({
      required_error: 'RA-Rotation ist erforderlich',
      invalid_type_error: 'RA-Rotation muss eine Zahl sein',
    })
    .max(360, 'RA-Rotation darf maximal 360° haben')
    .min(-360, 'RA-Rotation muss mindestens -360° haben'),
  rwInclination: z
    .number({
      required_error: 'RW-Inklination ist erforderlich',
      invalid_type_error: 'RW-Inklination muss eine Zahl sein',
    })
    .max(90, 'RW-Inklination darf maximal 90° haben')
    .min(-90, 'RW-Inklination muss mindestens -90° haben'),

  // Product Data
  product: z
    .string({ required_error: 'Produkt ist erforderlich' })
    .min(3, 'Produkt muss mindestens 3 Zeichen haben')
    .max(40, 'Produkt darf maximal 40 Zeichen haben'),
  productNumber: z
    .number({
      required_error: 'Produktnummer ist erforderlich',
      invalid_type_error: 'Produktnummer muss eine Zahl sein',
    })
    .positive('Produktnummer muss positiv sein'),
  diameter: z
    .number({
      required_error: 'Durchmesser ist erforderlich',
      invalid_type_error: 'Durchmesser muss eine Zahl sein',
    })
    .positive('Durchmesser muss positiv sein'),
  totalLength: z
    .number({
      required_error: 'Gesamtlänge ist erforderlich',
      invalid_type_error: 'Gesamtlänge muss eine Zahl sein',
    })
    .positive('Gesamtlänge muss positiv sein'),
  electiveLength: z
    .number({
      required_error: 'Wahllänge ist erforderlich',
      invalid_type_error: 'Wahllänge muss eine Zahl sein',
    })
    .positive('Wahllänge muss positiv sein'),

  allowance: z
    .number({
      required_error: 'Zulage ist erforderlich',
      invalid_type_error: 'Zulage muss eine Zahl sein',
    })
    .positive('Zulage muss positiv sein'),
});

// Error Handling
const calculateStabilityAnalysisErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const calculateStabilityAnalysisDefaultErrorMessageDE =
  'Bei der Berechnung der Stabilitätsanalyse ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';

export function buildCalculateStabilityAnalysisErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateStabilityAnalysisErrorMessagesDE[code] ||
    calculateStabilityAnalysisDefaultErrorMessageDE
  );
}
