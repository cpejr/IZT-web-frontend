import { z } from 'zod';

import { ERROR_CODES } from '../../utils/constants';

// Form Validation
export const calculateProfileAnalysisValidationSchemaDE = z.object({
  // Analyse-Daten
  rectificationProcess: z
    .string({ required_error: 'Schleifprozess ist erforderlich' })
    .min(3, 'Schleifprozess sollte mindestens 3 Zeichen haben')
    .max(40, 'Schleifprozess sollte höchstens 40 Zeichen haben'),
  machine: z
    .string({ required_error: 'Maschine ist erforderlich' })
    .min(3, 'Maschine sollte mindestens 3 Zeichen haben')
    .max(40, 'Maschine sollte höchstens 40 Zeichen haben'),
  machineNumber: z
    .number({
      required_error: 'Maschinennummer ist erforderlich',
      invalid_type_error: 'Maschinennummer sollte eine Zahl sein',
    })
    .positive('Maschinennummer sollte positiv sein'),
  operation: z
    .string({ required_error: 'Betrieb ist erforderlich' })
    .min(3, 'Betrieb sollte mindestens 3 Zeichen haben')
    .max(40, 'Betrieb sollte höchstens 40 Zeichen haben'),
  department: z
    .string({ required_error: 'Abteilung ist erforderlich' })
    .min(3, 'Abteilung sollte mindestens 3 Zeichen haben')
    .max(40, 'Abteilung sollte höchstens 40 Zeichen haben'),
  responsiblePerson: z
    .string({ required_error: 'Verantwortliche Person ist erforderlich' })
    .min(3, 'Verantwortliche Person sollte mindestens 3 Zeichen haben')
    .max(40, 'Verantwortliche Person sollte höchstens 40 Zeichen haben'),

  // Maschinendaten
  rcMaxDiameter: z
    .number({
      required_error: 'RC Maximaler Durchmesser ist erforderlich',
      invalid_type_error: 'RC Maximaler Durchmesser sollte eine Zahl sein',
    })
    .positive('RC Maximaler Durchmesser sollte positiv sein'),
  rcMinDiameter: z
    .number({
      required_error: 'RC Minimaler Durchmesser ist erforderlich',
      invalid_type_error: 'RC Minimaler Durchmesser sollte eine Zahl sein',
    })
    .positive('RC Minimaler Durchmesser sollte positiv sein'),
  raDiameter: z
    .number({
      required_error: 'RA Durchmesser ist erforderlich',
      invalid_type_error: 'RA Durchmesser sollte eine Zahl sein',
    })
    .positive('RA Durchmesser sollte positiv sein'),
  rcLength: z
    .number({
      required_error: 'RC Länge ist erforderlich',
      invalid_type_error: 'RC Länge sollte eine Zahl sein',
    })
    .positive('RC Länge sollte positiv sein'),
  raLength: z
    .number({
      required_error: 'RA Länge ist erforderlich',
      invalid_type_error: 'RA Länge sollte eine Zahl sein',
    })
    .positive('RA Länge sollte positiv sein'),
  rcEffectiveLength: z
    .number({
      required_error: 'RC Effektive Länge ist erforderlich',
      invalid_type_error: 'RC Effektive Länge sollte eine Zahl sein',
    })
    .positive('RC Effektive Länge sollte positiv sein'),
  rcRotation: z
    .number({
      required_error: 'RC Rotation ist erforderlich',
      invalid_type_error: 'RC Rotation sollte eine Zahl sein',
    })
    .max(360, 'RC Rotation sollte höchstens 360° haben')
    .min(-360, 'RC Rotation sollte mindestens -360° haben'),
  raRotation: z
    .number({
      required_error: 'RA Rotation ist erforderlich',
      invalid_type_error: 'RA Rotation sollte eine Zahl sein',
    })
    .max(360, 'RA Rotation sollte höchstens 360° haben')
    .min(-360, 'RA Rotation sollte mindestens -360° haben'),
  rwInclination: z
    .number({
      required_error: 'RW Neigung ist erforderlich',
      invalid_type_error: 'RW Neigung sollte eine Zahl sein',
    })
    .max(90, 'RW Neigung sollte höchstens 90° haben')
    .min(-90, 'RW Neigung sollte mindestens -90° haben'),

  // Produktdaten
  product: z
    .string({ required_error: 'Produkt ist erforderlich' })
    .min(3, 'Produkt sollte mindestens 3 Zeichen haben')
    .max(40, 'Produkt sollte höchstens 40 Zeichen haben'),
  productNumber: z
    .number({
      required_error: 'Produktnummer ist erforderlich',
      invalid_type_error: 'Produktnummer sollte eine Zahl sein',
    })
    .positive('Produktnummer sollte positiv sein'),
  diameter: z
    .number({
      required_error: 'Durchmesser ist erforderlich',
      invalid_type_error: 'Durchmesser sollte eine Zahl sein',
    })
    .positive('Durchmesser sollte positiv sein'),
  totalLength: z
    .number({
      required_error: 'Gesamtlänge ist erforderlich',
      invalid_type_error: 'Gesamtlänge sollte eine Zahl sein',
    })
    .positive('Gesamtlänge sollte positiv sein'),
  electiveLength: z
    .number({
      required_error: 'Wahllänge ist erforderlich',
      invalid_type_error: 'Wahllänge sollte eine Zahl sein',
    })
    .positive('Wahllänge sollte positiv sein'),
  allowance: z
    .number({
      required_error: 'Zulage ist erforderlich',
      invalid_type_error: 'Zulage sollte eine Zahl sein',
    })
    .positive('Zulage sollte positiv sein'),

  // RA Profilanalyse
  hwCenterHeight: z
    .number({
      required_error: 'RA Profilzentrumshöhe ist erforderlich',
      invalid_type_error: 'RA Profilzentrumshöhe sollte eine Zahl sein',
    })
    .positive('RA Profilzentrumshöhe sollte positiv sein'),
  raInclination: z
    .number({
      required_error: 'RA Neigung ist erforderlich',
      invalid_type_error: 'RA Neigung sollte eine Zahl sein',
    })
    .positive('RA Neigung sollte positiv sein'),
  raDresserInclination: z
    .number({
      required_error: 'RA Dresser Neigung ist erforderlich',
      invalid_type_error: 'RA Dresser Neigung sollte eine Zahl sein',
    })
    .positive('RA Dresser Neigung sollte positiv sein'),
  dresserHeight: z
    .number({
      required_error: 'Dresser Höhe ist erforderlich',
      invalid_type_error: 'Dresser Höhe sollte eine Zahl sein',
    })
    .positive('Dresser Höhe sollte positiv sein'),
  dresserPosition: z
    .string({
      required_error: 'Dresser Position ist erforderlich',
      invalid_type_error: 'Dresser Position sollte ein String sein',
    })
    .min(3, 'Dresser Position sollte mindestens 3 Zeichen haben')
    .max(20, 'Dresser Position sollte höchstens 20 Zeichen haben'),
});

// Fehlerbehandlung
const calculateProfileAnalysisErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const calculateProfileAnalysisDefaultErrorMessageDE =
  'Bei der Berechnung der Profilanalyse ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut';

export function buildCalculateProfileAnalysisErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    calculateProfileAnalysisErrorMessagesDE[code] ||
    calculateProfileAnalysisDefaultErrorMessageDE
  );
}
