import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

// Form Validation
export const editProductValidationSchemaDE = z.object({
  name: z
    .string()
    .nonempty('Bitte geben Sie den Produktnamen ein')
    .max(20, 'Produktname darf maximal 20 Zeichen haben'),
  category: z.string({
    required_error: 'Die Produktkategorie-ID ist erforderlich',
  }), // Hier muss nur die Kategorie-ID übergeben werden
  description: z
    .string()
    .nonempty('Bitte geben Sie eine Produktbeschreibung ein')
    .max(150, 'Produktbeschreibung darf maximal 150 Zeichen haben'),
  advantages: z
    .string()
    .nonempty('Bitte geben Sie die Vorteile des Produkts ein')
    .max(150, 'Vorteile des Produkts dürfen maximal 150 Zeichen haben'),
  pictures: z
    .array(
      z.object({
        file: z.instanceof(File).or(
          z.object({
            name: z.string(),
            mimeType: z.string(),
            url: z.string(),
            key: z.string(),
          })
        ),
      })
    )
    .nonempty('Sie müssen mindestens ein Foto hochladen')
    .transform((pictures) => pictures.map(({ file }) => file)),
    documents: z
    .array(z.object({ file: z.instanceof(File) }))
    .default([])
    .transform((documents) => documents.map(({ file }) => file))
    .optional(),
});

// Error Handling
const editProductErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
  [ERROR_CODES.UNAUTHORIZED]: 'Nicht authentifizierter Benutzer',
  [ERROR_CODES.FORBIDDEN]: 'Nicht autorisierter Benutzer',
  [ERROR_CODES.CONFLICT]: 'Das Produkt existiert bereits',
};
const editProductDefaultErrorMessageDE =
  'Fehler beim Erstellen des Produkts. Bitte versuchen Sie es später erneut';
export function buildEditProductErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return editProductErrorMessagesDE[code] || editProductDefaultErrorMessageDE;
}

const getCategoriesErrorMessagesDE = {
  [ERROR_CODES.BAD_REQUEST]: 'Ungültige Daten',
};
const getCategoriesDefaultErrorMessageDE =
  'Fehler beim Abrufen der verfügbaren Kategorien. Bitte versuchen Sie es später erneut';
export function buildGetCategoriesErrorMessageDE(err) {
  const code = err?.response?.data?.httpCode;
  return (
    getCategoriesErrorMessagesDE[code] || getCategoriesDefaultErrorMessageDE
  );
}
