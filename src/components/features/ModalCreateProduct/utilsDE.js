import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const createProductValidationSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Bitte geben Sie den Produktnamen ein')
    .max(20, 'Produktname darf maximal 20 Zeichen haben'),
  category: z.string({ required_error: 'Bitte wählen Sie eine Kategorie' }),
  description: z
    .string()
    .nonempty('Bitte geben Sie eine Produktbeschreibung ein')
    .max(150, 'Produktbeschreibung darf maximal 150 Zeichen haben'),
  advantages: z
    .string()
    .nonempty('Bitte geben Sie die Vorteile des Produkts ein')
    .min(5, 'Mindestens 5 Zeichen erforderlich')
    .max(150, 'Vorteile des Produkts dürfen maximal 150 Zeichen haben'),
  pictures: z
    .array(z.object({ file: z.instanceof(File) }))
    .nonempty('Sie müssen mindestens ein Bild hochladen')
    .transform((pictures) => pictures.map(({ file }) => file)),
  documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file)),
});

// Error Handling
const createProductErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Benutzer nicht authentifiziert',
  [ERROR_CODES.FORBIDDEN]: 'Benutzer nicht autorisiert',
  [ERROR_CODES.CONFLICT]: 'Das Produkt wurde bereits erstellt',
};
const createProductDefaultErrorMessageDE =
  'Fehler beim Erstellen des Produkts. Bitte versuchen Sie es später erneut';

export function buildCreateProductErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    createProductErrorMessagesDE[code] || createProductDefaultErrorMessageDE
  );
}

const getCategoriesErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const getCategoriesIdDefaultErrorMessageDE =
  'Ein Fehler ist aufgetreten, während die Kategorien aufgelistet wurden. Bitte versuchen Sie es später erneut';

export function buildGetCategoriesErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getCategoriesErrorMessagesDE[code] || getCategoriesIdDefaultErrorMessageDE
  );
}
